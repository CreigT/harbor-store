import Link from "next/link";
import { formatPrice, getProducts } from "../../lib/products";

export const metadata = { title: "Prices" };

export default function PricingPage() {
  const products = getProducts();
  return (
    <main className="section">
      <h2>Prices</h2>
      <p className="sub">Pay once, or a small monthly membership. No hidden tiers.</p>
      <div className="grid">
        {products.map((p) => (
          <article className="card" key={p.slug}>
            <span className="badge">{p.badge}</span>
            <h3>{p.name}</h3>
            <div className="price">{formatPrice(p.priceCents, p.type, p.interval)}</div>
            <p>{p.summary}</p>
            <ul className="includes">
              {p.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="btn" href={`/product/${p.slug}`}>View and buy</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
