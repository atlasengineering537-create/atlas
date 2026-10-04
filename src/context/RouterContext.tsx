import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageRoute = 
  | { type: 'home' }
  | { type: 'about' }
  | { type: 'products' }
  | { type: 'category'; categorySlug: string }
  | { type: 'product'; categorySlug: string; productSlug: string }
  | { type: 'contact' };

interface RouterContextType {
  route: PageRoute;
  navigate: (path: string) => void;
  openQuoteModal: (productName?: string) => void;
  closeQuoteModal: () => void;
  isQuoteModalOpen: boolean;
  selectedQuoteProduct: string;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function parsePath(pathname: string): PageRoute {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  
  if (cleanPath === '/' || cleanPath === '') {
    return { type: 'home' };
  }
  if (cleanPath === '/about') {
    return { type: 'about' };
  }
  if (cleanPath === '/products') {
    return { type: 'products' };
  }
  if (cleanPath === '/contact') {
    return { type: 'contact' };
  }

  const parts = cleanPath.split('/').filter(Boolean);
  if (parts[0] === 'products') {
    if (parts.length === 2) {
      return { type: 'category', categorySlug: parts[1] };
    }
    if (parts.length >= 3) {
      return { type: 'product', categorySlug: parts[1], productSlug: parts[2] };
    }
  }

  return { type: 'home' };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [route, setRoute] = useState<PageRoute>(() => parsePath(window.location.pathname));
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteProduct, setSelectedQuoteProduct] = useState('');

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parsePath(window.location.pathname));
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setRoute(parsePath(path));
      window.scrollTo(0, 0);
    }
  };

  const openQuoteModal = (productName?: string) => {
    setSelectedQuoteProduct(productName || '');
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <RouterContext.Provider
      value={{
        route,
        navigate,
        openQuoteModal,
        closeQuoteModal,
        isQuoteModalOpen,
        selectedQuoteProduct,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
