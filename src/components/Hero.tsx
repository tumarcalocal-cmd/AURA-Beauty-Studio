import React from 'react';
import { Calendar, Compass, Sparkles, ShieldCheck, Heart } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section id="hero" className="relative bg-[#F8F4EF] py-16 lg:py-24 overflow-hidden border-b border-[#E9D9C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#E9D9C8]/60 text-[#44372F] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
              <Sparkles size={14} className="text-[#B99561]" />
              Tu belleza. Tu momento. Tu esencia.
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#44372F] leading-[1.15]">
              TU BELLEZA MERECE UN MOMENTO ESPECIAL.
            </h1>

            <p className="text-base sm:text-lg text-[#746C65] font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Descubre una experiencia de cuidado personal donde la belleza, el bienestar y la atención a los detalles se encuentran.
            </p>

            {/* Action Buttons & Availability indicator */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto bg-[#44372F] hover:bg-[#2e241e] text-white px-8 py-4 rounded-full font-semibold tracking-wider text-sm transition shadow-md flex items-center justify-center gap-2 group"
                >
                  <Calendar size={18} className="transition-transform group-hover:scale-110" />
                  RESERVAR MI CITA
                </button>

                <button
                  onClick={onExploreServices}
                  className="w-full sm:w-auto bg-white hover:bg-[#E9D9C8]/30 text-[#44372F] border border-[#B99561] px-8 py-4 rounded-full font-semibold tracking-wider text-sm transition shadow-xs flex items-center justify-center gap-2"
                >
                  <Compass size={18} className="text-[#B99561]" />
                  EXPLORAR SERVICIOS
                </button>
              </div>

              {/* Availability Indicator */}
              <div className="inline-flex items-center gap-2 text-xs text-[#746C65] bg-white/80 px-4 py-2 rounded-lg border border-[#E9D9C8]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-medium text-[#44372F]">CONSULTAR DISPONIBILIDAD PARA TU CITA.</span>
              </div>
            </div>

            {/* Three Attributes */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E9D9C8]/60 mt-8">
              <div className="flex items-center justify-center lg:justify-start gap-3 bg-white/60 p-3 rounded-xl border border-[#E9D9C8]/40">
                <div className="w-8 h-8 rounded-full bg-[#E9D9C8]/50 flex items-center justify-center text-[#B99561]">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-xs font-semibold text-[#44372F]">Atención personalizada.</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 bg-white/60 p-3 rounded-xl border border-[#E9D9C8]/40">
                <div className="w-8 h-8 rounded-full bg-[#E9D9C8]/50 flex items-center justify-center text-[#B99561]">
                  <Sparkles size={18} />
                </div>
                <span className="text-xs font-semibold text-[#44372F]">Servicios de belleza.</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 bg-white/60 p-3 rounded-xl border border-[#E9D9C8]/40">
                <div className="w-8 h-8 rounded-full bg-[#E9D9C8]/50 flex items-center justify-center text-[#B99561]">
                  <Heart size={18} />
                </div>
                <span className="text-xs font-semibold text-[#44372F]">Experiencias de bienestar.</span>
              </div>
            </div>

          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 bg-[#E9D9C8]/40 rounded-3xl transform rotate-2"></div>
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=900"
                alt="Aura Beauty Studio - Ambiente de belleza premium"
                className="relative rounded-2xl shadow-xl w-full h-[450px] sm:h-[520px] object-cover border-4 border-white"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#E9D9C8]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#B99561]">Ambiente Exclusivo</p>
                <p className="text-sm font-bold text-[#44372F]">Profesionales dedicadas a tu bienestar</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
