import Stripe from "stripe";
import { isLivePayments } from "./config";

export function getStripe() {
  if (!isLivePayments()) return null;
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-06-20",
  });
}
