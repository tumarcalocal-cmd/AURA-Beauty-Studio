import React, { useState } from 'react';
import { SERVICES, CATEGORIES, Service } from '../data/beautyData';
import { Search, Sparkles, Plus, Check, Clock, Tag } from 'lucide-react';

interface PriceListProps {
  onAddServiceToQuote: (service: Service) => void;
  quotedServiceIds: string[];
}

export const PriceList: React.FC<PriceListProps> = ({ onAddServiceToQuote, quotedServiceIds }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="tarifas" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F8F4EF] text-[#B99561] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#E9D9C8]">
            <Sparkles size={14} />
            Tarifas Transparentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#44372F]">
            BELLEZA CON TARIFAS CLARAS.
          </h2>
          <p className="text-[#746C65] text-base">
            Consulta nuestros precios ilustrativos en dólares estadounidenses (USD) para planificar tu visita.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-[#F8F4EF] p-6 rounded-2xl mb-10 border border-[#E9D9C8] flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#746C65]" />
            <input
              type="text"
              placeholder="Buscar servicio..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white rounded-xl text-sm text-[#44372F] placeholder-[#746C65]/60 focus:outline-none focus:ring-2 focus:ring-[#B99561] border border-[#E9D9C8]"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#44372F] text-white'
                  : 'bg-white text-[#44372F] hover:bg-[#E9D9C8]/40 border border-[#E9D9C8]'
              }`}
            >
              Todos
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#44372F] text-white'
                    : 'bg-white text-[#44372F] hover:bg-[#E9D9C8]/40 border border-[#E9D9C8]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Price Table / Cards List */}
        <div className="bg-white rounded-2xl border border-[#E9D9C8] overflow-hidden shadow-xs">
          <div className="hidden sm:grid grid-cols-12 bg-[#F8F4EF] px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#44372F] border-b border-[#E9D9C8]">
            <div className="col-span-6">Servicio / Descripción</div>
            <div className="col-span-3">Duración Estimada</div>
            <div className="col-span-2">Precio Ilustrativo</div>
            <div className="col-span-1 text-right">Acción</div>
          </div>

          <div className="divide-y divide-[#E9D9C8]/50">
            {filteredServices.length === 0 ? (
              <div className="py-12 text-center text-[#746C65] text-sm">
                No se encontraron servicios con los filtros seleccionados.
              </div>
            ) : (
              filteredServices.map(service => {
                const isQuoted = quotedServiceIds.includes(service.id);
                const categoryObj = CATEGORIES.find(c => c.id === service.categoryId);

                return (
                  <div key={service.id} className="p-6 sm:grid sm:grid-cols-12 sm:items-center hover:bg-[#F8F4EF]/50 transition">
                    <div className="sm:col-span-6 space-y-1 mb-3 sm:mb-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#B99561]">
                          {categoryObj?.name}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#44372F]">{service.name}</h4>
                      <p className="text-xs text-[#746C65]">{service.description}</p>
                    </div>

                    <div className="sm:col-span-3 flex items-center gap-1.5 text-xs text-[#746C65] mb-2 sm:mb-0">
                      <Clock size={14} className="text-[#B99561]" />
                      <span>{service.duration}</span>
                    </div>

                    <div className="sm:col-span-2 text-base font-bold text-[#44372F] mb-3 sm:mb-0">
                      ${service.price} <span className="text-xs text-[#746C65] font-normal">USD</span>
                    </div>

                    <div className="sm:col-span-1 text-right">
                      <button
                        onClick={() => onAddServiceToQuote(service)}
                        className={`p-2.5 rounded-xl text-xs font-semibold transition inline-flex items-center justify-center gap-1 cursor-pointer ${
                          isQuoted
                            ? 'bg-emerald-700 text-white'
                            : 'bg-[#44372F] text-white hover:bg-[#2e241e]'
                        }`}
                        title="Agregar al cotizador"
                      >
                        {isQuoted ? <Check size={16} /> : <Plus size={16} />}
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-[#746C65]">
          * Tarifas de demostración ilustrativas expresadas en dólares estadounidenses (USD).
        </div>

      </div>
    </section>
  );
};
