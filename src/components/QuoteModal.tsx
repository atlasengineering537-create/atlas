import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { X, CheckCircle2, Send, PhoneCall, ShieldCheck } from 'lucide-react';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES, COMPANY_INFO } from '../data/products';

export const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal, selectedQuoteProduct } = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    capacity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedQuoteProduct) {
      setFormData((prev) => ({ ...prev, product: selectedQuoteProduct }));
    }
  }, [selectedQuoteProduct]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/contact@atlasbitumenplant.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          product: formData.product || selectedQuoteProduct || 'Machinery',
          capacity: formData.capacity,
          message: formData.message,
          _subject: `Quotation Request: ${formData.product || selectedQuoteProduct || 'Machinery'} - ${formData.name}`,
        }),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      product: '',
      capacity: '',
      message: '',
    });
    closeQuoteModal();
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Atlas Engineering, I would like to request an official quotation:\nName: ${formData.name || 'Not provided'}\nCompany: ${formData.company || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nProduct: ${formData.product || selectedQuoteProduct || 'Machinery'}\nMessage: ${formData.message || 'Please send technical quotation.'}`
    );
    window.open(`https://wa.me/919825073095?text=${text}`, '_blank');
  };

  if (!isQuoteModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-8">
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase text-red-500 block mb-0.5">
              ATLAS ENGINEERING · AHMEDABAD
            </span>
            <h3 className="text-xl font-black tracking-tight text-white">
              Request an Official Technical Quotation
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-120px)]">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">
                Quotation Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{formData.name || 'valued customer'}</span>. Our senior engineering team in Kathwada GIDC, Ahmedabad will review your inquiry and provide a custom proposal.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Chat Immediately on WhatsApp</span>
                </button>
                <button
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Direct Factory Quotation · Certified MSME Manufacturer</span>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                  className="font-bold text-red-600 hover:text-red-700 flex items-center gap-1 shrink-0"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.phones[0]}</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Patel"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91..."
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company or Contractor Name"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Machinery / Equipment
                  </label>
                  <select
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none bg-white font-medium"
                  >
                    <option value="">Select Equipment...</option>
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <optgroup key={cat.id} label={`── ${cat.name.toUpperCase()} ──`}>
                        {ALL_PRODUCTS.filter((p) => p.categoryId === cat.id).map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Target Capacity / Specification
                  </label>
                  <input
                    type="text"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    placeholder="e.g. 10 TPH, 120 TPH, 50 MT"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Project Details / Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project location, timeline, or required specifications..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#DE1F27] hover:bg-[#B91C1C] disabled:bg-slate-400 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending to contact@atlasbitumenplant.com...' : 'Submit Technical Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
