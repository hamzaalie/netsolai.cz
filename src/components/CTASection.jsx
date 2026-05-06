export default function CTASection() {
  return (
    <section className="cta-wrap">
      <div className="container cta">
        <p className="cta-eyebrow">Get started</p>
        <h2>
          Streamline your Electron{" "}
          <span style={{ color: "#a5b4fc" }}>App</span> Infrastructure
        </h2>
        <p>
          ToDesktop automates your Electron app development, deployment, and
          updates. You write the application — we handle the infrastructure.
        </p>
        <div className="cta-buttons">
          <a className="btn-primary large" href="#">
            Start free trial
          </a>
          <a className="btn-secondary large" href="#">
            Read docs →
          </a>
        </div>
      </div>
    </section>
  );
}
