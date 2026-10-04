import React from 'react';
import { Product } from '../data/products';
import { useRouter } from '../context/RouterContext';
import { ArrowRight, FileText } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { navigate, openQuoteModal } = useRouter();

  return (
    <div className="group rounded-xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between hover:border-slate-300">
      <div>
        {/* Product Image */}
        <div
          onClick={() => navigate(`/products/${product.categoryId}/${product.slug}`)}
          className="relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-pointer"
        >
          <img
            src={product.heroImage}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Subtle model code chip */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-xs font-mono font-semibold px-2 py-0.5 rounded text-slate-700 shadow-xs">
            {product.code}
          </div>

          {product.isPlaceholder && (
            <div className="absolute top-3 right-3 bg-amber-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              Ready for Specs
            </div>
          )}
        </div>

        {/* Product Body */}
        <div className="p-4 sm:p-5">
          {/* Unboxed Metadata (Zero-Pill Discipline) */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-1.5">
            <span className="text-red-600 font-bold">{product.categoryName}</span>
            <span aria-hidden="true">·</span>
            <span>Atlas Series</span>
          </div>

          <h4
            onClick={() => navigate(`/products/${product.categoryId}/${product.slug}`)}
            className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors cursor-pointer leading-snug"
          >
            {product.name}
          </h4>

          <p className="mt-2 text-sm text-slate-700 leading-relaxed line-clamp-2 font-normal">
            {product.shortDescription}
          </p>

          {/* Quick Highlight bullet */}
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-700">
            <FileText className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="truncate">{product.highlights[0] || 'Precision-engineered for site reliability'}</span>
          </div>
        </div>
      </div>

      {/* Product Footer Actions */}
      <div className="px-4 sm:px-5 pb-4 pt-2 flex items-center justify-between gap-2 border-t border-slate-100 bg-slate-50/50">
        <button
          onClick={() => navigate(`/products/${product.categoryId}/${product.slug}`)}
          className="text-sm font-bold text-slate-800 hover:text-red-600 inline-flex items-center gap-1.5 py-1.5 cursor-pointer"
        >
          View Details <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => openQuoteModal(product.name)}
          className="text-sm font-semibold text-red-700 hover:text-red-800 bg-red-50 hover:bg-red-100 border border-red-200 px-3.5 py-1.5 rounded transition-colors whitespace-nowrap cursor-pointer"
        >
          Quote
        </button>
      </div>
    </div>
  );
};
