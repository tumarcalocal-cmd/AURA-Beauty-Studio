import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesCatalog } from './components/ServicesCatalog';
import { PriceList } from './components/PriceList';
import { QuoteBuilder } from './components/QuoteBuilder';
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

interface QuoteItem extends Service {
  quantity: number;
}

export default function App() {
  const [selectedServices, setSelectedServices] = useState<QuoteItem[]>([
    // Pre-populate one item as a helpful demo default
    { ...SERVICES[0], quantity: 1 }
  ]);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddServiceToQuote = (service: Service) => {
    setSelectedServices(prev => {
      const existing = prev.find(item => item.id === service.id);
      if (existing) {
        return prev.map(item =>
          item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...service, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (serviceId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveService(serviceId);
      return;
    }
    setSelectedServices(prev =>
      prev.map(item => (item.id === serviceId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveService = (serviceId: string) => {
    setSelectedServices(prev => prev.filter(item => item.id !== serviceId));
  };

  const handleClearQuote = () => {
    setSelectedServices([]);
  };

  const handleAddPackageToQuote = (pkg: Package) => {
    // Find services matching package names
    pkg.services.forEach(pkgSvcName => {
      const found = SERVICES.find(s => s.name.toLowerCase() === pkgSvcName.toLowerCase());
      if (found) {
        handleAddServiceToQuote(found);
      }
    });
    handleNavigate('cotizador');
  };

  const handleBookService = (service: Service) => {
    // Ensure service is in quote and go to booking
    const existing = selectedServices.find(s => s.id === service.id);
    if (!existing) {
      setSelectedServices(prev => [...prev, { ...service, quantity: 1 }]);
    }
    handleNavigate('reservas');
  };

  const handleBookPackage = (pkg: Package) => {
    handleAddPackageToQuote(pkg);
    handleNavigate('reservas');
  };

  const totalQuoteCount = selectedServices.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F8F4EF] text-[#44372F] font-sans selection:bg-[#E9D9C8]">
      
      {/* Navbar */}
      <Navbar
        quoteCount={totalQuoteCount}
        onOpenQuote={() => handleNavigate('cotizador')}
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
        onAddServiceToQuote={handleAddServiceToQuote}
        onBookService={handleBookService}
        quotedServiceIds={selectedServices.map(s => s.id)}
      />

      {/* Price List */}
      <PriceList
        onAddServiceToQuote={handleAddServiceToQuote}
        quotedServiceIds={selectedServices.map(s => s.id)}
      />

      {/* Interactive Quote Builder */}
      <QuoteBuilder
        selectedServices={selectedServices}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveService={handleRemoveService}
        onClearQuote={handleClearQuote}
        onAddService={handleAddServiceToQuote}
        onProceedToBooking={() => handleNavigate('reservas')}
        onNavigateToServices={() => handleNavigate('servicios')}
      />

      {/* Booking Calendar */}
      <BookingCalendar
        selectedServices={selectedServices}
        onBackToQuote={() => handleNavigate('cotizador')}
        onBookingConfirmed={() => {}}
      />

      {/* Beauty Packages */}
      <PackagesSection
        onAddPackageToQuote={handleAddPackageToQuote}
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

      {/* Testimonials */}
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
