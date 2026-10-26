import React, { useState } from 'react';
import { FAQS } from '../data/businessData';
import { getBranchConfig, buildWhatsAppUrl } from '../data/configStore';
import { ASSET_IMAGES } from '../assets/assetRegistry';
import { Building2, Clock, MapPin, Mail, MessageSquare, ChevronDown, ChevronUp, ShieldCheck, Edit3 } from 'lucide-react';

interface AboutAndBranchSectionProps {
  onOpenBranchEditModal: () => void;
}

export const AboutAndBranchSection: React.FC<AboutAndBranchSectionProps> = ({
  onOpenBranchEditModal
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const branchConfig = getBranchConfig();

  const handleWhatsAppContact = () => {
    const text = `नमस्कार स्वराई कॉम्प्स अँड इन्फोटेक, मला आपल्या शाखेची वेळ व सेवांविषयी संपर्क साधायचा आहे.`;
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div id="branches" className="-translate-y-20"></div>
      <div id="authorisations" className="-translate-y-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            आमच्याबद्दल, अधिकृत मान्यता, शाखा माहिती व संपर्क
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            विद्यार्थी व नागरिकांसाठी एकात्मिक तंत्रज्ञान आणि सुविधा केंद्र
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Swarayee Comps And Infotech ही संस्था उच्च दर्जाचे संगणक शिक्षण, कुरिअर सेवा (भारत व भारताबाहेर), अचूक रबर स्टॅम्प आणि शासकीय डिजिटल सेवा प्रामाणिकपणे पुरवण्यासाठी वचनबद्ध आहे.
          </p>
        </div>

        {/* 2-Column Split: Company / Branch Profile & FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Company & Branch Desk Details */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Business Entity Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-xl bg-white border-2 border-orange-500/60 shadow-sm shrink-0 overflow-hidden">
                    <img
                      src={ASSET_IMAGES.swarayeeLogo}
                      alt="Swarayee Comps And Infotech Logo"
                      className="h-12 w-12 object-contain rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {branchConfig.legalName}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={onOpenBranchEditModal}
                  className="px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg inline-flex items-center gap-1.5 cursor-pointer shrink-0"
                  title="शाखा पत्ता व संपर्क क्रमांक बदला"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>शाखा बदला</span>
                </button>
              </div>

              {/* Branch Address & Logistics Desk */}
              <div className="space-y-4 text-xs text-slate-700">
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">शाखा कार्यालय पत्ता:</div>
                    <div className="text-slate-600 mt-0.5 leading-relaxed">
                      {branchConfig.branchAddress}
                    </div>
                    {branchConfig.landmark && (
                      <div className="text-slate-500 text-[11px] mt-0.5">
                        जवळचे ठिकाण (Landmark): {branchConfig.landmark}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">काउंटर कामकाजाची वेळ:</div>
                    <div className="text-slate-600 mt-0.5">{branchConfig.operationalHours}</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">{branchConfig.sundayHours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">अधिकृत संपर्क ईमेल:</div>
                    <a
                      href={`mailto:${branchConfig.officialEmail}`}
                      className="text-orange-600 hover:underline mt-0.5 inline-block font-semibold"
                    >
                      {branchConfig.officialEmail}
                    </a>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Contact Button */}
              <div className="pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handleWhatsAppContact}
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-sm transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>शाखा डेस्कशी थेट व्हॉट्सॲपवर संपर्क करा</span>
                </button>
              </div>

            </div>

            {/* Quality & Ethical Assurance Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>पारदर्शक कार्यपद्धती आणि अधिकृत पावतीची हमी</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                आम्ही सर्व शासकीय नियमांचे व कायदेशीर मानकांचे तंतोतंत पालन करतो. सर्व डिजिटल सेवा (पॅन कार्ड, आधार पीव्हीसी प्रिंट, महसूल दाखले) आणि कोर्सेससाठी अधिकृत संगणकीय पावती दिली जाते.
              </p>
            </div>

          </div>

          {/* Right Column: Frequently Asked Questions */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            
            <div className="pb-4 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                वारंवार विचारले जाणारे प्रश्न
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                नेहमी विचारले जाणारे प्रश्न (FAQs)
              </h3>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 bg-white hover:bg-slate-50 cursor-pointer"
                    >
                      <span className="text-xs font-bold text-slate-900 leading-snug">
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-orange-600 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-4 pt-1 text-xs text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100 font-medium">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
