import React, { useState } from 'react';
import { TEST_TYPES, STANDARDS_DATA } from '../data/testingData';
import { QuoteFormData } from '../types';
import { Calculator, CheckCircle2, Send, Clock, ShieldCheck, FileCheck } from 'lucide-react';
import './QuoteCalculator.css';

export const QuoteCalculator: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    testType: TEST_TYPES[0].id,
    dutMass: '25',
    requiredGForce: '40',
    targetStandard: 'mil-std-810h',
    timeframe: 'standard',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const massNum = Number(formData.dutMass) || 0;
  const gNum = Number(formData.requiredGForce) || 0;

  // Feasibility rule calculation
  const isFeasible = massNum <= 2000 && gNum <= 30000;
  const isHighG = gNum > 600;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="quote" className="quote-section">
      <div className="container">
        <div className="quote-header">
          <div className="section-tag">
            <Calculator size={14} />
            Technical Feasibility & Pricing
          </div>
          <h2 className="section-heading">Configure Test Spec & Request Technical Quote</h2>
          <p className="section-subheading">
            Submit your DUT mass, acceleration requirements, and compliance standards for immediate laboratory review by our senior Melbourne environmental testing engineers.
          </p>
        </div>

        <div className="quote-layout">
          {/* Main Form */}
          <div className="quote-form-card">
            {submitted ? (
              <div className="quote-success-state">
                <div className="success-icon-box">
                  <CheckCircle2 size={48} className="success-check" />
                </div>
                <h3>Test Specification Received</h3>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>. Your test enquiry for <strong>{formData.company || 'your organization'}</strong> has been registered with reference <strong>AL-MEL-{Math.floor(1000 + Math.random() * 9000)}</strong>.
                </p>
                <div className="success-specs-summary mono-spec">
                  <div><span>Test Regime:</span> {TEST_TYPES.find(t => t.id === formData.testType)?.label}</div>
                  <div><span>DUT Mass:</span> {formData.dutMass} kg</div>
                  <div><span>Target Acceleration:</span> {formData.requiredGForce} g</div>
                  <div><span>Selected Standard:</span> {STANDARDS_DATA.find(s => s.id === formData.targetStandard)?.code}</div>
                </div>
                <p className="success-followup">
                  Our test engineers will review your payload kinematics and issue a formal test schedule and quotation within 4 business hours.
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      company: '',
                      email: '',
                      phone: '',
                      testType: TEST_TYPES[0].id,
                      dutMass: '25',
                      requiredGForce: '40',
                      targetStandard: 'mil-std-810h',
                      timeframe: 'standard',
                      notes: ''
                    });
                  }}
                >
                  Configure Another Specification
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quote-form">
                <div className="form-section-title">1. Dynamic Testing Requirements</div>
                <div className="form-grid-2">
                  <div className="input-group">
                    <label htmlFor="testType" className="input-label">Select Testing Regime *</label>
                    <select
                      id="testType"
                      value={formData.testType}
                      onChange={(e) => setFormData({ ...formData, testType: e.target.value })}
                      className="form-select"
                      required
                    >
                      {TEST_TYPES.map((t) => (
                        <option key={t.id} value={t.id}>{t.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="input-group">
                    <label htmlFor="targetStandard" className="input-label">Governing Test Standard *</label>
                    <select
                      id="targetStandard"
                      value={formData.targetStandard}
                      onChange={(e) => setFormData({ ...formData, targetStandard: e.target.value })}
                      className="form-select"
                      required
                    >
                      {STANDARDS_DATA.map((s) => (
                        <option key={s.id} value={s.id}>{s.code} - {s.category}</option>
                      ))}
                      <option value="custom">Custom Commercial Procedure / Telemetry</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="input-group">
                    <label htmlFor="dutMass" className="input-label">DUT Total Mass (kg) *</label>
                    <input
                      type="number"
                      id="dutMass"
                      min="0.1"
                      max="2500"
                      step="0.5"
                      value={formData.dutMass}
                      onChange={(e) => setFormData({ ...formData, dutMass: e.target.value })}
                      className="form-input mono-spec"
                      required
                    />
                    <span className="input-hint">Max facility payload: 2,000 kg</span>
                  </div>

                  <div className="input-group">
                    <label htmlFor="requiredGForce" className="input-label">Target Acceleration (g) *</label>
                    <input
                      type="number"
                      id="requiredGForce"
                      min="1"
                      max="30000"
                      value={formData.requiredGForce}
                      onChange={(e) => setFormData({ ...formData, requiredGForce: e.target.value })}
                      className="form-input mono-spec"
                      required
                    />
                    <span className="input-hint">Vibration: up to 100g | Shock: up to 30,000g</span>
                  </div>
                </div>

                <div className="form-section-title" style={{ marginTop: '1.5rem' }}>2. Client & Contact Details</div>
                <div className="form-grid-2">
                  <div className="input-group">
                    <label htmlFor="fullName" className="input-label">Engineer / Contact Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="e.g. Dr. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="company" className="input-label">Company / Defence Contractor *</label>
                    <input
                      type="text"
                      id="company"
                      placeholder="e.g. Apex Defence Systems"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="input-group">
                    <label htmlFor="email" className="input-label">Corporate Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="sarah.jenkins@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="phone" className="input-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="(03) 9000 xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="timeframe" className="input-label">Required Laboratory Schedule</label>
                  <select
                    id="timeframe"
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="form-select"
                  >
                    <option value="urgent">Urgent / Priority Slot (&lt; 5 working days)</option>
                    <option value="standard">Standard Slot (1 – 3 weeks)</option>
                    <option value="planning">Budget / Preliminary Project Feasibility</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="notes" className="input-label">DUT Description & Special Instructions</label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="Provide details on overall dimensions, mounting hole pattern, monitoring telemetry channels, or thermal profile requirements..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg submit-quote-btn" disabled={submitting}>
                  <Send size={18} />
                  <span>{submitting ? 'Validating Kinematics...' : 'Submit Specification for Quotation'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Real-time Feasibility Card (Right Side) */}
          <div className="quote-sidebar">
            <div className="feasibility-card">
              <div className="feasibility-header">
                <span className="mono-spec text-cyan">SYSTEM_VALIDATION // STATUS</span>
                <span className={`feasibility-badge ${isFeasible ? 'badge-ok' : 'badge-alert'}`}>
                  {isFeasible ? 'FEASIBLE' : 'SPEC OUT OF RANGE'}
                </span>
              </div>

              <div className="feasibility-body">
                <div className="spec-check-item">
                  <CheckCircle2 size={16} className="check-icon ok" />
                  <div>
                    <div className="check-title">Payload Capacity: {formData.dutMass} kg</div>
                    <div className="check-desc">
                      {massNum <= 2000
                        ? `Supported on 60kN shaker table (max 2,000 kg). Margin: ${(2000 - massNum)} kg.`
                        : `Exceeds max table rating of 2,000 kg.`}
                    </div>
                  </div>
                </div>

                <div className="spec-check-item">
                  <CheckCircle2 size={16} className="check-icon ok" />
                  <div>
                    <div className="check-title">Acceleration Target: {formData.requiredGForce} g</div>
                    <div className="check-desc">
                      {isHighG
                        ? 'Allocated to Ultra High-G Pyroshock / Drop Shock Simulator.'
                        : 'Allocated to 60 kN Electrodynamic Multi-Axis Shaker Table.'}
                    </div>
                  </div>
                </div>

                <div className="spec-check-item">
                  <CheckCircle2 size={16} className="check-icon ok" />
                  <div>
                    <div className="check-title">In-House Fixture Availability</div>
                    <div className="check-desc">Custom adapter plates fabricated on-site in Melbourne if required.</div>
                  </div>
                </div>
              </div>

              <div className="sidebar-trust-box">
                <div className="trust-item">
                  <Clock size={16} className="trust-icon" />
                  <span>Turnaround: Reports delivered in 48-72h post-test</span>
                </div>
                <div className="trust-item">
                  <ShieldCheck size={16} className="trust-icon" />
                  <span>Confidentiality: Strict NDA & defence DISP alignment</span>
                </div>
                <div className="trust-item">
                  <FileCheck size={16} className="trust-icon" />
                  <span>Endorsed Reports: Full raw accelerometer data & SRS graphs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
