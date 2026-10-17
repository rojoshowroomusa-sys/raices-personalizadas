/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { MugsPage } from './components/MugsPage';
import { ShirtsPage } from './components/ShirtsPage';
import { SizeChartsPage } from './components/SizeChartsPage';
import { ShippingNationwide } from './components/ShippingNationwide';
import { AudienceSegments } from './components/AudienceSegments';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { CartDrawer } from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

type DetailPage = 'mugs' | 'shirts' | 'sizeCharts' | null;

const getDetailPage = (): DetailPage => {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  if (pathname === '/tazas-personalizadas') return 'mugs';
  if (pathname === '/remeras-personalizadas') return 'shirts';
  if (pathname === '/tabla-de-talles') return 'sizeCharts';
  return null;
};

export default function App() {
  // Dark mode by default as requested: "Asegúrate de incluir un modo oscuro por defecto."
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [detailPage, setDetailPage] = useState<DetailPage>(getDetailPage);

  const openDetailPage = (page: Exclude<DetailPage, null>) => {
    const path = page === 'mugs' ? '/tazas-personalizadas' : '/remeras-personalizadas';
    window.history.pushState({}, '', path);
    setDetailPage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-[#080C10]', 'text-gray-100');
      document.body.classList.remove('bg-white', 'text-gray-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-[#080C10]', 'text-gray-100');
      document.body.classList.add('bg-white', 'text-gray-900');
    }
  }, [darkMode]);

  useEffect(() => {
    const handlePopState = () => {
      setDetailPage(getDetailPage());
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (detailPage === 'shirts') {
      document.title = 'Remeras Personalizadas | Raíces Personalizaciones';
    } else if (detailPage === 'mugs') {
      document.title = 'Tazas Personalizadas | Raíces Personalizaciones';
    } else if (detailPage === 'sizeCharts') {
      document.title = 'Tablas de Talles | Raíces Personalizaciones';
    } else {
      document.title =
        'Raíces Personalizaciones | Crea • Imprime • Impacta | Catálogo de Productos Personalizados';
    }
  }, [detailPage]);

  return (
    <CartProvider>
      <div
        className={`min-h-screen transition-colors duration-200 ${
          darkMode ? 'bg-[#080C10] text-gray-100' : 'bg-white text-gray-900'
        }`}
      >
        {/* Sticky Navigation Bar */}
        <Navbar
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode((prev) => !prev)}
          isDetailPage={detailPage !== null}
        />

        {/* Main Content Sections */}
        <main>
          {detailPage === 'mugs' ? (
            <MugsPage darkMode={darkMode} />
          ) : detailPage === 'shirts' ? (
            <ShirtsPage darkMode={darkMode} />
          ) : detailPage === 'sizeCharts' ? (
            <SizeChartsPage darkMode={darkMode} />
          ) : (
            <>
              {/* Hero Banner & 4 Pillars Strip */}
              <Hero darkMode={darkMode} />

              {/* Product Catalog (Expanded with Customizer & Volume Discount Orders) */}
              <ProductCatalog
                darkMode={darkMode}
                onOpenMugsPage={() => openDetailPage('mugs')}
                onOpenShirtsPage={() => openDetailPage('shirts')}
              />

              {/* Envíos a todo el país - Cobertura y Tiempos de Entrega Nacionales */}
              <ShippingNationwide darkMode={darkMode} />

              {/* 5 Audience Segments: Para Quién (Empresas, Regalos, Eventos, Equipos, Colegios) */}
              <AudienceSegments darkMode={darkMode} />

              {/* Frequently Asked Questions (FAQ) Accordion */}
              <FaqSection darkMode={darkMode} />
            </>
          )}
        </main>

        {/* Footer & Final Call to Action */}
        <Footer darkMode={darkMode} isDetailPage={detailPage !== null} />

        {/* Sticky, Floating WhatsApp Button in the bottom-right corner */}
        <FloatingWhatsAppButton darkMode={darkMode} />

        {/* Slide-over Cart / Order Drawer */}
        <CartDrawer darkMode={darkMode} />
      </div>
    </CartProvider>
  );
}
