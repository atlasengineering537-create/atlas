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
      <section className="sticky top-16 z-20 bg-white border-b border-slate-200 shadow-2xs py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Machinery ({ALL_PRODUCTS.length})
              </button>
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.shortName}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search equipment or code..."
                className="w-full pl-9 pr-4 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center space-y-3">
              <SlidersHorizontal className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">No machinery matching your filter</h3>
              <p className="text-sm text-slate-500">Try adjusting your search terms or selecting 'All Machinery'.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-2 text-xs font-bold text-red-600 hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
