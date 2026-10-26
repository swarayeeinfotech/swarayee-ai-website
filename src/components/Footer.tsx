import React from 'react';
import { SwarayeeLogo } from './SwarayeeLogo';
import { getBranchConfig, buildWhatsAppUrl } from '../data/configStore';
import {
  Instagram,
  MessageSquare,
  Phone,
  MapPin,
  ArrowUp,
  ShieldCheck,
  Building2,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onOpenAdmissionModal: () => void;
  onOpenBranchModal: () => void;
  onOpenLogoZoom?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAdmissionModal,
  onOpenBranchModal,
  onOpenLogoZoom
}) => {
  const branch = getBranchConfig();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppDesk = () => {
    const text = 'नमस्कार स्वराई कॉम्प्स अँड इन्फोटेक, मला आपल्या सेवांविषयी माहिती हवी आहे.';
    window.open(buildWhatsAppUrl(text, branch.whatsappNumber), '_blank', 'noopener,noreferrer');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/swarayee_comps_and_infotech', '_blank', 'noopener,noreferrer');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${branch.phoneNumber || '9561298384'}`;
  };

  const handleGoogleMapsClick = () => {
    const query = encodeURIComponent(`${branch.branchAddress}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="relative bg-slate-100/70 border-t border-slate-200">
      
      {/* ==================== 1. FOUR QUICK CONTACT CARDS (As shown in screenshot) ==================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: Instagram */}
          <button
            type="button"
            onClick={handleInstagramClick}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-pink-300 transition-all text-left cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all shadow-xs shrink-0">
              <Instagram className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                Instagram
              </h4>
              <p className="text-xs text-slate-500 truncate mt-0.5 font-medium">
                {branch.instagramHandle || '@swarayee_comps_and_infotech'}
              </p>
            </div>
          </button>

          {/* Card 2: WhatsApp */}
          <button
            type="button"
            onClick={handleWhatsAppDesk}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all text-left cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xs shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                WhatsApp
              </h4>
              <p className="text-xs text-slate-500 truncate mt-0.5 font-medium">
                Chat with Swarayee
              </p>
            </div>
          </button>

          {/* Card 3: Call Us */}
          <button
            type="button"
            onClick={handleCallClick}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-red-300 transition-all text-left cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all shadow-xs shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                Call Us
              </h4>
              <p className="text-xs text-slate-500 font-mono font-bold truncate mt-0.5">
                {branch.phoneNumber || '9561298384'}
              </p>
            </div>
          </button>

          {/* Card 4: Google Maps */}
          <button
            type="button"
            onClick={handleGoogleMapsClick}
            className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all text-left cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Google Maps
              </h4>
              <p className="text-xs text-slate-500 truncate mt-0.5 font-medium">
                Get Directions
              </p>
            </div>
          </button>

        </div>
      </div>

      {/* ==================== 2. MAIN DEEP NAVY CORPORATE FOOTER (Exact match to screenshot) ==================== */}
      <div className="relative bg-[#07172E] text-slate-200 overflow-hidden border-t border-slate-800">
        
        {/* Subtle background circuit / globe watermark mesh */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 text-center space-y-4">
          
          {/* Logo Emblem or Brand Name */}
          <div className="flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={onOpenLogoZoom}
              className="inline-block p-1.5 rounded-2xl bg-white border-2 border-orange-500/60 shadow-lg hover:border-orange-400 transition-all cursor-pointer mb-3"
              title="स्वराई अधिकृत लोगो"
            >
              <img
                src="/swarayee_logo.jpeg"
                alt="Swarayee Comps & Infotech"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl"
              />
            </button>

            {/* Swarayee Comps & Infotech Title */}
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-wider font-serif">
              {branch.brandName || 'Swarayee Comps & Infotech'}
            </h3>

            {/* Sanskrit Motto: ज्ञानदीप: प्रगतये */}
            <p className="text-sm font-bold text-orange-400 tracking-widest mt-1">
              {branch.motto || 'ज्ञानदीप: प्रगतये'}
            </p>
          </div>

          {/* Scope: Education • Technology • Digital Services • Business Support */}
          <div className="text-xs sm:text-sm font-medium text-slate-300 tracking-wide flex flex-wrap items-center justify-center gap-2 pt-1">
            <span>Education</span>
            <span className="text-orange-400">•</span>
            <span>Technology</span>
            <span className="text-orange-400">•</span>
            <span>Digital Services</span>
            <span className="text-orange-400">•</span>
            <span>Business Support</span>
          </div>

          {/* CIN & GSTIN Identifiers */}
          <div className="pt-1 text-xs font-mono font-semibold text-slate-300 flex flex-wrap items-center justify-center gap-2">
            <span>CIN: <strong className="text-white">{branch.cin || 'U80900PN2023OPC217692'}</strong></span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span>GSTIN: <strong className="text-white">{branch.gstin || '27ABKCS1334D1ZJ'}</strong></span>
          </div>

          {/* Registered Office Details */}
          <div className="pt-2 text-xs text-slate-300 space-y-1 max-w-md mx-auto leading-relaxed">
            <div className="font-bold text-white text-xs uppercase tracking-wider">
              Registered Office:
            </div>
            <div>
              {branch.landmark || 'Balsiddha Saw Mill, Birobanagar, Ond'},
            </div>
            <div>
              Tal. {branch.taluka || 'Karad'}, Dist. {branch.district || 'Satara'},
            </div>
            <div>
              Maharashtra – {branch.pincode || '415111'}
            </div>
            <div className="pt-1 font-mono text-slate-300">
              Landline: <strong className="text-white">{branch.landlineNumber || '02164-251127'}</strong>
            </div>
          </div>

          {/* Quick Navigation Footer Links */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-orange-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
            <a href="#education" className="hover:text-orange-400 transition-colors">Courses</a>
            <a href="#courier" className="hover:text-orange-400 transition-colors">Services</a>
            <a href="#journey" className="hover:text-orange-400 transition-colors">Our Journey</a>
            <a href="#branches" className="hover:text-orange-400 transition-colors">Contact</a>
            {onOpenLogoZoom && (
              <button
                type="button"
                onClick={onOpenLogoZoom}
                className="text-orange-400 hover:underline cursor-pointer"
              >
                HD Logo Zoom
              </button>
            )}
          </div>

          {/* Copyright Line */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 border-t border-slate-800/60">
            <div>
              © {new Date().getFullYear()} Swarayee Comps & Infotech. All Rights Reserved.
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] text-slate-400">
                Authorized MKCL ALC · Tej Courier Partner · CSC Center
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800 transition-colors cursor-pointer"
                aria-label="वर जा (Scroll to top)"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
};
