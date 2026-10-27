import React from 'react';
import { TEAM } from '../data/beautyData';
import { Sparkles, Award } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="equipo" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F8F4EF] text-[#B99561] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#E9D9C8]">
            <Sparkles size={14} />
            Nuestro Equipo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#44372F]">
            EL TALENTO DETRÁS DE CADA DETALLE.
          </h2>
          <p className="text-[#746C65] text-base">
            Profesionales apasionadas dedicadas a ofrecerte una atención experta y cercana.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map(member => (
            <div
              key={member.id}
              className="bg-[#F8F4EF] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition border border-[#E9D9C8] flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#44372F] shadow-xs">
                  {member.specialty}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B99561]">{member.role}</span>
                  <h3 className="text-xl font-bold text-[#44372F] mt-1">{member.name}</h3>
                  <p className="text-xs text-[#746C65] mt-2 leading-relaxed">{member.bio}</p>
                </div>

                <div className="pt-4 border-t border-[#E9D9C8]/60 flex items-center gap-1.5 text-[11px] text-[#746C65]">
                  <Award size={14} className="text-[#B99561]" />
                  <span>Perfil profesional ilustrativo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
