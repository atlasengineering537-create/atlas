import React, { useState, useEffect } from 'react';
import { Link } from '../components/Link';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import {
  Globe,
  Layers,
  Truck,
  Building2,
  FileCode,
  FileText,
  Search,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
  Database,
  Cpu,
  Factory,
} from 'lucide-react';

export const SitemapPage: React.FC = () => {
  const [searchFilter, setSearchFilter] = useState('');

  // SEO: Dynamic Page Title, Canonical and Schema
  useEffect(() => {
    document.title = 'Website Index & HTML Sitemap | Atlas Engineering';

    const fullUrl = 'https://www.atlasbitumenplant.com/sitemap';
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;

    const schemaId = 'sitemap-schema-jsonld';
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemPage',
      '@id': `${fullUrl}#webpage`,
      name: 'Website Index & HTML Sitemap - Atlas Engineering',
      url: fullUrl,
      description:
        'A complete crawlable hierarchy of all pages, machinery categories, equipment specifications, and technical resources on Atlas Engineering.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.atlasbitumenplant.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'HTML Sitemap',
            item: fullUrl,
          },
        ],
      },
    });

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, []);

  const bitumenProducts = ALL_PRODUCTS.filter(
    (p) => p.categoryId === 'bitumen-modify-equipment'
  );
  const roadProducts = ALL_PRODUCTS.filter(
    (p) => p.categoryId === 'road-construction-equipment'
  );
  const cementProducts = ALL_PRODUCTS.filter(
    (p) => p.categoryId === 'cement-concrete-equipment'
  );

  const filterMatches = (text: string) => {
    if (!searchFilter.trim()) return true;
    return text.toLowerCase().includes(searchFilter.toLowerCase().trim());
  };

  const totalPages =
    4 + // Home, About, Products, Contact
    PRODUCT_CATEGORIES.length + // 3 Categories
    ALL_PRODUCTS.length + // 19 Products
    3; // xml, llms, robots

  return (
    <div className="bg-[#070B14] text-slate-100 min-h-screen">
      {/* Breadcrumbs Header with Dark Theme */}
      <div className="border-b border-slate-800/80 bg-[#0B101E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-red-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-medium">Website Index &amp; Sitemap</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Index · {totalPages} Crawlable Pages</span>
          </div>
        </div>
      </div>

      {/* Hero Section styled clean and prominent */}
      <section className="pt-14 pb-12 sm:pt-20 sm:pb-16 text-center relative overflow-hidden">
        {/* Subtle radial glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-950/40 text-red-400 text-xs font-bold uppercase tracking-wider shadow-sm">
            <FileCode className="w-3.5 h-3.5" />
            <span>Search Engine &amp; User Index</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Website Index &amp; HTML Sitemap
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A complete crawlable hierarchy of all pages, equipment pillars, machinery specifications, and technical resources on Atlas Engineering.
          </p>

          {/* Quick Real-Time Filter Input */}
          <div className="pt-4 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Filter sitemap (e.g. emulsion, paver, drum, silo)..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#0F172A] border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500/80 focus:border-red-500/50 transition-all shadow-inner"
              />
              {searchFilter && (
                <button
                  onClick={() => setSearchFilter('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Sitemap Content Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* =========================================
                CARD 1: Core Company Pages & SEO Assets
               ========================================= */}
            <div className="bg-[#0B101E] border border-slate-800/90 rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:border-slate-700/80 transition-colors">
              <div>
                {/* Card Header */}
                <div className="flex items-center gap-2.5 pb-4 mb-5 border-b border-slate-800/80">
                  <Globe className="w-5 h-5 text-red-500 shrink-0" />
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Core Company Pages
                  </h2>
                </div>

                {/* Links List - Clean titles without path suffixes */}
                <ul className="space-y-3.5 text-xs sm:text-sm">
                  {filterMatches('Homepage') && (
                    <li>
                      <Link
                        to="/"
                        className="group flex items-center gap-2 text-slate-300 hover:text-red-400 transition-colors py-0.5"
                      >
                        <ChevronRight className="w-4 h-4 text-red-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        <span className="font-semibold text-slate-100 group-hover:text-red-400">
                          Homepage
                        </span>
                      </Link>
                    </li>
                  )}

                  {filterMatches('About Atlas Engineering') && (
                    <li>
                      <Link
                        to="/about"
                        className="group flex items-center gap-2 text-slate-300 hover:text-red-400 transition-colors py-0.5"
                      >
                        <ChevronRight className="w-4 h-4 text-red-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        <span className="font-semibold text-slate-100 group-hover:text-red-400">
                          About Atlas Engineering
                        </span>
                      </Link>
                    </li>
                  )}

                  {filterMatches('Machinery & Equipment Portfolio') && (
                    <li>
                      <Link
                        to="/products"
                        className="group flex items-center gap-2 text-slate-300 hover:text-red-400 transition-colors py-0.5"
                      >
                        <ChevronRight className="w-4 h-4 text-red-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        <span className="font-semibold text-slate-100 group-hover:text-red-400">
                          Machinery &amp; Equipment Portfolio
                        </span>
                      </Link>
                    </li>
                  )}

                  {filterMatches('Contact Us & Factory Works') && (
                    <li>
                      <Link
                        to="/contact"
                        className="group flex items-center gap-2 text-slate-300 hover:text-red-400 transition-colors py-0.5"
                      >
                        <ChevronRight className="w-4 h-4 text-red-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                        <span className="font-semibold text-slate-100 group-hover:text-red-400">
                          Contact Us &amp; Factory Works
                        </span>
                      </Link>
                    </li>
                  )}

                  {/* Sub-items: Direct Technical Crawl Manifests */}
                  <li className="pt-3 mt-1 border-t border-slate-800/60 space-y-2">
                    <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase block mb-1">
                      Search Engines &amp; AI Crawl Manifests
                    </span>

                    {filterMatches('XML Sitemap') && (
                      <a
                        href="/sitemap.xml"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 text-xs text-slate-300 hover:text-white transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <FileCode className="w-4 h-4 text-red-400" />
                          <span className="font-medium">XML Sitemap (Google Search Console)</span>
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-red-400" />
                      </a>
                    )}

                    {filterMatches('AI LLM Context File') && (
                      <a
                        href="/llms.txt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 text-xs text-slate-300 hover:text-white transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <Cpu className="w-4 h-4 text-amber-400" />
                          <span className="font-medium">AI &amp; LLM Context Knowledge File</span>
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400" />
                      </a>
                    )}

                    {filterMatches('Crawler Directives robots') && (
                      <a
                        href="/robots.txt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 text-xs text-slate-300 hover:text-white transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <FileText className="w-4 h-4 text-cyan-400" />
                          <span className="font-medium">Search Crawler Directives</span>
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                      </a>
                    )}
                  </li>
                </ul>
              </div>

              {/* Verified Trust Strip */}
              <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>MSME Registered · Make in India</span>
                </span>
                <span className="font-semibold text-slate-300">Est. 1997</span>
              </div>
            </div>

            {/* =========================================
                CARD 2: Bitumen Modify Equipment
               ========================================= */}
            <div className="bg-[#0B101E] border border-slate-800/90 rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:border-slate-700/80 transition-colors">
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-5 h-5 text-red-500 shrink-0" />
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Bitumen Modify Equipment
                    </h2>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-950/70 text-red-400 border border-red-800/50">
                    {bitumenProducts.length} Machines
                  </span>
                </div>

                {/* Category Overview Link - Clean */}
                <div className="mb-4">
                  <Link
                    to="/categories/bitumen-modify-equipment"
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-red-400 hover:text-red-300 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-red-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>Overview: Bitumen Modify Equipment</span>
                  </Link>
                </div>

                {/* Sub-items (Indented) - Clean product names */}
                <div className="pl-3 sm:pl-4 border-l border-slate-800/90 space-y-2.5">
                  {bitumenProducts.map((p) => {
                    const match = filterMatches(`${p.name} ${p.code}`);
                    if (!match) return null;
                    return (
                      <div key={p.id}>
                        <Link
                          to={`/products/${p.slug}`}
                          className="group flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors py-0.5"
                        >
                          <span className="text-slate-600 group-hover:text-red-500 select-none text-sm leading-none">
                            ›
                          </span>
                          <span className="font-medium text-slate-200 group-hover:text-red-400">
                            {p.name}
                          </span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400">
                <span>Colloid Mills · Polymer Blenders · Decanters</span>
                <Link
                  to="/categories/bitumen-modify-equipment"
                  className="font-bold text-red-400 hover:text-red-300 flex items-center gap-1"
                >
                  <span>Explore All</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* =========================================
                CARD 3: Road Construction Equipment
               ========================================= */}
            <div className="bg-[#0B101E] border border-slate-800/90 rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:border-slate-700/80 transition-colors">
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <Truck className="w-5 h-5 text-red-500 shrink-0" />
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Road Construction Equipment
                    </h2>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-950/70 text-red-400 border border-red-800/50">
                    {roadProducts.length} Machines
                  </span>
                </div>

                {/* Category Overview Link - Clean */}
                <div className="mb-4">
                  <Link
                    to="/categories/road-construction-equipment"
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-red-400 hover:text-red-300 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-red-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>Overview: Road Construction Equipment</span>
                  </Link>
                </div>

                {/* Sub-items (Indented) - Clean product names */}
                <div className="pl-3 sm:pl-4 border-l border-slate-800/90 space-y-2.5">
                  {roadProducts.map((p) => {
                    const match = filterMatches(`${p.name} ${p.code}`);
                    if (!match) return null;
                    return (
                      <div key={p.id}>
                        <Link
                          to={`/products/${p.slug}`}
                          className="group flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors py-0.5"
                        >
                          <span className="text-slate-600 group-hover:text-red-500 select-none text-sm leading-none">
                            ›
                          </span>
                          <span className="font-medium text-slate-200 group-hover:text-red-400">
                            {p.name}
                          </span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400">
                <span>Batch Plants · Drum Plants · Pavers · Sprayers</span>
                <Link
                  to="/categories/road-construction-equipment"
                  className="font-bold text-red-400 hover:text-red-300 flex items-center gap-1"
                >
                  <span>Explore All</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* =========================================
                CARD 4: Cement & Concrete Equipment
               ========================================= */}
            <div className="bg-[#0B101E] border border-slate-800/90 rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:border-slate-700/80 transition-colors">
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-5 h-5 text-red-500 shrink-0" />
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Cement &amp; Concrete Equipment
                    </h2>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-950/70 text-red-400 border border-red-800/50">
                    {cementProducts.length} Machines
                  </span>
                </div>

                {/* Category Overview Link - Clean */}
                <div className="mb-4">
                  <Link
                    to="/categories/cement-concrete-equipment"
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-red-400 hover:text-red-300 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-red-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>Overview: Cement Concrete Equipment</span>
                  </Link>
                </div>

                {/* Sub-items (Indented) - Clean product names */}
                <div className="pl-3 sm:pl-4 border-l border-slate-800/90 space-y-2.5">
                  {cementProducts.map((p) => {
                    const match = filterMatches(`${p.name} ${p.code}`);
                    if (!match) return null;
                    return (
                      <div key={p.id}>
                        <Link
                          to={`/products/${p.slug}`}
                          className="group flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors py-0.5"
                        >
                          <span className="text-slate-600 group-hover:text-red-500 select-none text-sm leading-none">
                            ›
                          </span>
                          <span className="font-medium text-slate-200 group-hover:text-red-400">
                            {p.name}
                          </span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400">
                <span>Batching Plants (30-90 m³/hr) · Storage Silos</span>
                <Link
                  to="/categories/cement-concrete-equipment"
                  className="font-bold text-red-400 hover:text-red-300 flex items-center gap-1"
                >
                  <span>Explore All</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Technical Overview Strip */}
          <div className="mt-10 p-6 rounded-2xl bg-[#0B101E] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-red-500" />
                <span className="text-slate-300 font-semibold">Factory Location:</span>
                <span>Kathwada GIDC, Ahmedabad-382430, Gujarat</span>
              </span>
              <span className="flex items-center gap-2">
                <Database className="w-4 h-4 text-amber-500" />
                <span className="text-slate-300 font-semibold">Crawl Protocol:</span>
                <span>Auto-Updated XML &amp; HTML Architecture</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors shadow-sm"
              >
                Direct Factory Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
