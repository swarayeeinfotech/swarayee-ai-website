import React, { useState } from 'react';
import { COURSES } from '../data/businessData';
import { buildWhatsAppUrl } from '../data/configStore';
import { X, MessageSquare, Printer, ShieldCheck } from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  defaultCourseId
}) => {
  if (!isOpen) return null;

  const [courseId, setCourseId] = useState(defaultCourseId || COURSES[0].id);
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [qualification, setQualification] = useState('१०वी / १२वी उत्तीर्ण किंवा शिकत आहे');
  const [preferredBatch, setPreferredBatch] = useState('सकाळ बॅच (८:०० ते १०:००)');
  const [inquiryNotes, setInquiryNotes] = useState('');
  const [showPrintSlip, setShowPrintSlip] = useState(false);

  const activeCourse = COURSES.find((c) => c.id === courseId) || COURSES[0];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;

    const message = `*SWARAYEE COMPS AND INFOTECH — प्रवेश चौकशी नोंद*
━━━━━━━━━━━━━━━━━━━━━━━━━━
• विद्यार्थ्याचे नाव: ${studentName.trim()}
• संपर्क मोबाईल: ${studentPhone.trim() || 'दिलेला नाही'}
• निवडलेला कोर्स: ${activeCourse.name}
• शैक्षणिक पात्रता: ${qualification}
• पसंतीची बॅच वेळ: ${preferredBatch}
• इतर माहिती / प्रश्न: ${inquiryNotes.trim() || 'फीस व बॅच सुरू होण्याची तारीख कळवावी.'}
━━━━━━━━━━━━━━━━━━━━━━━━━━
प्रवेशासाठी लवकरात लवकर संपर्क साधावा.`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 border border-slate-200 shadow-2xl relative">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              प्रवेश नोंदणी व करिअर मार्गदर्शन
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5">
              संगणक अभ्यासक्रम प्रवेश चौकशी फॉर्म
            </h3>
            <p className="text-xs text-slate-500">
              Swarayee Comps And Infotech OPC Pvt Ltd, भारत
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
            aria-label="बंद करा"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        {!showPrintSlip ? (
          <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
            
            {/* Course Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                पसंतीचा अभ्यासक्रम निवडा *
              </label>
              <select
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 font-semibold cursor-pointer"
              >
                {COURSES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Student Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                विद्यार्थी / उमेदवाराचे पूर्ण नाव *
              </label>
              <input
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="उदा. राहुल प्रकाश कदम"
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 font-medium"
              />
            </div>

            {/* Contact Mobile */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                संपर्क मोबाईल / व्हॉट्सॲप नंबर
              </label>
              <input
                type="tel"
                value={studentPhone}
                onChange={(e) => setStudentPhone(e.target.value)}
                placeholder="१० अंकी मोबाईल नंबर"
                className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 font-mono"
              />
            </div>

            {/* Educational Qualification */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  सध्याचे शिक्षण / पात्रता
                </label>
                <select
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 cursor-pointer font-medium"
                >
                  <option value="शालेय विद्यार्थी (५वी ते १०वी)">शालेय विद्यार्थी (५वी ते १०वी)</option>
                  <option value="१०वी / १२वी उत्तीर्ण किंवा शिकत आहे">१०वी / १२वी उत्तीर्ण किंवा शिकत आहे</option>
                  <option value="पदवीधर / कॉलेज विद्यार्थी (Undergraduate)">पदवीधर / कॉलेज विद्यार्थी (Undergraduate)</option>
                  <option value="पदवी पूर्ण / नोकरी शोधत आहे">पदवी पूर्ण / नोकरी शोधत आहे</option>
                  <option value="नोकरदार किंवा व्यावसायिक">नोकरदार किंवा व्यावसायिक</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                  पसंतीची बॅच वेळ
                </label>
                <select
                  value={preferredBatch}
                  onChange={(e) => setPreferredBatch(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 cursor-pointer font-medium"
                >
                  {activeCourse.batches.map((b, idx) => (
                    <option key={idx} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                काही विशेष प्रश्न किंवा सुरू करण्याची तारीख
              </label>
              <textarea
                rows={2}
                value={inquiryNotes}
                onChange={(e) => setInquiryNotes(e.target.value)}
                placeholder="उदा. पुढील महिन्याच्या १ तारखेपासून बॅच सुरू करायची आहे किंवा टायपिंग परीक्षेची माहिती हवी आहे."
                className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
              />
            </div>

            {/* Explicit Honest Data Handling Notice */}
            <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>पारदर्शक चौकशी व थेट संपर्क:</span>
              </div>
              <p>
                हा फॉर्म तुमची प्रवेश चौकशी थेट आमच्या व्हॉट्सॲपवर पाठवतो किंवा केंद्रावर आणण्यासाठी छापील पावती तयार करतो. कोणताही गुप्त सर्व्हर डेटाबेस साठवला जात नाही.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-md shadow-emerald-950/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>व्हॉट्सॲपवर प्रवेश चौकशी पाठवा</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (!studentName.trim()) {
                    alert('कृपया आधी तुमचे पूर्ण नाव प्रविष्ट करा.');
                    return;
                  }
                  setShowPrintSlip(true);
                }}
                className="py-3 px-4 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-300 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                <span>छापील पावती पूर्वावलोकन</span>
              </button>
            </div>

          </form>
        ) : (
          /* Printable Slip Preview in Marathi */
          <div className="space-y-4">
            <div className="p-5 rounded-xl border-2 border-slate-800 bg-white space-y-4 text-xs text-slate-800">
              <div className="text-center border-b pb-3 border-slate-300">
                <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-orange-500/60 shadow-sm mx-auto mb-2 bg-white p-1">
                  <img
                    src="/swarayee_logo.jpeg"
                    alt="Swarayee Comps And Infotech Logo"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <h4 className="font-extrabold text-sm uppercase tracking-wide text-slate-900">
                  Swarayee Comps And Infotech OPC Pvt Ltd
                </h4>
                <p className="text-[11px] text-slate-600 font-semibold">
                  प्रवेश नोंदणी व चौकशी स्लिप (Admission Slip)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 block">विद्यार्थ्याचे नाव:</span>
                  <span className="font-bold text-slate-900">{studentName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">मोबाईल संपर्क:</span>
                  <span className="font-bold text-slate-900">{studentPhone || 'प्रत्यक्ष भेट'}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">निवडलेला कोर्स:</span>
                  <span className="font-bold text-orange-600">{activeCourse.name}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">कालावधी:</span>
                  <span className="font-semibold">{activeCourse.duration}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">पसंतीची बॅच वेळ:</span>
                  <span className="font-semibold">{preferredBatch}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">शिक्षण / पात्रता:</span>
                  <span className="font-semibold">{qualification}</span>
                </div>
              </div>

              <div className="border-t pt-3 border-slate-200 text-[10px] text-slate-500 text-center font-medium">
                कृपया ही पावती आमच्या केंद्रावर प्रत्यक्ष प्रवेश घेताना सोबत आणावी.
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowPrintSlip(false)}
                className="flex-1 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
              >
                मागे जा
              </button>
              <button
                type="button"
                onClick={handlePrintSlip}
                className="flex-1 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg inline-flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>पावती प्रिंट करा (Print)</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
