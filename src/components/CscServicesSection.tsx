import React, { useState } from 'react';
import { CSC_SERVICES, CscService } from '../data/businessData';
import { FileCheck, ShieldCheck, MessageSquare, ArrowRight, ListChecks } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/configStore';

export const CscServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<CscService>(CSC_SERVICES[0]);

  const handleCscWhatsApp = (service: CscService) => {
    const text = `नमस्कार स्वराई कॉम्प्स अँड इन्फोटेक, मला ${service.name} संदर्भात काम करायचे आहे. आवश्यक कागदपत्रे व प्रत्यक्ष भेटण्यासाठी माहिती मिळावी.`;
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="csc" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            ०५. अधिकृत सीएससी व नागरिक डिजिटल ई-सेवा
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            नागरिक ओळखपत्रे, महसूल प्रमाणपत्रे, पॅन कार्ड व डिजिटल सिग्नेचर (DSC)
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            शासकीय योजना, पॅन कार्ड अर्ज, तहसीलदार महसूल दाखले आणि कंपनी व ई-निविदेसाठी आवश्यक Class 3 डिजिटल सिग्नेचर टोकनसाठी अचूक व प्रामाणिक मार्गदर्शन.
          </p>
        </div>

        {/* 2-Column Split: Services Directory & Interactive Document Requirement Finder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Services Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CSC_SERVICES.map((service) => {
              const isSelected = selectedService.id === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? 'text-orange-400' : 'text-orange-600'}`}>
                      {service.category}
                    </span>
                    <h3 className={`text-base font-bold mt-1 leading-snug ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {service.name}
                    </h3>
                    <p className={`text-xs mt-2 line-clamp-2 leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/20 flex items-center justify-between text-xs">
                    <span className={`flex items-center gap-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      <ListChecks className="w-3.5 h-3.5" />
                      <span>{service.requiredDocuments.length} आवश्यक कागदपत्रे</span>
                    </span>
                    <span className={`font-semibold inline-flex items-center gap-1 ${isSelected ? 'text-orange-300' : 'text-orange-600'}`}>
                      कागदपत्रे यादी पहा
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Document Requirements Card */}
          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
            
            <div className="pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                <FileCheck className="w-4 h-4 text-orange-600" />
                <span>कागदपत्रांची अधिकृत यादी</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                {selectedService.name}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                केंद्रावर येताना ही मूळ कागदपत्रे सोबत आणावीत:
              </p>
            </div>

            {/* Document Checklist Items */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                आवश्यक कागदपत्रांचा तपशील:
              </span>
              <ul className="space-y-2.5">
                {selectedService.requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200/80 text-xs text-slate-800">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed font-medium">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Guidance Note */}
            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-950 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-blue-900">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>अर्ज प्रक्रिया व मार्गदर्शन:</span>
              </div>
              <p className="text-[11px] text-blue-900/90 leading-relaxed">
                {selectedService.processingGuidance}
              </p>
            </div>

            {/* WhatsApp Pre-check Action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleCscWhatsApp(selectedService)}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-slate-900 hover:bg-orange-600 rounded-xl shadow-sm transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-orange-400" />
                <span>व्हॉट्सॲपवर कागदपत्रे तपासा व माहिती विचारा</span>
              </button>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                केंद्रावर प्रत्यक्ष येण्यापूर्वी कागदपत्रांची पडताळणी करण्यासाठी थेट व्हॉट्सॲपवर संपर्क करा.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
