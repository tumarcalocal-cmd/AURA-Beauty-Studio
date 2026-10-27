import React, { useState } from 'react';
import { Service, TEAM } from '../data/beautyData';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, MessageSquare, CheckCircle, ShieldCheck, ArrowLeft, Send } from 'lucide-react';

interface QuoteItem extends Service {
  quantity: number;
}

interface BookingCalendarProps {
  selectedServices: QuoteItem[];
  onBackToQuote: () => void;
  onBookingConfirmed: () => void;
}

export const BookingCalendar: React.FC<BookingCalendarProps> = ({
  selectedServices,
  onBackToQuote,
  onBookingConfirmed
}) => {
  // Form state
  const [selectedProfessional, setSelectedProfessional] = useState(TEAM[0].id);
  
  // Default tomorrow's date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];
  
  const [date, setDate] = useState(defaultDateStr);
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableTimeSlots = [
    '09:00 AM', '10:00 AM', '11:15 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:15 PM'
  ];

  const totalServicesPrice = selectedServices.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalMinutes = selectedServices.reduce((sum, item) => sum + (item.durationMinutes * item.quantity), 0);
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const totalDurationStr = hours > 0 ? `${hours}h ${mins > 0 ? `${mins}min` : ''}` : `${mins} min`;

  const proObj = TEAM.find(p => p.id === selectedProfessional);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !privacyConsent) {
      alert('Por favor complete su nombre, teléfono y acepte el consentimiento de privacidad.');
      return;
    }
    setIsSubmitted(true);
    onBookingConfirmed();
  };

  const handleWhatsAppShare = () => {
    const servicesListText = selectedServices.map(s => `- ${s.name} (x${s.quantity}): $${s.price * s.quantity}`).join('\n');
    const msg = `Hola, quiero solicitar una cita en Aura Beauty Studio:\n\n*Fecha:* ${date}\n*Horario:* ${timeSlot}\n*Profesional:* ${proObj?.name}\n\n*Servicios:* \n${servicesListText}\n\n*Total Estimado:* $${totalServicesPrice} USD\n*Cliente:* ${name} (${phone})`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/50765278910?text=${encoded}`, '_blank');
  };

  return (
    <section id="reservas" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F8F4EF] text-[#B99561] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#E9D9C8]">
            <CalendarIcon size={14} />
            Sistema de Citas
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#44372F]">
            ELIGE EL MOMENTO PERFECTO PARA TI.
          </h2>
          <p className="text-[#746C65] text-base">
            Tus tratamientos seleccionados se han transferido automáticamente. Completa tus datos para agendar tu demostración.
          </p>
        </div>

        {isSubmitted ? (
          <div className="max-w-2xl mx-auto bg-[#F8F4EF] p-8 sm:p-12 rounded-3xl border border-[#E9D9C8] text-center space-y-6 shadow-md animate-fadeIn">
            <div className="w-20 h-20 bg-[#B99561] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle size={40} />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#44372F]">¡Solicitud de Cita Recibida!</h3>
              <p className="text-sm text-[#746C65]">
                Gracias, <span className="font-semibold text-[#44372F]">{name}</span>. Hemos registrado los detalles de tu cita de demostración.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E9D9C8] text-left space-y-3">
              <div className="flex justify-between text-xs text-[#746C65]">
                <span>Fecha y Horario:</span>
                <span className="font-semibold text-[#44372F]">{date} a las {timeSlot}</span>
              </div>
              <div className="flex justify-between text-xs text-[#746C65]">
                <span>Profesional:</span>
                <span className="font-semibold text-[#44372F]">{proObj?.name}</span>
              </div>
              <div className="flex justify-between text-xs text-[#746C65]">
                <span>Duración estimada:</span>
                <span className="font-semibold text-[#44372F]">{totalDurationStr}</span>
              </div>
              <div className="flex justify-between text-xs text-[#746C65] pt-2 border-t border-[#E9D9C8]">
                <span>Presupuesto Estimado:</span>
                <span className="font-bold text-[#B99561]">${totalServicesPrice} USD</span>
              </div>
            </div>

            <p className="text-xs text-[#746C65] italic">
              "Solicitud de cita de demostración. La reserva requiere confirmación del establecimiento."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <button
                onClick={handleWhatsAppShare}
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare size={16} />
                Enviar detalles por WhatsApp
              </button>

              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-white hover:bg-[#E9D9C8]/40 text-[#44372F] border border-[#E9D9C8] px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition cursor-pointer"
              >
                Hacer otra reserva
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Booking Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-[#F8F4EF] p-6 sm:p-8 rounded-3xl border border-[#E9D9C8] space-y-6">
              <div className="flex items-center justify-between border-b border-[#E9D9C8] pb-4">
                <h3 className="text-xl font-bold text-[#44372F]">Datos de la Reserva</h3>
                <button
                  type="button"
                  onClick={onBackToQuote}
                  className="text-xs text-[#B99561] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                >
                  <ArrowLeft size={14} /> Volver al cotizador
                </button>
              </div>

              {/* Professional Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#44372F]">
                  Profesional preferida
                </label>
                <select
                  value={selectedProfessional}
                  onChange={(e) => setSelectedProfessional(e.target.value)}
                  className="w-full bg-white border border-[#E9D9C8] rounded-xl px-4 py-3 text-sm text-[#44372F] focus:outline-none focus:ring-2 focus:ring-[#B99561]"
                >
                  {TEAM.map(member => (
                    <option key={member.id} value={member.id}>
                      {member.name} — {member.role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44372F]">
                    Fecha de la cita
                  </label>
                  <input
                    type="date"
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-[#E9D9C8] rounded-xl px-4 py-3 text-sm text-[#44372F] focus:outline-none focus:ring-2 focus:ring-[#B99561]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44372F]">
                    Horario disponible (Demostración)
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-white border border-[#E9D9C8] rounded-xl px-4 py-3 text-sm text-[#44372F] focus:outline-none focus:ring-2 focus:ring-[#B99561]"
                  >
                    {availableTimeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44372F]">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#746C65]" />
                    <input
                      type="text"
                      placeholder="Tu nombre y apellido"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-[#E9D9C8] rounded-xl text-sm text-[#44372F] focus:outline-none focus:ring-2 focus:ring-[#B99561]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#44372F]">
                      Teléfono / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#746C65]" />
                      <input
                        type="tel"
                        placeholder="+507 6000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-white border border-[#E9D9C8] rounded-xl text-sm text-[#44372F] focus:outline-none focus:ring-2 focus:ring-[#B99561]"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#44372F]">
                      Correo electrónico (Opcional)
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#746C65]" />
                      <input
                        type="email"
                        placeholder="tu@correo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-white border border-[#E9D9C8] rounded-xl text-sm text-[#44372F] focus:outline-none focus:ring-2 focus:ring-[#B99561]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44372F]">
                    Comentarios o peticiones especiales (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Alguna indicación para tu visita..."
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="w-full p-4 bg-white border border-[#E9D9C8] rounded-xl text-sm text-[#44372F] focus:outline-none focus:ring-2 focus:ring-[#B99561]"
                  />
                </div>

                {/* Privacy Consent */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={privacyConsent}
                    onChange={(e) => setPrivacyConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[#B99561] border-[#E9D9C8] rounded focus:ring-[#B99561]"
                    required
                  />
                  <label htmlFor="privacy" className="text-xs text-[#746C65] leading-relaxed">
                    Acepto la <span className="underline font-medium text-[#44372F]">política de privacidad</span> y entiendo que esta es una solicitud de cita de demostración comercial.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#44372F] hover:bg-[#2e241e] text-white py-4 rounded-full font-semibold tracking-wider text-sm transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                CONFIRMAR SOLICITUD DE CITA
                <Send size={16} />
              </button>
            </form>

            {/* Right: Summary Review */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[#E9D9C8] shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#44372F] border-b border-[#E9D9C8] pb-4">
                Resumen de tu Visita
              </h3>

              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                {selectedServices.length === 0 ? (
                  <p className="text-sm text-[#746C65]">No hay servicios seleccionados.</p>
                ) : (
                  selectedServices.map(item => (
                    <div key={item.id} className="flex justify-between items-center bg-[#F8F4EF] p-3 rounded-xl border border-[#E9D9C8]/60">
                      <div>
                        <h4 className="text-xs font-bold text-[#44372F]">{item.name}</h4>
                        <p className="text-[11px] text-[#746C65]">Cantidad: {item.quantity} • ⏱ {item.duration}</p>
                      </div>
                      <span className="text-xs font-bold text-[#B99561]">${item.price * item.quantity} USD</span>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t border-[#E9D9C8] pt-4 space-y-2 text-sm text-[#746C65]">
                <div className="flex justify-between">
                  <span>Profesional elegida:</span>
                  <span className="font-semibold text-[#44372F]">{proObj?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duración total aproximada:</span>
                  <span className="font-semibold text-[#44372F]">{totalDurationStr}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold text-[#44372F] pt-2 border-t border-[#E9D9C8]">
                  <span>Total Estimado:</span>
                  <span className="text-[#B99561] text-xl">${totalServicesPrice} USD</span>
                </div>
              </div>

              <div className="bg-[#F8F4EF] p-4 rounded-2xl border border-[#E9D9C8] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#44372F]">
                  <ShieldCheck size={16} className="text-[#B99561]" />
                  Aviso de Demostración
                </div>
                <p className="text-[11px] text-[#746C65] leading-relaxed">
                  Solicitud de cita de demostración. La reserva requiere confirmación del establecimiento. No se realizan cargos en línea.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
