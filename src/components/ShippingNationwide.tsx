import React from 'react';
import {
  Truck,
  MapPin,
  ShieldCheck,
  Clock3
} from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/products';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ShippingNationwideProps {
  darkMode: boolean;
}

export const ShippingNationwide: React.FC<ShippingNationwideProps> = ({ darkMode }) => {
  return (
    <section
      id="envios"
      className={`py-20 border-t transition-colors duration-200 relative overflow-hidden ${
        darkMode ? 'bg-[#0B1019] border-gray-800' : 'bg-slate-50 border-gray-200'
      }`}
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#0EA5E9]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#FACC15]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-[#0EA5E9]/20 via-[#FACC15]/20 to-[#EC4899]/20 border border-sky-400/40 text-[#0EA5E9]">
            <Truck className="w-4 h-4 text-[#FACC15]" />
            <span>Envíos nacionales por Vía Cargo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
            Envíos a{' '}
            <span className="text-[#38BDF8]">
              Todo el País
            </span>
          </h2>

          <p
            className={`text-sm sm:text-base leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Hacemos envíos a todo el país a través de Vía Cargo. Todos los envíos cuentan con
            seguro; consultanos el costo y el plazo estimado para tu localidad.
          </p>
        </div>

        {/* 4 Pillars of National Logistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {/* Card 1 */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 shadow-sm ${
              darkMode
                ? 'bg-[#101726]/80 border-gray-800 hover:border-sky-500/50'
                : 'bg-white border-gray-200 hover:border-sky-400 shadow-md'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#0EA5E9]" />
            </div>
            <h3 className="text-base font-extrabold text-white dark:text-white mb-2">
              Envíos a todo el país
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Despachamos pedidos a todo el país mediante Vía Cargo.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 shadow-sm ${
              darkMode
                ? 'bg-[#101726]/80 border-gray-800 hover:border-yellow-500/50'
                : 'bg-white border-gray-200 hover:border-yellow-400 shadow-md'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-[#FACC15]" />
            </div>
            <h3 className="text-base font-extrabold text-white dark:text-white mb-2">
              Despacho por Vía Cargo
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Coordinamos el despacho de tu pedido a través de Vía Cargo.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 shadow-sm ${
              darkMode
                ? 'bg-[#101726]/80 border-gray-800 hover:border-emerald-500/50'
                : 'bg-white border-gray-200 hover:border-emerald-400 shadow-md'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-base font-extrabold text-white dark:text-white mb-2">
              Seguro incluido
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Todos los envíos cuentan con seguro.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 shadow-sm ${
              darkMode
                ? 'bg-[#101726]/80 border-gray-800 hover:border-pink-500/50'
                : 'bg-white border-gray-200 hover:border-pink-400 shadow-md'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center mb-4">
              <Clock3 className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-base font-extrabold text-white dark:text-white mb-2">
              Costos y plazos
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Consultanos el costo y el plazo estimado para tu localidad antes de realizar el pedido.
            </p>
          </div>
        </div>

        <div
          className={`rounded-2xl p-6 border mb-8 ${
            darkMode ? 'bg-[#0E1522]/60 border-gray-800' : 'bg-gray-100 border-gray-200'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                ¿Querés consultar por tu envío?
              </span>
              <p className="text-xs text-gray-500">
                Escribinos con tu localidad para consultar el costo y el plazo estimado.
              </p>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola, quiero consultar el costo y el plazo estimado de un envío.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-extrabold text-slate-950 transition-colors hover:bg-emerald-400"
            >
              <WhatsAppIcon className="h-4 w-4 text-slate-950" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
