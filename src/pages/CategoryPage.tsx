import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { PRODUCT_CATEGORIES, ALL_PRODUCTS } from '../data/products';
import { ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

interface CategoryPageProps {
  categorySlug: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ categorySlug }) => {
  const { navigate, openQuoteModal } = useRouter();

  const category = PRODUCT_CATEGORIES.find((c) => c.slug === categorySlug) || PRODUCT_CATEGORIES[0];
  const products = ALL_PRODUCTS.filter((p) => p.categoryId === category.id);

  return (
    <div className="bg-white">
      {/* Breadcrumb Header Bar */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', path: '/products' },
              { label: category.name },
            ]}
          />
        </div>
      </div>

      {/* Category Hero Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-14 sm:py-20">
        <div className="absolute inset-0 opacity-25">
          <img
            src={category.image}
            alt={category.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
                Category Portfolio
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs font-semibold text-slate-300">
                Machinery Division
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              {category.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {category.description}
            </p>

            {/* Quick Applications Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 mr-1">Applications:</span>
              {category.keyApplications.map((app, i) => (
                <span
                  key={i}
                  className="text-xs text-slate-200 bg-white/10 px-2.5 py-1 rounded backdrop-blur-xs"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation Bar / Switcher */}
      <div className="border-b border-slate-200 bg-white sticky top-[69px] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto py-3 no-scrollbar text-xs font-bold">
            <span className="text-slate-400 uppercase tracking-wider shrink-0 mr-2">
              Switch Category:
            </span>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/products/${cat.slug}`)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  cat.id === category.id
                    ? 'bg-red-600 text-white'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid Section */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                All {category.name} Models
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Showing {products.length} machinery items. Technical specifications and custom layouts available upon request.
              </p>
            </div>
            <button
              onClick={() => openQuoteModal(`${category.name} Enquiry`)}
              className="px-4 py-2 bg-[#DE1F27] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-lg shadow-xs transition-colors shrink-0"
            >
              Request Category Quote
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* Engineering Assistance CTA */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-white border border-slate-200">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Need Custom Capacities for {category.name}?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Our design team can customize throughput, heating methods, and modular layout dimensions for your specific site conditions.
              </p>
            </div>
            <button
              onClick={() => openQuoteModal(`Custom ${category.name}`)}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg shrink-0 transition-colors"
            >
              Consult an Engineer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
