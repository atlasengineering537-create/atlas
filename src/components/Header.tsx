import React, { useState, useEffect, useRef } from 'react';
import { AtlasLogo } from './AtlasLogo';
import { Link } from './Link';
import { useRouter } from '../context/RouterContext';
import { PRODUCT_CATEGORIES, ALL_PRODUCTS } from '../data/products';
import makeInIndiaLogo from '../assets/images/make_in_india_logo.png';
import msmeLogo from '../assets/images/msme_logo.png';
import { ChevronDown, Menu, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

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
  'mobile-drum-mix-plant': { displayName: 'Mobile Drum Mix Plant', badge: '20–120 TPH' },
  'wet-mix-plant-wmm': { displayName: 'Wet Mix Plant (WMM)', badge: '100–300 TPH' },
  'bitumen-pressure-distributor': { displayName: 'Bitumen Pressure Distributor', badge: '3k–12k L' },
  'hydraulic-broomer': { displayName: 'Hydraulic Road Broomer', badge: 'Tractor / Loader' },
  'chip-spreader': { displayName: 'Chip Spreader Unit', badge: 'Surface Dressing' },
  'cement-concrete-batching-plant': { displayName: 'Concrete Batching Plant', badge: '30–90 m³/hr' },
  'cement-fly-ash-silo': { displayName: 'Cement & Fly Ash Silo', badge: '50–150+ Ton' },
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
      <div className="sticky top-0 z-40 w-full shadow-xs">
        {/* Top Utility Bar with Gmail ID & Mobile Number */}
        <div className="bg-[#18181b] text-slate-200 border-b border-zinc-800 text-xs sm:text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5">
            {/* Left: Manufacturing Facility & MSME */}
            <div className="hidden md:flex items-center gap-2 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span className="truncate">Kathwada GIDC, Ahmedabad, Gujarat, India</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400 font-medium">Govt. Registered MSME</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400 font-medium">Mfg. Since 1997</span>
            </div>

            {/* Right: Direct Contact (Mobile Number & Gmail ID) */}
            <div className="flex items-center flex-wrap gap-x-5 sm:gap-x-6 gap-y-1 ml-auto w-full md:w-auto justify-between md:justify-end">
              {/* Mobile Numbers */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span className="text-zinc-400 text-xs hidden sm:inline">Mobile:</span>
                <a
                  href="tel:+919825073095"
                  className="font-mono tabular-nums font-semibold text-slate-100 hover:text-red-400 transition-colors"
                  title="Direct Mobile"
                >
                  +91 98250 73095
                </a>
                <span className="text-zinc-600 hidden sm:inline">/</span>
                <a
                  href="tel:+919173672311"
                  className="font-mono tabular-nums font-semibold text-slate-300 hover:text-red-400 transition-colors hidden sm:inline"
                  title="Secondary Mobile"
                >
                  +91 91736 72311
                </a>
              </div>

              <span className="text-zinc-700 hidden sm:inline">|</span>

              {/* Email Address */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span className="text-zinc-400 text-xs hidden sm:inline">Email:</span>
                <a
                  href="mailto:contact@atlasbitumenplant.com"
                  className="font-medium text-slate-100 hover:text-red-400 transition-colors"
                  title="Official Email"
                >
                  contact@atlasbitumenplant.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Header */}
        <header
          className={`w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200 ${
            isScrolled ? 'py-2 sm:py-2.5' : 'py-3 sm:py-3.5'
          }`}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Brand Wordmark / Logo */}
            <div className="flex items-center shrink-0">
              <Link
                to="/"
                className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded inline-block"
                aria-label="Atlas Engineering Home"
              >
                <AtlasLogo className={isScrolled ? 'py-0.5' : 'py-1'} variant="full" />
              </Link>
            </div>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
              <Link
                to="/"
                className={`py-1 text-sm font-semibold transition-colors relative block ${
                  isCurrent('home') ? 'text-red-600' : 'hover:text-slate-900'
                }`}
              >
                Home
                {isCurrent('home') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                )}
              </Link>

              <Link
                to="/about"
                className={`py-1 text-sm font-semibold transition-colors relative block ${
                  isCurrent('about') ? 'text-red-600' : 'hover:text-slate-900'
                }`}
              >
                About Us
                {isCurrent('about') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                )}
              </Link>

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

                {/* Mega Menu Dropdown with Categories and Products Only */}
                {isProductsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-[42%] xl:-translate-x-1/2 mt-2 w-[980px] max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {PRODUCT_CATEGORIES.map((category) => {
                        const catProducts = ALL_PRODUCTS.filter((p) => p.categoryId === category.id);
                        return (
                          <div
                            key={category.id}
                            className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 flex flex-col justify-start"
                          >
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                              <Link
                                to={`/categories/${category.slug}`}
                                onClick={() => setIsProductsDropdownOpen(false)}
                                className="text-left group flex items-center gap-1.5"
                              >
                                <h5 className="text-sm font-black text-slate-900 group-hover:text-red-600 transition-colors uppercase tracking-wider">
                                  {category.name}
                                </h5>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-red-600 shrink-0" />
                              </Link>
                              <span className="text-xs font-mono font-bold text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded-full shrink-0">
                                {catProducts.length}
                              </span>
                            </div>

                            <div className="space-y-0.5">
                              {catProducts.map((prod) => {
                                const meta = PRODUCT_MENU_META[prod.slug] || PRODUCT_MENU_META[prod.id] || { displayName: prod.name };
                                return (
                                  <Link
                                    key={prod.id}
                                    to={`/products/${prod.slug}`}
                                    onClick={() => setIsProductsDropdownOpen(false)}
                                    className="group/item w-full text-left py-1.5 px-2 rounded-lg hover:bg-white hover:shadow-2xs transition-all flex items-center justify-between text-sm block"
                                  >
                                    <div className="flex items-center gap-2 min-w-0 pr-1">
                                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover/item:bg-red-600 group-hover/item:scale-125 transition-all shrink-0" />
                                      <span className="font-semibold text-slate-800 group-hover/item:text-red-600 truncate text-xs sm:text-sm">
                                        {meta.displayName}
                                      </span>
                                    </div>
                                    {meta.badge && (
                                      <span className="text-xs font-mono font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 group-hover/item:bg-red-100 group-hover/item:text-red-700 shrink-0">
                                        {meta.badge}
                                      </span>
                                    )}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`py-1 text-sm font-semibold transition-colors relative block ${
                  isCurrent('contact') ? 'text-red-600' : 'hover:text-slate-900'
                }`}
              >
                Contact Us
                {isCurrent('contact') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                )}
              </Link>
            </nav>

            {/* Zone 3: Government Accreditations (Make In India & MSME) & Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Make in India Lion Logo */}
              <div 
                className="flex items-center justify-center p-1.5 sm:p-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                title="Make In India - Proudly Manufactured in Kathwada GIDC, Ahmedabad"
              >
                <img
                  src={makeInIndiaLogo}
                  alt="Make In India Lion Logo"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain shrink-0"
                />
              </div>

              {/* MSME Registered Logo */}
              <div 
                className="flex items-center justify-center p-1.5 sm:p-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                title="MSME Registered Enterprise - Ministry of MSME, Govt. of India"
              >
                <img
                  src={msmeLogo}
                  alt="Ministry of MSME, Govt. of India"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain shrink-0"
                />
              </div>

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
    </div>

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
              <div className="flex items-center gap-2">
                <AtlasLogo className="h-8" variant="compact" />
                <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                  <img
                    src={makeInIndiaLogo}
                    alt="Make In India"
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                  <img
                    src={msmeLogo}
                    alt="MSME Registered"
                    className="h-8 sm:h-9 w-auto object-contain"
                  />
                </div>
              </div>
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
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold block ${
                  isCurrent('home') ? 'bg-red-50 text-red-600' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold block ${
                  isCurrent('about') ? 'bg-red-50 text-red-600' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                About Us
              </Link>

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
                  <Link
                    to="/products"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                  >
                    All 17 Models <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Category Switcher Tabs */}
                <div className="p-2 bg-slate-100 border-b border-slate-200 flex gap-1.5 overflow-x-auto no-scrollbar">
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setMobileSelectedCat(cat.id)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                        mobileSelectedCat === cat.id
                          ? 'bg-[#DE1F27] text-white shadow-xs'
                          : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                      }`}
                    >
                      <span>{cat.shortName}</span>
                    </button>
                  ))}
                </div>

                {/* Selected Category Products List */}
                <div className="p-2 space-y-1 bg-white max-h-[340px] overflow-y-auto">
                  {ALL_PRODUCTS.filter((p) => p.categoryId === mobileSelectedCat).map((prod) => {
                    const meta = PRODUCT_MENU_META[prod.slug] || PRODUCT_MENU_META[prod.id] || { displayName: prod.name };
                    return (
                      <Link
                        key={prod.id}
                        to={`/products/${prod.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-red-50/70 border border-slate-100 hover:border-red-200 transition-all flex items-center justify-between group block"
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
                      </Link>
                    );
                  })}

                  {/* View Full Category Page Link */}
                  {(() => {
                    const currentCat = PRODUCT_CATEGORIES.find((c) => c.id === mobileSelectedCat);
                    if (!currentCat) return null;
                    return (
                      <Link
                        to={`/categories/${currentCat.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full mt-2 pt-2 pb-1 text-center text-xs font-bold text-red-600 hover:text-red-700 flex items-center justify-center gap-1.5 border-t border-slate-100 block"
                      >
                        <span>View All in {currentCat.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 inline" />
                      </Link>
                    );
                  })()}
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-semibold block ${
                  isCurrent('contact') ? 'bg-red-50 text-red-600' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Contact Us
              </Link>

              {/* Direct Info */}
              <div className="pt-4 border-t border-slate-200 space-y-2 text-xs sm:text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Kathwada GIDC, Ahmedabad, Gujarat</p>
                <div className="flex flex-col gap-1 pt-1">
                  <a href="tel:+919825073095" className="flex items-center gap-2 text-slate-800 font-semibold hover:text-red-600">
                    <Phone className="w-3.5 h-3.5 text-red-600" /> +91 98250 73095 / +91 91736 72311
                  </a>
                  <a href="mailto:contact@atlasbitumenplant.com" className="flex items-center gap-2 text-slate-800 font-semibold hover:text-red-600 text-xs sm:text-sm">
                    <Mail className="w-3.5 h-3.5 text-red-600" /> contact@atlasbitumenplant.com
                  </a>
                  <a href="mailto:atlasengineering@ymail.com" className="flex items-center gap-2 text-slate-600 text-xs hover:text-red-600">
                    <Mail className="w-3.5 h-3.5 text-slate-400" /> atlasengineering@ymail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2">
              <a
                href="tel:+919825073095"
                className="w-full py-3 text-center text-sm font-bold text-white bg-[#DE1F27] hover:bg-[#B91C1C] rounded-lg shadow-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call: +91 98250 73095
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
