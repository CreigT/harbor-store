import Link from "next/link";
import { getProduct } from "../../lib/products";
import { getStoreConfig } from "../../lib/config";

export const metadata = { title: "You are in" };

export default function SuccessPage({ searchParams }) {
  const store = getStoreConfig();
  const product = searchParams.product ? getProduct(searchParams.product) : null;
  const demo = searchParams.demo === "1";
  return (
    <main className="plain">
      <p className="kicker">{demo ? "Demo checkout" : "Payment received"}</p>
      <h1>You are in.</h1>
      <p>
        {product ? `“${product.name}” is marked paid.` : "The order completed."}{" "}
        {demo
          ? "This was demo mode, so no card was charged. Add Stripe keys to take real payments."
          : `A receipt is on its way if Stripe has the email. Questions go to ${store.supportEmail}.`}
      </p>
      <div className="actions">
        <Link className="btn" href="/">Back to the shop</Link>
      </div>
    </main>
  );
}
