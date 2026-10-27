import React, { useState } from 'react';
import { Scissors, Calendar, Calculator, Menu, X, Phone, Sparkles } from 'lucide-react';

interface NavbarProps {
  quoteCount: number;
  onOpenQuote: () => void;
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ quoteCount, onOpenQuote, onOpenBooking, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Top Bar - Tu Marca Local Commercial Demo */}
      <div className="bg-[#44372F] text-[#E9D9C8] text-xs py-2 px-4 text-center font-medium tracking-wide flex flex-wrap justify-center items-center gap-3">
        <span>DEMOSTRACIÓN WEB CREADA POR TU MARCA LOCAL.</span>
        <a
          href="https://wa.me/50765278910?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20p%C3%A1gina%20web"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#B99561] hover:a hover:bg-[#a37f4e] text-white px-3 py-0.5 rounded-full text-xs font-semibold inline-flex items-center gap-1 transition shadow-sm"
        >
          <Phone size={12} />
          QUIERO UNA PÁGINA COMO ESTA
        </a>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E9D9C8]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="text-left group cursor-pointer focus:outline-none"
          >
            <span className="block text-2xl font-bold tracking-widest text-[#44372F] group-hover:text-[#B99561] transition">
              AURA
            </span>
            <span className="block text-[10px] tracking-[0.3em] uppercase text-[#746C65]">
              Beauty Studio
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#44372F]">
            <button onClick={() => handleNavClick('nosotros')} className="hover:text-[#B99561] transition">
              Nosotros
            </button>
            <button onClick={() => handleNavClick('servicios')} className="hover:text-[#B99561] transition">
              Servicios
            </button>
            <button onClick={() => handleNavClick('tarifas')} className="hover:text-[#B99561] transition">
              Tarifas
            </button>
            <button onClick={() => handleNavClick('cotizador')} className="hover:text-[#B99561] transition flex items-center gap-1">
              <Calculator size={16} className="text-[#B99561]" />
              Cotizador
            </button>
            <button onClick={() => handleNavClick('paquetes')} className="hover:text-[#B99561] transition">
              Paquetes
            </button>
            <button onClick={() => handleNavClick('equipo')} className="hover:text-[#B99561] transition">
              Equipo
            </button>
            <button onClick={() => handleNavClick('galeria')} className="hover:text-[#B99561] transition">
              Galería
            </button>
            <button onClick={() => handleNavClick('contacto')} className="hover:text-[#B99561] transition">
              Contacto
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenQuote}
              className="relative p-2.5 rounded-full bg-[#F8F4EF] text-[#44372F] hover:bg-[#E9D9C8]/50 transition border border-[#E9D9C8]"
              title="Ver mi cotización"
            >
              <Calculator size={20} />
              {quoteCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#B99561] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {quoteCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenBooking}
              className="bg-[#44372F] hover:bg-[#2e241e] text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition shadow-sm flex items-center gap-2"
            >
              <Calendar size={16} />
              RESERVAR CITA
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={onOpenQuote}
              className="relative p-2 rounded-full bg-[#F8F4EF] text-[#44372F]"
            >
              <Calculator size={20} />
              {quoteCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#B99561] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {quoteCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#44372F] hover:text-[#B99561] transition"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E9D9C8] px-6 py-6 space-y-4 shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-3 text-base font-medium text-[#44372F]">
              <button onClick={() => handleNavClick('nosotros')} className="text-left py-2 hover:text-[#B99561]">
                Nosotros
              </button>
              <button onClick={() => handleNavClick('servicios')} className="text-left py-2 hover:text-[#B99561]">
                Servicios
              </button>
              <button onClick={() => handleNavClick('tarifas')} className="text-left py-2 hover:text-[#B99561]">
                Tarifas
              </button>
              <button onClick={() => handleNavClick('cotizador')} className="text-left py-2 hover:text-[#B99561] flex items-center gap-2">
                <Calculator size={18} className="text-[#B99561]" />
                Cotizador Interactivo
              </button>
              <button onClick={() => handleNavClick('paquetes')} className="text-left py-2 hover:text-[#B99561]">
                Paquetes de Belleza
              </button>
              <button onClick={() => handleNavClick('equipo')} className="text-left py-2 hover:text-[#B99561]">
                Equipo
              </button>
              <button onClick={() => handleNavClick('galeria')} className="text-left py-2 hover:text-[#B99561]">
                Galería
              </button>
              <button onClick={() => handleNavClick('contacto')} className="text-left py-2 hover:text-[#B99561]">
                Contacto
              </button>
            </div>
            <div className="pt-4 border-t border-[#E9D9C8]">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="w-full bg-[#44372F] text-white py-3 rounded-full text-center font-semibold text-sm shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar size={18} />
                RESERVAR MI CITA
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
