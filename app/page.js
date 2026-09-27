import Link from "next/link";
import { getStoreConfig } from "../lib/config";
import { formatPrice, getProducts } from "../lib/products";

export default function HomePage() {
  const store = getStoreConfig();
  const products = getProducts();
  return (
    <main>
      <section className="hero">
        <div>
          <p className="kicker">A shop people can understand</p>
          <h1>{store.tagline}</h1>
          <p className="lede">
            Three products. Clear prices. No dark patterns.
            You add your name and payment keys. The store does the rest.
          </p>
          <div className="actions">
            <Link className="btn" href="/pricing">See prices</Link>
            <Link className="btn ghost" href="/agents">See who runs it</Link>
          </div>
        </div>
        <aside className="notice">
          <p className="kicker">Owner controls</p>
          <h3>You only change variables</h3>
          <p>
            Store name, support email, accent color, and Stripe keys live in
            environment variables. Products live in one file. Push to GitHub,
            deploy on Vercel.
          </p>
          {store.demoMode ? (
            <p className="demo-flag" style={{ marginTop: 16 }}>
              Demo mode — no real charges until Stripe keys are set
            </p>
          ) : (
            <p style={{ marginTop: 16 }}>Live payments are on.</p>
          )}
        </aside>
      </section>
      <section className="section">
        <h2>What you can buy</h2>
        <p className="sub">Reasonable paywalls. One-time or a small monthly desk.</p>
        <div className="grid">
          {products.map((p) => (
            <Link className="card" key={p.slug} href={`/product/${p.slug}`}>
              <span className="badge">{p.badge}</span>
              <h3>{p.name}</h3>
              <div className="price">{formatPrice(p.priceCents, p.type, p.interval)}</div>
              <p>{p.summary}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="section">
        <h2>How buying works</h2>
        <p className="sub">Three steps. No account maze.</p>
        <div className="how">
          <div className="step"><b>1. Pick a product</b><p>Read the page. See the price. See what is included.</p></div>
          <div className="step"><b>2. Pay the wall</b><p>Stripe Checkout in live mode, or a demo receipt if keys are empty.</p></div>
          <div className="step"><b>3. Get access</b><p>A success page and an email path. Digital goods, delivered simply.</p></div>
        </div>
      </section>
    </main>
  );
}
