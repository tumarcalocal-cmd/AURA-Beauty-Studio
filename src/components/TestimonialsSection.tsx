import React, { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../data/beautyData';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3200);
    return () => clearInterval(interval);
  }, [handleNext, currentIndex]);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2.5 bg-[#F8F4EF] text-[#B99561] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#E9D9C8]">
            <span className="w-3 h-px bg-[#B99561]" />
            Opiniones y Reseñas
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#44372F]">
            EXPERIENCIAS QUE MERECEN COMPARTIRSE.
          </h2>
          <p className="text-[#746C65] text-base">
            Ejemplos ilustrativos de reseñas verificables para demostrar la calidad de la experiencia.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Controls */}
          <div className="flex justify-end items-center gap-2 mb-6">
            <button
              onClick={handlePrev}
              aria-label="Reseña anterior"
              className="w-10 h-10 rounded-full bg-[#F8F4EF] hover:bg-[#44372F] text-[#44372F] hover:text-white border border-[#E9D9C8] flex items-center justify-center transition shadow-xs cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Siguiente reseña"
              className="w-10 h-10 rounded-full bg-[#F8F4EF] hover:bg-[#44372F] text-[#44372F] hover:text-white border border-[#E9D9C8] flex items-center justify-center transition shadow-xs cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Sliding Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`
              }}
            >
              {TESTIMONIALS.map(item => (
                <div
                  key={item.id}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="h-full bg-[#F8F4EF] p-8 rounded-3xl border border-[#E9D9C8] space-y-5 flex flex-col justify-between shadow-xs relative">
                    <div className="absolute top-6 right-6 text-[#B99561]/20">
                      <Quote size={40} />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-1 text-[#B99561]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>

                      <p className="text-sm text-[#746C65] italic leading-relaxed">
                        "{item.comment}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E9D9C8]/60 flex items-center justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold text-[#44372F]">{item.name}</h4>
                        <p className="text-[11px] text-[#B99561] font-semibold">{item.service}</p>
                      </div>
                      <span className="text-[10px] text-[#746C65] shrink-0">{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir a reseña ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#B99561]' : 'w-2.5 bg-[#E9D9C8] hover:bg-[#B99561]/60'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-[#746C65] italic">
          * Reseñas de ejemplo ilustrativas. Conecta tus opiniones reales de Google o redes sociales fácilmente.
        </div>

      </div>
    </section>
  );
};
