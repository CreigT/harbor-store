import { NextResponse } from "next/server";
import { getStripe } from "../../../lib/stripe";
import { isLivePayments } from "../../../lib/config";

export async function POST(request) {
  if (!isLivePayments()) {
    return NextResponse.json({ received: true, mode: "demo" });
  }

  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("order.paid", {
      id: session.id,
      email: session.customer_details?.email || session.customer_email,
      product: session.metadata?.product_slug,
      amount: session.amount_total,
    });
  }

  return NextResponse.json({ received: true });
}
