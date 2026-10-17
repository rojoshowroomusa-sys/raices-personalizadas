import React, { useState } from 'react';
import { ArrowLeft, Check, Frame, ImagePlus, Sparkles } from 'lucide-react';
import plateImage from '../assets/images/cuadro_aluminio_personalizado.jpg';
import { PRODUCT_LINES } from '../data/products';
import { ProductColor } from '../types';
import { ProductConfigModal } from './ProductConfigModal';
import { WhatsAppIcon } from './WhatsAppIcon';

interface AluminumPlatesPageProps {
  darkMode: boolean;
}

const whatsappUrl =
  'https://wa.me/5492216268594?text=Hola%2C%20quiero%20consultar%20por%20placas%20de%20aluminio%20sublimable.';

export const AluminumPlatesPage: React.FC<AluminumPlatesPageProps> = ({ darkMode }) => {
  const product = PRODUCT_LINES.find((line) => line.id === 'cuadros-aluminio');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] ?? '');
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(
    product?.colors[0] ?? null
  );
  const [configuratorOpen, setConfiguratorOpen] = useState(false);

  if (!product || !selectedColor) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <p className="text-center text-red-400">No se pudo cargar la información de las placas.</p>
      </section>
    );
  }

  const muted = darkMode ? 'text-slate-300' : 'text-slate-600';
  const panel = darkMode ? 'border-slate-800 bg-[#111820]' : 'border-slate-200 bg-white';

  return (
    <>
      <main className={darkMode ? 'bg-[#090D12] text-white' : 'bg-[#F5F6F7] text-slate-950'}>
        <section className="relative isolate overflow-hidden border-b border-slate-800/70">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(148,163,184,0.18),transparent_38%),radial-gradient(ellipse_at_15%_95%,rgba(14,165,233,0.12),transparent_36%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
            <div>
              <a
                href="/#catalogo"
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 transition hover:text-sky-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver al catálogo
              </a>
              <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-sky-300">
                <Sparkles className="h-4 w-4" />
                Sublimación sobre aluminio
              </div>
              <h1 className="mt-6 max-w-2xl text-4xl font-black uppercase leading-[0.98] tracking-tight sm:text-6xl">
                Tus recuerdos,
                <span className="mt-2 block bg-gradient-to-r from-slate-200 via-white to-slate-400 bg-clip-text text-transparent">
                  en metal.
                </span>
              </h1>
              <p className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${muted}`}>
                Convertí una foto, ilustración o diseño propio en una placa personalizada.
                Elegí el formato y el fondo que mejor acompañen tu imagen.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setConfiguratorOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-black uppercase tracking-wide text-black shadow-lg shadow-yellow-400/10 transition hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  <Frame className="h-4 w-4" />
                  Elegir mi placa
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-3.5 text-sm font-extrabold text-emerald-400 transition hover:bg-emerald-500 hover:text-black"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Consultar
                </a>
              </div>

              <div className={`mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold ${muted}`}>
                {['15 × 20 cm', '30 × 20 cm', 'Fondos plata, oro y blanco'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 text-sky-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute -inset-4 rotate-2 rounded-[2rem] border border-slate-400/15 bg-slate-300/5" />
              <div className={`relative overflow-hidden rounded-[1.5rem] border shadow-2xl ${panel}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#151a1e]">
                  <img
                    src={plateImage}
                    alt="Ejemplo de placas fotográficas de aluminio personalizadas"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white backdrop-blur">
                    Una imagen · una historia
                  </span>
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 text-xs font-bold text-white">
                    <ImagePlus className="h-4 w-4 text-yellow-400" />
                    Personalizá con tu diseño
                  </span>
                </div>
                <div className="grid grid-cols-3 divide-x divide-slate-700/50">
                  {[
                    { label: 'Formato 01', value: '15 × 20 cm' },
                    { label: 'Formato 02', value: '30 × 20 cm' },
                    { label: 'Fondos', value: 'Plata · Oro · Blanco' },
                  ].map((item) => (
                    <div key={item.label} className="px-2 py-4 text-center sm:px-4">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs font-black sm:text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className={`mt-4 text-center text-[10px] ${muted}`}>
                Imagen ilustrativa. Consultá disponibilidad del fondo que prefieras.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="self-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-400">
              Diseñada a tu manera
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl">
              Elegí formato
              <span className="block text-slate-400">y fondo.</span>
            </h2>
            <p className={`mt-4 max-w-md leading-relaxed ${muted}`}>
              Seleccioná las opciones de tu placa y después completá el pedido con tu imagen o
              indicaciones de personalización.
            </p>
            <div className={`mt-6 rounded-2xl border p-5 ${panel}`}>
              <p className="text-sm font-extrabold">¿Ya tenés la imagen?</p>
              <p className={`mt-2 text-sm leading-relaxed ${muted}`}>
                Agregá en las notas del pedido cómo querés usarla y coordinamos el envío del
                archivo por WhatsApp.
              </p>
            </div>
          </div>

          <div className={`rounded-3xl border p-5 sm:p-8 ${panel}`}>
            <fieldset>
              <legend className="text-xs font-black uppercase tracking-[0.16em]">
                01 · Tamaño de la placa
              </legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.sizes.map((size, index) => {
                  const selected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      aria-pressed={selected}
                      className={`rounded-2xl border p-5 text-left transition ${
                        selected
                          ? 'border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-400/5'
                          : darkMode
                            ? 'border-slate-700 hover:border-slate-500'
                            : 'border-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-sky-400">
                        {index === 0 ? 'Formato compacto' : 'Formato amplio'}
                      </span>
                      <span className="mt-2 block text-2xl font-black">{size}</span>
                      <span className={`mt-2 block text-xs ${muted}`}>
                        La orientación se elige en el configurador.
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="mt-8 border-t border-slate-700/60 pt-7">
              <legend className="text-xs font-black uppercase tracking-[0.16em]">
                02 · Fondo de la placa
              </legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {product.colors.map((color) => {
                  const selected = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      aria-pressed={selected}
                      className={`flex items-center gap-3 rounded-xl border p-3 text-left text-sm font-bold transition ${
                        selected
                          ? 'border-yellow-400 bg-yellow-400/10'
                          : darkMode
                            ? 'border-slate-700 hover:border-slate-500'
                            : 'border-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-8 w-8 shrink-0 rounded-full shadow-inner ${
                          color.border ? 'border border-slate-300' : ''
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                      {color.name}
                    </button>
                  );
                })}
              </div>
              <p className={`mt-3 text-xs ${muted}`}>
                El tono se refiere al fondo de la placa; la apariencia puede variar según la imagen y la pantalla.
              </p>
            </fieldset>

            <button
              type="button"
              onClick={() => setConfiguratorOpen(true)}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-yellow-300"
            >
              <Frame className="h-4 w-4" />
              Continuar con {selectedSize} · {selectedColor.name}
            </button>
          </div>
        </section>
      </main>

      {configuratorOpen && (
        <ProductConfigModal
          product={product}
          onClose={() => setConfiguratorOpen(false)}
          darkMode={darkMode}
          initialSize={selectedSize}
          initialColor={selectedColor}
        />
      )}
    </>
  );
};
