import React, { useState } from 'react';
import { BranchInfo, getBranchConfig, saveBranchConfig } from '../data/configStore';
import { X, Save, Check, Upload, Trash2, Image as ImageIcon } from 'lucide-react';

interface BranchConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaved: () => void;
}

export const BranchConfigModal: React.FC<BranchConfigModalProps> = ({
  isOpen,
  onClose,
  onSaved
}) => {
  if (!isOpen) return null;

  const current = getBranchConfig();
  const [formData, setFormData] = useState<BranchInfo>(current);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | undefined>(formData.customLogoUrl);

  const handleLogoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.includes('png') && !file.type.includes('svg') && !file.type.includes('jpeg') && !file.type.includes('webp')) {
        alert('कृपया फक्त मूळ PNG, SVG किंवा JPG लोगो फाइल निवडा.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setLogoPreview(result);
        setFormData((prev) => ({ ...prev, customLogoUrl: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogoPreview('');
    setFormData((prev) => ({ ...prev, customLogoUrl: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveBranchConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onSaved();
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-5 border border-slate-200 shadow-2xl relative">
        
        <div className="flex items-start justify-between pb-3 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              शाखा व संपर्क सेटिंग्ज
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              अधिकृत लोगो व शाखा माहिती
            </h3>
            <p className="text-xs text-slate-500">
              येथे तुमचा मूळ Swarayee लोगो आणि खरी शाखा माहिती सेट करा.
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

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          {/* Logo Upload Section */}
          <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200/80 space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4 text-orange-600" />
                <span>मूळ अधिकृत Swarayee Logo (PNG किंवा SVG)</span>
              </label>
              {logoPreview && (
                <button
                  type="button"
                  onClick={handleRemoveLogo}
                  className="text-[11px] text-red-600 hover:text-red-800 flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>काढून टाका</span>
                </button>
              )}
            </div>

            {logoPreview ? (
              <div className="p-3 bg-white rounded-lg border border-slate-200 flex items-center justify-center min-h-[64px]">
                <img
                  src={logoPreview}
                  alt="Official Swarayee Logo Preview"
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            ) : (
              <p className="text-[11px] text-slate-600">
                तुमच्याकडे मूळ Swarayee Logo फाइल (PNG/SVG) असल्यास खालील बटनावर क्लिक करून ती निवडा. कोणताही बदल न करता तो थेट हेडर व फुटरमध्ये दिसेल.
              </p>
            )}

            <div>
              <label className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg cursor-pointer transition-colors shadow-sm">
                <Upload className="w-3.5 h-3.5 text-orange-600" />
                <span>{logoPreview ? 'दुसरा लोगो निवडा' : 'मूळ लोगो फाइल निवडा (PNG/SVG)'}</span>
                <input
                  type="file"
                  accept="image/png,image/svg+xml,image/jpeg,image/webp"
                  onChange={handleLogoFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 uppercase tracking-wide mb-1">
              नोंदणीकृत कॉर्पोरेट कंपनीचे नाव
            </label>
            <input
              type="text"
              value={formData.legalName}
              onChange={(e) => setFormData({ ...formData, legalName: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-semibold"
              required
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 uppercase tracking-wide mb-1">
              शाखेचा पूर्ण रस्ता पत्ता
            </label>
            <textarea
              rows={2}
              value={formData.branchAddress}
              onChange={(e) => setFormData({ ...formData, branchAddress: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium"
              placeholder="उदा. गाळा क्र. ४, तळमजला, सेंट्रल प्लाझा, मेन रोड"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wide mb-1">
                जवळचे ठिकाण (Landmark)
              </label>
              <input
                type="text"
                value={formData.landmark}
                onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium"
                placeholder="उदा. स्टेट बँक ऑफ इंडिया समोर"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wide mb-1">
                अधिकृत व्हॉट्सॲप नंबर
              </label>
              <input
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-mono"
                placeholder="उदा. 9822000000 (१० अंक)"
              />
              <span className="text-[10px] text-slate-500 mt-0.5 block">
                रिक्त ठेवल्यास व्हॉट्सॲप ॲपमध्ये थेट संदेश उघडेल.
              </span>
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 uppercase tracking-wide mb-1">
              काउंटर कामाची वेळ
            </label>
            <input
              type="text"
              value={formData.operationalHours}
              onChange={(e) => setFormData({ ...formData, operationalHours: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-medium"
              placeholder="उदा. सोमवार ते शनिवार: सकाळी ९:०० ते रात्री ८:३०"
            />
          </div>

          {savedSuccess && (
            <div className="p-3 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>शाखा माहिती व लोगो यशस्वीरीत्या जतन केला आहे!</span>
            </div>
          )}

          <div className="pt-2 flex justify-end gap-3 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
            >
              रद्द करा
            </button>
            <button
              type="submit"
              className="px-5 py-2 font-bold text-white bg-slate-900 hover:bg-orange-600 rounded-lg shadow-sm inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>माहिती जतन करा</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
