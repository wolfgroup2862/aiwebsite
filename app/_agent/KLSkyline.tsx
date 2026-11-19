// Kuala Lumpur night skyline, drawn in SVG (Merdeka 118, Petronas Twin
// Towers, KL Tower + city blocks with lit windows). Pure markup, no images.

function rand(i: number, n: number) {
  const x = Math.sin(i * 12.9898 + n * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

// Petronas-style stepped tower outline centred on cx.
function twinTower(cx: number) {
  const tiers: [number, number][] = [
    [600, 36],
    [330, 31],
    [250, 27],
    [200, 22],
    [165, 17],
    [140, 12],
    [120, 6],
  ];
  let left = "";
  let right = "";
  tiers.forEach(([y, hw], i) => {
    const nextY = i + 1 < tiers.length ? tiers[i + 1][0] : 108;
    left += ` L${cx - hw} ${y} L${cx - hw} ${nextY}`;
    right = ` L${cx + hw} ${nextY} L${cx + hw} ${y}` + right;
  });
  return `M${cx - 36} 600${left} L${cx - 2} 108 L${cx} 34 L${cx + 2} 108${right} Z`;
}

const STARS = Array.from({ length: 70 }, (_, i) => ({
  x: rand(i, 7) * 1440,
  y: -300 + rand(i, 8) * 420,
  r: rand(i, 9) < 0.85 ? 1 : 1.8,
  o: 0.3 + rand(i, 10) * 0.6,
}));

const FAR = Array.from({ length: 34 }, (_, i) => ({
  x: i * 44 - 10 + rand(i, 1) * 10,
  w: 34 + rand(i, 2) * 26,
  h: 90 + rand(i, 3) * 150,
}));

const MID = Array.from({ length: 24 }, (_, i) => ({
  x: i * 62 - 20 + rand(i, 4) * 14,
  w: 46 + rand(i, 5) * 30,
  h: 70 + rand(i, 6) * 120,
}));

export default function KLSkyline({ className }: { className?: string }) {
  const towerA = 820;
  const towerB = 900;
  return (
    <svg className={className} viewBox="0 -300 1440 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id="kl-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#03050f" />
          <stop offset="0.55" stopColor="#0d1640" />
          <stop offset="0.85" stopColor="#2b2163" />
          <stop offset="1" stopColor="#5b2e5e" />
        </linearGradient>
        <radialGradient id="kl-haze" cx="0.58" cy="1" r="0.6">
          <stop offset="0" stopColor="#ff9a5c" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ff9a5c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="kl-steel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2c3780" />
          <stop offset="0.5" stopColor="#aab8f2" />
          <stop offset="1" stopColor="#2c3780" />
        </linearGradient>
        <linearGradient id="kl-118" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1d2a66" />
          <stop offset="0.5" stopColor="#5f74c9" />
          <stop offset="1" stopColor="#1d2a66" />
        </linearGradient>
        <filter id="kl-glow" x="-50%" y="-20%" width="200%" height="140%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="kl-win" width="10" height="12" patternUnits="userSpaceOnUse">
          <rect x="2" y="3" width="4" height="5" fill="#ffd27a" opacity="0.55" />
        </pattern>
        <pattern id="kl-win2" width="14" height="16" patternUnits="userSpaceOnUse">
          <rect x="3" y="4" width="5" height="6" fill="#9fd8ff" opacity="0.35" />
          <rect x="9" y="11" width="3" height="3" fill="#ffd27a" opacity="0.5" />
        </pattern>
      </defs>

      <rect y="-300" width="1440" height="900" fill="url(#kl-sky)" />
      <rect y="-300" width="1440" height="900" fill="url(#kl-haze)" />
      <g fill="#fff">
        {STARS.map((st, i) => (
          <circle key={i} cx={st.x} cy={st.y} r={st.r} opacity={st.o} className={i % 5 === 0 ? "kl-twinkle" : undefined} />
        ))}
      </g>
      <circle cx="1250" cy="-150" r="24" fill="#fff6d8" filter="url(#kl-glow)" />

      {/* far city */}
      <g fill="#121a44">
        {FAR.map((b, i) => (
          <rect key={i} x={b.x} y={600 - b.h} width={b.w} height={b.h} />
        ))}
      </g>

      {/* Merdeka 118 */}
      <g>
        <path d="M470 600 L482 250 L500 150 L510 120 L516 10 L522 120 L532 150 L550 250 L562 600 Z" fill="url(#kl-118)" />
        <path d="M516 120 L500 600 M516 120 L532 600 M490 300 L542 300 M486 420 L546 420" stroke="#9fb0ff" strokeWidth="1" opacity="0.4" />
        <rect x="503" y="160" width="26" height="440" fill="url(#kl-win2)" opacity="0.7" />
        <circle cx="516" cy="12" r="3" fill="#ff5a6e" className="kl-blink" />
      </g>

      {/* KL Tower */}
      <g>
        <rect x="1140" y="230" width="16" height="370" fill="#1a2458" />
        <path d="M1118 215 Q1148 192 1178 215 L1172 232 Q1148 244 1124 232 Z" fill="#2c3a85" />
        <path d="M1122 222 Q1148 234 1174 222" stroke="#7ff0ff" strokeWidth="3" fill="none" filter="url(#kl-glow)" />
        <rect x="1146" y="120" width="4" height="80" fill="#8a97c8" />
        <circle cx="1148" cy="118" r="3" fill="#ff5a6e" className="kl-blink" />
      </g>

      {/* Petronas Twin Towers */}
      <g>
        <path d={twinTower(towerA)} fill="url(#kl-steel)" />
        <path d={twinTower(towerB)} fill="url(#kl-steel)" />
        <rect x={towerA + 30} y="372" width={towerB - towerA - 60} height="7" fill="#8fa0e6" />
        <path d={`M${towerA + 30} 381 L${(towerA + towerB) / 2} 420 L${towerB - 30} 381`} stroke="#8fa0e6" strokeWidth="2" fill="none" opacity="0.6" />
      </g>
      <g stroke="#e6ecff" strokeWidth="1.2" opacity="0.45">
        {[towerA, towerB].map((cx) => (
          <g key={cx}>
            <line x1={cx - 12} y1="150" x2={cx - 12} y2="600" />
            <line x1={cx} y1="120" x2={cx} y2="600" />
            <line x1={cx + 12} y1="150" x2={cx + 12} y2="600" />
          </g>
        ))}
      </g>

      {/* mid city with lit windows */}
      <g>
        {MID.map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={600 - b.h} width={b.w} height={b.h} fill="#0b1030" />
            <rect x={b.x + 4} y={606 - b.h} width={b.w - 8} height={b.h - 10} fill={i % 3 ? "url(#kl-win)" : "url(#kl-win2)"} className={i % 4 === 0 ? "kl-twinkle" : undefined} />
          </g>
        ))}
      </g>

      {/* rooftop the agent stands on */}
      <path d="M0 560 L1440 560 L1440 600 L0 600 Z" fill="#05060f" />
      <path d="M0 560 L1440 560" stroke="#3b4a9a" strokeWidth="2" opacity="0.7" />
    </svg>
  );
}
