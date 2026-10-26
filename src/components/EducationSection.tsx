import React, { useState } from 'react';
import { COURSES, Course } from '../data/businessData';
import { CheckCircle2, Clock, Users, BookOpen, ChevronRight, MessageSquare, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/configStore';

interface EducationSectionProps {
  onOpenAdmissionModal: (courseId?: string) => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ onOpenAdmissionModal }) => {
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);
  const [syllabusCourse, setSyllabusCourse] = useState<Course | null>(null);

  const handleWhatsAppCourse = (course: Course) => {
    const text = `नमस्कार स्वराई कॉम्प्स अँड इन्फोटेक, मला ${course.name} अभ्यासक्रमाच्या प्रवेशाबद्दल आणि नवीन बॅचच्या वेळांबद्दल माहिती हवी आहे.`;
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="education" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            ०१. अधिकृत संगणक शिक्षण व प्रशिक्षण विभाग
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            करिअर घडवणारे आयटी कोर्सेस, शासकीय प्रमाणपत्रे व परिपूर्ण प्रॅक्टिकल
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            पायाभूत संगणक साक्षरतेपासून (MS-CIT व MS-ACIT) ते कॉर्पोरेट अकाउंटिंग (Tally Prime with GST), शासकीय टायपिंग परीक्षा (GCC-TBC) आणि प्रगत एक्सेल डेटा ॲनालिटिक्सपर्यंतचे सखोल शिक्षण.
          </p>
        </div>

        {/* Course Interactive Grid & Featured Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Course Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1 px-1">
              अभ्यासक्रम निवडा व माहिती पहा
            </div>
            
            {COURSES.map((course) => {
              const isActive = selectedCourse.id === course.id;
              return (
                <div
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                    isActive
                      ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`font-bold text-base ${isActive ? 'text-white' : 'text-slate-900'}`}>
                          {course.name}
                        </h3>
                      </div>
                      <p className={`text-xs mt-1 line-clamp-1 ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>
                        {course.shortDesc}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 shrink-0 ${isActive ? 'text-orange-400' : 'text-slate-400'}`} />
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-slate-200/20 flex items-center gap-4 text-xs">
                    <span className={`flex items-center gap-1.5 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                      <Clock className="w-3.5 h-3.5" />
                      <span>कालावधी: {course.duration}</span>
                    </span>
                    <span className={`flex items-center gap-1.5 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                      <Users className="w-3.5 h-3.5" />
                      <span>प्रात्यक्षिक लॅब बॅचेस</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Selected Course Deep Dive */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide">
                  अभ्यासक्रमाचे स्वरूप व पात्रता
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {selectedCourse.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  कालावधी: {selectedCourse.duration} · पात्रता: {selectedCourse.eligibility}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setSyllabusCourse(selectedCourse)}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 rounded-lg border border-slate-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                  <span>सविस्तर सिलॅबस पहा</span>
                </button>
              </div>
            </div>

            {/* Course Narrative Description */}
            <p className="text-sm text-slate-700 leading-relaxed">
              {selectedCourse.fullDesc}
            </p>

            {/* Key Practical Learning Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                या अभ्यासक्रमात काय शिकायला मिळेल?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedCourse.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Batch Schedule Strip */}
            <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200/80 space-y-2">
              <div className="text-xs font-bold text-orange-950 uppercase tracking-wide">
                उपलब्ध प्रॅक्टिकल बॅचच्या वेळा:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedCourse.batches.map((batch, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-white text-orange-950 border border-orange-200 rounded-md font-medium"
                  >
                    {batch}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenAdmissionModal(selectedCourse.id)}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-orange-600 rounded-lg shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>प्रवेश चौकशी फॉर्म</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleWhatsAppCourse(selectedCourse)}
                  className="px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>व्हॉट्सॲपवर माहिती विचारा</span>
                </button>
              </div>

              <span className="text-xs text-slate-500">
                कोर्स यशस्वीरीत्या पूर्ण केल्यावर अधिकृत प्रमाणपत्र दिले जाते.
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Syllabus Modal in Marathi */}
      {syllabusCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 border border-slate-200 shadow-2xl">
            
            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  सविस्तर अभ्यासक्रम व घटक (Syllabus)
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {syllabusCourse.name}
                </h3>
                <p className="text-xs text-slate-500">
                  कालावधी: {syllabusCourse.duration} · पात्रता: {syllabusCourse.eligibility}
                </p>
              </div>
              <button
                onClick={() => setSyllabusCourse(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 cursor-pointer"
                aria-label="बंद करा"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {syllabusCourse.syllabus.map((mod, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">
                    {mod.module}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {mod.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-100 space-y-1">
              <div className="text-xs font-semibold text-slate-700">
                या कोर्सनंतर मिळणाऱ्या नोकरीच्या संधी:
              </div>
              <div className="text-xs text-slate-600 flex flex-wrap gap-2">
                {syllabusCourse.careerProspects.map((prospect, idx) => (
                  <span key={idx} className="bg-white px-2.5 py-1 rounded border border-slate-200 font-medium">
                    {prospect}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
              <button
                onClick={() => setSyllabusCourse(null)}
                className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                बंद करा
              </button>
              <button
                onClick={() => {
                  const cId = syllabusCourse.id;
                  setSyllabusCourse(null);
                  onOpenAdmissionModal(cId);
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow-sm cursor-pointer"
              >
                {syllabusCourse.name} साठी प्रवेश नोंदणी
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
