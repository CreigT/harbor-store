const products = [
  {
    slug: "starter-notebook",
    name: "Starter Notebook",
    priceCents: 900,
    type: "one_time",
    badge: "Most popular",
    summary: "A clean digital notebook template. Pay once, keep it forever.",
    description: "A simple notebook system. No subscription. Download after purchase.",
    includes: ["Printable PDF notebook", "Editable document file", "Lifetime updates for this product", "Email delivery in minutes"],
  },
  {
    slug: "workshop-pass",
    name: "Workshop Pass",
    priceCents: 2900,
    type: "one_time",
    badge: "Best value",
    summary: "A short paid workshop guide plus worksheets.",
    description: "A complete self-paced workshop. One payment unlocks the full pack.",
    includes: ["Workshop guide (PDF)", "Worksheet pack", "Checklist for finishing the work", "Email delivery in minutes"],
  },
  {
    slug: "member-desk",
    name: "Member Desk",
    priceCents: 1200,
    type: "subscription",
    interval: "month",
    badge: "Cancel anytime",
    summary: "A small monthly membership for new drops and templates.",
    description: "A low monthly price. Cancel anytime. No annual lock-in.",
    includes: ["New template each month", "Member-only notes", "Cancel anytime", "Card charged monthly by Stripe"],
  },
];

export function getProducts() {
  return products;
}

export function getProduct(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export function formatPrice(cents, type, interval) {
  const dollars = (cents / 100).toFixed(2).replace(/\.00$/, "");
  if (type === "subscription") {
    return `$${dollars}/${interval === "year" ? "yr" : "mo"}`;
  }
  return `$${dollars}`;
}
