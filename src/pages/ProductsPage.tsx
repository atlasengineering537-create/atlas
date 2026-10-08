import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { PRODUCT_CATEGORIES, ALL_PRODUCTS } from '../data/products';
import { Search, Layers, ArrowRight, Filter } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { openQuoteModal } = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesCat = activeCategory === 'all' || product.categoryId === activeCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="bg-white">
      {/* Breadcrumbs Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Products' }]} />
        </div>
      </div>

      {/* Page Hero */}
      <section className="py-12 sm:py-16 border-b border-slate-200 bg-gradient-to-b from-white to-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-1.5">
              MACHINERY CATALOGUE
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Road & Civil Construction Machinery
            </h1>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Explore our complete range of heavy-duty machinery models across Bitumen Modification, Road Construction, and Cement Concrete batching.
            </p>
          </div>

          {/* 3 Categories Overview Bento */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <CategoryCard key={cat.id} category={cat} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Full Products Directory with Filtering */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
            {/* Filter Tabs (Interactive Segmented Control) */}
            <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-100 rounded-xl no-scrollbar">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Equipment
              </button>
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.shortName}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search equipment or code..."
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
              />
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
            <span>
              Showing <strong>{filteredProducts.length}</strong> of <strong>{ALL_PRODUCTS.length}</strong> models
            </span>
            <span className="italic text-slate-400">
              *Model names & specifications ready for real client updates
            </span>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center border border-dashed border-slate-300 rounded-2xl">
              <p className="text-sm font-semibold text-slate-700">No equipment found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 text-xs font-bold text-red-600 hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Cannot Find Your Exact Machinery Specification?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Atlas Engineering customizes plant capacities, mobile chassis, burner fuel options, and automated control cabinets to match your exact job-site parameters.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openQuoteModal('Custom Machinery Inquiry')}
              className="px-6 py-2.5 bg-[#DE1F27] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-lg shadow-sm transition-all"
            >
              Consult Engineering Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
