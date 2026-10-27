import React from 'react';
import { X, Shield, FileText, AlertCircle } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-[#E9D9C8]">
        
        <div className="flex justify-between items-center border-b border-[#E9D9C8] pb-4">
          <div className="flex items-center gap-2">
            {type === 'privacy' && <Shield className="text-[#B99561]" size={22} />}
            {type === 'terms' && <FileText className="text-[#B99561]" size={22} />}
            {type === 'disclaimer' && <AlertCircle className="text-[#B99561]" size={22} />}
            <h3 className="text-xl font-bold text-[#44372F]">
              {type === 'privacy' && 'Política de Privacidad'}
              {type === 'terms' && 'Términos y Condiciones'}
              {type === 'disclaimer' && 'Descargo de Responsabilidad'}
            </h3>
          </div>
          <button onClick={onClose} className="text-[#44372F] hover:text-[#B99561] p-1 cursor-pointer">
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#746C65] leading-relaxed">
          {type === 'privacy' && (
            <>
              <p>
                En <strong>Aura Beauty Studio</strong>, protegemos la privacidad de los datos personales recopilados a través de nuestros formularios y sistema de reservas de demostración.
              </p>
              <h4 className="font-bold text-[#44372F] pt-2">1. Datos Recopilados</h4>
              <p>Recopilamos nombre, teléfono, correo electrónico y preferencias de servicio únicamente para procesar solicitudes de citas de demostración.</p>
              <h4 className="font-bold text-[#44372F] pt-2">2. Finalidad</h4>
              <p>Los datos son utilizados exclusivamente para coordinar la simulación de servicios y demostrar las capacidades del sistema web.</p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                Los presentes <strong>Términos y Condiciones</strong> regulan el uso de la página web de demostración comercial de Aura Beauty Studio.
              </p>
              <h4 className="font-bold text-[#44372F] pt-2">1. Servicios Ilustrativos</h4>
              <p>Todos los tratamientos, descripciones, duraciones y tarifas mostradas en este sitio web son meramente ilustrativos y de ejemplo.</p>
              <h4 className="font-bold text-[#44372F] pt-2">2. Solicitudes de Citas</h4>
              <p>Las reservas realizadas a través de este sitio corresponden a simulaciones comerciales y no constituyen confirmaciones reales de citas ante un establecimiento físico.</p>
            </>
          )}

          {type === 'disclaimer' && (
            <div className="bg-[#F8F4EF] p-6 rounded-2xl border border-[#E9D9C8] space-y-3 font-medium text-[#44372F]">
              <p>
                "Aura Beauty Studio es una empresa ficticia utilizada como demostración comercial de páginas web desarrolladas por Tu Marca Local.
              </p>
              <p>
                Los servicios, fotografías, profesionales, tarifas, horarios y reservas son ejemplos ilustrativos.
              </p>
              <p>
                Este sitio no confirma citas reales, no procesa pagos ni representa un establecimiento de belleza en funcionamiento."
              </p>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-[#E9D9C8] text-right">
          <button
            onClick={onClose}
            className="bg-[#44372F] hover:bg-[#2e241e] text-white px-6 py-2.5 rounded-full text-xs font-semibold cursor-pointer"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
