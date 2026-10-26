import React, { useState } from 'react';
import { PRINTING_CATALOG, PrintingItem } from '../data/businessData';
import { Check, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/configStore';

export const PrintingSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PrintingItem>(PRINTING_CATALOG[0]);
  const [requestedQuantity, setRequestedQuantity] = useState('१००');
  const [customNotes, setCustomNotes] = useState('');

  const handlePrintQuoteWhatsApp = () => {
    const text = `नमस्कार स्वराई कॉम्प्स अँड इन्फोटेक, मला छपाई कामासाठी (Printing) कोटेशन हवे आहे:
- आयटम: ${selectedItem.name}
- वर्गवारी: ${selectedItem.category}
- अंदाजे संख्या: ${requestedQuantity}
- विशेष सूचना: ${customNotes || 'प्रमाणित कागद व फिनिशिंग'}
कृपया दर व किती दिवसांत पूर्ण होईल ते सांगावे.`;
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="printing" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            ०४. व्यावसायिक बहुरंगी छपाई सेवा (Multi-Color Printing)
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            उच्च-रिझोल्यूशन बिझनेस स्टेशनरी, जाहिरात साहित्य व डिस्प्ले ग्राफिक्स
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            आकर्षक व्हिजिटिंग कार्ड्स, पावती पुस्तके (Bill Books), लेटरहेड्स, पीव्हीसी स्मार्ट ओळखपत्रे ते मोठ्या आकाराचे आउटडोअर फ्लेक्स बॅनर्स आणि लॅमिनेशन.
          </p>
        </div>

        {/* Catalog Grid + Interactive Quote Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product Selection Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRINTING_CATALOG.map((item) => {
              const isSelected = selectedItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-orange-500 shadow-md ring-1 ring-orange-500'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600">
                        {item.category}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                          निवडलेले
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.turnaroundTime}</span>
                    </span>
                    <span className="font-semibold text-slate-700 hover:text-orange-600 inline-flex items-center gap-0.5">
                      तपशील पहा
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Specification & WhatsApp Quote Builder */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            
            <div className="pb-4 border-b border-slate-200">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
                निवडलेल्या उत्पादनाचे वैशिष्ट्य
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                {selectedItem.name}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                उपयुक्त: {selectedItem.suitableFor}
              </p>
            </div>

            {/* Specifications List */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                कागद दर्जा व फिनिशिंग पर्याय:
              </span>
              <div className="space-y-2">
                {selectedItem.specifications.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order/Quote Parameter Inputs */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  अंदाजे आवश्यक संख्या निवडा:
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {['५०', '१००', '५००', '१०००+'].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setRequestedQuantity(qty)}
                      className={`py-1.5 text-xs font-semibold rounded-lg border text-center transition-colors cursor-pointer ${
                        requestedQuantity === qty
                          ? 'bg-slate-900 border-slate-900 text-white'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  विशेष सूचना (कागद फिनिश, साईज किंवा डिझाइन फाइल तयार आहे का):
                </label>
                <input
                  type="text"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="उदा. मॅट लॅमिनेशन हवे आहे, डिझाइन पीडीएफ तयार आहे"
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-slate-900"
                />
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handlePrintQuoteWhatsApp}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-xl shadow-md shadow-orange-950/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>व्हॉट्सॲपवर प्रिंटिंग कोटेशन मागा</span>
              </button>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                संख्या व कागदाच्या उपलब्धतेनुसार अचूक व वाजवी दर थेट कळवले जातात.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
