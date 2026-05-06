import { useEffect } from 'react';
import SiteLayout from '../components/SiteLayout';

function useServicesInit() {
  useEffect(() => {
    document.querySelectorAll('.nai-svc .nai-svc-title').forEach(h => {
      h.querySelectorAll('.nai-char').forEach((c, i) => c.style.setProperty('--i', i));
    });

    const blocks = document.querySelectorAll('.nai-svc');
    let io;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(es => {
        es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
      }, { threshold: 0.2 });
      blocks.forEach(b => io.observe(b));
    } else {
      blocks.forEach(b => b.classList.add('is-in'));
    }

    const ios = [];
    document.querySelectorAll('.nai-svc [data-target]').forEach(el => {
      const run = () => {
        const target = parseInt(el.dataset.target, 10);
        let cur = 0;
        const step = Math.max(1, Math.ceil(target / 60));
        const iv = setInterval(() => {
          cur += step;
          if (cur >= target) { cur = target; clearInterval(iv); }
          el.textContent = cur.toLocaleString();
        }, 30);
      };
      if ('IntersectionObserver' in window) {
        const io2 = new IntersectionObserver(es => {
          es.forEach(e => { if (e.isIntersecting) { run(); io2.disconnect(); } });
        }, { threshold: 0.4 });
        io2.observe(el);
        ios.push(io2);
      } else {
        run();
      }
    });

    return () => {
      if (io) io.disconnect();
      ios.forEach(c => c.disconnect());
    };
  }, []);
}

/* ── Service HTML blocks (style/script tags stripped, href="#" → /contact) ── */

const SVC_AUTO = `<div class="nai-svc">
  <div class="nai-svc-grid">
    <div class="nai-svc-left">
      <div class="nai-svc-head">
        <div class="nai-ico nai-ico-auto">
          <svg viewBox="0 0 32 32" fill="none">
            <g class="nai-ico-traces" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
              <path d="M16 3v4"/><path d="M16 25v4"/><path d="M3 16h4"/><path d="M25 16h4"/>
              <path d="M6.5 6.5l2.8 2.8"/><path d="M22.7 22.7l2.8 2.8"/>
              <path d="M25.5 6.5l-2.8 2.8"/><path d="M9.3 22.7l-2.8 2.8"/>
            </g>
            <g class="nai-ico-dots" fill="currentColor">
              <circle cx="16" cy="3" r="1.2"/><circle cx="16" cy="29" r="1.2"/>
              <circle cx="3" cy="16" r="1.2"/><circle cx="29" cy="16" r="1.2"/>
            </g>
            <rect x="8" y="8" width="16" height="16" rx="3.5" stroke="currentColor" stroke-width="1.6" fill="rgba(156,112,255,0.12)"/>
            <rect x="11" y="11" width="10" height="10" rx="1.8" stroke="currentColor" stroke-width="1.2" fill="rgba(156,112,255,0.22)" class="nai-ico-inner"/>
            <text x="16" y="18.4" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="6" font-weight="800" fill="#9c70ff" letter-spacing="0.3">AI</text>
            <path class="nai-ico-spark" d="M25 8.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z" fill="#9c70ff"/>
          </svg>
        </div>
        <span class="nai-svc-tag nai-fade-up">AI Automation Systems</span>
      </div>
      <h3 class="nai-svc-title">
        <span class="nai-line"><span class="nai-word"><span class="nai-char">A</span><span class="nai-char">u</span><span class="nai-char">t</span><span class="nai-char">o</span><span class="nai-char">m</span><span class="nai-char">a</span><span class="nai-char">t</span><span class="nai-char">e</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">h</span><span class="nai-char">e</span></span> <span class="nai-word"><span class="nai-char">b</span><span class="nai-char">u</span><span class="nai-char">s</span><span class="nai-char">y</span><span class="nai-char">w</span><span class="nai-char">o</span><span class="nai-char">r</span><span class="nai-char">k</span><span class="nai-char">.</span></span></span>
        <span class="nai-line nai-line2"><span class="nai-word"><span class="nai-char">S</span><span class="nai-char">c</span><span class="nai-char">a</span><span class="nai-char">l</span><span class="nai-char">e</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">h</span><span class="nai-char">e</span></span> <span class="nai-word"><span class="nai-char">o</span><span class="nai-char">u</span><span class="nai-char">t</span><span class="nai-char">p</span><span class="nai-char">u</span><span class="nai-char">t</span><span class="nai-char">.</span></span></span>
      </h3>
      <p class="nai-svc-sub nai-fade-up">Custom AI agents and workflows that run your operations 24/7.</p>
      <p class="nai-svc-desc nai-fade-up">We build intelligent automation systems that handle repetitive tasks, connect your tools, and make decisions in real time — so your team can focus on growth instead of grunt work.</p>
      <ul class="nai-svc-list">
        <li class="nai-fade-up"><i></i>AI agents trained on your business logic</li>
        <li class="nai-fade-up"><i></i>Seamless integration with your existing stack</li>
        <li class="nai-fade-up"><i></i>24/7 autonomous task execution</li>
        <li class="nai-fade-up"><i></i>Measurable time and cost savings</li>
      </ul>
      <div class="nai-btn-wrap nai-fade-up"><a href="/contact" class="nai-pr-btn"><span class="text" data-back="Automate my workflow" data-front="Automate my workflow"></span><span class="icon"><i aria-hidden="true" class="fa-solid fa-arrow-right"></i><i aria-hidden="true" class="fa-solid fa-arrow-right"></i></span></a></div>
    </div>
    <div class="nai-svc-right">
      <div class="nai-auto">
        <div class="nai-auto-frame">
          <div class="nai-auto-bar"><div class="nai-auto-dots"><i></i><i></i><i></i></div><span class="nai-auto-title">automation.flow</span><span class="nai-auto-live"><em></em>LIVE</span></div>
          <div class="nai-auto-canvas">
            <svg class="nai-auto-svg" viewBox="0 0 320 160" preserveAspectRatio="none">
              <defs><linearGradient id="naiGrad" x1="0" x2="1"><stop offset="0" stop-color="#9c70ff" stop-opacity="0"/><stop offset="0.5" stop-color="#9c70ff" stop-opacity="1"/><stop offset="1" stop-color="#9c70ff" stop-opacity="0"/></linearGradient></defs>
              <path d="M 60 50 Q 110 50 140 80" class="nai-auto-path"/>
              <path d="M 200 80 Q 240 60 270 45" class="nai-auto-path nai-auto-path2"/>
              <path d="M 200 80 Q 240 100 270 115" class="nai-auto-path nai-auto-path3"/>
            </svg>
            <div class="nai-auto-node nai-auto-trigger"><div class="nai-auto-icon">⚡</div><div class="nai-auto-label"><b>Trigger</b><span>New email</span></div><div class="nai-auto-ping"></div></div>
            <div class="nai-auto-node nai-auto-agent"><div class="nai-auto-core"><div class="nai-auto-ring"></div><div class="nai-auto-ring nai-auto-ring2"></div><div class="nai-auto-brain">AI</div></div><div class="nai-auto-label nai-auto-label-c"><b>AI Agent</b><span class="nai-auto-thinking"><i></i><i></i><i></i></span></div></div>
            <div class="nai-auto-node nai-auto-action nai-auto-a1"><div class="nai-auto-icon nai-auto-iconSm">✓</div><span>Reply sent</span></div>
            <div class="nai-auto-node nai-auto-action nai-auto-a2"><div class="nai-auto-icon nai-auto-iconSm">↻</div><span>CRM updated</span></div>
          </div>
          <div class="nai-auto-foot"><div class="nai-auto-stat"><span>Tasks automated</span><b class="nai-auto-count" data-target="1284">0</b></div><div class="nai-auto-stat nai-auto-statR"><span>Time saved</span><b>47h<em>/wk</em></b></div></div>
          <div class="nai-auto-orb"></div>
        </div>
      </div>
    </div>
  </div>
</div>`;

const SVC_HC = `<div class="nai-svc nai-svc-hc">
  <div class="nai-svc-grid">
    <div class="nai-svc-left">
      <div class="nai-svc-head">
        <div class="nai-ico nai-ico-hc">
          <svg viewBox="0 0 32 32" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path class="nai-ico-hc-cross" d="M16 6 V26 M6 16 H26" stroke="currentColor" stroke-width="1.6" opacity=".25"/>
            <path class="nai-ico-hc-ecg" d="M3 16 H10 L12 10 L14 22 L16 13 L18 19 L20 16 H29" stroke="#9c70ff" stroke-width="1.8" fill="none"/>
            <circle class="nai-ico-hc-dot" cx="29" cy="16" r="1.6" fill="#9c70ff"/>
          </svg>
        </div>
        <span class="nai-svc-tag nai-fade-up">AI in Healthcare</span>
      </div>
      <h3 class="nai-svc-title">
        <span class="nai-line"><span class="nai-word"><span class="nai-char">C</span><span class="nai-char">a</span><span class="nai-char">r</span><span class="nai-char">e</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">h</span><span class="nai-char">a</span><span class="nai-char">t</span></span> <span class="nai-word"><span class="nai-char">s</span><span class="nai-char">c</span><span class="nai-char">a</span><span class="nai-char">l</span><span class="nai-char">e</span><span class="nai-char">s</span><span class="nai-char">.</span></span></span>
        <span class="nai-line nai-line2"><span class="nai-word"><span class="nai-char">A</span><span class="nai-char">I</span></span> <span class="nai-word"><span class="nai-char">f</span><span class="nai-char">o</span><span class="nai-char">r</span></span> <span class="nai-word"><span class="nai-char">h</span><span class="nai-char">e</span><span class="nai-char">a</span><span class="nai-char">l</span><span class="nai-char">t</span><span class="nai-char">h</span><span class="nai-char">.</span></span></span>
      </h3>
      <p class="nai-svc-sub nai-fade-up">HIPAA-conscious AI tools for clinics, hospitals and digital health teams.</p>
      <p class="nai-svc-desc nai-fade-up">From triage copilots and medical-image analysis to patient intake automation and EHR integrations — we help healthcare teams deliver faster diagnoses, fewer errors, and better outcomes at scale.</p>
      <ul class="nai-svc-list">
        <li class="nai-fade-up"><i></i>AI triage, symptom &amp; diagnostic copilots</li>
        <li class="nai-fade-up"><i></i>Medical imaging &amp; report analysis</li>
        <li class="nai-fade-up"><i></i>Patient intake &amp; scheduling automation</li>
        <li class="nai-fade-up"><i></i>HIPAA-aligned data pipelines &amp; EHR integrations</li>
      </ul>
      <div class="nai-btn-wrap nai-fade-up"><a href="/contact" class="nai-pr-btn"><span class="text" data-back="Power my clinic" data-front="Power my clinic"></span><span class="icon"><i aria-hidden="true" class="fa-solid fa-arrow-right"></i><i aria-hidden="true" class="fa-solid fa-arrow-right"></i></span></a></div>
    </div>
    <div class="nai-svc-right">
      <div class="nai-hc"><div class="nai-hc-frame">
        <div class="nai-hc-bar"><div class="nai-hc-patient"><i class="fa-solid fa-user-doctor"></i><div><b>Patient · #A2049</b><span>Live monitor</span></div></div><span class="nai-hc-live"><em></em>STABLE</span></div>
        <div class="nai-hc-ecg">
          <span class="nai-hc-ecgLbl">ECG</span>
          <svg viewBox="0 0 300 80"><line x1="0" y1="40" x2="300" y2="40" stroke="rgba(10,10,10,.06)"/><path id="naiHcEcgPath" class="nai-hc-line" d="M0,40 L40,40 L46,20 L52,60 L58,28 L64,40 L100,40 L106,20 L112,60 L118,28 L124,40 L160,40 L166,20 L172,60 L178,28 L184,40 L220,40 L226,20 L232,60 L238,28 L244,40 L300,40" stroke="#9c70ff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle class="nai-hc-pulse" r="3.5" fill="#9c70ff"><animateMotion dur="4s" repeatCount="indefinite" rotate="0"><mpath href="#naiHcEcgPath"/></animateMotion></circle></svg>
          <div class="nai-hc-bpm"><b><span class="nai-hc-c" data-target="78">0</span></b><em>BPM</em></div>
        </div>
        <div class="nai-hc-vitals">
          <div class="nai-hc-vt"><i class="fa-solid fa-droplet"></i><div><span>SpO₂</span><b><span class="nai-hc-c" data-target="98">0</span><em>%</em></b></div></div>
          <div class="nai-hc-vt"><i class="fa-solid fa-temperature-half"></i><div><span>Temp</span><b>36.7<em>°C</em></b></div></div>
          <div class="nai-hc-vt"><i class="fa-solid fa-lungs"></i><div><span>RR</span><b><span class="nai-hc-c" data-target="16">0</span><em>/m</em></b></div></div>
        </div>
        <div class="nai-hc-ai"><div class="nai-hc-ai-h"><span class="nai-hc-ai-chip"><i class="fa-solid fa-brain"></i>AI Diagnosis</span><span class="nai-hc-ai-conf">98% conf.</span></div><p class="nai-hc-ai-msg">No anomalies detected. Vitals within normal range. Continue monitoring.</p></div>
        <i class="nai-hc-spark fa-solid fa-plus"></i>
        <div class="nai-hc-orb"></div>
      </div></div>
    </div>
  </div>
</div>`;

const SVC_AO = `<div class="nai-svc nai-svc-ao">
  <div class="nai-svc-grid">
    <div class="nai-svc-left">
      <div class="nai-svc-head">
        <div class="nai-ico nai-ico-ao">
          <svg viewBox="0 0 32 32" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <circle class="nai-ico-ao-ring" cx="16" cy="16" r="11" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 3" opacity=".5"/>
            <path class="nai-ico-ao-brain" d="M11 11 C11 8 13 7 14.5 7.5 C15 6.5 17 6.5 17.5 7.5 C19 7 21 8 21 11 C22 12 22 14 21 15 C22 17 21 19 19 19 C18 21 14 21 13 19 C11 19 10 17 11 15 C10 13 10 12 11 11 Z" stroke="currentColor" stroke-width="1.4" fill="rgba(156,112,255,.18)"/>
            <circle class="nai-ico-ao-n1" cx="16" cy="13" r="1.4" fill="#9c70ff"/>
            <circle class="nai-ico-ao-n2" cx="13" cy="16" r="1" fill="#9c70ff"/>
            <circle class="nai-ico-ao-n3" cx="19" cy="16" r="1" fill="#9c70ff"/>
            <path class="nai-ico-ao-up" d="M16 27 L16 22 M13 24 L16 21 L19 24" stroke="#9c70ff" stroke-width="1.6" fill="none"/>
          </svg>
        </div>
        <span class="nai-svc-tag nai-fade-up">AI Optimization (AIO)</span>
      </div>
      <h3 class="nai-svc-title">
        <span class="nai-line"><span class="nai-word"><span class="nai-char">O</span><span class="nai-char">p</span><span class="nai-char">t</span><span class="nai-char">i</span><span class="nai-char">m</span><span class="nai-char">i</span><span class="nai-char">z</span><span class="nai-char">e</span><span class="nai-char">d</span></span> <span class="nai-word"><span class="nai-char">b</span><span class="nai-char">y</span></span> <span class="nai-word"><span class="nai-char">A</span><span class="nai-char">I</span><span class="nai-char">.</span></span></span>
        <span class="nai-line nai-line2"><span class="nai-word"><span class="nai-char">T</span><span class="nai-char">u</span><span class="nai-char">n</span><span class="nai-char">e</span><span class="nai-char">d</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">o</span></span> <span class="nai-word"><span class="nai-char">w</span><span class="nai-char">i</span><span class="nai-char">n</span><span class="nai-char">.</span></span></span>
      </h3>
      <p class="nai-svc-sub nai-fade-up">AI-driven optimization across operations, content, ads and product.</p>
      <p class="nai-svc-desc nai-fade-up">We audit, instrument and optimize your stack with AI — squeezing more performance, lower costs and better results out of the systems you already run.</p>
      <ul class="nai-svc-list">
        <li class="nai-fade-up"><i></i>AI search optimization (AIO) &amp; SEO</li>
        <li class="nai-fade-up"><i></i>Ad-spend &amp; campaign optimization</li>
        <li class="nai-fade-up"><i></i>Workflow &amp; process automation tuning</li>
        <li class="nai-fade-up"><i></i>Performance, cost &amp; token-spend audits</li>
      </ul>
      <div class="nai-btn-wrap nai-fade-up"><a href="/contact" class="nai-pr-btn"><span class="text" data-back="Optimize my stack" data-front="Optimize my stack"></span><span class="icon"><i aria-hidden="true" class="fa-solid fa-arrow-right"></i><i aria-hidden="true" class="fa-solid fa-arrow-right"></i></span></a></div>
    </div>
    <div class="nai-svc-right">
      <div class="nai-ao"><div class="nai-ao-frame">
        <div class="nai-ao-bar"><div class="nai-ao-h"><i class="fa-solid fa-wand-magic-sparkles"></i><div><b>AI Optimizer</b><span>Auto-tuning</span></div></div><span class="nai-ao-live"><em></em>RUNNING</span></div>
        <div class="nai-ao-ba">
          <div class="nai-ao-card nai-ao-bef"><span>Before</span><b><span class="nai-ao-c" data-target="42">0</span><em>ms</em></b><em>p95 latency</em></div>
          <div class="nai-ao-arr"><i class="fa-solid fa-arrow-right"></i></div>
          <div class="nai-ao-card nai-ao-aft"><span>After</span><b><span class="nai-ao-c" data-target="14">0</span><em>ms</em></b><em class="up"><i class="fa-solid fa-arrow-down"></i>−66%</em></div>
        </div>
        <div class="nai-ao-prog">
          <div class="nai-ao-prog-h"><span><i class="fa-solid fa-bolt"></i> Optimizing pipeline…</span><b><span class="nai-ao-c" data-target="84">0</span>%</b></div>
          <div class="nai-ao-bar2"><i></i></div>
          <div class="nai-ao-checks"><div class="ck on"><i class="fa-solid fa-check"></i><span>Audit</span></div><div class="ck on"><i class="fa-solid fa-check"></i><span>Refactor</span></div><div class="ck on"><i class="fa-solid fa-check"></i><span>Cache</span></div><div class="ck"><i class="fa-solid fa-circle-notch"></i><span>Deploy</span></div></div>
        </div>
        <div class="nai-ao-mets">
          <div class="nai-ao-met"><span>Cost</span><b>−<span class="nai-ao-c" data-target="48">0</span><em>%</em></b></div>
          <div class="nai-ao-met"><span>Conv.</span><b>+<span class="nai-ao-c" data-target="62">0</span><em>%</em></b></div>
          <div class="nai-ao-met"><span>Tokens</span><b>−<span class="nai-ao-c" data-target="38">0</span><em>%</em></b></div>
        </div>
        <i class="nai-ao-spark fa-solid fa-sparkles"></i>
        <div class="nai-ao-orb"></div>
      </div></div>
    </div>
  </div>
</div>`;

const SVC_AS = `<div class="nai-svc nai-svc-as">
  <div class="nai-svc-grid">
    <div class="nai-svc-left">
      <div class="nai-svc-head">
        <div class="nai-ico nai-ico-as">
          <svg viewBox="0 0 32 32" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path class="nai-ico-as-r" d="M16 4 C20 8 22 14 22 19 L10 19 C10 14 12 8 16 4 Z" stroke="currentColor" stroke-width="1.6" fill="rgba(156,112,255,.18)"/>
            <circle cx="16" cy="13" r="2.2" fill="#9c70ff"/>
            <path class="nai-ico-as-f" d="M10 19 L6 24 L10 22 Z M22 19 L26 24 L22 22 Z" fill="#9c70ff" opacity=".7"/>
            <path class="nai-ico-as-fl" d="M13 22 L16 28 L19 22" stroke="#9c70ff" stroke-width="1.6" fill="rgba(156,112,255,.4)"/>
          </svg>
        </div>
        <span class="nai-svc-tag nai-fade-up">AI Startups</span>
      </div>
      <h3 class="nai-svc-title">
        <span class="nai-line"><span class="nai-word"><span class="nai-char">F</span><span class="nai-char">r</span><span class="nai-char">o</span><span class="nai-char">m</span></span> <span class="nai-word"><span class="nai-char">z</span><span class="nai-char">e</span><span class="nai-char">r</span><span class="nai-char">o</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">o</span></span> <span class="nai-word"><span class="nai-char">o</span><span class="nai-char">n</span><span class="nai-char">e</span><span class="nai-char">.</span></span></span>
        <span class="nai-line nai-line2"><span class="nai-word"><span class="nai-char">A</span><span class="nai-char">I</span></span> <span class="nai-word"><span class="nai-char">s</span><span class="nai-char">t</span><span class="nai-char">a</span><span class="nai-char">r</span><span class="nai-char">t</span><span class="nai-char">u</span><span class="nai-char">p</span><span class="nai-char">s</span><span class="nai-char">,</span></span> <span class="nai-word"><span class="nai-char">l</span><span class="nai-char">a</span><span class="nai-char">u</span><span class="nai-char">n</span><span class="nai-char">c</span><span class="nai-char">h</span><span class="nai-char">e</span><span class="nai-char">d</span><span class="nai-char">.</span></span></span>
      </h3>
      <p class="nai-svc-sub nai-fade-up">MVPs, traction and AI products built fast — for founders who can't wait.</p>
      <p class="nai-svc-desc nai-fade-up">We partner with founders to ship MVPs in weeks, validate with real users, and turn early traction into a fundable, scalable AI product. Strategy, design, engineering and AI under one roof.</p>
      <ul class="nai-svc-list">
        <li class="nai-fade-up"><i></i>MVP design &amp; rapid prototyping</li>
        <li class="nai-fade-up"><i></i>AI feature integration &amp; LLM workflows</li>
        <li class="nai-fade-up"><i></i>Pitch decks, demos &amp; investor-ready assets</li>
        <li class="nai-fade-up"><i></i>Growth experiments &amp; traction loops</li>
      </ul>
      <div class="nai-btn-wrap nai-fade-up"><a href="/contact" class="nai-pr-btn"><span class="text" data-back="Launch my startup" data-front="Launch my startup"></span><span class="icon"><i aria-hidden="true" class="fa-solid fa-arrow-right"></i><i aria-hidden="true" class="fa-solid fa-arrow-right"></i></span></a></div>
    </div>
    <div class="nai-svc-right">
      <div class="nai-as"><div class="nai-as-frame">
        <span class="nai-as-star s1"></span><span class="nai-as-star s2"></span><span class="nai-as-star s3"></span><span class="nai-as-star s4"></span><span class="nai-as-star s5"></span>
        <svg class="nai-as-traj" viewBox="0 0 360 280" preserveAspectRatio="none"><defs><linearGradient id="naiAsG" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stop-color="#9c70ff" stop-opacity="0"/><stop offset="100%" stop-color="#9c70ff" stop-opacity=".9"/></linearGradient></defs><path class="nai-as-path" d="M30,250 Q120,240 180,160 T330,30" stroke="url(#naiAsG)" stroke-width="2" fill="none" stroke-dasharray="4 4" stroke-linecap="round"/></svg>
        <div class="nai-as-rocket"><i class="fa-solid fa-rocket"></i><span class="nai-as-trail"></span></div>
        <div class="nai-as-card nai-as-mvp"><span class="nai-as-lbl"><i class="fa-solid fa-circle-bolt"></i> MVP</span><b>Shipped in 3 weeks</b><em>Live with 12 design partners</em></div>
        <div class="nai-as-card nai-as-trac"><span class="nai-as-lbl"><i class="fa-solid fa-arrow-trend-up"></i> Traction</span><div class="nai-as-bars"><i style="--h:30%"></i><i style="--h:48%"></i><i style="--h:42%"></i><i style="--h:64%"></i><i style="--h:58%"></i><i style="--h:82%"></i><i style="--h:96%"></i></div><div class="nai-as-tr"><b><span class="nai-as-c" data-target="2400">0</span></b><em>signups · wk 7</em></div></div>
        <div class="nai-as-fund"><i class="fa-solid fa-sack-dollar"></i><div><span>Seed closed</span><b>$1.4M</b></div></div>
        <div class="nai-as-orb"></div>
      </div></div>
    </div>
  </div>
</div>`;

const SVC_AD = `<div class="nai-svc nai-svc-ad">
  <div class="nai-svc-grid">
    <div class="nai-svc-left">
      <div class="nai-svc-head">
        <div class="nai-ico nai-ico-ad">
          <svg viewBox="0 0 32 32" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <rect class="nai-ico-ad-l1" x="4" y="10" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.6" fill="rgba(156,112,255,0.06)"/>
            <rect class="nai-ico-ad-l2" x="7" y="7" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.6" fill="rgba(156,112,255,0.12)"/>
            <rect class="nai-ico-ad-l3" x="10" y="4" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.6" fill="rgba(156,112,255,0.22)"/>
            <circle cx="13" cy="7.5" r=".7" fill="#9c70ff"/><circle cx="15.4" cy="7.5" r=".7" fill="#9c70ff" opacity=".6"/><circle cx="17.8" cy="7.5" r=".7" fill="#9c70ff" opacity=".4"/>
            <path class="nai-ico-ad-cur" d="M21 13 L26 16 L23 17 L24 20 L22 21 L21 18 L19 19 Z" fill="#9c70ff" stroke="#fff" stroke-width=".6"/>
          </svg>
        </div>
        <span class="nai-svc-tag nai-fade-up">Application Design</span>
      </div>
      <h3 class="nai-svc-title">
        <span class="nai-line"><span class="nai-word"><span class="nai-char">A</span><span class="nai-char">p</span><span class="nai-char">p</span><span class="nai-char">s</span></span> <span class="nai-word"><span class="nai-char">p</span><span class="nai-char">e</span><span class="nai-char">o</span><span class="nai-char">p</span><span class="nai-char">l</span><span class="nai-char">e</span></span> <span class="nai-word"><span class="nai-char">l</span><span class="nai-char">o</span><span class="nai-char">v</span><span class="nai-char">e</span><span class="nai-char">.</span></span></span>
        <span class="nai-line nai-line2"><span class="nai-word"><span class="nai-char">D</span><span class="nai-char">e</span><span class="nai-char">s</span><span class="nai-char">i</span><span class="nai-char">g</span><span class="nai-char">n</span><span class="nai-char">e</span><span class="nai-char">d</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">o</span></span> <span class="nai-word"><span class="nai-char">l</span><span class="nai-char">a</span><span class="nai-char">s</span><span class="nai-char">t</span><span class="nai-char">.</span></span></span>
      </h3>
      <p class="nai-svc-sub nai-fade-up">Mobile and web apps that feel intuitive, beautiful, and effortless.</p>
      <p class="nai-svc-desc nai-fade-up">We craft thoughtful, user-first applications — from first wireframe to final pixel — combining clean visual design, smooth motion, and rock-solid usability so every tap, scroll, and interaction feels right.</p>
      <ul class="nai-svc-list">
        <li class="nai-fade-up"><i></i>iOS, Android &amp; cross-platform app design</li>
        <li class="nai-fade-up"><i></i>User research, flows &amp; interactive prototypes</li>
        <li class="nai-fade-up"><i></i>Design systems built to scale with your team</li>
        <li class="nai-fade-up"><i></i>Motion, micro-interactions &amp; polish baked in</li>
      </ul>
      <div class="nai-btn-wrap nai-fade-up"><a href="/contact" class="nai-pr-btn"><span class="text" data-back="Design my app" data-front="Design my app"></span><span class="icon"><i aria-hidden="true" class="fa-solid fa-arrow-right"></i><i aria-hidden="true" class="fa-solid fa-arrow-right"></i></span></a></div>
    </div>
    <div class="nai-svc-right">
      <div class="nai-ad">
        <div class="nai-ad-stage">
          <div class="nai-ad-chip nai-ad-chip-1"><i class="fa-solid fa-bolt"></i>60 fps</div>
          <div class="nai-ad-chip nai-ad-chip-2"><i class="fa-solid fa-circle-check"></i>WCAG AA</div>
          <div class="nai-ad-chip nai-ad-chip-3"><i class="fa-solid fa-wand-magic-sparkles"></i>Tokens</div>
          <div class="nai-ad-phone">
            <div class="nai-ad-notch"></div>
            <div class="nai-ad-screen">
              <div class="nai-ad-status"><span>9:41</span><span class="nai-ad-stat-r"><i class="fa-solid fa-signal"></i><i class="fa-solid fa-wifi"></i><i class="fa-solid fa-battery-full"></i></span></div>
              <div class="nai-ad-app-head"><div class="nai-ad-avatar"></div><div class="nai-ad-greet"><b>Hi, Alex</b><span>Welcome back</span></div><div class="nai-ad-bell"><i class="fa-solid fa-bell"></i><em></em></div></div>
              <div class="nai-ad-card"><span class="nai-ad-card-label">Total balance</span><b class="nai-ad-card-amt">$<span class="nai-ad-amt" data-target="12480">0</span></b><div class="nai-ad-spark"><svg viewBox="0 0 100 30" preserveAspectRatio="none"><path class="nai-ad-spark-line" d="M0,22 L12,18 L24,20 L36,12 L48,15 L60,8 L72,11 L84,5 L100,8" stroke="rgba(255,255,255,.85)" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path class="nai-ad-spark-fill" d="M0,22 L12,18 L24,20 L36,12 L48,15 L60,8 L72,11 L84,5 L100,8 L100,30 L0,30 Z" fill="url(#naiAdGrad)"/><defs><linearGradient id="naiAdGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(255,255,255,.35)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></linearGradient></defs></svg></div></div>
              <div class="nai-ad-actions"><div class="nai-ad-act"><span><i class="fa-solid fa-arrow-up"></i></span>Send</div><div class="nai-ad-act"><span><i class="fa-solid fa-arrow-down"></i></span>Receive</div><div class="nai-ad-act"><span><i class="fa-solid fa-plus"></i></span>Top up</div><div class="nai-ad-act"><span><i class="fa-solid fa-ellipsis"></i></span>More</div></div>
              <div class="nai-ad-list">
                <div class="nai-ad-row"><div class="nai-ad-row-ico nai-ad-row-ico-1"><i class="fa-solid fa-cart-shopping"></i></div><div class="nai-ad-row-mid"><b>Apple Store</b><span>Today · 14:22</span></div><span class="nai-ad-row-amt">-$129</span></div>
                <div class="nai-ad-row"><div class="nai-ad-row-ico nai-ad-row-ico-2"><i class="fa-solid fa-mug-hot"></i></div><div class="nai-ad-row-mid"><b>Coffee Bean</b><span>Today · 09:10</span></div><span class="nai-ad-row-amt">-$6</span></div>
                <div class="nai-ad-row"><div class="nai-ad-row-ico nai-ad-row-ico-3"><i class="fa-solid fa-money-bill-trend-up"></i></div><div class="nai-ad-row-mid"><b>Salary</b><span>Yesterday</span></div><span class="nai-ad-row-amt nai-ad-pos">+$4,200</span></div>
              </div>
              <div class="nai-ad-tabs"><i class="fa-solid fa-house nai-ad-tab-on"></i><i class="fa-regular fa-compass"></i><span class="nai-ad-fab"><i class="fa-solid fa-plus"></i></span><i class="fa-regular fa-bell"></i><i class="fa-regular fa-user"></i></div>
              <span class="nai-ad-cursor"></span>
            </div>
          </div>
          <div class="nai-ad-blob"></div>
        </div>
        <div class="nai-ad-foot"><div class="nai-ad-stat"><span>Apps shipped</span><b class="nai-ad-count" data-target="56">0</b></div><div class="nai-ad-stat nai-ad-statR"><span>Avg rating</span><b>4.9<em>/5</em></b></div></div>
      </div>
    </div>
  </div>
</div>`;

const SVC_BC = `<div class="nai-svc nai-svc-bc">
  <div class="nai-svc-grid">
    <div class="nai-svc-left">
      <div class="nai-svc-head">
        <div class="nai-ico nai-ico-bc">
          <svg viewBox="0 0 32 32" fill="none">
            <path class="nai-ico-bc-h" d="M16 26 C16 26 6 19 6 12 C6 9 8 7 11 7 C13 7 15 8 16 11 C17 8 19 7 21 7 C24 7 26 9 26 12 C26 19 16 26 16 26 Z" stroke="currentColor" stroke-width="1.6" fill="rgba(156,112,255,.18)"/>
            <circle class="nai-ico-bc-s1" cx="9" cy="5" r="1.2" fill="#9c70ff"/>
            <circle class="nai-ico-bc-s2" cx="24" cy="4" r="1" fill="#9c70ff"/>
          </svg>
        </div>
        <span class="nai-svc-tag nai-fade-up">B2C Brands</span>
      </div>
      <h3 class="nai-svc-title">
        <span class="nai-line"><span class="nai-word"><span class="nai-char">B</span><span class="nai-char">r</span><span class="nai-char">a</span><span class="nai-char">n</span><span class="nai-char">d</span><span class="nai-char">s</span></span> <span class="nai-word"><span class="nai-char">p</span><span class="nai-char">e</span><span class="nai-char">o</span><span class="nai-char">p</span><span class="nai-char">l</span><span class="nai-char">e</span></span> <span class="nai-word"><span class="nai-char">l</span><span class="nai-char">o</span><span class="nai-char">v</span><span class="nai-char">e</span><span class="nai-char">.</span></span></span>
        <span class="nai-line nai-line2"><span class="nai-word"><span class="nai-char">B</span><span class="nai-char">u</span><span class="nai-char">i</span><span class="nai-char">l</span><span class="nai-char">t</span></span> <span class="nai-word"><span class="nai-char">f</span><span class="nai-char">o</span><span class="nai-char">r</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">h</span><span class="nai-char">e</span></span> <span class="nai-word"><span class="nai-char">f</span><span class="nai-char">e</span><span class="nai-char">e</span><span class="nai-char">d</span><span class="nai-char">.</span></span></span>
      </h3>
      <p class="nai-svc-sub nai-fade-up">Consumer brands engineered for engagement, virality and lifetime value.</p>
      <p class="nai-svc-desc nai-fade-up">From content systems and creator partnerships to community, social and lifecycle — we help DTC and consumer brands build a presence the algorithm rewards and customers come back to.</p>
      <ul class="nai-svc-list">
        <li class="nai-fade-up"><i></i>Content engines &amp; social-first creative</li>
        <li class="nai-fade-up"><i></i>Influencer &amp; creator-led campaigns</li>
        <li class="nai-fade-up"><i></i>Community building &amp; retention loops</li>
        <li class="nai-fade-up"><i></i>Lifecycle, email &amp; SMS marketing</li>
      </ul>
      <div class="nai-btn-wrap nai-fade-up"><a href="/contact" class="nai-pr-btn"><span class="text" data-back="Grow my brand" data-front="Grow my brand"></span><span class="icon"><i aria-hidden="true" class="fa-solid fa-arrow-right"></i><i aria-hidden="true" class="fa-solid fa-arrow-right"></i></span></a></div>
    </div>
    <div class="nai-svc-right">
      <div class="nai-bc"><div class="nai-bc-stage">
        <span class="nai-bc-spk s1"></span><span class="nai-bc-spk s2"></span><span class="nai-bc-spk s3"></span>
        <div class="nai-bc-drop"><div class="nai-bc-drop-art"><span class="nai-bc-tag">NEW DROP</span><span class="nai-bc-burst">✨</span></div><div class="nai-bc-drop-info"><span>SS'26 · Capsule</span><b>The Season Starter</b><em><i class="fa-solid fa-fire"></i> Trending #1</em></div></div>
        <div class="nai-bc-creator"><span class="nai-bc-cav"></span><div><b>@maya.creates</b><em>Creator collab · 480K reach</em></div><i class="fa-solid fa-heart"></i></div>
        <div class="nai-bc-quote"><span class="nai-bc-stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span><p>"Obsessed with this brand — every drop sells out before I can even add to cart."</p><em>— Jordan K., loyal customer</em></div>
        <div class="nai-bc-mrow"><div class="nai-bc-metric m1"><span><i class="fa-solid fa-eye"></i> Reach</span><b><span class="nai-bc-c" data-target="3">0</span>.4<em>M</em></b><em class="up"><i class="fa-solid fa-arrow-up"></i>+62%</em></div><div class="nai-bc-metric m2"><span><i class="fa-solid fa-bolt"></i> Engagement</span><b><span class="nai-bc-c" data-target="12">0</span>.8<em>%</em></b><em class="up"><i class="fa-solid fa-arrow-up"></i>+3.4</em></div></div>
        <div class="nai-bc-orb"></div>
      </div></div>
    </div>
  </div>
</div>`;

const SVC_BI = `<div class="nai-svc nai-svc-bi">
  <div class="nai-svc-grid">
    <div class="nai-svc-left">
      <div class="nai-svc-head">
        <div class="nai-ico nai-ico-bi">
          <svg viewBox="0 0 32 32" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path class="nai-ico-bi-top" d="M9 12 L16 5 L23 12 L16 19 Z" fill="rgba(156,112,255,.22)" stroke="currentColor" stroke-width="1.6"/>
            <path class="nai-ico-bi-bot" d="M6 14 L16 27 L26 14" stroke="currentColor" stroke-width="1.6" fill="rgba(156,112,255,.08)"/>
            <line x1="9" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="1.4" opacity=".6"/>
            <line class="nai-ico-bi-mid" x1="16" y1="5" x2="16" y2="27" stroke="currentColor" stroke-width="1" opacity=".4" stroke-dasharray="2 2"/>
            <circle class="nai-ico-bi-sp" cx="24" cy="7" r="1.6" fill="#9c70ff"/>
          </svg>
        </div>
        <span class="nai-svc-tag nai-fade-up">Branding &amp; Identity</span>
      </div>
      <h3 class="nai-svc-title">
        <span class="nai-line"><span class="nai-word"><span class="nai-char">B</span><span class="nai-char">r</span><span class="nai-char">a</span><span class="nai-char">n</span><span class="nai-char">d</span><span class="nai-char">s</span></span> <span class="nai-word"><span class="nai-char">w</span><span class="nai-char">i</span><span class="nai-char">t</span><span class="nai-char">h</span></span> <span class="nai-word"><span class="nai-char">s</span><span class="nai-char">o</span><span class="nai-char">u</span><span class="nai-char">l</span><span class="nai-char">.</span></span></span>
        <span class="nai-line nai-line2"><span class="nai-word"><span class="nai-char">B</span><span class="nai-char">u</span><span class="nai-char">i</span><span class="nai-char">l</span><span class="nai-char">t</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">o</span></span> <span class="nai-word"><span class="nai-char">s</span><span class="nai-char">t</span><span class="nai-char">i</span><span class="nai-char">c</span><span class="nai-char">k</span><span class="nai-char">.</span></span></span>
      </h3>
      <p class="nai-svc-sub nai-fade-up">Identity systems that make your brand unforgettable.</p>
      <p class="nai-svc-desc nai-fade-up">From logo and palette to voice and visual language — we craft cohesive brand systems that look stunning, feel right, and scale across every touchpoint your audience will ever see.</p>
      <ul class="nai-svc-list">
        <li class="nai-fade-up"><i></i>Logo design &amp; visual identity systems</li>
        <li class="nai-fade-up"><i></i>Color, typography &amp; brand guidelines</li>
        <li class="nai-fade-up"><i></i>Brand voice, messaging &amp; positioning</li>
        <li class="nai-fade-up"><i></i>Stationery, social &amp; launch toolkits</li>
      </ul>
      <div class="nai-btn-wrap nai-fade-up"><a href="/contact" class="nai-pr-btn"><span class="text" data-back="Build my brand" data-front="Build my brand"></span><span class="icon"><i aria-hidden="true" class="fa-solid fa-arrow-right"></i><i aria-hidden="true" class="fa-solid fa-arrow-right"></i></span></a></div>
    </div>
    <div class="nai-svc-right">
      <div class="nai-bi"><div class="nai-bi-stage">
        <div class="nai-bi-grid-lines" aria-hidden="true"></div>
        <span class="nai-bi-chip nai-bi-chip1">Bold</span>
        <span class="nai-bi-chip nai-bi-chip2">Crafted</span>
        <span class="nai-bi-chip nai-bi-chip3">Human</span>
        <div class="nai-bi-card-main">
          <div class="nai-bi-top"><span class="nai-bi-meta-l">Brand Kit</span><span class="nai-bi-meta-r">v 2.0</span></div>
          <div class="nai-bi-mark">
            <svg viewBox="0 0 80 80"><defs><linearGradient id="naiBiGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#b794ff"/><stop offset="100%" stop-color="#5a3aa8"/></linearGradient></defs><circle class="nai-bi-mark-ring" cx="40" cy="40" r="32" stroke="url(#naiBiGrad)" stroke-width="2.5" fill="none" stroke-dasharray="4 6" stroke-linecap="round"/><path class="nai-bi-mark-petal" d="M40 14 C 56 26, 56 54, 40 66 C 24 54, 24 26, 40 14 Z" fill="url(#naiBiGrad)"/><path class="nai-bi-mark-hi" d="M40 22 C 48 30, 48 50, 40 58 C 32 50, 32 30, 40 22 Z" fill="rgba(255,255,255,.22)"/><circle class="nai-bi-mark-dot" cx="40" cy="40" r="4.5" fill="#fff"/></svg>
            <i class="nai-bi-mark-spark fa-solid fa-sparkles"></i>
          </div>
          <div class="nai-bi-word">netsol<em>ai</em></div>
          <div class="nai-bi-tag">Built to stick.</div>
          <div class="nai-bi-divider"></div>
          <div class="nai-bi-row"><div class="nai-bi-row-l"><span class="nai-bi-row-label">Palette</span><div class="nai-bi-dots"><i style="--c:#9c70ff"></i><i style="--c:#5a3aa8"></i><i style="--c:#0a0a0a"></i><i style="--c:#f7f4ff"></i><i style="--c:#28a745"></i></div></div><div class="nai-bi-row-r"><span class="nai-bi-row-label">Type</span><div class="nai-bi-aa">Aa</div></div></div>
        </div>
        <i class="nai-bi-sparkle nai-bi-sp1 fa-solid fa-sparkles"></i>
        <i class="nai-bi-sparkle nai-bi-sp2 fa-solid fa-star"></i>
        <div class="nai-bi-orb"></div>
        <div class="nai-bi-orb2"></div>
      </div></div>
    </div>
  </div>
</div>`;

const SVC_EC = `<div class="nai-svc nai-svc-ec">
  <div class="nai-svc-grid">
    <div class="nai-svc-left">
      <div class="nai-svc-head">
        <div class="nai-ico nai-ico-ec">
          <svg viewBox="0 0 32 32" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path class="nai-ico-ec-b" d="M8 11 L24 11 L23 26 C23 27 22 28 21 28 L11 28 C10 28 9 27 9 26 Z" stroke="currentColor" stroke-width="1.6" fill="rgba(156,112,255,.18)"/>
            <path class="nai-ico-ec-h" d="M12 11 V8 C12 6 14 4 16 4 C18 4 20 6 20 8 V11" stroke="currentColor" stroke-width="1.6" fill="none"/>
            <path class="nai-ico-ec-s" d="M16 16 L17 18.5 L19.5 19.5 L17 20.5 L16 23 L15 20.5 L12.5 19.5 L15 18.5 Z" fill="#9c70ff"/>
          </svg>
        </div>
        <span class="nai-svc-tag nai-fade-up">E-commerce Brands</span>
      </div>
      <h3 class="nai-svc-title">
        <span class="nai-line"><span class="nai-word"><span class="nai-char">S</span><span class="nai-char">t</span><span class="nai-char">o</span><span class="nai-char">r</span><span class="nai-char">e</span><span class="nai-char">s</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">h</span><span class="nai-char">a</span><span class="nai-char">t</span></span> <span class="nai-word"><span class="nai-char">c</span><span class="nai-char">o</span><span class="nai-char">n</span><span class="nai-char">v</span><span class="nai-char">e</span><span class="nai-char">r</span><span class="nai-char">t</span><span class="nai-char">.</span></span></span>
        <span class="nai-line nai-line2"><span class="nai-word"><span class="nai-char">C</span><span class="nai-char">a</span><span class="nai-char">r</span><span class="nai-char">t</span><span class="nai-char">s</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">h</span><span class="nai-char">a</span><span class="nai-char">t</span></span> <span class="nai-word"><span class="nai-char">c</span><span class="nai-char">l</span><span class="nai-char">o</span><span class="nai-char">s</span><span class="nai-char">e</span><span class="nai-char">.</span></span></span>
      </h3>
      <p class="nai-svc-sub nai-fade-up">Shopify, headless and DTC stores tuned for revenue, retention and AOV.</p>
      <p class="nai-svc-desc nai-fade-up">From storefront design and custom Shopify themes to checkout optimization, subscriptions and post-purchase flows — we build e-commerce experiences that turn browsers into buyers.</p>
      <ul class="nai-svc-list">
        <li class="nai-fade-up"><i></i>Shopify, Shopify Plus &amp; headless stores</li>
        <li class="nai-fade-up"><i></i>PDP, cart &amp; checkout conversion design</li>
        <li class="nai-fade-up"><i></i>Subscriptions, upsells &amp; loyalty</li>
        <li class="nai-fade-up"><i></i>CRO, A/B testing &amp; analytics setup</li>
      </ul>
      <div class="nai-btn-wrap nai-fade-up"><a href="/contact" class="nai-pr-btn"><span class="text" data-back="Launch my store" data-front="Launch my store"></span><span class="icon"><i aria-hidden="true" class="fa-solid fa-arrow-right"></i><i aria-hidden="true" class="fa-solid fa-arrow-right"></i></span></a></div>
    </div>
    <div class="nai-svc-right">
      <div class="nai-ec"><div class="nai-ec-stage">
        <div class="nai-ec-product">
          <div class="nai-ec-img"><span class="nai-ec-badge">−20%</span><span class="nai-ec-fav"><i class="fa-regular fa-heart"></i></span><div class="nai-ec-shape"></div></div>
          <div class="nai-ec-info"><span class="nai-ec-cat">Apparel · Limited</span><b>Aurora Hoodie</b><div class="nai-ec-row"><em><span>$49</span> <s>$62</s></em><span class="nai-ec-rating"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><b>4.8</b></span></div><div class="nai-ec-swatches"><span class="sw on" style="--c:#9c70ff"></span><span class="sw" style="--c:#7a4fe6"></span><span class="sw" style="--c:#ff6ec7"></span><span class="sw" style="--c:#28a745"></span></div><button class="nai-ec-btn"><i class="fa-solid fa-bag-shopping"></i> Add to bag</button></div>
        </div>
        <div class="nai-ec-cart">
          <div class="nai-ec-cart-h"><b><i class="fa-solid fa-bag-shopping"></i> Cart</b><span><span class="nai-ec-c" data-target="3">0</span> items</span></div>
          <div class="nai-ec-line"><span class="ph"></span><div><b>Aurora Hoodie</b><em>Lilac · M</em></div><i>$49</i></div>
          <div class="nai-ec-line"><span class="ph p2"></span><div><b>Cosmo Tee</b><em>Black · L</em></div><i>$24</i></div>
          <div class="nai-ec-total"><span>Total</span><b>$<span class="nai-ec-c" data-target="118">0</span></b></div>
          <button class="nai-ec-co">Checkout <i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div class="nai-ec-rev"><i class="fa-solid fa-dollar-sign"></i><div><span>Today</span><b>$<span class="nai-ec-c" data-target="12">0</span>,<span class="nai-ec-c" data-target="480">0</span></b></div><em><i class="fa-solid fa-arrow-up"></i>+34%</em></div>
        <div class="nai-ec-orb"></div>
      </div></div>
    </div>
  </div>
</div>`;

const SVC_PG = `<div class="nai-svc nai-svc-pg">
  <div class="nai-svc-grid">
    <div class="nai-svc-left">
      <div class="nai-svc-head">
        <div class="nai-ico nai-ico-pg">
          <svg viewBox="0 0 32 32" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <rect class="nai-ico-pg-b1" x="5" y="20" width="4" height="8" rx="1" fill="#9c70ff" opacity=".55"/>
            <rect class="nai-ico-pg-b2" x="11" y="15" width="4" height="13" rx="1" fill="#9c70ff" opacity=".75"/>
            <rect class="nai-ico-pg-b3" x="17" y="10" width="4" height="18" rx="1" fill="#9c70ff"/>
            <path class="nai-ico-pg-arr" d="M5 19 L11 14 L17 16 L26 6" stroke="currentColor" stroke-width="1.6" fill="none"/>
            <path class="nai-ico-pg-tip" d="M22 6 L26 6 L26 10" stroke="currentColor" stroke-width="1.6" fill="none"/>
          </svg>
        </div>
        <span class="nai-svc-tag nai-fade-up">Performance &amp; Growth</span>
      </div>
      <h3 class="nai-svc-title">
        <span class="nai-line"><span class="nai-word"><span class="nai-char">N</span><span class="nai-char">u</span><span class="nai-char">m</span><span class="nai-char">b</span><span class="nai-char">e</span><span class="nai-char">r</span><span class="nai-char">s</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">h</span><span class="nai-char">a</span><span class="nai-char">t</span></span> <span class="nai-word"><span class="nai-char">m</span><span class="nai-char">o</span><span class="nai-char">v</span><span class="nai-char">e</span><span class="nai-char">.</span></span></span>
        <span class="nai-line nai-line2"><span class="nai-word"><span class="nai-char">G</span><span class="nai-char">r</span><span class="nai-char">o</span><span class="nai-char">w</span><span class="nai-char">t</span><span class="nai-char">h</span></span> <span class="nai-word"><span class="nai-char">o</span><span class="nai-char">n</span></span> <span class="nai-word"><span class="nai-char">d</span><span class="nai-char">e</span><span class="nai-char">m</span><span class="nai-char">a</span><span class="nai-char">n</span><span class="nai-char">d</span><span class="nai-char">.</span></span></span>
      </h3>
      <p class="nai-svc-sub nai-fade-up">Data-driven performance marketing that compounds month over month.</p>
      <p class="nai-svc-desc nai-fade-up">We turn analytics into action — paid, SEO, CRO and lifecycle — running tight feedback loops that lower CAC, lift conversion, and unlock predictable revenue growth.</p>
      <ul class="nai-svc-list">
        <li class="nai-fade-up"><i></i>Paid acquisition (Google, Meta, LinkedIn)</li>
        <li class="nai-fade-up"><i></i>SEO, content &amp; organic growth strategy</li>
        <li class="nai-fade-up"><i></i>Conversion-rate optimization &amp; A/B testing</li>
        <li class="nai-fade-up"><i></i>Funnels, attribution &amp; lifecycle automation</li>
      </ul>
      <div class="nai-btn-wrap nai-fade-up"><a href="/contact" class="nai-pr-btn"><span class="text" data-back="Grow my revenue" data-front="Grow my revenue"></span><span class="icon"><i aria-hidden="true" class="fa-solid fa-arrow-right"></i><i aria-hidden="true" class="fa-solid fa-arrow-right"></i></span></a></div>
    </div>
    <div class="nai-svc-right">
      <div class="nai-pg"><div class="nai-pg-frame">
        <div class="nai-pg-bar"><div class="nai-pg-tabs"><span class="on">Overview</span><span>Funnel</span><span>Channels</span></div><span class="nai-pg-live"><em></em>LIVE</span></div>
        <div class="nai-pg-kpis">
          <div class="nai-pg-kpi"><span>Revenue</span><b>$<span class="nai-pg-c" data-target="184">0</span><em>k</em></b><i class="up"><i class="fa-solid fa-arrow-trend-up"></i>+38%</i></div>
          <div class="nai-pg-kpi"><span>Conv. rate</span><b><span class="nai-pg-c" data-target="6">0</span>.4<em>%</em></b><i class="up"><i class="fa-solid fa-arrow-trend-up"></i>+1.8</i></div>
          <div class="nai-pg-kpi"><span>CAC</span><b>$<span class="nai-pg-c" data-target="42">0</span></b><i class="down"><i class="fa-solid fa-arrow-trend-down"></i>-22%</i></div>
        </div>
        <div class="nai-pg-chart">
          <svg viewBox="0 0 300 100" preserveAspectRatio="none">
            <defs><linearGradient id="naiPgFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(156,112,255,.45)"/><stop offset="100%" stop-color="rgba(156,112,255,0)"/></linearGradient></defs>
            <line x1="0" y1="25" x2="300" y2="25" stroke="rgba(10,10,10,.05)"/><line x1="0" y1="50" x2="300" y2="50" stroke="rgba(10,10,10,.05)"/><line x1="0" y1="75" x2="300" y2="75" stroke="rgba(10,10,10,.05)"/>
            <path class="nai-pg-ln2" d="M0,82 L30,78 L60,72 L90,74 L120,66 L150,62 L180,55 L210,52 L240,48 L270,44 L300,40" stroke="rgba(10,10,10,.25)" stroke-width="1.6" fill="none" stroke-dasharray="3 3"/>
            <path class="nai-pg-area" d="M0,80 L30,72 L60,68 L90,55 L120,58 L150,42 L180,38 L210,28 L240,22 L270,16 L300,12 L300,100 L0,100 Z" fill="url(#naiPgFill)"/>
            <path class="nai-pg-ln" d="M0,80 L30,72 L60,68 L90,55 L120,58 L150,42 L180,38 L210,28 L240,22 L270,16 L300,12" stroke="#9c70ff" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <circle class="nai-pg-dot" cx="300" cy="12" r="4" fill="#9c70ff"/>
          </svg>
          <div class="nai-pg-pop">+38% MoM <i class="fa-solid fa-arrow-up"></i></div>
        </div>
        <div class="nai-pg-rows">
          <div class="nai-pg-row"><span class="dot d1"></span>Paid Search<em>42%</em><div class="bar"><i style="--w:84%"></i></div></div>
          <div class="nai-pg-row"><span class="dot d2"></span>Organic<em>31%</em><div class="bar"><i style="--w:62%"></i></div></div>
          <div class="nai-pg-row"><span class="dot d3"></span>Social<em>27%</em><div class="bar"><i style="--w:54%"></i></div></div>
        </div>
        <div class="nai-pg-orb"></div>
      </div></div>
    </div>
  </div>
</div>`;

const SVC_PD = `<div class="nai-svc nai-svc-pd">
  <div class="nai-svc-grid">
    <div class="nai-svc-left">
      <div class="nai-svc-head">
        <div class="nai-ico nai-ico-pd">
          <svg viewBox="0 0 32 32" fill="none">
            <g class="nai-ico-pd-cube" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round">
              <path d="M16 5 L26 10 L26 22 L16 27 L6 22 L6 10 Z" fill="rgba(156,112,255,0.10)"/>
              <path d="M6 10 L16 15 L26 10"/><path d="M16 15 L16 27"/>
            </g>
            <circle class="nai-ico-pd-dot" cx="16" cy="15" r="2" fill="#9c70ff"/>
            <path class="nai-ico-pd-spark" d="M25 6.5l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z" fill="#9c70ff"/>
          </svg>
        </div>
        <span class="nai-svc-tag nai-fade-up">Product Development</span>
      </div>
      <h3 class="nai-svc-title">
        <span class="nai-line"><span class="nai-word"><span class="nai-char">F</span><span class="nai-char">r</span><span class="nai-char">o</span><span class="nai-char">m</span></span> <span class="nai-word"><span class="nai-char">i</span><span class="nai-char">d</span><span class="nai-char">e</span><span class="nai-char">a</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">o</span></span> <span class="nai-word"><span class="nai-char">l</span><span class="nai-char">a</span><span class="nai-char">u</span><span class="nai-char">n</span><span class="nai-char">c</span><span class="nai-char">h</span><span class="nai-char">.</span></span></span>
        <span class="nai-line nai-line2"><span class="nai-word"><span class="nai-char">B</span><span class="nai-char">u</span><span class="nai-char">i</span><span class="nai-char">l</span><span class="nai-char">t</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">o</span></span> <span class="nai-word"><span class="nai-char">s</span><span class="nai-char">c</span><span class="nai-char">a</span><span class="nai-char">l</span><span class="nai-char">e</span><span class="nai-char">.</span></span></span>
      </h3>
      <p class="nai-svc-sub nai-fade-up">End-to-end product engineering for startups and modern teams.</p>
      <p class="nai-svc-desc nai-fade-up">We design, build, and ship production-grade products — from MVPs to enterprise-ready platforms — with clean architecture, modern stacks, and a delivery pace that keeps your business ahead.</p>
      <ul class="nai-svc-list">
        <li class="nai-fade-up"><i></i>Discovery, scoping &amp; technical strategy</li>
        <li class="nai-fade-up"><i></i>Full-stack engineering across web &amp; mobile</li>
        <li class="nai-fade-up"><i></i>Cloud-ready, scalable architecture</li>
        <li class="nai-fade-up"><i></i>Continuous delivery with measurable milestones</li>
      </ul>
      <div class="nai-btn-wrap nai-fade-up"><a href="/contact" class="nai-pr-btn"><span class="text" data-back="Build my product" data-front="Build my product"></span><span class="icon"><i aria-hidden="true" class="fa-solid fa-arrow-right"></i><i aria-hidden="true" class="fa-solid fa-arrow-right"></i></span></a></div>
    </div>
    <div class="nai-svc-right">
      <div class="nai-pd"><div class="nai-pd-frame">
        <div class="nai-pd-bar"><div class="nai-pd-dots"><i></i><i></i><i></i></div><span class="nai-pd-title">product.build</span><span class="nai-pd-live"><em></em>BUILDING</span></div>
        <div class="nai-pd-canvas">
          <div class="nai-pd-stage nai-pd-s1"><div class="nai-pd-stage-icon"><i class="fa-solid fa-pen-ruler"></i></div><span>Design</span><em class="nai-pd-stage-bar"><i></i></em></div>
          <div class="nai-pd-stage nai-pd-s2"><div class="nai-pd-stage-icon"><i class="fa-solid fa-code"></i></div><span>Build</span><em class="nai-pd-stage-bar"><i></i></em></div>
          <div class="nai-pd-stage nai-pd-s3"><div class="nai-pd-stage-icon"><i class="fa-solid fa-vial-circle-check"></i></div><span>Test</span><em class="nai-pd-stage-bar"><i></i></em></div>
          <div class="nai-pd-stage nai-pd-s4"><div class="nai-pd-stage-icon"><i class="fa-solid fa-rocket"></i></div><span>Ship</span><em class="nai-pd-stage-bar"><i></i></em></div>
          <div class="nai-pd-track"><i class="nai-pd-pulse"></i></div>
          <div class="nai-pd-chip nai-pd-chip1"><b>feat:</b> auth flow</div>
          <div class="nai-pd-chip nai-pd-chip2"><b>fix:</b> payment edge</div>
          <div class="nai-pd-chip nai-pd-chip3"><b>chore:</b> deploy v1.4</div>
        </div>
        <div class="nai-pd-foot"><div class="nai-pd-stat"><span>Sprints shipped</span><b class="nai-pd-count" data-target="42">0</b></div><div class="nai-pd-stat nai-pd-statR"><span>Uptime</span><b>99.9<em>%</em></b></div></div>
        <div class="nai-pd-orb"></div>
      </div></div>
    </div>
  </div>
</div>`;

const SVC_SS = `<div class="nai-svc nai-svc-ss">
  <div class="nai-svc-grid">
    <div class="nai-svc-left">
      <div class="nai-svc-head">
        <div class="nai-ico nai-ico-ss">
          <svg viewBox="0 0 32 32" fill="none">
            <rect class="nai-ico-ss-l1" x="6" y="22" width="20" height="4" rx="1" fill="#9c70ff" opacity=".4"/>
            <rect class="nai-ico-ss-l2" x="6" y="14" width="20" height="4" rx="1" fill="#9c70ff" opacity=".7"/>
            <rect class="nai-ico-ss-l3" x="6" y="6" width="20" height="4" rx="1" fill="#9c70ff"/>
            <circle class="nai-ico-ss-d" cx="22" cy="8" r="1.4" fill="#fff"/>
          </svg>
        </div>
        <span class="nai-svc-tag nai-fade-up">SaaS Applications</span>
      </div>
      <h3 class="nai-svc-title">
        <span class="nai-line"><span class="nai-word"><span class="nai-char">S</span><span class="nai-char">a</span><span class="nai-char">a</span><span class="nai-char">S</span><span class="nai-char">,</span></span> <span class="nai-word"><span class="nai-char">s</span><span class="nai-char">h</span><span class="nai-char">i</span><span class="nai-char">p</span><span class="nai-char">p</span><span class="nai-char">e</span><span class="nai-char">d</span></span> <span class="nai-word"><span class="nai-char">r</span><span class="nai-char">i</span><span class="nai-char">g</span><span class="nai-char">h</span><span class="nai-char">t</span><span class="nai-char">.</span></span></span>
        <span class="nai-line nai-line2"><span class="nai-word"><span class="nai-char">B</span><span class="nai-char">u</span><span class="nai-char">i</span><span class="nai-char">l</span><span class="nai-char">t</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">o</span></span> <span class="nai-word"><span class="nai-char">r</span><span class="nai-char">e</span><span class="nai-char">t</span><span class="nai-char">a</span><span class="nai-char">i</span><span class="nai-char">n</span><span class="nai-char">.</span></span></span>
      </h3>
      <p class="nai-svc-sub nai-fade-up">Production-grade SaaS platforms with multi-tenant architecture and AI built in.</p>
      <p class="nai-svc-desc nai-fade-up">From idea to v1 to scale — we design, build and operate SaaS products with auth, billing, dashboards, integrations and AI features that retain users and grow MRR.</p>
      <ul class="nai-svc-list">
        <li class="nai-fade-up"><i></i>Multi-tenant SaaS architecture &amp; RBAC</li>
        <li class="nai-fade-up"><i></i>Auth, billing (Stripe) &amp; subscription logic</li>
        <li class="nai-fade-up"><i></i>Admin dashboards, analytics &amp; integrations</li>
        <li class="nai-fade-up"><i></i>AI features, copilots &amp; API platforms</li>
      </ul>
      <div class="nai-btn-wrap nai-fade-up"><a href="/contact" class="nai-pr-btn"><span class="text" data-back="Launch my SaaS" data-front="Launch my SaaS"></span><span class="icon"><i aria-hidden="true" class="fa-solid fa-arrow-right"></i><i aria-hidden="true" class="fa-solid fa-arrow-right"></i></span></a></div>
    </div>
    <div class="nai-svc-right">
      <div class="nai-ss"><div class="nai-ss-app">
        <div class="nai-ss-side">
          <div class="nai-ss-logo"><span></span><b>Acme</b></div>
          <div class="nai-ss-nav">
            <a class="on"><i class="fa-solid fa-gauge-high"></i><span>Dashboard</span></a>
            <a><i class="fa-solid fa-users"></i><span>Customers</span></a>
            <a><i class="fa-solid fa-credit-card"></i><span>Billing</span></a>
            <a><i class="fa-solid fa-bolt"></i><span>Automations</span></a>
            <a><i class="fa-solid fa-gear"></i><span>Settings</span></a>
          </div>
          <div class="nai-ss-pro"><span>PRO</span><b>v3.2</b></div>
        </div>
        <div class="nai-ss-main">
          <div class="nai-ss-head"><div><b>Hi, Alex</b><span>Workspace · acme.io</span></div><span class="nai-ss-pulse"><em></em>Online</span></div>
          <div class="nai-ss-mrr"><div class="nai-ss-mrr-l"><span>MRR</span><b>$<span class="nai-ss-c" data-target="48">0</span>,<span class="nai-ss-c" data-target="320">0</span></b><em><i class="fa-solid fa-arrow-trend-up"></i>+24% MoM</em></div><svg class="nai-ss-spark" viewBox="0 0 100 30" preserveAspectRatio="none"><path d="M0,22 L12,20 L24,16 L36,18 L48,12 L60,14 L72,8 L84,6 L100,2" stroke="#9c70ff" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <div class="nai-ss-grid"><div class="nai-ss-tile"><span><i class="fa-solid fa-user-plus"></i> Active</span><b><span class="nai-ss-c" data-target="2480">0</span></b><em>users</em></div><div class="nai-ss-tile"><span><i class="fa-solid fa-chart-line"></i> Churn</span><b>1.<span class="nai-ss-c" data-target="2">0</span><i>%</i></b><em>monthly</em></div></div>
          <div class="nai-ss-list">
            <div class="nai-ss-row"><span class="av av1">SS</span><div><b>Stripe Inc</b><em>Enterprise · 248 seats</em></div><i>Active</i></div>
            <div class="nai-ss-row"><span class="av av2">LN</span><div><b>Linear</b><em>Pro · 56 seats</em></div><i>Active</i></div>
            <div class="nai-ss-row"><span class="av av3">VC</span><div><b>Vercel</b><em>Team · 32 seats</em></div><i class="trial">Trial</i></div>
          </div>
        </div>
        <div class="nai-ss-orb"></div>
      </div></div>
    </div>
  </div>
</div>`;

const SVC_WD = `<div class="nai-svc nai-svc-wd">
  <div class="nai-svc-grid">
    <div class="nai-svc-left">
      <div class="nai-svc-head">
        <div class="nai-ico nai-ico-wd">
          <svg viewBox="0 0 32 32" fill="none">
            <rect class="nai-ico-wd-frame" x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" stroke-width="1.6" fill="rgba(156,112,255,0.08)"/>
            <line x1="4" y1="11" x2="28" y2="11" stroke="currentColor" stroke-width="1.4"/>
            <circle cx="7" cy="8.5" r=".9" fill="currentColor" opacity=".55"/><circle cx="10" cy="8.5" r=".9" fill="currentColor" opacity=".55"/><circle cx="13" cy="8.5" r=".9" fill="currentColor" opacity=".55"/>
            <g class="nai-ico-wd-code" stroke="#9c70ff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M11 16 L8 19 L11 22"/><path d="M21 16 L24 19 L21 22"/><path d="M18 14 L14 24"/></g>
            <path class="nai-ico-wd-spark" d="M25 5l.6 1.4 1.4.6-1.4.6L25 9l-.6-1.4L23 7l1.4-.6z" fill="#9c70ff"/>
          </svg>
        </div>
        <span class="nai-svc-tag nai-fade-up">Web Development</span>
      </div>
      <h3 class="nai-svc-title">
        <span class="nai-line"><span class="nai-word"><span class="nai-char">W</span><span class="nai-char">e</span><span class="nai-char">b</span><span class="nai-char">s</span><span class="nai-char">i</span><span class="nai-char">t</span><span class="nai-char">e</span><span class="nai-char">s</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">h</span><span class="nai-char">a</span><span class="nai-char">t</span></span> <span class="nai-word"><span class="nai-char">p</span><span class="nai-char">e</span><span class="nai-char">r</span><span class="nai-char">f</span><span class="nai-char">o</span><span class="nai-char">r</span><span class="nai-char">m</span><span class="nai-char">.</span></span></span>
        <span class="nai-line nai-line2"><span class="nai-word"><span class="nai-char">B</span><span class="nai-char">u</span><span class="nai-char">i</span><span class="nai-char">l</span><span class="nai-char">t</span></span> <span class="nai-word"><span class="nai-char">t</span><span class="nai-char">o</span></span> <span class="nai-word"><span class="nai-char">c</span><span class="nai-char">o</span><span class="nai-char">n</span><span class="nai-char">v</span><span class="nai-char">e</span><span class="nai-char">r</span><span class="nai-char">t</span><span class="nai-char">.</span></span></span>
      </h3>
      <p class="nai-svc-sub nai-fade-up">Fast, modern websites engineered for growth and performance.</p>
      <p class="nai-svc-desc nai-fade-up">From marketing sites to high-traffic platforms, we build pixel-perfect, lightning-fast websites with clean code, accessible design, and SEO-ready architecture — so every visitor turns into a result.</p>
      <ul class="nai-svc-list">
        <li class="nai-fade-up"><i></i>Custom-coded, fully responsive websites</li>
        <li class="nai-fade-up"><i></i>Lightning-fast load times &amp; Core Web Vitals</li>
        <li class="nai-fade-up"><i></i>SEO-ready, accessible, and conversion-focused</li>
        <li class="nai-fade-up"><i></i>CMS, headless, or custom back-end — your choice</li>
      </ul>
      <div class="nai-btn-wrap nai-fade-up"><a href="/contact" class="nai-pr-btn"><span class="text" data-back="Build my website" data-front="Build my website"></span><span class="icon"><i aria-hidden="true" class="fa-solid fa-arrow-right"></i><i aria-hidden="true" class="fa-solid fa-arrow-right"></i></span></a></div>
    </div>
    <div class="nai-svc-right">
      <div class="nai-wd"><div class="nai-wd-frame">
        <div class="nai-wd-bar"><div class="nai-wd-dots"><i></i><i></i><i></i></div><span class="nai-wd-url"><i class="fa-solid fa-lock"></i>netsolai.cz</span><span class="nai-wd-live"><em></em>LIVE</span></div>
        <div class="nai-wd-canvas">
          <div class="nai-wd-code">
            <div class="nai-wd-line"><b>&lt;header</b> <i>class</i>=<u>"hero"</u><b>&gt;</b></div>
            <div class="nai-wd-line nai-wd-indent"><b>&lt;h1&gt;</b>Build the web.<b>&lt;/h1&gt;</b></div>
            <div class="nai-wd-line nai-wd-indent"><b>&lt;button&gt;</b>Get started<b>&lt;/button&gt;</b></div>
            <div class="nai-wd-line"><b>&lt;/header&gt;</b></div>
            <div class="nai-wd-line nai-wd-line-empty">&nbsp;</div>
            <div class="nai-wd-line"><i>.hero</i> <b>{</b></div>
            <div class="nai-wd-line nai-wd-indent"><i>display</i>: <u>flex</u>;</div>
            <div class="nai-wd-line"><b>}</b></div>
            <span class="nai-wd-caret"></span>
          </div>
          <div class="nai-wd-preview">
            <div class="nai-wd-prev-bar"><i></i><i></i><i></i></div>
            <div class="nai-wd-prev-hero"><div class="nai-wd-prev-h1"></div><div class="nai-wd-prev-h2"></div><div class="nai-wd-prev-btn">Get started</div></div>
            <div class="nai-wd-prev-cards"><div class="nai-wd-prev-card"></div><div class="nai-wd-prev-card"></div><div class="nai-wd-prev-card"></div></div>
            <div class="nai-wd-score">
              <svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15.5" stroke="rgba(156,112,255,.18)" stroke-width="3" fill="none"/><circle class="nai-wd-score-arc" cx="18" cy="18" r="15.5" stroke="#9c70ff" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="97.4" stroke-dashoffset="97.4" transform="rotate(-90 18 18)"/></svg>
              <b class="nai-wd-score-num" data-target="99">0</b>
              <span>Speed</span>
            </div>
          </div>
        </div>
        <div class="nai-wd-foot"><div class="nai-wd-stat"><span>Pages shipped</span><b class="nai-wd-count" data-target="240">0</b></div><div class="nai-wd-stat nai-wd-statR"><span>Avg LCP</span><b>1.1<em>s</em></b></div></div>
        <div class="nai-wd-orb"></div>
      </div></div>
    </div>
  </div>
</div>`;

const SERVICES = [
  SVC_AUTO,
  SVC_HC,
  SVC_AO,
  SVC_AS,
  SVC_AD,
  SVC_BC,
  SVC_BI,
  SVC_EC,
  SVC_PG,
  SVC_PD,
  SVC_SS,
  SVC_WD,
];

export default function ServicesPage() {
  useServicesInit();

  return (
    <SiteLayout>
      {/* ── Hero ── */}
      <div className="cta-banner-wrapper">
        <section className="sp-hero" aria-label="Services hero">
          <div className="cta-bg" aria-hidden="true">
            <div className="cta-glow" />
          </div>
          <div className="sp-hero-content">
            <span className="sp-hero-badge">What We Build</span>
            <h1 className="sp-hero-h1">
              <span>Everything you need.</span>
              <span className="sp-hero-accent">One AI-native team.</span>
            </h1>
            <p className="sp-hero-sub">
              12 specialized services. Every solution built intelligence-first and designed to multiply your growth.
            </p>
          </div>
        </section>
      </div>

      {/* ── Service blocks ── */}
      <section className="sp-body">
        <div className="container sp-list">
          {SERVICES.map((html, i) => (
            <div key={i} dangerouslySetInnerHTML={{ __html: html }} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
