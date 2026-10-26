import React, { useState } from 'react';
import { TEJ_COURIER_INFO } from '../data/businessData';
import { Search, ExternalLink, ShieldCheck, AlertCircle, MessageSquare, Truck, Clock } from 'lucide-react';
import { ASSET_IMAGES } from '../assets/assetRegistry';
import { buildWhatsAppUrl } from '../data/configStore';

export const CourierSection: React.FC = () => {
  const [consignmentNumber, setConsignmentNumber] = useState('');
  const [trackingSubmitted, setTrackingSubmitted] = useState(false);

  const handleOfficialTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = consignmentNumber.trim();
    if (!cleanNumber) return;

    setTrackingSubmitted(true);
    const trackingUrl = `https://www.trackcourier.io/track?awb=${encodeURIComponent(cleanNumber)}`;
    window.open(trackingUrl, '_blank', 'noopener,noreferrer');
  };

  const handleBookingWhatsApp = () => {
    const text = `नमस्कार स्वराई कॉम्प्स अँड इन्फोटेक, मला भारत व भारताबाहेर कुरिअरद्वारे पार्सल/दस्तऐवज पाठवण्याबाबत दर व माहिती हवी आहे.`;
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="courier" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            ०२. कुरिअर सेवा अधिकृत बुकिंग डेस्क (भारत व भारताबाहेर)
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            सुरक्षित पार्सल, जलद दस्तऐवज आणि थेट ऑनलाइन नेटवर्क ट्रॅकिंग (भारत व भारताबाहेर)
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            कुरिअर सर्व्हिसेसचे अधिकृत बुकिंग भागीदार. तातडीची कार्यालयीन कागदपत्रे, कायदेशीर फाइल्स, शैक्षणिक दस्तऐवज आणि व्यावसायिक पार्सल्सचे भारत व भारताबाहेर जलद डिस्पॅच व अचूक वितरण.
          </p>
        </div>

        {/* 2-Column Split: Tracking Box & Counter Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Shipment Tracking Console */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
              <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  पार्सल ट्रॅक करा (Track Consignment)
                </h3>
                <p className="text-xs text-slate-500">
                  अधिकृत कुरिअर नेटवर्कवरून थेट पार्सलची स्थिती तपासा
                </p>
              </div>
            </div>

            {/* Official Tracking Form */}
            <form onSubmit={handleOfficialTrack} className="space-y-4">
              <div>
                <label htmlFor="consignment" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  कन्साइनमेंट / डॉक्युमेंट (AWB) नंबर टाका:
                </label>
                <div className="relative">
                  <input
                    id="consignment"
                    type="text"
                    value={consignmentNumber}
                    onChange={(e) => setConsignmentNumber(e.target.value)}
                    placeholder="उदा. 10293848 किंवा पावतीवरील AWB नंबर"
                    className="w-full pl-4 pr-10 py-3 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-mono tracking-wider text-slate-900 font-semibold"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                    <Search className="w-4 h-4" />
                  </div>
                </div>
                <p className="mt-1 text-[11px] text-slate-500">
                  तुमच्या बुकिंग पावतीवरील वरच्या बारकोडखाली हा नंबर असतो.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-xl shadow-md shadow-orange-950/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>थेट ऑनलाइन ट्रॅक करा</span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <a
                  href={TEJ_COURIER_INFO.officialPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors inline-flex items-center justify-center gap-1.5 text-center"
                >
                  <span>ऑनलाइन पोर्टल</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </form>

            {/* Tracking Instructions */}
            {trackingSubmitted && (
              <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">ट्रॅकिंग पोर्टल उघडले आहे:</span> जर पॉप-अप ब्लॉक झाले असेल, तर तुम्ही थेट{' '}
                  <a
                    href={`https://www.trackcourier.io/track?awb=${encodeURIComponent(consignmentNumber)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold text-orange-700"
                  >
                    ट्रॅकिंग पोर्टलवर क्लिक करा
                  </a>
                  .
                </div>
              </div>
            )}

            {/* Courier Dispatch Counter Features */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                आमच्या बुकिंग काउंटरची वैशिष्ट्ये (भारत व भारताबाहेर):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {TEJ_COURIER_INFO.features.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                    <div className="font-bold text-slate-900 mb-0.5">{item.title}</div>
                    <div className="text-slate-600 text-[11px] leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Booking Inquiry */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <button
                onClick={handleBookingWhatsApp}
                className="w-full py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-300 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>कुरिअर दर व बुकिंग चौकशी (व्हॉट्सॲप)</span>
              </button>
            </div>

          </div>

          {/* Right Column: Counter Photo & Packing Best Practices */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Visual Counter Showcase with Vite ASSET_IMAGES */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
              <img
                src={ASSET_IMAGES.courierImage}
                alt="स्वराई कॉम्प्स येथील कुरिअर सेवा डेस्क (भारत व भारताबाहेर)"
                className="w-full h-64 sm:h-72 object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <span className="text-xs font-semibold text-orange-400 uppercase tracking-wide">
                  कुरिअर नेटवर्क (भारत व भारताबाहेर)
                </span>
                <p className="text-sm font-medium mt-1">
                  त्याच दिवशी काउंटर डिस्पॅच, बारकोड स्कॅनिंग आणि जलद डिलिव्हरी यंत्रणा.
                </p>
              </div>
            </div>

            {/* Packaging & Booking Best Practices in Marathi */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                <ShieldCheck className="w-4 h-4 text-orange-600" />
                <span>पार्सल पाठवण्यासंबंधी महत्त्वाच्या सूचना</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-600">
                {TEJ_COURIER_INFO.packingGuidelines.map((guideline, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5"></span>
                    <span>{guideline}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>त्याच दिवशी पार्सल पुढे पाठवण्यासाठी दररोज सायंकाळी ६:३० पूर्वी पार्सल द्यावे.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
