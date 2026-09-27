# Harbor Store

A small digital shop you can understand.

You are the legal owner. You are not the daily operator.

Change a few variables. Deploy on Vercel. That is the whole job.

Live repo: https://github.com/CreigT/harbor-store

## What this is

- A public landing page
- A prices page
- Product pages with a clear paywall
- Stripe Checkout when keys exist
- Demo checkout when keys are empty
- Terms, privacy, and a plain “how it runs” page
- Health and catalog APIs for later agents

This is **Day 1** of the autonomous commerce system: the **Public Storefront & Paywall Gateway**.

## You only change these

1. Environment variables (copy `.env.example`)
2. `lib/products.js` if you want different products or prices

## Local run

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000

Leave Stripe keys blank to use demo mode. Buying still works. No card is charged.

## Vercel deploy

1. Import https://github.com/CreigT/harbor-store in Vercel
2. Add env vars from `.env.example`
3. Set `NEXT_PUBLIC_SITE_URL` to your live domain
4. Deploy

### Live payments

1. Create a Stripe account
2. Add `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
3. Set `NEXT_PUBLIC_DEMO_MODE=false`
4. Webhook: `https://your-domain.vercel.app/api/webhook` for `checkout.session.completed`
5. Add `STRIPE_WEBHOOK_SECRET`

## Owner rule

This module may take ordinary catalog payments. It may not change live prices, issue large refunds, or sign contracts by itself.
