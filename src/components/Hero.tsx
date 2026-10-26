import React from 'react';
import { ArrowRight, Search, ShieldCheck, GraduationCap, Package, Stamp, Award, Fingerprint, MessageSquare } from 'lucide-react';
import { ASSET_IMAGES } from '../assets/assetRegistry';
import { buildWhatsAppUrl } from '../data/configStore';

interface HeroProps {
  onOpenAdmissionModal: () => void;
  onScrollToCourier: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAdmissionModal,
  onScrollToCourier
}) => {
  const handleQuickWhatsApp = () => {
    const text = 'नमस्कार स्वराई कॉम्प्स अँड इन्फोटेक, मला नवीन कोर्स प्रवेश आणि केंद्रावरील सेवांबद्दल माहिती हवी आहे.';
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  const handleScrollToStartek = () => {
    const el = document.getElementById('startek');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white text-slate-900 border-b border-slate-200">
      
      {/* Subtle ambient light glow (No dark background) */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/50 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl transform translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:pt-14 lg:pb-18">
        
        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Kicker with Original Logo - Matching Footer Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/90 shadow-2xs">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-orange-400 shadow-xs shrink-0 bg-white p-0.5">
                <img
                  src={ASSET_IMAGES.swarayeeLogo}
                  alt="Swarayee Logo"
                  className="w-full h-full object-contain rounded"
                  loading="eager"
                />
              </div>
              <span className="text-xs font-bold text-orange-950">
                Swarayee Comps & Infotech · ज्ञानदीप: प्रगतये
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-tight" style={{ textWrap: 'balance' }}>
              संगणक शिक्षण, कुरिअर सेवा (भारत व भारताबाहेर), रबर स्टॅम्प, छपाई व सीएससी डिजिटल सेवा
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              विद्यार्थी, व्यावसायिक आणि नागरिकांसाठी शासनमान्य संगणक प्रशिक्षण (MS-CIT, Tally Prime with GST, Typing व Advanced Excel), जलद व विश्वासू कुरिअर सेवा (भारत व भारताबाहेर पार्सल व डॉक्युमेंट डिलिव्हरी), प्री-इंक रबर स्टॅम्प, उच्च दर्जाची छपाई आणि प्रमाणित शासकीय ई-सेवा एकाच छताखाली उपलब्ध.
            </p>

            {/* Direct Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onOpenAdmissionModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-xl shadow-md shadow-orange-600/25 transition-all cursor-pointer"
              >
                <span>प्रवेश चौकशी फॉर्म</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToCourier}
                className="inline-flex items-center gap-2 px-4.5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 rounded-xl border border-slate-300 shadow-xs transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4 text-blue-600" />
                <span>कुरिअर पार्सल ट्रॅक करा</span>
              </button>

              <button
                onClick={handleScrollToStartek}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors cursor-pointer"
              >
                <Fingerprint className="w-4 h-4 text-blue-600" />
                <span>Startek थंब डिव्हाइस</span>
              </button>

              <button
                onClick={handleQuickWhatsApp}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>व्हॉट्सॲप संवाद</span>
              </button>
            </div>

            {/* Transparent Note */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>पारदर्शक व विश्वासू सेवा केंद्र · थेट व्हॉट्सॲप संवाद व प्रत्यक्ष शाखा मार्गदर्शन.</span>
            </div>

          </div>

          {/* Right Column: Visual Showcase in Crisp White Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white p-2 group">
              <img
                src={ASSET_IMAGES.heroImage}
                alt="स्वराई कॉम्प्स अँड इन्फोटेक प्रशिक्षण व सेवा केंद्र"
                className="w-full h-80 sm:h-96 object-cover object-center rounded-xl transform group-hover:scale-102 transition-transform duration-500"
                loading="eager"
              />

              {/* In-image caption container */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md text-white shadow-lg space-y-1">
                <div className="text-xs font-bold text-orange-400 tracking-wide uppercase">
                  अद्ययावत लॅब व आधुनिक सुविधा
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                  प्रत्येक विद्यार्थ्यासाठी स्वतंत्र संगणक, अनुभवी शिक्षक आणि जलद नागरिक सुविधा डेस्क.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Service Strip (Clean Crisp Cards) */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <a
            href="#education"
            className="p-4 rounded-xl bg-white hover:bg-orange-50/50 border border-slate-200 hover:border-orange-300 shadow-xs hover:shadow-md transition-all cursor-pointer group block"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-orange-100 text-orange-600 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                विभाग ०१ · संगणक शिक्षण
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              MS-CIT, MS-ACIT, Tally Prime with GST, Typing आणि Advanced Excel.
            </p>
          </a>

          <a
            href="#courier"
            className="p-4 rounded-xl bg-white hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all cursor-pointer group block"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:scale-105 transition-transform">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                विभाग ०२ · कुरिअर सेवा (भारत व भारताबाहेर)
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              जलद पार्सल व डॉक्युमेंट बुकिंग व थेट ऑनलाइन पोर्टलवर ट्रॅकिंग.
            </p>
          </a>

          <a
            href="#stamps"
            className="p-4 rounded-xl bg-white hover:bg-purple-50/50 border border-slate-200 hover:border-purple-300 shadow-xs hover:shadow-md transition-all cursor-pointer group block"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-purple-100 text-purple-600 group-hover:scale-105 transition-transform">
                <Stamp className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                विभाग ०३ · रबर स्टॅम्प स्टुडिओ
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              प्री-इंक फ्लॅश स्टॅम्प, सेल्फ-इंकिंग आणि सर्व प्रकारचे कार्यालयीन शिक्के.
            </p>
          </a>

          <a
            href="#startek"
            className="p-4 rounded-xl bg-white hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all cursor-pointer group block"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 group-hover:scale-105 transition-transform">
                <Fingerprint className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                Startek थंब डिव्हाइस
              </h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              अधिकृत वितरक · CSC, DigiPay, AePS, PM-Kisan बायोमेट्रिक स्कॅनर.
            </p>
          </a>

        </div>

      </div>
    </section>
  );
};
