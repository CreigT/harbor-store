"use client";

import { useState } from "react";

export default function BuyButton({ slug, demoMode }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function buy() {
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      window.location.href = data.url;
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  }

  return (
    <div>
      <button className="btn wide" onClick={buy} disabled={busy}>
        {busy ? "Opening checkout…" : demoMode ? "Continue in demo mode" : "Continue to payment"}
      </button>
      {error ? <p style={{ color: "#8b3a2f" }}>{error}</p> : null}
    </div>
  );
}
