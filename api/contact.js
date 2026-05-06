const BREVO_URL = 'https://api.brevo.com/v3/smtp/email';

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const sendJson = (res, statusCode, payload) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
};

const readBody = async (req) => {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  if (typeof req.body === 'string') {
    return JSON.parse(req.body);
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString('utf-8');
  return raw ? JSON.parse(raw) : {};
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Method not allowed' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return sendJson(res, 500, { error: 'Missing BREVO_API_KEY' });
  }

  try {
    const body = await readBody(req);
    const name = body?.name?.trim();
    const email = body?.email?.trim();
    const subject = body?.subject?.trim() || 'New contact form submission';
    const message = body?.message?.trim();

    if (!name || !email || !message || !isValidEmail(email)) {
      return sendJson(res, 400, { error: 'Invalid form data' });
    }

    const brevoPayload = {
      sender: {
        name: 'Netsol AI Website',
        email: 'info@netsolai.cz',
      },
      to: [
        {
          email: 'info@netsolai.cz',
          name: 'Netsol AI',
        },
      ],
      replyTo: {
        email,
        name,
      },
      subject,
      textContent: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      htmlContent: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    const brevoResponse = await fetch(BREVO_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(brevoPayload),
    });

    if (!brevoResponse.ok) {
      const errorText = await brevoResponse.text();
      return sendJson(res, 502, { error: 'Brevo request failed', details: errorText });
    }

    return sendJson(res, 200, { ok: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return sendJson(res, 500, { error: 'Unexpected server error' });
  }
}
