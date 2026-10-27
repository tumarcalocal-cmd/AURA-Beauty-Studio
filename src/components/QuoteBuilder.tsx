import React, { useState } from 'react';
import { Service, CATEGORIES, SERVICES, COMPLEMENTS } from '../data/beautyData';
import { Calculator, Trash2, Plus, ArrowRight, Sparkles, Clock, Tag, Check } from 'lucide-react';

interface QuoteItem extends Service {
  quantity: number;
}

interface QuoteBuilderProps {
  selectedServices: QuoteItem[];
  onUpdateQuantity: (serviceId: string, quantity: number) => void;
  onRemoveService: (serviceId: string) => void;
  onClearQuote: () => void;
  onAddService: (service: Service) => void;
  onProceedToBooking: () => void;
  onNavigateToServices: () => void;
}

export const QuoteBuilder: React.FC<QuoteBuilderProps> = ({
  selectedServices,
  onUpdateQuantity,
  onRemoveService,
  onClearQuote,
  onAddService,
  onProceedToBooking,
  onNavigateToServices
}) => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].id);
  const [selectedComplements, setSelectedComplements] = useState<string[]>([]);

  const categoryServices = SERVICES.filter(s => s.categoryId === selectedCategory);

  const toggleComplement = (compId: string) => {
    if (selectedComplements.includes(compId)) {
      setSelectedComplements(selectedComplements.filter(id => id !== compId));
    } else {
      setSelectedComplements([...selectedComplements, compId]);
    }
  };

  // Calculations
  const servicesSubtotal = selectedServices.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const servicesMinutes = selectedServices.reduce((sum, item) => sum + (item.durationMinutes * item.quantity), 0);

  const complementsTotal = selectedComplements.reduce((sum, compId) => {
    const comp = COMPLEMENTS.find(c => c.id === compId);
    return sum + (comp ? comp.price : 0);
  }, 0);

  const complementsMinutes = selectedComplements.reduce((sum, compId) => {
    const comp = COMPLEMENTS.find(c => c.id === compId);
    if (!comp) return sum;
    const minsMatch = comp.duration.match(/\d+/);
    return sum + (minsMatch ? parseInt(minsMatch[0], 10) : 0);
  }, 0);

  const estimatedTotal = servicesSubtotal + complementsTotal;
  const totalMinutes = servicesMinutes + complementsMinutes;
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const totalDurationStr = hours > 0 ? `${hours}h ${mins > 0 ? `${mins}min` : ''}` : `${mins} min`;

  return (
    <section id="cotizador" className="py-20 lg:py-28 bg-[#F8F4EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E9D9C8]/60 text-[#44372F] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            <Calculator size={14} className="text-[#B99561]" />
            Cotizador Inteligente
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#44372F]">
            ARMA TU EXPERIENCIA DE BELLEZA.
          </h2>
          <p className="text-[#746C65] text-base">
            Selecciona tus tratamientos favoritos y descubre el presupuesto estimado de tu próxima visita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Top: Add Services Steps */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E9D9C8] space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B99561]">Paso 1 y 2</span>
              <h3 className="text-xl font-bold text-[#44372F]">Explora y añade tratamientos</h3>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#44372F] text-white'
                      : 'bg-[#F8F4EF] text-[#44372F] hover:bg-[#E9D9C8]/50 border border-[#E9D9C8]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Service Selection Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[420px] overflow-y-auto pr-2">
              {categoryServices.map(service => {
                const alreadySelected = selectedServices.some(s => s.id === service.id);
                return (
                  <div
                    key={service.id}
                    className={`p-4 rounded-2xl border transition flex flex-col justify-between ${
                      alreadySelected
                        ? 'bg-[#E9D9C8]/20 border-[#B99561]'
                        : 'bg-[#F8F4EF]/50 border-[#E9D9C8] hover:border-[#B99561]'
                    }`}
                  >
                    <div className="space-y-1 mb-3">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-bold text-[#44372F]">{service.name}</h4>
                        <span className="text-xs font-bold text-[#B99561]">${service.price} USD</span>
                      </div>
                      <p className="text-xs text-[#746C65] line-clamp-2">{service.description}</p>
                      <span className="inline-block text-[11px] text-[#746C65] bg-white px-2 py-0.5 rounded-md border border-[#E9D9C8]">
                        ⏱ {service.duration}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddService(service)}
                      className={`w-full py-2 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1 cursor-pointer ${
                        alreadySelected
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#44372F] text-white hover:bg-[#2e241e]'
                      }`}
                    >
                      {alreadySelected ? (
                        <>
                          <Check size={14} /> AGREGADO (AGREGAR OTRO)
                        </>
                      ) : (
                        <>
                          <Plus size={14} /> AGREGAR A COTIZACIÓN
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Step 4: Complementary Services */}
            <div className="pt-4 border-t border-[#E9D9C8]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B99561]">Paso 4</span>
              <h4 className="text-base font-bold text-[#44372F] mb-3">Servicios complementarios opcionales</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {COMPLEMENTS.map(comp => {
                  const isChecked = selectedComplements.includes(comp.id);
                  return (
                    <button
                      key={comp.id}
                      onClick={() => toggleComplement(comp.id)}
                      className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                        isChecked
                          ? 'bg-[#E9D9C8]/40 border-[#B99561]'
                          : 'bg-white border-[#E9D9C8] hover:bg-[#F8F4EF]'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-[#44372F]">{comp.name}</span>
                        <span className="text-xs font-semibold text-[#B99561]">+${comp.price}</span>
                      </div>
                      <span className="text-[10px] text-[#746C65]">⏱ {comp.duration}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right / Bottom: Step 3 & 5 Summary */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-[#B99561] sticky top-28 space-y-6">
            <div className="flex items-center justify-between border-b border-[#E9D9C8] pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B99561]">Paso 3 y 5</span>
                <h3 className="text-xl font-bold text-[#44372F]">Resumen de tu Visita</h3>
              </div>
              {selectedServices.length > 0 && (
                <button
                  onClick={onClearQuote}
                  className="text-xs text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 size={14} /> Limpiar
                </button>
              )}
            </div>

            {/* Selected Items List */}
            <div className="space-y-4 max-h-[240px] overflow-y-auto pr-1">
              {selectedServices.length === 0 ? (
                <div className="py-12 text-center text-[#746C65] text-sm space-y-3">
                  <p>Aún no has seleccionado ningún tratamiento.</p>
                  <button
                    onClick={onNavigateToServices}
                    className="text-xs text-[#B99561] font-semibold underline cursor-pointer"
                  >
                    Explorar catálogo de servicios
                  </button>
                </div>
              ) : (
                selectedServices.map(item => (
                  <div key={item.id} className="flex items-center justify-between bg-[#F8F4EF] p-3 rounded-xl border border-[#E9D9C8]/60">
                    <div className="space-y-0.5 flex-1 pr-2">
                      <h4 className="text-xs font-bold text-[#44372F]">{item.name}</h4>
                      <p className="text-[11px] text-[#746C65]">${item.price} USD • {item.duration}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center border border-[#E9D9C8] bg-white rounded-lg overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-[#44372F] hover:bg-[#F8F4EF]"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-xs font-bold text-[#44372F]">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#44372F] hover:bg-[#F8F4EF]"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveService(item.id)}
                        className="text-rose-500 hover:text-rose-700 p-1"
                        title="Eliminar"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))
              )}

              {/* Add-ons list in summary */}
              {selectedComplements.map(compId => {
                const comp = COMPLEMENTS.find(c => c.id === compId);
                if (!comp) return null;
                return (
                  <div key={comp.id} className="flex items-center justify-between bg-[#E9D9C8]/20 p-3 rounded-xl border border-[#E9D9C8]">
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold text-[#44372F]">Complemento: {comp.name}</span>
                      <p className="text-[11px] text-[#746C65]">+${comp.price} USD • {comp.duration}</p>
                    </div>
                    <button
                      onClick={() => toggleComplement(comp.id)}
                      className="text-xs text-rose-500 hover:text-rose-700"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Totals */}
            <div className="border-t border-[#E9D9C8] pt-4 space-y-2 text-sm text-[#746C65]">
              <div className="flex justify-between">
                <span>Subtotal tratamientos:</span>
                <span className="font-semibold text-[#44372F]">${servicesSubtotal} USD</span>
              </div>
              {selectedComplements.length > 0 && (
                <div className="flex justify-between">
                  <span>Complementos:</span>
                  <span className="font-semibold text-[#44372F]">${complementsTotal} USD</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Duración estimada:</span>
                <span className="font-semibold text-[#44372F]">{totalDurationStr}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold text-[#44372F] pt-2 border-t border-[#E9D9C8]">
                <span>Total Estimado:</span>
                <span className="text-[#B99561] text-xl">${estimatedTotal} USD</span>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] text-[#746C65] italic leading-relaxed">
              * Tarifas ilustrativas de demostración. Los precios y la duración final pueden variar según la evaluación y el establecimiento.
            </p>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={onProceedToBooking}
                disabled={selectedServices.length === 0}
                className={`w-full py-4 rounded-full font-semibold tracking-wider text-sm transition shadow-md flex items-center justify-center gap-2 ${
                  selectedServices.length === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#44372F] hover:bg-[#2e241e] text-white cursor-pointer'
                }`}
              >
                CONTINUAR A RESERVA
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onClearQuote}
                className="w-full bg-[#F8F4EF] hover:bg-[#E9D9C8]/60 text-[#44372F] py-3 rounded-full font-semibold text-xs transition border border-[#E9D9C8] cursor-pointer"
              >
                LIMPIAR SELECCIÓN
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
