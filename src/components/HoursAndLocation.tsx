import React from 'react';
import { Clock, MapPin } from 'lucide-react';

export const HoursAndLocation: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2.5 bg-[#E9D9C8]/60 text-[#44372F] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            <span className="w-3 h-px bg-[#B99561]" />
            Ubicación y Horarios
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#44372F]">
            TU PRÓXIMO MOMENTO DE BELLEZA COMIENZA AQUÍ.
          </h2>
          <p className="text-[#746C65] text-base">
            Visítanos en nuestras instalaciones diseñadas para tu confort en Ciudad de Panamá.
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

          {/* Location & Interactive Map centered on Panama City (capital) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#E9D9C8] shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F8F4EF] rounded-xl flex items-center justify-center text-[#B99561] border border-[#E9D9C8]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#44372F]">Ubicación en Ciudad de Panamá</h3>
                  <p className="text-xs text-[#746C65]">Panamá Capital • Configurable para tu ubicación exacta</p>
                </div>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden border border-[#E9D9C8] bg-[#F8F4EF] flex items-center justify-center">
                <iframe
                  title="Mapa de Ciudad de Panamá"
                  src="https://maps.google.com/maps?q=Ciudad+de+Panam%C3%A1,+Panam%C3%A1&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl shadow-sm text-xs font-bold text-[#44372F] border border-[#E9D9C8]">
                  📍 Ciudad de Panamá, Panamá
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#746C65] italic">
              * Mapa interactivo centrado en Ciudad de Panamá. Preparado para colocar el pin exacto de tu salón, spa o centro de belleza.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
