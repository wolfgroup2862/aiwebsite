// Hand-drawn (SVG) chibi cartoon of each agent, plus a robot version.
// Original artwork — loosely based on each agent's own photo
// (hair, suit, crossed arms). No external images or AI renders needed.

export type CharacterKind = "wilson" | "mandy";

type Palette = {
  skin: string;
  skinShade: string;
  hair: string;
  hairHi: string;
  suit: string;
  suitDark: string;
  pants: string;
  shirt: string;
  tie: string;
  shoes: string;
};

const HUMAN: Record<CharacterKind, Palette> = {
  wilson: {
    skin: "#f6d3ba",
    skinShade: "#e5b596",
    hair: "#17171f",
    hairHi: "#34343f",
    suit: "#24376f",
    suitDark: "#182752",
    pants: "#1b2550",
    shirt: "#ffffff",
    tie: "#121216",
    shoes: "#111114",
  },
  mandy: {
    skin: "#f8dcc8",
    skinShade: "#ebbfa3",
    hair: "#7b4529",
    hairHi: "#a8673c",
    suit: "#1f1f27",
    suitDark: "#131318",
    pants: "#1f1f27",
    shirt: "#ffffff",
    tie: "#ffffff",
    shoes: "#111114",
  },
};

function Defs({ uid }: { uid: string }) {
  return (
    <defs>
      <linearGradient id={`${uid}-metal`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f2f5fa" />
        <stop offset="0.5" stopColor="#b7c1d3" />
        <stop offset="1" stopColor="#7d8aa3" />
      </linearGradient>
      <linearGradient id={`${uid}-chrome`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#8e86ff" />
        <stop offset="0.55" stopColor="#3f3a9e" />
        <stop offset="1" stopColor="#1d1b52" />
      </linearGradient>
      <linearGradient id={`${uid}-armor`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#56607d" />
        <stop offset="1" stopColor="#2b3147" />
      </linearGradient>
      <filter id={`${uid}-glow`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.4" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

export default function Character({ kind, robot, uid }: { kind: CharacterKind; robot: boolean; uid: string }) {
  const p = HUMAN[kind];
  const isMandy = kind === "mandy";
  const metal = `url(#${uid}-metal)`;
  const chrome = `url(#${uid}-chrome)`;
  const armor = `url(#${uid}-armor)`;
  const glow = `url(#${uid}-glow)`;
  const cyan = "#5ef0ff";

  const skin = robot ? metal : p.skin;
  const hair = robot ? chrome : p.hair;
  const suit = robot ? armor : p.suit;
  const suitDark = robot ? "#1f2436" : p.suitDark;
  const pants = robot ? "#3a4258" : p.pants;
  const shirt = robot ? "#9aa7bd" : p.shirt;

  return (
    <svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <Defs uid={uid} />

      {/* ground shadow */}
      <ellipse cx="120" cy="372" rx="62" ry="9" fill="#000" opacity="0.45" />

      {/* long hair behind body (Mandy) */}
      {isMandy && (
        <path d="M52 118 Q48 34 120 34 Q192 34 188 118 L194 248 Q176 266 154 250 L150 196 L90 196 L86 250 Q64 266 46 248 Z" fill={hair} />
      )}

      {/* legs */}
      {isMandy ? (
        <g>
          <rect x="97" y="312" width="16" height="48" rx="7" fill={robot ? "#8e9bb0" : p.skin} />
          <rect x="127" y="312" width="16" height="48" rx="7" fill={robot ? "#8e9bb0" : p.skin} />
          <path d="M76 282 L164 282 L170 322 L70 322 Z" fill={pants} />
        </g>
      ) : (
        <g>
          <rect x="90" y="282" width="27" height="80" rx="9" fill={pants} />
          <rect x="123" y="282" width="27" height="80" rx="9" fill={pants} />
        </g>
      )}
      {robot && (
        <g>
          <circle cx={isMandy ? 105 : 103.5} cy="336" r="8" fill={metal} stroke="#1f2436" strokeWidth="2" />
          <circle cx={isMandy ? 135 : 136.5} cy="336" r="8" fill={metal} stroke="#1f2436" strokeWidth="2" />
          <circle cx={isMandy ? 105 : 103.5} cy="336" r="2.5" fill={cyan} filter={glow} />
          <circle cx={isMandy ? 135 : 136.5} cy="336" r="2.5" fill={cyan} filter={glow} />
        </g>
      )}

      {/* shoes / boots */}
      <ellipse cx="102" cy="364" rx={isMandy ? 14 : 19} ry="9" fill={robot ? "#2a2f3d" : p.shoes} />
      <ellipse cx="138" cy="364" rx={isMandy ? 14 : 19} ry="9" fill={robot ? "#2a2f3d" : p.shoes} />
      {robot && (
        <g filter={glow}>
          <rect x="92" y="369" width="20" height="3" rx="1.5" fill={cyan} />
          <rect x="128" y="369" width="20" height="3" rx="1.5" fill={cyan} />
        </g>
      )}

      {/* neck */}
      <rect x="110" y="166" width="20" height="20" rx="4" fill={robot ? "#6f7c95" : p.skinShade} />

      {/* jacket */}
      <path d="M66 204 Q68 184 98 182 L142 182 Q172 184 174 204 L178 292 L62 292 Z" fill={suit} />
      <path d="M102 182 L120 224 L138 182 Z" fill={shirt} />
      {isMandy ? (
        <path d="M104 182 L112 204 L120 192 L128 204 L136 182 Z" fill={robot ? "#c9d3e3" : "#ffffff"} />
      ) : robot ? null : (
        <path d="M116 186 L124 186 L127 226 L120 236 L113 226 Z" fill={p.tie} />
      )}
      <path d="M102 182 L118 238 L94 212 Z" fill={suitDark} />
      <path d="M138 182 L122 238 L146 212 Z" fill={suitDark} />
      {!isMandy && !robot && <rect x="146" y="214" width="14" height="4" rx="1" fill="#fff" />}
      <circle cx="120" cy="268" r="3" fill={suitDark} />
      {robot && (
        <g>
          <path d="M80 270 L160 270" stroke="#1f2436" strokeWidth="2" />
          <circle cx="120" cy="208" r="9" fill="#0b1020" />
          <circle cx="120" cy="208" r="6" fill={cyan} filter={glow} className="robot-core" />
        </g>
      )}

      {/* crossed arms */}
      <rect x="58" y="228" width="124" height="28" rx="14" fill={suit} />
      <path d="M70 242 Q120 252 170 238" stroke={suitDark} strokeWidth="2" fill="none" />
      <circle cx="152" cy="238" r="10" fill={skin} />
      <circle cx="88" cy="247" r="10" fill={skin} />
      {!isMandy && !robot && (
        <g>
          <rect x="133" y="230" width="10" height="15" rx="3" fill="#2b2b30" />
          <circle cx="138" cy="237.5" r="3.4" fill="#d7b46a" />
        </g>
      )}
      {robot && (
        <g>
          <circle cx="62" cy="242" r="9" fill={metal} stroke="#1f2436" strokeWidth="2" />
          <circle cx="178" cy="242" r="9" fill={metal} stroke="#1f2436" strokeWidth="2" />
        </g>
      )}

      {/* ears */}
      <circle cx="57" cy="118" r="11" fill={skin} />
      <circle cx="183" cy="118" r="11" fill={skin} />
      {robot && (
        <g filter={glow}>
          <circle cx="55" cy="118" r="4" fill={cyan} />
          <circle cx="185" cy="118" r="4" fill={cyan} />
        </g>
      )}

      {/* antenna (robot) */}
      {robot && (
        <g>
          <line x1="120" y1="50" x2="120" y2="20" stroke="#9aa7bd" strokeWidth="4" strokeLinecap="round" />
          <circle cx="120" cy="16" r="7" fill="#ff4d8d" filter={glow} className="robot-blink" />
        </g>
      )}

      {/* head */}
      <ellipse cx="120" cy="112" rx="64" ry="62" fill={skin} />

      {/* hair */}
      {isMandy ? (
        <g>
          <path d="M58 122 Q54 44 122 42 Q186 44 184 124 Q178 88 156 72 Q132 96 84 96 Q66 102 58 122 Z" fill={hair} />
          <path d="M58 118 Q50 170 66 198 Q62 160 70 124 Z" fill={hair} />
          <path d="M182 118 Q190 170 174 198 Q178 160 170 124 Z" fill={hair} />
          {!robot && <path d="M150 60 Q168 74 174 100" stroke={p.hairHi} strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7" />}
        </g>
      ) : (
        <g>
          <path d="M58 116 Q50 46 112 38 Q176 32 184 102 Q186 112 182 118 Q176 84 156 74 Q134 84 104 80 Q76 82 64 104 Z" fill={hair} />
          <path d="M86 58 Q110 12 162 38 Q172 46 170 62 Q140 42 102 62 Z" fill={hair} />
          {!robot && <path d="M106 56 Q128 40 154 50" stroke={p.hairHi} strokeWidth="4" fill="none" strokeLinecap="round" />}
        </g>
      )}

      {/* face */}
      {robot ? (
        <g>
          <rect x="72" y="104" width="96" height="38" rx="19" fill="#0b1020" stroke="#5a6a8a" strokeWidth="2" />
          <g filter={glow} className="robot-eyes">
            <rect x="88" y="115" width="22" height="15" rx="7.5" fill={cyan} />
            <rect x="130" y="115" width="22" height="15" rx="7.5" fill={cyan} />
          </g>
          <rect x="106" y="152" width="28" height="5" rx="2.5" fill={cyan} opacity="0.85" filter={glow} />
          <path d="M72 164 Q120 186 168 164" stroke="#7d8aa3" strokeWidth="2" fill="none" />
        </g>
      ) : (
        <g>
          <path
            d={isMandy ? "M88 104 Q98 99 108 103" : "M85 103 Q97 95 110 101"}
            stroke={isMandy ? p.hair : p.hair}
            strokeWidth={isMandy ? 3 : 4.5}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d={isMandy ? "M132 103 Q142 99 152 104" : "M130 101 Q143 95 155 103"}
            stroke={p.hair}
            strokeWidth={isMandy ? 3 : 4.5}
            fill="none"
            strokeLinecap="round"
          />
          <g className="blink">
            <ellipse cx="98" cy="122" rx="7.5" ry="9.5" fill="#2a1d1a" />
            <ellipse cx="142" cy="122" rx="7.5" ry="9.5" fill="#2a1d1a" />
            <circle cx="101" cy="118" r="2.6" fill="#fff" />
            <circle cx="145" cy="118" r="2.6" fill="#fff" />
          </g>
          {isMandy && (
            <g stroke="#2a1d1a" strokeWidth="2" strokeLinecap="round">
              <path d="M90 114 L86 111" />
              <path d="M150 114 L154 111" />
            </g>
          )}
          <ellipse cx="86" cy="142" rx="9" ry="5" fill="#ff9aa0" opacity="0.55" />
          <ellipse cx="154" cy="142" rx="9" ry="5" fill="#ff9aa0" opacity="0.55" />
          <path d="M117 134 Q120 137 123 134" stroke={p.skinShade} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {isMandy ? (
            <path d="M108 146 Q120 160 132 146 Q120 151 108 146 Z" fill="#e36a7c" />
          ) : (
            <path d="M108 146 Q120 157 132 146" stroke="#8a3b3b" strokeWidth="3" fill="none" strokeLinecap="round" />
          )}
        </g>
      )}
    </svg>
  );
}
