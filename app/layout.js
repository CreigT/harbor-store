import "./globals.css";
import { getStoreConfig } from "../lib/config";
import Link from "next/link";

export const dynamic = "force-dynamic";

export function generateMetadata() {
  const store = getStoreConfig();
  return { title: `${store.name} — simple shop`, description: store.tagline };
}

export default function RootLayout({ children }) {
  const store = getStoreConfig();
  return (
    <html lang="en">
      <body style={{ ["--accent"]: store.accent }}>
        <div className="wrap">
          <header className="topbar">
            <Link className="brand" href="/">
              <strong>{store.name}</strong>
              <span>shop</span>
            </Link>
            <nav className="nav">
              <Link href="/pricing">Prices</Link>
              <Link href="/agents">How it runs</Link>
              <Link href="/legal/terms">Terms</Link>
            </nav>
          </header>
          {children}
          <footer className="footer">
            <div>
              © {new Date().getFullYear()} {store.name}. Owned by {store.owner}.
              <br />
              Support: {store.supportEmail}
            </div>
            <div>
              <Link href="/legal/privacy">Privacy</Link>
              {" · "}
              <Link href="/legal/terms">Terms</Link>
              {" · "}
              <Link href="/agents">Agents</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
