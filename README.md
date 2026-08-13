# Aurelia Estates

A modern premium real estate company website built with Next.js and prepared for Vercel deployment.

Original repository note: beginner to create website using AI.

## Pages

- Home
- About
- Properties
- Services
- Contact

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Deploying to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js framework settings.
4. Deploy.

The project uses remote placeholder images from Unsplash, configured in `next.config.ts`.

## Fish Scene Game (`/fish-game`)

A small side game linked from the site footer: "如果我是一条鱼" (If I Were a Fish). Visitors write in what fish they'd be in each of four scenes (kitchen, supermarket, fish pond, temple release), and everyone's answers are visible on `/fish-game/results`.

Submissions are stored via `@upstash/redis`. **Without a connected database, answers only live in server memory and are lost on restart/redeploy — this will not reliably work for 100 real participants.** To make it persistent:

1. In the Vercel dashboard, open this project → **Storage** → add a **Redis** database (Upstash, via Vercel Marketplace).
2. Vercel will inject `KV_REST_API_URL` / `KV_REST_API_TOKEN` (or `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`) into the project's environment variables automatically — no code changes needed, `lib/fish-game-store.ts` reads either naming.
3. Redeploy so the new environment variables take effect.
