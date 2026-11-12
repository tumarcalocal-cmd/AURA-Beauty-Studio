import React from 'react';
import { PACKAGES, Package } from '../data/beautyData';
import { Check, Plus, Calendar } from 'lucide-react';

interface PackagesSectionProps {
  onAddPackageToAppointment: (pkg: Package) => void;
  onBookPackage: (pkg: Package) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onAddPackageToAppointment, onBookPackage }) => {
  return (
    <section id="paquetes" className="py-20 lg:py-28 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2.5 bg-[#E9D9C8]/60 text-[#44372F] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            <span className="w-3 h-px bg-[#B99561]" />
            Experiencias Combinadas
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#44372F]">
            REGÁLATE UNA EXPERIENCIA COMPLETA.
          </h2>
          <p className="text-[#746C65] text-base">
            Paquetes diseñados para ofrecerte una jornada integral de belleza y bienestar en un solo lugar.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PACKAGES.map(pkg => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition border border-[#E9D9C8] flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover object-[50%_25%] transform hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#B99561]">Paquete Exclusivo</span>
                    <h3 className="text-2xl font-bold text-[#44372F]">{pkg.name}</h3>
                    <p className="text-xs text-[#746C65]">{pkg.subtitle}</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#E9D9C8]/60">
                    <span className="text-xs font-semibold text-[#44372F] block">Incluye:</span>
                    <ul className="space-y-2">
                      {pkg.services.map((svc, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-[#746C65]">
                          <Check size={14} className="text-[#B99561]" />
                          <span>{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 grid grid-cols-2 gap-3">
                <button
                  onClick={() => onAddPackageToAppointment(pkg)}
                  className="bg-[#F8F4EF] hover:bg-[#E9D9C8] text-[#44372F] border border-[#E9D9C8] py-3 px-3 rounded-xl text-xs font-semibold tracking-wide transition flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Plus size={14} /> SELECCIONAR
                </button>

                <button
                  onClick={() => onBookPackage(pkg)}
                  className="bg-[#44372F] hover:bg-[#2e241e] text-white py-3 px-3 rounded-xl text-xs font-semibold tracking-wide transition flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                >
                  <Calendar size={14} /> RESERVAR
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
