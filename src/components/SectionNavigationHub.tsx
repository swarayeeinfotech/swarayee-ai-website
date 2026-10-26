import React from 'react';
import { GraduationCap, Package, Stamp, Printer, FileText, Fingerprint, Building2, ArrowDownRight } from 'lucide-react';

export interface SectionItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  tag: string;
  icon: React.ReactNode;
  bgLight: string;
  textColor: string;
  borderColor: string;
  accentBg: string;
}

export const SECTIONS_DATA: SectionItem[] = [
  {
    id: 'education',
    num: '०१',
    title: 'संगणक शिक्षण',
    subtitle: 'MS-CIT, टॅली, टायपिंग, एक्सेल',
    tag: '५ अभ्यासक्रम',
    icon: <GraduationCap className="w-5 h-5" />,
    bgLight: 'hover:bg-orange-50/60',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200/80',
    accentBg: 'bg-orange-500/10'
  },
  {
    id: 'courier',
    num: '०२',
    title: 'कुरिअर सेवा',
    subtitle: 'भारत व भारताबाहेर पार्सल सेवा',
    tag: 'भारत व भारताबाहेर',
    icon: <Package className="w-5 h-5" />,
    bgLight: 'hover:bg-blue-50/60',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200/80',
    accentBg: 'bg-blue-500/10'
  },
  {
    id: 'stamps',
    num: '०३',
    title: 'रबर स्टॅम्प स्टुडिओ',
    subtitle: 'प्री-इंक व कार्यालयीन शिक्के',
    tag: 'लाईव्ह डिझायनर',
    icon: <Stamp className="w-5 h-5" />,
    bgLight: 'hover:bg-purple-50/60',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200/80',
    accentBg: 'bg-purple-500/10'
  },
  {
    id: 'printing',
    num: '०४',
    title: 'व्यावसायिक छपाई',
    subtitle: 'व्हिजिटिंग कार्ड्स, बिल बुक्स, बॅनर्स',
    tag: '७ उत्पादन श्रेणी',
    icon: <Printer className="w-5 h-5" />,
    bgLight: 'hover:bg-amber-50/60',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-200/80',
    accentBg: 'bg-amber-500/10'
  },
  {
    id: 'csc',
    num: '०५',
    title: 'सीएससी व ई-सेवा',
    subtitle: 'पॅन कार्ड, आधार, महसूल दाखले, DSC',
    tag: 'शासकीय सेवा',
    icon: <FileText className="w-5 h-5" />,
    bgLight: 'hover:bg-emerald-50/60',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200/80',
    accentBg: 'bg-emerald-500/10'
  },
  {
    id: 'startek',
    num: '०६',
    title: 'स्टारटेक थंब डिव्हाइस',
    subtitle: 'अधिकृत वितरक · FM220U / L1',
    tag: 'अधिकृत वितरक',
    icon: <Fingerprint className="w-5 h-5" />,
    bgLight: 'hover:bg-rose-50/60',
    textColor: 'text-rose-600',
    borderColor: 'border-rose-200/80',
    accentBg: 'bg-rose-500/10'
  },
  {
    id: 'journey',
    num: '०७',
    title: 'आमचा प्रवास',
    subtitle: '२०१० पासूनचा प्रवास व टप्पे',
    tag: 'इतिहास व उद्दिष्ट',
    icon: <Building2 className="w-5 h-5" />,
    bgLight: 'hover:bg-indigo-50/60',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200/80',
    accentBg: 'bg-indigo-500/10'
  },
  {
    id: 'branches',
    num: '०८',
    title: 'शाखा व संपर्क',
    subtitle: 'कराड, सातारा पत्ता, वेळा व FAQs',
    tag: 'थेट संपर्क',
    icon: <Building2 className="w-5 h-5" />,
    bgLight: 'hover:bg-slate-100/80',
    textColor: 'text-slate-700',
    borderColor: 'border-slate-300/80',
    accentBg: 'bg-slate-200/50'
  }
];

export const SectionNavigationHub: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white border-b border-slate-200 py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hub Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-600"></span>
              <h2 className="text-xs font-bold uppercase tracking-wider text-orange-600">
                स्वराई सेवा मार्गदर्शक · विभागवार माहिती (Section-Wise Directory)
              </h2>
            </div>
            <p className="text-sm font-semibold text-slate-800 mt-1">
              खालील कोणत्याही विभागावर क्लिक करून त्वरित संपूर्ण तपशील पहा:
            </p>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-1.5 self-start md:self-auto font-medium bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
            <span>८ प्रमुख सेवा विभाग एकाच छताखाली उपलब्ध</span>
          </div>
        </div>

        {/* 8-Section Navigator Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-3 sm:gap-3.5">
          {SECTIONS_DATA.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white ${sec.bgLight} transition-all duration-200 text-left cursor-pointer group hover:shadow-md hover:border-slate-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-slate-400 group-hover:text-slate-700 transition-colors">
                    विभाग {sec.num}
                  </span>
                  <div className={`p-1.5 rounded-lg ${sec.accentBg} ${sec.textColor} transition-transform group-hover:scale-110`}>
                    {sec.icon}
                  </div>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                  {sec.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1 leading-snug">
                  {sec.subtitle}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                  {sec.tag}
                </span>
                <ArrowDownRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600 transition-colors" />
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
