import { getStoreConfig } from "../../../lib/config";
export const metadata = { title: "Terms" };

export default function TermsPage() {
  const store = getStoreConfig();
  return (
    <main className="legal">
      <h1>Terms</h1>
      <p>
        {store.name} sells digital products and a simple membership. By paying,
        you buy a license to use the files for yourself. You may not resell the
        files as your own product.
      </p>
      <p>
        One-time products are delivered after payment. Memberships bill monthly
        until you cancel in the Stripe billing portal or by emailing {store.supportEmail}.
      </p>
      <p>
        Refunds: if a file does not arrive or is broken, email support within 7
        days. We will replace it or refund the last charge.
      </p>
      <p>
        The human named as owner is the legal seller. Software agents may operate
        the storefront, but they do not replace the owner for tax or contract duties.
      </p>
    </main>
  );
}
