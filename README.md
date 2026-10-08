# BestFix Home — Website

Production-quality residential property maintenance website built with Next.js 15, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# → Edit .env.local with your Resend API key

# Run development server
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Fonts:** DM Serif Display, Source Sans 3, JetBrains Mono (via `next/font`)
- **Email:** Resend SDK
- **Image compression:** browser-image-compression (client-side)
- **Deployment:** Vercel-ready (standalone output)

## Project Structure

```
src/
├── app/            # Pages (App Router file-based routing)
├── components/
│   ├── layout/     # Header, Footer, MobileBottomBar, SkipLink
│   ├── ui/         # Button, Card, Accordion, BeforeAfterSlider, etc.
│   ├── sections/   # Page-specific section components
│   └── forms/      # EstimateForm, FormField
├── data/           # Static data (services, FAQ, projects, navigation)
├── lib/            # Email sending, rate limiting
└── styles/         # globals.css with design tokens
```

## Environment Variables

See `.env.example` for the full list. Required for the estimate form:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key for sending estimate emails |
| `EMAIL_TO` | Primary recipient (info@bestfixhome.com) |
| `EMAIL_CC` | CC recipient (contact@bestfixhome.com) |
| `EMAIL_FROM` | Sender address (must be verified in Resend) |

## Rate Limiter

The API route includes a **basic, in-memory rate limiter** (5 requests per IP per 15 minutes by default). This is suitable for development and low-traffic production. It resets when the server restarts.

For high-traffic production, replace with a Redis-backed solution or use Vercel's built-in rate limiting.


## Deployment (Vercel)

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

The project uses `output: "standalone"` in `next.config.ts` for optimized Vercel deployment.

## Design System

- **Palette:** Flame (#D94215 decorative, #BF3810 buttons), Ember (#8B3A1A), Charred (#3A1808), Stone (#F5F2ED), Cloud (#FFFFFF), Iron (#4B5563), Slate (#1E293B)
- **Dark mode:** Follows system preference via `prefers-color-scheme`
- **Typography:** DM Serif Display (headings) + Source Sans 3 (body) + JetBrains Mono (badges/fine print)
- **Reduced motion:** Respects `prefers-reduced-motion`
- **Accessibility:** Skip link, visible focus states, keyboard navigable, labeled form fields
