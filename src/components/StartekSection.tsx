import React from 'react';
import { Fingerprint, ShieldCheck, CheckCircle2, MessageSquare, Phone, Truck, Wrench, Award, Download, ArrowRight } from 'lucide-react';
import { ASSET_IMAGES } from '../assets/assetRegistry';
import { buildWhatsAppUrl, getBranchConfig } from '../data/configStore';

export const StartekSection: React.FC = () => {
  const branch = getBranchConfig();

  const handleOrderWhatsApp = (deviceModel: string = 'Startek FM220U') => {
    const text = `नमस्कार स्वराई कॉम्प्स अँड इन्फोटेक, मला ${deviceModel} बायोमेट्रिक थंब डिव्हाइस खरेदी करायचे आहे. कृपया चालू दर (Price), डिलिव्हरी व RD Service बाबत माहिती द्यावी.`;
    window.open(buildWhatsAppUrl(text, branch.whatsappNumber), '_blank', 'noopener,noreferrer');
  };

  const handleRdServiceWhatsApp = () => {
    const text = 'नमस्कार स्वराई कॉम्प्स अँड इन्फोटेक, मला Startek डिव्हाइसचे RD Service इन्स्टॉलेशन व ड्रायव्हर सेटिंग्जसाठी तांत्रिक साहाय्य हवे आहे.';
    window.open(buildWhatsAppUrl(text, branch.whatsappNumber), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="startek" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Fingerprint className="w-4 h-4 text-blue-600" />
            <span>अधिकृत स्टारटेक वितरक · Authorised Startek Distributor</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Startek बायोमेट्रिक थंब डिव्हाइस अधिकृत विक्री, RD Service व तांत्रिक साहाय्य
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            CSC VLE, बँक मित्र, सेतू केंद्र, सायबर कॅफे व व्यापाऱ्यांसाठी Startek FM220U आणि प्रगत L1 फिंगरप्रिंट स्कॅनरची खात्रीशीर विक्री, मोफत ड्रायव्हर इन्स्टॉलेशन आणि १ वर्षाची अधिकृत वॉरंटी.
          </p>
        </div>

        {/* 2-Column Showcase: Featured Images & Comprehensive Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Column: Startek Device Imagery with Certified Badges */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Device Card */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-blue-100 bg-gradient-to-b from-slate-50 to-white p-4 sm:p-6 shadow-md group">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-white border border-slate-200 flex items-center justify-center p-2">
                <img
                  src={ASSET_IMAGES.startekDevice}
                  alt="Startek FM220 Biometric Thumb Scanner Device"
                  className="w-full h-full object-contain group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Floating Cert Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold bg-blue-600 text-white rounded-lg shadow-sm flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>STQC Certified</span>
                </span>

                <span className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-bold bg-emerald-600 text-white rounded-lg shadow-sm">
                  UIDAI Approved
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
                <span className="font-bold text-slate-900">Startek FM220U Optical Sensor</span>
                <span className="text-blue-600 font-semibold">१००% अस्सल ओरिजिनल डिव्हाइस</span>
              </div>
            </div>

            {/* Packaging Box Image Preview */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-white p-2 shadow-xs group">
                <div className="aspect-4/3 rounded-lg overflow-hidden bg-slate-50">
                  <img
                    src={ASSET_IMAGES.startekBox}
                    alt="Startek FM220U Box Packaging"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <div className="text-[11px] font-bold text-slate-800 text-center mt-1.5">
                  अधिकृत बॉक्स पॅकेजिंग
                </div>
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-3.5 flex flex-col justify-between text-xs">
                <div>
                  <div className="font-extrabold text-blue-950 mb-1 flex items-center gap-1">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>अधिकृत गॅरंटी</span>
                  </div>
                  <p className="text-[11px] text-blue-800 leading-snug">
                    १ वर्ष अधिकृत रिप्लेसमेंट वॉरंटी व RD Service सहकार्य.
                  </p>
                </div>

                <div className="mt-2 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>स्टॉकमध्ये उपलब्ध</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Applications & CSC Integration */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-orange-600 uppercase tracking-wider">
                सर्व शासकीय व बँकिंग सेवांसाठी सुसंगत (Compatible All Portals)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                कोणकोणत्या सेवांसाठी Startek थंब डिव्हाइस वापरले जाते?
              </h3>
            </div>

            {/* Grid of Use Cases */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>CSC व DigiPay बँकिंग (AePS)</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  आधार कार्डद्वारे रोख रक्कम काढणे, शिल्लक तपासणे आणि डिजिटल मनी ट्रान्सफर.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>PM-Kisan सन्मान निधी e-KYC</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  शेतकऱ्यांचे बायोमेट्रिक अंगठा स्कॅन करून पीएम-किसान हप्त्याची नोंदणी.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>जीवन प्रमाण (Jeevan Pramaan)</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  सेवानिवृत्त पेन्शनधारकांसाठी डिजिटल हयातीचा दाखला थेट घरबसल्या तयार करणे.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>आयुष्मान भारत व शासकीय दाखले</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  गोल्डन हेल्थ कार्ड आणि आपले सरकार महसूल दाखल्यांसाठी अंगठा प्रमाणीकरण.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>सिम कार्ड व्हेरिफिकेशन (Airtel, Jio, Vi)</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  नवीन मोबाईल सिम कार्ड वितरण आणि बायोमेट्रिक ग्राहक व्हेरिफिकेशन.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>बँकिंग किऑस्क व CSP पॉइंट्स</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Bank of India, SBI, Union Bank सह सर्व राष्ट्रीयकृत बँकांच्या CSP साठी.
                </p>
              </div>

            </div>

            {/* Service & Installation Commitment */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-3">
              <Wrench className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">मोफत ड्रायव्हर इन्स्टॉलेशन व आरडी सर्व्हिस सपोर्ट:</strong>
                <p className="text-emerald-800 text-[11px] mt-0.5">
                  डिव्हाइस खरेदी केल्यानंतर लॅपटॉप/कॉम्प्युटरवर Startek RD Service, Drivers आणि Browser Setting आमच्या तंत्रज्ञांकडून रिमोटने (AnyDesk/TeamViewer) किंवा प्रत्यक्ष शाखेत मोफत करून दिली जाते.
                </p>
              </div>
            </div>

            {/* Direct Order CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleOrderWhatsApp('Startek FM220U')}
                className="px-6 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>थंब डिव्हाइस ऑर्डर करा (WhatsApp)</span>
              </button>

              <button
                type="button"
                onClick={handleRdServiceWhatsApp}
                className="px-4 py-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-300 transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <Wrench className="w-4 h-4 text-slate-600" />
                <span>RD Service साहाय्य</span>
              </button>

              <a
                href={`tel:${branch.phoneNumber || '9561298384'}`}
                className="px-4 py-3 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors inline-flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>थेट फोन संपर्क</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
