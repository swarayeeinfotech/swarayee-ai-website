import React from 'react';
import { SwarayeeVectorLogo } from './SwarayeeVectorLogo';

export const OFFICIAL_SWARAYEE_LOGO_SRC = '/swarayee_logo.jpeg';

interface SwarayeeLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'header' | 'box-badge' | 'vector';
  size?: 'sm' | 'md' | 'lg' | 'header' | 'xl';
  onClick?: () => void;
  showZoomBadge?: boolean;
}

export const SwarayeeLogo: React.FC<SwarayeeLogoProps> = ({
  className = '',
  variant = 'header',
  size = 'header',
  onClick,
  showZoomBadge = false
}) => {
  // Height classes calibrated for razor-sharp rendering and responsive visibility
  const heightClass =
    size === 'sm'
      ? 'h-12 sm:h-14'
      : size === 'md'
      ? 'h-16 sm:h-20'
      : size === 'lg'
      ? 'h-20 sm:h-24'
      : size === 'xl'
      ? 'h-28 sm:h-36'
      : 'h-16 sm:h-20 md:h-22'; // 'header' size gives prominent visibility

  // If vector variant is selected, use the pure SVG for infinite scaling
  if (variant === 'vector') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center shrink-0 ${onClick ? 'cursor-pointer hover:opacity-95 transition-opacity' : ''} ${className}`}
        title="Swarayee Comps And Infotech - Pure Vector Box Logo"
      >
        <div className={`${heightClass} w-auto flex items-center`}>
          <SwarayeeVectorLogo size="auto" className={`${heightClass}`} />
        </div>
      </div>
    );
  }

  // In dark footer: clean professional box card with the authentic original logo
  if (variant === 'light') {
    return (
      <div
        onClick={onClick}
        className={`group relative inline-flex items-center gap-3 p-2 sm:p-2.5 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-md transition-all hover:border-orange-500/50 ${
          onClick ? 'cursor-pointer' : ''
        } ${className}`}
        title="Swarayee Comps And Infotech - Official Logo"
      >
        {/* Box Squircle Container Housing Original Logo */}
        <div className="relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-orange-500/60 shadow-inner bg-white p-1">
          <img
            src={OFFICIAL_SWARAYEE_LOGO_SRC}
            alt="Swarayee Comps And Infotech Official Logo"
            className="w-full h-full object-contain rounded-lg"
            loading="eager"
          />
        </div>

        {/* Brand Text Block */}
        <div className="space-y-0.5 text-left">
          <div className="text-sm font-extrabold text-white tracking-wider flex items-center gap-1.5 font-serif">
            <span>SWARAYEE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          </div>
          <div className="text-[11px] font-bold text-orange-400 tracking-wide">
            COMPS AND INFOTECH
          </div>
          <div className="text-[9px] font-medium text-slate-400 tracking-widest uppercase">
            Solutions | Support | Success
          </div>
        </div>

        {showZoomBadge && (
          <span className="absolute -top-2 -right-2 px-1.5 py-0.5 text-[9px] font-bold bg-orange-500 text-white rounded-full shadow-xs">
            HD Zoom
          </span>
        )}
      </div>
    );
  }

  // Header / Standard representation: Professional Box Touchup Feel with Authentic Original Logo
  return (
    <div
      onClick={onClick}
      className={`group relative flex items-center gap-2.5 sm:gap-3.5 shrink-0 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      title="Swarayee Comps And Infotech - Official Logo"
    >
      {/* Box Shaped Professional Emblem Badge with Original Logo */}
      <div className="relative shrink-0 rounded-2xl p-1 bg-white border-2 border-orange-500/80 shadow-md group-hover:border-orange-500 transition-all group-hover:shadow-orange-500/10">
        <img
          src={OFFICIAL_SWARAYEE_LOGO_SRC}
          alt="Swarayee Comps And Infotech - Official Logo"
          className={`${heightClass} aspect-square object-contain rounded-xl transition-all duration-200`}
          loading="eager"
        />
        {/* Subtle glossy bevel highlight */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-orange-500/5 to-transparent pointer-events-none"></div>
      </div>

      {/* Brand Identity Typography - Broad, Bold & Dignified */}
      <div className="flex flex-col text-left select-none space-y-0.5">
        <div className="flex items-center gap-2">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-wide font-serif leading-none">
            SWARAYEE
          </span>
          <span className="w-2 h-2 rounded-full bg-orange-600 inline-block"></span>
        </div>
        <span className="text-xs sm:text-sm lg:text-base font-extrabold text-orange-600 tracking-widest uppercase leading-tight">
          COMPS AND INFOTECH
        </span>
        <span className="text-[10px] sm:text-xs font-bold text-slate-600 tracking-widest uppercase leading-none pt-0.5">
          SOLUTIONS · SUPPORT · SUCCESS
        </span>
      </div>

      {showZoomBadge && (
        <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-semibold text-orange-700 bg-orange-50 border border-orange-200 rounded-md">
          झूम इन्स्पेक्टर
        </span>
      )}
    </div>
  );
};
