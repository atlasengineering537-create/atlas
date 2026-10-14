import React from 'react';
import { AtlasLogo } from './AtlasLogo';
import { useRouter } from '../context/RouterContext';
import { PRODUCT_CATEGORIES, COMPANY_INFO } from '../data/products';
import makeInIndiaLogo from '../assets/images/make_in_india_logo.png';
import msmeLogo from '../assets/images/msme_logo.png';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, Factory } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, openQuoteModal } = useRouter();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => navigate('/')} className="text-left focus:outline-none">
              <AtlasLogo className="py-1" variant="full" />
            </button>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md pt-2">
              Since 1997, Atlas Engineering has been a trusted pioneer in manufacturing high-performance bitumen modification and road construction equipment. Driven by nearly three decades of industry expertise, we design and build cutting-edge machinery that powers critical infrastructure projects across India and around the globe.
            </p>
            {/* Government Accreditations */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Make in India Badge */}
              <div 
                className="inline-flex items-center justify-center p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                title="Make In India - Indigenous Heavy Engineering"
              >
                <img
                  src={makeInIndiaLogo}
                  alt="Make In India"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>

              {/* MSME Registered Badge */}
              <div 
                className="inline-flex items-center justify-center p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                title="MSME Registered Enterprise - Ministry of MSME, Govt. of India"
              >
                <img
                  src={msmeLogo}
                  alt="MSME Registered Enterprise"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
            </div>
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

        {/* Bottom Bar: Copyright, Compliance & Web Partner Credits */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p className="text-center lg:text-left">
            © 1997–{new Date().getFullYear()} ATLAS ENGINEERING. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm">
            <span>Contact Person: {COMPANY_INFO.contactPerson}</span>
            <span className="hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-1 text-slate-600">
              Website Designed &amp; Developed by{' '}
              <a
                href="https://www.vibratseo.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-800 hover:text-red-600 underline underline-offset-2 transition-colors"
                title="Vibrat SEO - Web Development & SEO Agency"
              >
                Vibrat SEO
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
