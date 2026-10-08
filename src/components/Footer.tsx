import React from 'react';
import { AtlasLogo } from './AtlasLogo';
import { useRouter } from '../context/RouterContext';
import { PRODUCT_CATEGORIES, COMPANY_INFO } from '../data/products';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Factory } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, openQuoteModal } = useRouter();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-700">
      {/* Pre-footer Callout Banner (Light Industrial Theme) */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-50/70 via-slate-50 to-white border border-red-100">
            <div className="max-w-2xl">
              <span className="text-sm font-bold uppercase tracking-wider text-red-600 block mb-1">
                Engineering Consultation & Machinery Quotes
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Planning an Infrastructure Project or Plant Upgrade?
              </h3>
              <p className="text-base text-slate-600 mt-1.5">
                Our seasoned engineering team in Ahmedabad assists contractors and government infrastructure developers with custom machinery configurations.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => openQuoteModal()}
                className="px-6 py-3 text-base font-bold text-white bg-[#DE1F27] hover:bg-[#B91C1C] rounded-lg shadow-sm hover:shadow transition-all"
              >
                Request a Quote
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-5 py-3 text-base font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-all"
              >
                Contact Factory
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => navigate('/')} className="text-left focus:outline-none">
              <AtlasLogo className="h-10" variant="full" />
            </button>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md pt-2">
              Since 1997, Atlas Engineering has been a trusted pioneer in manufacturing high-performance bitumen modification and road construction equipment. Driven by nearly three decades of industry expertise, we design and build cutting-edge machinery that powers critical infrastructure projects across India and around the globe.
            </p>
            <div className="flex items-center gap-6 pt-2 text-sm text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-600" /> Since 1997
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Factory className="w-4 h-4 text-red-600" /> Kathwada GIDC Facility
              </span>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-base">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-red-600 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/about')}
                  className="hover:text-red-600 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/products')}
                  className="hover:text-red-600 transition-colors"
                >
                  All Products Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contact')}
                  className="hover:text-red-600 transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => openQuoteModal()}
                  className="hover:text-red-600 transition-colors font-medium text-red-700"
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Product Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Equipment Categories
            </h4>
            <ul className="space-y-2.5 text-base">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => navigate(`/products/${cat.slug}`)}
                    className="hover:text-red-600 transition-colors text-left group flex items-center justify-between w-full"
                  >
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Verified Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Manufacturing Works
            </h4>
            <div className="space-y-3 text-sm text-slate-800">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-semibold text-slate-800">
                  {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.city}-{COMPANY_INFO.address.pincode}, {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="font-mono tabular-nums space-y-1 font-semibold text-slate-800">
                  {COMPANY_INFO.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s+/g, '')}`} className="block hover:text-red-600">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="space-y-1 font-semibold text-slate-800">
                  {COMPANY_INFO.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block hover:text-red-600">
                      {e}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © 1997–{new Date().getFullYear()} ATLAS ENGINEERING. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Kathwada GIDC, Ahmedabad, Gujarat, India</span>
            <span>·</span>
            <span>Contact Person: {COMPANY_INFO.contactPerson}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
