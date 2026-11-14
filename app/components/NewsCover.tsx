import type { NewsItem } from "../lib/news";

// Our own cover graphic for a news item: category, headline figure, date.
// Drawn as inline SVG so no publisher photos are copied onto the site.
const PALETTE: Record<NewsItem["category"], { bg: string; accent: string }> = {
  Industrial: { bg: "#1f2a2e", accent: "#d39a4a" },
  Commercial: { bg: "#23202b", accent: "#c9a36a" },
  Land: { bg: "#26241c", accent: "#c7b26a" },
  Market: { bg: "#1d2420", accent: "#9fbf7a" },
};

export default function NewsCover({ item }: { item: NewsItem }) {
  const p = PALETTE[item.category];
  const label = `${item.category} news: ${item.figure} ${item.figureLabel}`;
  return (
    <svg className="news-cover" viewBox="0 0 640 360" role="img" aria-label={label}>
      <rect width="640" height="360" fill={p.bg} />
      {/* skyline motif: factory roofs for industrial, towers otherwise */}
      {item.category === "Industrial" ? (
        <path
          d="M0 300 L0 250 L60 220 L60 250 L120 220 L120 250 L180 220 L180 250 L240 220 L240 300 Z M260 300 L260 230 L300 230 L300 190 L320 190 L320 230 L380 230 L380 300 Z M400 300 L400 240 L470 210 L540 240 L540 300 Z M560 300 L560 225 L640 225 L640 300 Z"
          fill="#ffffff"
          opacity="0.06"
        />
      ) : (
        <path
          d="M0 300 L0 230 L50 230 L50 180 L90 180 L90 300 Z M110 300 L110 150 L170 150 L170 300 Z M190 300 L190 210 L240 210 L240 300 Z M260 300 L260 120 L320 120 L320 300 Z M340 300 L340 200 L400 200 L400 300 Z M420 300 L420 160 L470 160 L470 300 Z M490 300 L490 220 L560 220 L560 300 Z M580 300 L580 190 L640 190 L640 300 Z"
          fill="#ffffff"
          opacity="0.06"
        />
      )}
      <rect x="0" y="300" width="640" height="60" fill="#000" opacity="0.25" />
      <text x="40" y="64" fill={p.accent} fontFamily="Arial, Helvetica, sans-serif" fontSize="20" letterSpacing="4">
        {item.category.toUpperCase()}
      </text>
      <text x="40" y="190" fill="#fbfaf7" fontFamily="Georgia, 'Times New Roman', serif" fontSize="92">
        {item.figure}
      </text>
      <text x="42" y="232" fill="#fbfaf7" opacity="0.75" fontFamily="Arial, Helvetica, sans-serif" fontSize="22">
        {item.figureLabel}
      </text>
      <text x="40" y="338" fill="#fbfaf7" opacity="0.7" fontFamily="Arial, Helvetica, sans-serif" fontSize="18">
        {item.date} · Malaysia
      </text>
    </svg>
  );
}
