export interface EquipmentSpec {
  id: string;
  name: string;
  category: 'vibration' | 'shock' | 'climatic';
  tagline: string;
  payload: string;
  maxAcceleration: string;
  frequencyRange?: string;
  forceRating?: string;
  tableSize: string;
  waveformTypes: string[];
  description: string;
  features: string[];
}

export interface StandardItem {
  id: string;
  code: string;
  title: string;
  category: 'Defence' | 'Rail & Transport' | 'Aerospace' | 'Automotive' | 'Industrial';
  description: string;
  methods: string[];
}

export interface QuoteFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  testType: string;
  dutMass: string;
  requiredGForce: string;
  targetStandard: string;
  timeframe: string;
  notes: string;
}
