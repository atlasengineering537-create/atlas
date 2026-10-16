import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/products';
import { AtlasLogo } from '../components/AtlasLogo';
import makeInIndiaLogo from '../assets/images/make_in_india_logo.png';
import msmeLogo from '../assets/images/msme_logo.png';
import {
  ShieldCheck,
  Award,
  Factory,
  CheckCircle2,
  Users,
  Wrench,
  Globe2,
  Phone,
  ArrowRight,
  Shield,
  Cog,
  Headphones,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate, openQuoteModal } = useRouter();

  const whyChooseIcons = [Shield, Cog, Wrench, Globe2, Headphones];

  return (
    <div className="bg-white">
      {/* Breadcrumb Header Bar */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-14 sm:py-20 border-b border-slate-200 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
              ABOUT ATLAS ENGINEERING
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Engineering Experience. Built for Infrastructure.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Since 1997, Atlas Engineering has been a trusted pioneer in manufacturing high-performance bitumen modification and road construction equipment. Driven by nearly three decades of industry expertise, we design and build cutting-edge machinery that powers critical infrastructure projects across India and around the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage & Manufacturing Works Split */}
      <section className="py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Assembly Works / Company Logo */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white p-6 sm:p-10 flex items-center justify-center aspect-[4/3]">
                <AtlasLogo size="large" variant="full" />
              </div>

              {/* Verified Factory Card */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">Manufacturing Works</div>
                  <div className="text-slate-500">Plot No. 397-398, Road No. 9 Corner, Kathwada GIDC, Ahmedabad</div>
                </div>
                <div className="font-mono text-red-600 font-bold">Gujarat, India</div>
              </div>
            </div>

            {/* Our Story Content */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                OUR HERITAGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Our Story: Engineering Pioneers Since 1997
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Founded in 1997 in Ahmedabad, Gujarat—one of India's prominent engineering and manufacturing hubs—Atlas Engineering set out with a clear mandate: to design and build rugged, high-precision road and civil construction machinery capable of delivering uncompromised performance under severe site conditions.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Over nearly three decades, our engineering division has specialized in advanced bitumen modification solutions including polymer modified bitumen (PMB) systems, drum decanters, emulsion plants, asphalt equipment, and concrete machinery.
              </p>

              <div className="p-4 rounded-xl bg-red-50/50 border border-red-200 text-xs text-slate-700 leading-relaxed font-medium">
                "Our growth has been built on strong client relationships and word-of-mouth referrals. We remain committed to setting higher standards in road construction technology and look forward to being your reliable partner for years to come."
              </div>

              <div className="pt-2 flex items-center gap-6 text-xs text-slate-500">
                <div>
                  <span className="font-bold text-slate-900 block text-sm">Sunil L. Mistry</span>
                  <span>Contact Person & Leadership</span>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <span className="font-bold text-slate-900 block text-sm font-mono tabular-nums">28+ Years</span>
                  <span>Continuous Operation</span>
                </div>
              </div>

              {/* Official Government Accreditations */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors" title="Make In India - Heavy Machinery">
                  <img
                    src={makeInIndiaLogo}
                    alt="Make In India"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors" title="MSME Registered Enterprise - Ministry of MSME, Govt. of India">
                  <img
                    src={msmeLogo}
                    alt="MSME Registered Enterprise"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us: Complete 5 Pillars */}
      <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
              BENCHMARK EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Why Choose Atlas Engineering
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The fundamental engineering pillars that drive our machinery design, fabrication, and partnership with road contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.whyChooseUs.map((pillar, idx) => {
              const Icon = whyChooseIcons[idx] || Shield;
              return (
                <div
                  key={pillar.index}
                  className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-red-600">
                      PILLAR {pillar.index}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}

            {/* Client Partnership Commitment Box */}
            <div className="p-6 rounded-xl border border-red-200 bg-gradient-to-br from-red-50/80 to-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                  OUR COMMITMENT
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Long-Term Equipment Partnership
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We look forward to being your reliable partner across multiple project lifecycles, ensuring comprehensive technical support from first installation onwards.
                </p>
              </div>
              <button
                onClick={() => openQuoteModal()}
                className="mt-4 w-full py-2.5 bg-[#DE1F27] hover:bg-[#B91C1C] text-white text-xs font-bold rounded-lg transition-colors"
              >
                Request Consultation
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Sections: Engineering Excellence, Quality & Reliability, Global Reach, After-Sales Support */}
      <section className="py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Engineering Excellence */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                INNOVATION & DESIGN
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Engineering Excellence
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our design office develops machinery specifically configured for Indian and international infrastructure job-sites. Every unit undergoes structural FEA stress considerations, rigorous component matching, and thermal loss minimization to deliver maximum throughput with minimum fuel expenditure.
              </p>
            </div>
            <div className="lg:col-span-5 p-5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
              <div className="font-bold text-slate-900">Engineering Benchmarks:</div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>Heavy-gauge prime steel fabrication</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>Precision machined drive components and bearings</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>High-efficiency burner and thermal coil designs</span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100" />

          {/* Quality & Reliability */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 p-5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
              <div className="font-bold text-slate-900">Site Reliability Mandate:</div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>Zero tolerance for premature component wear</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>Pre-shipment trial runs on all hydraulic and mechanical systems</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>Proven in severe dust, high-ambient heat, and non-stop shifts</span>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-3">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                MANUFACTURING RIGOUR
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Quality & Reliability
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Road construction projects cannot afford unpredicted machine downtime during peak paving windows. Built with top-grade components and supervised by seasoned engineers, Atlas equipment ensures consistent uptime under the toughest site conditions.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100" />

          {/* Global Reach & After-Sales Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-wider mb-2">
                <Globe2 className="w-4 h-4" /> Global Footprint
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Powering National & International Corridors
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Atlas equipment has supported major national expressways, state highway expansions, and global infrastructure developments with machinery engineered to comply with strict highway authority specifications.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-wider mb-2">
                <Headphones className="w-4 h-4" /> Dedicated After-Sales Support
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Support that Builds Long-Term Partners
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Outstanding customer service, genuine replacement parts availability, and hands-on commissioning assistance turn first-time buyers into lifelong partners.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Work with an Established Machinery Manufacturer
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Contact Sunil L. Mistry and the engineering team at our Kathwada GIDC facility in Ahmedabad.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-3 bg-[#DE1F27] hover:bg-[#B91C1C] text-white font-bold text-xs sm:text-sm rounded-lg shadow-sm transition-all"
            >
              Request a Quote
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm rounded-lg transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
