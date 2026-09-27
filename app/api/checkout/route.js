import { NextResponse } from "next/server";
import { getProduct } from "../../../lib/products";
import { getStoreConfig, isLivePayments } from "../../../lib/config";
import { getStripe } from "../../../lib/stripe";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const product = getProduct(body.slug);
  if (!product) {
    return NextResponse.json({ error: "Unknown product" }, { status: 404 });
  }

  const store = getStoreConfig();
  const origin = store.siteUrl.replace(/\/$/, "");

  if (!isLivePayments()) {
    const url = `${origin}/success?demo=1&product=${encodeURIComponent(product.slug)}`;
    return NextResponse.json({ url, mode: "demo" });
  }

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: product.type === "subscription" ? "subscription" : "payment",
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cancel?product=${encodeURIComponent(product.slug)}`,
    customer_email: body.email || undefined,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: product.priceCents,
          product_data: { name: product.name, description: product.summary },
          ...(product.type === "subscription"
            ? { recurring: { interval: product.interval || "month" } }
            : {}),
        },
      },
    ],
    metadata: { product_slug: product.slug, store: store.name },
  });

  return NextResponse.json({ url: session.url, mode: "live" });
}
