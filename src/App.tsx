import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const { route } = useRouter();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [route]);

  const renderCurrentPage = () => {
    switch (route.type) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage />;
      case 'category':
        return <CategoryPage categorySlug={route.categorySlug} />;
      case 'product':
        return (
          <ProductDetailPage
            key={`${route.categorySlug}-${route.productSlug}`}
            categorySlug={route.categorySlug}
            productSlug={route.productSlug}
          />
        );
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-red-600 selection:text-white">
      {/* Top Header */}
      <Header />

      {/* Main Routed Page Content */}
      <main className="flex-1">{renderCurrentPage()}</main>

      {/* Global Quotation Modal */}
      <QuoteModal />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Light Industrial Theme Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
