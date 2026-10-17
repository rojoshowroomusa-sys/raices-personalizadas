import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, BadgeCheck, Check, Scissors, Sparkles } from 'lucide-react';
import capImage from '../assets/images/gallery_cap_embroidery_1792096958647.jpg';
import { PRODUCT_LINES } from '../data/products';
import { ProductColor } from '../types';
import { ProductConfigModal } from './ProductConfigModal';
import { WhatsAppIcon } from './WhatsAppIcon';

interface CapsPageProps {
  darkMode: boolean;
}

const whatsappUrl =
  'https://wa.me/5492216268594?text=Hola%2C%20quiero%20personalizar%20una%20gorra.';

const styleDescriptions: Record<string, string> = {
  Trucker: 'Frente estructurado y panel de malla para un look clásico.',
  Snapback: 'Perfil urbano con visera plana y cierre plástico regulable.',
  'Curva Dad': 'Visera curva y un estilo relajado para todos los días.',
};

export const CapsPage: React.FC<CapsPageProps> = ({ darkMode }) => {
  const product = PRODUCT_LINES.find((line) => line.id === 'gorras');
  const [selectedStyle, setSelectedStyle] = useState(product?.sizes[0] ?? '');
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(
    product?.colors[0] ?? null
  );
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);

  if (!product || !selectedColor) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <p className="text-center text-red-400">No se pudo cargar la información de las gorras.</p>
      </section>
    );
  }

  const muted = darkMode ? 'text-zinc-300' : 'text-zinc-600';
  const card = darkMode ? 'border-zinc-800 bg-[#12171E]' : 'border-zinc-200 bg-white';
  const getStyleName = (style: string) => (style.startsWith('Curva') ? 'Curva Dad' : style.split(' ')[0]);
  const selectedStyleName = getStyleName(selectedStyle);

  return (
    <>
      <main className={darkMode ? 'bg-[#090B0F] text-white' : 'bg-[#F6F5F2] text-zinc-950'}>
        <section className="relative isolate overflow-hidden border-b border-zinc-800/80">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_32%,rgba(236,72,153,0.18),transparent_35%),radial-gradient(ellipse_at_15%_95%,rgba(250,204,21,0.08),transparent_32%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
            <div>
              <a
                href="/#catalogo"
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 transition hover:text-sky-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver al catálogo
              </a>

              <div className="mt-10 inline-flex items-center gap-2 border-l-2 border-pink-400 pl-3 text-xs font-black uppercase tracking-[0.2em] text-pink-300">
                <Scissors className="h-4 w-4" />
                Bordado · DTF · Parches
              </div>

              <h1 className="mt-6 max-w-2xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">
                Llevá tu
                <span className="mt-2 block text-pink-400">idea puesta.</span>
              </h1>
              <p className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${muted}`}>
                Una gorra puede ser parte del uniforme, el equipo o tu marca. Elegí el modelo y el
                color; después definimos juntos cómo llevar tu diseño al frente.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsConfiguratorOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-pink-500 px-6 py-4 text-sm font-black uppercase tracking-wide text-black shadow-lg shadow-pink-500/20 transition hover:-translate-y-0.5 hover:bg-pink-400"
                >
                  <Sparkles className="h-4 w-4" />
                  Personalizar gorra
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-500/10 px-5 py-4 text-sm font-extrabold text-emerald-400 transition hover:bg-emerald-500 hover:text-black"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Consultar por WhatsApp
                </a>
              </div>

              <div className={`mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold ${muted}`}>
                {['Trucker', 'Snapback', 'Curva Dad'].map((style) => (
                  <span key={style} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 text-pink-400" />
                    {style}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute -inset-3 -rotate-2 border border-pink-400/25 bg-pink-400/[0.03]" />
              <div className={`relative overflow-hidden border ${card}`}>
                <div className="relative aspect-[5/4] overflow-hidden bg-zinc-900">
                  <img
                    src={capImage}
                    alt="Detalle de bordado en gorra personalizada"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/5" />
                  <span className="absolute left-5 top-5 border border-white/25 bg-black/60 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur">
                    Hecha para destacar
                  </span>
                  <span className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-bold text-white">
                    <span className="h-2 w-2 rounded-full bg-pink-400" />
                    El detalle está en el bordado
                  </span>
                </div>
                <div className="grid grid-cols-3 divide-x divide-zinc-800">
                  {[
                    { label: 'Elegí', value: 'Tu modelo' },
                    { label: 'Definí', value: 'El color' },
                    { label: 'Sumá', value: 'Tu diseño' },
                  ].map((item, index) => (
                    <div key={item.label} className="px-3 py-4 sm:px-5">
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-pink-400">
                        0{index + 1} · {item.label}
                      </p>
                      <p className="mt-1 text-sm font-black sm:text-base">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className={`mt-3 text-center text-[10px] ${muted}`}>
                Imagen ilustrativa. Consultá disponibilidad de modelos y colores.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="max-w-md">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-pink-400">
                Encontrá tu forma
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl">
                Tres estilos.
                <span className="block text-zinc-400">Tu identidad.</span>
              </h2>
              <p className={`mt-4 leading-relaxed ${muted}`}>
                Elegí el calce que va con tu idea. Los modelos disponibles se pueden personalizar
                con las técnicas indicadas en el configurador.
              </p>
              <div className={`mt-6 border-l-2 border-yellow-400 p-4 ${darkMode ? 'bg-yellow-400/[0.06]' : 'bg-yellow-400/10'}`}>
                <div className="flex items-center gap-2 text-sm font-extrabold">
                  <BadgeCheck className="h-4 w-4 text-yellow-400" />
                  Pedidos desde 1 unidad
                </div>
                <p className={`mt-2 text-xs leading-relaxed ${muted}`}>
                  También podés cotizar cantidades para equipos, eventos y marcas.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {product.sizes.map((style, index) => {
                const name = getStyleName(style);
                const selected = selectedStyle === style;
                return (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setSelectedStyle(style)}
                    aria-pressed={selected}
                    className={`group relative flex min-h-52 flex-col justify-between border p-5 text-left transition duration-200 hover:-translate-y-1 ${
                      selected
                        ? 'border-pink-400 bg-pink-400/[0.08] shadow-lg shadow-pink-500/10'
                        : darkMode
                          ? 'border-zinc-800 bg-[#10141A] hover:border-zinc-600'
                          : 'border-zinc-200 bg-white hover:border-zinc-400'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-pink-400">
                        Modelo 0{index + 1}
                      </span>
                      <ArrowUpRight className={`h-4 w-4 transition ${selected ? 'text-pink-400' : 'text-zinc-500 group-hover:text-pink-400'}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase">{name}</h3>
                      <p className={`mt-2 text-xs leading-relaxed ${muted}`}>
                        {styleDescriptions[name] ?? 'Modelo ajustable, listo para personalizar.'}
                      </p>
                    </div>
                    <span className={`mt-4 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-wider ${selected ? 'text-pink-300' : muted}`}>
                      {selected ? <Check className="h-3.5 w-3.5" /> : null}
                      {selected ? 'Seleccionado' : 'Elegir modelo'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 border-t border-zinc-800/70 pt-6">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-pink-400">
                  Paso 02 · Color
                </p>
                <p className="mt-1 text-sm font-extrabold">
                  Color elegido: <span className="text-pink-300">{selectedColor.name}</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => {
                  const selected = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      aria-pressed={selected}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold transition ${
                        selected
                          ? 'border-pink-400 bg-pink-400/10 text-pink-200'
                          : darkMode
                            ? 'border-zinc-700 text-zinc-300 hover:border-zinc-500'
                            : 'border-zinc-300 text-zinc-700 hover:border-zinc-500'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-4 w-4 rounded-full ${color.border ? 'border border-zinc-400' : ''}`}
                        style={{ backgroundColor: color.hex }}
                      />
                      {color.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className={darkMode ? 'border-y border-zinc-800 bg-[#0E1217]' : 'border-y border-zinc-200 bg-white'}>
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-400">
                Elegí cómo personalizar
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase">Técnica y detalle</h2>
              <p className={`mt-4 max-w-md leading-relaxed ${muted}`}>
                Bordado con relieve, diseño a color o un acabado tipo parche. Revisá las alternativas
                y confirmá tu elección al armar el pedido.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {product.techniques.map((technique, index) => (
                <article
                  key={technique.id}
                  className={`border p-5 transition hover:border-pink-400/50 ${card}`}
                >
                  <span className="text-xs font-black text-pink-400">0{index + 1}</span>
                  <h3 className="mt-5 text-base font-black leading-snug">{technique.name}</h3>
                  <span className="mt-2 inline-flex border border-zinc-700 px-2 py-1 text-[9px] font-black uppercase tracking-wider text-yellow-400">
                    {technique.tag}
                  </span>
                  <p className={`mt-4 text-xs leading-relaxed ${muted}`}>{technique.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
              Armala a tu manera
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">
              Un buen diseño se nota.
            </h2>
            <p className={`mt-3 max-w-2xl leading-relaxed ${muted}`}>
              Modelo: <strong className="text-pink-400">{selectedStyleName}</strong>
              {' · '}Color: <strong className="text-pink-400">{selectedColor.name}</strong>
              {' · '}Elegí la técnica y la ubicación al configurar tu pedido.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsConfiguratorOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-yellow-400 px-7 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-yellow-300"
          >
            Continuar con mi gorra
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </section>
      </main>

      {isConfiguratorOpen && (
        <ProductConfigModal
          product={product}
          onClose={() => setIsConfiguratorOpen(false)}
          darkMode={darkMode}
          initialSize={selectedStyle}
          initialColor={selectedColor}
        />
      )}
    </>
  );
};
