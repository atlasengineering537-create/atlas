import React from 'react';
import { ProductCategory, ALL_PRODUCTS } from '../data/products';
import { useRouter } from '../context/RouterContext';
import { ArrowRight, Layers } from 'lucide-react';

interface CategoryCardProps {
  category: ProductCategory;
  index: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  const { navigate } = useRouter();
  const formattedIndex = (index + 1).toString().padStart(2, '0');
  const categoryProducts = ALL_PRODUCTS.filter((p) => p.categoryId === category.id);

  return (
    <div
      onClick={() => navigate(`/products/${category.slug}`)}
      className={`group cursor-pointer rounded-2xl overflow-hidden bg-white border transition-all duration-300 flex flex-col justify-between ${
        category.featuredFocus
          ? 'border-red-200 shadow-md hover:shadow-xl hover:border-red-400 ring-1 ring-red-100'
          : 'border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300'
      }`}
    >
      <div>
        {/* Card Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={category.image}
            alt={category.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
          
          {/* Category Number & Badge */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="text-xs font-mono font-bold tracking-widest text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded">
              {formattedIndex}
            </span>
            {category.featuredFocus && (
              <span className="text-xs font-bold text-white bg-[#DE1F27] px-2.5 py-1 rounded shadow-xs uppercase tracking-wider">
                Primary Focus
              </span>
            )}
          </div>

          {/* Product Count on image bottom */}
          <div className="absolute bottom-3 left-4 text-sm font-semibold text-white/95 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-red-400" />
            <span>{category.productCount} Engineered Models</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1.5">
            {category.subtitle}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
            {category.name}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3">
            {category.description}
          </p>

          {/* Key Applications Quick List */}
          <div className="mt-4 pt-3.5 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
              Key Applications:
            </span>
            <ul className="space-y-1 text-xs sm:text-sm text-slate-700">
              {category.keyApplications.slice(0, 2).map((app, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  <span className="truncate">{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Machinery in Category */}
          <div className="mt-3.5 pt-3.5 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
              Machinery in this Division:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {categoryProducts.slice(0, 4).map((p) => (
                <span
                  key={p.id}
                  className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 group-hover:bg-red-50 group-hover:text-red-700 text-slate-800 transition-colors"
                >
                  {p.name.replace(/\(.*?\)/g, '').trim()}
                </span>
              ))}
              {categoryProducts.length > 4 && (
                <span className="inline-flex items-center text-xs font-bold px-2 py-1 rounded-md text-red-600">
                  +{categoryProducts.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 pt-2">
        <div className="flex items-center justify-between text-sm font-bold text-red-600 group-hover:text-red-700 pt-2 border-t border-slate-100">
          <span>Explore Category</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};
