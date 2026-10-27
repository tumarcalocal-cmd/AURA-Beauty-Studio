import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/beautyData';
import { Sparkles, Maximize2, X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E9D9C8]/60 text-[#44372F] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            <Sparkles size={14} className="text-[#B99561]" />
            Galería de Inspiración
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#44372F]">
            INSPIRACIÓN PARA TU PRÓXIMO LOOK.
          </h2>
          <p className="text-[#746C65] text-base">
            Explora nuestra galería visual con trabajos de estilismo, cuidado personal y espacios de bienestar.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item.image)}
              className="relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer h-72 border border-[#E9D9C8]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#44372F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E9D9C8]">Aura Beauty Studio</span>
                <h3 className="text-lg font-bold text-white flex items-center justify-between">
                  {item.title}
                  <Maximize2 size={18} className="text-[#E9D9C8]" />
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setActiveImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#E9D9C8] p-2 transition cursor-pointer"
              >
                <X size={32} />
              </button>
              <img
                src={activeImage}
                alt="Ampliación"
                className="rounded-2xl max-h-[85vh] mx-auto object-contain shadow-2xl border-2 border-white/20"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
