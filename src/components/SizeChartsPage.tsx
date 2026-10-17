import React, { useEffect, useState } from 'react';
import { ArrowLeft, Expand, Ruler, X } from 'lucide-react';
import previewRemeraEspecial from '../assets/images/size-charts/redesigned/remera-talle-especial.webp';
import previewBuzoFrisa from '../assets/images/size-charts/redesigned/buzo-frisa.webp';
import previewBuzoDama from '../assets/images/size-charts/redesigned/buzo-dama.webp';
import previewCanguroFrisa from '../assets/images/size-charts/redesigned/canguro-frisa.webp';
import previewCropTop from '../assets/images/size-charts/redesigned/crop-top.webp';
import previewRemeraNinos from '../assets/images/size-charts/redesigned/remera-basica-ninos.webp';
import previewRemeraEscoteV from '../assets/images/size-charts/redesigned/remera-dama-escote-v.webp';
import previewRemeraCuelloRedondo from '../assets/images/size-charts/redesigned/remera-dama-cuello-redondo.webp';
import previewRemeraMangaJaponesa from '../assets/images/size-charts/redesigned/remera-dama-manga-japonesa.webp';
import previewRemeraBasica from '../assets/images/size-charts/redesigned/remera-basica.webp';
import previewBuzoWaffle from '../assets/images/size-charts/redesigned/buzo-waffle.webp';
import previewRemeraSinMangas from '../assets/images/size-charts/redesigned/remera-sin-mangas.webp';
import previewMusculosa from '../assets/images/size-charts/redesigned/musculosa.webp';
import previewMusculosaDama from '../assets/images/size-charts/redesigned/musculosa-dama.webp';
import previewDelantal from '../assets/images/size-charts/redesigned/delantal.webp';
import previewChombaEspecial from '../assets/images/size-charts/redesigned/chomba-talle-especial.webp';
import previewToallas from '../assets/images/size-charts/redesigned/toallas.webp';
import previewDelantalAlternativo from '../assets/images/size-charts/redesigned/delantal-alternativo.webp';
import previewChomba from '../assets/images/size-charts/redesigned/chomba.webp';
import previewCamisaLino from '../assets/images/size-charts/redesigned/camisa-de-lino.webp';
import remeraEspecial from '../assets/images/size-charts/remera-talle-especial.jpg';
import buzoFrisa from '../assets/images/size-charts/buzo-frisa.jpg';
import buzoDama from '../assets/images/size-charts/buzo-dama.jpg';
import canguroFrisa from '../assets/images/size-charts/canguro-frisa.jpg';
import cropTop from '../assets/images/size-charts/crop-top.jpg';
import remeraNinos from '../assets/images/size-charts/remera-basica-ninos.jpg';
import remeraEscoteV from '../assets/images/size-charts/remera-dama-escote-v.jpg';
import remeraCuelloRedondo from '../assets/images/size-charts/remera-dama-cuello-redondo.jpg';
import remeraMangaJaponesa from '../assets/images/size-charts/remera-dama-manga-japonesa.jpg';
import remeraBasica from '../assets/images/size-charts/remera-basica.jpg';
import buzoWaffle from '../assets/images/size-charts/buzo-waffle.jpg';
import remeraSinMangas from '../assets/images/size-charts/remera-sin-mangas.jpg';
import musculosa from '../assets/images/size-charts/musculosa.jpg';
import musculosaDama from '../assets/images/size-charts/musculosa-dama.jpg';
import delantal from '../assets/images/size-charts/delantal.jpg';
import chombaEspecial from '../assets/images/size-charts/chomba-talle-especial.jpg';
import toallas from '../assets/images/size-charts/toallas.jpg';
import delantalAlternativo from '../assets/images/size-charts/delantal-alternativo.jpg';
import chomba from '../assets/images/size-charts/chomba.jpg';
import camisaLino from '../assets/images/size-charts/camisa-de-lino-1.jpg';

interface SizeChart {
  title: string;
  category: string;
  image: string;
  previewImage: string;
}

interface SizeChartsPageProps {
  darkMode: boolean;
}

const categories = ['Todos', 'Remeras', 'Buzos', 'Uniformes', 'Accesorios'];

const charts: SizeChart[] = [
  { title: 'Remera talle especial', category: 'Remeras', image: remeraEspecial, previewImage: previewRemeraEspecial },
  { title: 'Buzo frisa', category: 'Buzos', image: buzoFrisa, previewImage: previewBuzoFrisa },
  { title: 'Buzo dama', category: 'Buzos', image: buzoDama, previewImage: previewBuzoDama },
  { title: 'Canguro frisa', category: 'Buzos', image: canguroFrisa, previewImage: previewCanguroFrisa },
  { title: 'Crop top', category: 'Remeras', image: cropTop, previewImage: previewCropTop },
  { title: 'Remera básica niño', category: 'Remeras', image: remeraNinos, previewImage: previewRemeraNinos },
  { title: 'Remera dama escote en V', category: 'Remeras', image: remeraEscoteV, previewImage: previewRemeraEscoteV },
  { title: 'Remera dama cuello redondo', category: 'Remeras', image: remeraCuelloRedondo, previewImage: previewRemeraCuelloRedondo },
  { title: 'Remera dama manga japonesa', category: 'Remeras', image: remeraMangaJaponesa, previewImage: previewRemeraMangaJaponesa },
  { title: 'Remera básica', category: 'Remeras', image: remeraBasica, previewImage: previewRemeraBasica },
  { title: 'Buzo waffle', category: 'Buzos', image: buzoWaffle, previewImage: previewBuzoWaffle },
  { title: 'Remera sin mangas', category: 'Remeras', image: remeraSinMangas, previewImage: previewRemeraSinMangas },
  { title: 'Musculosa', category: 'Remeras', image: musculosa, previewImage: previewMusculosa },
  { title: 'Musculosa dama', category: 'Remeras', image: musculosaDama, previewImage: previewMusculosaDama },
  { title: 'Delantal', category: 'Accesorios', image: delantal, previewImage: previewDelantal },
  { title: 'Chomba talle especial', category: 'Uniformes', image: chombaEspecial, previewImage: previewChombaEspecial },
  { title: 'Toallas', category: 'Accesorios', image: toallas, previewImage: previewToallas },
  { title: 'Delantal (modelo alternativo)', category: 'Accesorios', image: delantalAlternativo, previewImage: previewDelantalAlternativo },
  { title: 'Chomba', category: 'Uniformes', image: chomba, previewImage: previewChomba },
  { title: 'Camisa de lino', category: 'Uniformes', image: camisaLino, previewImage: previewCamisaLino },
];

export const SizeChartsPage: React.FC<SizeChartsPageProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedChart, setSelectedChart] = useState<SizeChart | null>(null);

  useEffect(() => {
    if (!selectedChart) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedChart(null);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [selectedChart]);

  const visibleCharts =
    activeCategory === 'Todos'
      ? charts
      : charts.filter((chart) => chart.category === activeCategory);
  const surface = darkMode ? 'bg-[#0B1017] text-white' : 'bg-white text-gray-900';
  const muted = darkMode ? 'text-gray-300' : 'text-gray-600';
  const card = darkMode ? 'border-gray-800 bg-[#141C2B]' : 'border-gray-200 bg-white';

  return (
    <>
      <main className={`min-h-[70vh] ${surface}`}>
        <section className="relative isolate overflow-hidden border-b border-gray-800/70 px-4 py-14 sm:py-20">
          <div className="absolute -right-24 -top-28 -z-10 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="mx-auto max-w-7xl">
            <a
              href="/remeras-personalizadas"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 transition-colors hover:text-sky-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a remeras
            </a>
            <div className="mt-10 grid items-end gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-yellow-300">
                  <Ruler className="h-4 w-4" />
                  Guía de indumentaria
                </span>
                <h1 className="mt-6 max-w-3xl text-4xl font-black uppercase leading-[0.98] tracking-tight sm:text-6xl">
                  Encontrá tu
                  <span className="mt-2 block text-yellow-400">talle ideal.</span>
                </h1>
                <p className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${muted}`}>
                  Consultá las tablas de cada prenda antes de elegir. Seleccioná una imagen para
                  ampliarla y revisar sus medidas con más comodidad.
                </p>
              </div>
              <div className={`rounded-2xl border p-5 md:max-w-xs ${card}`}>
                <p className="text-3xl font-black text-yellow-400">{charts.length}</p>
                <p className={`mt-1 text-xs font-bold uppercase tracking-widest ${muted}`}>
                  tablas disponibles
                </p>
                <p className={`mt-3 text-xs leading-relaxed ${muted}`}>
                  Las medidas pueden variar según el modelo. Si tenés dudas, consultanos antes de
                  hacer tu pedido.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-400">
                Buscá por categoría
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase sm:text-3xl">
                Tablas de medidas
              </h2>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Filtrar tablas por categoría">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`rounded-full border px-4 py-2 text-xs font-extrabold transition ${
                    activeCategory === category
                      ? 'border-yellow-400 bg-yellow-400 text-black'
                      : darkMode
                        ? 'border-gray-700 bg-[#111820] text-gray-300 hover:border-gray-500'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-gray-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
            {visibleCharts.map((chart) => (
              <button
                key={chart.title}
                type="button"
                onClick={() => setSelectedChart(chart)}
                aria-label={`Ampliar tabla: ${chart.title}`}
                className={`group overflow-hidden rounded-2xl border text-left shadow-lg transition duration-200 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-yellow-400/10 ${card}`}
              >
                <div className="relative flex aspect-[4/5] items-center justify-center bg-[#f7f2e8] p-3 sm:p-5">
                  <img
                    src={chart.previewImage}
                    alt={`Diseño de la tabla de talles: ${chart.title}`}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-black/75 text-white opacity-0 transition group-hover:opacity-100">
                    <Expand className="h-4 w-4" />
                  </span>
                </div>
                <div className="p-3 sm:p-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.16em] text-sky-400">
                    {chart.category}
                  </span>
                  <h3 className="mt-1 text-xs font-extrabold leading-snug sm:text-sm">
                    {chart.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      {selectedChart && (
        <div
          role="presentation"
          onClick={() => setSelectedChart(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Tabla de talles: ${selectedChart.title}`}
            onClick={(event) => event.stopPropagation()}
            className="relative flex max-h-full w-full max-w-3xl flex-col items-center rounded-2xl border border-white/15 bg-[#10151d] p-4 shadow-2xl sm:p-6"
          >
            <div className="mb-3 flex w-full items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-sky-400">
                  {selectedChart.category}
                </p>
                <h2 className="mt-1 text-sm font-extrabold text-white sm:text-base">
                  {selectedChart.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedChart(null)}
                aria-label="Cerrar tabla ampliada"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <img
              src={selectedChart.image}
              alt={`Tabla de talles ampliada: ${selectedChart.title}`}
              className="max-h-[calc(100vh-9rem)] max-w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};
