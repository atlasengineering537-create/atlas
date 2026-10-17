import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_INFO, ALL_PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  User,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Atlas Engineering - Kathwada GIDC, Ahmedabad';
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://www.atlasbitumenplant.com/contact';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    equipment: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact & Factory Location' }]} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">
            HEADQUARTERS &amp; WORKS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Contact Atlas Engineering
          </h1>
          <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Reach our manufacturing headquarters at Kathwada GIDC, Ahmedabad for machinery quotations, technical specifications, and factory visits.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 5 cols: Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                  DIRECT FACTORY CONTACT
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Get in Touch Directly
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Our senior engineering and technical sales specialists are available to consult on your highway paving and plant setup requirements.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Factory Address */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Manufacturing Works</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {COMPANY_INFO.address.fullFormatted}
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Direct Phone &amp; Sales</h3>
                    <div className="mt-1 space-y-1 text-xs sm:text-sm font-semibold text-slate-800">
                      {COMPANY_INFO.phones.map((p) => (
                        <a key={p} href={`tel:${p.replace(/\s+/g, '')}`} className="block hover:text-red-600">
                          {p}
                        </a>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-slate-500 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>Contact Person: <strong>{COMPANY_INFO.contactPerson}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Official Email */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Official Inquiries</h3>
                    <div className="mt-1 space-y-1 text-xs sm:text-sm font-semibold text-slate-800">
                      {COMPANY_INFO.emails.map((e) => (
                        <a key={e} href={`mailto:${e}`} className="block hover:text-red-600">
                          {e}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Factory Operational Hours</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Monday – Saturday: 9:00 AM – 7:00 PM (IST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 cols: Interactive Machinery Inquiry Form */}
            <div className="lg:col-span-7 bg-slate-50/70 p-6 sm:p-10 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                ONLINE INQUIRY
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Send Equipment Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
                Fill in your equipment requirements below and our engineering team will respond within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-3 bg-white rounded-xl border border-slate-200 p-6">
                  <div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Inquiry Received</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you. We will contact you with equipment specifications and pricing shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-5 py-2 text-xs font-bold text-red-600 border border-red-200 hover:bg-red-50 rounded-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company or Contractor Name"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none bg-white"
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
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Machinery of Interest
                    </label>
                    <select
                      value={formData.equipment}
                      onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none bg-white font-medium"
                    >
                      <option value="">-- Select Machinery / Equipment --</option>
                      {PRODUCT_CATEGORIES.map((cat) => (
                        <optgroup key={cat.id} label={`── ${cat.name.toUpperCase()} ──`}>
                          {ALL_PRODUCTS.filter((p) => p.categoryId === cat.id).map((p) => (
                            <option key={p.id} value={p.name}>
                              {p.name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                      <optgroup label="── OTHER CONSULTATION ──">
                        <option value="General Machinery Consultation">General Machinery Consultation</option>
                        <option value="Complete Road Project Package">Complete Road Project Package</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Details / Requirement Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your required capacity, project timeline, or specific customizations needed..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#DE1F27] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> Submit Inquiry Directly to Factory
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
