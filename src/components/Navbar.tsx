import React, { useState } from 'react';
import { SwarayeeLogo } from './SwarayeeLogo';
import {
  Menu,
  X,
  MessageSquare,
  PhoneCall,
  GraduationCap,
  Package,
  ShieldCheck,
  Search,
  MapPin,
  Clock,
  ExternalLink,
  Sparkles,
  Fingerprint
} from 'lucide-react';
import { buildWhatsAppUrl, getBranchConfig } from '../data/configStore';

interface NavbarProps {
  onOpenAdmissionModal: (courseId?: string) => void;
  onOpenBranchModal: () => void;
  onOpenLogoZoom?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAdmissionModal,
  onOpenBranchModal,
  onOpenLogoZoom
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const branch = getBranchConfig();

  // Menu items matching the authentic Swarayee website structure + Startek Device + Courier (India & Abroad)
  const navLinks = [
    { label: 'Home (मुख्यपृष्ठ)', href: '#' },
    { label: 'About (आमच्याबद्दल)', href: '#about' },
    { label: 'Courses (अभ्यासक्रम)', href: '#education' },
    { label: 'Startek थंब डिव्हाइस', href: '#startek' },
    { label: 'कुरिअर सेवा (भारत व भारताबाहेर)', href: '#courier' },
    { label: 'रबर स्टॅम्प', href: '#stamps' },
    { label: 'छपाई सेवा', href: '#printing' },
    { label: 'सीएससी सेवा', href: '#csc' },
    { label: 'आमचा प्रवास', href: '#journey' },
    { label: 'Contact (संपर्क)', href: '#branches' },
  ];

  const handleWhatsAppGeneral = () => {
    const text = 'नमस्कार स्वराई कॉम्प्स अँड इन्फोटेक, मला आपल्या सेवांविषयी (संगणक शिक्षण / कुरिअर सेवा / रबर स्टॅम्प / प्रिंटिंग / सीएससी सेवा) माहिती हवी आहे.';
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  const handleScrollToCourier = () => {
    const el = document.getElementById('courier');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 transition-all shadow-xs">
      
      {/* ==================== 1. TOP UTILITY ANNOUNCEMENT BAR (Clean & Bright - No Black Background) ==================== */}
      <div className="bg-slate-100 text-slate-700 text-xs py-1.5 px-3 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          {/* Left: Location & Hours */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs text-slate-700 font-medium">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
              <span>{branch.landmark || 'ओंड, कराड, सातारा'} (महाराष्ट्र)</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-600">
              <Clock className="w-3.5 h-3.5 text-orange-600 shrink-0" />
              <span>वेळ: {branch.operationalHours || 'स. ८:०० ते रा. ८:००'}</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white text-orange-700 border border-slate-300 text-[10px] font-bold">
              {branch.motto || 'ज्ञानदीप: प्रगतये'} · {branch.cin}
            </span>
          </div>

          {/* Right: Quick Links & HD Zoom Inspector */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            {onOpenLogoZoom && (
              <button
                type="button"
                onClick={onOpenLogoZoom}
                className="inline-flex items-center gap-1 text-orange-700 hover:text-orange-900 font-bold cursor-pointer transition-colors"
                title="लोगो हाय-लेव्हल झूम इन्स्पेक्टर उघडा"
              >
                <Sparkles className="w-3 h-3 text-orange-600" />
                <span>HD लोगो झूम</span>
              </button>
            )}

            <span className="text-slate-300 hidden sm:inline">|</span>

            <button
              onClick={handleWhatsAppGeneral}
              className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-900 font-bold cursor-pointer transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-emerald-600" />
              <span className="hidden sm:inline">हेल्पडेस्क: </span>
              <span>व्हॉट्सॲप संवाद</span>
            </button>
          </div>

        </div>
      </div>

      {/* ==================== 2. MAIN LOGO ROW (Matches Footer Logo Box Feel) ==================== */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        <div className="flex items-center justify-between gap-4 lg:gap-6">
          
          {/* Zone 1: Swarayee Box Logo Matching Footer Emblem Box */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onOpenLogoZoom}
              className="flex items-center whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-xl cursor-pointer text-left"
              title="स्वराई बॉक्स लोगो - हाय-लेव्हल झूम व तपशील पाहण्यासाठी क्लिक करा"
            >
              <SwarayeeLogo variant="header" size="header" />
            </button>
          </div>

          {/* Zone 2: Middle Section - Official Authorisation Badges */}
          <div className="hidden xl:flex items-center gap-4 flex-1 justify-center px-4">
            
            {/* Accreditation Badge 1: MKCL ALC */}
            <a
              href="#authorisations"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-orange-50/80 hover:bg-orange-100 border border-orange-200/90 transition-colors text-left group"
              title="MKCL Authorized Learning Centre (ALC)"
            >
              <div className="p-2 rounded-lg bg-orange-600 text-white shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] font-extrabold text-orange-950 uppercase tracking-wide">
                  MKCL ALC मान्यताप्राप्त
                </div>
                <div className="text-[10px] text-orange-800 font-medium">
                  MS-CIT, Tally व शासकीय टायपिंग
                </div>
              </div>
            </a>

            {/* Accreditation Badge 2: Startek Authorised Distributor */}
            <a
              href="#startek"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-blue-50/80 hover:bg-blue-100 border border-blue-200 transition-colors text-left group"
              title="Startek FM220 Biometric Thumb Device Authorised Distributor"
            >
              <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <Fingerprint className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] font-extrabold text-blue-950 uppercase tracking-wide">
                  Startek अधिकृत वितरक
                </div>
                <div className="text-[10px] text-blue-700 font-medium">
                  FM220 थंब स्कॅनर व RD Service
                </div>
              </div>
            </a>

            {/* Accreditation Badge 3: Courier (India & Abroad) & CSC */}
            <a
              href="#courier"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-50/80 hover:bg-emerald-100 border border-emerald-200/90 transition-colors text-left group"
              title="कुरिअर सेवा (भारत व भारताबाहेर) व सीएससी केंद्र"
            >
              <div className="p-2 rounded-lg bg-emerald-600 text-white shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                <Package className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] font-extrabold text-emerald-950 uppercase tracking-wide">
                  कुरिअर (भारत व भारताबाहेर)
                </div>
                <div className="text-[10px] text-emerald-800 font-medium">
                  पार्सल ट्रॅकिंग, पॅन, आधार व दाखले
                </div>
              </div>
            </a>

          </div>

          {/* Zone 3: Direct Clean Contact & Mobile Toggle */}
          <div className="flex items-center gap-2.5 shrink-0">
            
            {/* Quick WhatsApp helpline */}
            <button
              onClick={handleWhatsAppGeneral}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors cursor-pointer shadow-xs"
              title="थेट व्हॉट्सॲप संवाद"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>व्हॉट्सॲप संवाद</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl focus:outline-none cursor-pointer"
              aria-label="मेनू उघडा"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* ==================== 3. DEDICATED MAIN NAVIGATION BAR (Crisp & Clean - No Black Background) ==================== */}
      <nav className="hidden lg:block bg-slate-800 text-white border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Menu Links Strip */}
            <div className="flex items-center gap-1 xl:gap-2 text-xs font-semibold">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2.5 transition-colors whitespace-nowrap border-b-2 ${
                    idx === 0
                      ? 'border-orange-500 text-orange-300 font-bold bg-slate-900/60'
                      : 'border-transparent text-slate-200 hover:text-white hover:border-orange-400 hover:bg-slate-700/60'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Secondary bar right actions */}
            <div className="flex items-center gap-3 py-1.5">
              <button
                onClick={() => onOpenAdmissionModal()}
                className="px-3.5 py-1 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                प्रवेश चौकशी
              </button>

              <button
                onClick={onOpenBranchModal}
                className="text-[11px] text-slate-200 hover:text-orange-300 flex items-center gap-1.5 cursor-pointer py-1 font-medium"
              >
                <PhoneCall className="w-3 h-3 text-orange-400" />
                <span>शाखा माहिती</span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* ==================== MOBILE DRAWER ==================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          
          {/* Badges in Mobile Drawer */}
          <div className="grid grid-cols-3 gap-2 pb-3 border-b border-slate-200 text-center">
            <a href="#authorisations" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-orange-50 rounded-lg text-orange-900">
              <GraduationCap className="w-4 h-4 mx-auto text-orange-600 mb-1" />
              <div className="text-[10px] font-bold">MKCL ALC</div>
            </a>
            <a href="#courier" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-blue-50 rounded-lg text-blue-900">
              <Package className="w-4 h-4 mx-auto text-blue-600 mb-1" />
              <div className="text-[10px] font-bold">कुरिअर सेवा</div>
            </a>
            <a href="#csc" onClick={() => setMobileMenuOpen(false)} className="p-2 bg-emerald-50 rounded-lg text-emerald-900">
              <ShieldCheck className="w-4 h-4 mx-auto text-emerald-600 mb-1" />
              <div className="text-[10px] font-bold">CSC केंद्र</div>
            </a>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-100 hover:text-orange-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmissionModal();
              }}
              className="w-full py-2.5 text-center text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-lg shadow-sm cursor-pointer flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>प्रवेश चौकशी फॉर्म उघडा</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleScrollToCourier();
              }}
              className="w-full py-2 text-center text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-blue-600" />
              <span>कुरिअर पार्सल ट्रॅक करा</span>
            </button>

            {onOpenLogoZoom && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogoZoom();
                }}
                className="w-full py-2 text-center text-xs font-semibold text-orange-700 bg-orange-50 hover:bg-orange-100 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                <span>HD लोगो झूम इन्स्पेक्टर</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
