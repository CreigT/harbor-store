export function getStoreConfig() {
  return {
    name: process.env.NEXT_PUBLIC_STORE_NAME || "Harbor",
    tagline:
      process.env.NEXT_PUBLIC_STORE_TAGLINE ||
      "Simple products. Fair prices. Agents run the rest.",
    owner: process.env.NEXT_PUBLIC_OWNER_NAME || "Store Owner",
    supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@example.com",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    accent: process.env.NEXT_PUBLIC_ACCENT || "#1f6b4a",
    demoMode:
      process.env.NEXT_PUBLIC_DEMO_MODE !== "false" ||
      !process.env.STRIPE_SECRET_KEY,
    stripePublishable: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
  };
}

export function isLivePayments() {
  return Boolean(process.env.STRIPE_SECRET_KEY) && process.env.NEXT_PUBLIC_DEMO_MODE !== "true";
}
