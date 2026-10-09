import React from 'react';
import { ProductCategory, ALL_PRODUCTS } from '../data/products';
import { useRouter } from '../context/RouterContext';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: ProductCategory;
  index?: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { navigate } = useRouter();
  const categoryProducts = ALL_PRODUCTS.filter((p) => p.categoryId === category.id);

  return (
    <div
      onClick={() => navigate(`/products/${category.slug}`)}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
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
        </div>

        {/* Card Body */}
        <div className="p-6">
          <span className="text-sm font-bold text-red-600 uppercase tracking-wider block mb-1.5">
            {category.subtitle}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
            {category.name}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-4 min-h-[4.5rem]">
            {category.description}
          </p>

          {/* Key Applications Quick List */}
          <div className="mt-4 pt-3.5 border-t border-slate-100">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
              Key Applications:
            </span>
            <ul className="space-y-1.5 text-sm text-slate-700">
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
            <span className="text-sm font-bold text-slate-900 uppercase tracking-wider block mb-2">
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
        <div className="flex items-center justify-between text-base font-bold text-red-600 group-hover:text-red-700 pt-2 border-t border-slate-100">
          <span>Explore Category</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};
