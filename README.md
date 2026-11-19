# Wolf Group team site

Next.js site for the Wolf Group team (The Roof Realty / TRR).

| Page | What it is |
| --- | --- |
| `/` (same as `/team`) | Team home: waving video of Mandy & Wilson; click a person and they jump down to their intro. Wilson's properties follow his intro. |

## Where to edit

- `app/mandy/profile.ts`, `app/wilson/profile.ts` — each agent's details (name, areas, intro, WhatsApp…)
- `app/_agent/wilson-listings.ts` — Wilson's properties (shown on the team page after Wilson; hidden while empty)
- `public/agent/` — photos, cut-outs and the hero video

Pages are set to `noindex` until the placeholder details are filled in.

## Run

```bash
npm install
npm run dev
```

Deploy: import this repo in Vercel (framework: Next.js, no settings needed).
