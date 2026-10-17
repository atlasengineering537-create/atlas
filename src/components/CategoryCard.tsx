import React from 'react';
import { ProductCategory } from '../data/products';
import { Link } from './Link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CategoryCardProps {
  category: ProductCategory;
  index?: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, index = 0 }) => {
  const categoryUrl = `/categories/${category.slug}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Category Image Header */}
      <Link to={categoryUrl} className="relative aspect-[16/10] overflow-hidden bg-slate-100 block">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        
        {/* Count Badge */}
        <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
          {category.productCount} Machines
        </div>

        {/* Short Title on Image */}
        <div className="absolute bottom-3.5 left-4 right-4">
          <span className="text-[10px] font-bold tracking-widest uppercase text-red-400 block">
            Category 0{index + 1}
          </span>
          <h3 className="text-lg font-black text-white tracking-tight drop-shadow-xs">
            {category.name}
          </h3>
        </div>
      </Link>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {category.description}
          </p>

          {/* Key Applications bullets */}
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Key Applications
            </span>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {category.keyApplications.slice(0, 3).map((app, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to={categoryUrl}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-900 hover:text-red-600 border border-slate-200 hover:border-red-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <span>Explore Category Equipment</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
