import React, { useState, useEffect } from 'react';
import { X, Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface ExitIntentPopupProps {
  onExplore: () => void;
}

export const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onExplore }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Timer fallback after 15 seconds
    const timer = setTimeout(() => {
      const hasShown = sessionStorage.getItem('aura_popup_shown');
      if (!hasShown) {
        setIsOpen(true);
        sessionStorage.setItem('aura_popup_shown', 'true');
      }
    }, 15000);

    // Mouse leave / exit intent listener
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        const hasShown = sessionStorage.getItem('aura_popup_shown');
        if (!hasShown) {
          setIsOpen(true);
          sessionStorage.setItem('aura_popup_shown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 text-center space-y-6 relative shadow-2xl border border-[#E9D9C8]">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[#746C65] hover:text-[#44372F] p-2 cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="w-16 h-16 bg-[#E9D9C8]/50 text-[#B99561] rounded-full flex items-center justify-center mx-auto">
          <Sparkles size={28} />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#44372F]">
            ¡ESPERA! TU MOMENTO DE BELLEZA TE ESPERA.
          </h3>
          <p className="text-sm text-[#746C65] leading-relaxed">
            Descubre nuestros tratamientos y calcula el presupuesto de tu próxima experiencia.
          </p>
        </div>

        <button
          onClick={() => {
            setIsOpen(false);
            onExplore();
          }}
          className="w-full bg-[#44372F] hover:bg-[#2e241e] text-white py-4 rounded-full font-semibold tracking-wider text-sm transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          EXPLORAR TRATAMIENTOS
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

interface MobileFloatingButtonProps {
  onOpenBooking: () => void;
}

export const MobileFloatingButton: React.FC<MobileFloatingButtonProps> = ({ onOpenBooking }) => {
  return (
    <div className="sm:hidden fixed bottom-6 left-4 right-4 z-40">
      <button
        onClick={onOpenBooking}
        className="w-full bg-[#44372F] text-white py-4 rounded-full shadow-2xl flex items-center justify-center gap-2 font-bold text-sm tracking-wider border-2 border-white/40 cursor-pointer"
      >
        <Calendar size={18} />
        RESERVAR MI CITA
      </button>
    </div>
  );
};
