# DocuExtract AI

DocuExtract AI is a public, frontend-only SaaS demonstration for **AI document data extraction**, **OCR software**, invoice processing, and intelligent document review. It was created by Ahsan Inam for XsolAI as a portfolio and product-discovery asset.

## What is included

- SEO-focused landing and pricing pages
- Local demo login, signup, forgot-password, checkout, and onboarding flows
- Document intelligence workspace with a synthetic scanned invoice
- Editable extraction fields, confidence review, approval, rejection, and export states
- Searchable document table, extraction history, templates, review queue, analytics, integrations, settings, and billing
- Responsive desktop, tablet, and mobile layouts
- Route metadata, canonical URLs, Open Graph cards, JSON-LD, sitemap, and robots rules
- Browser QA evidence and a passed design comparison

## Important demo notice

This repository contains no OCR backend, storage service, authentication provider, payment processor, customer document, private API, or operational data. All documents, extracted fields, confidence values, users, integrations, and subscriptions are deterministic simulations. Form data is never transmitted.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Architecture

- Next.js App Router and TypeScript
- React Server Components for route shells
- Isolated Client Components for local interactions
- Recharts for deterministic analytics
- Phosphor Icons for accessible interface iconography
- Generated raster assets for the OCR reference and synthetic invoice
- `localStorage` for demo persistence

## IP notice

© 2026 XsolAI. All rights reserved. Created by Ahsan Inam.
