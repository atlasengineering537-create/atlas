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

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          phone: formData.phone,
          email: formData.email,
          company: formData.company,
          equipment: formData.equipment || 'General Inquiry',
          message: formData.message,
          _subject: `New Factory Inquiry: ${formData.equipment || 'General'} - ${formData.name}`,
        }),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(
      `Hello Atlas Engineering, I would like to inquire regarding:\nName: ${formData.name || 'Not provided'}\nCompany: ${formData.company || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nEquipment: ${formData.equipment || 'General Inquiry'}\nMessage: ${formData.message || 'Please contact me.'}`
    );
    window.open(`https://wa.me/919825073095?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-14 sm:py-18 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-2">
            DIRECT FACTORY COMMUNICATION
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Contact Atlas Engineering
          </h1>
          <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed">
            Get in touch directly with our manufacturing works in Kathwada GIDC, Ahmedabad for custom machinery proposals, technical specifications, and site installations.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                  OFFICIAL FACTORY ADDRESS
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Manufacturing Facility
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Heavy equipment fabrication, assembly, and testing facility in Ahmedabad industrial belt.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-0.5">
                      Works &amp; Office
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2},<br />
                      {COMPANY_INFO.address.city} - {COMPANY_INFO.address.pincode}, {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <User className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-0.5">
                      Key Contact Person
                    </h4>
                    <p className="text-sm text-slate-800 font-bold">
                      {COMPANY_INFO.contactPerson}
                    </p>
                    <p className="text-xs text-slate-500">Managing Director / Technical Head</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Phone className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                      Direct Phone Lines
                    </h4>
                    <div className="space-y-1 text-sm font-semibold text-slate-800">
                      {COMPANY_INFO.phones.map((phone, idx) => (
                        <div key={idx}>
                          <a
                            href={`tel:${phone.replace(/\s+/g, '')}`}
                            className="hover:text-red-600 transition-colors"
                          >
                            {phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Mail className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                      Email Communication
                    </h4>
                    <div className="space-y-1">
                      {COMPANY_INFO.emails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="block text-sm font-semibold text-slate-800 hover:text-red-600 transition-colors"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Clock className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-0.5">
                      Operating Hours
                    </h4>
                    <p className="text-sm text-slate-700">
                      Monday to Saturday: 9:00 AM – 7:00 PM (IST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                  DIRECT ENQUIRY FORM
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                  Send Technical Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Fill in your requirements below for custom capacity, layout engineering, or tender specifications.
                </p>

                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900">
                      Inquiry Sent Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                      Thank you for contacting Atlas Engineering. Sunil L. Mistry or an engineering specialist will reach out shortly.
                    </p>
                    <button
                      onClick={handleWhatsAppContact}
                      className="px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-lg shadow inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>Continue via WhatsApp</span>
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
                          placeholder="Your full name"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Company / Contractor Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company name"
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
                          placeholder="+91..."
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
                        Project Location, Capacity or Requirements
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Specify required capacity (TPH / MT), site location, timeline..."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[#DE1F27] hover:bg-[#B91C1C] disabled:bg-slate-400 text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending to contact@atlasbitumenplant.com...' : 'Send Factory Inquiry'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
