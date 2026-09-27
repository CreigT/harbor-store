import { NextResponse } from "next/server";
import { getStoreConfig, isLivePayments } from "../../../lib/config";
import { getProducts } from "../../../lib/products";

export async function GET() {
  const store = getStoreConfig();
  return NextResponse.json({
    ok: true,
    store: store.name,
    products: getProducts().length,
    payments: isLivePayments() ? "live" : "demo",
    time: new Date().toISOString(),
  });
}
