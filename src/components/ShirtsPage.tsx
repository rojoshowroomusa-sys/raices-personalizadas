import React, { useState } from 'react';
import {
  ArrowLeft,
  Check,
  ChevronDown,
  Layers,
  Palette,
  Ruler,
  Shirt,
  Sparkles,
  Truck,
} from 'lucide-react';
import { PRODUCT_LINES } from '../data/products';
import { ProductConfigModal } from './ProductConfigModal';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ShirtsPageProps {
  darkMode: boolean;
}

const techniqueDetails = [
  {
    id: 'dtf',
    number: '01',
    title: 'DTF textil',
    summary: 'El más versátil',
    description:
      'Colores intensos, degradados y detalle fotográfico. Funciona sobre remeras claras u oscuras.',
    accent: 'text-yellow-400',
  },
  {
    id: 'sublimacion',
    number: '02',
    title: 'Sublimación',
    summary: 'Sin relieve',
    description:
      'La tinta se integra a la tela para un tacto suave. Recomendada para prendas blancas con poliéster.',
    accent: 'text-sky-400',
  },
  {
    id: 'vinilo',
    number: '03',
    title: 'Vinilo textil',
    summary: 'Líneas definidas',
    description:
      'Una opción limpia para nombres, números, formas y logos de pocos colores.',
    accent: 'text-pink-400',
  },
];

const whatsappUrl =
  'https://wa.me/5492216268594?text=Hola%2C%20quiero%20consultar%20por%20remeras%20personalizadas.';

export const ShirtsPage: React.FC<ShirtsPageProps> = ({ darkMode }) => {
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const product = PRODUCT_LINES.find((line) => line.id === 'camisetas');

  if (!product) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center px-4">
        <p className="text-center text-red-400">No se pudo cargar la información de las remeras.</p>
      </section>
    );
  }

  const surface = darkMode ? 'bg-[#0B1017] text-white' : 'bg-white text-gray-900';
  const muted = darkMode ? 'text-gray-300' : 'text-gray-600';
  const card = darkMode ? 'bg-[#141C2B] border-gray-800' : 'bg-slate-50 border-gray-200';
  const quantityDiscounts = product.volumeDiscounts ?? [];

  return (
    <>
      <section className={`relative overflow-hidden py-12 sm:py-20 ${surface}`}>
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute -bottom-28 left-0 h-80 w-80 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <a
            href="/#catalogo"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-sky-400 transition-colors hover:text-sky-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al catálogo
          </a>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-yellow-300">
                <Shirt className="h-4 w-4" />
                Algodón 24.1 · Estampado a tu manera
              </span>

              <h1 className="text-4xl font-black uppercase leading-[0.98] tracking-tight sm:text-6xl">
                Vestí tu
                <span className="mt-2 block text-[#FACC15]">propia idea.</span>
              </h1>

              <p className={`max-w-xl text-base leading-relaxed sm:text-lg ${muted}`}>
                Una remera bien hecha empieza por la tela y se vuelve tuya con el diseño. Elegí el
                color, el talle y dónde va tu estampa; nosotros nos ocupamos de que quede impecable.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsConfiguratorOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-4 text-sm font-black uppercase tracking-wide text-black shadow-lg transition hover:scale-[1.02] hover:bg-yellow-300"
                >
                  <Palette className="h-5 w-5" />
                  Armar mi remera
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-6 py-4 text-sm font-extrabold text-emerald-400 transition hover:bg-emerald-500 hover:text-black"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Consultar por WhatsApp
                </a>
              </div>

              <div className={`flex flex-wrap gap-x-5 gap-y-2 pt-1 text-xs font-semibold ${muted}`}>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-400" /> Desde 1 unidad
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Truck className="h-4 w-4 text-sky-400" /> Envíos a todo el país
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-yellow-400" /> Descuento por cantidad
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-yellow-400/20 bg-yellow-400/5" />
              <div className={`relative overflow-hidden rounded-[1.75rem] border shadow-2xl ${card}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111820]">
                  <img
                    src={product.imageUrl}
                    alt="Remeras personalizadas estampadas"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/65 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur">
                    Algodón 24.1 · Calidad premium
                  </span>
                  <span className="absolute right-4 top-4 rotate-3 bg-yellow-400 px-3 py-2 text-[10px] font-black uppercase leading-tight text-black shadow-lg">
                    Tu diseño
                    <br />
                    tu identidad
                  </span>
                </div>
                <div className="grid grid-cols-3 divide-x divide-gray-700/50">
                  {[
                    { label: 'Talles', value: 'Niños 4–16 · Adultos 1–5 · Especiales 6–10' },
                    { label: 'Colores', value: `${product.colors.length} opciones` },
                    { label: 'Desde', value: new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(product.basePrice) },
                  ].map((item) => (
                    <div key={item.label} className="px-3 py-4 text-center">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">{item.label}</p>
                      <p className="mt-1 text-xs font-black text-white sm:text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className={`mt-4 text-center text-[10px] ${muted}`}>
                La imagen es ilustrativa. Los colores pueden variar según pantalla y disponibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`border-y py-14 sm:py-20 ${darkMode ? 'border-gray-800 bg-[#080C10]' : 'border-gray-200 bg-slate-50'}`}>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-sky-400">
              Encontrá tu combinación
            </span>
            <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">Color y talle, a tu medida</h2>
            <p className={`mt-4 leading-relaxed ${muted}`}>
              Hay tonos para equipos, marcas, eventos y uso diario. Seleccioná un color para
              destacarlo y consultá la guía antes de elegir tu talle.
            </p>

            <div className={`mt-7 rounded-2xl border p-5 ${card}`}>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Ruler className="h-5 w-5 text-yellow-400" />
                  <div>
                    <h3 className="text-sm font-extrabold uppercase">Guía de talles</h3>
                    <p className={`mt-1 text-xs ${muted}`}>Rangos disponibles</p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-expanded={showSizeGuide}
                  onClick={() => setShowSizeGuide((open) => !open)}
                  className={`rounded-xl border p-2 transition ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`}
                  aria-label={showSizeGuide ? 'Cerrar guía de talles' : 'Abrir guía de talles'}
                >
                  <ChevronDown className={`h-4 w-4 transition-transform ${showSizeGuide ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {showSizeGuide && (
                <div className="mt-5 space-y-3">
                  {product.sizeGroups?.map((group) => (
                    <div
                      key={group.label}
                      className={`flex items-center justify-between gap-4 border-t pt-3 text-xs ${
                        darkMode ? 'border-gray-800' : 'border-gray-200'
                      }`}
                    >
                      <span className="font-bold">{group.label}</span>
                      <span className={`text-right ${muted}`}>{group.sizes.join(' · ')}</span>
                    </div>
                  ))}
                  <p className={`mt-3 text-[11px] leading-relaxed ${muted}`}>
                    Consultanos para confirmar las medidas exactas y la disponibilidad del talle que necesitás.
                  </p>
                  <a
                    href="/tabla-de-talles"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-sky-400 transition-colors hover:text-sky-300"
                  >
                    Ver todas las tablas de indumentaria
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className={`rounded-3xl border p-6 sm:p-8 ${card}`}>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-black uppercase">Paleta disponible</h3>
                <p className={`mt-1 text-sm ${muted}`}>
                  {selectedColor ?? 'Elegí un color para resaltarlo'}
                </p>
              </div>
              <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-black text-sky-400">
                {product.colors.length} tonos
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {product.colors.map((color, index) => {
                const isSelected = selectedColor === color.name;
                return (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(isSelected ? null : color.name)}
                    aria-pressed={isSelected}
                    className={`group flex items-center gap-3 rounded-xl border p-3 text-left transition ${
                      isSelected
                        ? 'border-yellow-400 bg-yellow-400/10 ring-1 ring-yellow-400'
                        : darkMode
                          ? 'border-gray-800 hover:border-gray-600'
                          : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <span
                      className={`h-7 w-7 shrink-0 rounded-full border shadow-inner ${color.border ? 'border-gray-400' : 'border-white/20'}`}
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="min-w-0">
                      <span className={`block truncate text-xs font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        {color.name}
                      </span>
                      <span className="mt-0.5 block text-[9px] uppercase tracking-wider text-gray-500">
                        Color {String(index + 1).padStart(2, '0')}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className={`mt-8 border-t pt-6 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="text-sm font-extrabold uppercase">Elegí tu talle</h3>
                <button
                  type="button"
                  onClick={() => setShowSizeGuide(true)}
                  className="text-xs font-bold text-sky-400 underline underline-offset-4 hover:text-sky-300"
                >
                  Ver medidas
                </button>
              </div>
              <div className="space-y-4">
                {product.sizeGroups?.map((group) => (
                  <div key={group.label}>
                    <p className={`mb-2 text-[10px] font-extrabold uppercase tracking-wider ${muted}`}>
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.sizes.map((size) => {
                        const fullSize = `${group.label} ${size}`;
                        const isSelected = selectedSize === fullSize;
                        return (
                          <button
                            key={fullSize}
                            type="button"
                            onClick={() => setSelectedSize(isSelected ? null : fullSize)}
                            aria-pressed={isSelected}
                            aria-label={`${group.label} talle ${size}`}
                            className={`min-w-12 rounded-xl border px-3 py-2 text-xs font-black transition ${
                              isSelected
                                ? 'border-yellow-400 bg-yellow-400 text-black'
                                : darkMode
                                  ? 'border-gray-700 text-gray-200 hover:border-gray-500'
                                  : 'border-gray-300 text-gray-700 hover:border-gray-500'
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <p className={`mt-3 text-xs ${muted}`}>
                {selectedSize ?? 'Seleccioná tu talle o elegilo en el configurador'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-14 sm:py-20 ${surface}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-pink-400">
                Tres formas de estampar
              </span>
              <h2 className="mt-3 text-3xl font-black uppercase sm:text-4xl">La técnica también importa</h2>
            </div>
            <p className={`max-w-md text-sm leading-relaxed ${muted}`}>
              ¿No sabés cuál elegir? Mandanos tu diseño y te recomendamos la mejor opción.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {techniqueDetails.map((technique) => (
              <article key={technique.id} className={`rounded-2xl border p-6 transition-colors hover:border-yellow-400/50 ${card}`}>
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-sm font-black ${technique.accent}`}>{technique.number}</span>
                  <Layers className={`h-5 w-5 ${technique.accent}`} />
                </div>
                <h3 className="mt-7 text-xl font-black uppercase">{technique.title}</h3>
                <p className={`mt-1 text-xs font-extrabold uppercase tracking-wider ${technique.accent}`}>
                  {technique.summary}
                </p>
                <p className={`mt-4 text-sm leading-relaxed ${muted}`}>{technique.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quantityDiscounts.map((discount, index) => (
              <article key={discount.minQty} className={`rounded-2xl border p-4 ${card}`}>
                <span className="font-mono text-xs font-black text-sky-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-sm font-extrabold">{discount.label}</p>
                <p className="mt-1 text-xl font-black text-emerald-400">
                  {discount.discountPercent === 0 ? 'Precio base' : `${discount.discountPercent}% OFF`}
                </p>
              </article>
            ))}
          </div>

          <p className={`mt-3 text-[11px] ${muted}`}>
            Valores de referencia según cantidad; el precio final se confirma de acuerdo con la técnica y el diseño.
          </p>
        </div>
      </section>

      {isConfiguratorOpen && (
        <ProductConfigModal
          product={product}
          onClose={() => setIsConfiguratorOpen(false)}
          darkMode={darkMode}
          initialSize={selectedSize ?? undefined}
          initialColor={product.colors.find((color) => color.name === selectedColor)}
        />
      )}
    </>
  );
};
