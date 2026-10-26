/**
 * Business Configuration Store for Swarayee Comps And Infotech OPC Pvt Ltd
 * Handles WhatsApp link generation, branch information, and transparent customer assistance.
 * Strict adherence: No fabricated phone numbers or fake affiliation numbers.
 */

export interface BranchInfo {
  legalName: string;
  brandName: string;
  motto: string;
  registrationType: string;
  country: string;
  cin: string;
  gstin: string;
  officialEmail: string;
  whatsappNumber: string;
  phoneNumber: string;
  landlineNumber: string;
  instagramHandle: string;
  branchAddress: string;
  landmark: string;
  taluka: string;
  district: string;
  pincode: string;
  operationalHours: string;
  sundayHours: string;
  establishedNotice: string;
  customLogoUrl?: string;
}

export const DEFAULT_BRANCH_INFO: BranchInfo = {
  legalName: 'Swarayee Comps And Infotech OPC Pvt Ltd',
  brandName: 'Swarayee Comps & Infotech',
  motto: 'ज्ञानदीप: प्रगतये',
  registrationType: '',
  country: '',
  cin: 'U80900PN2023OPC217692',
  gstin: '27ABKCS1334D1ZJ',
  officialEmail: 'shewalesagar9@gmail.com',
  whatsappNumber: '9561298384',
  phoneNumber: '9561298384',
  landlineNumber: '02164-251127',
  instagramHandle: '@swarayee_comps_and_infotech',
  branchAddress: 'Balsiddha Saw Mill, Birobanagar, Ond, Tal. Karad, Dist. Satara, Maharashtra – 415111',
  landmark: 'Balsiddha Saw Mill, Birobanagar, Ond',
  taluka: 'Karad',
  district: 'Satara',
  pincode: '415111',
  operationalHours: 'सोमवार ते शनिवार: सकाळी ९:०० ते रात्री ८:३० पर्यंत',
  sundayHours: 'रविवार: सकाळी १०:०० ते दुपारी २:००',
  establishedNotice: 'CIN: U80900PN2023OPC217692 · GSTIN: 27ABKCS1334D1ZJ',
  customLogoUrl: '/swarayee_logo.jpeg'
};

const STORAGE_KEY = 'swarayee_branch_config_v2';

export function getBranchConfig(): BranchInfo {
  if (typeof window === 'undefined') return DEFAULT_BRANCH_INFO;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...DEFAULT_BRANCH_INFO, ...JSON.parse(saved) };
    }
  } catch {
    // fallback to default
  }
  return DEFAULT_BRANCH_INFO;
}

export function saveBranchConfig(info: BranchInfo): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
  } catch {
    // ignore
  }
}

/**
 * Builds a valid WhatsApp share URL with pre-filled message text.
 */
export function buildWhatsAppUrl(messageText: string, customNumber?: string): string {
  const number = (customNumber || getBranchConfig().whatsappNumber || '').replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(messageText);
  if (number && number.length >= 10) {
    const fullNumber = number.length === 10 ? `91${number}` : number;
    return `https://wa.me/${fullNumber}?text=${encoded}`;
  }
  return `https://api.whatsapp.com/send?text=${encoded}`;
}
