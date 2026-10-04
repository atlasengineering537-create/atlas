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
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider block">
                      Works & Head Office
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Kathwada GIDC Manufacturing Facility
                    </h3>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-13">
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
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider block">
                      Direct Sales & Support Lines
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Telephone Numbers
                    </h3>
                  </div>
                </div>
                <div className="pl-13 space-y-2 text-xs sm:text-sm">
                  {COMPANY_INFO.phones.map((phone, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="font-mono tabular-nums font-semibold text-slate-800 hover:text-red-600"
                      >
                        {phone}
                      </a>
                      <span className="text-[11px] text-slate-400">
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
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider block">
                      Electronic Mail
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      Official Inquiries
                    </h3>
                  </div>
                </div>
                <div className="pl-13 space-y-1.5 text-xs sm:text-sm">
                  {COMPANY_INFO.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block font-medium text-slate-800 hover:text-red-600"
                    >
                      {email}
                    </a>
                  ))}
                  <div className="pt-2 text-xs text-slate-500">
                    <strong>Contact Person:</strong> {COMPANY_INFO.contactPerson}
                  </div>
                </div>
              </div>

            </div>

            {/* Right 7 cols: Interactive Machinery Inquiry Form */}
            <div className="lg:col-span-7 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                ONLINE INQUIRY
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Send a Message to Atlas Engineering
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Provide your project requirements below. Our technical department will respond promptly with machinery proposals and technical data.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4 bg-white rounded-xl border border-slate-200 p-6">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Message Submitted</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
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
                    className="px-5 py-2 bg-[#DE1F27] text-white text-xs font-bold rounded-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anil Kumar"
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Infra Contractors"
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91..."
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="engineer@company.com"
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Country / Location
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Equipment Category / Model
                      </label>
                      <select
                        value={formData.equipment}
                        onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none bg-white"
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Message & Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your technical capacity, required throughput, delivery timeline or site conditions..."
                      className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-[#DE1F27] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
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

      {/* Google Maps / Location Visual Section */}
      <section className="py-14 sm:py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                FACILITY LOCATION
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Manufacturing Works in Kathwada GIDC, Ahmedabad
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Kathwada+GIDC+Ahmedabad+Gujarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700"
            >
              Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Styled Map View Placeholder */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-500">
                  <Navigation className="w-3.5 h-3.5 text-red-600" />
                  <span>GPS: Kathwada GIDC Industrial Area, Ahmedabad (382430)</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Plot No. 397-398, Road No. 9
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Located in Ahmedabad's prime GIDC engineering zone with convenient connectivity to the Ahmedabad Ring Road, National Highway 48, and major freight corridors for heavy transport trailers.
                </p>
                
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://maps.google.com/?q=Kathwada+GIDC+Ahmedabad+Gujarat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg inline-flex items-center gap-1.5"
                  >
                    <span>Get Driving Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="tel:+919825073095"
                    className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold rounded-lg"
                  >
                    Call for Directions
                  </a>
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
                    <Building className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-sm text-slate-900">
                    Atlas Engineering Works
                  </div>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Plot No. 397-398, Road No. 9, Kathwada GIDC, Ahmedabad-382430, Gujarat, India
                  </p>
                  <div className="pt-1 text-[11px] text-slate-400 font-mono">
                    Working Hours: Mon – Sat (9:00 AM – 6:30 PM IST)
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
