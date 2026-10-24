// Decorative SVG illustrations used until real photography is added.
import type { Package } from "@/lib/site";

const burj = "M0 0V-100h8v-80h8v-70h6v-60h4l1-60 1 60h4v60h6v70h8v80h8V0z";

export function HeroArt({ id = "hero" }: { id?: string }) {
  return (
    <svg className="hero-art" viewBox="0 0 800 400" preserveAspectRatio="xMaxYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1e3a8a" />
          <stop offset=".5" stopColor="#3d4f9e" />
          <stop offset=".78" stopColor="#c7707a" />
          <stop offset="1" stopColor="#f4a259" />
        </linearGradient>
        <radialGradient id={`${id}-sun`} cx=".7" cy=".9" r=".45">
          <stop offset="0" stopColor="#ffd59a" stopOpacity=".95" />
          <stop offset="1" stopColor="#ffd59a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="400" fill={`url(#${id}-sky)`} />
      <rect width="800" height="400" fill={`url(#${id}-sun)`} />
      {/* far skyline */}
      <g fill="#33407e" opacity=".75">
        <rect x="300" y="300" width="26" height="100" />
        <rect x="332" y="270" width="20" height="130" />
        <rect x="430" y="250" width="28" height="150" />
        <rect x="465" y="285" width="22" height="115" />
        <rect x="640" y="240" width="26" height="160" />
        <rect x="700" y="275" width="30" height="125" />
        <rect x="740" y="230" width="20" height="170" />
      </g>
      {/* near skyline */}
      <g fill="#14245e">
        <path d="M360 400v-60h10v-10h4v10h10v60z" />
        <path d="M380 400v-55a22 22 0 0 1 44 0v55z" />
        <rect x="392" y="300" width="4" height="40" />
        <rect x="408" y="300" width="4" height="40" />
        <rect x="492" y="300" width="24" height="100" />
        <rect x="520" y="320" width="18" height="80" />
        <path transform="translate(560 400)" d={burj} />
        <rect x="610" y="290" width="22" height="110" />
        <path d="M670 400v-140l18-14v154z" />
        <rect x="694" y="320" width="26" height="80" />
        <rect x="760" y="300" width="40" height="100" />
      </g>
      {/* plane */}
      <g transform="translate(600 120) rotate(-10) scale(1.6)" fill="#fff">
        <path d="M-40 0c0-3 3-5 8-5h46l14-16h8l-8 16h18l6-7h5l-3 9 3 9h-5l-6-7H23l8 16h-8L9 5h-41c-5 0-8-2-8-5z" />
      </g>
      {/* brand swoosh */}
      <path d="M800 150C770 290 690 370 540 400h260z" fill="#e11d2e" />
      <path d="M800 120C760 280 660 365 500 400" stroke="#fff" strokeWidth="3" fill="none" opacity=".9" />
    </svg>
  );
}

const skies: Record<Package["art"], [string, string, string]> = {
  towers: ["#2b4aa8", "#d9837a", "#f7c07a"],
  twin: ["#16307a", "#5a62b3", "#f0a27a"],
  mosque: ["#3a64b8", "#e9a26f", "#ffd9a0"],
  domes: ["#2a4f9a", "#8fb3e0", "#f5d7a8"],
  desert: ["#e8834a", "#f3b061", "#ffe0a3"],
  mountains: ["#3c7bc4", "#9fc8ee", "#e8f2fb"],
};

const silhouettes: Record<Package["art"], React.ReactNode> = {
  towers: (
    <g fill="#1b2457">
      <rect x="40" y="130" width="22" height="70" />
      <rect x="66" y="110" width="18" height="90" />
      <path transform="translate(128 200) scale(.62)" d={burj} />
      <rect x="180" y="120" width="20" height="80" />
      <path d="M206 200v-95l16-10v105z" />
      <rect x="228" y="140" width="30" height="60" />
    </g>
  ),
  twin: (
    <g fill="#141c4a">
      <rect x="30" y="150" width="30" height="50" />
      <path d="M110 200V90l8-10 2-40 2 40 8 10v110zM170 200V90l8-10 2-40 2 40 8 10v110z" />
      <rect x="130" y="120" width="40" height="5" />
      <rect x="220" y="140" width="24" height="60" />
      <rect x="250" y="160" width="30" height="40" />
    </g>
  ),
  mosque: (
    <g fill="#2a2350">
      <path d="M90 200v-60a60 60 0 0 1 120 0v60z" />
      <path d="M60 200v-30a30 30 0 0 1 60 0v30zM180 200v-30a30 30 0 0 1 60 0v30z" />
      <rect x="148" y="70" width="4" height="12" />
      <path d="M48 200V95l4-14 4 14v105zM244 200V95l4-14 4 14v105zM74 200v-80l3-10 3 10v80zM220 200v-80l3-10 3 10v80z" />
    </g>
  ),
  domes: (
    <g fill="#1d2f62">
      <rect x="20" y="160" width="260" height="40" />
      <path d="M60 160a20 20 0 0 1 40 0zM130 160a20 20 0 0 1 40 0zM200 160a20 20 0 0 1 40 0z" />
      <path d="M30 200V80l5-14 5 14v120zM260 200V80l5-14 5 14v120zM110 160V95l4-12 4 12v65zM182 160V95l4-12 4 12v65z" />
    </g>
  ),
  desert: (
    <g>
      <circle cx="210" cy="90" r="26" fill="#fff4d6" opacity=".9" />
      <path d="M0 150c60-30 120-20 170 10s100 20 130 0v40H0z" fill="#d07a3a" />
      <path d="M0 175c80-25 150 0 300-15v40H0z" fill="#a8562a" />
      <path d="M90 168c3-8 8-12 12-12s5 4 9 4 6-6 10-6l2 8-4 6h-3v8h-3v-8h-14v8h-3v-8z" fill="#5b2c14" />
    </g>
  ),
  mountains: (
    <g>
      <path d="M0 200 70 90l40 50 50-80 70 100 30-30 40 70z" fill="#2d4c7a" />
      <path d="M70 90 55 114l15-6 12 8zM160 60l-20 32 16-6 10 10 12-8z" fill="#fff" />
      <path d="M0 200c60-25 140-30 300-10v10z" fill="#3f7a4a" />
    </g>
  ),
};

export function DestinationArt({ pkg }: { pkg: Package }) {
  if (pkg.image) return <img src={pkg.image} alt="" loading="lazy" />;
  const [a, b, c] = skies[pkg.art];
  const id = `sky-${pkg.slug}`;
  return (
    <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset=".65" stopColor={b} />
          <stop offset="1" stopColor={c} />
        </linearGradient>
      </defs>
      <rect width="300" height="200" fill={`url(#${id})`} />
      {silhouettes[pkg.art]}
    </svg>
  );
}

function Passport({ x, y, rotate, cover }: { x: number; y: number; rotate: number; cover: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <rect width="170" height="236" rx="12" fill={cover} />
      <rect x="8" y="8" width="154" height="220" rx="8" fill="none" stroke="#d9b45a" strokeOpacity=".5" />
      <text x="85" y="48" textAnchor="middle" fill="#d9b45a" fontFamily="Georgia, serif" fontSize="17" letterSpacing="3">PASSPORT</text>
      <circle cx="85" cy="118" r="34" fill="none" stroke="#d9b45a" strokeWidth="3" />
      <path d="M85 92v52M63 104c8 10 36 10 44 0M63 132c8-10 36-10 44 0M59 118h52" stroke="#d9b45a" strokeWidth="2" fill="none" />
      <rect x="45" y="186" width="80" height="6" rx="3" fill="#d9b45a" opacity=".7" />
      <rect x="58" y="200" width="54" height="5" rx="2.5" fill="#d9b45a" opacity=".5" />
    </g>
  );
}

// Passports + boarding pass for the visa banner. Not mirrored in RTL (it contains text).
export function VisaArt() {
  return (
    <svg className="banner-visual" viewBox="0 0 520 300" preserveAspectRatio="xMidYMid meet" overflow="hidden" aria-hidden="true">
      <defs>
        <radialGradient id="visa-glow" cx=".5" cy=".5" r=".25">
          <stop offset="0" stopColor="#4c66c4" />
          <stop offset="1" stopColor="#1e3a8a" />
        </radialGradient>
      </defs>
      <rect x="-600" y="-300" width="1720" height="900" fill="url(#visa-glow)" />
      {/* boarding pass */}
      <g transform="translate(250 28) rotate(14)">
        <rect width="230" height="110" rx="10" fill="#fff" />
        <rect width="230" height="26" rx="10" fill="#e11d2e" />
        <rect y="16" width="230" height="10" fill="#e11d2e" />
        <path d="M168 26v84" stroke="#c9cfe6" strokeDasharray="5 5" />
        <rect x="16" y="44" width="44" height="14" rx="3" fill="#1e3a8a" />
        <rect x="108" y="44" width="44" height="14" rx="3" fill="#1e3a8a" />
        <path d="M70 51h28m-6-5 6 5-6 5" stroke="#e11d2e" strokeWidth="2.5" fill="none" />
        <rect x="16" y="72" width="80" height="6" rx="3" fill="#c9cfe6" />
        <rect x="16" y="86" width="56" height="6" rx="3" fill="#c9cfe6" />
        <path d="M182 44h3v50h-3zM190 44h2v50h-2zM196 44h4v50h-4zM204 44h2v50h-2zM210 44h3v50h-3z" fill="#1b2140" />
      </g>
      <Passport x={60} y={44} rotate={-14} cover="#7b1e2c" />
      <Passport x={170} y={30} rotate={6} cover="#14245e" />
    </svg>
  );
}
