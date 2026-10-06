import React, { useState, useEffect, useRef } from 'react';
import { AtlasLogo } from './AtlasLogo';
import { useRouter } from '../context/RouterContext';
import { PRODUCT_CATEGORIES, ALL_PRODUCTS } from '../data/products';
import { ChevronDown, Menu, X, ArrowRight, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProductMenuMeta {
  displayName: string;
  badge?: string;
}

const PRODUCT_MENU_META: Record<string, ProductMenuMeta> = {
  'bitumen-emulsion-plant': { displayName: 'Bitumen Emulsion Plant', badge: '1–30 TPH' },
  'pmb-crmb-bitumen-modify-plant': { displayName: 'PMB / CRMB Modify Plant', badge: '10–40 TPH' },
  'bitumen-air-blowing-oxidization-plant': { displayName: 'Air Blowing Oxidization Plant', badge: 'Blown Grades' },
  'cold-mix-asphalt-plant': { displayName: 'Cold Mix Asphalt Plant', badge: 'Monsoon Patch' },
  'bitumen-storage-tank': { displayName: 'Bitumen Storage Tank', badge: '20–100 KL' },
  'bitumen-decanter': { displayName: 'Bitumen Decanter', badge: 'Drum Melter' },
  'micro-surfacing-paver-slurry-seal-machine': { displayName: 'Micro Surfacing Paver', badge: 'Slurry Seal' },
  'asphalt-cold-mix-material-bag-filling-machine': { displayName: 'Cold Mix Bag Filling Machine', badge: 'Packaging' },
  'hot-thermic-fluid-heater': { displayName: 'Hot Thermic Fluid Heater', badge: 'Up to 350°C' },
  'asphalt-batch-mix-plant': { displayName: 'Asphalt Batch Mix Plant', badge: '80–160 TPH' },
  'asphalt-drum-mix-plant': { displayName: 'Asphalt Drum Mix Plant', badge: '40–120 TPH' },
  'wet-mix-macadam-plant': { displayName: 'Wet Mix Macadam Plant', badge: '100–250 TPH' },
  'bitumen-pressure-distributor': { displayName: 'Bitumen Pressure Distributor', badge: '3k–12k L' },
  'hydraulic-broomer': { displayName: 'Hydraulic Road Broomer', badge: 'Tractor / Loader' },
  'chip-spreader': { displayName: 'Chip Spreader Unit', badge: 'Surface Dressing' },
  'cement-concrete-equipment-1': { displayName: 'Concrete Batching Plant', badge: 'Electronic PLC' },
  'cement-concrete-equipment-2': { displayName: 'Concrete Mobile Mixer', badge: 'Self-Transit' },
};

export const Header: React.FC = () => {
  const { route, navigate, openQuoteModal } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSelectedCat, setMobileSelectedCat] = useState<string>('bitumen-modify-equipment');
  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(event.target as Node)
      ) {
        setIsProductsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsProductsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 200);
  };

  const toggleDropdown = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsProductsDropdownOpen((prev) => !prev);
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
                ref={dropdownContainerRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className={`py-1 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors relative cursor-pointer ${
                    isCurrent('products') ? 'text-red-600' : 'hover:text-slate-900'
                  }`}
                  aria-expanded={isProductsDropdownOpen}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      isProductsDropdownOpen ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                  {isCurrent('products') && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                  )}
                </button>

                {/* Mega Menu Dropdown with Full Product Directory */}
                {isProductsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-[42%] xl:-translate-x-1/2 mt-2 w-[980px] max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                            MACHINERY PORTFOLIO
                          </span>
                          <span className="text-sm font-semibold text-slate-500">
                            17 Heavy-Duty Construction & Bitumen Machines
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 mt-1">
                          Atlas Engineering Machinery Divisions
                        </h4>
                      </div>
                      <button
                        onClick={() => {
                          setIsProductsDropdownOpen(false);
                          navigate('/products');
                        }}
                        className="text-sm font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        View All 17 Products <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* 3 Categories with their full product lists */}
                    <div className="grid grid-cols-12 gap-5">
                      
                      {/* Column 1: Bitumen Modify Equipment (9 Products) */}
                      <div className="col-span-5 flex flex-col justify-between p-4 rounded-xl border border-red-200/80 bg-red-50/20">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-black uppercase tracking-wider text-red-700 bg-red-100 px-2.5 py-0.5 rounded">
                              Flagship Focus • 9 Machines
                            </span>
                          </div>
                          <h5
                            onClick={() => {
                              setIsProductsDropdownOpen(false);
                              navigate('/products/bitumen-modify-equipment');
                            }}
                            className="text-sm font-black text-slate-900 hover:text-red-600 cursor-pointer transition-colors leading-snug mb-1"
                          >
                            Bitumen Modify Equipment
                          </h5>
                          <p className="text-xs text-slate-600 mb-3">
                            Emulsion, PMB, decanting, oxidization & heating plants
                          </p>

                          {/* List of 9 Products */}
                          <div className="space-y-0.5">
                            {ALL_PRODUCTS.filter((p) => p.categoryId === 'bitumen-modify-equipment').map((prod) => {
                              const meta = PRODUCT_MENU_META[prod.slug] || PRODUCT_MENU_META[prod.id] || { displayName: prod.name };
                              return (
                                <button
                                  key={prod.id}
                                  onClick={() => {
                                    setIsProductsDropdownOpen(false);
                                    navigate(`/products/${prod.categoryId}/${prod.slug}`);
                                  }}
                                  className="group/item w-full text-left py-1.5 px-2 rounded-lg hover:bg-white hover:shadow-2xs transition-all flex items-center justify-between text-sm"
                                >
                                  <div className="flex items-center gap-2 min-w-0 pr-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 group-hover/item:bg-red-600 group-hover/item:scale-125 transition-all shrink-0" />
                                    <span className="font-semibold text-slate-800 group-hover/item:text-red-600 truncate">
                                      {meta.displayName}
                                    </span>
                                  </div>
                                  {meta.badge && (
                                    <span className="text-xs font-mono font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 group-hover/item:bg-red-100 group-hover/item:text-red-700 shrink-0">
                                      {meta.badge}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setIsProductsDropdownOpen(false);
                            navigate('/products/bitumen-modify-equipment');
                          }}
                          className="mt-3 pt-2.5 border-t border-red-200/60 text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                        >
                          Explore All 9 Bitumen Plants <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Column 2: Road Construction Equipment (6 Products) */}
                      <div className="col-span-4 flex flex-col justify-between p-4 rounded-xl border border-slate-200 bg-slate-50/40">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-black uppercase tracking-wider text-slate-700 bg-slate-200 px-2.5 py-0.5 rounded">
                              Core Highway • 6 Machines
                            </span>
                          </div>
                          <h5
                            onClick={() => {
                              setIsProductsDropdownOpen(false);
                              navigate('/products/road-construction-equipment');
                            }}
                            className="text-sm font-black text-slate-900 hover:text-red-600 cursor-pointer transition-colors leading-snug mb-1"
                          >
                            Road Construction Equipment
                          </h5>
                          <p className="text-xs text-slate-600 mb-3">
                            Asphalt batching, drum plants & macadam pavers
                          </p>

                          {/* List of 6 Products */}
                          <div className="space-y-0.5">
                            {ALL_PRODUCTS.filter((p) => p.categoryId === 'road-construction-equipment').map((prod) => {
                              const meta = PRODUCT_MENU_META[prod.slug] || PRODUCT_MENU_META[prod.id] || { displayName: prod.name };
                              return (
                                <button
                                  key={prod.id}
                                  onClick={() => {
                                    setIsProductsDropdownOpen(false);
                                    navigate(`/products/${prod.categoryId}/${prod.slug}`);
                                  }}
                                  className="group/item w-full text-left py-1.5 px-2 rounded-lg hover:bg-white hover:shadow-2xs transition-all flex items-center justify-between text-sm"
                                >
                                  <div className="flex items-center gap-2 min-w-0 pr-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover/item:bg-red-600 group-hover/item:scale-125 transition-all shrink-0" />
                                    <span className="font-semibold text-slate-800 group-hover/item:text-red-600 truncate">
                                      {meta.displayName}
                                    </span>
                                  </div>
                                  {meta.badge && (
                                    <span className="text-xs font-mono font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 group-hover/item:bg-red-100 group-hover/item:text-red-700 shrink-0">
                                      {meta.badge}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setIsProductsDropdownOpen(false);
                            navigate('/products/road-construction-equipment');
                          }}
                          className="mt-3 pt-2.5 border-t border-slate-200 text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                        >
                          Explore All 6 Road Machines <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Column 3: Cement & Concrete Equipment (2 Products) + Custom Plant Card */}
                      <div className="col-span-3 flex flex-col justify-between p-4 rounded-xl border border-slate-200 bg-slate-50/40">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-black uppercase tracking-wider text-slate-700 bg-slate-200 px-2.5 py-0.5 rounded">
                              Batching • 2 Machines
                            </span>
                          </div>
                          <h5
                            onClick={() => {
                              setIsProductsDropdownOpen(false);
                              navigate('/products/cement-concrete-equipment');
                            }}
                            className="text-sm font-black text-slate-900 hover:text-red-600 cursor-pointer transition-colors leading-snug mb-1"
                          >
                            Cement & Concrete
                          </h5>
                          <p className="text-xs text-slate-600 mb-3">
                            Concrete batching & transit mixing solutions
                          </p>

                          {/* List of 2 Products */}
                          <div className="space-y-0.5 mb-4">
                            {ALL_PRODUCTS.filter((p) => p.categoryId === 'cement-concrete-equipment').map((prod) => {
                              const meta = PRODUCT_MENU_META[prod.slug] || PRODUCT_MENU_META[prod.id] || { displayName: prod.name };
                              return (
                                <button
                                  key={prod.id}
                                  onClick={() => {
                                    setIsProductsDropdownOpen(false);
                                    navigate(`/products/${prod.categoryId}/${prod.slug}`);
                                  }}
                                  className="group/item w-full text-left py-1.5 px-2 rounded-lg hover:bg-white hover:shadow-2xs transition-all flex items-center justify-between text-sm"
                                >
                                  <div className="flex items-center gap-2 min-w-0 pr-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover/item:bg-red-600 group-hover/item:scale-125 transition-all shrink-0" />
                                    <span className="font-semibold text-slate-800 group-hover/item:text-red-600 truncate">
                                      {meta.displayName}
                                    </span>
                                  </div>
                                  {meta.badge && (
                                    <span className="text-xs font-mono font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 group-hover/item:bg-red-100 group-hover/item:text-red-700 shrink-0">
                                      {meta.badge}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {/* Custom Engineering Consultation Mini Card */}
                          <div className="p-3 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-2 shadow-xs">
                            <div className="flex items-center gap-1 text-xs font-bold text-red-400 uppercase tracking-wider">
                              <Sparkles className="w-3.5 h-3.5" /> Custom Engineering
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              Need customized capacity or site layout engineering?
                            </p>
                            <button
                              onClick={() => {
                                setIsProductsDropdownOpen(false);
                                openQuoteModal();
                              }}
                              className="w-full py-1.5 px-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded text-center transition-colors shadow-2xs"
                            >
                              Consult an Engineer
                            </button>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setIsProductsDropdownOpen(false);
                            navigate('/products/cement-concrete-equipment');
                          }}
                          className="mt-3 pt-2.5 border-t border-slate-200 text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                        >
                          Explore Concrete Equipment <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>

                    {/* Bottom strip */}
                    <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Certified to IRC, MORTH & IS specifications • 28+ Years Manufacturing Legacy</span>
                      </div>
                      <a
                        href="tel:+919825073095"
                        className="font-bold text-slate-900 hover:text-red-600 inline-flex items-center gap-1.5"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-red-600" /> +91 98250 73095
                      </a>
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

              {/* Products Directory Section for Mobile */}
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 shadow-2xs">
                {/* Header with All Products Link */}
                <div className="px-3.5 py-3 bg-white border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    <span className="text-sm font-black text-slate-900 uppercase tracking-wider">
                      Machinery Directory
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      navigate('/products');
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                  >
                    All 17 Models <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Category Switcher Tabs */}
                <div className="p-2 bg-slate-100 border-b border-slate-200 flex gap-1.5 overflow-x-auto no-scrollbar">
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setMobileSelectedCat(cat.id)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                        mobileSelectedCat === cat.id
                          ? 'bg-[#DE1F27] text-white shadow-xs'
                          : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                      }`}
                    >
                      <span>{cat.shortName}</span>
                      <span
                        className={`text-xs font-mono px-1.5 py-0.2 rounded ${
                          mobileSelectedCat === cat.id
                            ? 'bg-red-800/60 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {cat.productCount}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Selected Category Products List */}
                <div className="p-2 space-y-1 bg-white max-h-[340px] overflow-y-auto">
                  {ALL_PRODUCTS.filter((p) => p.categoryId === mobileSelectedCat).map((prod) => {
                    const meta = PRODUCT_MENU_META[prod.slug] || PRODUCT_MENU_META[prod.id] || { displayName: prod.name };
                    return (
                      <button
                        key={prod.id}
                        onClick={() => {
                          navigate(`/products/${prod.categoryId}/${prod.slug}`);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-red-50/70 border border-slate-100 hover:border-red-200 transition-all flex items-center justify-between group"
                      >
                        <div className="min-w-0 pr-2">
                          <div className="font-bold text-sm text-slate-900 group-hover:text-red-600 leading-tight">
                            {meta.displayName}
                          </div>
                          <div className="text-xs font-mono text-slate-500 mt-0.5">
                            {prod.code}
                          </div>
                        </div>
                        {meta.badge && (
                          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 group-hover:bg-red-100 group-hover:text-red-700 shrink-0">
                            {meta.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}

                  {/* View Full Category Page Link */}
                  {(() => {
                    const currentCat = PRODUCT_CATEGORIES.find((c) => c.id === mobileSelectedCat);
                    if (!currentCat) return null;
                    return (
                      <button
                        onClick={() => {
                          navigate(`/products/${currentCat.slug}`);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full mt-2 pt-2 pb-1 text-center text-xs font-bold text-red-600 hover:text-red-700 flex items-center justify-center gap-1.5 border-t border-slate-100"
                      >
                        <span>View All {currentCat.productCount} in {currentCat.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    );
                  })()}
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
