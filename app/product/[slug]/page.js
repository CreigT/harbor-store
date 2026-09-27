import { notFound } from "next/navigation";
import { formatPrice, getProduct, getProducts } from "../../../lib/products";
import { getStoreConfig } from "../../../lib/config";
import BuyButton from "./buy-button";

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product" };
  return { title: product.name, description: product.summary };
}

export default function ProductPage({ params }) {
  const product = getProduct(params.slug);
  const store = getStoreConfig();
  if (!product) notFound();
  return (
    <main className="product-page">
      <article>
        <p className="kicker">{product.type === "subscription" ? "Membership" : "One-time"}</p>
        <h1>{product.name}</h1>
        <p className="lede">{product.description}</p>
        <ul className="includes">
          {product.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <aside className="buybox">
        <span className="badge">{product.badge}</span>
        <h3 style={{ marginTop: 12 }}>{product.name}</h3>
        <div className="price">{formatPrice(product.priceCents, product.type, product.interval)}</div>
        <p>{product.summary}</p>
        <BuyButton slug={product.slug} demoMode={store.demoMode} />
        <p style={{ fontSize: 14, marginTop: 14 }}>Questions? {store.supportEmail}</p>
      </aside>
    </main>
  );
}
