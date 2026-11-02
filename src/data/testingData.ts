import { EquipmentSpec, StandardItem } from '../types';

export const EQUIPMENT_SPECS: EquipmentSpec[] = [
  {
    id: 'vibe-table-60kn',
    name: 'Electrodynamic Vibration Systems',
    category: 'vibration',
    tagline: 'Multi-Axis High-Force Dynamic Shakers with Horizontal Slip Tables',
    payload: 'Up to 2,000 kg',
    maxAcceleration: '100 g pk',
    frequencyRange: '1 Hz to 3,000 Hz',
    forceRating: '60 kN Sine / Random (120 kN Shock Force)',
    tableSize: '1,200 mm × 1,200 mm (with expansion head expanders)',
    waveformTypes: ['Sine Vibration', 'Random Vibration', 'Sine-on-Random (SoR)', 'Random-on-Random (RoR)', 'Resonance Search & Dwell'],
    description: 'Precision water-cooled and air-cooled electrodynamic shaker systems configured for vertical and horizontal testing via hydrostatic slip tables. Capable of replicating harsh ground transport, aerospace flight profiles, and sea-state shipboard vibrations.',
    features: [
      'Multi-channel real-time closed-loop control (up to 32 accelerometer channels)',
      'Cross-axis acceleration measurement & matrix decoupling',
      'Automated resonance tracking with phase dwell (Q-factor detection)',
      'Combined thermal/climatic chamber interface for simultaneous temperature-vibration profiles'
    ]
  },
  {
    id: 'shock-machine-large',
    name: 'Heavy-Duty Programmable Shock Machine',
    category: 'shock',
    tagline: 'High-Payload Hydraulic/Pneumatic Precision Pulse Generation',
    payload: 'Up to 1,150 kg',
    maxAcceleration: '600 g',
    tableSize: '1,520 mm × 1,520 mm solid magnesium-alloy table',
    waveformTypes: ['Half-Sine Pulse', 'Terminal Peak Sawtooth (TPS)', 'Square / Trapezoidal Waveforms'],
    description: 'Specialised high-mass drop shock machine featuring programmable pneumatic arrestors and rebound brakes. Engineered for heavy weapon systems, vehicle electronics modules, power distribution racks, and complete crated machinery.',
    features: [
      'Pulse durations programmable from 1 ms to 50 ms',
      'Integrated pneumatic brake system preventing secondary impact rebounds',
      'Real-time Shock Response Spectrum (SRS) calculation up to 10 kHz',
      'Calibrated for MIL-STD-810H Method 516.8 and NATO STANAG requirements'
    ]
  },
  {
    id: 'shock-machine-high-g',
    name: 'Ultra High-G Pyroshock Simulator',
    category: 'shock',
    tagline: 'Extreme Acceleration Testing for Microelectronics & Avionics',
    payload: 'Up to 100 kg',
    maxAcceleration: 'Up to 30,000 g',
    tableSize: '400 mm × 400 mm dual-guided carriage',
    waveformTypes: ['Pyroshock Simulation', 'High-G Half-Sine', 'Ballistic Transient Pulse'],
    description: 'Designed for extreme deceleration shocks, explosive ordnance separation, and near-field ballistic shock qualification. Ideal for PCB assemblies, fuse mechanisms, sensor modules, and aerospace mission-critical hardware.',
    features: [
      'Peak acceleration up to 30,000 g with sub-millisecond rise times',
      'Resonant beam shock apparatus for Near-Field / Mid-Field SRS',
      'High-bandwidth laser Doppler vibrometry and piezo-electric sensor suite',
      'Zero distortion data acquisition with 1 MHz sampling rate per channel'
    ]
  },
  {
    id: 'climatic-vibration',
    name: 'Combined Climatic & Dynamic Chambers',
    category: 'climatic',
    tagline: 'Simultaneous Thermal Cycling, Humidity & Multi-Axis Vibration',
    payload: 'Up to 800 kg',
    maxAcceleration: '80 g pk',
    frequencyRange: '5 Hz to 2,500 Hz',
    tableSize: '1,000 mm × 1,000 mm interface boot',
    waveformTypes: ['Thermal Cycling + Sine/Random', 'Humidity Stress + Vibration Profile'],
    description: 'Eliminate latent field failures by exposing test items to extreme thermal gradients while undergoing mechanical stress. Temperature range from -70°C to +180°C with rapid 15°C/min ramp rates.',
    features: [
      'Temperature range: -70°C to +180°C with controlled relative humidity (10% to 98% RH)',
      'Flexible silicone thermal boot coupling with vertical and horizontal shaker configurations',
      'Automated multi-gas monitoring and continuous Device Under Test (DUT) telemetry',
      'Compliant with DEF STAN 00-35 Part 3 and RTCA DO-160G Section 4 & 8'
    ]
  }
];

export const STANDARDS_DATA: StandardItem[] = [
  {
    id: 'mil-std-810h',
    code: 'MIL-STD-810H / 810G',
    title: 'Department of Defense Test Method Standard: Environmental Engineering Considerations',
    category: 'Defence',
    description: 'Rigorous defence qualification covering vibration, operational shock, crash hazard, transportation, gun fire shock, and combined climatic stresses.',
    methods: ['Method 514.8 (Vibration)', 'Method 516.8 (Mechanical Shock)', 'Method 517.3 (Pyroshock)', 'Method 519.8 (Gunfire)']
  },
  {
    id: 'def-stan-0035',
    code: 'DEF STAN 00-35',
    title: 'UK & Allied Defence Standard for Environmental Handbook for Defence Materiel',
    category: 'Defence',
    description: 'Standardized climatic and mechanical testing regimes for naval, land, and airborne defence procurement across Australia and NATO allies.',
    methods: ['Part 3 Ch 2-01 (Vibration)', 'Part 3 Ch 2-02 (Mechanical Shock)', 'Part 3 Ch 2-04 (Drop & Topple)']
  },
  {
    id: 'iec-61373',
    code: 'IEC / EN 61373',
    title: 'Railway Applications - Rolling Stock Equipment: Shock & Vibration Tests',
    category: 'Rail & Transport',
    description: 'Defines mandatory functional random vibration, simulated long-life endurance testing, and half-sine shock parameters for bogie and body-mounted equipment.',
    methods: ['Category 1 Body Mounted (Class A & B)', 'Category 2 Bogie Mounted', 'Category 3 Axle Mounted']
  },
  {
    id: 'rtca-do-160g',
    code: 'RTCA / DO-160G (EUROCAE ED-14G)',
    title: 'Environmental Conditions and Test Procedures for Airborne Equipment',
    category: 'Aerospace',
    description: 'The global commercial and military aerospace benchmark for avionics, antennas, actuators, and cockpit instruments under flight vibration and crash conditions.',
    methods: ['Section 7 (Operational Shock & Crash Safety)', 'Section 8 (Vibration: Robust, Standard, High-Level)']
  },
  {
    id: 'iso-16750-3',
    code: 'ISO 16750-3',
    title: 'Road Vehicles - Environmental Conditions and Testing for Electrical & Electronic Equipment',
    category: 'Automotive',
    description: 'Mechanical loads specification for automotive ECUs, battery management systems, EV inverters, sensors, and chassis-mounted hardware.',
    methods: ['Test IV (Passenger car body / sprung masses)', 'Test VII (Commercial vehicle engine mounted)', 'Free fall & mechanical shock']
  },
  {
    id: 'iec-60068',
    code: 'IEC 60068-2 Series',
    title: 'Environmental Testing: International Electrotechnical Procedures',
    category: 'Industrial',
    description: 'Foundational international standards for commercial, telecom, medical, and industrial electronics durability verification.',
    methods: ['IEC 60068-2-6 (Sine Vibration)', 'IEC 60068-2-27 (Shock)', 'IEC 60068-2-64 (Random Vibration)']
  },
  {
    id: 'ista-astm',
    code: 'ISTA 2A / 3A & ASTM D4169',
    title: 'Packaged Products & Freight Container Performance Testing',
    category: 'Rail & Transport',
    description: 'Simulation of global intermodal logistics including truck air-ride vibration, rail shunting shock, and warehouse drops.',
    methods: ['ASTM D4169 DC-13 (Truck & Rail)', 'ISTA 3A Parcel Delivery', 'ASTM D4728 Random Vibration']
  },
  {
    id: 'mil-std-167',
    code: 'MIL-STD-167-1A',
    title: 'Mechanical Vibrations of Shipboard Equipment (Type I & Type II)',
    category: 'Defence',
    description: 'Naval shipboard vibration standards ensuring survivability of radar, propulsion controls, and combat systems against hydrodynamic hull excitation.',
    methods: ['Type I (Environmental Vibration 4-50 Hz)', 'Type II (Internally Excited Vibration)']
  }
];

export const TEST_TYPES = [
  { id: 'vibration-sine', label: 'Sinusoidal Vibration (Swept & Dwell)' },
  { id: 'vibration-random', label: 'Random Vibration (Broadband PSD)' },
  { id: 'vibration-sor', label: 'Sine-on-Random (SoR) / Mixed Mode' },
  { id: 'shock-halfsine', label: 'Classical Half-Sine Shock (up to 30,000g)' },
  { id: 'shock-sawtooth', label: 'Terminal Peak Sawtooth (TPS)' },
  { id: 'shock-srs', label: 'Shock Response Spectrum (SRS) Synthesis' },
  { id: 'combined-climatic', label: 'Combined Temperature + Dynamic Vibration' },
  { id: 'fixture-design', label: 'Custom Test Fixture Design & Fabrication' }
];

export const LAB_METRICS = [
  { value: '30,000 g', label: 'Max Shock Acceleration', detail: 'High-speed pyroshock simulator' },
  { value: '2,000 kg', label: 'Max Test Payload', detail: 'Heavy-payload electrodynamic tables' },
  { value: '1–3,000 Hz', label: 'Frequency Bandwidth', detail: 'Full military & rail spectrum' },
  { value: 'ISO 17025', label: 'Accreditation Standard', detail: 'Traceable Australian calibration' },
  { value: '3-Axis', label: 'Simultaneous & Sequential', detail: 'Vertical + Horizontal Slip Tables' },
  { value: '100% In-House', label: 'Fixture Engineering', detail: 'CAD/FEA modal resonance analysis' }
];
