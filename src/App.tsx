/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EducationSection } from './components/EducationSection';
import { CourierSection } from './components/CourierSection';
import { RubberStampSection } from './components/RubberStampSection';
import { PrintingSection } from './components/PrintingSection';
import { CscServicesSection } from './components/CscServicesSection';
import { StartekSection } from './components/StartekSection';
import { AboutAndBranchSection } from './components/AboutAndBranchSection';
import { OurJourneySection } from './components/OurJourneySection';
import { SectionNavigationHub } from './components/SectionNavigationHub';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { BranchConfigModal } from './components/BranchConfigModal';
import { LogoZoomModal } from './components/LogoZoomModal';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { buildWhatsAppUrl } from './data/configStore';

export default function App() {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [selectedCourseForAdmission, setSelectedCourseForAdmission] = useState<string | undefined>();
  const [branchModalOpen, setBranchModalOpen] = useState(false);
  const [logoZoomModalOpen, setLogoZoomModalOpen] = useState(false);
  const [configVersion, setConfigVersion] = useState(0);

  const handleOpenAdmissionModal = (courseId?: string) => {
    setSelectedCourseForAdmission(courseId);
    setAdmissionModalOpen(true);
  };

  const handleScrollToCourier = () => {
    const el = document.getElementById('courier');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFloatingWhatsApp = () => {
    const text = 'नमस्कार स्वराई कॉम्प्स अँड इन्फोटेक, मला आपल्या सेवांविषयी माहिती हवी आहे.';
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        key={`nav-${configVersion}`}
        onOpenAdmissionModal={handleOpenAdmissionModal}
        onOpenBranchModal={() => setBranchModalOpen(true)}
        onOpenLogoZoom={() => setLogoZoomModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Showcase */}
        <Hero
          onOpenAdmissionModal={() => handleOpenAdmissionModal()}
          onScrollToCourier={handleScrollToCourier}
        />

        {/* Section-Wise Directory & Quick Jump Navigation Hub */}
        <SectionNavigationHub />

        {/* 2. Computer Education (MS-CIT, MS-ACIT, Tally Prime with GST, Typing, Advanced Excel) */}
        <EducationSection
          onOpenAdmissionModal={handleOpenAdmissionModal}
        />

        {/* 3. Courier Services (India & Abroad) with Official Tracking Link */}
        <CourierSection />

        {/* 4. Rubber Stamp & Pre-Inked Stamp Crafting Studio */}
        <RubberStampSection />

        {/* 5. Commercial Multi-Color Printing Services */}
        <PrintingSection />

        {/* 6. Verified CSC & Digital Citizen Services */}
        <CscServicesSection />

        {/* 7. Authorised Startek Biometric Thumb Device Distributor */}
        <StartekSection />

        {/* 8. Our Journey & Milestones (2010 to 2023) */}
        <OurJourneySection
          onOpenAdmissionModal={() => handleOpenAdmissionModal()}
        />

        {/* 9. About Us, Branch Information & Direct Contact */}
        <AboutAndBranchSection
          key={`about-${configVersion}`}
          onOpenBranchEditModal={() => setBranchModalOpen(true)}
        />
      </main>

      {/* Quiet Footer */}
      <Footer
        key={`footer-${configVersion}`}
        onOpenAdmissionModal={() => handleOpenAdmissionModal()}
        onOpenBranchModal={() => setBranchModalOpen(true)}
        onOpenLogoZoom={() => setLogoZoomModalOpen(true)}
      />

      {/* Interactive Admission Enquiry Modal */}
      <AdmissionModal
        isOpen={admissionModalOpen}
        onClose={() => setAdmissionModalOpen(false)}
        defaultCourseId={selectedCourseForAdmission}
      />

      {/* Branch Information & Settings Modal */}
      <BranchConfigModal
        isOpen={branchModalOpen}
        onClose={() => setBranchModalOpen(false)}
        onSaved={() => setConfigVersion((v) => v + 1)}
      />

      {/* Brand Logo High-Level Zoom & Inspector Modal */}
      <LogoZoomModal
        isOpen={logoZoomModalOpen}
        onClose={() => setLogoZoomModalOpen(false)}
      />

      {/* Floating Action Button for Quick WhatsApp Desk Access */}
      <aside aria-label="त्वरित व्हॉट्सॲप संपर्क" className="fixed bottom-5 right-5 z-40">
        <button
          onClick={handleFloatingWhatsApp}
          aria-label="थेट व्हॉट्सॲप डेस्क"
          className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-full shadow-xl shadow-emerald-950/30 transition-all hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">व्हॉट्सॲप संपर्क</span>
        </button>
      </aside>
    </div>
  );
}
