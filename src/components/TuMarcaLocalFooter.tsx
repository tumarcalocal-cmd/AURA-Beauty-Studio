import React from 'react';
import { Phone, Sparkles, Shield, FileText, AlertCircle } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'disclaimer') => void;
  onNavigate: (id: string) => void;
}

export const TuMarcaLocalFooter: React.FC<FooterProps> = ({ onOpenLegal, onNavigate }) => {
  return (
    <footer className="bg-[#44372F] text-white">
      
      {/* Commercial Section for Tu Marca Local */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 bg-[#B99561]/30 text-[#E9D9C8] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#B99561]/50">
          <Sparkles size={14} className="text-[#B99561]" />
          Demostración Comercial Tu Marca Local
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          TU NEGOCIO DE BELLEZA TAMBIÉN PUEDE TENER UNA PÁGINA ASÍ.
        </h2>

        <p className="text-sm sm:text-base text-[#E9D9C8] max-w-2xl mx-auto leading-relaxed">
          Presenta tus tratamientos, muestra tus tarifas, permite que tus clientes calculen presupuestos y facilita la solicitud de citas desde una página web profesional.
        </p>

        <p className="text-xs text-[#E9D9C8]/80 italic max-w-xl mx-auto">
          "Comunícate por WhatsApp únicamente si tienes alguna duda sobre cómo obtener una página web similar para tu negocio que no esté explicada en esta demostración".
        </p>

        <div className="pt-2">
          <a
            href="https://wa.me/50765278910?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20p%C3%A1gina%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#B99561] hover:bg-[#a37f4e] text-white px-8 py-4 rounded-full font-bold tracking-wider text-sm transition shadow-lg"
          >
            <Phone size={18} />
            ESCRIBIR POR WHATSAPP
          </a>
        </div>
      </div>

      {/* Main Footer Links & Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <span className="block text-2xl font-bold tracking-widest text-white">AURA</span>
            <span className="block text-[10px] tracking-[0.3em] uppercase text-[#E9D9C8]">Beauty Studio</span>
            <p className="text-xs text-[#E9D9C8]/70 leading-relaxed">
              Tu belleza. Tu momento. Tu esencia. Un espacio diseñado para tu bienestar y cuidado personal.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#B99561]">Navegación</h4>
            <ul className="space-y-2 text-xs text-[#E9D9C8]/80">
              <li><button onClick={() => onNavigate('nosotros')} className="hover:text-white transition">Nosotros</button></li>
              <li><button onClick={() => onNavigate('servicios')} className="hover:text-white transition">Servicios</button></li>
              <li><button onClick={() => onNavigate('tarifas')} className="hover:text-white transition">Tarifas</button></li>
              <li><button onClick={() => onNavigate('cotizador')} className="hover:text-white transition">Cotizador</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#B99561]">Experiencias</h4>
            <ul className="space-y-2 text-xs text-[#E9D9C8]/80">
              <li><button onClick={() => onNavigate('paquetes')} className="hover:text-white transition">Paquetes de Belleza</button></li>
              <li><button onClick={() => onNavigate('equipo')} className="hover:text-white transition">Equipo de Profesionales</button></li>
              <li><button onClick={() => onNavigate('galeria')} className="hover:text-white transition">Galería</button></li>
              <li><button onClick={() => onNavigate('reservas')} className="hover:text-white transition">Reserva de Citas</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#B99561]">Legal y Transparencia</h4>
            <ul className="space-y-2 text-xs text-[#E9D9C8]/80">
              <li>
                <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition flex items-center gap-1.5">
                  <Shield size={14} /> Política de Privacidad
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('terms')} className="hover:text-white transition flex items-center gap-1.5">
                  <FileText size={14} /> Términos y Condiciones
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-white transition flex items-center gap-1.5">
                  <AlertCircle size={14} /> Descargo de Responsabilidad
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row justify-between items-center text-xs text-[#E9D9C8]/60 gap-4">
          <p>© {new Date().getFullYear()} Aura Beauty Studio. Todos los derechos reservados.</p>
          <p className="font-semibold text-[#E9D9C8]">Demostración comercial creada por Tu Marca Local.</p>
        </div>
      </div>

    </footer>
  );
};
