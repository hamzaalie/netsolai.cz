import { useState } from "react";

const PLANS = [
  {
    name: "Essential",
    desc: "For simple desktop apps and solo developers.",
    monthly: 100,
    yearly: 80,
    cta: "Start free trial",
    ctaStyle: "outline",
    features: [
      { text: "<strong>70</strong> builds/month" },
      { text: "<strong>30 day</strong> build retention" },
      { text: "<strong>10,000</strong> downloads/month" },
      { text: "<strong>Unlimited</strong> App Updates" },
      { text: "Windows, Mac & Linux build servers" },
      { text: "Code signing" },
      { text: "Native app installers" },
      { text: "CDN-backed downloads/updates" },
    ],
  },
  {
    name: "Performance",
    desc: "For sophisticated desktop apps and small teams.",
    monthly: 300,
    yearly: 240,
    cta: "Start free trial",
    ctaStyle: "solid",
    featured: true,
    features: [
      { text: "Everything in Essential, plus:" },
      { text: "<strong>240</strong> builds/month" },
      { text: "<strong>60 day</strong> build retention" },
      { text: "<strong>30,000</strong> downloads/month" },
      { text: "Auto-update smoke testing" },
      { text: "Private Slack-channel support" },
      { text: "Download &amp; build analytics" },
      { text: "MSI and PKG installers" },
    ],
  },
  {
    name: "Scale",
    desc: "For advanced features and dedicated support.",
    monthly: 1200,
    yearly: 960,
    cta: "Start free trial",
    ctaStyle: "outline",
    features: [
      { text: "Everything in Performance, plus:" },
      { text: "<strong>Unlimited</strong> builds/month" },
      { text: "<strong>360 day</strong> build retention" },
      { text: "<strong>100,000</strong> downloads/month" },
      { text: "Support for staggered rollouts" },
      { text: "Account manager" },
      { text: "Priority support & onboarding" },
      { text: "Integration assistance" },
    ],
  },
  {
    name: "Enterprise",
    desc: "Customised to suit your needs.",
    price: "Contact sales",
    cta: "Contact sales",
    ctaStyle: "outline",
    features: [
      { text: "Everything in Scale, plus:" },
      { text: "<strong>Unlimited</strong> builds/month" },
      { text: "<strong>Unlimited</strong> build retention" },
      { text: "<strong>Unlimited</strong> downloads/month" },
      { text: "Custom billing" },
      { text: "Custom features" },
      { text: "Optional self-host infra" },
      { text: "Guaranteed response SLA" },
    ],
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="pricing-wrap">
      <div className="container pricing">
        <p className="section-eyebrow">Pricing</p>
        <h2>Choose a plan that fits your needs</h2>
        <p className="section-sub" style={{ marginBottom: "2rem" }}>
          All plans include a <strong>7-day free trial</strong>. No credit card
          required.
        </p>

        <div className="pricing-toggle">
          <button
            className={`toggle-opt${!yearly ? " active" : ""}`}
            onClick={() => setYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`toggle-opt${yearly ? " active" : ""}`}
            onClick={() => setYearly(true)}
          >
            Yearly
            <span className="save-tag">-20%</span>
          </button>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <div
              className={`plan-card${plan.featured ? " featured" : ""}`}
              key={plan.name}
            >
              {plan.featured && (
                <div className="popular-tag">Most Popular</div>
              )}
              <div className="plan-name">{plan.name}</div>
              <div className="plan-desc">{plan.desc}</div>
              <div className="plan-price">
                {plan.price ? (
                  <big style={{ fontSize: "1.3rem" }}>{plan.price}</big>
                ) : (
                  <>
                    <big>
                      ${yearly ? plan.yearly : plan.monthly}
                    </big>
                    <small>/ month</small>
                  </>
                )}
              </div>
              <a className={`plan-cta ${plan.ctaStyle}`} href="#">
                {plan.cta}
              </a>
              <div className="plan-label">
                {plan.name === "Enterprise"
                  ? "Everything in Scale, plus"
                  : `${plan.name} plan includes`}
                :
              </div>
              <ul className="plan-features">
                {plan.features.map((f, i) => (
                  <li key={i}>
                    <span className="fi">✓</span>
                    <span dangerouslySetInnerHTML={{ __html: f.text }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
