import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { X, CheckCircle2, Send, PhoneCall, ShieldCheck } from 'lucide-react';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES, COMPANY_INFO } from '../data/products';

export const QuoteModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal, selectedQuoteProduct } = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    product: '',
    capacity: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedQuoteProduct) {
      setFormData((prev) => ({ ...prev, product: selectedQuoteProduct }));
    }
  }, [selectedQuoteProduct]);

  if (!isQuoteModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      product: '',
      capacity: '',
      message: '',
    });
    closeQuoteModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase block">
              ATLAS ENGINEERING
            </span>
            <h3 className="text-lg font-black tracking-tight">
              Request Machinery Specification &amp; Quotation
            </h3>
          </div>
          <button
            onClick={closeQuoteModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">
                Inquiry Successfully Transmitted
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for contacting Atlas Engineering. Our engineering division will review your machinery requirements for <strong>{formData.product || 'your equipment request'}</strong> and respond with technical specifications and commercial terms promptly.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-xs text-slate-600 space-y-1 text-left">
                <div className="font-semibold text-slate-900">Kathwada GIDC Sales &amp; Technical Support:</div>
                <div>Phone: +91 98250 73095 / +91 91736 72311</div>
                <div>Email: atlasengineering@ymail.com</div>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#DE1F27] hover:bg-[#B91C1C] text-white font-bold text-sm rounded-lg"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
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
                    placeholder="e.g. 15 TPH, 100 TPH, Custom"
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
                  placeholder="Share site location, production timeline, or specific engineering requirements..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct Factory Response from Ahmedabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={closeQuoteModal}
                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#DE1F27] hover:bg-[#B91C1C] text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" /> Submit Inquiry
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
