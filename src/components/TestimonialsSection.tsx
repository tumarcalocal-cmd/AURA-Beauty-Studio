import React from 'react';
import { TESTIMONIALS } from '../data/beautyData';
import { Sparkles, Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F8F4EF] text-[#B99561] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#E9D9C8]">
            <Sparkles size={14} />
            Opiniones y Reseñas
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#44372F]">
            EXPERIENCIAS QUE MERECEN COMPARTIRSE.
          </h2>
          <p className="text-[#746C65] text-base">
            Ejemplos ilustrativos de reseñas verificables para demostrar la calidad del servicio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(item => (
            <div
              key={item.id}
              className="bg-[#F8F4EF] p-8 rounded-3xl border border-[#E9D9C8] space-y-4 flex flex-col justify-between shadow-xs relative"
            >
              <div className="absolute top-6 right-6 text-[#B99561]/20">
                <Quote size={40} />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#B99561]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-xs text-[#746C65] italic leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9D9C8]/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#44372F]">{item.name}</h4>
                  <p className="text-[11px] text-[#B99561] font-semibold">{item.service}</p>
                </div>
                <span className="text-[10px] text-[#746C65]">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-[#746C65] italic">
          * Reseñas de ejemplo ilustrativas. Conecta tus opiniones reales de Google o redes sociales fácilmente.
        </div>

      </div>
    </section>
  );
};
