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

      {/* 6. Product Description, Engineering Features, Applications & Technical Specifications */}
      {!['pmb-crmb-bitumen-modify-plant', 'bitumen-air-blowing-oxidization-plant', 'cold-mix-asphalt-plant'].includes(product.id) && (
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
                  {product.featuresTitle || (product.id === 'asphalt-batch-mix-plant' ? '🛠️ Key Modules and System Flow' : 'Engineering & Operational Features')}
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

              {/* Production Process Overview */}
              {product.productionProcess && product.productionProcess.length > 0 && (
                <div className="space-y-4">
                  <span className="text-sm font-bold text-red-600 uppercase tracking-wider block">
                    MANUFACTURING SEQUENCE
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">
                    PRODUCTION PROCESS OVERVIEW
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wide">
                    THE BASIC PRODUCTION PROCESS INVOLVES THE FOLLOWING STEPS:
                  </p>
                  <div className="space-y-3">
                    {product.productionProcess.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs"
                      >
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">
                          {idx + 1}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed pt-0.5">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Types of Plants */}
              {product.plantTypes && product.plantTypes.length > 0 && (
                <div className="space-y-4">
                  <span className="text-sm font-bold text-red-600 uppercase tracking-wider block">
                    PLANT CONFIGURATIONS
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">
                    TYPES OF PLANTS
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wide">
                    PLANTS ARE AVAILABLE IN DIFFERENT CONFIGURATIONS TO SUIT VARIOUS NEEDS:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {product.plantTypes.map((pt, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-600" />
                          <h4 className="text-sm font-bold text-slate-900 uppercase">
                            {pt.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-4">
                          {pt.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 9. Applications */}
              <div className="space-y-3">
                <span className="text-sm font-bold text-red-600 uppercase tracking-wider block">
                  RECOMMENDED USE
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Applications
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
      )}

      {/* Emulsion Classification & Application Guide */}
      {product.emulsionGuide && (
        <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider block mb-2">
                APPLICATION & CLASSIFICATION GUIDE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                Bitumen Emulsion Grades & Selection Guide
              </h2>
              <p className="text-base text-slate-700 max-w-4xl leading-relaxed">
                {product.emulsionGuide.intro}
              </p>
            </div>

            {/* The 5 Grade Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {product.emulsionGuide.sections.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-2xs space-y-4"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-black text-red-600 font-mono">
                      {sec.number}.
                    </span>
                    <h3 className="text-xl font-black text-slate-900">
                      {sec.title}
                    </h3>
                  </div>

                  {sec.description && (
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {sec.description}
                    </p>
                  )}

                  {/* Grade / Type Table */}
                  {sec.table && sec.table.length > 0 && (
                    <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse">
                        <thead>
                          <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold uppercase tracking-wider">
                            <th className="py-2.5 px-3 w-1/2">Grade / Type</th>
                            <th className="py-2.5 px-3 w-1/2">Typical application</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {sec.table.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                              <td className="py-2.5 px-3 font-bold text-slate-900 font-mono text-xs sm:text-sm">
                                {row.grade}
                              </td>
                              <td className="py-2.5 px-3 text-slate-700">
                                {row.application}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Best Applications */}
                  {sec.bestApplications && sec.bestApplications.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Best applications:
                      </div>
                      <ul className="space-y-1.5 pl-1">
                        {sec.bestApplications.map((app, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <span className="text-red-600 font-bold">•</span>
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Examples */}
                  {sec.examples && sec.examples.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Examples:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {sec.examples.map((ex, eIdx) => (
                          <span
                            key={eIdx}
                            className="px-2.5 py-1 rounded bg-white border border-slate-300 font-mono font-bold text-xs text-slate-900 shadow-2xs"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Note */}
                  {sec.note && (
                    <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {sec.note}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Selection Guide Table */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                    ENGINEERING MATRIX
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Quick selection guide
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold uppercase tracking-wider">
                        <th className="py-3 px-4 w-1/2 text-sm">Application</th>
                        <th className="py-3 px-4 w-1/2 text-sm">Recommended emulsion</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.emulsionGuide.selectionGuide.map((item, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}
                        >
                          <td className="py-3 px-4 font-semibold text-slate-900">
                            {item.application}
                          </td>
                          <td className="py-3 px-4 font-mono font-bold text-red-700">
                            {item.recommended}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Important Notes & Commercial Advice Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-2">
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-amber-600" /> Important Selection Criterion
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {product.emulsionGuide.importantNotice}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 text-white space-y-2">
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-red-400" /> Commercial Plant Recommendation
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                  {product.emulsionGuide.commercialNote}
                </p>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* PMB / CRMB Bitumen Modification Complete Technical Guide */}
      {product.pmbCrmbGuide && (
        <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header */}
            <div>
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider block mb-2">
                TECHNICAL STANDARD & SPECIFICATION GUIDE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                PMB & CRMB Bitumen Modification Engineering Guide
              </h2>
              <p className="text-base text-slate-700 max-w-4xl leading-relaxed whitespace-pre-line font-medium">
                {product.pmbCrmbGuide.intro}
              </p>
            </div>

            {/* 1. PMB Plant — Polymer Modified Bitumen */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {product.pmbCrmbGuide.pmbPlant.title}
                </h3>
              </div>

              {/* Basic Process Breadcrumbs */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Basic process
                </span>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 font-mono text-xs sm:text-sm font-bold text-slate-800 flex flex-wrap items-center gap-2">
                  {product.pmbCrmbGuide.pmbPlant.processFlow.split('→').map((step, sIdx, arr) => (
                    <React.Fragment key={sIdx}>
                      <span className="bg-red-50 text-red-700 px-2.5 py-1 rounded border border-red-200">
                        {step.trim()}
                      </span>
                      {sIdx < arr.length - 1 && <span className="text-slate-400 font-bold">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  {product.pmbCrmbGuide.pmbPlant.polymersNote}
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  {product.pmbCrmbGuide.pmbPlant.shearNote}
                </div>
              </div>

              {/* Equipment Table */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Main PMB plant equipment
                </h4>
                <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold uppercase tracking-wider">
                        <th className="py-2.5 px-4 w-1/2">Equipment</th>
                        <th className="py-2.5 px-4 w-1/2">Typical function</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.pmbCrmbGuide.pmbPlant.equipmentTable.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                          <td className="py-2.5 px-4 font-bold text-slate-900">
                            {item.equipment}
                          </td>
                          <td className="py-2.5 px-4 text-slate-700">
                            {item.function}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 2. PMB Grades under IS 15462:2019 */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  {product.pmbCrmbGuide.pmbGrades.title}
                </h3>
                <p className="text-sm text-slate-700">
                  {product.pmbCrmbGuide.pmbGrades.intro}
                </p>
              </div>

              {/* Grades Table */}
              <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold uppercase tracking-wider">
                        <th className="py-3 px-4">PMB Grade</th>
                        <th className="py-3 px-4">Temperature basis</th>
                        <th className="py-3 px-4">Typical application</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.pmbCrmbGuide.pmbGrades.table.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                          <td className="py-3 px-4 font-mono font-bold text-red-600 whitespace-nowrap">
                            {row.grade}
                          </td>
                          <td className="py-3 px-4 text-slate-800 font-medium">
                            {row.tempBasis}
                          </td>
                          <td className="py-3 px-4 text-slate-700">
                            {row.application}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  {product.pmbCrmbGuide.pmbGrades.designationNote}
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  {product.pmbCrmbGuide.pmbGrades.ircNote}
                </div>
              </div>

              {/* Typical Application Logic */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Typical application logic
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.pmbCrmbGuide.pmbGrades.applicationLogic.map((logic, idx) => (
                    <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
                      <div className="font-mono font-bold text-sm text-red-600">
                        {logic.grade}
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                        {logic.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-red-500 font-bold">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{product.pmbCrmbGuide.pmbGrades.selectionNote}</span>
              </div>
            </div>

            {/* 3. CRMB Plant & 4. CRMB Grades */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* 3. CRMB Plant — Crumb Rubber Modified Bitumen */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-xl font-black text-slate-900">
                    {product.pmbCrmbGuide.crmbPlant.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {product.pmbCrmbGuide.crmbPlant.intro}
                </p>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium">
                  {product.pmbCrmbGuide.crmbPlant.standardNote}
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Basic CRMB process
                  </span>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 font-mono text-xs font-bold text-slate-800 flex flex-wrap items-center gap-1.5">
                    {product.pmbCrmbGuide.crmbPlant.processFlow.split('→').map((step, sIdx, arr) => (
                      <React.Fragment key={sIdx}>
                        <span className="bg-slate-100 text-slate-900 px-2 py-0.5 rounded border border-slate-200">
                          {step.trim()}
                        </span>
                        {sIdx < arr.length - 1 && <span className="text-slate-400">→</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic">
                  {product.pmbCrmbGuide.crmbPlant.dispersionNote}
                </p>
              </div>

              {/* 4. CRMB Grades */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-xl font-black text-slate-900">
                    {product.pmbCrmbGuide.crmbGrades.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-700">
                  {product.pmbCrmbGuide.crmbGrades.intro}
                </p>
                <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold uppercase tracking-wider">
                        <th className="py-2.5 px-3">Grade</th>
                        <th className="py-2.5 px-3">Min Softening Point</th>
                        <th className="py-2.5 px-3">Typical application</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.pmbCrmbGuide.crmbGrades.table.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                          <td className="py-2.5 px-3 font-mono font-bold text-red-600">
                            {row.grade}
                          </td>
                          <td className="py-2.5 px-3 font-medium text-slate-800">
                            {row.softeningPoint}
                          </td>
                          <td className="py-2.5 px-3 text-slate-700">
                            {row.application}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-600">
                  {product.pmbCrmbGuide.crmbGrades.classificationNote}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.pmbCrmbGuide.crmbGrades.gradesDetail.map((gd, idx) => (
                    <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs space-y-1.5">
                      <div className="font-bold text-slate-900 font-mono text-sm text-red-600">
                        {gd.grade}
                      </div>
                      <div className="font-semibold text-slate-700">
                        {gd.heading}
                      </div>
                      <ul className="space-y-1 text-slate-600">
                        {gd.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1">
                            <span>•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* 5. PMB vs CRMB Comparison Table */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-5">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {product.pmbCrmbGuide.comparison.title}
                </h3>
              </div>
              <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-900 font-bold uppercase tracking-wider">
                        <th className="py-3 px-4 w-1/4">Parameter</th>
                        <th className="py-3 px-4 w-3/8 text-red-700">PMB</th>
                        <th className="py-3 px-4 w-3/8 text-slate-800">CRMB</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.pmbCrmbGuide.comparison.matrix.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                          <td className="py-3 px-4 font-bold text-slate-900">
                            {row.parameter}
                          </td>
                          <td className="py-3 px-4 text-slate-800 font-medium">
                            {row.pmb}
                          </td>
                          <td className="py-3 px-4 text-slate-700">
                            {row.crmb}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 6. Recommended PMB/CRMB Plant Configuration */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-5">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  {product.pmbCrmbGuide.configuration.title}
                </h3>
                <p className="text-sm text-slate-700 font-medium">
                  {product.pmbCrmbGuide.configuration.recommendation}
                </p>
              </div>

              {/* Process Arrangement Diagram */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Suggested process arrangement
                </span>
                <div className="p-6 bg-slate-950 text-emerald-400 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 leading-tight">
                  <pre className="whitespace-pre">{product.pmbCrmbGuide.configuration.diagramText}</pre>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {product.pmbCrmbGuide.configuration.processNote}
              </div>
            </div>

            {/* 7. Example Plant Capacities & 10 TPH Major Equipment */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  {product.pmbCrmbGuide.capacities.title}
                </h3>
                <p className="text-sm text-slate-700">
                  {product.pmbCrmbGuide.capacities.intro}
                </p>
              </div>

              {/* Capacities Table */}
              <div className="max-w-md rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold uppercase tracking-wider">
                      <th className="py-2.5 px-4 w-1/2">Plant capacity</th>
                      <th className="py-2.5 px-4 w-1/2">Approx. production</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {product.pmbCrmbGuide.capacities.capacityTable.map((cap, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                        <td className="py-2.5 px-4 font-bold text-slate-900">
                          {cap.capacity}
                        </td>
                        <td className="py-2.5 px-4 font-mono font-bold text-red-600">
                          {cap.production}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {product.pmbCrmbGuide.capacities.tenTphNote}
              </p>

              {/* 10 TPH Equipment Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {product.pmbCrmbGuide.capacities.equipmentListTitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {product.pmbCrmbGuide.capacities.equipmentList.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 flex items-center gap-2 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Point Warning & Atlas Engineering Commercial Consultation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-2">
                  <div className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-amber-600" /> Engineering Design Consideration
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {product.pmbCrmbGuide.capacities.designPoint}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900 text-white space-y-2">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-red-400" /> Atlas Engineering Consultation
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                    {product.pmbCrmbGuide.capacities.commercialNote}
                  </p>
                </div>
              </div>

              {/* Direct Enquiry Box for PMB/CRMB */}
              <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-red-200 shadow-sm space-y-4 max-w-3xl">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    Enquire About {product.name}
                  </h4>
                  <p className="text-sm text-slate-600">
                    Send a fast message to our engineering team regarding complete PMB &amp; CRMB plant technical specifications and commercial quotation.
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
                        type="tel"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="Phone / WhatsApp *"
                        className="px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg outline-none focus:ring-1 focus:ring-red-600"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={inquiryCompany}
                        onChange={(e) => setInquiryCompany(e.target.value)}
                        placeholder="Company Name"
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
        </section>
      )}

      {/* Bitumen Air Blowing Oxidization Complete Technical Guide */}
      {product.oxidizationGuide && (
        <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header & Intro */}
            <div>
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider block mb-2">
                TECHNICAL STANDARD & PROCESS SPECIFICATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                Bitumen Air Blowing Oxidization Technical Guide
              </h2>
              <p className="text-base text-slate-700 max-w-4xl leading-relaxed whitespace-pre-line font-medium">
                {product.oxidizationGuide.intro}
              </p>
            </div>

            {/* Basic Process Flow & Main Equipment */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Basic Process Flow & Main Equipment
                </h3>
              </div>

              {/* Process Flow Breadcrumb */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Basic Process Flow
                </span>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 font-mono text-xs sm:text-sm font-bold text-slate-800 flex flex-wrap items-center gap-2">
                  {product.oxidizationGuide.processFlow.split('→').map((step, sIdx, arr) => (
                    <React.Fragment key={sIdx}>
                      <span className="bg-red-50 text-red-700 px-2.5 py-1 rounded border border-red-200">
                        {step.trim()}
                      </span>
                      {sIdx < arr.length - 1 && <span className="text-slate-400 font-bold">→</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Main Equipment Table */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Main Equipment
                </h4>
                <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold uppercase tracking-wider">
                        <th className="py-2.5 px-4 w-1/2">Equipment</th>
                        <th className="py-2.5 px-4 w-1/2">Basic Function</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.oxidizationGuide.equipmentTable.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                          <td className="py-2.5 px-4 font-bold text-slate-900">
                            {item.equipment}
                          </td>
                          <td className="py-2.5 px-4 text-slate-700">
                            {item.function}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Typical Operating Principle */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-5">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Typical Operating Principle
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {product.oxidizationGuide.operatingPrinciples.map((step, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-2xs">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Oxidized Bitumen Grades & Applications */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  Common Oxidized Bitumen Grades & Applications
                </h3>
                <p className="text-sm text-slate-700">
                  {product.oxidizationGuide.gradesIntro}
                </p>
              </div>

              {/* Grades Table */}
              <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold uppercase tracking-wider">
                        <th className="py-3 px-4">Grade</th>
                        <th className="py-3 px-4">Typical Characteristics</th>
                        <th className="py-3 px-4">Main Applications</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.oxidizationGuide.gradesTable.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                          <td className="py-3 px-4 font-mono font-bold text-red-600 whitespace-nowrap">
                            {row.grade}
                          </td>
                          <td className="py-3 px-4 text-slate-800 font-medium">
                            {row.characteristics}
                          </td>
                          <td className="py-3 px-4 text-slate-700">
                            {row.applications}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 italic">
                {product.oxidizationGuide.gradesCitation}
              </p>
            </div>

            {/* Major Applications */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Major Applications
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.oxidizationGuide.majorApplications.map((app, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-3">
                    <div className="space-y-2.5">
                      <h4 className="font-bold text-sm sm:text-base text-slate-900 border-b border-slate-100 pb-2">
                        {app.title}
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                        {app.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5">
                            <span className="text-red-500 font-bold">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {app.citation && (
                      <p className="text-2xs text-slate-500 pt-2 border-t border-slate-100 italic">
                        {app.citation}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Simple Plant Concept & Important Engineering Consideration */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Simple Plant Concept & Layout
                </h3>
              </div>

              {/* Concept Diagram */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Simple Plant Concept Flow
                </span>
                <div className="p-6 bg-slate-950 text-emerald-400 rounded-xl font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 leading-tight">
                  <pre className="whitespace-pre">{product.oxidizationGuide.plantConceptDiagram}</pre>
                </div>
              </div>

              {/* Design Point Warning & Atlas Engineering Commercial Consultation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-2">
                  <div className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-amber-600" /> Operational Design Parameter
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {product.oxidizationGuide.importantNote}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900 text-white space-y-2">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-red-400" /> Atlas Engineering Capability
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                    {product.oxidizationGuide.summaryNote}
                  </p>
                </div>
              </div>

              {/* Direct Enquiry Box for Oxidization Plant */}
              <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-red-200 shadow-sm space-y-4 max-w-3xl">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    Enquire About {product.name}
                  </h4>
                  <p className="text-sm text-slate-600">
                    Send a fast message to our engineering team regarding Bitumen Air Blowing Oxidization Plant technical specifications and commercial quotation.
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
                        type="tel"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="Phone / WhatsApp *"
                        className="px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg outline-none focus:ring-1 focus:ring-red-600"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={inquiryCompany}
                        onChange={(e) => setInquiryCompany(e.target.value)}
                        placeholder="Company Name"
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
        </section>
      )}

      {/* Cold Mix Asphalt Complete Technical Guide */}
      {product.coldMixGuide && (
        <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header & Intro */}
            <div>
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider block mb-2">
                ROAD MAINTENANCE & REPAIR SPECIFICATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                Cold Mix Asphalt & Monsoon Pothole Repair Technical Guide
              </h2>
              <p className="text-base text-slate-700 max-w-4xl leading-relaxed whitespace-pre-line font-medium">
                {product.coldMixGuide.intro}
              </p>
            </div>

            {/* Main Equipment & Production Process */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Main Equipment Table */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-xl font-black text-slate-900">
                    Main Equipment
                  </h3>
                </div>
                <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold uppercase tracking-wider">
                        <th className="py-2.5 px-3 w-1/2">Equipment</th>
                        <th className="py-2.5 px-3 w-1/2">Function</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.coldMixGuide.equipmentTable.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                          <td className="py-2.5 px-3 font-bold text-slate-900">
                            {item.equipment}
                          </td>
                          <td className="py-2.5 px-3 text-slate-700">
                            {item.function}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Typical Cold-Mix Production */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-xl font-black text-slate-900">
                    Typical Cold-Mix Production
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {product.coldMixGuide.productionSteps.map((step, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200 flex items-start gap-2.5 shadow-2xs">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-600 italic bg-amber-50/60 p-3 rounded-lg border border-amber-200">
                  {product.coldMixGuide.productionNote}
                </p>
              </div>

            </div>

            {/* Types of Cold Mix / Grades and Applications */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  Types of Cold Mix / Grades and Applications
                </h3>
                <p className="text-sm text-slate-700">
                  {product.coldMixGuide.gradesIntro}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 font-bold uppercase tracking-wider">
                        <th className="py-3 px-4">Cold Mix Type</th>
                        <th className="py-3 px-4">Typical Binder / Emulsion</th>
                        <th className="py-3 px-4">Main Application</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.coldMixGuide.typesTable.map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                          <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">
                            {row.type}
                          </td>
                          <td className="py-3 px-4 font-mono font-medium text-red-600">
                            {row.binder}
                          </td>
                          <td className="py-3 px-4 text-slate-700">
                            {row.application}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Emulsion Grades Commonly Used */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  Emulsion Grades Commonly Used
                </h3>
                <p className="text-sm text-slate-700">
                  {product.coldMixGuide.emulsionGradesIntro}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.coldMixGuide.emulsionGrades.map((eg, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-base text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                        {eg.grade}
                      </span>
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        {eg.title}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {eg.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-xs sm:text-sm text-blue-950 flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">Best Configuration for Monsoon Pothole Repair</span>
                  <span>{product.coldMixGuide.configurationNote}</span>
                </div>
              </div>
            </div>

            {/* Major Advantages & Atlas Engineering Summary */}
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-xs space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Major Advantages of Cold Mix Technology
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {product.coldMixGuide.advantages.map((adv, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-2xs text-xs sm:text-sm text-slate-800 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{adv}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-2">
                  <div className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-amber-600" /> IRC / PMGSY Guidance
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {product.coldMixGuide.ircCitation}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900 text-white space-y-2">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-red-400" /> Atlas Engineering System
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                    {product.coldMixGuide.websiteSummary}
                  </p>
                </div>
              </div>

              {/* Direct Enquiry Box for Cold Mix Asphalt Plant */}
              <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-red-200 shadow-sm space-y-4 max-w-3xl">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    Enquire About {product.name}
                  </h4>
                  <p className="text-sm text-slate-600">
                    Send a fast message to our engineering team regarding Cold Mix Asphalt Plant technical specifications and commercial quotation.
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
                        type="tel"
                        required
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        placeholder="Phone / WhatsApp *"
                        className="px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg outline-none focus:ring-1 focus:ring-red-600"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={inquiryCompany}
                        onChange={(e) => setInquiryCompany(e.target.value)}
                        placeholder="Company Name"
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
        </section>
      )}

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
