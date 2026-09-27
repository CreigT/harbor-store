import { getStoreConfig } from "../../../lib/config";
export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  const store = getStoreConfig();
  return (
    <main className="legal">
      <h1>Privacy</h1>
      <p>We collect the email and payment details needed to complete an order. Card numbers go to Stripe, not to this website.</p>
      <p>We use that email to send the product, a receipt, and rare service notes. We do not sell customer lists.</p>
      <p>To ask what we store or to delete an email record, write to {store.supportEmail}.</p>
    </main>
  );
}
