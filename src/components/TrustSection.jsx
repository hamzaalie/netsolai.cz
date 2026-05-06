const BRANDS = [
  { name: "Perplexity", icon: "🔍", color: "#1a1a2e" },
  { name: "ComfyUI", icon: "🎨", color: "#1e1b4b" },
  { name: "ClickUp", icon: "✅", color: "#0d1b2a" },
  { name: "Moises", icon: "🎵", color: "#0f172a" },
  { name: "Grain", icon: "📹", color: "#1a0a2e" },
  { name: "Letta Desktop", icon: "🤖", color: "#0a1628" },
  { name: "Sunsama", icon: "☀️", color: "#1a1200" },
  { name: "Delta by eToro", icon: "📈", color: "#001a10" },
  { name: "Morgen", icon: "📅", color: "#0a0a1a" },
];

export default function TrustSection() {
  return (
    <section className="trust-wrap">
      <div className="container trust">
        <p className="section-eyebrow">Wall of love</p>
        <h2>
          Powering the world&apos;s most popular
          <br />
          Electron apps
        </h2>
        <div className="brand-grid">
          {BRANDS.map((brand) => (
            <div className="brand-chip" key={brand.name}>
              <span
                className="brand-dot"
                style={{ background: brand.color }}
              >
                {brand.icon}
              </span>
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
