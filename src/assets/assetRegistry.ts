/**
 * Centralized Asset Registry for Swarayee Comps And Infotech
 * Bundles all images via Vite ES imports to guarantee 100% uptime on local dev,
 * production builds, and subpath deployments like GitHub Pages (/swarayee-ai-website/).
 */

import swarayeeLogoFile from './images/swarayee_logo.jpeg';
import heroImageFile from './images/hero_swarayee_tech_1792845635854.jpg';
import courierImageFile from './images/courier_express_service_1792845636476.jpg';
import stampImageFile from './images/rubber_stamp_print_1792845637089.jpg';
import startekDeviceFile from './images/startek_biometric_scanner_1792851833269.jpg';
import startekBoxFile from './images/startek_device_package_1792851861883.jpg';

export const ASSET_IMAGES = {
  swarayeeLogo: swarayeeLogoFile,
  heroImage: heroImageFile,
  courierImage: courierImageFile,
  stampImage: stampImageFile,
  startekDevice: startekDeviceFile,
  startekBox: startekBoxFile,
} as const;

/**
 * Resolves public assets considering Vite's base path for GitHub Pages and production
 */
export function resolveAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${cleanPath}`;
}
