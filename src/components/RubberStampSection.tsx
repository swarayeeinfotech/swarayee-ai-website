import React, { useState } from 'react';
import { RUBBER_STAMP_TYPES, INK_COLORS, STAMP_SHAPES } from '../data/businessData';
import { Stamp, MessageSquare, Check, RefreshCw, Sliders } from 'lucide-react';
import { ASSET_IMAGES } from '../assets/assetRegistry';
import { buildWhatsAppUrl } from '../data/configStore';

export const RubberStampSection: React.FC = () => {
  const [stampType, setStampType] = useState(RUBBER_STAMP_TYPES[0]);
  const [inkColor, setInkColor] = useState(INK_COLORS[0]);
  const [stampShape, setStampShape] = useState(STAMP_SHAPES[0]);

  // Customizable text lines
  const [line1, setLine1] = useState('SWARAYEE COMPS AND INFOTECH');
  const [line2, setLine2] = useState('AUTHORISED SIGNATORY');
  const [line3, setLine3] = useState('OND, TAL. KARAD (SATARA)');

  const handleResetSample = () => {
    setLine1('SWARAYEE COMPS AND INFOTECH');
    setLine2('AUTHORISED SIGNATORY');
    setLine3('OND, TAL. KARAD (SATARA)');
  };

  const handleOrderWhatsApp = () => {
    const text = `नमस्कार स्वराई कॉम्प्स अँड इन्फोटेक, मला नवीन रबर स्टॅम्प तयार करून हवा आहे:
- स्टॅम्प प्रकार: ${stampType.name}
- आकार: ${stampShape.name}
- शाईचा रंग: ${inkColor.name}
- ओळ १: ${line1}
- ओळ २: ${line2}
- ओळ ३: ${line3}
कृपया दर व किती वेळेत मिळेल ते कळवावे.`;
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="stamps" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
            ०३. रबर स्टॅम्प आणि प्री-इंक स्टॅम्प निर्मिती
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            अचूक लेझर कटिंग, फ्लॅश प्री-इंक स्टॅम्प व सर्व प्रकारचे कार्यालयीन शिक्के
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            सुस्पष्ट उमटणी देणारे जपानी तंत्रज्ञानावरील प्री-इंक स्टॅम्प, सेल्फ-इंकिंग फिरते शिक्के आणि पारंपारिक लाकडी शिक्के. खाली तुमचा शिक्का तयार करून थेट पूर्वावलोकन (Preview) पहा.
          </p>
        </div>

        {/* 2-Column Split: Customizer Controls & Live Stamp Preview Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Customizer Controls */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <Sliders className="w-5 h-5 text-orange-600" />
                <h3 className="text-base font-bold text-slate-900">
                  स्टॅम्प कॉन्फिग्युरेटर (Customizer)
                </h3>
              </div>
              <button
                onClick={handleResetSample}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                title="नमुना मजकूर पूर्ववत करा"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>मजकूर पूर्ववत करा</span>
              </button>
            </div>

            {/* Stamp Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                १. स्टॅम्पचा प्रकार निवडा
              </label>
              <div className="grid grid-cols-2 gap-2">
                {RUBBER_STAMP_TYPES.map((type) => {
                  const isSelected = stampType.id === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setStampType(type)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight">{type.name}</div>
                      <div className={`text-[10px] mt-1 ${isSelected ? 'text-orange-300' : 'text-slate-500'}`}>
                        {type.badge}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stamp Shape & Dimensions */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                २. आकार व फॉरमॅट निवडा
              </label>
              <div className="grid grid-cols-2 gap-2">
                {STAMP_SHAPES.map((shape) => {
                  const isSelected = stampShape.id === shape.id;
                  return (
                    <button
                      key={shape.id}
                      type="button"
                      onClick={() => setStampShape(shape)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-orange-50 border-orange-500 text-orange-950 font-bold'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {shape.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Ink Color Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                ३. शाईचा रंग निवडा
              </label>
              <div className="flex flex-wrap gap-2.5">
                {INK_COLORS.map((color) => {
                  const isSelected = inkColor.id === color.id;
                  return (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => setInkColor(color)}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-white border-slate-900 shadow-sm ring-1 ring-slate-900 text-slate-900'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      ></span>
                      <span>{color.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-slate-900 ml-0.5" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Stamp Text Lines */}
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                ४. शिक्क्यावर उमटणारा मजकूर टाका:
              </label>

              <div>
                <span className="text-[11px] font-semibold text-slate-600">ओळ १: कंपनी / संस्थेचे / डॉक्टरांचे नाव</span>
                <input
                  type="text"
                  value={line1}
                  onChange={(e) => setLine1(e.target.value)}
                  maxLength={40}
                  className="w-full mt-1 px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 font-semibold text-slate-900"
                />
              </div>

              <div>
                <span className="text-[11px] font-semibold text-slate-600">ओळ २: अधिकारपद / स्वाक्षरी लेबल (उदा. AUTHORISED SIGNATORY)</span>
                <input
                  type="text"
                  value={line2}
                  onChange={(e) => setLine2(e.target.value)}
                  maxLength={40}
                  className="w-full mt-1 px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 font-semibold text-slate-900"
                />
              </div>

              <div>
                <span className="text-[11px] font-semibold text-slate-600">ओळ ३: पत्ता / नोंदणी क्रमांक / शहर</span>
                <input
                  type="text"
                  value={line3}
                  onChange={(e) => setLine3(e.target.value)}
                  maxLength={45}
                  className="w-full mt-1 px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 font-semibold text-slate-900"
                />
              </div>
            </div>

            {/* WhatsApp Order Action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleOrderWhatsApp}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-md shadow-emerald-950/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>व्हॉट्सॲपवर रबर स्टॅम्प ऑर्डर पाठवा</span>
              </button>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                मजकूर आणि डिझाइनची खात्री करण्यासाठी संपूर्ण माहिती थेट आमच्या डेस्कवर पाठवली जाते.
              </p>
            </div>

          </div>

          {/* Right Column: Live SVG Stamp Impression Preview */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Stamp Impression Sheet Mockup */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <Stamp className="w-4 h-4 text-orange-600" />
                  <span>थेट शिक्का पूर्वावलोकन (Live Impression Preview)</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 uppercase">
                  {stampShape.name}
                </span>
              </div>

              {/* Realistic Paper Sheet Canvas */}
              <div className="min-h-[260px] flex items-center justify-center p-6 bg-slate-50 rounded-xl border border-dashed border-slate-300 relative overflow-hidden select-none">
                
                {/* Visual Paper Watermark Texture */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>

                {/* Rendered Stamp Graphic */}
                <div className="relative z-10 transition-transform duration-200 transform hover:scale-105">
                  {stampShape.type === 'rect' ? (
                    // Rectangular Stamp Layout
                    <div
                      className="border-2 rounded-sm p-4 text-center max-w-sm flex flex-col items-center justify-center shadow-[inset_0_0_2px_rgba(0,0,0,0.15)]"
                      style={{
                        borderColor: inkColor.hex,
                        color: inkColor.hex,
                        width: `${stampShape.width}px`,
                        minHeight: `${stampShape.height}px`
                      }}
                    >
                      <div className="font-extrabold text-xs tracking-wider uppercase leading-tight line-clamp-2">
                        {line1 || 'संस्थेचे नाव'}
                      </div>
                      
                      <div className="w-3/4 my-1.5 border-t border-dashed" style={{ borderColor: inkColor.hex }}></div>

                      <div className="font-bold text-[11px] tracking-wide uppercase leading-tight">
                        {line2 || 'अधिकारपद / स्वाक्षरी'}
                      </div>

                      {line3 && (
                        <div className="text-[9px] font-medium tracking-tight uppercase mt-1 opacity-90 line-clamp-1">
                          {line3}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Circular Seal Layout
                    <div
                      className="border-2 rounded-full p-4 text-center flex flex-col items-center justify-center relative shadow-[inset_0_0_2px_rgba(0,0,0,0.15)]"
                      style={{
                        borderColor: inkColor.hex,
                        color: inkColor.hex,
                        width: `${stampShape.width}px`,
                        height: `${stampShape.height}px`
                      }}
                    >
                      {/* Inner concentric ring */}
                      <div
                        className="absolute inset-1.5 border border-dashed rounded-full pointer-events-none"
                        style={{ borderColor: inkColor.hex }}
                      ></div>

                      <div className="font-extrabold text-[10px] tracking-tight uppercase leading-none max-w-[140px] line-clamp-2">
                        {line1 || 'संस्थेचे नाव'}
                      </div>

                      <div className="my-1 text-xs">★ ★ ★</div>

                      <div className="font-bold text-[9px] tracking-wide uppercase leading-none max-w-[130px] line-clamp-1">
                        {line2 || 'अधिकारपद'}
                      </div>

                      {line3 && (
                        <div className="text-[8px] font-medium tracking-tight uppercase mt-1 opacity-90 max-w-[120px] line-clamp-1">
                          {line3}
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </div>

              {/* Stamp Tech Specs */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                <span>निवडलेला प्रकार: <strong className="text-slate-800">{stampType.name}</strong></span>
                <span>शाई: <strong className="text-slate-800">{inkColor.name}</strong></span>
                <span>रिफिल: <strong className="text-slate-800">{stampType.reInking}</strong></span>
              </div>
            </div>

            {/* High Quality Commercial Photography Showcase */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
              <img
                src={ASSET_IMAGES.stampImage}
                alt="स्वराई कॉम्प्स येथील रबर स्टॅम्प आणि छपाई कला"
                className="w-full h-52 sm:h-60 object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <span className="text-xs font-semibold text-orange-400 uppercase tracking-wide">
                  टिकाऊ साहित्य व अचूक लेझर कोरीव काम
                </span>
                <p className="text-xs text-slate-200 mt-0.5">
                  लेझर एन्ग्रेव्हिंग आणि जपानी फ्लॅश फोममुळे प्रत्येक कागदावर एकसारखी व स्पष्ट उमटणी.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
