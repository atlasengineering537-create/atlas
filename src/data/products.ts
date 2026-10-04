import catBitumenImg from '../assets/images/category_bitumen_equipment.jpg';
import catRoadImg from '../assets/images/category_road_equipment.jpg';
import catCementImg from '../assets/images/category_cement_equipment.jpg';

export interface TechnicalSpec {
  parameter: string;
  value: string;
  note?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  categoryId: 'bitumen-modify-equipment' | 'road-construction-equipment' | 'cement-concrete-equipment';
  categoryName: string;
  name: string;
  code: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  features: FeatureItem[];
  applications: string[];
  specifications: TechnicalSpec[];
  heroImage: string;
  gallery: string[];
  isPlaceholder: boolean;
  featured?: boolean;
}

export interface ProductCategory {
  id: 'bitumen-modify-equipment' | 'road-construction-equipment' | 'cement-concrete-equipment';
  slug: string;
  name: string;
  shortName: string;
  subtitle: string;
  description: string;
  productCount: number;
  featuredFocus: boolean;
  image: string;
  keyApplications: string[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'bitumen-modify-equipment',
    slug: 'bitumen-modify-equipment',
    name: 'Bitumen Modify Equipment',
    shortName: 'Bitumen Equipment',
    subtitle: 'Primary Engineering Focus & High-Performance Plants',
    description: 'Precision-engineered bitumen decanters, polymer modified bitumen (PMB) plants, emulsion production systems, and heating units built for rigorous infrastructure specifications.',
    productCount: 9,
    featuredFocus: true,
    image: catBitumenImg,
    keyApplications: [
      'Polymer Modified Bitumen (PMB) Processing',
      'Bitumen Decanting & Drum Melting',
      'Bitumen Emulsion Manufacturing',
      'High-Temperature Asphalt Blending',
      'Highway Surface Dressing',
    ],
  },
  {
    id: 'road-construction-equipment',
    slug: 'road-construction-equipment',
    name: 'Road Construction Equipment',
    shortName: 'Road Construction',
    subtitle: 'Heavy-Duty Highway & Civil Paving Machinery',
    description: 'Rugged and dependable asphalt batch mix components, wet mix macadam systems, road sweepers, and road building machinery engineered for reliable operation under demanding site conditions.',
    productCount: 6,
    featuredFocus: false,
    image: catRoadImg,
    keyApplications: [
      'National & State Highway Paving',
      'Airport Runway Construction',
      'Sub-base Wet Mix Macadam (WMM) Preparation',
      'Asphalt Surface Treatment & Maintenance',
    ],
  },
  {
    id: 'cement-concrete-equipment',
    slug: 'cement-concrete-equipment',
    name: 'Cement & Concrete Equipment',
    shortName: 'Cement & Concrete',
    subtitle: 'High-Capacity Batching & Mixing Solutions',
    description: 'Engineered concrete batching and mixing solutions designed for high structural integrity, consistent aggregate blending, and continuous site productivity.',
    productCount: 2,
    featuredFocus: false,
    image: catCementImg,
    keyApplications: [
      'Ready-Mix Concrete Production',
      'Major Bridge & Dam Foundations',
      'Precast Concrete Element Fabrication',
      'Industrial Flooring & Structural Works',
    ],
  },
];

// Helper to create standardized placeholder products
function createPlaceholderProduct(
  categoryId: 'bitumen-modify-equipment' | 'road-construction-equipment' | 'cement-concrete-equipment',
  categoryName: string,
  index: number,
  prefix: string,
  image: string,
  featured: boolean = false
): Product {
  const numStr = index.toString().padStart(2, '0');
  const name = `${prefix} Product ${numStr}`;
  const slug = `${prefix.toLowerCase().replace(/\s+/g, '-')}-product-${numStr}`;

  return {
    id: slug,
    slug,
    categoryId,
    categoryName,
    name,
    code: `ATL-${prefix.substring(0, 3).toUpperCase()}-${numStr}`,
    shortDescription: `${name}. High-efficiency equipment engineered by Atlas Engineering for demanding site conditions.`,
    description: `Detailed product overview and engineering specifications for ${name}. Atlas Engineering manufactures high-performance road and civil construction machinery with over 28 years of industry experience.`,
    highlights: [
      `Precision-engineered for continuous site operation`,
      `Built with top-grade structural steel and prime mechanical components`,
      `Designed for high thermal efficiency and low maintenance`,
      `Full compliance with national highway standards`,
    ],
    features: [
      {
        title: 'Robust Structural Design',
        description: 'Heavy-duty steel chassis engineered to withstand continuous heavy operation in extreme field environments.',
      },
      {
        title: 'Advanced Control System',
        description: 'Intuitive operational console designed for safe, single-operator control and accurate process parameters.',
      },
      {
        title: 'High Thermal Efficiency',
        description: 'Optimized heating and insulation system minimizing fuel consumption and operational overhead.',
      },
      {
        title: 'Fast Site Commissioning',
        description: 'Modular sub-assemblies for swift transport, rapid erection, and minimal downtime on site.',
      },
    ],
    applications: [
      'Road Construction & Highway Development',
      'Bitumen Processing & Modification',
      'Infrastructure & Civil Engineering Projects',
      'Commercial Asphalt Paving Works',
    ],
    specifications: [
      { parameter: 'Product Model / Code', value: `ATL-${prefix.substring(0, 3).toUpperCase()}-${numStr}` },
      { parameter: 'Category', value: categoryName },
      { parameter: 'Capacity / Output', value: 'As per project requirements' },
      { parameter: 'Power Requirement', value: '3-Phase Standard Industrial' },
      { parameter: 'Control Mechanism', value: 'Semi-Automatic / Fully Automatic' },
      { parameter: 'Standard Compliance', value: 'Indian & Global Infrastructure Norms' },
      { parameter: 'Manufacturer Warranty', value: 'Comprehensive 12 Months Support' },
    ],
    heroImage: image,
    gallery: [
      image,
      '/src/assets/images/factory_engineering_facility_1791042931571.jpg',
      '/src/assets/images/hero_machinery_road_1791042882943.jpg',
    ],
    isPlaceholder: true,
    featured,
  };
}

// 9 REAL BITUMEN MODIFY EQUIPMENT PRODUCTS
export const BITUMEN_PRODUCTS: Product[] = [
  {
    id: 'bitumen-emulsion-plant',
    slug: 'bitumen-emulsion-plant',
    categoryId: 'bitumen-modify-equipment',
    categoryName: 'Bitumen Modify Equipment',
    name: 'BITUMEN EMULSION PLANT',
    code: 'ATL-BEP-01',
    shortDescription: 'Facility designed to produce a stable, liquid mixture of bitumen, water, and an emulsifying agent for road construction and maintenance (Capacity: 1 TPH to 30 TPH).',
    description: 'A BITUMEN EMULSION PLANT IS A FACILITY DESIGNED TO PRODUCE A STABLE, LIQUID MIXTURE OF BITUMEN, WATER, AND AN EMULSIFYING AGENT FOR USE IN ROAD CONSTRUCTION AND MAINTENANCE, PARTICULARLY IN COLD APPLICATIONS. THIS PROCESS IS SAFER AND MORE ENERGY-EFFICIENT THAN USING HOT BITUMEN.',
    highlights: [
      'Capacity: 1 TPH to 30 TPH',
      'High-Shear Colloid Mill dispersing heated bitumen into microscopic droplets (1–10 microns)',
      'Automated PLC-based system monitoring flow rates, temperatures, and dosing ratios',
      'Produces Rapid-Setting (RS), Medium-Setting (MS), and Slow-Setting (SS) Emulsions',
      'Batch Type, Continuous Type, Stationary, or Mobile/Containerized configurations',
    ],
    features: [
      {
        title: 'BITUMEN STORAGE TANKS',
        description: 'Insulated and heated tanks that store raw bitumen at around 150–160°C to reduce its viscosity.',
      },
      {
        title: 'WATER TANKS',
        description: 'Store water heated to an optimal temperature (typically 40–70°C).',
      },
      {
        title: 'EMULSIFIER DOSING SYSTEM & CHEMICAL TANKS',
        description: 'Separate stainless steel tanks and precise dosing units for storing and adding emulsifiers, acids/alkalis (for pH control), and additives.',
      },
      {
        title: 'COLLOID MILL',
        description: 'The heart of the plant: high-shear mixer dispersing heated bitumen into microscopic droplets (1–10 microns) within the water phase.',
      },
      {
        title: 'CONTROL PANEL',
        description: 'Automated PLC-based system that monitors and regulates flow rates, temperatures, and dosing ratios for consistent quality and safety.',
      },
      {
        title: 'STORAGE TANKS & HEATING/COOLING SYSTEMS',
        description: 'Finished emulsion storage equipped with agitators to prevent settling, plus thermal oil or electric heating/cooling systems.',
      },
    ],
    applications: [
      'Surface Dressing & Chip Sealing (CRS-1 / CRS-2)',
      'Tack Coats (bonding layers of asphalt)',
      'Prime Coats (sealing granular bases)',
      'Cold Mix Asphalt Production (CMS-2 / CSS-2)',
      'Pothole Repair and Crack Sealing',
      'Microsurfacing & Slurry Seal Applications',
      'Waterproofing Applications',
    ],
    specifications: [
      { parameter: 'Capacity', value: '1 TPH to 30 TPH' },
      { parameter: 'Dispersed Droplet Size', value: '1 to 10 microns' },
      { parameter: 'Raw Bitumen Temp', value: '150–160°C' },
      { parameter: 'Water Phase Temp', value: '40–70°C' },
      { parameter: 'Plant Configurations', value: 'Batch Type, Continuous Type, Stationary, Mobile/Containerized' },
      { parameter: 'Supported Emulsion Grades', value: 'Rapid Setting (RS-1, RS-2, CRS-1, CRS-2), Medium Setting (MS, CMS-2, CMS-2s), Slow Setting (SS-1, CSS-1, CSS-2), PMBE' },
      { parameter: 'Control Mechanism', value: 'Automated PLC-based monitoring & dosing' },
      { parameter: 'Colloid Mill', value: 'High-Shear Dispersion Unit' },
    ],
    heroImage: '/src/assets/images/products/p1_img1.jpg',
    gallery: [
      '/src/assets/images/products/p1_img1.jpg',
      '/src/assets/images/products/p1_img2.jpg',
      '/src/assets/images/products/p1_img3.jpg',
      '/src/assets/images/products/p1_img4.jpg',
    ],
    isPlaceholder: false,
    featured: true,
  },
  {
    id: 'pmb-crmb-bitumen-modify-plant',
    slug: 'pmb-crmb-bitumen-modify-plant',
    categoryId: 'bitumen-modify-equipment',
    categoryName: 'Bitumen Modify Equipment',
    name: 'PMB/CRMB BITUMEN MODIFY PLANT',
    code: 'ATL-PMB-02',
    shortDescription: 'High-shear blending and dispersion plant used to modify paving bitumen with polymers or crumb rubber (Capacity: 10 TPH to 40 TPH).',
    description: 'A PMB/CRMB Bitumen Modification Plant is a high-shear blending and dispersion plant used to modify paving bitumen with polymers or crumb rubber to improve rutting resistance, elasticity, fatigue resistance, temperature resistance and durability. In India, PMB is covered by IS 15462:2019, while rubber-modified bitumen is covered separately by IS 17079:2019.',
    highlights: [
      'Capacity: 10 TPH to 40 TPH',
      'Dual capability: Polymer (SBS, SBR, EVA) and Crumb Rubber (waste tyre) modification',
      'Complies with IS 15462:2019 (PMB 64-10 to 82-10, 76-22) and IS 17079:2019 (CRMB 55, CRMB 60)',
      'High-shear homogenizer / colloid mill for complete dispersion and development',
    ],
    features: [
      {
        title: 'BASE BITUMEN STORAGE & PUMPS',
        description: 'Stores VG-grade base bitumen with high-temperature transfer and recirculation pumps.',
      },
      {
        title: 'POLYMER & CRUMB RUBBER FEEDING',
        description: 'Independent precision dosing hoppers and feeding systems for polymer pellets and crumb rubber.',
      },
      {
        title: 'HIGH-SHEAR COLLOID / HOMOGENIZER',
        description: 'Extreme shear dispersion system ensuring homogeneous polymer distribution and crumb rubber swelling.',
      },
      {
        title: 'DIGESTION & REACTION TANKS',
        description: 'Dedicated modification/reaction tank for polymer development and continuous digestion recirculation.',
      },
      {
        title: 'THERMIC FLUID HEATING & INSULATION',
        description: 'Thermic-fluid heater and hot-oil circulation with fully insulated and heated pipelines and valves.',
      },
      {
        title: 'PLC + HMI / SCADA CONTROL',
        description: 'Automatic plant control with load cells, flow meters, temperature & pressure instrumentation, and sampling points.',
      },
    ],
    applications: [
      'National & State Highways (PMB 70-10, CRMB 55)',
      'Expressways & High-Temperature Corridors (PMB 76-10, CRMB 60)',
      'Extremely Heavy Traffic Corridors (PMB 82-10)',
      'High-Altitude & Cold-Climate Pavements (PMB 76-22)',
      'Heavy-Duty Rut-Resistant Flexible Pavements',
      'Surface Dressing & Bituminous Mixes',
    ],
    specifications: [
      { parameter: 'Capacity Range', value: '10 TPH to 40 TPH' },
      { parameter: 'Standard Compliance', value: 'IS 15462:2019 (PMB) & IS 17079:2019 (CRMB)' },
      { parameter: 'PMB Grades Supported', value: 'PMB 64-10, PMB 70-10, PMB 76-10, PMB 82-10, PMB 76-22' },
      { parameter: 'CRMB Grades Supported', value: 'CRMB 55, CRMB 60' },
      { parameter: 'Modifier Types', value: 'SBS, SBR, EVA, crumb rubber (from processed tyres)' },
      { parameter: 'Heating System', value: 'Thermic fluid heater with hot-oil jacketed lines' },
      { parameter: 'Automation', value: 'PLC + SCADA, load cells, digital flow meters' },
    ],
    heroImage: '/src/assets/images/products/p2_img1.jpg',
    gallery: [
      '/src/assets/images/products/p2_img1.jpg',
      '/src/assets/images/products/p2_img2.jpg',
      '/src/assets/images/products/p2_img3.jpg',
      '/src/assets/images/products/p2_img4.jpg',
    ],
    isPlaceholder: false,
    featured: true,
  },
  {
    id: 'bitumen-air-blowing-oxidization-plant',
    slug: 'bitumen-air-blowing-oxidization-plant',
    categoryId: 'bitumen-modify-equipment',
    categoryName: 'Bitumen Modify Equipment',
    name: 'BITUMEN AIR BLOWING OXIDIZATION PLANT',
    code: 'ATL-ABO-03',
    shortDescription: 'Industrial plant to convert penetration-grade bitumen into oxidized/blown bitumen by passing controlled hot air through heated bitumen.',
    description: 'A Bitumen Air Blowing Oxidization Plant is used to convert penetration-grade bitumen or suitable refinery bitumen feed into oxidized/blown bitumen by passing controlled hot air through heated bitumen. The oxidation process increases the softening point and generally reduces penetration, producing a harder, more heat-resistant industrial bitumen.',
    highlights: [
      'Produces grades: 75/25, 85/25, 85/40, 90/15, 90/40, 95/25, 105/35, 115/15, 150/5',
      'Air-blowing reactor with multi-nozzle air ring for uniform oxidation',
      'Complete off-gas treatment: mist catcher, condenser, wet scrubber, and vent blower',
      'Complies with ASTM D312/D312M and international specifications',
    ],
    features: [
      {
        title: 'AIR-BLOWING REACTOR',
        description: 'Main oxidation vessel where hot air is dispersed through bitumen to increase softening point.',
      },
      {
        title: 'AIR BLOWER & AIR RING NOZZLES',
        description: 'Supplies and distributes controlled oxidation air uniformly inside the reactor bottom.',
      },
      {
        title: 'MIST CATCHER & CONDENSER',
        description: 'Separates entrained bitumen droplets from outgoing gases and condenses recoverable vapours.',
      },
      {
        title: 'GAS SCRUBBER & VENT SYSTEM',
        description: 'Cleans process off-gases before discharge, maintaining controlled gas flow and draft.',
      },
      {
        title: 'HEATING & STORAGE TANKS',
        description: 'Pre-heats feed bitumen and stores finished oxidized bitumen at dispatch temperature.',
      },
      {
        title: 'PLC / AUTOMATION PANEL',
        description: 'Controls temperature, airflow, level, pressure, and residence time for target grade specifications.',
      },
    ],
    applications: [
      'Roofing Felt & Built-Up Roofing Compounds',
      'Waterproofing Membranes & Mastics',
      'Anti-Corrosion Underground Steel Pipeline Coating',
      'Oil & Gas Pipeline Protective Coatings',
      'Expansion Joint Fillers & Construction Sealants',
      'Bituminous Paints, Adhesives & Sound-Damping Materials',
      'Electrical Cable Insulation Compounds',
    ],
    specifications: [
      { parameter: 'Process Principle', value: 'Controlled air blowing / oxidation' },
      { parameter: 'Output Grades', value: '75/25, 85/25, 85/40, 90/15, 90/40, 95/25, 105/35, 115/15, 150/5' },
      { parameter: 'Standard Compliance', value: 'ASTM D312/D312M, IS & global standards' },
      { parameter: 'Off-Gas System', value: 'Mist Catcher + Condenser + Scrubber + Vent Blower' },
      { parameter: 'Air Distribution', value: 'Bottom Air Ring with multi-nozzle dispersion' },
      { parameter: 'Control System', value: 'PLC / Automation Panel with safety interlocks' },
    ],
    heroImage: '/src/assets/images/products/p3_img1.jpg',
    gallery: [
      '/src/assets/images/products/p3_img1.jpg',
      '/src/assets/images/products/p3_img2.jpg',
      '/src/assets/images/products/p3_img3.jpg',
      '/src/assets/images/products/p3_img4.jpg',
    ],
    isPlaceholder: false,
    featured: false,
  },
  {
    id: 'cold-mix-asphalt-plant',
    slug: 'cold-mix-asphalt-plant',
    categoryId: 'bitumen-modify-equipment',
    categoryName: 'Bitumen Modify Equipment',
    name: 'COLD MIX ASPHALT PLANT (FOR MONSOON POTHOLE REPAIR WORK)',
    code: 'ATL-CMA-04',
    shortDescription: 'Plant designed for producing emulsion-based cold asphalt mixes without conventional aggregate heating, ideal for monsoon pothole repair and emergency road maintenance.',
    description: 'A Cold Mix Asphalt Plant is used to produce asphalt mix without heating the aggregate to conventional hot-mix temperatures. The process normally uses bitumen emulsion, graded aggregates, water and, where required, additives/cement. It is particularly useful for road maintenance, pothole patching and monsoon repair work, because the material can be produced and laid without a conventional hot-mix plant.',
    highlights: [
      'No conventional hot-mix heating required; workable in monsoon / wet conditions',
      'Ideal for emergency road maintenance, pothole patching, and PMGSY rural roads',
      'Accurate aggregate, water pre-wetting, and bitumen emulsion dosing',
      'Mobile or stationary configurations for swift on-site deployment',
    ],
    features: [
      {
        title: 'AGGREGATE FEEDER',
        description: 'Controls aggregate proportioning and continuous feeding with variable speed drive.',
      },
      {
        title: 'BITUMEN EMULSION TANK & DOSING',
        description: 'Dedicated tank for cationic/approved emulsion with positive-displacement precision dosing pump.',
      },
      {
        title: 'COLD MIXING UNIT',
        description: 'Twin-shaft continuous mixer ensuring uniform aggregate pre-wetting and thorough emulsion coating.',
      },
      {
        title: 'FINISHED MIX HOPPER & CONVEYOR',
        description: 'Transfers finished cold mix directly to transport trucks or bagging packaging systems.',
      },
      {
        title: 'CENTRALIZED CONTROL PANEL',
        description: 'Regulates aggregate feed rate, water addition, and emulsion dosing ratio.',
      },
      {
        title: 'MOBILE / STATIONARY OPTIONS',
        description: 'Compact skid or trailer-mounted configuration for easy relocation across job sites.',
      },
    ],
    applications: [
      'Monsoon Pothole Filling & Emergency Road Repairs',
      'Localized Pavement Patching',
      'Cold Mix Bituminous Macadam (BM)',
      'Cold Mix Semi Dense Bituminous Concrete (SDBC) & MSS',
      'Rural Road Construction & Maintenance (PMGSY)',
      'Stockpile Cold Mix Asphalt Production',
    ],
    specifications: [
      { parameter: 'Plant Type', value: 'Cold Mix Asphalt Plant' },
      { parameter: 'Operating Mode', value: 'Mobile / Trailer-Mounted or Stationary' },
      { parameter: 'Emulsion Compatibility', value: 'Medium Setting (MS), Slow Setting (SS-1, SS-2), Cationic' },
      { parameter: 'Mix Types Produced', value: 'Pothole Repair Mix, Patch Repair Mix, Cold Mix BM, Cold Mix SDBC, Cold Mix MSS' },
      { parameter: 'Mixing Technology', value: 'Twin-Shaft Continuous Cold Mixer' },
      { parameter: 'Control System', value: 'Electric / PLC console with variable speed drives' },
    ],
    heroImage: '/src/assets/images/products/p4_img1.jpg',
    gallery: [
      '/src/assets/images/products/p4_img1.jpg',
      '/src/assets/images/products/p4_img2.jpg',
      '/src/assets/images/products/p4_img3.jpg',
      '/src/assets/images/products/p4_img4.jpg',
    ],
    isPlaceholder: false,
    featured: false,
  },
  {
    id: 'bitumen-storage-tank',
    slug: 'bitumen-storage-tank',
    categoryId: 'bitumen-modify-equipment',
    categoryName: 'Bitumen Modify Equipment',
    name: 'BITUMEN STORAGE TANK',
    code: 'ATL-BST-05',
    shortDescription: 'Industrial storage and heating tanks in direct or indirect heating arrangements (Capacity: 20, 30, 50, 75, 100 KL).',
    description: 'A Bitumen Storage & Heating Tank is used to store bitumen and maintain it at a controlled temperature so that it remains sufficiently fluid for pumping, transfer, mixing, or further processing. Available in Direct Heating and Indirect Heating configurations.',
    highlights: [
      'Capacities: 20 KL, 30 KL, 50 KL, 75 KL, 100 KL',
      'Direct Heating (Burner-fired) & Indirect Heating (Thermic Fluid Coils) available',
      'Heavy-gauge carbon steel shell with high-density mineral wool insulation',
      'Equipped with level indicator, RTD temperature sensor, and bitumen transfer pump',
    ],
    features: [
      {
        title: 'DIRECT HEATING TYPE',
        description: 'Supplies heat directly through an engineered burner flame and internal heating tube for fast heating.',
      },
      {
        title: 'INDIRECT HEATING TYPE',
        description: 'Thermic fluid circulates through internal multi-pass coils for uniform heating without risk of coking or localized overheating.',
      },
      {
        title: 'HIGH-DENSITY INSULATION',
        description: 'Thick mineral wool / rockwool insulation with galvanized steel or aluminum sheet cladding to minimize heat loss.',
      },
      {
        title: 'BITUMEN TRANSFER PUMP',
        description: 'High-temperature positive displacement pump for efficient bitumen transfer and circulation.',
      },
      {
        title: 'TEMPERATURE & LEVEL INSTRUMENTATION',
        description: 'RTD temperature sensors and mechanical/electronic level indicators for continuous monitoring.',
      },
      {
        title: 'VENT & SAFETY SYSTEMS',
        description: 'Atmospheric vents, inspection manholes, and safety interlocks on burners and pumps.',
      },
    ],
    applications: [
      'Bitumen Modification & PMB Plants',
      'Asphalt Batch Mix Plants',
      'Bulk Bitumen Terminals & Refineries',
      'Highway Project Base Camps & Storage Depots',
    ],
    specifications: [
      { parameter: 'Capacity Range', value: '20, 30, 50, 75, 100 KL' },
      { parameter: 'Heating Arrangements', value: 'Direct Heating (Burner) / Indirect Heating (Thermic Fluid)' },
      { parameter: 'Operating Temperature', value: '140°C to 180°C' },
      { parameter: 'Construction Material', value: 'Heavy Carbon Steel Shell' },
      { parameter: 'Insulation', value: 'Rockwool with Sheet Metal Cladding' },
      { parameter: 'Transfer Pump', value: 'Positive displacement gear/screw bitumen pump' },
      { parameter: 'Instrumentation', value: 'RTD sensor, dial thermometer, level indicator' },
    ],
    heroImage: '/src/assets/images/products/p5_img1.jpg',
    gallery: [
      '/src/assets/images/products/p5_img1.jpg',
      '/src/assets/images/products/p5_img2.jpg',
      '/src/assets/images/products/p5_img3.jpg',
      '/src/assets/images/products/p5_img4.jpg',
    ],
    isPlaceholder: false,
    featured: false,
  },
  {
    id: 'emulsion-storage-horizontal-type-tank',
    slug: 'emulsion-storage-horizontal-type-tank',
    categoryId: 'bitumen-modify-equipment',
    categoryName: 'Bitumen Modify Equipment',
    name: 'EMULSION STORAGE HORIZONTAL TYPE TANK',
    code: 'ATL-EST-06',
    shortDescription: 'Horizontal cylindrical carbon-steel tank for storing bitumen emulsion after production (Capacity: 10 MT to 100 MT).',
    description: 'A Horizontal Emulsion Storage Tank is used for storing bitumen emulsion after production and maintaining it at a suitable temperature for pumping, circulation and dispatch. It is commonly used with Bitumen Emulsion Plants for grades such as RS, MS and SS emulsions.',
    highlights: [
      'Capacities: 10 MT, 20 MT, 30 MT, 40 MT, 50 MT, 60 MT, 100 MT',
      'Horizontal cylindrical carbon-steel vessel with saddle supports',
      'Gentle product circulation connection and heating coil preventing emulsion breakdown',
      'Low-point drain for complete drainage and top inspection manhole',
    ],
    features: [
      {
        title: 'TANK SHELL & SADDLE SUPPORTS',
        description: 'Horizontal cylindrical carbon-steel vessel supported by engineered saddle supports.',
      },
      {
        title: 'GENTLE CIRCULATION SYSTEM',
        description: 'Circulation nozzles designed to avoid high-shear agitation, maintaining water-based emulsion stability.',
      },
      {
        title: 'HEATING COIL & THERMAL MANAGEMENT',
        description: 'Internal coil sized to avoid excessive heating while keeping emulsion at ideal pumpable temperature.',
      },
      {
        title: 'LOW-POINT COMPLETE DRAIN',
        description: 'Bottom drain nozzle ensuring complete or near-complete drainage without residue.',
      },
      {
        title: 'TEMPERATURE & LEVEL INDICATORS',
        description: 'RTD temperature sensor and level gauge for real-time monitoring of stored emulsion.',
      },
      {
        title: 'EXTERNAL WEATHER CLADDING',
        description: 'Coated carbon steel with protective insulation minimizes environmental heat loss.',
      },
    ],
    applications: [
      'RS – Rapid Setting Emulsion Storage',
      'MS – Medium Setting Emulsion Storage',
      'SS – Slow Setting Emulsion Storage',
      'Bitumen Emulsion Manufacturing Plant Dispatch Depots',
      'Road Surface Dressing, Tack Coat, and Slurry Seal Projects',
    ],
    specifications: [
      { parameter: 'Type', value: 'Horizontal cylindrical vessel' },
      { parameter: 'Capacity', value: '10 MT, 20 MT, 30 MT, 40 MT, 50 MT, 60 MT, 100 MT' },
      { parameter: 'Service', value: 'Bitumen Emulsion Storage (RS, MS, SS grades)' },
      { parameter: 'Construction', value: 'Carbon Steel Shell with Saddle Supports' },
      { parameter: 'Level Monitoring', value: 'Local level gauge / transmitter' },
      { parameter: 'Temperature', value: 'RTD / dial temperature indicator' },
      { parameter: 'Drainage', value: 'Complete low-point bottom drain' },
    ],
    heroImage: '/src/assets/images/products/p6_img1.jpg',
    gallery: [
      '/src/assets/images/products/p6_img1.jpg',
      '/src/assets/images/products/p6_img2.jpg',
    ],
    isPlaceholder: false,
    featured: false,
  },
  {
    id: 'emulsion-and-bitumen-drum-filling-machine',
    slug: 'emulsion-and-bitumen-drum-filling-machine',
    categoryId: 'bitumen-modify-equipment',
    categoryName: 'Bitumen Modify Equipment',
    name: 'EMULSION AND BITUMEN DRUM FILLING MACHINE',
    code: 'ATL-DFM-07',
    shortDescription: 'Industrial system to safely and accurately dispense high-viscosity, high-temperature liquids into standard 200-litre drums or barrels.',
    description: 'An emulsion and bitumen drum filling machine is an industrial system designed to safely and accurately dispense high-viscosity, high-temperature liquids into standard 200-litre drums or barrels. These systems minimize human intervention, ensuring safe handling of volatile or hot road-construction materials like Bitumen, Polymer Modified Bitumen (PMB), and Bitumen Emulsions.',
    highlights: [
      'Gravimetric Net Weight Filling with advanced microprocessor weight controller (Accuracy: ±100 grams)',
      'Operating Temperature: 5°C to 90°C (Emulsion) / 90°C to 300°C (Hot Bitumen / PMB / CRMB)',
      'Speed: 30–45 bph (Emulsion) / 40–60 bph (Bitumen)',
      'Semi-Automatic and Fully Automatic conveyorized models available',
    ],
    features: [
      {
        title: 'GRAVIMETRIC NET WEIGHT FILLING',
        description: 'Microprocessor-controlled load cell system ensuring precision irrespective of liquid density shifts caused by temperature swings.',
      },
      {
        title: 'SUB-SURFACE & TOP-FILL LANCES',
        description: 'Sub-surface lances prevent foaming when dispensing chemical emulsions; top-fill lances for hot bitumen.',
      },
      {
        title: 'THERMALLY JACKETED LINES',
        description: 'Insulated jackets and internal hot oil or steam heating prevent bitumen solidification in pipes.',
      },
      {
        title: 'SAFETY & FLAMEPROOF INTEGRATION',
        description: 'Flameproof electricals, safety interlocks, and drip-collection cups to safeguard operators against splashes.',
      },
      {
        title: 'HEAVY-DUTY CONVEYOR PLATFORM',
        description: 'Motorized square, U-type, or E-type platform scales optimized for pallet and forklift handling.',
      },
      {
        title: 'AUTOMATION OPTIONS',
        description: 'Semi-Automatic pneumatic arm alignment or Fully Automatic system with power conveyor and robotic cap torque station.',
      },
    ],
    applications: [
      'Packaging Hot Bitumen into 200-Litre Drums',
      'Bitumen Emulsion & Cold-Mix Material Drumming',
      'PMB & CRMB Packaging for Long-Distance Transport',
      'Waterproofing Tar and Protective Industrial Coatings Packaging',
      'Refinery and Terminal Dispatch Facilities',
    ],
    specifications: [
      { parameter: 'Emulsion Operating Temp', value: '5°C to 90°C' },
      { parameter: 'Hot Bitumen Operating Temp', value: '90°C to 300°C' },
      { parameter: 'Drum Filling Capacity', value: '100 kg to 250 kg (Emulsion) / Up to 300 kg (Bitumen)' },
      { parameter: 'Production Speed', value: '30 to 45 bph (Emulsion) / 40 to 60 bph (Bitumen)' },
      { parameter: 'Filling Accuracy', value: '±100 grams (Resolution: 50 grams)' },
      { parameter: 'Inlet Line Size', value: '50 NB (Emulsion) / 80 NB (Bitumen)' },
      { parameter: 'Filling Principle', value: 'Gravimetric Net Weight Load Cell' },
    ],
    heroImage: '/src/assets/images/products/p7_img1.jpg',
    gallery: [
      '/src/assets/images/products/p7_img1.jpg',
      '/src/assets/images/products/p7_img2.jpg',
    ],
    isPlaceholder: false,
    featured: false,
  },
  {
    id: 'asphalt-cold-mix-material-bag-filling-machine',
    slug: 'asphalt-cold-mix-material-bag-filling-machine',
    categoryId: 'bitumen-modify-equipment',
    categoryName: 'Bitumen Modify Equipment',
    name: 'ASPHALT COLD MIX MATERIAL BAG FILLING MACHINE',
    code: 'ATL-BFM-08',
    shortDescription: 'Heavy-duty packaging system specifically designed to handle sticky, cohesive, and abrasive cold-mix asphalt materials into bags (10 kg to 50 kg).',
    description: 'An Asphalt Cold Mix Bag Filling Machine is a heavy-duty packaging system specifically designed to handle sticky, cohesive, and abrasive cold-mix asphalt materials. Unlike free-flowing materials, cold mix asphalt requires specialized feeding mechanisms to prevent clogging and to accurately pack the material into bags (typically 25 kg to 50 kg) for retail or road repair use.',
    highlights: [
      'Anti-sticking screw feeder / vibratory tray prevents bridging and clogging',
      'Filling Range: 10 kg to 50 kg per bag with ±0.5% to 1% accuracy',
      'Pneumatic dust-tight bag clamping with automatic weight tare sensor',
      'Compatible with Heavy-Duty PE Plastic and Laminated Woven PP bags',
    ],
    features: [
      {
        title: 'ANTI-STICKING FEED MECHANISM',
        description: 'Heavy-duty screw feeder or wide-throat vibratory tray preventing sticky, oily aggregate from bridging or clogging.',
      },
      {
        title: 'PNEUMATIC BAG CLAMPING',
        description: 'Heavy-duty, dust-tight bag holders grip the bag tightly during filling to support heavy aggregate weights.',
      },
      {
        title: 'WEAR-RESISTANT CONTACT PARTS',
        description: 'Contact parts handling abrasive asphalt aggregates up to 15mm made of reinforced carbon steel or heavy-grade stainless steel.',
      },
      {
        title: 'TWO-STAGE BULK & FINE FEED',
        description: 'Runs fast for bulk filling (90% weight), then slows down for precision fine feeding to target weight.',
      },
      {
        title: 'MOTORIZED CONVEYOR & SEALER',
        description: 'Automated release drops bag onto motorized conveyor transporting it through stitching or heat-sealing station.',
      },
      {
        title: 'SIMPLE SEMI-AUTOMATIC WORKFLOW',
        description: 'Single operator places bag; machine auto-clamps, weighs, feeds, releases, and conveys.',
      },
    ],
    applications: [
      'Retail Bagging of Cold Patch Asphalt (25 kg & 50 kg bags)',
      'Monsoon Pothole Repair Material Packaging',
      'Municipal Road Maintenance Depot Packaging',
      'Bituminous Cold Mix Bagging for Transit & Stockpiling',
    ],
    specifications: [
      { parameter: 'Material Handled', value: 'Asphalt Cold Mix, Cold Patch, Bituminous Cold Mix (up to 15mm)' },
      { parameter: 'Filling Range', value: '10 kg to 50 kg per bag' },
      { parameter: 'Production Speed', value: '1 to 2 bags per minute (Semi-automatic)' },
      { parameter: 'Filling Accuracy', value: '± 0.5% to 1% of target weight' },
      { parameter: 'Weighing Principle', value: 'Gross/Net electronic load cell weighing' },
      { parameter: 'Power Supply', value: '3-Phase, 380V/415V, 50Hz/60Hz' },
      { parameter: 'Air Consumption', value: '5–6 bar (for pneumatic gates and clamps)' },
      { parameter: 'Bag Compatibility', value: 'Heavy-Duty PE/Plastic Bags & Laminated Woven PP Bags' },
    ],
    heroImage: '/src/assets/images/products/p8_img1.jpg',
    gallery: [
      '/src/assets/images/products/p8_img1.jpg',
      '/src/assets/images/products/p8_img2.jpg',
      '/src/assets/images/products/p8_img3.jpg',
      '/src/assets/images/products/p8_img4.jpg',
    ],
    isPlaceholder: false,
    featured: false,
  },
  {
    id: 'hot-thermic-fluid-heater',
    slug: 'hot-thermic-fluid-heater',
    categoryId: 'bitumen-modify-equipment',
    categoryName: 'Bitumen Modify Equipment',
    name: 'HOT THERMIC FLUID HEATER',
    code: 'ATL-TFH-09',
    shortDescription: 'Industrial heating system circulating specialized heat-transfer fluid at high temperatures up to 350°C under low operating pressures.',
    description: 'A Hot Thermic Fluid Heater (also known as a thermal oil heater) is an industrial heating system that circulates a specialized heat-transfer fluid at high temperatures under low operating pressures. Unlike steam boilers that require high pressure to reach high temperatures, thermic fluid heaters can operate up to 300°C to 350°C at near-atmospheric pressure, drastically reducing explosive risks and structural costs.',
    highlights: [
      'Heating Capacity: 100,000 kcal/hr to 15,000,000 kcal/hr+',
      'Operating Temperature: 150°C to 320°C (standard mineral oils) / Up to 400°C (synthetic fluids)',
      'Low Operating Pressure: 2 bar to 5 bar (eliminates high-pressure boiler hazards)',
      'High Thermal Efficiency: 88% to 92% with air pre-heaters or economizers',
      'Multi-fuel compatibility: Diesel, Heavy Oil, Natural Gas, LPG, Solid Fuels',
    ],
    features: [
      {
        title: 'DOUBLE JACKET CONCENTRIC COIL',
        description: 'Multi-start helical coils absorbing radiant and convective heat from the burner flame.',
      },
      {
        title: 'HIGH-TEMPERATURE CIRCULATING PUMP',
        description: 'Centrifugal pump maintaining turbulent flow inside coils to prevent oil overheating and cracking.',
      },
      {
        title: 'OVERHEAD EXPANSION & DEAERATOR TANK',
        description: 'Accommodates thermal expansion (~7% per 100°C rise) and safely vents trapped gases and moisture.',
      },
      {
        title: 'DE-ASPHALTING / STRAINER SYSTEM',
        description: 'Inline high-mesh filters trap carbon sludge and degraded fluid particles, preventing tube scale buildup.',
      },
      {
        title: 'SAFETY & FLAME CONTROL SYSTEM',
        description: 'Automatic burner sequencing, differential pressure switches, high-temperature interlocks, and alarm panel.',
      },
      {
        title: 'HEAVY REFRACTORY & INSULATION',
        description: 'Ceramic fiber blanket and refractory castable minimize shell surface temperature and heat loss.',
      },
    ],
    applications: [
      'Asphalt & Bitumen Plants: Keeping bitumen tanks and lines fluid at 160°C–180°C',
      'PMB & CRMB Polymer Bitumen Modification Plants',
      'Bitumen Emulsion Plants & Drum Decanters',
      'Bulk Bitumen Terminals & Storage Installations',
    ],
    specifications: [
      { parameter: 'Heating Capacity', value: '100,000 kcal/hr to 15,000,000 kcal/hr+' },
      { parameter: 'Operating Temperature', value: '150°C to 320°C (mineral oils) / Up to 400°C (synthetic)' },
      { parameter: 'Operating Pressure', value: '2 bar to 5 bar' },
      { parameter: 'Thermal Efficiency', value: '88% to 92%' },
      { parameter: 'Fuel Compatibility', value: 'Diesel, Heavy Oil (FO/LDO), Natural Gas, LPG, Solid Fuels' },
      { parameter: 'Construction Standards', value: 'ASME Section VIII, EN 13445, or IBR codes' },
      { parameter: 'Pump Type', value: 'Centrifugal hot oil circulation pump with mechanical seal' },
    ],
    heroImage: '/src/assets/images/products/p9_img1.jpg',
    gallery: [
      '/src/assets/images/products/p9_img1.jpg',
      '/src/assets/images/products/p9_img2.jpg',
      '/src/assets/images/products/p9_img3.jpg',
      '/src/assets/images/products/p9_img4.jpg',
    ],
    isPlaceholder: false,
    featured: false,
  },
];

export const ALL_PRODUCTS: Product[] = [
  // 9 Real Bitumen Modify Equipment Products
  ...BITUMEN_PRODUCTS,

  // 6 Road Construction Equipment Products
  createPlaceholderProduct('road-construction-equipment', 'Road Construction Equipment', 1, 'Road Construction', '/src/assets/images/cat_road_construction_1791042905316.jpg', true),
  createPlaceholderProduct('road-construction-equipment', 'Road Construction Equipment', 2, 'Road Construction', '/src/assets/images/cat_road_construction_1791042905316.jpg'),
  createPlaceholderProduct('road-construction-equipment', 'Road Construction Equipment', 3, 'Road Construction', '/src/assets/images/cat_road_construction_1791042905316.jpg'),
  createPlaceholderProduct('road-construction-equipment', 'Road Construction Equipment', 4, 'Road Construction', '/src/assets/images/cat_road_construction_1791042905316.jpg'),
  createPlaceholderProduct('road-construction-equipment', 'Road Construction Equipment', 5, 'Road Construction', '/src/assets/images/cat_road_construction_1791042905316.jpg'),
  createPlaceholderProduct('road-construction-equipment', 'Road Construction Equipment', 6, 'Road Construction', '/src/assets/images/cat_road_construction_1791042905316.jpg'),

  // 2 Cement & Concrete Equipment Products
  createPlaceholderProduct('cement-concrete-equipment', 'Cement & Concrete Equipment', 1, 'Cement & Concrete', '/src/assets/images/cat_cement_concrete_1791042916344.jpg', true),
  createPlaceholderProduct('cement-concrete-equipment', 'Cement & Concrete Equipment', 2, 'Cement & Concrete', '/src/assets/images/cat_cement_concrete_1791042916344.jpg'),
];

export const COMPANY_INFO = {
  name: 'ATLAS ENGINEERING',
  tagline: 'Manufacturers of Road & Civil Construction Machinery',
  foundedYear: 1997,
  yearsOfExperience: '28+',
  contactPerson: 'Sunil L. Mistry',
  address: {
    line1: 'Plot No. 397-398, Road No. 9',
    line2: 'Kathwada GIDC',
    city: 'Ahmedabad',
    pincode: '382430',
    state: 'Gujarat',
    country: 'India',
    fullFormatted: 'Plot No. 397-398, Road No. 9, Kathwada GIDC, Ahmedabad-382430, Gujarat, India',
  },
  phones: [
    '+91 98250 73095',
    '+91 91736 72311',
    '+91 98240 99433',
  ],
  emails: [
    'contact@atlas.in',
    'atlasengineering@ymail.com',
  ],
  whyChooseUs: [
    {
      index: '01',
      title: 'Proven Industry Leadership',
      description: 'Over 28 years of continuous innovation, field experience, and deep domain knowledge.',
    },
    {
      index: '02',
      title: 'Precision Engineering',
      description: 'Advanced manufacturing technology coupled with strict quality control to deliver superior, high-efficiency equipment.',
    },
    {
      index: '03',
      title: 'Premium Quality & Reliability',
      description: 'Built with top-grade components and supervised by seasoned engineers to ensure reliable operation under the toughest site conditions.',
    },
    {
      index: '04',
      title: 'Global Footprint',
      description: 'Proven track record of powering major national and international infrastructure developments.',
    },
    {
      index: '05',
      title: 'Dedicated After-Sales Support',
      description: 'Outstanding customer service and technical assistance that turn first-time buyers into long-term partners.',
    },
  ],
  applications: [
    { title: 'Road Construction', desc: 'Highway & arterial road paving solutions' },
    { title: 'Highway Development', desc: 'High-speed corridor & expressway engineering' },
    { title: 'Asphalt Production', desc: 'Hot & warm mix asphalt plant integration' },
    { title: 'Bitumen Processing', desc: 'Emulsion & polymer modified bitumen plants' },
    { title: 'Pavement Maintenance', desc: 'Re-profiling & surface renewal equipment' },
    { title: 'Infrastructure Development', desc: 'Airport runways, bridges & ports' },
    { title: 'Industrial Construction', desc: 'Heavy civil foundation & batching works' },
  ],
};
