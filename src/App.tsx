import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesCatalog } from './components/ServicesCatalog';
import { BookingCalendar } from './components/BookingCalendar';
import { PackagesSection } from './components/PackagesSection';
import { TeamSection } from './components/TeamSection';
import { GallerySection } from './components/GallerySection';
import { WhyUsSection } from './components/WhyUsSection';
import { HoursAndLocation } from './components/HoursAndLocation';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { LegalModals } from './components/LegalModals';
import { ExitIntentPopup, MobileFloatingButton } from './components/PersuasiveElements';
import { TuMarcaLocalFooter } from './components/TuMarcaLocalFooter';
import { Service, Package, SERVICES } from './data/beautyData';

export default function App() {
  const [selectedServices, setSelectedServices] = useState<Service[]>([
    SERVICES[0]
  ]);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleService = (service: Service) => {
    setSelectedServices(prev => {
      const exists = prev.some(item => item.id === service.id);
      if (exists) {
        return prev.filter(item => item.id !== service.id);
      }
      return [...prev, service];
    });
  };

  const handleClearServices = () => {
    setSelectedServices([]);
  };

  const handleAddPackageToAppointment = (pkg: Package) => {
    setSelectedServices(prev => {
      const next = [...prev];
      pkg.services.forEach(pkgSvcName => {
        const found = SERVICES.find(s => s.name.toLowerCase() === pkgSvcName.toLowerCase());
        if (found && !next.some(item => item.id === found.id)) {
          next.push(found);
        }
      });
      return next;
    });
    handleNavigate('reservas');
  };

  const handleBookService = (service: Service) => {
    setSelectedServices(prev => {
      if (prev.some(s => s.id === service.id)) return prev;
      return [...prev, service];
    });
    handleNavigate('reservas');
  };

  const handleBookPackage = (pkg: Package) => {
    handleAddPackageToAppointment(pkg);
  };

  return (
    <div className="min-h-screen bg-[#F8F4EF] text-[#44372F] font-sans selection:bg-[#E9D9C8]">

      {/* Navbar */}
      <Navbar
        selectedCount={selectedServices.length}
        onOpenBooking={() => handleNavigate('reservas')}
        onNavigate={handleNavigate}
      />

      {/* Hero Section */}
      <Hero
        onOpenBooking={() => handleNavigate('reservas')}
        onExploreServices={() => handleNavigate('servicios')}
      />

      {/* About Section */}
      <About />

      {/* Services Catalog */}
      <ServicesCatalog
        onToggleService={handleToggleService}
        onBookService={handleBookService}
        selectedServiceIds={selectedServices.map(s => s.id)}
      />

      {/* Simple Booking Calendar */}
      <BookingCalendar
        selectedServices={selectedServices}
        onToggleService={handleToggleService}
        onClearServices={handleClearServices}
        onBookingConfirmed={() => {}}
      />

      {/* Beauty Packages */}
      <PackagesSection
        onAddPackageToAppointment={handleAddPackageToAppointment}
        onBookPackage={handleBookPackage}
      />

      {/* Team Section */}
      <TeamSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Why Us */}
      <WhyUsSection />

      {/* Hours & Location */}
      <HoursAndLocation />

      {/* Testimonials Carousel */}
      <TestimonialsSection />

      {/* FAQ */}
      <FaqSection />

      {/* Contact Section */}
      <ContactSection onOpenBooking={() => handleNavigate('reservas')} />

      {/* Tu Marca Local Footer */}
      <TuMarcaLocalFooter
        onOpenLegal={(type) => setLegalModalType(type)}
        onNavigate={handleNavigate}
      />

      {/* Legal Modals */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Exit Intent Popup */}
      <ExitIntentPopup onExplore={() => handleNavigate('servicios')} />

      {/* Mobile Floating Button */}
      <MobileFloatingButton onOpenBooking={() => handleNavigate('reservas')} />

    </div>
  );
}
