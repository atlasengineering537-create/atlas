import React, { useState, useEffect, useRef } from 'react';
import { AtlasLogo } from './AtlasLogo';
import { useRouter } from '../context/RouterContext';
import { PRODUCT_CATEGORIES } from '../data/products';
import { ChevronDown, Menu, X, ArrowRight, PhoneCall } from 'lucide-react';

export const Header: React.FC = () => {
  const { route, navigate, openQuoteModal } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 150);
  };

  const isCurrent = (pathType: string, extra?: string) => {
    if (pathType === 'home' && route.type === 'home') return true;
    if (pathType === 'about' && route.type === 'about') return true;
    if (pathType === 'contact' && route.type === 'contact') return true;
    if (pathType === 'products' && (route.type === 'products' || route.type === 'category' || route.type === 'product')) {
      if (!extra) return true;
      if (route.type === 'category' && route.categorySlug === extra) return true;
      if (route.type === 'product' && route.categorySlug === extra) return true;
    }
    return false;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200 ${
          isScrolled ? 'py-2.5 shadow-sm' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Brand Wordmark / Logo */}
            <div className="flex items-center shrink-0">
              <button
                onClick={() => navigate('/')}
                className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
                aria-label="Atlas Engineering Home"
              >
                <AtlasLogo className={isScrolled ? 'h-9' : 'h-10'} variant="full" />
              </button>
            </div>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
              <button
                onClick={() => navigate('/')}
                className={`py-1 text-sm font-semibold transition-colors relative ${
                  isCurrent('home') ? 'text-red-600' : 'hover:text-slate-900'
                }`}
              >
                Home
                {isCurrent('home') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                )}
              </button>

              <button
                onClick={() => navigate('/about')}
                className={`py-1 text-sm font-semibold transition-colors relative ${
                  isCurrent('about') ? 'text-red-600' : 'hover:text-slate-900'
                }`}
              >
                About Us
                {isCurrent('about') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                )}
              </button>

              {/* Products Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => navigate('/products')}
                  className={`py-1 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors relative ${
                    isCurrent('products') ? 'text-red-600' : 'hover:text-slate-900'
                  }`}
                  aria-expanded={isProductsDropdownOpen}
                >
                  Products
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      isProductsDropdownOpen ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                  {isCurrent('products') && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                  )}
                </button>

                {/* Mega Menu Dropdown */}
                {isProductsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white rounded-xl shadow-2xl border border-slate-200 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                          Machinery Portfolio
                        </span>
                        <h4 className="text-base font-bold text-slate-900">
                          Engineered Construction Solutions
                        </h4>
                      </div>
                      <button
                        onClick={() => {
                          setIsProductsDropdownOpen(false);
                          navigate('/products');
                        }}
                        className="text-xs font-semibold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
                      >
                        View All Products <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                      {PRODUCT_CATEGORIES.map((cat) => (
                        <div
                          key={cat.id}
                          className={`p-3.5 rounded-lg border transition-all ${
                            cat.featuredFocus
                              ? 'border-red-200 bg-red-50/40 hover:border-red-300'
                              : 'border-slate-100 hover:border-slate-200 bg-slate-50/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                              {cat.productCount} Products
                            </span>
                            {cat.featuredFocus && (
                              <span className="text-[10px] font-bold text-red-700 bg-red-100 px-1.5 py-0.5 rounded">
                                Primary Focus
                              </span>
                            )}
                          </div>
                          <h5 className="text-sm font-bold text-slate-900 leading-snug mb-1">
                            {cat.name}
                          </h5>
                          <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                            {cat.description}
                          </p>
                          <button
                            onClick={() => {
                              setIsProductsDropdownOpen(false);
                              navigate(`/products/${cat.slug}`);
                            }}
                            className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
                          >
                            Explore Category <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>Need engineering assistance selecting machinery?</span>
                      <button
                        onClick={() => {
                          setIsProductsDropdownOpen(false);
                          openQuoteModal();
                        }}
                        className="font-bold text-slate-900 hover:text-red-600"
                      >
                        Consult an Engineer
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => navigate('/contact')}
                className={`py-1 text-sm font-semibold transition-colors relative ${
                  isCurrent('contact') ? 'text-red-600' : 'hover:text-slate-900'
                }`}
              >
                Contact Us
                {isCurrent('contact') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                )}
              </button>
            </nav>

            {/* Zone 3: Primary Action & Quick Contact */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919825073095"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 px-2.5 py-1.5"
                title="Call Atlas Engineering"
              >
                <PhoneCall className="w-3.5 h-3.5 text-red-600" />
                <span className="whitespace-nowrap font-mono tabular-nums">+91 98250 73095</span>
              </a>

              <button
                onClick={() => openQuoteModal()}
                className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#DE1F27] hover:bg-[#B91C1C] rounded-lg shadow-sm hover:shadow transition-all duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              >
                Get a Quote
              </button>

              {/* Mobile menu hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-md focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <AtlasLogo className="h-8" variant="compact" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <button
                onClick={() => {
                  navigate('/');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                  isCurrent('home') ? 'bg-red-50 text-red-600' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => {
                  navigate('/about');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                  isCurrent('about') ? 'bg-red-50 text-red-600' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                About Us
              </button>

              {/* Products with accordion */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => {
                    navigate('/products');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2.5 bg-slate-50 text-base font-bold text-slate-900 border-b border-slate-200 flex items-center justify-between"
                >
                  <span>All Products</span>
                  <span className="text-xs text-red-600 font-normal">View All</span>
                </button>

                <div className="p-2 space-y-1">
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <div key={cat.id} className="border-b border-slate-100 last:border-0 pb-1">
                      <button
                        onClick={() =>
                          setMobileExpandedCat(mobileExpandedCat === cat.id ? null : cat.id)
                        }
                        className="w-full text-left px-2 py-2 flex items-center justify-between text-sm font-semibold text-slate-800"
                      >
                        <span>{cat.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            mobileExpandedCat === cat.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {mobileExpandedCat === cat.id && (
                        <div className="pl-3 pr-2 py-1 space-y-1.5 text-xs">
                          <button
                            onClick={() => {
                              navigate(`/products/${cat.slug}`);
                              setIsMobileMenuOpen(false);
                            }}
                            className="block w-full text-left font-bold text-red-600 py-1"
                          >
                            Explore All {cat.productCount} Products →
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  navigate('/contact');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold ${
                  isCurrent('contact') ? 'bg-red-50 text-red-600' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Contact Us
              </button>

              {/* Direct Info */}
              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs text-slate-600">
                <p className="font-semibold text-slate-900">Kathwada GIDC, Ahmedabad</p>
                <p>Phone: +91 98250 73095</p>
                <p>Email: contact@atlas.in</p>
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-4 border-t border-slate-200 bg-slate-50">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3 text-center text-sm font-bold text-white bg-[#DE1F27] hover:bg-[#B91C1C] rounded-lg shadow-sm"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
