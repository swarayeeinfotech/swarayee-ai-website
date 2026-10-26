import React from 'react';
import { Award, Compass, Laptop, Briefcase, Calendar, ShieldCheck, CheckCircle2, Building, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/configStore';

interface OurJourneySectionProps {
  onOpenAdmissionModal: () => void;
}

export const OurJourneySection: React.FC<OurJourneySectionProps> = ({ onOpenAdmissionModal }) => {
  const handleWhatsAppInquiry = () => {
    const text = 'नमस्कार स्वराई कॉम्प्स अँड इन्फोटेक, मला आपल्या संस्थेच्या सेवा व सहकार्याबद्दल चर्चा करायची आहे.';
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  const milestones = [
    {
      period: 'नोव्हेंबर २०१०',
      badge: 'सुरुवात',
      title: 'युनिव्हर्सल कॉम्प्युटर्स (Universal Computers)',
      desc: 'Universal Computers या Proprietorship व्यवसायाच्या माध्यमातून संगणक शिक्षण क्षेत्रात कामाची अधिकृत सुरुवात झाली.'
    },
    {
      period: '२०१० नंतर',
      badge: 'MKCL ALC मान्यता',
      title: 'Computer Basic Course व MKCL Learning Centre',
      desc: 'Computer Basic Course तसेच MKCL Authorized Learning Centre (ALC) म्हणून विद्यार्थ्यांना उच्च दर्जाचे संगणक प्रशिक्षण व प्रमाणपत्रे देण्यात आली.'
    },
    {
      period: '०६ जानेवारी २०२३',
      badge: 'कॉर्पोरेट स्थापना',
      title: 'Swarayee Comps And Infotech ची स्थापना',
      desc: 'दीर्घ अनुभवाच्या आधारावर कंपनीची नोंदणी झाली. शिक्षण, कौशल्य विकास, डिजिटल सेवा, तंत्रज्ञान सेवा, कुरिअर सेवा (भारत व भारताबाहेर) व व्यवसाय सहाय्य या क्षेत्रांमध्ये विस्तार झाला.'
    }
  ];

  return (
    <section id="journey" className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-600"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              संस्था परिचय, अधिकृत मान्यता व आमचा प्रवास
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            २०१० पासून संगणक साक्षरता, कौशल्य विकास आणि एकात्मिक व्यावसायिक सहाय्य
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            शिक्षण क्षेत्रात कामाची सुरुवात झाली. त्या काळात <strong>Computer Basic Course</strong> तसेच <strong>MKCL Authorized Learning Centre (ALC)</strong> म्हणून विद्यार्थ्यांना संगणक प्रशिक्षण देण्यात आले.
          </p>
        </div>

        {/* 2 Feature Cards: तंत्रज्ञान सेवा & व्यवसाय सहाय्य (Directly from Swarayee website) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          
          {/* Card 1: तंत्रज्ञान सेवा */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:scale-105 transition-transform">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  तंत्रज्ञान सेवा (Technology Services)
                </h3>
                <p className="text-xs text-slate-500">
                  हार्डवेअर, सॉफ्टवेअर, इंटरनेट व छपाई
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              Computer, Internet, Printing आणि Technology संबंधित सर्वसमावेशक सेवा व सहाय्य. विद्यार्थी, व्यावसायिक आणि कार्यालयांसाठी अखंड तांत्रिक पाठबळ.
            </p>

            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>अद्ययावत कॉम्प्युटर लॅब व वैयक्तिक संगणक हाताळणी</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>उच्च दर्जाची डिजिटल व ऑफसेट छपाई आणि स्टेशनरी</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>डिजिटल सिग्नेचर (DSC) व शासकीय पोर्टल्स सहाय्य</span>
              </li>
            </ul>
          </div>

          {/* Card 2: व्यवसाय सहाय्य */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-orange-400 hover:shadow-md transition-all group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-50 text-orange-600 border border-orange-100 group-hover:scale-105 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  व्यवसाय सहाय्य (Business Assistance)
                </h3>
                <p className="text-xs text-slate-500">
                  उद्योजक व व्यापारी वर्गासाठी एकात्मिक सोयी
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              Individuals, Entrepreneurs आणि Businesses साठी विविध व्यावसायिक सहाय्य सेवा. कायदेशीर नोंदी, अकाउंटिंग, पार्सल लॉजिस्टिक्स व अधिकृत शिक्के.
            </p>

            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tally Prime with GST अकाउंटिंग व इन्व्हॉइसिंग मार्गदर्शन</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>कुरिअर सेवा (भारत व भारताबाहेर) पार्सल व डॉक्युमेंट लॉजिस्टिक्स</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>प्री-इंक व सेल्फ-इंकिंग फर्म रबर स्टॅम्प निर्मिती</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Corporate Purpose / Mission Statement (Exact quote from Swarayee website) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl relative overflow-hidden mb-16">
          <div className="relative z-10 space-y-3 max-w-4xl">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-400 flex items-center gap-2">
              <Compass className="w-4 h-4" />
              <span>आमचा उद्देश (Our Mission)</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
              "आमचा उद्देश विद्यार्थी, नोकरी इच्छुक, उद्योजक, व्यावसायिक तसेच ग्रामीण भागातील नागरिकांना उपयुक्त तंत्रज्ञान, कौशल्ये आणि व्यावसायिक सेवा उपलब्ध करून देणे हा आहे."
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              या दीर्घ अनुभवाच्या आधारावर आज <strong>Swarayee Comps And Infotech</strong> मार्फत शिक्षण, कौशल्य विकास, डिजिटल सेवा, तंत्रज्ञान सेवा आणि व्यवसाय सहाय्य या क्षेत्रांमध्ये विविध सेवा उपलब्ध करून देण्याचा अविरत प्रयत्न केला जात आहे.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* आमचा प्रवास (Our Journey Timeline) */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              कालक्रम व टप्पे
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
              आमचा प्रवास (Our Journey)
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-orange-300">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Node dot */}
                <div className="absolute -left-6 sm:-left-8 top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-orange-600 flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>

                <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-sm font-black text-orange-600 font-mono">
                      {m.period}
                    </span>
                    <span className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-orange-100 text-orange-800">
                      {m.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {m.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Journey CTA */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>शासकीय व उद्योगमान्य प्रमाणपत्रांची विश्वासार्हता.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdmissionModal}
              className="px-4 py-2.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-xl transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
            >
              <span>प्रवेश चौकशी फॉर्म</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleWhatsAppInquiry}
              className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              थेट संपर्क
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
