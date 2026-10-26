import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2, Download, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { SwarayeeVectorLogo } from './SwarayeeVectorLogo';
import { ASSET_IMAGES } from '../assets/assetRegistry';

interface LogoZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoZoomModal: React.FC<LogoZoomModalProps> = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(200); // 200% default
  const [activeMode, setActiveMode] = useState<'vector' | 'raster'>('vector');
  const [showTypography, setShowTypography] = useState<boolean>(true);
  const [canvasBg, setCanvasBg] = useState<'slate' | 'white' | 'checker'>('slate');

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 50, 1200));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 50, 50));
  const handleResetZoom = (level: number) => setZoomLevel(level);

  const downloadHighResLogo = () => {
    const link = document.createElement('a');
    link.href = ASSET_IMAGES.swarayeeLogo;
    link.download = 'Swarayee_Comps_Official_Logo.jpeg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-4xl w-full max-h-[95vh] flex flex-col shadow-2xl overflow-hidden text-white">
        
        {/* Top Header Bar */}
        <div className="p-4 sm:px-6 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  स्वराई ब्रँड लोगो · हाय-लेव्हल झूम व पिक्सेल इन्स्पेक्टर
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  अल्ट्रा हाय-पिक्सेल (No Blur)
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                कितीही हाय लेव्हल झूम (५०% ते १२००%) केला तरी लोगो क्रिस्टल-क्लिअर व शार्प दिसतो.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="बंद करा"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Control Toolbar */}
        <div className="px-4 py-3 bg-slate-950/60 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
          
          {/* Mode Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-800 rounded-xl border border-slate-700">
            <button
              onClick={() => setActiveMode('vector')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeMode === 'vector'
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>प्युअर व्हेक्टर (SVG)</span>
            </button>
            <button
              onClick={() => setActiveMode('raster')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeMode === 'raster'
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>अल्ट्रा एचडी 3D बॉक्स</span>
            </button>
          </div>

          {/* Quick Zoom Presets */}
          <div className="flex items-center gap-1">
            <span className="text-slate-400 text-[11px] mr-1 hidden sm:inline">झूम:</span>
            {[100, 200, 400, 800, 1200].map((level) => (
              <button
                key={level}
                onClick={() => handleResetZoom(level)}
                className={`px-2 py-1 rounded-md text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
                  zoomLevel === level
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {level}%
              </button>
            ))}
          </div>

          {/* Interactive Zoom Adjusters */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 50}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 rounded-lg cursor-pointer"
              title="झूम कमी करा"
            >
              <ZoomOut className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono font-bold w-12 text-center text-orange-400">
              {zoomLevel}%
            </span>

            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 1200}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 rounded-lg cursor-pointer"
              title="झूम वाढवा"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            {/* Background toggle */}
            <div className="flex items-center gap-1 ml-2 border-l border-slate-700 pl-2">
              <button
                onClick={() => setCanvasBg('slate')}
                className={`w-5 h-5 rounded-md border ${canvasBg === 'slate' ? 'ring-2 ring-orange-500 border-white' : 'border-slate-600'} bg-slate-900`}
                title="गडद पार्श्वभूमी"
              />
              <button
                onClick={() => setCanvasBg('white')}
                className={`w-5 h-5 rounded-md border ${canvasBg === 'white' ? 'ring-2 ring-orange-500 border-slate-900' : 'border-slate-600'} bg-white`}
                title="पांढरी पार्श्वभूमी"
              />
              <button
                onClick={() => setCanvasBg('checker')}
                className={`w-5 h-5 rounded-md border ${canvasBg === 'checker' ? 'ring-2 ring-orange-500 border-white' : 'border-slate-600'} bg-[linear-gradient(45deg,#1e293b_25%,transparent_25%),linear-gradient(-45deg,#1e293b_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#1e293b_75%),linear-gradient(-45deg,transparent_75%,#1e293b_75%)] bg-[size:10px_10px] bg-slate-800`}
                title="ट्रान्सपरंट चेकर पार्श्वभूमी"
              />
            </div>
          </div>

        </div>

        {/* Viewport Canvas (Scrollable for deep zoom inspection) */}
        <div
          className={`flex-1 overflow-auto p-8 flex items-center justify-center min-h-[380px] sm:min-h-[440px] relative transition-colors ${
            canvasBg === 'white'
              ? 'bg-slate-100'
              : canvasBg === 'checker'
              ? 'bg-[linear-gradient(45deg,#1e293b_25%,transparent_25%),linear-gradient(-45deg,#1e293b_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#1e293b_75%),linear-gradient(-45deg,transparent_75%,#1e293b_75%)] bg-[size:20px_20px] bg-slate-900'
              : 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
          }`}
        >
          <div
            className="transition-all duration-150 ease-out flex items-center justify-center select-none"
            style={{
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: 'center center'
            }}
          >
            {activeMode === 'vector' ? (
              <div className="w-72 h-auto drop-shadow-2xl">
                <SwarayeeVectorLogo
                  theme={canvasBg === 'white' ? 'light' : 'dark'}
                  showText={showTypography}
                  boxOnly={false}
                />
              </div>
            ) : (
              <div className="w-72 h-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-orange-500/80 bg-white p-4">
                <img
                  src={ASSET_IMAGES.swarayeeLogo}
                  alt="Swarayee Official Logo"
                  className="w-full h-auto object-contain block"
                  loading="eager"
                />
              </div>
            )}
          </div>

          {/* Floating Zoom Indicator Tag */}
          <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-[11px] font-mono text-slate-300 flex items-center gap-2 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>
              रिझोल्यूशन दर्जा: {activeMode === 'vector' ? 'गणितीय अचूक व्हेक्टर (Infinite Res)' : '1024x1024 अल्ट्रा हाय-पिक्सेल'}
            </span>
            <span className="text-orange-400 font-bold">({zoomLevel}%)</span>
          </div>
        </div>

        {/* Footer Actions & Explanations */}
        <div className="p-4 bg-slate-900/95 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              वेबसाइटवर सर्व ठिकाणी (हेडर, कार्ड्स, फुटर) बॉक्स शेप्ड टचअप लोगो जोडलेला आहे.
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={downloadHighResLogo}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-xl transition-all cursor-pointer shadow-sm text-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>अल्ट्रा एचडी लोगो सेव्ह करा</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer text-xs"
            >
              बंद करा
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
