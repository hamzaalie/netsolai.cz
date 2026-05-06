import React from 'react';

/* ── 1. AI & Automation — Neural Hub-and-Spoke ─────────────────────────────── */
export const AIAutomationPreview = () => (
  <div className="sc-preview sc-preview-premium">
    <div className="ainv-wrap">
      <svg className="ainv-svg" viewBox="0 0 200 115" fill="none">
        <defs>
          <path id="ap1" d="M 20 20 Q 70 20 100 57"/>
          <path id="ap2" d="M 20 57 L 100 57"/>
          <path id="ap3" d="M 20 95 Q 70 95 100 57"/>
          <path id="ap4" d="M 100 57 Q 130 20 180 20"/>
          <path id="ap5" d="M 100 57 L 180 57"/>
          <path id="ap6" d="M 100 57 Q 130 95 180 95"/>
        </defs>
        {[
          "M 20 20 Q 70 20 100 57",
          "M 20 57 L 100 57",
          "M 20 95 Q 70 95 100 57",
          "M 100 57 Q 130 20 180 20",
          "M 100 57 L 180 57",
          "M 100 57 Q 130 95 180 95",
        ].map((d, i) => (
          <path key={i} d={d} stroke="rgba(156,112,255,0.18)" strokeWidth="1.5" strokeDasharray="4 3"/>
        ))}
        {[
          { id:'ap1', dur:'2.4s', begin:'0s'   },
          { id:'ap2', dur:'2.0s', begin:'0.5s' },
          { id:'ap3', dur:'2.6s', begin:'1.0s' },
          { id:'ap4', dur:'2.2s', begin:'0.3s' },
          { id:'ap5', dur:'2.1s', begin:'0.8s' },
          { id:'ap6', dur:'2.5s', begin:'1.2s' },
        ].map(({ id, dur, begin }, i) => (
          <circle key={i} r="3" fill="#9c70ff">
            <animateMotion dur={dur} repeatCount="indefinite" begin={begin}>
              <mpath href={`#${id}`}/>
            </animateMotion>
          </circle>
        ))}
      </svg>

      {/* Input nodes */}
      <div className="ainv-n ainv-i1">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      </div>
      <div className="ainv-n ainv-i2">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      </div>
      <div className="ainv-n ainv-i3">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>

      {/* Core */}
      <div className="ainv-core">
        <div className="ainv-r1"/><div className="ainv-r2"/>
        <div className="ainv-core-body">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
            <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>
          </svg>
        </div>
      </div>

      {/* Output nodes */}
      <div className="ainv-n ainv-o ainv-o1">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <div className="ainv-n ainv-o ainv-o2">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <div className="ainv-n ainv-o ainv-o3">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
    </div>
  </div>
);

/* ── 2. Product Dev — Code → Browser ───────────────────────────────────────── */
export const ProductDevPreview = () => (
  <div className="sc-preview sc-preview-premium">
    <div className="pdv-wrap">
      {/* Dark code editor */}
      <div className="pdv-editor">
        <div className="pdv-ed-chrome"><i/><i/><i/></div>
        <div className="pdv-lines">
          {[
            { w:'72%', t:'b', d:'0s'    },
            { w:'45%', t:'a', d:'0.08s' },
            { w:'62%', t:'b', d:'0.16s' },
            { w:'28%', t:'d', d:'0.24s' },
            { w:'80%', t:'a', d:'0.32s' },
            { w:'38%', t:'b', d:'0.40s' },
            { w:'55%', t:'d', d:'0.48s' },
            { w:'66%', t:'b', d:'0.56s' },
          ].map((l, i) => (
            <div key={i} className={`pdv-l pdv-l-${l.t}`} style={{ '--tw': l.w, animationDelay: l.d }}/>
          ))}
          <div className="pdv-caret"/>
        </div>
      </div>

      {/* Browser preview */}
      <div className="pdv-browser">
        <div className="pdv-br-chrome"><i/><i/><i/><div className="pdv-br-pill"/></div>
        <div className="pdv-br-body">
          <div className="pdv-br-hero  pdv-b1"/>
          <div className="pdv-br-row">
            <div className="pdv-br-card pdv-b2"/>
            <div className="pdv-br-card pdv-b3"/>
          </div>
          <div className="pdv-br-lns">
            <div className="pdv-br-ln pdv-b4"/>
            <div className="pdv-br-ln pdv-br-ln-s pdv-b5"/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ── 3. Design — Tokens → Component ────────────────────────────────────────── */
export const DesignPreview = () => (
  <div className="sc-preview sc-preview-premium">
    <div className="dsv-wrap">
      {/* Color token strip */}
      <div className="dsv-tokens">
        {[
          { bg: 'var(--accent)'      },
          { bg: 'var(--accent-deep)' },
          { bg: '#c4b5fd'            },
          { bg: '#111827'            },
          { bg: '#f1f5f9'            },
        ].map(({ bg }, i) => (
          <div key={i} className="dsv-token" style={{ animationDelay: `${i * 0.08}s` }}>
            <span className="dsv-swatch" style={{ background: bg }}/>
          </div>
        ))}
      </div>

      {/* Component canvas */}
      <div className="dsv-canvas">
        <div className="dsv-card">
          <div className="dsv-card-bar"/>
          <div className="dsv-card-icon"/>
          <div className="dsv-card-title"/>
          <div className="dsv-card-text"/>
          <div className="dsv-card-text dsv-t-sm"/>
          <div className="dsv-card-btn"/>
        </div>
        <div className="dsv-cursor">
          <svg viewBox="0 0 24 24">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="#111827" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="dsv-spark dsv-sp1">✦</span>
        <span className="dsv-spark dsv-sp2">✦</span>
      </div>
    </div>
  </div>
);

/* ── 4. Growth — KPI Tiles + Area Chart ─────────────────────────────────────── */
export const GrowthPreview = () => {
  const [v1, setV1] = React.useState(0);
  const [v2, setV2] = React.useState(0);

  React.useEffect(() => {
    let raf;
    const RISE = 1800, HOLD = 1400;
    let phase = 'up', t0 = null;

    const tick = (now) => {
      if (!t0) t0 = now;
      const el = now - t0;
      if (phase === 'up') {
        const p = Math.min(el / RISE, 1), e = 1 - (1 - p) ** 3;
        setV1(Math.round(e * 132));
        setV2(Math.round(e * 47));
        if (p >= 1) { phase = 'hold'; t0 = now; }
      } else if (phase === 'hold') {
        if (el >= HOLD) { phase = 'reset'; t0 = now; }
      } else {
        setV1(0); setV2(0); phase = 'up'; t0 = null;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="sc-preview sc-preview-premium">
      <div className="gv-wrap">
        <div className="gv-kpis">
          <div className="gv-kpi">
            <div className="gv-val">+{v1}<span className="gv-pct">%</span></div>
            <div className="gv-lbl">Users</div>
          </div>
          <div className="gv-kpi gv-hi">
            <div className="gv-val">+{v2}<span className="gv-pct">%</span></div>
            <div className="gv-lbl">Revenue</div>
          </div>
          <div className="gv-kpi">
            <div className="gv-val">8.4<span className="gv-pct">%</span></div>
            <div className="gv-lbl">CVR</div>
          </div>
        </div>
        <div className="gv-chart">
          <svg viewBox="0 0 160 55" className="gv-svg" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gvFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(156,112,255,0.35)"/>
                <stop offset="100%" stopColor="rgba(156,112,255,0.02)"/>
              </linearGradient>
              <linearGradient id="gvStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7e4bfb"/>
                <stop offset="100%" stopColor="#34d399"/>
              </linearGradient>
            </defs>
            <path className="gv-area" d="M0,52 Q25,48 45,38 T90,20 T130,8 T160,1 L160,55 L0,55 Z" fill="url(#gvFill)"/>
            <path className="gv-line" d="M0,52 Q25,48 45,38 T90,20 T130,8 T160,1" stroke="url(#gvStroke)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

/* ── 5. Integrations — Orbital Hub ──────────────────────────────────────────── */
export const IntegrationsPreview = () => (
  <div className="sc-preview sc-preview-premium">
    <div className="siv-wrap">
      <div className="siv-orbit"/>

      <svg className="siv-svg" viewBox="0 0 160 140" fill="none">
        <defs>
          <path id="sip0" d="M 80 70 L 80 18"/>
          <path id="sip1" d="M 80 70 L 131 49"/>
          <path id="sip2" d="M 80 70 L 112 107"/>
          <path id="sip3" d="M 80 70 L 48 107"/>
          <path id="sip4" d="M 80 70 L 29 49"/>
        </defs>
        {["M 80 70 L 80 18","M 80 70 L 131 49","M 80 70 L 112 107","M 80 70 L 48 107","M 80 70 L 29 49"].map((d, i) => (
          <path key={i} d={d} stroke="rgba(156,112,255,0.2)" strokeWidth="1.2" strokeDasharray="3 3"/>
        ))}
        {[0,1,2,3,4].map(i => (
          <circle key={i} r="2.5" fill="#9c70ff">
            <animateMotion dur={`${1.8 + i * 0.22}s`} repeatCount="indefinite" begin={`${i * 0.42}s`}>
              <mpath href={`#sip${i}`}/>
            </animateMotion>
          </circle>
        ))}
      </svg>

      {/* Hub */}
      <div className="siv-hub">
        <div className="siv-hub-ring"/>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      </div>

      {/* Service nodes */}
      {[
        { cls:'siv-n0', lbl:'Slack'  },
        { cls:'siv-n1', lbl:'CRM'    },
        { cls:'siv-n2', lbl:'DB'     },
        { cls:'siv-n3', lbl:'API'    },
        { cls:'siv-n4', lbl:'Pay'    },
      ].map(({ cls, lbl }) => (
        <div key={lbl} className={`siv-node ${cls}`}>
          <span className="siv-lbl">{lbl}</span>
          <div className="siv-chk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
);
