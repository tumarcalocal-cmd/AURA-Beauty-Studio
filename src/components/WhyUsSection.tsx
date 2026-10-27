import React from 'react';
import { Sparkles, Heart, ShieldCheck, Layers, CalendarCheck } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const cards = [
    {
      icon: <Heart size={24} className="text-[#B99561]" />,
      title: 'Experiencia personalizada',
      desc: 'Cada visita se adapta a tus gustos, necesidades y estilo de vida con asesoría dedicada.'
    },
    {
      icon: <ShieldCheck size={24} className="text-[#B99561]" />,
      title: 'Comodidad absoluta',
      desc: 'Instalaciones modernas y acogedoras diseñadas para brindarte un momento de paz.'
    },
    {
      icon: <Layers size={24} className="text-[#B99561]" />,
      title: 'Variedad de servicios',
      desc: 'Un catálogo completo de tratamientos capilares, manicura, faciales, maquillaje y spa.'
    },
    {
      icon: <CalendarCheck size={24} className="text-[#B99561]" />,
      title: 'Facilidad para reservar',
      desc: 'Cotiza presupuestos y agenda tus citas en línea de forma rápida y transparente.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F8F4EF] text-[#B99561] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#E9D9C8]">
            <Sparkles size={14} />
            Nuestra Diferencia
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#44372F]">
            CADA DETALLE ESTÁ PENSADO PARA TI.
          </h2>
          <p className="text-[#746C65] text-base">
            Descubre por qué somos el espacio preferido para tu cuidado personal y bienestar.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F8F4EF] p-8 rounded-3xl border border-[#E9D9C8] space-y-4 hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xs border border-[#E9D9C8]">
                {card.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#44372F]">{card.title}</h3>
                <p className="text-xs text-[#746C65] leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
