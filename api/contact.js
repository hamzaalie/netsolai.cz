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
      subject: `New enquiry from ${name} — Netsol AI`,
      textContent: `New enquiry — Netsol AI\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry — Netsol AI</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" style="max-width:560px;background:#111118;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">

          <tr>
            <td style="background:linear-gradient(135deg,#1a1a2e 0%,#0f0f1a 100%);padding:32px 40px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px 0;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#6c6cff;">New Enquiry</p>
                    <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">Netsol AI</h1>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <span style="display:inline-block;background:rgba(108,108,255,0.15);border:1px solid rgba(108,108,255,0.3);border-radius:20px;padding:4px 12px;font-size:11px;font-weight:600;color:#8f8fff;letter-spacing:0.5px;">CONTACT FORM</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:32px 40px;">
              <p style="margin:0 0 24px 0;font-size:14px;color:#9090a0;line-height:1.6;">
                Someone has submitted an enquiry through the website contact form. Details below.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                    <p style="margin:0 0 2px 0;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#6060a0;">Name</p>
                    <p style="margin:0;font-size:15px;color:#e8e8f0;font-weight:500;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                    <p style="margin:0 0 2px 0;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#6060a0;">Email</p>
                    <p style="margin:0;font-size:15px;">
                      <a href="mailto:${email}" style="color:#8f8fff;text-decoration:none;font-weight:500;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                    <p style="margin:0 0 2px 0;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#6060a0;">Subject</p>
                    <p style="margin:0;font-size:15px;color:#e8e8f0;font-weight:500;">${subject}</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 8px 0;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#6060a0;">Message</p>
              <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:16px 20px;">
                <p style="margin:0;font-size:15px;color:#d0d0e0;line-height:1.7;white-space:pre-wrap;">${message.replace(/\n/g, '<br/>')}</p>
              </div>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#5c5cff,#8f8fff);color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 28px;border-radius:8px;letter-spacing:0.2px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);background:rgba(0,0,0,0.2);">
              <p style="margin:0;font-size:12px;color:#505060;text-align:center;line-height:1.5;">
                This email was sent from the contact form at
                <a href="https://netsolai.cz" style="color:#6c6cff;text-decoration:none;">netsolai.cz</a>
                &nbsp;·&nbsp; Netsol AI s.r.o., Školská 660/3, Praha 1
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
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
