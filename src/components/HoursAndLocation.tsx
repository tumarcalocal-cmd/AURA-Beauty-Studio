import React from 'react';
import { Clock, MapPin, Sparkles, Phone, Mail } from 'lucide-react';

export const HoursAndLocation: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E9D9C8]/60 text-[#44372F] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            <Sparkles size={14} className="text-[#B99561]" />
            Ubicación y Horarios
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#44372F]">
            TU PRÓXIMO MOMENTO DE BELLEZA COMIENZA AQUÍ.
          </h2>
          <p className="text-[#746C65] text-base">
            Visítanos en nuestras instalaciones diseñadas para tu confort en Panamá.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Hours Card */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#E9D9C8] shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F8F4EF] rounded-xl flex items-center justify-center text-[#B99561] border border-[#E9D9C8]">
                  <Clock size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#44372F]">Horarios de Atención</h3>
              </div>

              <div className="space-y-3 pt-2 text-sm text-[#746C65]">
                <div className="flex justify-between py-2 border-b border-[#E9D9C8]/40">
                  <span className="font-medium text-[#44372F]">Lunes a Viernes</span>
                  <span>9:00 a. m. a 6:00 p. m.</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#E9D9C8]/40">
                  <span className="font-medium text-[#44372F]">Sábados</span>
                  <span>9:00 a. m. a 5:00 p. m.</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium text-[#44372F]">Domingos</span>
                  <span className="text-rose-600 font-semibold">Cerrado</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#746C65] italic pt-4 border-t border-[#E9D9C8]">
              * Horarios ilustrativos de demostración. Los horarios operativos reales pueden ajustarse según la sucursal.
            </p>
          </div>

          {/* Location & Interactive Map representation */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#E9D9C8] shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F8F4EF] rounded-xl flex items-center justify-center text-[#B99561] border border-[#E9D9C8]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#44372F]">Ubicación en Panamá</h3>
                  <p className="text-xs text-[#746C65]">Referencia geográfica general • Configurable para cualquier sede</p>
                </div>
              </div>

              {/* Map embed / mock view */}
              <div className="relative h-56 rounded-2xl overflow-hidden border border-[#E9D9C8] bg-[#F8F4EF] flex items-center justify-center">
                <iframe
                  title="Panama Map Reference"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252540.67139158776!2d-79.61996165!3d8.9823635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fab5d87ec9e2f9f%3A0x2a6a6fae8557a5c3!2sPanam%C3%A1!5e0!3m2!1ses!2spa!4v1650000000000!5m2!1ses!2spa"
                  className="w-full h-full border-0 opacity-90"
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-xl shadow-xs text-xs font-bold text-[#44372F]">
                  📍 Panamá (Sede configurable)
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#746C65] italic">
              * Mapa interactivo de referencia. Preparado para integrar la dirección exacta de tu salón, spa o centro de belleza en cualquier ubicación.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
