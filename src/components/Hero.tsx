import React from 'react';
import { ArrowRight, ShieldCheck, Activity, Sliders, CheckCircle2 } from 'lucide-react';
import { LAB_METRICS } from '../data/testingData';
import './Hero.css';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* Background Engineering Grid and Particle Wave Glow */}
      <div className="hero-grid-pattern"></div>
      <div className="hero-radial-glow"></div>
      <div className="hero-radial-glow-secondary"></div>

      <div className="container hero-container">
        {/* Main Content */}
        <div className="hero-content">
          <div className="hero-pill-group">
            <span className="hero-pill">
              <ShieldCheck size={14} className="pill-icon" />
              ISO/IEC 17025 Aligned Laboratory
            </span>
            <span className="hero-pill secondary">
              <Activity size={14} className="pill-icon" />
              Melbourne Testing Facility
            </span>
          </div>

          <h1 className="hero-title">
            Accredited Shock & <br />
            <span className="text-highlight">Vibration Testing</span>
          </h1>

          <p className="hero-description">
            Comprehensive dynamic environmental qualification for defence materiel, aerospace avionics, rail rolling stock, and industrial electronics. Validate structural resilience against mechanical shock up to 30,000 g and multi-axis random vibration from 1 Hz to 3 kHz.
          </p>

          <div className="hero-actions">
            <button
              onClick={() => scrollToSection('#quote')}
              className="btn btn-primary btn-lg"
            >
              <span>Configure Test & Request Quote</span>
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollToSection('#waveform-lab')}
              className="btn btn-secondary-dark btn-lg"
            >
              <Sliders size={18} />
              <span>Launch Waveform Lab</span>
            </button>
          </div>

          {/* Quick Technical Badges */}
          <div className="hero-standards-bar">
            <span className="standards-label">COMPLIANT TESTING TO:</span>
            <div className="standards-tags">
              <span className="std-tag">MIL-STD-810H</span>
              <span className="std-tag">DEF-STAN 00-35</span>
              <span className="std-tag">RTCA DO-160G</span>
              <span className="std-tag">IEC 61373</span>
              <span className="std-tag">ISO 16750-3</span>
              <span className="std-tag">ISTA 3A</span>
            </div>
          </div>
        </div>

        {/* Technical Specification KPI Grid */}
        <div className="hero-metrics-panel">
          <div className="metrics-panel-header">
            <div className="panel-status-light"></div>
            <span className="panel-title mono-spec">LAB_CAPABILITIES // ACTIVE_STATUS</span>
          </div>

          <div className="metrics-grid">
            {LAB_METRICS.map((metric, idx) => (
              <div key={idx} className="metric-card">
                <div className="metric-value mono-spec">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-detail">{metric.detail}</div>
              </div>
            ))}
          </div>

          <div className="panel-footer">
            <div className="panel-footer-item">
              <CheckCircle2 size={15} className="footer-check" />
              <span>Calibrated Piezoelectric Telemetry</span>
            </div>
            <div className="panel-footer-item">
              <CheckCircle2 size={15} className="footer-check" />
              <span>Custom Fixture Fabrication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
