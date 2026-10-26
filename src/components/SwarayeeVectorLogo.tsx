import React from 'react';

interface SwarayeeVectorLogoProps {
  className?: string;
  showText?: boolean;
  boxOnly?: boolean;
  theme?: 'dark' | 'light';
  size?: number | string;
}

/**
 * Pure SVG Scalable Vector Logo for Swarayee Comps and Infotech.
 * Provides infinite resolution scaling without pixelation even at 1000%+ zoom.
 * Features the signature Box (Squircle) shape with metallic bevel,
 * 3D faceted 'S' emblem, open book base, digital tech pixels, and circuit traces.
 */
export const SwarayeeVectorLogo: React.FC<SwarayeeVectorLogoProps> = ({
  className = '',
  showText = true,
  boxOnly = false,
  theme = 'light',
  size = '100%'
}) => {
  // viewBox: 0 0 500 500 for box-only or 0 0 500 620 when full text is included
  const viewBox = boxOnly ? '0 0 500 500' : '0 0 500 640';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={`select-none ${className}`}
      style={{ width: size, height: 'auto', display: 'block' }}
      aria-label="Swarayee Comps And Infotech Logo"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <defs>
        {/* Box Container Gradients */}
        <linearGradient id="swBoxBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e2d42" />
          <stop offset="45%" stopColor="#0f1b2b" />
          <stop offset="100%" stopColor="#080e18" />
        </linearGradient>

        <linearGradient id="swBoxBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="35%" stopColor="#c2410c" />
          <stop offset="70%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>

        <linearGradient id="swHexBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#1e3a8a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
        </linearGradient>

        {/* 3D S Monogram Gradients */}
        <linearGradient id="swOrangeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdba74" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>

        <linearGradient id="swOrangeGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="50%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#fed7aa" />
        </linearGradient>

        <linearGradient id="swNavyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="40%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        <linearGradient id="swNavyGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>

        {/* Circuit Traces Gradient */}
        <linearGradient id="swCircuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="50%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>

        {/* Gold Book Gradient */}
        <linearGradient id="swBookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        {/* Drop Shadow for Box */}
        <filter id="swBoxShadow" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#000000" floodOpacity="0.45" />
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#f97316" floodOpacity="0.25" />
        </filter>

        <filter id="swGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ==================== BOX CONTAINER ==================== */}
      <g filter="url(#swBoxShadow)">
        {/* Outer squircle border bevel */}
        <rect
          x="30"
          y="30"
          width="440"
          height="440"
          rx="88"
          ry="88"
          fill="url(#swBoxBorder)"
        />

        {/* Inner squircle dark face */}
        <rect
          x="38"
          y="38"
          width="424"
          height="424"
          rx="80"
          ry="80"
          fill="url(#swBoxBg)"
        />

        {/* Subtle top-left highlight inside box */}
        <path
          d="M 120 40 L 380 40 Q 422 40 422 82 L 422 100 Q 380 46 120 46 Z"
          fill="#ffffff"
          opacity="0.08"
        />
      </g>

      {/* ==================== EMBLEM GRAPHICS ==================== */}
      {/* Background Hexagon Structure */}
      <g id="hexagon-ring">
        <polygon
          points="250,92 385,168 385,322 250,398 115,322 115,168"
          fill="none"
          stroke="url(#swHexBorder)"
          strokeWidth="6"
          strokeLinejoin="round"
          opacity="0.85"
        />
        {/* Inner thin hexagon */}
        <polygon
          points="250,104 373,174 373,314 250,384 127,314 127,174"
          fill="none"
          stroke="#f97316"
          strokeWidth="2"
          strokeDasharray="8 6"
          opacity="0.5"
        />
      </g>

      {/* Digital Tech Pixels (Top Left) */}
      <g id="tech-pixels" fill="#38bdf8">
        <rect x="135" y="150" width="16" height="16" rx="3" opacity="0.8" />
        <rect x="156" y="132" width="20" height="20" rx="3" fill="#60a5fa" opacity="0.9" />
        <rect x="156" y="157" width="15" height="15" rx="2" fill="#fb923c" opacity="0.95" />
        <rect x="176" y="146" width="14" height="14" rx="2" fill="#f97316" />
        <rect x="138" y="172" width="12" height="12" rx="2" fill="#0284c7" opacity="0.75" />
        <rect x="155" y="178" width="18" height="18" rx="3" fill="#0284c7" />
        <rect x="177" y="165" width="15" height="15" rx="3" fill="#fdba74" />
        <rect x="196" y="152" width="12" height="12" rx="2" fill="#38bdf8" opacity="0.6" />
      </g>

      {/* Circuit Board Traces (Top Right) */}
      <g id="circuit-traces" stroke="url(#swCircuitGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Trace 1 */}
        <path d="M 300 148 L 330 148 L 350 168 L 372 168" />
        <circle cx="375" cy="168" r="4.5" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />

        {/* Trace 2 */}
        <path d="M 312 174 L 334 174 L 354 194 L 378 194" />
        <circle cx="381" cy="194" r="5" fill="#fb923c" stroke="#fed7aa" strokeWidth="2" />

        {/* Trace 3 */}
        <path d="M 322 206 L 342 206 L 356 220 L 370 220" />
        <circle cx="373" cy="220" r="4" fill="#ea580c" stroke="#fed7aa" strokeWidth="2" />

        {/* Trace 4 (branching down) */}
        <path d="M 346 226 L 362 242 L 362 258" />
        <circle cx="362" cy="261" r="3.5" fill="#f97316" />
      </g>

      {/* 3D Faceted Stylized 'S' Monogram */}
      <g id="monogram-s">
        {/* Top Arc of S - Blue faceted segment */}
        <path
          d="M 230 152 L 290 152 Q 330 152 330 192 L 330 205 L 290 205 L 290 196 Q 290 184 270 184 L 244 184 L 230 152 Z"
          fill="url(#swNavyGrad1)"
        />
        <path
          d="M 244 184 L 270 184 Q 290 184 290 196 L 290 205 L 250 236 L 230 205 L 244 184 Z"
          fill="url(#swNavyGrad2)"
        />

        {/* Diagonal Cross of S - Dynamic faceted orange & copper */}
        <polygon
          points="218,206 264,170 306,236 260,272"
          fill="url(#swOrangeGrad1)"
          filter="url(#swGlow)"
        />
        <polygon
          points="224,212 254,188 290,244 260,268"
          fill="url(#swOrangeGrad2)"
        />

        {/* Central 3D Bevel Spine */}
        <path
          d="M 250 178 L 268 206 L 248 248 L 230 220 Z"
          fill="#fed7aa"
          opacity="0.8"
        />

        {/* Bottom Arc of S - Orange and Blue loop */}
        <path
          d="M 210 248 L 252 248 L 252 284 Q 252 296 232 296 L 198 296 Q 170 296 170 262 L 210 262 Q 210 270 220 270 L 226 270 L 226 248 Z"
          fill="url(#swOrangeGrad1)"
        />

        {/* 3D Metallic S Pillars */}
        <polygon points="266,220 280,220 280,290 266,280" fill="url(#swOrangeGrad2)" />
        <polygon points="246,236 260,236 260,296 246,290" fill="url(#swOrangeGrad1)" />
        <polygon points="228,252 240,252 240,302 228,298" fill="#c2410c" />
      </g>

      {/* Open Knowledge Book (Foundation Base) */}
      <g id="open-book">
        {/* Left Pages (Multi-layered 3D curves) */}
        <path
          d="M 250 348 Q 200 326 130 334 L 140 354 Q 200 346 250 366 Z"
          fill="#1e3a8a"
        />
        <path
          d="M 250 364 Q 195 342 120 352 L 132 374 Q 195 362 250 384 Z"
          fill="#1e293b"
        />
        <path
          d="M 250 382 Q 190 358 110 370 L 122 392 Q 190 380 250 402 Z"
          fill="url(#swBookGrad)"
        />

        {/* Right Pages (Multi-layered 3D curves) */}
        <path
          d="M 250 348 Q 300 326 370 334 L 360 354 Q 300 346 250 366 Z"
          fill="#1d4ed8"
        />
        <path
          d="M 250 364 Q 305 342 380 352 L 368 374 Q 305 362 250 384 Z"
          fill="#334155"
        />
        <path
          d="M 250 382 Q 310 358 390 370 L 378 392 Q 310 380 250 402 Z"
          fill="url(#swBookGrad)"
        />

        {/* Center Spine of Book */}
        <polygon points="248,348 252,348 252,408 248,408" fill="#fbbf24" />
      </g>

      {/* ==================== TYPOGRAPHY (When showText is true) ==================== */}
      {showText && !boxOnly && (
        <g id="brand-typography">
          {/* Main Brand Name: SWARAYEE */}
          <text
            x="250"
            y="525"
            textAnchor="middle"
            fontFamily="'Cinzel', 'Trajan Pro', 'Georgia', 'serif', system-ui"
            fontWeight="900"
            fontSize="44"
            letterSpacing="6"
            fill={theme === 'dark' ? '#ffffff' : '#0f172a'}
          >
            SWARAYEE
          </text>

          {/* Signature Orange Accent Triangles on 'A's */}
          {/* First A apex */}
          <polygon points="214,496 220,504 208,504" fill="#f97316" />
          {/* Second A apex */}
          <polygon points="314,496 320,504 308,504" fill="#f97316" />

          {/* Subtitle 1: COMPS AND INFOTECH with accent rules */}
          <line
            x1="45"
            y1="562"
            x2="95"
            y2="562"
            stroke="#ea580c"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <text
            x="250"
            y="568"
            textAnchor="middle"
            fontFamily="'Montserrat', 'Inter', system-ui, sans-serif"
            fontWeight="800"
            fontSize="23"
            letterSpacing="4"
            fill="#ea580c"
          >
            COMPS AND INFOTECH
          </text>
          <line
            x1="405"
            y1="562"
            x2="455"
            y2="562"
            stroke="#ea580c"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Divider rule */}
          <line
            x1="40"
            y1="588"
            x2="460"
            y2="588"
            stroke={theme === 'dark' ? '#334155' : '#cbd5e1'}
            strokeWidth="1.5"
            opacity="0.8"
          />

          {/* Motto / Tagline: SOLUTIONS | SUPPORT | SUCCESS */}
          <text
            x="250"
            y="616"
            textAnchor="middle"
            fontFamily="'Montserrat', 'Inter', system-ui, sans-serif"
            fontWeight="700"
            fontSize="15"
            letterSpacing="5"
            fill={theme === 'dark' ? '#94a3b8' : '#475569'}
          >
            SOLUTIONS | SUPPORT | SUCCESS
          </text>
        </g>
      )}
    </svg>
  );
};
