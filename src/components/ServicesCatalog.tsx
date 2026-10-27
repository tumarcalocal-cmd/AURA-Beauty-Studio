import React, { useState } from 'react';
import { CATEGORIES, SERVICES, Service } from '../data/beautyData';
import { Sparkles, Plus, Check, Calendar, Clock, Tag } from 'lucide-react';

interface ServicesCatalogProps {
  onAddServiceToQuote: (service: Service) => void;
  onBookService: (service: Service) => void;
  quotedServiceIds: string[];
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  onAddServiceToQuote,
  onBookService,
  quotedServiceIds
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].id);

  const filteredServices = SERVICES.filter(s => s.categoryId === activeCategory);
  const currentCategoryObj = CATEGORIES.find(c => c.id === activeCategory);

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E9D9C8]/60 text-[#44372F] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            <Sparkles size={14} className="text-[#B99561]" />
            Nuestros Tratamientos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#44372F]">
            DESCUBRE NUESTROS SERVICIOS.
          </h2>
          <p className="text-[#746C65] text-base">
            Explora nuestra selección de tratamientos diseñados para realzar tu belleza y brindarte bienestar.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition shadow-xs cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#44372F] text-white shadow-md'
                  : 'bg-white text-[#44372F] hover:bg-[#E9D9C8]/40 border border-[#E9D9C8]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Banner / Description */}
        {currentCategoryObj && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 mb-10 shadow-sm border border-[#E9D9C8] flex flex-col md:flex-row items-center gap-6">
            <img
              src={currentCategoryObj.image}
              alt={currentCategoryObj.name}
              className="w-full md:w-72 h-48 object-cover rounded-xl shadow-xs"
            />
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-semibold tracking-widest text-[#B99561] uppercase">Categoría Seleccionada</span>
              <h3 className="text-2xl font-bold text-[#44372F]">{currentCategoryObj.name}</h3>
              <p className="text-sm text-[#746C65] leading-relaxed">{currentCategoryObj.description}</p>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => {
            const isQuoted = quotedServiceIds.includes(service.id);
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-[#E9D9C8]/60 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-[#44372F] shadow-xs flex items-center gap-1">
                      <Tag size={12} className="text-[#B99561]" />
                      ${service.price} USD
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#746C65] font-medium">
                      <span className="flex items-center gap-1 bg-[#F8F4EF] px-2.5 py-1 rounded-md">
                        <Clock size={14} className="text-[#B99561]" />
                        {service.duration}
                      </span>
                      <span className="text-[11px] uppercase tracking-wider text-[#B99561] font-semibold">Demostración</span>
                    </div>

                    <h4 className="text-xl font-bold text-[#44372F]">{service.name}</h4>
                    <p className="text-xs text-[#746C65] leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => onAddServiceToQuote(service)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wide transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      isQuoted
                        ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                        : 'bg-[#F8F4EF] hover:bg-[#E9D9C8] text-[#44372F] border border-[#E9D9C8]'
                    }`}
                  >
                    {isQuoted ? (
                      <>
                        <Check size={14} /> EN COTIZACIÓN
                      </>
                    ) : (
                      <>
                        <Plus size={14} /> AGREGAR
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onBookService(service)}
                    className="bg-[#44372F] hover:bg-[#2e241e] text-white py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wide transition flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <Calendar size={14} /> RESERVAR
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
