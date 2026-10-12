import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_INFO, PRODUCT_CATEGORIES, ALL_PRODUCTS } from '../data/products';
import {
  MapPin,
  Phone,
  Mail,
  User,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Building,
  Navigation,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    country: 'India',
    equipment: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb Header Bar */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
        </div>
      </div>

      {/* Page Hero */}
      <section className="py-12 sm:py-16 border-b border-slate-200 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
              CONNECT WITH ATLAS ENGINEERING
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Contact Works & Engineering Sales
            </h1>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Reach our manufacturing headquarters at Kathwada GIDC, Ahmedabad for machinery quotations, technical specifications, and factory visits.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards & Form Grid */}
      <section className="py-14 sm:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 5 cols: Verified Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Works & Factory Address */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      Works & Head Office
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Kathwada GIDC Manufacturing Facility
                    </h3>
                  </div>
                </div>
                <div className="text-sm sm:text-base text-slate-600 leading-relaxed pl-13">
                  <p className="font-semibold text-slate-900">{COMPANY_INFO.name}</p>
                  <p>{COMPANY_INFO.address.line1}</p>
                  <p>{COMPANY_INFO.address.line2}</p>
                  <p>
                    {COMPANY_INFO.address.city} - {COMPANY_INFO.address.pincode}
                  </p>
                  <p className="font-semibold text-slate-800">
                    {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
                  </p>
                </div>
              </div>

              {/* Direct Phone Lines */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      Direct Sales & Support Lines
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Telephone Numbers
                    </h3>
                  </div>
                </div>
                <div className="pl-13 space-y-2 text-sm sm:text-base">
                  {COMPANY_INFO.phones.map((phone, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="font-mono tabular-nums font-semibold text-slate-800 hover:text-red-600"
                      >
                        {phone}
                      </a>
                      <span className="text-xs text-slate-400">
                        {i === 0 ? 'Primary' : i === 1 ? 'Technical' : 'General'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Emails & Leadership */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                      Electronic Mail
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Official Inquiries
                    </h3>
                  </div>
                </div>
                <div className="pl-13 space-y-2 text-sm sm:text-base">
                  {COMPANY_INFO.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block font-medium text-slate-800 hover:text-red-600"
                    >
                      {email}
                    </a>
                  ))}
                  <div className="pt-2 text-sm text-slate-500">
                    <strong>Contact Person:</strong> {COMPANY_INFO.contactPerson}
                  </div>
                </div>
              </div>

            </div>

            {/* Right 7 cols: Interactive Machinery Inquiry Form */}
            <div className="lg:col-span-7 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200">
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider block mb-1">
                ONLINE INQUIRY
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Send a Message to Atlas Engineering
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Provide your project requirements below. Our technical department will respond promptly with machinery proposals and technical data.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4 bg-white rounded-xl border border-slate-200 p-6">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Message Submitted</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you. We have received your inquiry and will connect with your engineering team shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        phone: '',
                        email: '',
                        country: 'India',
                        equipment: '',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 bg-[#DE1F27] text-white text-sm font-bold rounded-lg cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anil Kumar"
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        Company Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Infra Contractors"
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91..."
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="engineer@company.com"
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        Country / Location
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        Equipment Category / Model
                      </label>
                      <select
                        value={formData.equipment}
                        onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none bg-white"
                      >
                        <option value="">Select Equipment</option>
                        {PRODUCT_CATEGORIES.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      Project Message & Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your technical capacity, required throughput, delivery timeline or site conditions..."
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-[#DE1F27] hover:bg-[#B91C1C] text-white text-sm sm:text-base font-bold rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? 'Sending Enquiry...' : 'Submit Technical Enquiry'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps / Facility Location Section */}
      <section className="py-14 sm:py-16 bg-slate-50/50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                FACILITY LOCATION & FACTORY VISIT
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Manufacturing Works in Kathwada GIDC, Ahmedabad
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Plot No. 397-398, Road No. 9 Corner, Kathwada GIDC Industrial Area, Ahmedabad-382430, Gujarat, India
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://www.google.com/maps?q=23.03368,72.68170"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#DE1F27] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="tel:+919825073095"
                className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs sm:text-sm font-bold rounded-lg shadow-2xs inline-flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>Call Works</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Container */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md relative">
            <div className="w-full h-[400px] sm:h-[480px] lg:h-[520px] relative bg-slate-100">
              <iframe
                title="Atlas Engineering Manufacturing Facility Location on Google Maps - Main Rd & Road No. 9 Corner, Kathwada GIDC"
                src="https://maps.google.com/maps?q=23.03368,72.68170&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Quick Information Bar under the Map */}
            <div className="p-4 sm:p-6 bg-white border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Works Address</div>
                  <div className="text-slate-600 mt-0.5 leading-relaxed">
                    Plot No. 397-398, Main Rd & Road No. 9 Corner, Kathwada GIDC, Ahmedabad-382430
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Navigation className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">GPS Coordinates</div>
                  <div className="text-slate-600 mt-0.5 font-mono">
                    23.0337° N, 72.6817° E (Main Rd & Road No. 9 Corner, Kathwada GIDC)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Working Hours</div>
                  <div className="text-slate-600 mt-0.5">
                    Monday to Saturday: 9:00 AM – 6:30 PM IST
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
