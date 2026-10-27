import React from 'react';
import { CheckCircle2, Heart, Sparkles, Shield, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const benefits = [
    { title: 'Atención personalizada', desc: 'Cada servicio se adapta a tus gustos y necesidades específicas.' },
    { title: 'Ambiente acogedor', desc: 'Espacios diseñados para tu relax y comodidad absoluta.' },
    { title: 'Servicios especializados', desc: 'Tratamientos de alta calidad con productos profesionales.' },
    { title: 'Reserva sencilla', desc: 'Coordina tus citas y calcula presupuestos en segundos.' }
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Professional Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#E9D9C8]/40 rounded-full blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=900"
                alt="Aura Beauty Studio interior y profesionales"
                className="relative rounded-2xl shadow-xl w-full h-[460px] object-cover border-4 border-[#F8F4EF]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#44372F] text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-xs">
                <p className="text-xs tracking-widest uppercase text-[#B99561] font-semibold mb-1">Filosofía</p>
                <p className="text-sm font-medium italic">"Tu belleza natural merece el entorno más cuidado y profesional."</p>
              </div>
            </div>
          </div>

          {/* Right Column: Text & 4 Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#F8F4EF] text-[#B99561] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#E9D9C8]">
              <Sparkles size={14} />
              Sobre Nosotros
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#44372F] leading-tight">
              UN ESPACIO PARA CUIDARTE Y SENTIRTE BIEN.
            </h2>

            <p className="text-base text-[#746C65] leading-relaxed">
              En Aura Beauty Studio creemos que dedicarte tiempo es una forma de bienestar.
            </p>

            <p className="text-base text-[#746C65] leading-relaxed">
              Nuestra propuesta reúne tratamientos de belleza, cuidado personal y experiencias diseñadas para ayudarte a disfrutar cada visita.
            </p>

            {/* 4 Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-[#F8F4EF] p-4 rounded-xl border border-[#E9D9C8]/60 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#44372F] font-semibold text-sm">
                    <CheckCircle2 size={18} className="text-[#B99561]" />
                    {benefit.title}
                  </div>
                  <p className="text-xs text-[#746C65] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
