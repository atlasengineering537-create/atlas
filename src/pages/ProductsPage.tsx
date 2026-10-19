import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Machinery Catalog | Atlas Engineering - Road & Bitumen Plants';
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://www.atlasbitumenplant.com/products';
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.categoryId === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Equipment Catalog' }]} />
        </div>
      </div>

      {/* Hero Banner */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">
            COMPLETE INDUSTRIAL PORTFOLIO
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Engineering Machinery &amp; Equipment
          </h1>
          <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Discover our comprehensive lineup of bitumen modify plants, road paving machinery, and concrete engineering equipment designed and manufactured in Kathwada GIDC, Ahmedabad.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="border-b border-slate-200 bg-white sticky top-[69px] z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                All Machinery ({ALL_PRODUCTS.length})
              </button>
              {PRODUCT_CATEGORIES.map((cat) => {
                const count = ALL_PRODUCTS.filter((p) => p.categoryId === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-[#DE1F27] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="ml-1.5 opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search machinery or code..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of{' '}
              {ALL_PRODUCTS.length} machines
            </span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-600 font-medium">No machinery found matching your query.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-bold text-red-600 hover:underline cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
