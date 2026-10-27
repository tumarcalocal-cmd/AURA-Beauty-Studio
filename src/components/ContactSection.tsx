import React, { useState } from 'react';
import { Sparkles, Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F8F4EF] text-[#B99561] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#E9D9C8]">
            <Sparkles size={14} />
            Contacto Directo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#44372F]">
            TU MOMENTO DE BELLEZA ESTÁ A UN CLIC.
          </h2>
          <p className="text-[#746C65] text-base">
            ¿Tienes alguna consulta? Escríbenos o agenda tu cita directamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F8F4EF] p-8 rounded-3xl border border-[#E9D9C8] space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#44372F]">Información de Contacto</h3>

              <div className="space-y-4 text-sm text-[#746C65]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#B99561] shrink-0 border border-[#E9D9C8]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#44372F]">Ubicación</h4>
                    <p className="text-xs">Panamá (Sede de demostración configurable)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#B99561] shrink-0 border border-[#E9D9C8]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#44372F]">Teléfono / WhatsApp</h4>
                    <p className="text-xs">+507 6000-0000 (Ejemplo)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#B99561] shrink-0 border border-[#E9D9C8]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#44372F]">Correo electrónico</h4>
                    <p className="text-xs">contacto@aurabeautystudio.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E9D9C8]">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#44372F] hover:bg-[#2e241e] text-white py-3.5 rounded-full text-xs font-semibold tracking-wider transition shadow-sm cursor-pointer"
                >
                  RESERVAR MI CITA AHORA
                </button>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 bg-[#F8F4EF] p-8 rounded-3xl border border-[#E9D9C8] shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#B99561] text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#44372F]">¡Mensaje Enviado con Éxito!</h3>
                <p className="text-sm text-[#746C65] max-w-md mx-auto">
                  Gracias por escribirnos. Nos pondremos en contacto contigo a la brevedad posible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-[#44372F] text-white px-6 py-2.5 rounded-full text-xs font-semibold cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-[#44372F]">Envíanos un Mensaje</h3>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44372F]">Nombre completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3.5 bg-white border border-[#E9D9C8] rounded-xl text-sm text-[#44372F] focus:outline-none focus:ring-2 focus:ring-[#B99561]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#44372F]">Correo electrónico *</label>
                    <input
                      type="email"
                      required
                      placeholder="tu@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3.5 bg-white border border-[#E9D9C8] rounded-xl text-sm text-[#44372F] focus:outline-none focus:ring-2 focus:ring-[#B99561]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#44372F]">Teléfono / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="+507 6000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3.5 bg-white border border-[#E9D9C8] rounded-xl text-sm text-[#44372F] focus:outline-none focus:ring-2 focus:ring-[#B99561]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#44372F]">Mensaje o consulta *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 bg-white border border-[#E9D9C8] rounded-xl text-sm text-[#44372F] focus:outline-none focus:ring-2 focus:ring-[#B99561]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#44372F] hover:bg-[#2e241e] text-white py-4 rounded-full font-semibold tracking-wider text-sm transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  ENVIAR MENSAJE
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
