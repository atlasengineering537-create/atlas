import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { TrustStrip } from '../components/TrustStrip';
import { CategoryCard } from '../components/CategoryCard';
import { ProductCard } from '../components/ProductCard';
import { GoogleReviews } from '../components/GoogleReviews';
import { Link } from '../components/Link';
import { PRODUCT_CATEGORIES, ALL_PRODUCTS, COMPANY_INFO } from '../data/products';
import aboutAtlasImg from '../assets/images/about_atlas_plant_drive.jpg';
import heroBanner1 from '../assets/images/hero_banner_1.png';
import heroBitumenModify from '../assets/images/hero_bitumen_modify.jpg';
import heroRoadConstruction from '../assets/images/hero_road_construction.png';
import heroCementConcrete from '../assets/images/hero_cement_concrete.jpg';
import catBitumenImg from '../assets/images/category_bitumen_equipment.jpg';
import makeInIndiaLogo from '../assets/images/make_in_india_logo.png';
import msmeLogo from '../assets/images/msme_logo.png';
import {
  ArrowRight,
  Shield,
  Cog,
  Wrench,
  Globe,
  Headphones,
  CheckCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Send,
  Sparkles,
  Cpu,
  Layers,
  PhoneCall,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, openQuoteModal } = useRouter();

  useEffect(() => {
    document.title = 'Atlas Engineering | Manufacturers of Road & Civil Construction Machinery';
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://www.atlasbitumenplant.com/';
  }, []);

  // Hero Carousel State & Slides (3 category slides with full category names)
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      image: heroBanner1,
      alt: 'Atlas Engineering Bitumen Modify Equipment',
      badge: 'Flagship Equipment',
      title: 'Bitumen Modify Equipment',
      description: 'High-Performance Bitumen Emulsion Plants, PMB/CRMB Units, Decanters, and Thermal Heating Systems.',
      categoryLink: '/categories/bitumen-modify-equipment',
      buttonText: 'Explore Bitumen Modify Equipment',
    },
    {
      image: heroRoadConstruction,
      alt: 'Atlas Engineering Road Construction Equipment',
      badge: 'Road Infrastructure',
      title: 'Road Construction Equipment',
      description: 'Asphalt Drum Mix Plants, Wet Mix Macadam (WMM) Systems, Paver Finishers & Bitumen Sprayers.',
      categoryLink: '/categories/road-construction-equipment',
      buttonText: 'Explore Road Construction Equipment',
    },
    {
      image: heroCementConcrete,
      alt: 'Atlas Engineering Cement Concrete Batching Plant',
      badge: 'Concrete Infrastructure',
      title: 'Cement Concrete Batching Plant',
      description: 'Heavy-Duty Cement Concrete Batching Plants and Mixing Solutions for Major Highway & Civil Projects.',
      categoryLink: '/products/cement-concrete-batching-plant',
      buttonText: 'Explore Cement Concrete Batching Plant',
    },
  ];

  // Manual slide navigation (auto-rotation disabled as requested)
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Selected featured products (2 from bitumen, 1 from road, 1 from cement)
  const featuredProducts = ALL_PRODUCTS.filter((p) => p.featured);

  // Quick Inline Lead Form state
  const [leadForm, setLeadForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLead(true);
    try {
      await fetch('https://formsubmit.co/ajax/contact@atlasbitumenplant.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: leadForm.name,
          company: leadForm.company,
          phone: leadForm.phone,
          email: leadForm.email,
          equipment: leadForm.product || 'Machinery Enquiry',
          message: leadForm.message || 'Homepage Lead Form Inquiry',
          _subject: `New Homepage Lead: ${leadForm.product || 'Machinery'} - ${leadForm.name} (${leadForm.company})`,
        }),
      });
    } catch (err) {
      console.error('Lead submission error:', err);
    } finally {
      setIsSubmittingLead(false);
      setFormSubmitted(true);
    }
  };

  const handleWhatsAppLead = () => {
    const text = encodeURIComponent(
      `Hello Atlas Engineering, I submitted an enquiry on your homepage:\nName: ${leadForm.name || 'Not provided'}\nCompany: ${leadForm.company || 'Not provided'}\nPhone: ${leadForm.phone || 'Not provided'}\nProduct: ${leadForm.product || 'Machinery'}\nMessage: ${leadForm.message || 'Please send technical quotation.'}`
    );
    window.open(`https://wa.me/919825073095?text=${text}`, '_blank');
  };

  const whyChooseIcons = [Shield, Cog, Wrench, Globe, Headphones];

  return (
    <div className="bg-white">
      
      {/* ==================================================
          SECTION 1 — HERO (ROTATING SLIDER / FARTU BANNER)
          Full-bleed natural machinery images with clean industrial title overlays
          ================================================== */}
      <section className="relative w-full h-[400px] sm:h-[480px] md:h-[560px] lg:h-[640px] overflow-hidden border-b border-slate-200 bg-slate-900">
        
        {/* Sliding Background Images & Content */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle gradient overlay to guarantee text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10 sm:bg-gradient-to-r sm:from-slate-950/85 sm:via-slate-950/40 sm:to-transparent" />

                {/* Banner Caption / Heading */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-8 lg:px-16">
                  <div className="max-w-7xl mx-auto w-full">
                    <div
                      className={`max-w-2xl text-white space-y-2 sm:space-y-3 transition-all duration-700 transform ${
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                    >
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#DE1F27] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow">
                        <span>{slide.badge}</span>
                      </div>

                      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-md leading-tight">
                        {slide.title}
                      </h1>

                      <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3">
                        <Link
                          to={slide.categoryLink}
                          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-[#DE1F27] hover:bg-[#B91C1C] text-white font-bold text-xs sm:text-sm shadow transition-all"
                        >
                          <span>{slide.buttonText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => openQuoteModal(slide.title)}
                          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-white/95 hover:bg-white text-slate-900 font-bold text-xs sm:text-sm shadow backdrop-blur-xs transition-all cursor-pointer"
                        >
                          <span>Get a Quote</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Side Navigation Arrows (Manual Control) */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-slate-900/40 hover:bg-slate-900/80 text-white border border-white/20 shadow-lg backdrop-blur-xs transition-all cursor-pointer hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-slate-900/40 hover:bg-slate-900/80 text-white border border-white/20 shadow-lg backdrop-blur-xs transition-all cursor-pointer hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Carousel Navigation Bar (Left/Right Arrows & Dots) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-lg">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="p-1 rounded-full text-slate-700 hover:text-red-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-1.5">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === idx
                    ? 'w-6 h-2 bg-[#DE1F27]'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="p-1 rounded-full text-slate-700 hover:text-red-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      {/* ==================================================
          SECTION 2 — TRUST / EXPERIENCE STRIP
          ================================================== */}
      <TrustStrip />

      {/* ==================================================
          SECTION 3 — ABOUT PREVIEW ON HOME
          ================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <img
                  src={aboutAtlasImg}
                  alt="About Atlas Engineering road machinery and equipment"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute -bottom-0 -right-0 bg-white/95 backdrop-blur-md p-4 rounded-tl-xl border-t border-l border-slate-200 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg font-display">
                      28+
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">
                        Years of Excellence
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Established 1997 in Ahmedabad
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest block">
                WELCOME TO ATLAS ENGINEERING
              </span>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                Nearly Three Decades of bitumen modify plants, Road Construction and Cement Concrete Batching Plant Manufacturer
              </h2>

              <p className="text-base text-slate-700 leading-relaxed font-medium">
                Based in Ahmedabad, Gujarat, Atlas Engineering has been a trusted pioneer in manufacturing high-performance bitumen Modified Plant, road construction equipment and concrete batching solutions since 1997. With nearly three decades of engineering expertise, we deliver robust, precise, and heavy-duty machinery designed to empower infrastructure development across India and globally.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Operating from our manufacturing facility in Kathwada GIDC, Ahmedabad, our engineering focus encompasses complete bitumen modification plants, heavy-duty asphalt plants, and precision concrete machinery crafted with seasoned engineering supervision.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 group"
                >
                  <span>Read More About Our Heritage</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center p-2 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors" title="Make In India">
                    <img src={makeInIndiaLogo} alt="Make In India" className="h-9 sm:h-11 w-auto object-contain" />
                  </div>
                  <div className="flex items-center justify-center p-2 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors" title="Ministry of MSME, Govt. of India">
                    <img src={msmeLogo} alt="MSME Registered Enterprise" className="h-9 sm:h-11 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4 — WHY CHOOSE ATLAS ENGINEERING
          ================================================== */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-bold text-red-600 uppercase tracking-wider block mb-1">
              THE ATLAS ADVANTAGE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Why Choose Atlas Engineering?
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Built on strong client relationships, verified engineering rigour, and dedicated after-sales commitment across every deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.whyChooseUs.map((item, idx) => {
              const Icon = whyChooseIcons[idx] || Shield;
              return (
                <div
                  key={item.index}
                  className="group p-6 rounded-xl border border-slate-200 bg-white hover:border-red-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-mono font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                        {item.index}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-slate-50 group-hover:bg-red-50 text-slate-700 group-hover:text-red-600 transition-colors flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                    <span>Engineering Principle</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Project Solutions Banner */}
          <div className="mt-8 p-6 rounded-xl border border-red-200 bg-gradient-to-r from-red-50/80 via-white to-red-50/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                Custom Engineering
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Tailored Project Solutions
              </h3>
              <p className="text-sm text-slate-600">
                Have unique highway specifications or site footprint constraints? Consult directly with Sunil L. Mistry and our engineering team in Ahmedabad.
              </p>
            </div>
            <button
              onClick={() => openQuoteModal()}
              className="whitespace-nowrap py-3 px-6 bg-[#DE1F27] hover:bg-[#B91C1C] text-white text-sm font-bold rounded-lg shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>Talk to an Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 5 — PRODUCT CATEGORIES
          ================================================== */}
      <section className="py-16 sm:py-20 bg-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                EQUIPMENT ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Our Core Product Categories
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Explore our three dedicated machinery categories covering bitumen modification, road construction, and concrete engineering.
              </p>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1 py-1"
            >
              View Full Machinery Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <CategoryCard key={cat.id} category={cat} index={idx} />
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 6 — FEATURED PRODUCTS SHOWCASE
          ================================================== */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
                MACHINERY SPOTLIGHT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Featured Equipment
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                High-efficiency equipment ready for customization and project-specific commissioning.
              </p>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold text-slate-800 hover:text-red-600 inline-flex items-center gap-1"
            >
              Browse All Equipment <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 7 — BITUMEN MODIFY EQUIPMENT FEATURE SECTION
          Primary Focus: Full-width Industrial Composition
          ================================================== */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Darker contrast for this focal section only, with light inner cards */}
        <div className="absolute inset-0 opacity-15">
          <img
            src={catBitumenImg}
            alt="Bitumen modification background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-sm font-bold tracking-widest uppercase text-red-400 block">
                FLAGSHIP ENGINEERING FOCUS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Advanced Bitumen Modification Solutions
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                As pioneers in bitumen engineering, Atlas Engineering manufactures specialized equipment for bitumen emulsion plant , polymer modified bitumen (PMB) plant, crumb rubber modified bitumen (CRMB) plant.
              </p>

              {/* 5 Core Principles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <div className="text-sm font-bold text-red-400 mb-1">Precision Engineering</div>
                  <div className="text-sm text-slate-200">Continuous blending accuracy for required polymer dispersion.</div>
                </div>
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <div className="text-sm font-bold text-red-400 mb-1">Consistent Performance</div>
                  <div className="text-sm text-slate-200">Uniform heating profiles preventing thermal degradation.</div>
                </div>
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <div className="text-sm font-bold text-red-400 mb-1">Industrial Durability</div>
                  <div className="text-sm text-slate-200">Heavy-gauge steel construction designed for non-stop processing.</div>
                </div>
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <div className="text-sm font-bold text-red-400 mb-1">Application-Focused Design</div>
                  <div className="text-sm text-slate-200">Customized drum decanters, storage agitators, and dosing lines.</div>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  to="/categories/bitumen-modify-equipment"
                  className="px-6 py-3 bg-[#DE1F27] hover:bg-[#B91C1C] text-white text-sm sm:text-base font-bold rounded-lg shadow-md transition-all flex items-center gap-2"
                >
                  <span>Explore Bitumen Equipment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => openQuoteModal('Bitumen Modification Plant')}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-bold rounded-lg border border-white/20 transition-colors cursor-pointer"
                >
                  Request Technical Proposal
                </button>
              </div>
            </div>

            {/* Visual Machinery Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white text-slate-900 p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block">
                      Category Overview
                    </span>
                    <h4 className="text-base font-bold text-slate-900">
                      Bitumen Modify Equipment
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
                    Engineered Division
                  </span>
                </div>
                
                <p className="text-xs text-slate-600 leading-relaxed">
                  Atlas Engineering offers a comprehensive lineup of bitumen plants configured for rapid site installation, high thermal efficiency, and zero operational downtime.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 text-slate-700">
                    <span className="font-medium">Decanting Efficiency</span>
                    <span className="font-bold text-slate-900">High Thermal Recovery</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 text-slate-700">
                    <span className="font-medium">Modification Capability</span>
                    <span className="font-bold text-slate-900">SBS, EVA, CRMB & Emulsions</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 text-slate-700">
                    <span className="font-medium">Fabrication Location</span>
                    <span className="font-bold text-slate-900">Ahmedabad, Gujarat</span>
                  </div>
                </div>

                <Link
                  to="/categories/bitumen-modify-equipment"
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors block text-center"
                >
                  View All 9 Bitumen Equipment Models
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 8 — APPLICATIONS SECTION
          "Built for Critical Infrastructure"
          ================================================== */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
              FIELD TESTED & SITE PROVEN
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Powering Infrastructure Development
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you are executing highway projects, urban infrastructure, or heavy commercial construction, Atlas Engineering delivers the equipment reliability and technology you need to stay ahead of schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.applications.map((app, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-xl border border-slate-200 hover:border-red-300 hover:shadow-md bg-slate-50/50 hover:bg-white transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-mono font-bold text-sm mb-3 group-hover:bg-[#DE1F27] group-hover:text-white transition-colors">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-1.5">
                  {app.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}

            {/* Custom Engineering Application Block */}
            <div className="p-5 rounded-xl border border-red-200 bg-red-50/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-1">
                  Custom Applications
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  Project Specific Needs
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Custom engineering configurations built to exact site requirements and aggregate properties.
                </p>
              </div>
              <button
                onClick={() => openQuoteModal()}
                className="mt-3.5 text-sm font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1 cursor-pointer"
              >
                Consult Our Team <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>



      {/* ==================================================
          SECTION 9 — CLIENT REVIEWS (GOOGLE BUSINESS PROFILE)
          ================================================== */}
      <GoogleReviews />

      {/* ==================================================
          SECTION 10 — INQUIRY & QUOTE FORM
          ================================================== */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                  FAST MACHINERY INQUIRY
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Get in Touch with Us Today
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ready to upgrade your fleet or plan your next construction project? Contact our engineering specialists for custom specifications and quotations.
                </p>

                <div className="space-y-3 pt-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                    <span>Plot No. 397-398, Road No. 9 Corner, Kathwada GIDC, Ahmedabad, Gujarat, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-red-600 shrink-0" />
                    <span className="font-mono tabular-nums">+91 98250 73095 / +91 91736 72311</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
                {formSubmitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Enquiry Received Successfully!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you. Your requirements have been delivered to our engineering desk at <strong className="text-slate-800">contact@atlasbitumenplant.com</strong>. Sunil L. Mistry or our technical team will contact you shortly.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleWhatsAppLead}
                        className="w-full sm:w-auto px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-lg shadow inline-flex items-center justify-center gap-2 cursor-pointer transition-colors"
                      >
                        <span>Follow up on WhatsApp</span>
                      </button>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setLeadForm({ name: '', company: '', phone: '', email: '', product: '', message: '' });
                        }}
                        className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={leadForm.name}
                          onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={leadForm.company}
                          onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                          placeholder="Company name"
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                          placeholder="+91..."
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={leadForm.email}
                          onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        Equipment / Machinery Needed *
                      </label>
                      <select
                        required
                        value={leadForm.product}
                        onChange={(e) => setLeadForm({ ...leadForm, product: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none bg-white font-medium text-slate-800"
                      >
                        <option value="">-- Select Machinery / Product --</option>
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
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        Project / Capacity Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={leadForm.message}
                        onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                        placeholder="State your required capacity, site location or timeline..."
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingLead}
                      className="w-full py-3 bg-[#DE1F27] hover:bg-[#B91C1C] disabled:bg-slate-400 text-white text-sm sm:text-base font-bold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmittingLead ? 'Sending to contact@atlasbitumenplant.com...' : 'Submit Technical Enquiry'}</span>
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
