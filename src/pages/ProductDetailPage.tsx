import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES, TechnicalSpec } from '../data/products';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Layers,
  ArrowRight,
  Phone,
  Mail,
  Send,
  Download,
  Info,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface ProductDetailPageProps {
  categorySlug: string;
  productSlug: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  categorySlug,
  productSlug,
}) => {
  const { navigate, openQuoteModal } = useRouter();

  // Find product by slug
  const product = ALL_PRODUCTS.find((p) => p.slug === productSlug) || ALL_PRODUCTS[0];
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === categorySlug) || PRODUCT_CATEGORIES[0];

  // Active gallery image
  const [selectedImage, setSelectedImage] = useState(product.heroImage);

  // Related products from same category, excluding current
  const relatedProducts = ALL_PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 3);

  // Inline inquiry state for this specific product
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* 1. Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Products', path: '/products' },
              { label: product.categoryName, path: `/products/${product.categoryId}` },
              { label: product.name },
            ]}
          />
        </div>
      </div>

      {/* Placeholder Notice Banner (for easy client identification & replacement) */}
      {product.isPlaceholder && (
        <div className="bg-amber-50/80 border-b border-amber-200 py-2.5 px-4 text-xs text-amber-900">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                <strong>Client Template Notice:</strong> Technical specifications and images for <strong>{product.name}</strong> are formatted as structured placeholders. Client can easily replace these with real model specifications in <code>src/data/products.ts</code>.
              </span>
            </div>
            <button
              onClick={() => openQuoteModal(product.name)}
              className="font-bold underline text-amber-900 shrink-0 hover:text-black"
            >
              Request Real Spec Sheet
            </button>
          </div>
        </div>
      )}

      {/* Main Product Hero & Overview Section */}
      <section className="py-10 sm:py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Left: 2. Large Product Hero Image & 10. Gallery */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                <img
                  src={selectedImage}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-300"
                />
                
                {/* Product Code Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono font-bold text-slate-800 shadow-xs border border-slate-200/60">
                  {product.code}
                </div>
              </div>

              {/* Gallery Thumbnails */}
              <div className="flex items-center gap-3">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === img
                        ? 'border-red-600 ring-2 ring-red-100'
                        : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Intro & Key Highlights */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* 1-line unboxed category kicker */}
                <div className="flex items-center gap-2 text-sm font-bold text-red-600 uppercase tracking-wider">
                  <span>{product.categoryName}</span>
                  <span className="text-slate-300" aria-hidden="true">·</span>
                  <span className="text-slate-500 font-mono">Code: {product.code}</span>
                </div>

                {/* 3. Product Name */}
                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {product.name}
                </h1>

                {/* 4. Short Professional Introduction */}
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                  {product.shortDescription}
                </p>

                {/* 5. Key Highlights */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Key Engineering Highlights
                  </div>
                  <ul className="space-y-2.5 text-sm text-slate-800">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 12. Request a Quote CTA Box */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => openQuoteModal(product.name)}
                    className="flex-1 py-3.5 px-6 bg-[#DE1F27] hover:bg-[#B91C1C] text-white text-sm sm:text-base font-bold rounded-lg shadow-sm hover:shadow transition-all text-center cursor-pointer"
                  >
                    Request a Quote for this Machine
                  </button>
                  <a
                    href="tel:+919825073095"
                    className="py-3.5 px-5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm sm:text-base font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-red-600" />
                    <span className="font-mono tabular-nums">+91 98250 73095</span>
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 pt-1">
                  <span>Supervised by Senior Engineers</span>
                  <span>12 Months Standard Warranty</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. Product Description & 7. Technical Specifications Table */}
      <section className="py-14 sm:py-16 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Description & Features */}
            <div className="lg:col-span-6 space-y-8">
              {/* 6. Product Description */}
              <div className="space-y-3">
                <span className="text-sm font-bold text-red-600 uppercase tracking-wider block">
                  TECHNICAL OVERVIEW
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Product Description
                </h2>
                <p className="text-base text-slate-700 leading-relaxed whitespace-pre-line font-normal">
                  {product.description}
                </p>
              </div>

              {/* 8. Engineering Features */}
              <div className="space-y-4">
                <span className="text-sm font-bold text-red-600 uppercase tracking-wider block">
                  SYSTEM CAPABILITIES
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Engineering & Operational Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feat, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {feat.title}
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 9. Applications */}
              <div className="space-y-3">
                <span className="text-sm font-bold text-red-600 uppercase tracking-wider block">
                  RECOMMENDED USE
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Site Applications
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {product.applications.map((app, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-sm font-medium text-slate-800 shadow-2xs"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 7. Technical Specifications Table */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-red-600 uppercase tracking-wider block">
                    ENGINEERING METRICS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Technical Specifications
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded">
                  {product.code}
                </span>
              </div>

              {/* Specifications Table (Mobile friendly scrollable container) */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-bold uppercase tracking-wider">
                        <th className="py-3.5 px-4 w-1/2 text-sm">Parameter</th>
                        <th className="py-3.5 px-4 w-1/2 text-sm">Engineering Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.specifications.map((spec, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}
                        >
                          <td className="py-3.5 px-4 font-semibold text-slate-900 text-sm">
                            {spec.parameter}
                          </td>
                          <td className="py-3.5 px-4 text-sm font-medium text-slate-800">
                            {spec.value}
                            {spec.note && (
                              <span className="block text-xs text-slate-500 font-sans mt-0.5">
                                {spec.note}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-xs sm:text-sm text-slate-600 flex items-center justify-between">
                  <span>Custom engineering dimensions available upon request</span>
                  <button
                    onClick={() => openQuoteModal(product.name)}
                    className="font-bold text-red-600 hover:underline cursor-pointer"
                  >
                    Request Exact Specs
                  </button>
                </div>
              </div>

              {/* Direct Enquiry Box on this page */}
              <div className="mt-6 p-6 rounded-xl bg-white border border-red-200 shadow-xs space-y-4">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    Enquire About {product.name}
                  </h4>
                  <p className="text-sm text-slate-600">
                    Send a fast message to our engineering team regarding this specific machinery model.
                  </p>
                </div>

                {inquirySubmitted ? (
                  <div className="py-4 text-center text-sm text-green-700 font-semibold bg-green-50 rounded-lg border border-green-200">
                    Thank you. Your enquiry for {product.name} has been received.
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="Your Name *"
                        className="px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg outline-none focus:ring-1 focus:ring-red-600"
                      />
                      <input
                        type="text"
                        required
                        value={inquiryCompany}
                        onChange={(e) => setInquiryCompany(e.target.value)}
                        placeholder="Company Name *"
                        className="px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg outline-none focus:ring-1 focus:ring-red-600"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="tel"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="Phone Number *"
                        className="px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg outline-none focus:ring-1 focus:ring-red-600"
                      />
                      <input
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="Email Address *"
                        className="px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg outline-none focus:ring-1 focus:ring-red-600"
                      />
                    </div>
                    <textarea
                      rows={2}
                      value={inquiryMsg}
                      onChange={(e) => setInquiryMsg(e.target.value)}
                      placeholder={`Tell us about your requirements for ${product.name}...`}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg outline-none focus:ring-1 focus:ring-red-600 resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#DE1F27] hover:bg-[#B91C1C] text-white text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Send className="w-4 h-4" /> Submit Fast Inquiry
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 11. Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                  RELATED EQUIPMENT
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  More {product.categoryName}
                </h3>
              </div>
              <button
                onClick={() => navigate(`/products/${product.categoryId}`)}
                className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
              >
                View All in Category <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
