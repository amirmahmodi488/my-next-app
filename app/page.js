// app/page.js

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {/* Hero Section */}
      <section style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1>خوش آمدید به برزویه تجهیز</h1>
        <p>خدمات تخصصی برق صنعتی و تجهیزات پزشکی با کیفیت و سرعت</p>
      </section>

      {/* Services Cards */}
      <section style={{ display: "flex", justifyContent: "space-around", gap: "1rem", flexWrap: "wrap" }}>
        {[ "برق صنعتی", "تجهیزات پزشکی", "تحقیق و توسعه" ].map((service) => (
          <div key={service} style={{
            flex: "1 1 250px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
          }}>
            <h3>{service}</h3>
            <p>توضیحات مختصر درباره {service} اینجا قرار می‌گیرد.</p>
          </div>
        ))}
      </section>
    </main>
  )
}
