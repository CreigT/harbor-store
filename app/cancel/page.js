import Link from "next/link";

export const metadata = { title: "Checkout canceled" };

export default function CancelPage({ searchParams }) {
  const slug = searchParams.product;
  return (
    <main className="plain">
      <p className="kicker">No charge</p>
      <h1>Checkout stopped.</h1>
      <p>Nothing was billed. You can go back to the product and try again when you want.</p>
      <div className="actions">
        <Link className="btn" href={slug ? `/product/${slug}` : "/pricing"}>Return to product</Link>
        <Link className="btn ghost" href="/">Home</Link>
      </div>
    </main>
  );
}
