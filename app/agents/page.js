import { getStoreConfig } from "../../lib/config";
export const metadata = { title: "How the store runs" };

const agents = [
  { layer: "Executive", name: "CEO Agent", job: "Sets daily targets. Does not touch cards or contracts alone." },
  { layer: "Revenue", name: "Sales Agent", job: "Watches which product pages convert. Suggests copy tests." },
  { layer: "Customer", name: "Support Agent", job: "Drafts replies from the support inbox. Owner sends legal answers." },
  { layer: "Commerce", name: "Pricing Agent", job: "Recommends price changes. Live price edits need a policy check." },
  { layer: "Finance", name: "Bookkeeping Agent", job: "Reads Stripe payouts and writes a daily cash note." },
  { layer: "Legal", name: "Policy Agent", job: "Keeps terms matched to what the shop actually sells." },
  { layer: "Cybersecurity", name: "Identity Agent", job: "Holds API keys in env vars. No secrets in the repo." },
  { layer: "Infrastructure", name: "Storefront Agent", job: "This site. Serves pages, checkout, and health checks." },
];

export default function AgentsPage() {
  const store = getStoreConfig();
  return (
    <main className="section">
      <h2>How {store.name} runs</h2>
      <p className="sub">
        You are the legal owner and the emergency override. Day-to-day pages,
        prices on screen, and checkout are this module.
      </p>
      <div className="agents-grid">
        {agents.map((a) => (
          <article className="agent" key={a.name}>
            <small>{a.layer}</small>
            <b>{a.name}</b>
            <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>{a.job}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
