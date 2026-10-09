import catBitumenImg from '../assets/images/category_bitumen_equipment.jpg';
import catRoadImg from '../assets/images/category_road_equipment.jpg';
import catCementImg from '../assets/images/category_cement_equipment.jpg';
import cementFlyAshSiloImg from '../assets/images/products/cement_fly_ash_silo.jpg';
import concreteBatchingPlant1Img from '../assets/images/products/concrete_batching_plant_1.jpg';
import concreteBatchingPlant2Img from '../assets/images/products/concrete_batching_plant_2.jpg';
import concreteBatchingPlant3Img from '../assets/images/products/concrete_batching_plant_3.jpg';

export interface TechnicalSpec {
  parameter: string;
  value: string;
  note?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface GradeTableRow {
  grade: string;
  application: string;
}

export interface EmulsionGradeSection {
  number: string;
  title: string;
  description?: string;
  table?: GradeTableRow[];
  bestApplications?: string[];
  note?: string;
  examples?: string[];
}

export interface QuickSelectionRow {
  application: string;
  recommended: string;
}

export interface EmulsionGuideData {
  intro: string;
  sections: EmulsionGradeSection[];
  selectionGuide: QuickSelectionRow[];
  importantNotice: string;
  commercialNote: string;
}

export interface PmbEquipmentRow {
  equipment: string;
  function: string;
}

export interface PmbGradeRow {
  grade: string;
  tempBasis: string;
  application: string;
}

export interface PmbGradeLogic {
  grade: string;
  points: string[];
}

export interface CrmbGradeRow {
  grade: string;
  softeningPoint: string;
  application: string;
}

export interface CrmbGradeDetail {
  grade: string;
  heading: string;
  points: string[];
}

export interface PmbCrmbCompareRow {
  parameter: string;
  pmb: string;
  crmb: string;
}

export interface CapacityRow {
  capacity: string;
  production: string;
}

export interface PmbCrmbGuideData {
  intro: string;
  standardsNote: string;
  pmbPlant: {
    title: string;
    processFlow: string;
    polymersNote: string;
    shearNote: string;
    equipmentTable: PmbEquipmentRow[];
  };
  pmbGrades: {
    title: string;
    intro: string;
    table: PmbGradeRow[];
    designationNote: string;
    ircNote: string;
    applicationLogic: PmbGradeLogic[];
    selectionNote: string;
  };
  crmbPlant: {
    title: string;
    intro: string;
    standardNote: string;
    processFlow: string;
    dispersionNote: string;
  };
  crmbGrades: {
    title: string;
    intro: string;
    table: CrmbGradeRow[];
    classificationNote: string;
    gradesDetail: CrmbGradeDetail[];
  };
  comparison: {
    title: string;
    matrix: PmbCrmbCompareRow[];
  };
  configuration: {
    title: string;
    recommendation: string;
    diagramText: string;
    processNote: string;
  };
  capacities: {
    title: string;
    intro: string;
    capacityTable: CapacityRow[];
    tenTphNote: string;
    equipmentListTitle: string;
    equipmentList: string[];
    designPoint: string;
    commercialNote: string;
  };
}

export interface OxidizationEquipmentRow {
  equipment: string;
  function: string;
}

export interface OxidizationGradeRow {
  grade: string;
  characteristics: string;
  applications: string;
}

export interface OxidizationAppCategory {
  title: string;
  points: string[];
  citation?: string;
}

export interface OxidizationGuideData {
  intro: string;
  processFlow: string;
  equipmentTable: OxidizationEquipmentRow[];
  operatingPrinciples: string[];
  gradesIntro: string;
  gradesTable: OxidizationGradeRow[];
  gradesCitation: string;
  majorApplications: OxidizationAppCategory[];
  plantConceptDiagram: string;
  importantNote: string;
  summaryNote: string;
}

export interface ColdMixEquipmentRow {
  equipment: string;
  function: string;
}

export interface ColdMixTypeRow {
  type: string;
  binder: string;
  application: string;
}

export interface EmulsionGradeItem {
  grade: string;
  title: string;
  description: string;
}

export interface ColdMixGuideData {
  intro: string;
  equipmentTable: ColdMixEquipmentRow[];
  productionSteps: string[];
  productionNote: string;
  gradesIntro: string;
  typesTable: ColdMixTypeRow[];
  emulsionGradesIntro: string;
  emulsionGrades: EmulsionGradeItem[];
  configurationNote: string;
  advantages: string[];
  ircCitation: string;
  websiteSummary: string;
}

export interface StorageTankComponentRow {
  component: string;
  function: string;
}

export interface HeatingArrangementSection {
  title: string;
  intro: string;
  basicArrangement: string;
  componentsTable: StorageTankComponentRow[];
  advantages: string[];
  disadvantages: string[];
  note?: string;
}

export interface StorageTankGuideData {
  intro: string;
  arrangementsIntro: string;
  arrangementsList: string[];
  directHeating: HeatingArrangementSection;
  indirectHeating: HeatingArrangementSection;
}

export interface EmulsionTankComponentRow {
  component: string;
  function: string;
}

export interface HorizontalEmulsionTankGuideData {
  intro: string;
  basicConstruction: {
    intro: string;
    componentsTable: EmulsionTankComponentRow[];
  };
  typicalSizes: {
    capacities: string[];
    example: string;
  };
  designConsiderations: {
    intro: string;
    points: string[];
    importantNotice: string;
  };
  specifications: {
    title: string;
    specs: { parameter: string; value: string }[];
  };
  applications: {
    title: string;
    intro: string;
    storedEmulsions: string[];
    appliedUses: string;
    plantSizingNote: string;
  };
}

export interface DrumFillingSpecRow {
  parameter: string;
  emulsionSpec: string;
  hotBitumenSpec: string;
}

export interface DrumFillingFeatureItem {
  title: string;
  description: string;
}

export interface DrumFillingOperationItem {
  title: string;
  description: string;
}

export interface DrumFillingApplicationItem {
  sector: string;
  description: string;
}

export interface DrumFillingGuideData {
  intro: string;
  specsTable: DrumFillingSpecRow[];
  features: DrumFillingFeatureItem[];
  operationModes: DrumFillingOperationItem[];
  applications: DrumFillingApplicationItem[];
}

export interface BagFillingSpecRow {
  parameter: string;
  specification: string;
}

export interface BagFillingFeatureItem {
  title: string;
  description: string;
}

export interface BagFillingWorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface BagFillingCompatibilityItem {
  bagType: string;
  description: string;
}

export interface BagFillingGuideData {
  intro: string;
  specsTable: BagFillingSpecRow[];
  features: BagFillingFeatureItem[];
  workflowSteps: BagFillingWorkflowStep[];
  bagCompatibility: BagFillingCompatibilityItem[];
}

export interface ThermicHeaterSpecRow {
  parameter: string;
  specification: string;
}

export interface ThermicHeaterComponentItem {
  title: string;
  description: string;
}

export interface ThermicHeaterGuideData {
  intro: string;
  specsTable: ThermicHeaterSpecRow[];
  components: ThermicHeaterComponentItem[];
  systemLayout: {
    intro: string;
    flowArrangement: string;
    description: string;
  };
  applications: string[];
}

export interface DrumMixSpecRow {
  parameter: string;
  range: string;
}

export interface DrumMixZoneItem {
  zoneNumber: number;
  title: string;
  description: string;
  subZones?: { name: string; description: string }[];
}

export interface DrumMixGuideData {
  capacityBadge: string;
  intro: string;
  specsTable: DrumMixSpecRow[];
  systemLayoutIntro: string;
  zones: DrumMixZoneItem[];
}

export interface WetMixSpecRow {
  parameter: string;
  range: string;
}

export interface WetMixAssemblyItem {
  title: string;
  description: string;
}

export interface WetMixGuideData {
  intro: string;
  specsTable: WetMixSpecRow[];
  layoutIntro: string;
  assemblies: WetMixAssemblyItem[];
}

export interface PaverSpecRow {
  parameter: string;
  value: string;
}

export interface PaverFeatureItem {
  title: string;
  description?: string;
  subPoints?: { label: string; text: string }[];
}

export interface PaverFinisherGuideData {
  intro: string;
  specsTable: PaverSpecRow[];
  features: PaverFeatureItem[];
}

export interface TruckSprayerSpecRow {
  parameter: string;
  value: string;
}

export interface TruckSprayerFeatureItem {
  title: string;
  description?: string;
  subPoints?: { label: string; text: string }[];
}

export interface TruckSprayerCleaningItem {
  title: string;
  description: string;
}

export interface TruckSprayerGuideData {
  capacityBadge: string;
  intro: string;
  specsTable: TruckSprayerSpecRow[];
  features: TruckSprayerFeatureItem[];
  cleaningIntro: string;
  cleaningItems: TruckSprayerCleaningItem[];
}

export interface TractorSprayerSpecRow {
  parameter: string;
  value: string;
}

export interface TractorSprayerFeatureItem {
  title: string;
  description?: string;
  subPoints?: { label: string; text: string }[];
}

export interface TractorSprayerCleaningItem {
  number: number;
  title: string;
  description: string;
}

export interface TractorSprayerGuideData {
  capacityBadge: string;
  intro: string;
  specsTable: TractorSprayerSpecRow[];
  features: TractorSprayerFeatureItem[];
  cleaningIntro: string;
  cleaningItems: TractorSprayerCleaningItem[];
}

export interface ConcreteBatchingSpecRow {
  parameter: string;
  compactSeries: string;
  largeSeries: string;
}

export interface ConcreteBatchingAnatomyItem {
  number: number;
  title: string;
  description?: string;
  subMixers?: { type: string; details: string }[];
}

export interface ConcreteBatchingConfigItem {
  type: string;
  description: string;
}

export interface ConcreteBatchingPlantGuideData {
  capacityBadge: string;
  intro: string;
  specsTable: ConcreteBatchingSpecRow[];
  anatomyIntro: string;
  anatomyItems: ConcreteBatchingAnatomyItem[];
  configurationsIntro: string;
  configurations: ConcreteBatchingConfigItem[];
}

export interface SiloTechnicalSpecRow {
  parameter: string;
  value: string;
}

export interface SiloLevelIndicatorItem {
  type: string;
  description: string;
}

export interface SiloAccessoryItem {
  number: number;
  title: string;
  description: string;
  levelIndicators?: SiloLevelIndicatorItem[];
}

export interface SiloGuideData {
  capacityBadge: string;
  intro: string;
  specsTable: SiloTechnicalSpecRow[];
  accessoriesIntro: string;
  accessories: SiloAccessoryItem[];
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
  featuresTitle?: string;
  features: FeatureItem[];
  applications: string[];
  specifications: TechnicalSpec[];
  productionProcess?: string[];
  plantTypes?: FeatureItem[];
  emulsionGuide?: EmulsionGuideData;
  pmbCrmbGuide?: PmbCrmbGuideData;
  oxidizationGuide?: OxidizationGuideData;
  coldMixGuide?: ColdMixGuideData;
  storageTankGuide?: StorageTankGuideData;
  horizontalTankGuide?: HorizontalEmulsionTankGuideData;
  drumFillingGuide?: DrumFillingGuideData;
  bagFillingGuide?: BagFillingGuideData;
  thermicHeaterGuide?: ThermicHeaterGuideData;
  drumMixGuide?: DrumMixGuideData;
  wetMixGuide?: WetMixGuideData;
  paverGuide?: PaverFinisherGuideData;
  truckSprayerGuide?: TruckSprayerGuideData;
  tractorSprayerGuide?: TractorSprayerGuideData;
  concreteBatchingGuide?: ConcreteBatchingPlantGuideData;
  siloGuide?: SiloGuideData;
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
    name: 'Bitumen Modifier Plants',
    shortName: 'Bitumen Equipment',
    subtitle: 'Primary Engineering Focus & High-Performance Plants',
    description: 'Advanced systems engineered for efficient production of Modified Bitumen (CRMB & PMB), ensuring high durability, optimal viscosity, and superior road performance.',
    productCount: 10,
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
    description: 'A comprehensive range of heavy-duty road machinery—including Asphalt Batch Mix Plants, Drum Mix Plants, Wet Mix Macadam (WMM) Plants, and Bitumen Sprayers—built to withstand demanding site conditions.',
    productCount: 7,
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
    name: 'Cement Batching Plants',
    shortName: 'Cement Batching',
    subtitle: 'High-Capacity Batching & Mixing Solutions',
    description: 'High-capacity stationary and mobile Concrete Batching Plants delivering precise mix accuracy, rapid operational setup, and minimal maintenance costs.',
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

// 10 REAL BITUMEN MODIFY EQUIPMENT PRODUCTS
export const BITUMEN_PRODUCTS: Product[] = [
  {
    id: 'bitumen-emulsion-plant',
    slug: 'bitumen-emulsion-plant',
    categoryId: 'bitumen-modify-equipment',
    categoryName: 'Bitumen Modify Equipment',
    name: 'BITUMEN EMULSION PLANT',
    code: 'ATL-BEP-01',
    shortDescription: 'A facility designed to produce a stable, liquid mixture of bitumen, water, and an emulsifying agent for use in road construction and maintenance, particularly in cold applications.',
    description: 'A BITUMEN EMULSION PLANT IS A FACILITY DESIGNED TO PRODUCE A STABLE, LIQUID MIXTURE OF BITUMEN, WATER, AND AN EMULSIFYING AGENT FOR USE IN ROAD CONSTRUCTION AND MAINTENANCE, PARTICULARLY IN COLD APPLICATIONS. THIS PROCESS IS SAFER AND MORE ENERGY-EFFICIENT THAN USING HOT BITUMEN.',
    highlights: [
      'Produces stable liquid mixture of bitumen, water, and emulsifying agent',
      'High-Shear Colloid Mill dispersing heated bitumen into microscopic droplets (1–10 microns)',
      'Automated PLC-based system monitoring flow rates, temperatures, and dosing ratios',
      'Batch Type, Continuous Type, Stationary, or Mobile/Containerized configurations',
      'Supports Rapid-Setting (RS), Medium-Setting (MS), and Slow-Setting (SS) Emulsions',
    ],
    features: [
      {
        title: 'BITUMEN STORAGE TANKS',
        description: 'INSULATED AND OFTEN HEATED TANKS THAT STORE RAW BITUMEN AT AROUND 150–160°C TO REDUCE ITS VISCOSITY.',
      },
      {
        title: 'WATER TANKS',
        description: 'STORE WATER, WHICH IS HEATED TO AN OPTIMAL TEMPERATURE (TYPICALLY 40–70°C).',
      },
      {
        title: 'EMULSIFIER DOSING SYSTEM & CHEMICAL TANKS',
        description: 'SEPARATE TANKS (OFTEN STAINLESS STEEL FOR CORROSION RESISTANCE) AND PRECISE DOSING UNITS FOR STORING AND ADDING EMULSIFIERS, ACIDS/ALKALIS (FOR PH CONTROL), AND OTHER ADDITIVES TO THE WATER PHASE.',
      },
      {
        title: 'COLLOID MILL',
        description: 'THE "HEART" OF THE PLANT, THIS HIGH-SHEAR MIXER DISPERSES THE HEATED BITUMEN INTO MICROSCOPIC DROPLETS (1–10 MICRONS) WITHIN THE WATER PHASE TO FORM A STABLE EMULSION.',
      },
      {
        title: 'CONTROL PANEL',
        description: 'AN AUTOMATED (OFTEN PLC-BASED) SYSTEM THAT MONITORS AND REGULATES FLOW RATES, TEMPERATURES, AND DOSING RATIOS TO ENSURE CONSISTENT PRODUCT QUALITY AND SAFETY.',
      },
      {
        title: 'STORAGE TANKS',
        description: 'TANKS FOR THE FINISHED EMULSION, OFTEN EQUIPPED WITH AGITATORS TO PREVENT SETTLING.',
      },
      {
        title: 'HEATING/COOLING SYSTEMS',
        description: 'SYSTEMS (THERMAL OIL OR ELECTRIC) FOR HEATING THE BITUMEN/WATER AND, IN SOME CASES, COOLING THE FINAL EMULSION BEFORE STORAGE.',
      },
    ],
    productionProcess: [
      'HEATING THE RAW BITUMEN AND WATER SEPARATELY TO SPECIFIC TEMPERATURES.',
      'PREPARING THE WATER PHASE BY MIXING WATER WITH PRECISE AMOUNTS OF EMULSIFIERS AND PH-ADJUSTING AGENTS IN A PREPARATION TANK.',
      'MILLING BOTH HEATED STREAMS SIMULTANEOUSLY IN A COLLOID MILL UNDER HIGH SHEAR TO CREATE A FINE, STABLE DISPERSION OF BITUMEN DROPLETS IN THE WATER.',
      'COOLING AND TRANSFERRING THE FINISHED EMULSION TO STORAGE TANKS.',
      'QUALITY CONTROL TESTING TO ENSURE THE FINAL PRODUCT MEETS INDUSTRY STANDARDS (E.G., VISCOSITY, STABILITY, SETTING TIME).',
    ],
    plantTypes: [
      {
        title: 'BATCH TYPE',
        description: 'SUITABLE FOR SMALLER VOLUMES AND SPECIFIC PROJECT DEMANDS.',
      },
      {
        title: 'CONTINUOUS TYPE',
        description: 'DESIGNED FOR HIGH-CAPACITY, LARGE-SCALE, UNINTERRUPTED PRODUCTION.',
      },
      {
        title: 'STATIONARY',
        description: 'INSTALLED IN A FIXED LOCATION FOR CENTRAL PRODUCTION.',
      },
      {
        title: 'MOBILE/CONTAINERIZED',
        description: 'BUILT INTO SHIPPING CONTAINERS OR TRAILER-MOUNTED FOR EASY TRANSPORT AND QUICK SETUP ACROSS MULTIPLE PROJECT SITES.',
      },
    ],
    applications: [
      'SURFACE DRESSING',
      'TACK COATS (BONDING LAYERS OF ASPHALT)',
      'PRIME COATS (SEALING GRANULAR BASES)',
      'COLD MIX ASPHALT PRODUCTION',
      'POTHOLE REPAIR AND CRACK SEALING',
      'WATERPROOFING APPLICATIONS',
    ],
    emulsionGuide: {
      intro: 'Bitumen emulsions are generally classified by emulsion charge, setting rate, and viscosity. The exact grade names vary by standard (such as IS, ASTM/AASHTO), but the main practical grades are rapid-setting (RS), medium-setting (MS), and slow-setting (SS), plus special grades such as cationic rapid/medium/slow setting and CSS-1/CSS-2.',
      sections: [
        {
          number: '1',
          title: 'Rapid Setting (RS) Emulsion',
          description: 'Designed to break quickly when it contacts aggregate.',
          table: [
            { grade: 'CRS-1 / CRS-2 (cationic rapid setting)', application: 'Surface dressing, chip sealing' },
            { grade: 'RS-1 / RS-2', application: 'Tack coat and surface treatments, depending on specification' },
          ],
          bestApplications: [
            'Chip seal / surface dressing',
            'Surface dressing on highways',
            'Spraying bitumen over prepared road surfaces',
            'Sealing and waterproofing',
            'Quick-setting surface treatments',
          ],
          note: 'CRS-2 is generally more viscous than CRS-1 and is useful where a heavier application is required.',
        },
        {
          number: '2',
          title: 'Medium Setting (MS) Emulsion',
          description: 'Breaks at a moderate rate and is suitable where the emulsion needs to mix with relatively coarse aggregates.',
          table: [
            { grade: 'CMS-2 / CMS-2s', application: 'Premix, cold mix, aggregate mixing' },
            { grade: 'MS-type', application: 'Cold mix construction and maintenance' },
          ],
          bestApplications: [
            'Cold-mix asphalt',
            'Premix bituminous macadam',
            'Open-graded mixtures',
            'Road maintenance',
            'Aggregate treatment',
            'Pothole repair mixtures',
          ],
          note: 'Medium-setting emulsions provide more working time than rapid-setting emulsions.',
        },
        {
          number: '3',
          title: 'Slow Setting (SS) Emulsion',
          description: 'Remains workable for longer and is particularly suitable for mixing with fine aggregates and mineral fillers.',
          table: [
            { grade: 'CSS-1', application: 'Fog seal, tack coat, slurry seal' },
            { grade: 'CSS-2', application: 'Slurry seal, soil stabilization and mixing' },
            { grade: 'SS-1 / SS-1h', application: 'Tack coat, fog seal and maintenance' },
          ],
          bestApplications: [
            'Slurry seal',
            'Fog seal',
            'Tack coat',
            'Soil stabilization',
            'Dust control',
            'Mixing with fine aggregates',
            'Road maintenance',
          ],
          note: 'CSS-1 is commonly used where a relatively low-viscosity emulsion is desirable, while CSS-2 is more viscous and suitable for heavier applications.',
        },
        {
          number: '4',
          title: 'Cationic vs. Anionic Emulsion',
          description: 'This is another important classification. Cationic emulsions carry a positive charge and generally have good adhesion to many aggregates, particularly aggregates that are wet or negatively charged. They are widely used in modern road construction.',
          examples: [
            'CRS-1',
            'CRS-2',
            'CMS-2',
            'CSS-1',
            'CSS-2',
          ],
          note: 'Anionic emulsions carry a negative charge and are used with compatible aggregates and applications according to the applicable specification.',
        },
        {
          number: '5',
          title: 'Special-Purpose Emulsions',
          description: 'There are also modified emulsions designed for specific road applications:',
          bestApplications: [
            'Polymer-modified bitumen emulsion (PMBE) — high-performance surface dressing, crack treatment and heavy-traffic roads.',
            'Microsurfacing emulsion — polymer-modified emulsion designed specifically for microsurfacing.',
            'Tack coat emulsion — bonding between existing pavement and a new asphalt layer.',
            'Fog seal emulsion — sealing and rejuvenating an aged pavement surface.',
            'Cold-mix emulsion — production of cold-mix asphalt without conventional hot mixing.',
          ],
        },
      ],
      selectionGuide: [
        { application: 'Chip seal / surface dressing', recommended: 'CRS-1 / CRS-2' },
        { application: 'Tack coat', recommended: 'CSS-1 / SS-1 / suitable tack-coat grade' },
        { application: 'Fog seal', recommended: 'CSS-1 / SS-1' },
        { application: 'Slurry seal', recommended: 'CSS-1 / CSS-2' },
        { application: 'Microsurfacing', recommended: 'Polymer-modified CSS-type emulsion' },
        { application: 'Cold mix asphalt', recommended: 'CMS-2 / CSS-2, depending on aggregate and mix design' },
        { application: 'Premix', recommended: 'MS/CMS grades' },
        { application: 'Pothole repair', recommended: 'MS/CMS or suitable cold-mix emulsion' },
        { application: 'Soil stabilization', recommended: 'SS/CSS grades' },
        { application: 'Heavy-traffic surface treatment', recommended: 'CRS-2 or polymer-modified emulsion' },
      ],
      importantNotice: 'Important: The correct grade should not be selected solely from the application name. Aggregate type, temperature, moisture, particle size, traffic level, spray rate, and the applicable IS/AASHTO/ASTM specification should be considered.',
      commercialNote: 'If you are selecting grades for an emulsion manufacturing plant, the most commercially useful range is usually CRS-1, CRS-2, CMS-2, CSS-1 and CSS-2, with polymer-modified grades added for microsurfacing and premium applications.',
    },
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
    shortDescription: 'High-shear blending and dispersion plant used to modify paving bitumen with polymers or crumb rubber to improve rutting resistance, elasticity, fatigue resistance, temperature resistance and durability.',
    description: `Yes. A PMB/CRMB Bitumen Modification Plant is a high-shear blending and dispersion plant used to modify paving bitumen with polymers or crumb rubber to improve rutting resistance, elasticity, fatigue resistance, temperature resistance and durability.\n\nIn India, PMB is covered by IS 15462:2019, while rubber-modified bitumen is covered separately by IS 17079:2019. BIS currently lists PMB grades PMB 64-10, 70-10, 76-10, 82-10 and 76-22 under IS 15462:2019.`,
    highlights: [
      'High-shear blending and dispersion plant modifying paving bitumen with polymers or crumb rubber',
      'Complies with IS 15462:2019 (PMB 64-10, 70-10, 76-10, 82-10, 76-22)',
      'Complies with IS 17079:2019 (CRMB 55, CRMB 60 under Type B CRMB)',
      'Improves rutting resistance, elasticity, fatigue resistance, temperature resistance and durability',
      'Configurations available from 5 TPH (Small), 10 TPH (Medium), 15 TPH (Large) to 20 TPH (High capacity)',
    ],
    features: [
      {
        title: 'Base Bitumen Storage Tank',
        description: 'Stores VG-grade base bitumen',
      },
      {
        title: 'Bitumen Transfer Pump',
        description: 'Transfers hot bitumen',
      },
      {
        title: 'Bitumen Heating System',
        description: 'Maintains required processing temperature',
      },
      {
        title: 'Polymer Storage/Hopper',
        description: 'Stores polymer',
      },
      {
        title: 'Polymer Feeding System',
        description: 'Controlled polymer dosing',
      },
      {
        title: 'High-Shear Mixer / Colloid Mill',
        description: 'Disperses polymer into bitumen',
      },
      {
        title: 'Modification/Reaction Tank',
        description: 'Polymer swelling and development',
      },
      {
        title: 'Recirculation Pump',
        description: 'Continuous circulation',
      },
      {
        title: 'Finished Product Tank',
        description: 'Stores finished PMB',
      },
      {
        title: 'Thermic Fluid Heater',
        description: 'Heating of tanks and pipelines',
      },
      {
        title: 'Electrical/PLC Panel',
        description: 'Automatic plant control',
      },
      {
        title: 'Piping & Valves',
        description: 'Bitumen/polymer circulation',
      },
      {
        title: 'Sampling System',
        description: 'Quality-control sampling',
      },
      {
        title: 'Laboratory Equipment',
        description: 'PMB quality testing',
      },
    ],
    applications: [
      'General road construction & urban roads (PMB 64-10)',
      'National & state highways with heavy traffic (PMB 70-10, CRMB 55)',
      'Expressways & high-temperature pavement (PMB 76-10, CRMB 60)',
      'Extremely heavy traffic & special high-performance pavements (PMB 82-10)',
      'High-altitude areas & cold climatic conditions (PMB 76-22)',
      'Flexible pavement, surface dressing & bituminous mixes (CRMB 55, CRMB 60)',
    ],
    specifications: [
      { parameter: 'Plant Configuration', value: 'Combined PMB + CRMB Modification Plant' },
      { parameter: 'Capacity Options', value: '5 TPH (Small), 10 TPH (Medium), 15 TPH (Large), 20 TPH (High capacity)' },
      { parameter: 'PMB Standard', value: 'IS 15462:2019' },
      { parameter: 'CRMB Standard', value: 'IS 17079:2019 (Type B CRMB)' },
      { parameter: 'PMB Grades', value: 'PMB 64-10, PMB 70-10, PMB 76-10, PMB 82-10, PMB 76-22' },
      { parameter: 'CRMB Grades', value: 'CRMB 55 (min 55°C softening), CRMB 60 (min 60°C softening)' },
      { parameter: 'Typical Polymers', value: 'SBS, SBR, EVA and compatible polymer modifiers' },
      { parameter: 'Crumb Rubber Source', value: 'Processed waste tyres' },
      { parameter: 'Mixing Mechanism', value: 'High-Shear Colloid Mill / Dispersion System' },
      { parameter: 'Heating Medium', value: 'Thermic Fluid Heater with hot-oil jacketed lines' },
      { parameter: 'Automation', value: 'Fully Automatic PLC with SCADA control interface' },
    ],
    pmbCrmbGuide: {
      intro: 'A PMB/CRMB Bitumen Modification Plant is a high-shear blending and dispersion plant used to modify paving bitumen with polymers or crumb rubber to improve rutting resistance, elasticity, fatigue resistance, temperature resistance and durability.\n\nIn India, PMB is covered by IS 15462:2019, while rubber-modified bitumen is covered separately by IS 17079:2019. BIS currently lists PMB grades PMB 64-10, 70-10, 76-10, 82-10 and 76-22 under IS 15462:2019.',
      standardsNote: 'In India, PMB is covered by IS 15462:2019, while rubber-modified bitumen is covered separately by IS 17079:2019. BIS currently lists PMB grades PMB 64-10, 70-10, 76-10, 82-10 and 76-22 under IS 15462:2019.',
      pmbPlant: {
        title: '1. PMB Plant — Polymer Modified Bitumen',
        processFlow: 'Base bitumen → Heating → Polymer dosing → High-shear mixing → Development/conditioning tank → Storage → Finished PMB',
        polymersNote: 'Typical polymers include SBS, SBR, EVA and other compatible polymer modifiers. The selection depends on the required performance grade and application.',
        shearNote: 'A proper PMB plant needs a high-shear dispersion system because homogeneous polymer dispersion is critical to the final binder performance. BIS testing requirements include homogeneity and separation/degradation-related checks.',
        equipmentTable: [
          { equipment: 'Base Bitumen Storage Tank', function: 'Stores VG-grade base bitumen' },
          { equipment: 'Bitumen Transfer Pump', function: 'Transfers hot bitumen' },
          { equipment: 'Bitumen Heating System', function: 'Maintains required processing temperature' },
          { equipment: 'Polymer Storage/Hopper', function: 'Stores polymer' },
          { equipment: 'Polymer Feeding System', function: 'Controlled polymer dosing' },
          { equipment: 'High-Shear Mixer / Colloid Mill', function: 'Disperses polymer into bitumen' },
          { equipment: 'Modification/Reaction Tank', function: 'Polymer swelling and development' },
          { equipment: 'Recirculation Pump', function: 'Continuous circulation' },
          { equipment: 'Finished Product Tank', function: 'Stores finished PMB' },
          { equipment: 'Thermic Fluid Heater', function: 'Heating of tanks and pipelines' },
          { equipment: 'Electrical/PLC Panel', function: 'Automatic plant control' },
          { equipment: 'Piping & Valves', function: 'Bitumen/polymer circulation' },
          { equipment: 'Sampling System', function: 'Quality-control sampling' },
          { equipment: 'Laboratory Equipment', function: 'PMB quality testing' },
        ],
      },
      pmbGrades: {
        title: '2. PMB Grades under IS 15462:2019',
        intro: 'The current Indian performance-based PMB specification includes five principal grades.',
        table: [
          { grade: 'PMB 64-10', tempBasis: 'Moderate-high pavement temperature', application: 'General highways, urban roads' },
          { grade: 'PMB 70-10', tempBasis: 'Higher pavement temperature', application: 'High-temperature/high-traffic roads' },
          { grade: 'PMB 76-10', tempBasis: 'Very high pavement temperature', application: 'Heavy traffic, expressways' },
          { grade: 'PMB 82-10', tempBasis: 'Extremely high pavement temperature', application: 'Very heavy/extreme traffic and high-temperature locations' },
          { grade: 'PMB 76-22', tempBasis: 'High maximum + very low minimum temperature', application: 'High-altitude/cold-climate areas' },
        ],
        designationNote: 'The numbers are performance-temperature designations, not penetration grades. For example, the first number relates to the upper pavement-temperature requirement and the second to the lower temperature requirement.',
        ircNote: 'IRC guidance states that PMB selection for different service conditions should follow IS 15462:2019.',
        applicationLogic: [
          {
            grade: 'PMB 64-10',
            points: [
              'General road construction',
              'Urban roads',
              'Moderate traffic',
              'Conventional bituminous pavement',
            ],
          },
          {
            grade: 'PMB 70-10',
            points: [
              'National/state highways',
              'Heavy traffic',
              'Hotter pavement conditions',
              'Bus/truck routes',
            ],
          },
          {
            grade: 'PMB 76-10',
            points: [
              'Expressways',
              'Heavy and very heavy traffic',
              'High-temperature pavement',
              'Areas susceptible to rutting',
            ],
          },
          {
            grade: 'PMB 82-10',
            points: [
              'Extremely heavy traffic',
              'Very high pavement temperatures',
              'Special high-performance pavement applications',
            ],
          },
          {
            grade: 'PMB 76-22',
            points: [
              'High-altitude areas',
              'Cold climatic conditions',
              'Pavements requiring both high-temperature rut resistance and low-temperature cracking resistance',
            ],
          },
        ],
        selectionNote: 'The actual grade should be selected from the project\'s pavement-temperature and traffic requirements, rather than simply choosing the strongest grade.',
      },
      crmbPlant: {
        title: '3. CRMB Plant — Crumb Rubber Modified Bitumen',
        intro: 'CRMB is different from conventional PMB because the principal modifier is crumb rubber, normally obtained from processed waste tyres.',
        standardNote: 'The Indian specification is IS 17079:2019 Rubber Modified Bitumen (RMB). BIS testing information identifies CRMB 55 and CRMB 60 under Type B CRMB.',
        processFlow: 'Base bitumen → Heating → Crumb rubber dosing → High-shear mixing → Digestion/development → Recirculation → Storage → CRMB',
        dispersionNote: 'The rubber must be adequately dispersed/swollen in the hot bitumen to obtain the required properties.',
      },
      crmbGrades: {
        title: '4. CRMB Grades',
        intro: 'Common Indian CRMB grades include:',
        table: [
          { grade: 'CRMB 55', softeningPoint: '55°C', application: 'Heavy-duty road applications, surface treatments' },
          { grade: 'CRMB 60', softeningPoint: '60°C', application: 'Higher-temperature/heavier-duty applications' },
        ],
        classificationNote: 'Earlier/common specifications also refer to CRMB 50, CRMB 55 and CRMB 60 classifications, with the grade number corresponding to minimum softening point.',
        gradesDetail: [
          {
            grade: 'CRMB 55',
            heading: 'Suitable for:',
            points: [
              'Highway construction',
              'Heavy traffic roads',
              'Flexible pavement',
              'Surface dressing',
              'Bituminous mixes',
              'Roads requiring improved resistance to rutting and cracking',
            ],
          },
          {
            grade: 'CRMB 60',
            heading: 'Used where higher-temperature performance is required, particularly:',
            points: [
              'Heavy and very heavy traffic',
              'Hot climatic conditions',
              'Expressways/highways',
              'Pavements requiring greater resistance to permanent deformation',
            ],
          },
        ],
      },
      comparison: {
        title: '5. PMB vs CRMB',
        matrix: [
          { parameter: 'Modifier', pmb: 'Polymer', crmb: 'Crumb rubber' },
          { parameter: 'Common modifier', pmb: 'SBS/SBR/EVA etc.', crmb: 'Waste-tyre crumb rubber' },
          { parameter: 'Main standard', pmb: 'IS 15462:2019', crmb: 'IS 17079:2019' },
          { parameter: 'Typical grades', pmb: 'PMB 64-10 to PMB 82-10, PMB 76-22', crmb: 'CRMB 55, CRMB 60' },
          { parameter: 'Main advantage', pmb: 'Controlled performance characteristics', crmb: 'Elasticity, durability and recycling benefit' },
          { parameter: 'Equipment', pmb: 'High-shear polymer mixer', crmb: 'High-shear rubber mixing/digestion system' },
          { parameter: 'Storage', pmb: 'Requires controlled temperature/recirculation', crmb: 'Generally requires stronger agitation/recirculation' },
          { parameter: 'Typical market', pmb: 'Expressways, highways, high-performance pavements', crmb: 'Highways, heavy-duty roads, surface treatments' },
        ],
      },
      configuration: {
        title: '6. Recommended PMB/CRMB Plant Configuration',
        recommendation: 'For a commercial plant, I would recommend designing a combined PMB + CRMB modification plant rather than two completely independent plants.',
        diagramText: `                    BASE BITUMEN TANKS
                           │
                           ▼
                    BITUMEN PUMP
                           │
                    ┌──────┴──────┐
                    │             │
                    ▼             ▼
              PMB MODIFIER    CRUMB RUBBER
                 SYSTEM          SYSTEM
                    │             │
                    ▼             ▼
               HIGH-SHEAR MIXING SYSTEM
                    │
                    ▼
             DEVELOPMENT / REACTION
                    │
                    ▼
             RECIRCULATION SYSTEM
                    │
                    ▼
             FINISHED PRODUCT TANK
                    │
                    ▼
             LOADING / DISPATCH`,
        processNote: 'For PMB production, I would provide separate polymer dosing and high-shear dispersion equipment. For CRMB, provide rubber feeding, digestion/development and recirculation equipment.',
      },
      capacities: {
        title: '7. Example Plant Capacities',
        intro: 'A practical commercial plant can be configured as:',
        capacityTable: [
          { capacity: 'Small', production: '5 TPH' },
          { capacity: 'Medium', production: '10 TPH' },
          { capacity: 'Large', production: '15 TPH' },
          { capacity: 'High capacity', production: '20 TPH' },
        ],
        tenTphNote: 'For a 10 TPH PMB/CRMB plant, for example, the system can be designed around approximately 10 tonnes/hour finished modified bitumen production, subject to the required grade, polymer/rubber dosage, mixing time and development time.',
        equipmentListTitle: 'Typical major equipment for a 10 TPH plant',
        equipmentList: [
          '2 × base bitumen storage tanks',
          '1 × PMB premix/modification tank',
          '1 × CRMB reaction/development tank',
          '1 × finished-product tank',
          '1 × high-shear colloid/homogenizer system',
          'Bitumen transfer/recirculation pumps',
          'Polymer dosing system',
          'Crumb-rubber feeding system',
          'Thermic-fluid heater',
          'Hot-oil circulation system',
          'Insulated/heated pipelines',
          'Automatic valves',
          'PLC + HMI/SCADA',
          'Load cells/flow meters',
          'Temperature and pressure instrumentation',
          'Sampling points',
          'Finished-product loading system',
        ],
        designPoint: 'Important design point: PMB and CRMB should not simply be treated as the same process with different additives. Their mixing, dispersion, development time, storage and quality-control requirements are different.',
        commercialNote: 'If you are planning this for Atlas Engineering, I can also prepare a complete 10 TPH PMB + CRMB plant technical specification, including all tank capacities/dimensions, high-shear mixer size, thermic-fluid heater capacity, pumps, polymer/rubber dosing system, PLC/SCADA, PFD, P&ID, approximate power requirement, and a commercial quotation format.',
      },
    },
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
    shortDescription: 'A Bitumen Air Blowing Oxidization Plant is used to convert penetration-grade bitumen or suitable refinery bitumen feed into oxidized/blown bitumen by passing controlled hot air through heated bitumen.',
    description: `A Bitumen Air Blowing Oxidization Plant is used to convert penetration-grade bitumen or suitable refinery bitumen feed into oxidized/blown bitumen by passing controlled hot air through heated bitumen. The oxidation process increases the softening point and generally reduces penetration, producing a harder, more heat-resistant industrial bitumen. (DRG Bitumen)`,
    highlights: [
      'Converts penetration-grade bitumen into oxidized/blown bitumen via controlled hot air blowing',
      'Produces grades: 75/25, 85/25, 85/40, 90/15, 90/40, 95/25, 105/35, 115/15, 150/5',
      'Air-blowing reactor with uniform air ring/nozzle dispersion and mist separation',
      'Full off-gas treatment: mist catcher, condenser, scrubber, and vent blower',
      'Industrial applications: roofing, waterproofing, pipe coating, joint filling, and electrical insulation',
    ],
    features: [
      {
        title: 'Bitumen Feed/Storage Tank',
        description: 'Stores and maintains feed bitumen at required temperature',
      },
      {
        title: 'Air-Blowing Reactor',
        description: 'Main oxidation vessel where hot air is dispersed through bitumen',
      },
      {
        title: 'Air Blower/Compressor',
        description: 'Supplies controlled oxidation air',
      },
      {
        title: 'Air Ring / Air Nozzles',
        description: 'Distributes air uniformly inside the reactor',
      },
      {
        title: 'Heating System',
        description: 'Maintains required bitumen processing temperature',
      },
      {
        title: 'Mist Catcher',
        description: 'Removes entrained bitumen droplets from outgoing gases',
      },
      {
        title: 'Condenser',
        description: 'Condenses recoverable vapours',
      },
      {
        title: 'Scrubber',
        description: 'Treats/cleans process gases before discharge',
      },
      {
        title: 'Vent Blower',
        description: 'Maintains controlled gas flow and reactor draft',
      },
      {
        title: 'Oxidized Bitumen Storage Tank',
        description: 'Stores finished product',
      },
      {
        title: 'Pumps & Valves',
        description: 'Transfer feed and finished bitumen',
      },
      {
        title: 'PLC/Control Panel',
        description: 'Controls temperature, airflow, level, pressure and process operation',
      },
    ],
    applications: [
      'Roofing & Waterproofing: Roofing felt, waterproofing membranes, built-up roofing, roof coatings (ASTM D312/D312M)',
      'Pipe Coating: Anti-corrosion coating for underground steel pipelines, oil & gas pipeline protection',
      'Joint Filling & Sealants: Expansion/joint-filling compounds, crack sealing, construction sealants',
      'Industrial Applications: Bituminous paints, mastics, adhesives, sound-damping materials',
      'Rubber/plastic processing, electrical cable and insulation applications (IARC Publications)',
    ],
    specifications: [
      { parameter: 'Process Principle', value: 'Controlled air blowing / oxidation' },
      { parameter: 'Output Grades', value: '75/25, 85/25, 85/40, 90/15, 90/40, 95/25, 105/35, 115/15, 150/5' },
      { parameter: 'Standard Compliance', value: 'ASTM D312/D312M, IARC & global industrial specifications' },
      { parameter: 'Off-Gas System', value: 'Mist Catcher + Condenser + Scrubber + Vent Blower' },
      { parameter: 'Air Distribution', value: 'Air Ring / Air Nozzles with uniform reactor dispersion' },
      { parameter: 'Control System', value: 'PLC/Control Panel (Temperature, Airflow, Level, Pressure)' },
    ],
    oxidizationGuide: {
      intro: 'A Bitumen Air Blowing Oxidization Plant is used to convert penetration-grade bitumen or suitable refinery bitumen feed into oxidized/blown bitumen by passing controlled hot air through heated bitumen. The oxidation process increases the softening point and generally reduces penetration, producing a harder, more heat-resistant industrial bitumen. (DRG Bitumen)',
      processFlow: 'Bitumen Feed Tank → Feed Pump → Air-Blowing Reactor → Mist Catcher → Condenser/Scrubber → Vent System → Oxidized Bitumen Storage Tank → Packing/Dispatch',
      equipmentTable: [
        { equipment: 'Bitumen Feed/Storage Tank', function: 'Stores and maintains feed bitumen at required temperature' },
        { equipment: 'Air-Blowing Reactor', function: 'Main oxidation vessel where hot air is dispersed through bitumen' },
        { equipment: 'Air Blower/Compressor', function: 'Supplies controlled oxidation air' },
        { equipment: 'Air Ring / Air Nozzles', function: 'Distributes air uniformly inside the reactor' },
        { equipment: 'Heating System', function: 'Maintains required bitumen processing temperature' },
        { equipment: 'Mist Catcher', function: 'Removes entrained bitumen droplets from outgoing gases' },
        { equipment: 'Condenser', function: 'Condenses recoverable vapours' },
        { equipment: 'Scrubber', function: 'Treats/cleans process gases before discharge' },
        { equipment: 'Vent Blower', function: 'Maintains controlled gas flow and reactor draft' },
        { equipment: 'Oxidized Bitumen Storage Tank', function: 'Stores finished product' },
        { equipment: 'Pumps & Valves', function: 'Transfer feed and finished bitumen' },
        { equipment: 'PLC/Control Panel', function: 'Controls temperature, airflow, level, pressure and process operation' },
      ],
      operatingPrinciples: [
        'Suitable penetration-grade bitumen is charged to the reactor.',
        'The bitumen is heated to the required processing temperature.',
        'Controlled air is introduced through an air ring/nozzle system near the reactor bottom.',
        'Air reacts with the hot bitumen, increasing its oxidation level.',
        'The product becomes harder, with higher softening point and lower penetration.',
        'The desired grade is achieved by controlling temperature, airflow, residence time and feedstock properties.',
        'Off-gases pass through mist separation and gas-treatment equipment.',
        'Finished oxidized bitumen is transferred to storage or packing.',
      ],
      gradesIntro: 'The designation generally indicates softening point / penetration. For example, 85/25 refers approximately to a softening-point level around 85°C and penetration around 25 dmm, subject to the applicable standard/specification. (Alkenza)',
      gradesTable: [
        { grade: '75/25', characteristics: 'Softer oxidized grade', applications: 'Waterproofing, mastics, roofing compounds' },
        { grade: '85/25', characteristics: 'Medium-hard, good heat stability', applications: 'Roofing felt, waterproofing membranes, joint fillers, pipe coatings' },
        { grade: '85/40', characteristics: 'More flexible', applications: 'Roofing membranes, waterproofing and movement-related applications' },
        { grade: '90/15', characteristics: 'Harder, higher heat resistance', applications: 'Pipe coating, joint filling, roofing, industrial coatings' },
        { grade: '90/40', characteristics: 'Medium-hard/flexible', applications: 'Roofing membranes and waterproofing' },
        { grade: '95/25', characteristics: 'High softening point', applications: 'Hot-climate roofing, waterproofing and industrial applications' },
        { grade: '105/35', characteristics: 'High-temperature industrial grade', applications: 'Industrial roofing, mastics and heavy-duty coatings' },
        { grade: '115/15', characteristics: 'Very hard, high-temperature resistant', applications: 'Industrial roofing, pipe/cable applications, electrical insulation and specialized coatings' },
        { grade: '150/5', characteristics: 'Extremely hard specialty grade', applications: 'Special industrial coatings and high-temperature applications' },
      ],
      gradesCitation: 'Industry references commonly list grades such as 85/25, 90/15 and 115/15, while the wider oxidized-bitumen family includes grades such as 75/30, 85/40, 95/25, 105/35 and 115/15. (IARC Publications)',
      majorApplications: [
        {
          title: '1. Roofing & Waterproofing',
          points: [
            'Roofing felt',
            'Waterproofing membranes',
            'Built-up roofing',
            'Roof coatings',
            'Waterproofing compounds',
          ],
          citation: 'ASTM D312/D312M covers asphalt used in built-up roofing, modified-bitumen systems, vapor retarders and insulation-board adhesion. (ASTM International Store)',
        },
        {
          title: '2. Pipe Coating',
          points: [
            'Anti-corrosion coating for underground steel pipelines',
            'Oil & gas pipeline protection',
            'Protective industrial coatings',
          ],
        },
        {
          title: '3. Joint Filling & Sealants',
          points: [
            'Expansion/joint-filling compounds',
            'Crack sealing',
            'Construction sealants',
            'Pavement repair compounds',
          ],
        },
        {
          title: '4. Industrial Applications',
          points: [
            'Bituminous paints',
            'Mastics',
            'Adhesives',
            'Sound-damping materials',
            'Rubber/plastic processing',
            'Electrical cable and insulation applications',
          ],
          citation: 'These uses are consistent with documented applications of oxidized grades, including roofing, joint filling, pipe coating, electrical applications and industrial coatings. (IARC Publications)',
        },
      ],
      plantConceptDiagram: `Feed Bitumen
↓
Heating & Storage
↓
Air-Blowing Reactor
↑
Controlled Air from Blower
↓
Mist Catcher
↓
Condenser / Scrubber
↓
Vent Gas Treatment
Reactor Bottom → Finished Oxidized Bitumen Tank → Packing`,
      importantNote: 'Important: Actual reactor temperature, air rate, reactor volume, residence time and grade production rate must be designed from the feedstock properties and target specification. A plant designed for 85/25, for example, should not simply use the same operating conditions as a plant producing 115/15.',
      summaryNote: 'Bitumen Air Blowing Oxidization Plant – suitable for production of 85/25, 90/15, 95/25, 105/35, 115/15 and other customized oxidized bitumen grades for roofing, waterproofing, pipe coating, joint filling, industrial coatings and electrical applications.',
    },
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
    shortDescription: 'A Cold Mix Asphalt Plant is used to produce asphalt mix without heating the aggregate to conventional hot-mix temperatures. The process normally uses bitumen emulsion, graded aggregates, water and, where required, additives/cement.',
    description: `A Cold Mix Asphalt Plant is used to produce asphalt mix without heating the aggregate to conventional hot-mix temperatures. The process normally uses bitumen emulsion, graded aggregates, water and, where required, additives/cement. It is particularly useful for road maintenance, pothole patching and monsoon repair work, because the material can be produced and laid without a conventional hot-mix plant. Indian road guidance specifically identifies cold-emulsion technology for pothole filling and patch repairs.`,
    highlights: [
      'No conventional hot-mix heating required; workable in monsoon and wet conditions',
      'Ideal for monsoon pothole repair, emergency road maintenance, patch repair, and rural roads',
      'Controlled aggregate proportioning, water pre-wetting, and bitumen emulsion dosing',
      'Produces Pothole Repair Mix, Patch Repair Mix, Cold Mix BM, SDBC, MSS, and Stockpile Cold Mix',
      'Mobile or stationary configurations for swift on-site deployment close to repair locations',
    ],
    features: [
      {
        title: 'Aggregate Feeder',
        description: 'Controls aggregate quantity',
      },
      {
        title: 'Bitumen Emulsion Tank',
        description: 'Stores cationic/other approved emulsion',
      },
      {
        title: 'Emulsion Pump & Dosing System',
        description: 'Precisely doses binder',
      },
      {
        title: 'Cold Mixing Unit',
        description: 'Uniformly coats aggregate with emulsion',
      },
      {
        title: 'Finished Mix Hopper',
        description: 'Temporary storage of prepared cold mix',
      },
      {
        title: 'Control Panel',
        description: 'Controls feeding, water and emulsion dosing',
      },
      {
        title: 'Conveyor',
        description: 'Transfers finished mix to truck/bagging system',
      },
    ],
    applications: [
      'Pothole Repair Mix: Monsoon pothole filling, emergency road repairs (Medium-setting / cationic emulsion)',
      'Patch Repair Mix: Localized pavement patching (Medium-setting emulsion)',
      'Cold Mix BM: Bituminous Macadam/base and binder layers (Slow-setting emulsion)',
      'Cold Mix SDBC: Surface/binder course applications (Suitable cationic emulsion)',
      'Cold Mix MSS: Mix Seal Surfacing (Medium/slow-setting emulsion)',
      'Slurry/Cold Slurry Mix: Surface maintenance and sealing (Slow-setting emulsion)',
      'Cold Mix for Rural Roads: Rural-road construction and maintenance (PMGSY)',
      'Stockpile Cold Mix: Formulated emulsion for stockpiling and later patch repair',
    ],
    specifications: [
      { parameter: 'Plant Classification', value: 'Cold Mix Asphalt Plant (Monsoon Pothole Repair)' },
      { parameter: 'Operating Mode', value: 'Mobile / Trailer-Mounted or Stationary' },
      { parameter: 'Mixing Unit', value: 'Continuous twin-shaft cold mixer with uniform coating' },
      { parameter: 'Emulsion Types', value: 'RS-1, RS-2, MS, SS-1, SS-2, Cationic/Formulated emulsions' },
      { parameter: 'Mix Types Produced', value: 'Pothole Repair, Patch Repair, BM, SDBC, MSS, Slurry, Stockpile Mix' },
      { parameter: 'Standard Compliance', value: 'IRC / PMGSY guidelines for cold-emulsion road repair' },
      { parameter: 'Dosing Control', value: 'Centralized control panel for aggregate, water & emulsion' },
    ],
    coldMixGuide: {
      intro: 'A Cold Mix Asphalt Plant is used to produce asphalt mix without heating the aggregate to conventional hot-mix temperatures. The process normally uses bitumen emulsion, graded aggregates, water and, where required, additives/cement. It is particularly useful for road maintenance, pothole patching and monsoon repair work, because the material can be produced and laid without a conventional hot-mix plant. Indian road guidance specifically identifies cold-emulsion technology for pothole filling and patch repairs.',
      equipmentTable: [
        { equipment: 'Aggregate Feeder', function: 'Controls aggregate quantity' },
        { equipment: 'Bitumen Emulsion Tank', function: 'Stores cationic/other approved emulsion' },
        { equipment: 'Emulsion Pump & Dosing System', function: 'Precisely doses binder' },
        { equipment: 'Cold Mixing Unit', function: 'Uniformly coats aggregate with emulsion' },
        { equipment: 'Finished Mix Hopper', function: 'Temporary storage of prepared cold mix' },
        { equipment: 'Control Panel', function: 'Controls feeding, water and emulsion dosing' },
        { equipment: 'Conveyor', function: 'Transfers finished mix to truck/bagging system' },
      ],
      productionSteps: [
        'Aggregate is screened and proportioned.',
        'Controlled water is added for pre-wetting.',
        'Bitumen emulsion is accurately dosed.',
        'Aggregates and emulsion are mixed until uniform coating is achieved.',
        'The finished material is transported to the repair location.',
        'The pothole is cleaned and prepared, the cold mix is placed and compacted.',
        'The emulsion breaks and the mix gains strength during curing.',
      ],
      productionNote: 'For emulsion-based cold mixes, aggregate gradation, emulsion type, moisture content and curing conditions are critical. PMGSY documentation notes that cold-mix production is preferably carried out close to the laying location because the mixed material can have limited transportability.',
      gradesIntro: 'There is not one universal set of “cold asphalt grades” equivalent to VG-30/VG-40. The mix is normally selected according to aggregate gradation, emulsion grade, traffic, layer and application. Indian guidance describes different emulsion types for different cold-mix applications.',
      typesTable: [
        { type: 'Pothole Repair Mix', binder: 'Medium-setting / suitable cationic emulsion', application: 'Monsoon pothole filling, emergency road repairs' },
        { type: 'Patch Repair Mix', binder: 'Medium-setting emulsion', application: 'Localized pavement patching' },
        { type: 'Cold Mix BM', binder: 'Slow-setting emulsion', application: 'Bituminous Macadam/base and binder layers' },
        { type: 'Cold Mix SDBC', binder: 'Suitable cationic emulsion', application: 'Surface/binder course applications' },
        { type: 'Cold Mix MSS', binder: 'Medium/slow-setting emulsion', application: 'Mix Seal Surfacing' },
        { type: 'Slurry/Cold Slurry Mix', binder: 'Slow-setting emulsion', application: 'Surface maintenance and sealing' },
        { type: 'Cold Mix for Rural Roads', binder: 'Emulsion-based binder', application: 'Rural-road construction and maintenance' },
        { type: 'Stockpile Cold Mix', binder: 'Formulated emulsion', application: 'Material that can be stored for later patch repair, subject to formulation' },
      ],
      emulsionGradesIntro: 'For a cold-mix plant, the emulsion grade should be selected according to the specific mix design and application, rather than treating RS/MS/SS grades as interchangeable.',
      emulsionGrades: [
        { grade: 'RS-1', title: 'Rapid Setting', description: 'commonly associated with tack-coat applications.' },
        { grade: 'RS-2', title: 'Rapid Setting', description: 'commonly used for surface dressing.' },
        { grade: 'MS', title: 'Medium Setting', description: 'commonly used for premix carpet and patch repair.' },
        { grade: 'SS-1', title: 'Slow Setting', description: 'commonly used for priming.' },
        { grade: 'SS-2', title: 'Slow Setting', description: 'used for several cold-mix applications including BM, SDAC, BC, MSS and slurry seal, depending on the approved specification/mix design.' },
      ],
      configurationNote: 'For a plant specifically intended for monsoon pothole repair, a practical configuration would include mobile or stationary operation, depending on whether repair teams need to move between multiple locations.',
      advantages: [
        'No conventional hot-mix heating required',
        'Useful when hot-mix plants are unavailable',
        'Suitable for monsoon/emergency pothole repair',
        'Lower fuel consumption than conventional hot-mix production',
        'Can be produced close to the repair location',
        'Suitable for rural and remote roads',
        'Lower-temperature production reduces heating-related emissions',
      ],
      ircCitation: 'IRC/PMGSY material specifically identifies cold-emulsion technology as advantageous where heating bitumen and aggregate to specified temperatures is difficult, particularly for maintenance work such as pothole filling and patch repairs.',
      websiteSummary: 'Cold Mix Asphalt Plant – A compact and efficient plant designed for producing emulsion-based cold asphalt mixes without conventional aggregate heating. It is ideal for monsoon pothole repair, emergency road maintenance, patch repair, rural roads, premix carpet, bituminous macadam and other pavement maintenance applications. The plant provides controlled aggregate, water and bitumen-emulsion dosing with uniform mixing for reliable cold-mix production.',
    },
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
    shortDescription: 'A Bitumen Storage & Heating Tank is used to store bitumen and maintain it at a controlled temperature so that it remains sufficiently fluid for pumping, transfer, mixing, or further processing.',
    description: 'A Bitumen Storage & Heating Tank is used to store bitumen and maintain it at a controlled temperature so that it remains sufficiently fluid for pumping, transfer, mixing, or further processing.',
    highlights: [
      'Available in Direct Heating Type and Indirect Heating Type configurations',
      'Direct Heating: Burner-fired arrangement with fast heating for temporary or specific installations',
      'Indirect Heating: Thermic fluid coil system delivering uniform temperature without localized overheating',
      'Heavy-gauge carbon steel tank shell with high-efficiency thermal insulation',
      'Equipped with precision temperature sensors, level indicator, and heavy-duty bitumen transfer pump',
    ],
    features: [],
    applications: [],
    specifications: [],
    storageTankGuide: {
      intro: 'A Bitumen Storage & Heating Tank is used to store bitumen and maintain it at a controlled temperature so that it remains sufficiently fluid for pumping, transfer, mixing, or further processing',
      arrangementsIntro: 'There are two main heating arrangements:',
      arrangementsList: [
        '1. Direct Heating Type',
        '2. Indirect Heating Type',
      ],
      directHeating: {
        title: '1. Direct Heating Type Bitumen Tank',
        intro: 'In a direct-heating tank, heat is supplied directly to the bitumen through a burner/flame or a direct-fired heating arrangement.',
        basicArrangement: 'Burner → Heating Zone → Bitumen Tank → Hot Bitumen Outlet',
        componentsTable: [
          { component: 'Storage Tank', function: 'Stores bitumen' },
          { component: 'Burner', function: 'Generates heat' },
          { component: 'Heating Chamber/Tube', function: 'Transfers heat directly to bitumen' },
          { component: 'Temperature Sensor', function: 'Controls bitumen temperature' },
          { component: 'Level Indicator', function: 'Indicates tank level' },
          { component: 'Insulation', function: 'Reduces heat loss' },
          { component: 'Pump', function: 'Transfers hot bitumen' },
          { component: 'Control Panel', function: 'Controls burner and temperature' },
          { component: 'Vent', function: 'Provides safe vapour/air outlet' },
        ],
        advantages: [
          'Simple heating arrangement',
          'Relatively low initial equipment cost',
          'Fast heating can be achieved',
          'Suitable for some small or temporary installations',
        ],
        disadvantages: [
          'Greater possibility of localized overheating',
          'More difficult to maintain uniform temperature',
          'Risk of thermal degradation/coking if poorly designed',
          'Burner/fire safety requirements are higher',
          'Less suitable where precise temperature control is important',
        ],
        note: 'For higher-quality bitumen processing, direct flame contact with the product should generally be avoided unless the system is specifically engineered for that service.',
      },
      indirectHeating: {
        title: '2. Indirect Heating Type Bitumen Tank',
        intro: 'In an indirect-heating tank, the bitumen is heated through a heating medium such as thermic fluid or steam. The heating medium circulates through coils or a heat exchanger without directly contacting the bitumen.',
        basicArrangement: 'Thermic Fluid Heater → Hot Thermic Fluid → Heating Coil → Bitumen → Return to Heater',
        componentsTable: [
          { component: 'Storage Tank', function: 'Stores bitumen' },
          { component: 'Heating Coil', function: 'Transfers heat to bitumen' },
          { component: 'Thermic Fluid Heater', function: 'Heats thermal oil' },
          { component: 'Circulation Pump', function: 'Circulates thermic fluid' },
          { component: 'Expansion Tank', function: 'Accommodates thermal-fluid expansion' },
          { component: 'Temperature Sensors', function: 'Monitors and controls temperature' },
          { component: 'Insulation', function: 'Minimizes heat loss' },
          { component: 'Bitumen Pump', function: 'Transfers heated bitumen' },
          { component: 'Level Instrument', function: 'Measures tank level' },
          { component: 'Control Panel/PLC', function: 'Automatic temperature and pump control' },
        ],
        advantages: [
          'Uniform heating',
          'Better temperature control',
          'Reduced risk of localized overheating',
          'Suitable for continuous industrial operation',
          'Good choice for bitumen storage and processing plants',
          'Heating system can serve multiple tanks',
        ],
        disadvantages: [
          'Higher initial investment',
          'Requires thermic-fluid heater and circulation system',
          'More equipment and piping',
          'Requires proper thermal-fluid maintenance',
        ],
      },
    },
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
    shortDescription: 'A Horizontal Emulsion Storage Tank is used for storing bitumen emulsion after production and maintaining it at a suitable temperature for pumping, circulation and dispatch.',
    description: 'A Horizontal Emulsion Storage Tank is used for storing bitumen emulsion after production and maintaining it at a suitable temperature for pumping, circulation and dispatch. It is commonly used with Bitumen Emulsion Plants for grades such as RS, MS and SS emulsions.',
    highlights: [
      'Capacities: 10 MT, 20 MT, 30 MT, 40 MT, 50 MT, 60 MT, 100 MT',
      'Horizontal cylindrical carbon-steel vessel with engineered saddle supports',
      'Gentle product circulation connection and heating coil preventing emulsion breakdown',
      'Low-point drain for complete drainage, sampling connection, and top inspection manhole',
    ],
    features: [],
    applications: [],
    specifications: [],
    horizontalTankGuide: {
      intro: 'A Horizontal Emulsion Storage Tank is used for storing bitumen emulsion after production and maintaining it at a suitable temperature for pumping, circulation and dispatch. It is commonly used with Bitumen Emulsion Plants for grades such as RS, MS and SS emulsions.',
      basicConstruction: {
        intro: 'A typical horizontal emulsion tank consists of:',
        componentsTable: [
          { component: 'Tank Shell', function: 'Horizontal cylindrical carbon-steel vessel' },
          { component: 'Inlet Nozzle', function: 'Receives finished emulsion from the plant' },
          { component: 'Outlet Nozzle', function: 'Transfers emulsion to filling/dispatch system' },
          { component: 'Manhole', function: 'Inspection and cleaning' },
          { component: 'Vent', function: 'Prevents pressure/vacuum buildup' },
          { component: 'Level Indicator', function: 'Indicates tank level' },
          { component: 'Temperature Indicator', function: 'Monitors product temperature' },
          { component: 'Drain Connection', function: 'Complete tank draining' },
          { component: 'Sampling Connection', function: 'Product quality sampling' },
          { component: 'Circulation Connection', function: 'Allows gentle product circulation' },
          { component: 'Support Saddles', function: 'Supports the horizontal tank' },
          { component: 'Ladder/Platform', function: 'Access to top fittings where required' },
          { component: 'Control Panel', function: 'Temperature and pump control' },
        ],
      },
      typicalSizes: {
        capacities: [
          '10 MT',
          '20 MT',
          '30 MT',
          '40 MT',
          '50 MT',
          '60 MT',
          '100 MT',
        ],
        example: 'For example, a 30 MT horizontal emulsion storage tank can be supplied with carbon-steel shell, heating coil, level indicator, temperature indicator, inlet/outlet nozzles, drain and circulation connections.',
      },
      designConsiderations: {
        intro: 'The tank should be designed to:',
        points: [
          'Minimize heat loss',
          'Avoid excessive heating',
          'Prevent contamination',
          'Provide complete or near-complete drainage',
          'Allow easy cleaning and inspection',
          'Avoid unnecessary high-shear agitation during storage',
          'Provide accurate level and temperature monitoring',
          'Maintain the emulsion in a stable condition during storage',
        ],
        importantNotice: 'Important: Bitumen emulsion is a water-based dispersion, so the storage tank should not be operated like a conventional hot-bitumen storage tank. Excessive temperature, prolonged storage, contamination or unsuitable circulation can cause instability or premature breaking.',
      },
      specifications: {
        title: '4. Typical Specification – Horizontal Emulsion Tank',
        specs: [
          { parameter: 'Type', value: 'Horizontal cylindrical' },
          { parameter: 'Service', value: 'Bitumen Emulsion Storage' },
          { parameter: 'Construction', value: 'Carbon Steel' },
          { parameter: 'Capacity', value: '10–100 MT, as required' },
          { parameter: 'Level', value: 'Local level gauge / transmitter' },
          { parameter: 'Temperature', value: 'RTD/temperature indicator' },
          { parameter: 'Inlet', value: 'Flanged nozzle' },
          { parameter: 'Outlet', value: 'Flanged bottom/side outlet' },
          { parameter: 'Drain', value: 'Provided at low point' },
          { parameter: 'Vent', value: 'Atmospheric vent' },
          { parameter: 'Support', value: 'Two or more saddle supports depending on size' },
          { parameter: 'Access', value: 'Top manhole' },
          { parameter: 'Finish', value: 'Internal/external coating as appropriate for the service' },
        ],
      },
      applications: {
        title: 'Main Applications',
        intro: 'The horizontal emulsion storage tank is used for storing:',
        storedEmulsions: [
          'RS – Rapid Setting emulsion',
          'MS – Medium Setting emulsion',
          'SS – Slow Setting emulsion',
          'Other cationic/anionic bitumen emulsions, according to the plant formulation',
        ],
        appliedUses: 'Applications of stored emulsion: road surface dressing, tack coat, prime coat, pothole repair, cold mix asphalt, slurry/seal applications and road maintenance.',
        plantSizingNote: 'For a Bitumen Emulsion Plant, the tank capacity, heating coil area, insulation thickness and pump size should ideally be calculated from the plant capacity (e.g., 5 TPH, 10 TPH, 20 TPH) and the required storage duration.',
      },
    },
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
      'Production Speed: 30 to 45 bph (Emulsion) / 40 to 60 bph (Bitumen)',
      'Semi-Automatic pneumatic arm and Fully Automatic conveyorized models',
    ],
    features: [
      {
        title: 'Filling Principle',
        description: 'Employs a Gravimetric Net Weight Filling system integrated with an advanced microprocessor weight controller. This ensures precision regardless of changes in liquid density due to temperature swings.',
      },
      {
        title: 'Thermal Protection',
        description: 'Features heavily insulated jackets and internal heating systems (hot oil or steam) to keep raw bitumen at high temperatures, preventing it from solidifying inside the pipes.',
      },
      {
        title: 'Lance Mechanism',
        description: 'Utilizes a "Top Fill" or "Sub-surface" filling lance. Sub-surface lances are crucial for anti-foaming when handling chemical emulsions.',
      },
      {
        title: 'Safety Integration',
        description: 'Includes flameproof/explosion-proof electrical components, integrated safety interlocks, and drip-collection cups to safeguard operators against high-temperature splashes.',
      },
      {
        title: 'Conveyor Interface',
        description: 'Equipped with motorized square, U-type, or E-type heavy-duty platform scales optimized for pallet and forklift handling.',
      },
    ],
    applications: [
      'Road Construction Facilities: For packaging asphalt materials and cold-mix emulsions.',
      'Waterproofing Manufacturers: Packaging high-temperature industrial tar and protective coatings.',
      'Refinery Dispatches: Mass bulk transport preparation for Polymer Modified Bitumen (PMB) and Crumb Rubber Modified Bitumen (CRMB).',
    ],
    specifications: [
      { parameter: 'Operating Temperature', value: '5°C to 90°C (Emulsion) / 90°C to 300°C (Bitumen/PMB/CRMB)' },
      { parameter: 'Filling Capacity', value: '100 kg to 250 kg per drum (Emulsion) / Up to 300 kg max (Bitumen)' },
      { parameter: 'Production Speed', value: '30 to 45 barrels/hr (Emulsion) / 40 to 60 barrels/hr (Bitumen)' },
      { parameter: 'Filling Accuracy', value: '±100 grams (Resolution: 50 grams)' },
      { parameter: 'Inlet Line Size', value: '50 NB (Emulsion) / 80 NB (Bitumen)' },
    ],
    drumFillingGuide: {
      intro: 'An emulsion and bitumen drum filling machine is an industrial system designed to safely and accurately dispense high-viscosity, high-temperature liquids into standard 200-litre drums or barrels. These systems minimize human intervention, ensuring safe handling of volatile or hot road-construction materials like Bitumen, Polymer Modified Bitumen (PMB), and Bitumen Emulsions.',
      specsTable: [
        {
          parameter: 'Operating Temperature',
          emulsionSpec: '5°C to 90°C',
          hotBitumenSpec: '90°C to 300°C',
        },
        {
          parameter: 'Filling Capacity',
          emulsionSpec: '100 kg to 250 kg per drum',
          hotBitumenSpec: 'Up to 300 kg max',
        },
        {
          parameter: 'Production Speed',
          emulsionSpec: '30 to 45 barrels per hour',
          hotBitumenSpec: '40 to 60 barrels per hour',
        },
        {
          parameter: 'Filling Accuracy',
          emulsionSpec: '±100 grams',
          hotBitumenSpec: '±100 grams',
        },
        {
          parameter: 'Resolution',
          emulsionSpec: '50 grams',
          hotBitumenSpec: '50 grams',
        },
        {
          parameter: 'Inlet Line Size',
          emulsionSpec: '50 NB',
          hotBitumenSpec: '80 NB (larger for higher viscosity)',
        },
      ],
      features: [
        {
          title: 'Filling Principle',
          description: 'Employs a Gravimetric Net Weight Filling system integrated with an advanced microprocessor weight controller. This ensures precision regardless of changes in liquid density due to temperature swings.',
        },
        {
          title: 'Thermal Protection',
          description: 'Features heavily insulated jackets and internal heating systems (hot oil or steam) to keep raw bitumen at high temperatures, preventing it from solidifying inside the pipes.',
        },
        {
          title: 'Lance Mechanism',
          description: 'Utilizes a "Top Fill" or "Sub-surface" filling lance. Sub-surface lances are crucial for anti-foaming when handling chemical emulsions.',
        },
        {
          title: 'Safety Integration',
          description: 'Includes flameproof/explosion-proof electrical components, integrated safety interlocks, and drip-collection cups to safeguard operators against high-temperature splashes.',
        },
        {
          title: 'Conveyor Interface',
          description: 'Equipped with motorized square, U-type, or E-type heavy-duty platform scales optimized for pallet and forklift handling.',
        },
      ],
      operationModes: [
        {
          title: 'Semi-Automatic System',
          description: 'An operator manually aligns the drum bung under the nozzle using a pneumatic arm. The microprocessor fills the container to the pre-set net weight and automatically shuts off the valve.',
        },
        {
          title: 'Fully Automatic System',
          description: 'Includes a power-fed conveyor line, visual/mechanical bung pre-alignment sensors, automated lance insertion, auto-filling, and a robotic cap-tightening (torque) station.',
        },
      ],
      applications: [
        {
          sector: 'Road Construction Facilities',
          description: 'For packaging asphalt materials and cold-mix emulsions.',
        },
        {
          sector: 'Waterproofing Manufacturers',
          description: 'Packaging high-temperature industrial tar and protective coatings.',
        },
        {
          sector: 'Refinery Dispatches',
          description: 'Mass bulk transport preparation for Polymer Modified Bitumen (PMB) and Crumb Rubber Modified Bitumen (CRMB).',
        },
      ],
    },
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
      'Anti-sticking screw feeder / wide-throat vibratory tray prevents bridging and clogging',
      'Filling Range: 10 kg to 50 kg per bag with ±0.5% to 1% accuracy',
      'Gross/Net electronic load cell weighing with automatic sensor clamp & tare',
      'Dual sealing compatibility: Industrial sewing stitching or heat sealing',
    ],
    features: [
      {
        title: 'Anti-Sticking Feed Mechanism',
        description: 'Uses a heavy-duty screw feeder or a wide-throat vibratory tray rather than a gravity drop. This prevents the sticky, oily aggregate from bridging or clogging the feed hopper.',
      },
      {
        title: 'Pneumatic Bag Clamping',
        description: 'Heavy-duty, dust-tight bag holders grip the bag tightly during filling. This ensures no material spills and can support the heavy weight of the aggregate.',
      },
      {
        title: 'Wear-Resistant Contact Parts',
        description: 'All parts in direct contact with the abrasive asphalt (aggregate sizes up to 10mm–15mm) are made of reinforced carbon steel or heavy-grade SUS304/316 stainless steel to prevent premature wear.',
      },
      {
        title: 'Adjustable Bag Conveyor & Sealer',
        description: 'Filled bags drop onto a motorized slat or heavy-duty belt conveyor. They move automatically toward a heavy-duty industrial sewing machine or a heat sealer (depending on whether woven PP or plastic bags are used).',
      },
    ],
    applications: [
      'Retail Bagging of Cold Patch Asphalt (25 kg & 50 kg bags)',
      'Monsoon Pothole Repair Material Packaging',
      'Municipal Road Maintenance Depot Packaging',
      'Bituminous Cold Mix Bagging for Transit & Stockpiling',
    ],
    specifications: [
      { parameter: 'Material Handled', value: 'Asphalt Cold Mix, Cold Patch, Bituminous Cold Mix' },
      { parameter: 'Filling Range', value: '10 kg to 50 kg per bag' },
      { parameter: 'Production Speed', value: '1 to 2 bags per minute (Semi-automatic)' },
      { parameter: 'Filling Accuracy', value: '± 0.5% to 1% of target weight' },
      { parameter: 'Weighing Principle', value: 'Gross/Net electronic load cell weighing' },
      { parameter: 'Power Supply', value: '3-Phase, 380V/415V, 50Hz/60Hz' },
      { parameter: 'Air Consumption', value: '5–6 bar (for pneumatic gates and clamps)' },
    ],
    bagFillingGuide: {
      intro: 'An Asphalt Cold Mix Bag Filling Machine is a heavy-duty packaging system specifically designed to handle sticky, cohesive, and abrasive cold-mix asphalt materials. Unlike free-flowing materials, cold mix asphalt requires specialized feeding mechanisms to prevent clogging and to accurately pack the material into bags (typically 25 kg to 50 kg) for retail or road repair use.',
      specsTable: [
        { parameter: 'Material Handled', specification: 'Asphalt Cold Mix, Cold Patch, Bituminous Cold Mix' },
        { parameter: 'Filling Range', specification: '10 kg to 50 kg per bag' },
        { parameter: 'Production Speed', specification: '1 to 2 bags per minute (Semi-automatic)' },
        { parameter: 'Filling Accuracy', specification: '± 0.5% to 1% of target weight' },
        { parameter: 'Weighing Principle', specification: 'Gross/Net electronic load cell weighing' },
        { parameter: 'Power Supply', specification: '3-Phase, 380V/415V, 50Hz/60Hz' },
        { parameter: 'Air Consumption', specification: '5–6 bar (for pneumatic gates and clamps)' },
      ],
      features: [
        {
          title: 'Anti-Sticking Feed Mechanism',
          description: 'Uses a heavy-duty screw feeder or a wide-throat vibratory tray rather than a gravity drop. This prevents the sticky, oily aggregate from bridging or clogging the feed hopper.',
        },
        {
          title: 'Pneumatic Bag Clamping',
          description: 'Heavy-duty, dust-tight bag holders grip the bag tightly during filling. This ensures no material spills and can support the heavy weight of the aggregate.',
        },
        {
          title: 'Wear-Resistant Contact Parts',
          description: 'All parts in direct contact with the abrasive asphalt (aggregate sizes up to 10mm–15mm) are made of reinforced carbon steel or heavy-grade SUS304/316 stainless steel to prevent premature wear.',
        },
        {
          title: 'Adjustable Bag Conveyor & Sealer',
          description: 'Filled bags drop onto a motorized slat or heavy-duty belt conveyor. They move automatically toward a heavy-duty industrial sewing machine or a heat sealer (depending on whether woven PP or plastic bags are used).',
        },
      ],
      workflowSteps: [
        {
          stepNumber: 1,
          title: 'Bag Placement',
          description: 'The operator manually places an empty bag onto the clamping mouth.',
        },
        {
          stepNumber: 2,
          title: 'Auto-Clamp & Weigh',
          description: 'A sensor detects the bag, clamps it, and tares the weight.',
        },
        {
          stepNumber: 3,
          title: 'Bulk and Fine Feed',
          description: 'The belt/vibratory feeder runs fast for bulk filling (90% weight), then slows down for precise fine feeding to reach the exact target weight.',
        },
        {
          stepNumber: 4,
          title: 'Release & Seal',
          description: 'The clamp opens automatically, dropping the bag onto the conveyor, which transports it through the stitching or sealing station.',
        },
      ],
      bagCompatibility: [
        {
          bagType: 'Heavy-Duty PE/Plastic Bags',
          description: 'Best for long-term storage as they retain the moisture/solvent oils that keep the cold mix workable.',
        },
        {
          bagType: 'Laminated Woven PP Bags',
          description: 'Highly durable for rough handling and transit, though often paired with an inner plastic liner to prevent oil seepage.',
        },
      ],
    },
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
      'Operating Temperature: 150°C to 320°C (Mineral Oils) / Up to 400°C (Synthetic Fluids)',
      'Low Operating Pressure: 2 bar to 5 bar (Near-atmospheric pressure safety)',
      'Thermal Efficiency: 88% to 92% (With air pre-heaters or economizers)',
      'Fuel Compatibility: Diesel, Heavy Oil, Natural Gas, LPG, Solid Fuels (Coal, Wood, Biomass)',
    ],
    features: [
      {
        title: 'Double Jacket Concentric Coil',
        description: 'The heater core consists of precisely wound multi-start helical coils. The thermic fluid flows through these coils, absorbing radiant and convective heat from the burner flame.',
      },
      {
        title: 'Circulating Pump',
        description: 'A high-temperature, centrifugal pump (often with a water-cooled or air-cooled mechanical seal) that maintains a turbulent flow inside the coils to prevent the oil from overheating and cracking.',
      },
      {
        title: 'Expansion & Deaerator Tank',
        description: 'An overhead tank that accommodates the thermal expansion of the oil (which expands by ~7% per 100°C rise) and vents out trapped gasses or moisture.',
      },
      {
        title: 'De-Asphalting / Strainer System',
        description: 'Inline high-mesh filters that trap carbon sludge or degraded fluid particles, preventing scale buildup inside the heater tubes.',
      },
    ],
    applications: [
      'Asphalt & Bitumen Plants: Keeping bitumen tanks and lines fluid at 160°C–180°C.',
    ],
    specifications: [
      { parameter: 'Heating Capacity', value: '100,000 kcal/hr to 15,000,000 kcal/hr+' },
      { parameter: 'Operating Temperature', value: '150°C to 320°C (Standard mineral oils) / Up to 400°C (Synthetic fluids)' },
      { parameter: 'Operating Pressure', value: '2 bar to 5 bar (Just enough to overcome pipe friction)' },
      { parameter: 'Thermal Efficiency', value: '88% to 92% (With air pre-heaters or economizers)' },
      { parameter: 'Fuel Compatibility', value: 'Diesel, Heavy Oil, Natural Gas, LPG, Solid Fuels (Coal, Wood, Biomass)' },
      { parameter: 'Construction Standards', value: 'ASME Section VIII, EN 13445, or local codes (like IBR in India)' },
    ],
    thermicHeaterGuide: {
      intro: 'A Hot Thermic Fluid Heater (also known as a thermal oil heater) is an industrial heating system that circulates a specialized heat-transfer fluid at high temperatures under low operating pressures. Unlike steam boilers that require high pressure to reach high temperatures, thermic fluid heaters can operate up to 300°C to 350°C at near-atmospheric pressure, drastically reducing explosive risks and structural costs.',
      specsTable: [
        { parameter: 'Heating Capacity', specification: '100,000 kcal/hr to 15,000,000 kcal/hr+' },
        { parameter: 'Operating Temperature', specification: '150°C to 320°C (Standard standard mineral oils) / Up to 400°C (Synthetic fluids)' },
        { parameter: 'Operating Pressure', specification: '2 bar to 5 bar (Just enough to overcome pipe friction)' },
        { parameter: 'Thermal Efficiency', specification: '88% to 92% (With air pre-heaters or economizers)' },
        { parameter: 'Fuel Compatibility', specification: 'Diesel, Heavy Oil, Natural Gas, LPG, Solid Fuels (Coal, Wood, Biomass)' },
        { parameter: 'Construction Standards', specification: 'ASME Section VIII, EN 13445, or local codes (like IBR in India)' },
      ],
      components: [
        {
          title: 'Double Jacket Concentric Coil',
          description: 'The heater core consists of precisely wound multi-start helical coils. The thermic fluid flows through these coils, absorbing radiant and convective heat from the burner flame.',
        },
        {
          title: 'Circulating Pump',
          description: 'A high-temperature, centrifugal pump (often with a water-cooled or air-cooled mechanical seal) that maintains a turbulent flow inside the coils to prevent the oil from overheating and cracking.',
        },
        {
          title: 'Expansion & Deaerator Tank',
          description: 'An overhead tank that accommodates the thermal expansion of the oil (which expands by ~7% per 100°C rise) and vents out trapped gasses or moisture.',
        },
        {
          title: 'De-Asphalting / Strainer System',
          description: 'Inline high-mesh filters that trap carbon sludge or degraded fluid particles, preventing scale buildup inside the heater tubes.',
        },
      ],
      systemLayout: {
        intro: 'The thermal fluid follows a closed-loop cycle. The visual schematic below outlines the core loop configuration from the expansion zone through the process layout:',
        flowArrangement: 'Expansion & Deaerator Tank → Hot Oil Circulation Pump → Concentric Helical Coils (Burner Flame) → Plant Process Heat Exchanger / Bitumen Tanks → Inline Strainer & Filter → Return Loop to Heater',
        description: 'Closed-loop cycle maintaining thermal stability and turbulent flow with zero vaporization losses and atmospheric pressure safety.',
      },
      applications: [
        'Asphalt & Bitumen Plants: Keeping bitumen tanks and lines fluid at 160°C–180°C.',
      ],
    },
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
  {
    id: 'turnkey-project',
    slug: 'turnkey-project',
    categoryId: 'bitumen-modify-equipment',
    categoryName: 'Bitumen Modify Equipment',
    name: 'TURNKEY PROJECT',
    code: 'ATL-TKP-10',
    shortDescription: 'Complete end-to-end turnkey project execution for bitumen modification, emulsion manufacturing, PMB/CRMB processing plants, and bulk bitumen storage terminals from concept to commissioning.',
    description: `Atlas Engineering delivers complete Turnkey Project execution for industrial bitumen modification and handling installations. From initial process engineering, mechanical design, plant fabrication, and automated control systems to site erection, piping, thermal heating integration, trial runs, and operator training, we deliver fully integrated plants ready for continuous production.

With over 28 years of dedicated engineering excellence in Kathwada GIDC, Ahmedabad, our turnkey solutions ensure seamless synchronization across bitumen decanters, high-shear polymer modification mills, emulsion reactors, bulk storage tanks, and automated boiler/thermic fluid heating networks.`,
    highlights: [
      'End-to-End Execution: Concept design, fabrication, supply, erection, piping & commissioning',
      'Custom Tailored Capacity: From 5 TPH to 30+ TPH custom configurations',
      'Integrated Systems: PMB/CRMB, Emulsion, Decanters, Heating, and Storage Terminals',
      'Advanced Automation: Centralized SCADA / PLC control desks with real-time recipe management',
      'Compliance & Safety: Fabricated to BIS, IRC, and ASME standards with fail-safe thermal interlocks',
    ],
    featuresTitle: '🏗️ Turnkey Scope of Supply & Engineering Modules',
    features: [
      {
        title: 'Process Design & Plant Layout',
        description: 'Comprehensive plant 3D layout, process flow diagram (PFD), piping & instrumentation diagram (P&ID), and foundation civil engineering guidance tailored to client site geography.',
      },
      {
        title: 'Equipment Fabrication & Sourcing',
        description: 'In-house manufacturing of reaction tanks, high-shear colloidal mills, multi-stage filtration systems, pumping skids, and heavy-duty structural platforms.',
      },
      {
        title: 'Piping & Thermal Insulation',
        description: 'Complete jacketted hot oil / bitumen interconnecting pipelines, pneumatic material transfer lines, expansion loops, and rockwool thermal insulation clad in aluminum/GI sheets.',
      },
      {
        title: 'Central Automation & Electrical Control',
        description: 'Integrated MCC panels, PLC automation, touch-screen HMI, variable frequency drives (VFD), and SCADA integration for centralized batch recipe control and data logging.',
      },
      {
        title: 'Erection & Mechanical Commissioning',
        description: 'Deployment of experienced project engineers to oversee on-site erection, alignment, hydrostatic pressure testing, and cold/hot trial production runs.',
      },
      {
        title: 'Operator Training & After-Sales Support',
        description: 'Comprehensive standard operating procedure (SOP) documentation, maintenance training for client technicians, and 24/7 technical assistance backed by warranty.',
      },
    ],
    productionProcess: [
      'Site Feasibility & Process Engineering (Design basis, capacity estimation, P&ID drafting)',
      'Equipment Fabrication & Factory Acceptance Testing (FAT) at Kathwada manufacturing facility',
      'Civil Foundation Guidance & Site Logistics Planning',
      'Mechanical Erection, Structural Assembly & Equipment Positioning',
      'Process Piping, Thermal Heating Coil Integration & Electrical Wiring',
      'Cold Testing, Calibration & Hydrostatic Pressure Checks',
      'Hot Trial Runs, Polymer Dispersion Verification & Recipe Optimization',
      'Commercial Handover, SOP Delivery & Hands-on Staff Training',
    ],
    plantTypes: [
      {
        title: 'PMB / CRMB Turnkey Complexes',
        description: 'Integrated polymer modified bitumen and crumb rubber modified bitumen manufacturing plants with high-shear mills, digestor tanks, and bulk storage.',
      },
      {
        title: 'Bitumen Emulsion & Cold-Mix Terminals',
        description: 'Turnkey installations combining emulsion plants, drum decanters, heated storage tanks, and automated drum/bag filling lines.',
      },
      {
        title: 'Bulk Bitumen Storage & Heating Terminals',
        description: 'Large-capacity vertical and horizontal tank farms equipped with thermic fluid heating coils, pumping skids, and road tanker loading gantries.',
      },
      {
        title: 'Integrated Highway Machinery Hubs',
        description: 'Combined processing setups housing asphalt drum mixing units, emulsion stations, and bitumen melting yards for major highway concessions.',
      },
    ],
    applications: [
      'Polymer Modified Bitumen (PMB) & CRMB Production Complexes',
      'National Highway & Expressway Mega Projects',
      'Bitumen Import Terminals & Port Bulk Handling',
      'State PWD & Concessionaire Central Supply Hubs',
      'Bitumen Emulsion Manufacturing & Cold-Mix Production Units',
      'Airport Runway Pavement & High-Stiffness Asphalt Supply Yards',
    ],
    specifications: [
      { parameter: 'Project Scope', value: 'Concept to Commissioning (EPC / Turnkey Solution)' },
      { parameter: 'Processing Capacity', value: '5 TPH to 30+ TPH (Custom modular scalable designs)' },
      { parameter: 'Core Systems Integrated', value: 'PMB/CRMB, Emulsion, Decanter, Thermic Heater, Storage Tanks' },
      { parameter: 'Control Automation', value: 'Central PLC / SCADA with touchscreen HMI and remote telemetry' },
      { parameter: 'Heating Medium', value: 'Thermic Fluid Heater (100,000 to 3,000,000+ kcal/hr)' },
      { parameter: 'Storage Integration', value: 'Bulk Vertical / Horizontal tanks from 20 MT to 1,000+ MT' },
      { parameter: 'Piping Standard', value: 'Seamless MS Class C with rockwool thermal insulation & GI cladding' },
      { parameter: 'Manufacturing Standard', value: 'BIS (IS:2062 / IS:15462), IRC Guidelines & ASME Standards' },
      { parameter: 'Testing & Commissioning', value: 'Cold water trial, hot oil circulation test & polymer dispersion FAT' },
      { parameter: 'Warranty & Lifecycle', value: '12 Months standard warranty with lifetime technical support' },
    ],
    heroImage: '/src/assets/images/factory_engineering_facility_1791042931571.jpg',
    gallery: [
      '/src/assets/images/factory_engineering_facility_1791042931571.jpg',
      '/src/assets/images/cat_bitumen_modify_1791042893480.jpg',
      '/src/assets/images/hero_bitumen_modify.jpg',
      '/src/assets/images/products/p1_img1.jpg',
    ],
    isPlaceholder: false,
    featured: false,
  },
];

// 7 REAL ROAD CONSTRUCTION EQUIPMENT PRODUCTS
export const ROAD_PRODUCTS: Product[] = [
  {
    id: 'asphalt-batch-mix-plant',
    slug: 'asphalt-batch-mix-plant',
    categoryId: 'road-construction-equipment',
    categoryName: 'Road Construction Equipment',
    name: 'ASPHALT BATCH MIX PLANT',
    code: 'ATL-ABM-01',
    shortDescription: 'Heavy-duty industrial facility used to manufacture high-quality asphalt concrete (hot mix asphalt) in precise batches (CAPACITY 80, 120, 160 TPH).',
    description: `CAPACITY 80, 120, 160 TPH\n\nAn Asphalt Batch Mix Plant is a heavy-duty industrial facility used to manufacture high-quality asphalt concrete (hot mix asphalt) in precise batches. Unlike continuous drum plants, a batch plant measures, heats, and mixes aggregates, bitumen, and filler materials in distinct, separate cycles (batches). This provides the highest level of flexibility and accuracy, making it the preferred choice for major highway construction and airports.`,
    highlights: [
      'Capacity: 80, 120, 160 TPH',
      'Batch Cycle Time: 45 to 60 seconds per batch',
      'Batch Capacity: 1,000 kg to 5,000 kg per batch',
      'Operating Temperature: 140°C to 180°C (Up to 200°C for modified bitumen)',
      'Fully Automatic PLC with SCADA control interface',
    ],
    featuresTitle: '🛠️ Key Modules and System Flow',
    specifications: [
      { parameter: 'Capacity', value: '80, 120, 160 TPH' },
      { parameter: 'Plant Capacity Range', value: '80 TPH (Tons Per Hour) to 400 TPH+' },
      { parameter: 'Batch Cycle Time', value: '45 to 60 seconds per batch' },
      { parameter: 'Batch Capacity', value: '1,000 kg to 5,000 kg per batch' },
      { parameter: 'Operating Temperature', value: '140°C to 180°C (Up to 200°C for modified bitumen)' },
      { parameter: 'Fuel Options for Burner', value: 'Diesel, Heavy Oil, Natural Gas, LPG, or Coal' },
      { parameter: 'Control System', value: 'Fully Automatic PLC with SCADA control interface' },
    ],
    features: [
      {
        title: 'Cold Aggregate Feeder Bins',
        description: 'Multiple hoppers feed different sizes of raw aggregate (sand, stone chips) onto a collecting conveyor belt using variable-speed drives.',
      },
      {
        title: 'Drying Drum with Burner',
        description: 'A tilted, rotating drum removes all moisture from the aggregates and heats them to the required processing temperature using a high-efficiency burner.',
      },
      {
        title: 'Baghouse Filter (Pollution Control)',
        description: 'A heavy-duty pulse-jet dust collector traps fine airborne particles from the drying drum to meet strict environmental emission standards.',
      },
      {
        title: 'Vertical Bucket Elevator',
        description: 'Lifts the hot, dry aggregates to the top of the mixing tower structure.',
      },
      {
        title: 'Vibrating Screen Unit',
        description: 'Separates the hot aggregates by size through multi-deck screens, dropping them into isolated "hot bins" below.',
      },
      {
        title: 'Weighing Section',
        description: 'Independent, high-precision load cell hoppers weigh the hot aggregates, liquid bitumen (supplied from a thermic fluid-heated tank), and filler material according to the recipe.',
      },
      {
        title: 'Pugmill Mixer',
        description: 'A twin-shaft jacketed mixer blends the ingredients thoroughly for 15–20 seconds before opening a pneumatic bottom gate to discharge the finished hot mix asphalt into trucks.',
      },
    ],
    applications: [
      'National Highways & Expressways: Where strict government specifications demand absolute material consistency',
      'Airport Runway Construction: Demanding precise aggregate grading and uniform binder distribution',
      'Urban Municipal Supply: Ideal for commercial suppliers who serve multiple contractors with different mix designs on the same day',
    ],
    heroImage: '/src/assets/images/products/road/road_p1_img1.jpg',
    gallery: [
      '/src/assets/images/products/road/road_p1_img1.jpg',
      '/src/assets/images/products/road/road_p1_img2.jpg',
      '/src/assets/images/products/road/road_p1_img3.jpg',
    ],
    isPlaceholder: false,
    featured: true,
  },
  {
    id: 'asphalt-drum-mix-plant',
    slug: 'asphalt-drum-mix-plant',
    categoryId: 'road-construction-equipment',
    categoryName: 'Road Construction Equipment',
    name: 'ASPHALT DRUM MIX PLANT',
    code: 'ATL-ADM-02',
    shortDescription: 'Continuous production system where aggregate drying and bitumen mixing occur simultaneously inside a single rotating drum (CAPACITY 35, 60, 90, 120, 160 TPH).',
    description: `CAPACITY 35, 60, 90, 120, 160 TPH\n\nAn Asphalt Drum Mix Plant is a continuous production system where the drying of aggregates and the mixing of bitumen and filler materials take place simultaneously inside a single rotating drum. Unlike batch plants that process asphalt in individual cycles, drum mix plants operate continuously, making them highly efficient for large-scale, fast-paced road construction projects like highways and runways.`,
    highlights: [
      'Capacity: 35, 60, 90, 120, 160 TPH',
      'Continuous simultaneous drying and mixing in single drum',
      'Handles aggregate sizes 0 mm to 40 mm across 3 to 4 bins',
      'Bitumen Operating Temp: 140°C to 160°C',
      'Fully automatic panel with load cell integration',
    ],
    specifications: [
      { parameter: 'Capacity', value: '35, 60, 90, 120, 160 TPH' },
      { parameter: 'Production Capacity', value: '30 tons per hour (TPH) to 150+ TPH' },
      { parameter: 'Aggregate Sizes Handled', value: '0 mm to 40 mm (typically split across 3 to 4 bins)' },
      { parameter: 'Fuel Options', value: 'Diesel, LDO (Light Diesel Oil), FO (Furnace Oil), or Natural Gas' },
      { parameter: 'Bitumen Operating Temp', value: '140°C to 160°C' },
      { parameter: 'Exhaust Gas Temperature', value: '110°C to 130°C' },
      { parameter: 'Control System', value: 'Fully automatic panel with load cell integration' },
    ],
    features: [
      {
        title: 'Cold Aggregate Feeder Bins',
        description: 'Multiple bins feed different sizes of stone chips and sand onto a gathering conveyor belt. Each bin features a variable-speed drive to control the material ratio accurately.',
      },
      {
        title: 'Slinger Conveyor',
        description: 'A tilted belt conveyor that receives the blended aggregates from the feeder bins and drops them directly into the drying drum. It usually features a vibrating screen to remove oversized stones.',
      },
      {
        title: 'The Dryer-cum-Mixer Drum',
        description: 'The core of the plant. Divided into two functional zones: Drying Zone (Front) with high-capacity burner removing all moisture, and Mixing Zone (Rear) where liquid bitumen and mineral filler are injected to coat hot dry aggregates continuously.',
      },
      {
        title: 'Bitumen Storage Tanks',
        description: 'Heavily insulated tanks equipped with internal heating coils (powered by a Thermic Fluid Heater) that keep liquid bitumen at pumping temperatures.',
      },
      {
        title: 'Pollution Control System',
        description: 'Captures fine dust particles before exhaust gas exits the chimney (mid-tier Wet Dust Scrubber with cyclonic water spray).',
      },
      {
        title: 'Load-out Conveyor & Silo',
        description: 'A hot elevator or gob hopper conveyor transports the finished hot-mix asphalt from the drum into a storage silo or directly onto waiting dump trucks.',
      },
    ],
    applications: [
      'Highways & Expressways Paving',
      'Airport Runways & Taxiways',
      'Continuous Large-Scale Paving Contracts',
      'Fast-Paced Road Development Works',
    ],
    drumMixGuide: {
      capacityBadge: 'CAPACITY 35, 60, 90, 120, 160 TPH',
      intro: 'An Asphalt Drum Mix Plant is a continuous production system where the drying of aggregates and the mixing of bitumen and filler materials take place simultaneously inside a single rotating drum. Unlike batch plants that process asphalt in individual cycles, drum mix plants operate continuously, making them highly efficient for large-scale, fast-paced road construction projects like highways and runways.',
      specsTable: [
        { parameter: 'Production Capacity', range: '30 tons per hour (TPH) to 150+ TPH (Models: 35, 60, 90, 120, 160 TPH)' },
        { parameter: 'Aggregate Sizes Handled', range: '0 mm to 40 mm (typically split across 3 to 4 bins)' },
        { parameter: 'Fuel Options', range: 'Diesel, LDO (Light Diesel Oil), FO (Furnace Oil), or Natural Gas' },
        { parameter: 'Bitumen Operating Temp', range: '140°C to 160°C' },
        { parameter: 'Exhaust Gas Temperature', range: '110°C to 130°C' },
        { parameter: 'Control System', range: 'Fully automatic panel with load cell integration' },
      ],
      systemLayoutIntro: 'An asphalt drum mix plant relies on an uninterrupted, synchronized flow of materials. The system consists of these primary zones:',
      zones: [
        {
          zoneNumber: 1,
          title: 'Cold Aggregate Feeder Bins',
          description: 'Multiple bins feed different sizes of stone chips and sand onto a gathering conveyor belt. Each bin features a variable-speed drive to control the material ratio accurately.',
        },
        {
          zoneNumber: 2,
          title: 'Slinger Conveyor',
          description: 'A tilted belt conveyor that receives the blended aggregates from the feeder bins and drops them directly into the drying drum. It usually features a vibrating screen to remove oversized stones.',
        },
        {
          zoneNumber: 3,
          title: 'The Dryer-cum-Mixer Drum',
          description: 'The core of the plant. The drum is divided into two functional zones:',
          subZones: [
            {
              name: 'Drying Zone (Front)',
              description: 'A high-capacity burner blasts a flame into the drum. Aggregates move through internal flights that lift and cascade the stones through the flame to remove all moisture.',
            },
            {
              name: 'Mixing Zone (Rear)',
              description: 'Located behind the burner flame. Liquid bitumen and mineral filler are injected here, coating the hot, dry aggregates continuously.',
            },
          ],
        },
        {
          zoneNumber: 4,
          title: 'Bitumen Storage Tanks',
          description: 'Heavily insulated tanks equipped with internal heating coils (powered by a Thermic Fluid Heater) that keep liquid bitumen at pumping temperatures.',
        },
        {
          zoneNumber: 5,
          title: 'Pollution Control System',
          description: 'Captures fine dust particles before the exhaust gas exits the chimney. This is either a mid-tier Wet Dust Scrubber (cyclonic water spray).',
        },
        {
          zoneNumber: 6,
          title: 'Load-out Conveyor & Silo',
          description: 'A hot elevator or gob hopper conveyor transports the finished hot-mix asphalt from the drum into a storage silo or directly onto waiting dump trucks.',
        },
      ],
    },
    heroImage: '/src/assets/images/products/road/road_p2_img1.jpg',
    gallery: [
      '/src/assets/images/products/road/road_p2_img1.jpg',
      '/src/assets/images/products/road/road_p2_img2.jpg',
      '/src/assets/images/products/road/road_p2_img3.jpg',
      '/src/assets/images/products/road/road_p2_img4.jpg',
    ],
    isPlaceholder: false,
    featured: false,
  },
  {
    id: 'mobile-drum-mix-plant',
    slug: 'mobile-drum-mix-plant',
    categoryId: 'road-construction-equipment',
    categoryName: 'Road Construction Equipment',
    name: 'MOBILE DRUM MIX PLANT',
    code: 'ATL-MDM-03',
    shortDescription: 'Chassis-mounted portable asphalt drum mix plant engineered for rapid relocation, quick site setup, and continuous hot mix asphalt production (CAPACITY 20, 30, 40, 60, 90, 120 TPH).',
    description: `CAPACITY 20, 30, 40, 60, 90, 120 TPH\n\nA Mobile Drum Mix Plant (Portable Asphalt Drum Mix Plant) is a wheel-mounted continuous asphalt production facility designed for contractors requiring swift mobilization between project sites. Built on heavy-duty chassis equipped with pneumatic axles, kingpin, and pneumatic air brakes, this plant eliminates the need for expensive permanent concrete foundations.\n\nIt features synchronized aggregate drying and bitumen mixing inside a single rotating drum, delivering rapid deployment, high fuel efficiency, and uniform asphalt coating for remote highways, state roadways, hilly terrains, and fast-paced road construction projects.`,
    highlights: [
      'Capacity: 20, 30, 40, 60, 90, 120 TPH',
      'Chassis-Mounted Mobility: Heavy-duty pneumatic axles & kingpin for truck towing',
      'Quick Site Commissioning: Pre-wired plug-and-play modular chassis units',
      'Continuous simultaneous aggregate drying and bitumen coating in rotating drum',
      'Mobile 3 or 4-bin cold aggregate feeder with variable speed belt drives',
      'Fully automatic PLC control cabin with touch panel and load cell calibration',
    ],
    specifications: [
      { parameter: 'Capacity', value: '20, 30, 40, 60, 90, 120 TPH' },
      { parameter: 'Mobility Chassis', value: 'Wheel-mounted structural steel chassis with pneumatic axles & air brakes' },
      { parameter: 'Feeder Bins', value: '3 or 4 compartment portable bins with variable speed calibrated drives' },
      { parameter: 'Burner Fuel', value: 'Diesel / LDO / Furnace Oil / Natural Gas' },
      { parameter: 'Bitumen Operating Temp', value: '140°C to 160°C' },
      { parameter: 'Pollution Control', value: 'Chassis-mounted wet dust scrubber with cyclonic water spray' },
      { parameter: 'Discharge Conveyor', value: 'Folding load-out conveyor with hydraulically operated gob hopper' },
      { parameter: 'Control System', value: 'Centralized PLC automatic panel with load cell digital display' },
    ],
    features: [
      {
        title: 'Portable Cold Aggregate Feeder Unit',
        description: 'Mounted on an independent heavy-duty wheeled chassis with fold-down hopper side partitions for standard highway clearance during transit. Variable-speed drives ensure accurate recipe metering onto the gathering belt.',
      },
      {
        title: 'Mobile Dryer-cum-Mixer Drum',
        description: 'Engineered with dual functional zones: a forward drying zone with a high-efficiency burner for complete moisture extraction, and a rear mixing zone where liquid bitumen and filler coat hot aggregates continuously.',
      },
      {
        title: 'Mobile Bitumen Storage & Heating Tank',
        description: 'Chassis-mounted insulated bitumen tank equipped with an internal U-tube burner heating system or thermic fluid coils, ensuring bitumen remains at optimal pumping viscosity.',
      },
      {
        title: 'Mobile Wet Dust Scrubber System',
        description: 'High-efficiency pollution control unit integrated on the chassis. Uses cyclonic spray nozzles to trap fine dust particles before releasing clean exhaust gas.',
      },
      {
        title: 'Folding Load-Out Slinger Conveyor',
        description: 'Tilted drag conveyor that directly loads finished hot-mix asphalt into dump trucks. Features a hydraulic folding mechanism for quick transport setup.',
      },
      {
        title: 'Air-Conditioned Mobile Control Cabin',
        description: 'Weatherproof mobile cabin housing the centralized electric control panel, computerized recipe storage, load-cell indicators, and emergency failsafe controls.',
      },
    ],
    applications: [
      'Remote & Rural Highway Construction (PMGSY & State PWD projects)',
      'Hilly Terrain & Mountainous Road Projects where stationary plant civil work is difficult',
      'Short-to-Medium Term Paving Contracts requiring frequent plant relocation',
      'Airport Runway Repairs, Industrial Corridors & Defense Border Roads',
    ],
    drumMixGuide: {
      capacityBadge: 'CAPACITY 20, 30, 40, 60, 90, 120 TPH',
      intro: `A Mobile Asphalt Drum Mix Plant delivers complete mobility without compromising on production output. Built on rugged pneumatic-tyred chassis, each plant section is road-legal and towable by standard prime movers. It enables contractors to set up within hours, run continuous high-volume paving, and quickly move to the next site once the stretch is paved.`,
      specsTable: [
        { parameter: 'Production Capacity Range', range: '20, 30, 40, 60, 90, 120 TPH' },
        { parameter: 'Chassis Configuration', range: 'Wheel-mounted with kingpin, leaf springs & pneumatic brakes' },
        { parameter: 'Aggregate Bins Handled', range: '3 to 4 portable compartments with variable-speed drives' },
        { parameter: 'Burner Fuel Compatibility', range: 'Diesel, LDO (Light Diesel Oil), FO (Furnace Oil), or Gas' },
        { parameter: 'Bitumen Temperature Range', range: '140°C to 160°C' },
        { parameter: 'Secondary Dust Collector', range: 'Chassis-mounted Venturi wet scrubber with water pump' },
        { parameter: 'Control Interface', range: 'Fully automatic PLC panel with digital load cell tracking' },
      ],
      systemLayoutIntro: 'The mobile asphalt drum mix plant is configured across synchronized, transportable chassis units for rapid field setup:',
      zones: [
        {
          zoneNumber: 1,
          title: 'Chassis 1: Mobile Cold Aggregate Feeder Bins',
          description: 'Portable hoppers equipped with foldable side walls and variable speed gathering belts. Includes a vibrating screen to discard oversized stones before feeding.',
        },
        {
          zoneNumber: 2,
          title: 'Chassis 2: Mobile Dryer-cum-Mixer Drum & Burner',
          description: 'Wheel-mounted rotary drum featuring high-efficiency flame drying in the forward section and high-shear bitumen coating in the rear section.',
        },
        {
          zoneNumber: 3,
          title: 'Chassis 3: Mobile Bitumen Storage & Heating Unit',
          description: 'Insulated storage tank with internal heating system and positive-displacement bitumen dosing pump mounted on the chassis.',
        },
        {
          zoneNumber: 4,
          title: 'Chassis 4: Mobile Wet Dust Collector (Pollution Control)',
          description: 'Cyclonic wet scrubber with high-pressure water spray nozzles capturing exhaust dust particles to ensure clean air compliance.',
        },
        {
          zoneNumber: 5,
          title: 'Load-Out Slinger Conveyor & Control Cabin',
          description: 'Folding hot mix load-out conveyor discharging directly into tippers, alongside the centralized air-conditioned operator control cabin.',
        },
      ],
    },
    heroImage: '/src/assets/images/products/road/road_mobile_drum_1.jpg',
    gallery: [
      '/src/assets/images/products/road/road_mobile_drum_1.jpg',
      '/src/assets/images/products/road/road_mobile_drum_2.jpg',
      '/src/assets/images/products/road/road_mobile_drum_3.jpg',
      '/src/assets/images/products/road/road_mobile_drum_4.jpg',
    ],
    isPlaceholder: false,
    featured: false,
  },
  {
    id: 'wet-mix-plant-wmm',
    slug: 'wet-mix-plant-wmm',
    categoryId: 'road-construction-equipment',
    categoryName: 'Road Construction Equipment',
    name: 'WET MIX PLANT (WMM PLANT)',
    code: 'ATL-WMM-03',
    shortDescription: 'Specialized continuous-flow production system producing a homogenous cold mix blend of aggregates, sand, and water for road base and sub-base layers.',
    description: `A Wet Mix Macadam (WMM) Plant is a specialized, continuous-flow production system used to produce a homogenous blend of stone aggregates of various sizes, clean sand or stone dust, and a controlled amount of water. This processed cold mix forms the critical base and sub-base layers of modern highways and runways before asphalt or concrete layers are applied. Unlike asphalt plants, a WMM plant operates entirely cold without any heating elements or bitumen.`,
    highlights: [
      'Production Capacity: 100 Tons Per Hour (TPH) to 300+ TPH',
      'Aggregate Sizes Handled: 0 mm to 40 mm (4 cold bins)',
      'Mixing Unit: Heavy-duty twin-shaft pug mill',
      'Digital flow meter for controlled water addition (4% to 7% by weight)',
      'Fully automatic PLC-based panel with variable frequency drives (VFDs)',
    ],
    specifications: [
      { parameter: 'Production Capacity', value: '100 Tons Per Hour (TPH) to 300+ TPH' },
      { parameter: 'Aggregate Sizes Handled', value: '0 mm to 40 mm (typically split across 4 cold bins)' },
      { parameter: 'Water Storage Capacity', value: '4,000 Litres to 10,000 Litres (optional)' },
      { parameter: 'Mixing Unit Type', value: 'Twin-shaft pug mill' },
      { parameter: 'Connected Power Load', value: '~60 HP to 120+ HP (depending on TPH capacity)' },
      { parameter: 'Control System', value: 'Fully automatic PLC-based panel with variable frequency drives (VFDs)' },
      { parameter: 'Control Cabin', value: 'Air-conditioned cabin housing centralized electric control panel (Optional)' },
    ],
    features: [
      {
        title: 'Cold Aggregate Feeder Bins',
        description: 'Typically features 4 separate bins equipped with adjustable mechanical gates and variable-speed conveyor drives. This allows operators to meter specific ratios of coarse stones, gravel, and stone dust onto the gathering belt.',
      },
      {
        title: 'Vibrating Screen',
        description: 'Placed between the gathering conveyor and the main charging belt. It filters out oversized boulders and debris, ensuring only compliant aggregate sizes enter the mixing zone.',
      },
      {
        title: 'Twin-Shaft Pugmill Mixer',
        description: 'The heart of the plant. It features a heavy-duty steel trough lined with replaceable wear-resistant liners. Inside, two counter-rotating shafts equipped with paddle arms and tips rapidly blend the aggregates while water is injected.',
      },
      {
        title: 'Water Tank & Metering System',
        description: 'A centrifugal water pump draws from a storage tank and delivers water through a spray bar inside the pugmill. A digital flow meter precisely controls water addition (usually 4% to 7% by weight) based on the current aggregate feed rate.',
      },
      {
        title: 'Control Cabin',
        description: 'An air-conditioned cabin housing the centralized electric control panel. It features a PLC interface that auto-calculates and locks aggregate-to-water ratios.',
      },
    ],
    applications: [
      'Highway Base and Sub-Base Layers (Wet Mix Macadam)',
      'Airport Runway & Taxiway Base Layer Preparation',
      'Expressway Foundation and Heavy Pavement Support',
      'Industrial Pavement Ground Layers',
    ],
    wetMixGuide: {
      intro: 'A Wet Mix Macadam (WMM) Plant is a specialized, continuous-flow production system used to produce a homogenous blend of stone aggregates of various sizes, clean sand or stone dust, and a controlled amount of water. This processed cold mix forms the critical base and sub-base layers of modern highways and runways before asphalt or concrete layers are applied. Unlike asphalt plants, a WMM plant operates entirely cold without any heating elements or bitumen.',
      specsTable: [
        { parameter: 'Production Capacity', range: '100 Tons Per Hour (TPH) to 300+ TPH' },
        { parameter: 'Aggregate Sizes Handled', range: '0 mm to 40 mm (typically split across 4 cold bins)' },
        { parameter: 'Water Storage Capacity', range: '4,000 Litres to 10,000 Litres (optional)' },
        { parameter: 'Mixing Unit Type', range: 'Twin-shaft pug mill' },
        { parameter: 'Connected Power Load', range: '~60 HP to 120+ HP (depending on TPH capacity)' },
        { parameter: 'Control System', range: 'Fully automatic PLC-based panel with variable frequency drives (VFDs)' },
        { parameter: 'Control Cabin', range: 'OPTIONAL' },
      ],
      layoutIntro: 'A WMM plant is engineered for high-volume output and precise aggregate blending. The layout consists of these core assemblies:',
      assemblies: [
        {
          title: 'Cold Aggregate Feeder Bins',
          description: 'Typically features 4 separate bins equipped with adjustable mechanical gates and variable-speed conveyor drives. This allows operators to meter specific ratios of coarse stones, gravel, and stone dust onto the gathering belt.',
        },
        {
          title: 'Vibrating Screen',
          description: 'Placed between the gathering conveyor and the main charging belt. It filters out oversized boulders and debris, ensuring only compliant aggregate sizes enter the mixing zone.',
        },
        {
          title: 'Twin-Shaft Pugmill Mixer',
          description: 'The heart of the plant. It features a heavy-duty steel trough lined with replaceable wear-resistant liners. Inside, two counter-rotating shafts equipped with paddle arms and tips rapidly blend the aggregates while water is injected.',
        },
        {
          title: 'Water Tank & Metering System',
          description: 'A centrifugal water pump draws from a storage tank and delivers water through a spray bar inside the pugmill. A digital flow meter precisely controls water addition (usually 4% to 7% by weight) based on the current aggregate feed rate.',
        },
        {
          title: 'Control Cabin',
          description: 'An air-conditioned cabin housing the centralized electric control panel. It features a PLC interface that auto-calculates and locks aggregate-to-water ratios.',
        },
      ],
    },
    heroImage: '/src/assets/images/products/road/road_p3_img1.jpg',
    gallery: [
      '/src/assets/images/products/road/road_p3_img1.jpg',
      '/src/assets/images/products/road/road_p3_img2.jpg',
      '/src/assets/images/products/road/road_p3_img3.jpg',
      '/src/assets/images/products/road/road_p3_img4.jpg',
    ],
    isPlaceholder: false,
    featured: false,
  },
  {
    id: 'asphalt-paver-finisher',
    slug: 'asphalt-paver-finisher',
    categoryId: 'road-construction-equipment',
    categoryName: 'Road Construction Equipment',
    name: 'ASPHALT PAVER FINISHER',
    code: 'ATL-APF-04',
    shortDescription: 'Indian Standard (IS:15808) & MORT&H mechanical paver finisher with 2.5m to 4.5m paving width for laying Hot Mix Asphalt and cold WMM.',
    description: `An Indian-make Indian Standard (IS:15808) Mechanical Asphalt Paver Finisher with a 2.5m to 4.5m paving width is the workhorse of regional and rural road development across India. Built strictly in compliance with MORT&H specifications, this specific model is a wheel-mounted, dual-purpose machine engineered to lay both Hot Mix Asphalt (Bituminous Macadam) and cold Wet Mix Macadam (WMM).\n\nThe primary defining trait of a "Mechanical" paver is its transmission system, which utilizes a rugged automotive gearbox, clutch, and heavy-duty chain-drive mechanisms instead of complete hydrostatic tracking. This makes it highly cost-effective, straightforward to maintain, and extremely popular among Indian civil contractors.`,
    highlights: [
      'Paving Width: 2.5 Meters (Base) extendable up to 4.5 Meters (Hydraulic)',
      'Material Laying Capacity: 125 to 150 Tons Per Hour (TPH)',
      'Dual-purpose: lays both Hot Mix Asphalt and cold Wet Mix Macadam (WMM)',
      'Engine: 74 HP to 105 HP (Kirloskar / Leyland / Cummins, BS-IV or CEV V)',
      'Strictly compliant with MORT&H specifications and IS:15808 standards',
    ],
    specifications: [
      { parameter: 'Paving Width', value: '2.5 Meters (Base) extendable up to 4.5 Meters' },
      { parameter: 'Screed Extension', value: 'Hydraulic Extension (no bolt-on manual blocks required for 4.5m)' },
      { parameter: 'Paving Thickness', value: '10 mm to 200 mm' },
      { parameter: 'Material Laying Capacity', value: '125 to 150 Tons Per Hour (TPH)' },
      { parameter: 'Engine Configuration', value: '74 HP to 105 HP (Kirloskar / Leyland / Cummins, BS-IV or CEV V compliant)' },
      { parameter: 'Paving Speed', value: '1.25 to 24 meters per minute' },
      { parameter: 'Travel Speed', value: '0 to 16 km/h (high-speed transport between adjacent road stretches)' },
      { parameter: 'Hopper Capacity', value: 'Approx. 4.0 to 4.25 Cubic Meters (~6 to 8 Tons)' },
    ],
    features: [
      {
        title: 'Hydraulic Screed Extension',
        description: 'The basic mechanical screed starts at 2.5 meters. With the touch of a hydraulic lever on the operator panel, it expands seamlessly on twin-sliding pipes up to 4.5 meters to match varying village or district road dimensions.',
      },
      {
        title: 'Screed Heating & Compaction',
        description: 'The screed plate is heated evenly via dual LPG burners or oil burners to prevent hot asphalt from sticking to the cold steel. A mechanical eccentric shaft provides structural vibration to pre-compact the asphalt layout before a road roller takes over.',
      },
      {
        title: 'Traction & Chassis Drive (Rear & Front Axle)',
        description: 'Rear Axle: Equipped with two heavy-duty pneumatic tyres (usually 10x20 16-Ply) driven by a robust chain and sprocket arrangement connected to a manual automotive gearbox. Front Axle: Supported by dual or quad solid-rubber steering tyres (558x405 mm) mounted on a pivoting equalizer beam to navigate uneven terrain smoothly.',
      },
      {
        title: 'Material Conveyance',
        description: 'Dual heavy-duty flat slat conveyors move material from the hopper to the rear. A set of independent, wear-resistant steel augers (screw flights) spreads the asphalt uniformly across the 4.5-meter width.',
      },
      {
        title: 'Steering and Control',
        description: 'Outfitted with hydraulic power steering and air-actuated brakes to allow the operator to align perfectly with the shoulder line of the road.',
      },
    ],
    applications: [
      'Regional & Rural Road Development (PMGSY, MDR, SH)',
      'Hot Mix Bituminous Macadam (BM & DBM) Laying',
      'Cold Wet Mix Macadam (WMM) Base Construction',
      'District Road Widening & Village Connectivity Roadways',
    ],
    paverGuide: {
      intro: `An Indian-make Indian Standard (IS:15808) Mechanical Asphalt Paver Finisher with a 2.5m to 4.5m paving width is the workhorse of regional and rural road development across India. Built strictly in compliance with MORT&H specifications, this specific model is a wheel-mounted, dual-purpose machine engineered to lay both Hot Mix Asphalt (Bituminous Macadam) and cold Wet Mix Macadam (WMM).\n\nThe primary defining trait of a "Mechanical" paver is its transmission system, which utilizes a rugged automotive gearbox, clutch, and heavy-duty chain-drive mechanisms instead of complete hydrostatic tracking. This makes it highly cost-effective, straightforward to maintain, and extremely popular among Indian civil contractors.`,
      specsTable: [
        { parameter: 'Paving Width', value: '2.5 Meters (Base) extendable up to 4.5 Meters' },
        { parameter: 'Screed Extension', value: 'Hydraulic Extension (no bolt-on manual blocks required for 4.5m)' },
        { parameter: 'Paving Thickness', value: '10 mm to 200 mm' },
        { parameter: 'Material Laying Capacity', value: '125 to 150 Tons Per Hour (TPH)' },
        { parameter: 'Engine Configuration', value: '74 HP to 105 HP (Kirloskar / Leyland / Cummins, BS-IV or CEV V compliant)' },
        { parameter: 'Paving Speed', value: '1.25 to 24 meters per minute' },
        { parameter: 'Travel Speed', value: '0 to 16 km/h (high-speed transport between adjacent road stretches)' },
        { parameter: 'Hopper Capacity', value: 'Approx. 4.0 to 4.25 Cubic Meters (~6 to 8 Tons)' },
      ],
      features: [
        {
          title: 'Hydraulic Screed Extension',
          description: 'The basic mechanical screed starts at 2.5 meters. With the touch of a hydraulic lever on the operator panel, it expands seamlessly on twin-sliding pipes up to 4.5 meters to match varying village or district road dimensions.',
        },
        {
          title: 'Screed Heating & Compaction',
          description: 'The screed plate is heated evenly via dual LPG burners or oil burners to prevent hot asphalt from sticking to the cold steel. A mechanical eccentric shaft provides structural vibration to pre-compact the asphalt layout before a road roller takes over.',
        },
        {
          title: 'Traction & Chassis Drive',
          subPoints: [
            {
              label: 'Rear Axle',
              text: 'Equipped with two heavy-duty pneumatic tyres (usually 10x20 16-Ply) driven by a robust chain and sprocket arrangement connected to a manual automotive gearbox.',
            },
            {
              label: 'Front Axle',
              text: 'Supported by dual or quad solid-rubber steering tyres (558x405 mm) mounted on a pivoting equalizer beam to navigate uneven terrain smoothly.',
            },
          ],
        },
        {
          title: 'Material Conveyance',
          description: 'Dual heavy-duty flat slat conveyors move material from the hopper to the rear. A set of independent, wear-resistant steel augers (screw flights) spreads the asphalt uniformly across the 4.5-meter width.',
        },
        {
          title: 'Steering and Control',
          description: 'Outfitted with hydraulic power steering and air-actuated brakes to allow the operator to align perfectly with the shoulder line of the road.',
        },
      ],
    },
    heroImage: '/src/assets/images/products/road/road_p4_img1.jpg',
    gallery: [
      '/src/assets/images/products/road/road_p4_img1.jpg',
      '/src/assets/images/products/road/road_p4_img2.jpg',
      '/src/assets/images/products/road/road_p4_img3.jpg',
      '/src/assets/images/products/road/road_p4_img4.jpg',
    ],
    isPlaceholder: false,
    featured: false,
  },
  {
    id: 'bitumen-truck-mounted-sprayer',
    slug: 'bitumen-truck-mounted-sprayer',
    categoryId: 'road-construction-equipment',
    categoryName: 'Road Construction Equipment',
    name: 'BITUMEN TRUCK MOUNTED SPRAYER',
    code: 'ATL-TMS-05',
    shortDescription: 'Indian Standard truck-mounted bitumen pressure distributor / sprayer (Capacity: 4, 6, 8, 10 KL, 2.5m to 4.2m width) for metered tack coat and prime coat application.',
    description: `CAPACITY 4, 6, 8, 10 KL\n\nAn Indian-make Indian Standard Truck-Mounted Bitumen Pressure Distributor / Sprayer (2.5m to 4.2m spray width) is a specialized road construction vehicle used to apply an even, metered layer of liquid bitumen or bitumen emulsion onto a road base before asphalt laying.\n\nManufactured under MORTH guidelines and IS:15808 standards, these machines are typically mounted on standard Indian commercial truck chassis (such as Tata Motors 1616 / 1512 or Ashok Leyland Ecomet / 1615). They are the industry standard for applying tack coats and prime coats on state highways and rural roads.`,
    highlights: [
      'Capacity: 4, 6, 8, 10 KL',
      'Foldable Spray Bar: 2.5m base extendable up to 4.2m width',
      'Heavy-duty positive displacement gear pump (300 to 450 L/min)',
      'Auxiliary Engine: 25 HP to 45 HP diesel engine (Kirloskar / Simpson)',
      'Anti-clogging multi-port valve with diesel flush & air purge system',
    ],
    specifications: [
      { parameter: 'Capacity', value: '4, 6, 8, 10 KL' },
      { parameter: 'Spray Bar Width', value: '2.5 Meters (Base) fold-extendable up to 4.2 Meters' },
      { parameter: 'Tank Storage Capacity', value: '4,000 Litres to 6,000 Litres (Standard 5,000L is most common)' },
      { parameter: 'Bitumen Pump Type', value: 'Heavy-duty positive displacement gear pump (2" to 3")' },
      { parameter: 'Pump Capacity', value: '300 to 450 Litres per minute' },
      { parameter: 'Air Compressor', value: 'Twin cylinder, 2 HP to 3 HP capacity' },
      { parameter: 'Auxiliary Engine', value: '25 HP to 45 HP water/air-cooled diesel engine (Kirloskar / Simpson)' },
      { parameter: 'Spray Output Control', value: 'Digital tachometer with fly-wheel speed tracking' },
    ],
    features: [
      {
        title: 'Foldable Spray Bar (2.5m to 4.2m)',
        description: 'The central spray bar measures 2.5 meters for standard lane travel. Two mechanical or hydraulic wing-folding extensions unlock on both sides, bringing the total continuous spraying width to 4.2 meters. This covers a standard single-lane highway (3.75 meters) in a single run with room to spare for the shoulders.',
      },
      {
        title: 'Insulated Bitumen Tank',
        description: 'The tank body is heavily insulated with 50mm high-density glass wool wrapped in an outer stainless steel or aluminium sheet protective jacket. This layout prevents thermal loss during transport from the refinery or batching plant.',
      },
      {
        title: 'Heating System & Pneumatic Nozzles',
        description: 'Equipped with a high-capacity, automatic automatic-ignition diesel burner combined with a u-shaped return heating pipe running through the tank body. Safely elevates bitumen temperature up to 150°C–180°C. Brass/stainless steel atomizing nozzles spaced at 100mm intervals, selectively opened/shut via pneumatic cylinders.',
      },
      {
        title: 'Dual Operation Controls',
        description: "Driver's Cabin contains the main digital spraying controller, application rate lock system, and master valve switches. Rear Platform is outfitted with mechanical bypass valves, pressure gauges, temperature indicators, and a hand-spray lance attachment.",
      },
      {
        title: 'Cleaning & Air Purge System',
        description: 'Anti-clogging multi-port valve design: Bitumen Suction/Circulation, Diesel Flush Line (connects to 20–30L tank to wash residual nozzles), and Air Purge (integrated air compressor blasts high-pressure air through entire 4.2m bar so no asphalt solidifies).',
      },
    ],
    applications: [
      'Highway Tack Coat & Prime Coat Spraying',
      'Surface Dressing & Chip Sealing Works',
      'Liquid Bitumen and Emulsion Spray Application',
      'State Highways & Rural PMGSY Road Surface Sealing',
    ],
    truckSprayerGuide: {
      capacityBadge: 'CAPACITY 4, 6, 8, 10 KL',
      intro: `An Indian-make Indian Standard Truck-Mounted Bitumen Pressure Distributor / Sprayer (2.5m to 4.2m spray width) is a specialized road construction vehicle used to apply an even, metered layer of liquid bitumen or bitumen emulsion onto a road base before asphalt laying.\n\nManufactured under MORTH guidelines and IS:15808 standards, these machines are typically mounted on standard Indian commercial truck chassis (such as Tata Motors 1616 / 1512 or Ashok Leyland Ecomet / 1615). They are the industry standard for applying tack coats and prime coats on state highways and rural roads.`,
      specsTable: [
        { parameter: 'Spray Bar Width', value: '2.5 Meters (Base) fold-extendable up to 4.2 Meters' },
        { parameter: 'Tank Storage Capacity', value: '4,000 Litres to 6,000 Litres (Standard 5,000L is most common)' },
        { parameter: 'Bitumen Pump Type', value: 'Heavy-duty positive displacement gear pump (2" to 3")' },
        { parameter: 'Pump Capacity', value: '300 to 450 Litres per minute' },
        { parameter: 'Air Compressor', value: 'Twin cylinder, 2 HP to 3 HP capacity' },
        { parameter: 'Auxiliary Engine', value: '25 HP to 45 HP water/air-cooled diesel engine (Kirloskar / Simpson)' },
        { parameter: 'Spray Output Control', value: 'Digital tachometer with fly-wheel speed tracking' },
      ],
      features: [
        {
          title: 'Foldable Spray Bar (2.5m to 4.2m)',
          description: 'The central spray bar measures 2.5 meters for standard lane travel. Two mechanical or hydraulic wing-folding extensions unlock on both sides, bringing the total continuous spraying width to 4.2 meters. This covers a standard single-lane highway (3.75 meters) in a single run with room to spare for the shoulders.',
        },
        {
          title: 'Insulated Bitumen Tank',
          description: 'The tank body is heavily insulated with 50mm high-density glass wool wrapped in an outer stainless steel or aluminium sheet protective jacket. This layout prevents thermal loss during transport from the refinery or batching plant.',
        },
        {
          title: 'Heating System',
          description: 'Equipped with a high-capacity, automatic automatic-ignition diesel burner combined with a u-shaped return heating pipe running through the tank body. It safely monitors and elevates the bitumen temperature up to 150°C–180°C.',
        },
        {
          title: 'Pneumatically Controlled Nozzles',
          description: "Features a line of brass or stainless steel atomizing nozzles spaced at uniform 100mm intervals. Every single nozzle can be selectively opened or shut from the operator's rear platform via pneumatic cylinders.",
        },
        {
          title: 'Dual Operation Controls',
          subPoints: [
            {
              label: "Driver's Cabin",
              text: 'Contains the main digital spraying controller, application rate lock system, and master valve switches.',
            },
            {
              label: 'Rear Platform',
              text: 'Outfitted with mechanical bypass valves, pressure gauges, temperature indicators, and a hand-spray lance attachment for tight corners and manual touch-ups.',
            },
          ],
        },
      ],
      cleaningIntro: 'One of the most vital features of Indian standard sprayers is the anti-clogging multi-port valve design:',
      cleaningItems: [
        {
          title: 'Bitumen Suction',
          description: 'Sucks hot bitumen into the tank or circulates it inside the bar to prevent premature cooling.',
        },
        {
          title: 'Diesel Flush Line',
          description: 'Connects to a dedicated 20–30 litre auxiliary diesel tank to wash out leftover residues from the nozzles.',
        },
        {
          title: 'Air Purge',
          description: 'Uses the integrated air compressor to blast high-pressure air through the entire 4.2-meter spray bar, ensuring no asphalt solidifies inside to block the next shift.',
        },
      ],
    },
    heroImage: '/src/assets/images/products/road/road_p5_img1.jpg',
    gallery: [
      '/src/assets/images/products/road/road_p5_img1.jpg',
      '/src/assets/images/products/road/road_p5_img2.jpg',
      '/src/assets/images/products/road/road_p5_img3.jpg',
      '/src/assets/images/products/road/road_p5_img4.jpg',
    ],
    isPlaceholder: false,
    featured: false,
  },
  {
    id: 'bitumen-mini-tractor-linked-sprayer',
    slug: 'bitumen-mini-tractor-linked-sprayer',
    categoryId: 'road-construction-equipment',
    categoryName: 'Road Construction Equipment',
    name: 'BITUMEN MINI TRACTOR LINKED SPRAYER',
    code: 'ATL-TLS-06',
    shortDescription: 'Indian Standard tractor-linked bitumen sprayer (Capacity: 2, 3 KL, 2.5m to 3.8m spray width) towed by standard 35 HP to 50+ HP agricultural tractor.',
    description: `CAPACITY 2, 3 KL\n\nAn Indian-make Indian Standard Tractor-Linked Bitumen Sprayer (often called a tractor-towable or tractor-mounted bitumen pressure distributor) is a highly cost-effective, compact road construction machine. Built in compliance with MORTH specifications and IS:15808 standards, this equipment is designed to be towed by a standard Indian agricultural tractor (typically 35 HP to 50+ HP).\n\nIt is the absolute standard for small-to-medium road projects across India, such as PMGSY rural roads, village link roads, trench repairs, and factory internal pavements, where investing in a dedicated truck-mounted sprayer is financially unviable.`,
    highlights: [
      'Capacity: 2, 3 KL (1,000L, 2,000L to 3,000L)',
      'Towed by standard Indian agricultural tractor (35 HP to 50+ HP)',
      'Spray Bar Width: 2.5 Meters standard up to 3.8 Meters maximum',
      'Independent Power Pack: 5 HP to 6 HP Air-Cooled Diesel Engine',
      'Multi-Port Cleaning System: Bitumen Spraying, Diesel Cleaning & Air Purging',
    ],
    specifications: [
      { parameter: 'Capacity', value: '2, 3 KL' },
      { parameter: 'Tank Storage Capacity', value: '1,000 Litres, 2,000 Litres, to 3,000 Litres (2,000L is most common)' },
      { parameter: 'Tractor Requirement', value: 'Any standard Indian tractor with 35 HP, 45 HP, or 50 HP capacity' },
      { parameter: 'Hitch Type', value: 'Heavy-duty tow bar eye hitch for tractor drawbar coupling' },
      { parameter: 'Spray Bar Width', value: '2.5 Meters (Standard base) up to 3.8 Meters maximum' },
      { parameter: 'Auxiliary Engine', value: '5 HP to 6 HP Air-Cooled Diesel Engine (Fieldstar, Greaves, or Kirloskar)' },
      { parameter: 'Bitumen Pump Type', value: 'Heavy-duty positive displacement gear pump (1.5" or 2")' },
    ],
    features: [
      {
        title: 'Dual Heating System',
        description: 'The storage tank features an inner U-shaped heating pipe. It uses a manual or automatic high-pressure oil/diesel burner system to heat the bitumen or emulsion to spraying temperature (140°C–160°C).',
      },
      {
        title: 'Insulated Tank Body',
        description: 'The tank is completely wrapped in 50mm high-density glass wool insulation and sheeted with a durable galvanized or stainless steel outer jacket to preserve heat during towing.',
      },
      {
        title: 'Independent Power Pack',
        description: 'Features its own auxiliary diesel engine mounted on the front chassis platform. This engine drives both the bitumen gear pump and the air compressor simultaneously.',
      },
      {
        title: 'Hand Spray Lance & Spray Bar',
        description: 'Main Spray Bar spans 2.5 meters fitted with brass atomizing nozzles. Hand Spray Attachment comes with a flexible high-temperature hose pipe (approx. 4 to 5 meters long) and hand-operated lance for manual edge-coating, patching, and tight corners.',
      },
      {
        title: 'Heavy-Duty Chassis',
        description: 'Fabricated on a robust structural steel channel chassis equipped with a single axle and two standard commercial truck tyres (e.g., 7.50x16 or 9.00x20).',
      },
      {
        title: 'Multi-Port Cleaning System',
        description: 'Standard three-way valve system: 1. Bitumen Spraying / Circulation (keeps material fluid), 2. Diesel Cleaning (10–15L auxiliary tank supplies diesel to dissolve residual asphalt), 3. Air Purging (compressor forces high-pressure air through nozzles).',
      },
    ],
    applications: [
      'PMGSY Rural Roads & Village Link Roads',
      'Municipal Trench Repairs & Road Pothole Patching',
      'Factory & Industrial Complex Internal Pavements',
      'Sub-contractor Bitumen Tack Coat & Prime Coat Spraying',
    ],
    tractorSprayerGuide: {
      capacityBadge: 'CAPACITY 2, 3 KL',
      intro: `An Indian-make Indian Standard Tractor-Linked Bitumen Sprayer (often called a tractor-towable or tractor-mounted bitumen pressure distributor) is a highly cost-effective, compact road construction machine. Built in compliance with MORTH specifications and IS:15808 standards, this equipment is designed to be towed by a standard Indian agricultural tractor (typically 35 HP to 50+ HP).\n\nIt is the absolute standard for small-to-medium road projects across India, such as PMGSY rural roads, village link roads, trench repairs, and factory internal pavements, where investing in a dedicated truck-mounted sprayer is financially unviable.`,
      specsTable: [
        { parameter: 'Tank Storage Capacity', value: '1,000 Litres, 2,000 Litres, to 3,000 Litres (2,000L is most common)' },
        { parameter: 'Tractor Requirement', value: 'Any standard Indian tractor with 35 HP, 45 HP, or 50 HP capacity' },
        { parameter: 'Hitch Type', value: 'Heavy-duty tow bar eye hitch for tractor drawbar coupling' },
        { parameter: 'Spray Bar Width', value: '2.5 Meters (Standard base) up to 3.8 Meters maximum' },
        { parameter: 'Auxiliary Engine', value: '5 HP to 6 HP Air-Cooled Diesel Engine (Fieldstar, Greaves, or Kirloskar)' },
        { parameter: 'Bitumen Pump Type', value: 'Heavy-duty positive displacement gear pump (1.5" or 2")' },
      ],
      features: [
        {
          title: 'Dual Heating System',
          description: 'The storage tank features an inner U-shaped heating pipe. It uses a manual or automatic high-pressure oil/diesel burner system to heat the bitumen or emulsion to spraying temperature (140°C–160°C).',
        },
        {
          title: 'Insulated Tank Body',
          description: 'The tank is completely wrapped in 50mm high-density glass wool insulation and sheeted with a durable galvanized or stainless steel outer jacket to preserve heat during towing.',
        },
        {
          title: 'Independent Power Pack',
          description: 'Its own auxiliary diesel engine mounted on the front chassis platform. This engine drives both the bitumen gear pump and the air compressor simultaneously.',
        },
        {
          title: 'Hand Spray Lance & Spray Bar',
          subPoints: [
            {
              label: 'Main Spray Bar',
              text: 'Spans 2.5 meters and is fitted with brass atomizing nozzles spaced at uniform intervals.',
            },
            {
              label: 'Hand Spray Attachment',
              text: 'Comes with a flexible, high-temperature hose pipe (approx. 4 to 5 meters long) and a hand-operated spray lance for manual edge-coating, patching, and hard-to-reach corners.',
            },
          ],
        },
        {
          title: 'Heavy-Duty Chassis',
          description: 'The entire plant is fabricated on a robust structural steel channel chassis equipped with a single axle and two standard commercial truck tyres (e.g., 7.50x16 or 9.00x20).',
        },
      ],
      cleaningIntro: 'To prevent the bitumen from solidifying and permanently ruining the pipeline or nozzles after a shift, Indian manufacturers integrate a standard three-way valve system:',
      cleaningItems: [
        {
          number: 1,
          title: 'Bitumen Spraying / Circulation',
          description: 'Pumps hot material out to the spray bar or circulates it inside the tank to keep it fluid.',
        },
        {
          number: 2,
          title: 'Diesel Cleaning',
          description: 'A small 10–15 litre auxiliary tank supplies diesel into the pump and lines to dissolve residual asphalt.',
        },
        {
          number: 3,
          title: 'Air Purging',
          description: 'The air compressor forces high-pressure air through the nozzles, cleaning out the remaining residue completely.',
        },
      ],
    },
    heroImage: '/src/assets/images/products/road/road_p6_img1.jpg',
    gallery: [
      '/src/assets/images/products/road/road_p6_img1.jpg',
      '/src/assets/images/products/road/road_p6_img2.jpg',
      '/src/assets/images/products/road/road_p6_img3.jpg',
      '/src/assets/images/products/road/road_p6_img4.jpg',
    ],
    isPlaceholder: false,
    featured: false,
  },
];

export const CEMENT_PRODUCTS: Product[] = [
  {
    id: 'cement-concrete-batching-plant',
    slug: 'cement-concrete-batching-plant',
    categoryId: 'cement-concrete-equipment',
    categoryName: 'Cement & Concrete Equipment',
    name: 'CEMENT CONCRETE BATCHING PLANT',
    code: 'ATL-CBP-01',
    shortDescription: 'Indian Standard (IS:4925 & MORT&H) concrete batching plant (Capacity: 30, 45, 60, 75, 90 m³/hr) engineered for high-precision weighing, aggregate blending, and continuous mixing.',
    description: `CAPACITY 30, 45, 60, 75, 90 CM3\n\nAn Indian-make Indian Standard Cement Concrete Batching Plant is a heavy-duty industrial assembly engineered to precisely weigh, blend, and mix aggregates, sand, cement, water, and chemical admixtures to produce high-quality concrete.\n\nManufactured strictly in compliance with Bureau of Indian Standards (BIS) codes (such as IS:4925 for concrete batching plants) and MORT&H specifications, these plants are widely used for national highways, bridges, metro rails, and high-rise commercial structures across India.`,
    highlights: [
      'Capacity: 30, 45, 60, 75, 90 m³/hr (CM3)',
      'Mixer Options: Pan Mixer / Turbo Twin-Shaft Mixer or Heavy-duty Twin-Shaft',
      'Aggregate Storage: 3 to 5 Bins (Inline or Compartment Pocket Bins)',
      'High-precision S-type & compression electronic load cells',
      'Advanced SCADA / PLC control with up to 99+ mix recipes & reporting',
    ],
    specifications: [
      { parameter: 'Production Capacity', value: '30, 45, 60, 75, 90 m³/hr (Compact 20–45 m³/hr, Large 60–120+ m³/hr)' },
      { parameter: 'Mixer Type Options', value: 'Pan Mixer / Turbo Twin-Shaft Mixer / Heavy-duty Twin-Shaft Mixer' },
      { parameter: 'Aggregate Storage', value: '3 to 5 Bins (Inline horizontal or Compartment pocket layout)' },
      { parameter: 'Weighing Sensors', value: 'High-precision S-type, shear beam, and compression electronic load cells' },
      { parameter: 'Cement Silos', value: '1 to 2 Silos (30 to 150-ton) up to multiple Silos (200+ tons)' },
      { parameter: 'Control System', value: 'Advanced SCADA / PLC with digital display and automated batch print-out' },
      { parameter: 'Standards Compliance', value: 'IS:4925 (Bureau of Indian Standards) & MORT&H specifications' },
    ],
    features: [
      {
        title: 'Aggregate Feeding & Storage Bins',
        description: 'Available in Inline layouts (horizontal arrangement for easy loading via backhoe loaders/JCBs) or Compartment layouts (pocket bins). Each bin features independent pneumatic discharge gates.',
      },
      {
        title: 'Weighing & Inclined Conveyor',
        description: 'High-accuracy weighing conveyor beneath aggregate bins, with inclined belt conveyor used in larger plants (60 m³/hr and above) to continuously transport material to the mixing unit.',
      },
      {
        title: 'Concrete Mixing Unit (Pan / Twin-Shaft)',
        description: 'Pan/Planetary mixers for standard concrete up to M35; Heavy-duty twin counter-rotating shaft mixer with specialized paddle arms for rapid homogenous mixing of high-strength concrete (M50+) within 30 seconds.',
      },
      {
        title: 'Cement & Fly Ash Silos',
        description: 'Vertical steel silos equipped with safety pressure relief valves, aeration/fluidization nozzles to prevent choking, and high-efficiency screw conveyors.',
      },
      {
        title: 'Microprocessor PLC / SCADA Control Cabin',
        description: 'Centralized cabin storing 99+ concrete recipes, auto tracking moisture percentages, printing batch reports, and logging quality audit data.',
      },
    ],
    applications: [
      'National Highways, Expressways & Concrete Paving',
      'Bridge & Flyover Infrastructure Construction',
      'Metro Rail Viaducts & Station Precast Casting',
      'Ready-Mix Concrete (RMC) Commercial Batching Yards',
      'High-Rise Commercial & Residential Foundations',
    ],
    concreteBatchingGuide: {
      capacityBadge: 'CAPACITY 30, 45, 60, 75, 90 CM3',
      intro: `An Indian-make Indian Standard Cement Concrete Batching Plant is a heavy-duty industrial assembly engineered to precisely weigh, blend, and mix aggregates, sand, cement, water, and chemical admixtures to produce high-quality concrete.\n\nManufactured strictly in compliance with Bureau of Indian Standards (BIS) codes (such as IS:4925 for concrete batching plants) and MORT&H specifications, these plants are widely used for national highways, bridges, metro rails, and high-rise commercial structures across India.`,
      specsTable: [
        {
          parameter: 'Production Capacity',
          compactSeries: '20 m³/hr, 30 m³/hr, to 45 m³/hr',
          largeSeries: '60 m³/hr, 90 m³/hr, up to 120+ m³/hr',
        },
        {
          parameter: 'Mixer Type Options',
          compactSeries: 'Pan Mixer / Turbo Twin-Shaft Mixer',
          largeSeries: 'Heavy-duty Twin-Shaft Mixer',
        },
        {
          parameter: 'Aggregate Storage',
          compactSeries: '3 to 4 Bins (Cross-bin or Inline design)',
          largeSeries: '4 to 5 Large Compartment Bins',
        },
        {
          parameter: 'Weighing Sensors',
          compactSeries: 'High-precision S-type electronic load cells',
          largeSeries: 'Shear beam and compression load cells',
        },
        {
          parameter: 'Cement Silos',
          compactSeries: '1 to 2 Silos (typically 30-ton to 150-ton)',
          largeSeries: 'Multiple Silos up to 200+ tons',
        },
        {
          parameter: 'Control System',
          compactSeries: 'SCADA / PLC based with digital display',
          largeSeries: 'Advanced SCADA with fully automated print-out',
        },
      ],
      anatomyIntro: 'A high-performance concrete batching plant relies on synchronized aggregate batching, cement charging, and computerized mixing:',
      anatomyItems: [
        {
          number: 1,
          title: 'Aggregate Feeding & Storage Bins',
          description: 'Available in Inline layouts (horizontal arrangement for easy loading via backhoe loaders/JCBs) or Compartment layouts (pocket bins). Each bin features independent pneumatic discharge gates.',
        },
        {
          number: 2,
          title: 'Weighing Conveyor & Transfer Belt',
          description: 'Inclined Belt Conveyor: Used in larger plants (60 m³/hr and above) to continuously transport material up to the mixing unit.',
        },
        {
          number: 3,
          title: 'The Concrete Mixing Unit',
          description: 'The heart of the plant.',
          subMixers: [
            {
              type: 'Pan / Planetary Mixers',
              details: 'Ideal for smaller capacities, offering low maintenance and excellent consistency for standard grade concrete (up to M35).',
            },
            {
              type: 'Twin-Shaft Mixers',
              details: 'Mandatory for high-capacity highway and infrastructure projects. Twin counter-rotating shafts with specialized paddle arms ensure a rapid, homogenous mix for high-strength concrete (M50 and above) within 30 seconds.',
            },
          ],
        },
        {
          number: 4,
          title: 'Cement & Fly Ash Storage Silos',
          description: 'Vertical steel structures equipped with safety pressure relief valves, fluidization nozzles (to prevent cement choking), and screw conveyors to transport powder to the cement weigh hopper.',
        },
        {
          number: 5,
          title: 'Fluid Metering Systems',
          description: 'Dedicated electronic weigh hoppers mounted on isolated load cells for water and chemical admixtures. Water is pumped via a pressurized spray bar for quick distribution across the mixer.',
        },
        {
          number: 6,
          title: 'Microprocessor PLC / SCADA Control Cabin',
          description: 'Features a centralized control panel capable of saving up to 99+ distinct concrete mix recipes. It automatically tracks moisture percentages, prints out precise batch reports, and logs data for quality auditing.',
        },
      ],
      configurationsIntro: 'Concrete Plant Configurations in India',
      configurations: [
        {
          type: 'Mobile / Compact Batching Plants',
          description: 'Built on a single-chassis layout with integrated wheels or a plug-and-play skid base. These can be fully commissioned within 2 to 3 days, making them highly popular for moving canal, bridge, or rural road projects.',
        },
        {
          type: 'Stationary Batching Plants',
          description: 'Installed on permanent concrete foundations. These are engineered for high-volume commercial concrete suppliers (RMC - Ready Mix Concrete plants) operating 24/7 near major urban metropolitan hubs.',
        },
      ],
    },
    heroImage: concreteBatchingPlant1Img,
    gallery: [
      concreteBatchingPlant1Img,
      concreteBatchingPlant2Img,
      concreteBatchingPlant3Img,
    ],
    isPlaceholder: false,
    featured: true,
  },
  {
    id: 'cement-fly-ash-silo',
    slug: 'cement-fly-ash-silo',
    categoryId: 'cement-concrete-equipment',
    categoryName: 'Cement & Concrete Equipment',
    name: 'CEMENT / FLY ASH SILO',
    code: 'ATL-CFS-02',
    shortDescription: 'Heavy-duty vertical steel storage tank (IS:2825 & IS:2062 Grade, 50T, 100T to 150+ Ton) for bulk cement, fly ash, micro-silica, or slag powder at concrete batching plants.',
    description: `An Indian-make Indian Standard Cement and Fly Ash Silo is a heavy-duty vertical steel storage tank designed to hold bulk cement, fly ash, micro-silica, or slag powder at concrete batching plants or brick manufacturing facilities.\n\nFabricated in compliance with Bureau of Indian Standards (BIS) codes (such as IS:2825 for pressure vessels/structural safety) and optimized for high-capacity batching plants, these silos protect moisture-sensitive powders from humidity, rain, and external contamination.`,
    highlights: [
      'Storage Capacity: 50 Ton, 100 Ton, to 150+ Ton (50T & 100T are standard defaults)',
      'Material of Construction: Structural Grade Mild Steel (MS) Plates (IS:2062 Grade)',
      'Shell Plate Thickness: 5 mm to 8 mm (thicker at the bottom cone to support the immense weight)',
      'Silo Structure Type: Welded (Single-piece for up to 100T) or Bolted (Sectional for easy transport)',
      'Discharge System: Cone bottom with a manual/pneumatic butterfly valve and screw conveyor',
      'Supporting Legs: Heavy-duty structural H-beams / pipe legs with cross-bracing',
    ],
    specifications: [
      { parameter: 'Storage Capacity', value: '50 Ton, 100 Ton, to 150+ Ton (50T & 100T are the standard defaults)' },
      { parameter: 'Material of Construction', value: 'Structural Grade Mild Steel (MS) Plates (IS:2062 Grade)' },
      { parameter: 'Shell Plate Thickness', value: '5 mm to 8 mm (thicker at the bottom cone to support the immense weight)' },
      { parameter: 'Silo Structure Type', value: 'Welded (Single-piece for up to 100T) or Bolted (Sectional for easy transport)' },
      { parameter: 'Discharge System', value: 'Cone bottom with a manual/pneumatic butterfly valve and screw conveyor' },
      { parameter: 'Supporting Legs', value: 'Heavy-duty structural H-beams / pipe legs with cross-bracing' },
    ],
    featuresTitle: '🏗️ Essential Safety & Functional Accessories',
    features: [
      {
        title: 'Top Dust Filter (Silo Vent Filter)',
        description: 'A mandatory pneumatic or mechanical pulse-jet baghouse filter mounted on top of the silo roof. When bulk tanker trucks pump cement inside using high-pressure air, the filter traps the micro-powder while venting clean air to prevent the roof from rupturing.',
      },
      {
        title: 'Pressure Relief Valve (PRV)',
        description: 'A spring-loaded safety valve mounted on the silo roof. If a bulk truck over-pressurizes the tank during pneumatic filling, the PRV instantly opens to bleed off the excess pressure safely.',
      },
      {
        title: 'Fluidization Nozzles / Aeration Pads',
        description: 'Cement and fly ash pack down tightly over time and form a "bridge" or a vacuum "rathole" above the discharge mouth. Compressed air nozzles are installed along the bottom cone to fluidize the powder and maintain a smooth downward gravity flow.',
      },
      {
        title: 'Level Indicators (Paddle / Tuning Fork Sensors)',
        description: 'Max Level Indicator: Sounds an alarm to warn the tanker operator to stop pumping before the silo overflows.\nMin Level Indicator: Alerts the batching plant cabin operator that raw materials are running dangerously low.',
      },
      {
        title: 'Screw Conveyor System',
        description: 'A horizontal or inclined motorized auger pipe attached to the bottom hopper cone. It meters out the raw powder and feeds it cleanly up into the cement weigh hopper of the concrete batching plant.',
      },
    ],
    applications: [
      'Concrete Batching Plants (RMC & Major Infrastructure)',
      'Fly Ash & Slag Powder Storage Facilities',
      'Brick & AAC Block Manufacturing Facilities',
      'Precast Concrete Element Fabrication Yards',
      'Bulk Cement Terminal & Transshipment Depots',
    ],
    siloGuide: {
      capacityBadge: 'CAPACITY 50T, 100T & 150+ TON',
      intro: `An Indian-make Indian Standard Cement and Fly Ash Silo is a heavy-duty vertical steel storage tank designed to hold bulk cement, fly ash, micro-silica, or slag powder at concrete batching plants or brick manufacturing facilities.\n\nFabricated in compliance with Bureau of Indian Standards (BIS) codes (such as IS:2825 for pressure vessels/structural safety) and optimized for high-capacity batching plants, these silos protect moisture-sensitive powders from humidity, rain, and external contamination.`,
      specsTable: [
        { parameter: 'Storage Capacity', value: '50 Ton, 100 Ton, to 150+ Ton (50T & 100T are the standard defaults)' },
        { parameter: 'Material of Construction', value: 'Structural Grade Mild Steel (MS) Plates (IS:2062 Grade)' },
        { parameter: 'Shell Plate Thickness', value: '5 mm to 8 mm (thicker at the bottom cone to support the immense weight)' },
        { parameter: 'Silo Structure Type', value: 'Welded (Single-piece for up to 100T) or Bolted (Sectional for easy transport)' },
        { parameter: 'Discharge System', value: 'Cone bottom with a manual/pneumatic butterfly valve and screw conveyor' },
        { parameter: 'Supporting Legs', value: 'Heavy-duty structural H-beams / pipe legs with cross-bracing' },
      ],
      accessoriesIntro: 'A standard Indian silo system relies on a suite of standardized accessories to ensure fluid material flow and safe high-pressure pneumatic filling:',
      accessories: [
        {
          number: 1,
          title: 'Top Dust Filter (Silo Vent Filter)',
          description: 'A mandatory pneumatic or mechanical pulse-jet baghouse filter mounted on top of the silo roof. When bulk tanker trucks pump cement inside using high-pressure air, the filter traps the micro-powder while venting clean air to prevent the roof from rupturing.',
        },
        {
          number: 2,
          title: 'Pressure Relief Valve (PRV)',
          description: 'A spring-loaded safety valve mounted on the silo roof. If a bulk truck over-pressurizes the tank during pneumatic filling, the PRV instantly opens to bleed off the excess pressure safely.',
        },
        {
          number: 3,
          title: 'Fluidization Nozzles / Aeration Pads',
          description: 'Cement and fly ash pack down tightly over time and form a "bridge" or a vacuum "rathole" above the discharge mouth. Compressed air nozzles are installed along the bottom cone to fluidize the powder and maintain a smooth downward gravity flow.',
        },
        {
          number: 4,
          title: 'Level Indicators (Paddle / Tuning Fork Sensors)',
          description: 'High and low raw powder level sensors ensuring continuous operational monitoring without overflows or batch starvation:',
          levelIndicators: [
            {
              type: 'Max Level Indicator',
              description: 'Sounds an alarm to warn the tanker operator to stop pumping before the silo overflows.',
            },
            {
              type: 'Min Level Indicator',
              description: 'Alerts the batching plant cabin operator that raw materials are running dangerously low.',
            },
          ],
        },
        {
          number: 5,
          title: 'Screw Conveyor System',
          description: 'A horizontal or inclined motorized auger pipe attached to the bottom hopper cone. It meters out the raw powder and feeds it cleanly up into the cement weigh hopper of the concrete batching plant.',
        },
      ],
    },
    heroImage: cementFlyAshSiloImg,
    gallery: [
      cementFlyAshSiloImg,
      '/src/assets/images/category_cement_equipment.jpg',
    ],
    isPlaceholder: false,
    featured: true,
  },
];

export const ALL_PRODUCTS: Product[] = [
  // 10 Real Bitumen Modify Equipment Products
  ...BITUMEN_PRODUCTS,

  // 7 Real Road Construction Equipment Products
  ...ROAD_PRODUCTS,

  // 2 Real Cement & Concrete Equipment Products
  ...CEMENT_PRODUCTS,
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
      title: '25+ Years of Proven Expertise',
      description: 'Manufacturing reliable industrial machinery since 1997.',
    },
    {
      index: '02',
      title: 'Engineered for Durability',
      description: 'Built using heavy-grade steel and top-tier components for maximum operational life.',
    },
    {
      index: '03',
      title: 'Precision Engineering',
      description: 'Designed to meet stringent international quality standards and high-efficiency output targets.',
    },
    {
      index: '04',
      title: 'End-to-End Customer Support',
      description: 'From custom manufacturing and installation to prompt technical service and spare parts availability.',
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
