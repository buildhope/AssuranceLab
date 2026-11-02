import React from 'react';
import { Wrench, Cpu, ArrowUpRight, BarChart3, Layers } from 'lucide-react';
import './FixtureEngineering.css';

export const FixtureEngineering: React.FC = () => {
  return (
    <section id="fixture-engineering" className="fixture-section">
      <div className="container">
        <div className="fixture-grid">
          {/* Left Text */}
          <div className="fixture-content">
            <div className="section-tag">
              <Wrench size={14} />
              Mechanical Integration
            </div>
            <h2 className="section-heading">In-House Fixture Design & Modal Engineering</h2>
            <p className="section-subheading">
              An environmental dynamic test is only as accurate as the fixture coupling the test article to the shaker table. Flexible or poorly damped fixtures introduce false cross-axis spikes and unwanted resonances that invalidate test data.
            </p>

            <div className="fixture-pillars">
              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Cpu size={20} className="pillar-icon" />
                </div>
                <div className="pillar-details">
                  <h4>FEA Modal & Dynamic Resonance Simulation</h4>
                  <p>Every custom fixture is pre-engineered in SolidWorks and ANSYS FEA to ensure natural resonance modes lie safely beyond the active test bandwidth (typically &gt; 1.2× $f_{'{'}\max{'}'}$).</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <BarChart3 size={20} className="pillar-icon" />
                </div>
                <div className="pillar-details">
                  <h4>Center of Gravity & Overturning Moment Analysis</h4>
                  <p>Precision mass calculations protect shaker armatures by mitigating dynamic pitching and yawing moments, ensuring pure uniaxial or triaxial force transmission.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <Layers size={20} className="pillar-icon" />
                </div>
                <div className="pillar-details">
                  <h4>Magnesium Alloy & 6061-T6 Precision CNC Machining</h4>
                  <p>Machined from monolithic billets or lightweight welded magnesium tooling plate to maximize stiffness-to-weight ratio and damping characteristics.</p>
                </div>
              </div>
            </div>

            <div className="fixture-action-row">
              <a href="#quote" className="btn btn-primary">
                <span>Request Custom Fixture Quote</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Visual: FEA Modal Simulation Schematic */}
          <div className="fixture-visual-card">
            <div className="visual-card-header">
              <div className="cad-badge mono-spec">FEA_MODAL_SOLVER // FIRST_MODE_SHAPE</div>
              <span className="cad-status mono-spec">f₁ = 3,420 Hz (OK)</span>
            </div>

            <div className="cad-viewport">
              <svg viewBox="0 0 420 300" className="cad-svg">
                <defs>
                  <linearGradient id="feaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="50%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                  <pattern id="fea-mesh" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  </pattern>
                </defs>

                <rect width="420" height="300" fill="#080e1a" />
                <rect width="420" height="300" fill="url(#fea-mesh)" />

                {/* Base Plate ISO View */}
                <polygon points="70,220 210,265 350,220 210,175" fill="#131d35" stroke="#38bdf8" strokeWidth="2" />
                {/* Bolt Holes */}
                <ellipse cx="140" cy="200" rx="6" ry="3" fill="#0284c7" />
                <ellipse cx="280" cy="200" rx="6" ry="3" fill="#0284c7" />
                <ellipse cx="210" cy="235" rx="6" ry="3" fill="#0284c7" />

                {/* 3D Fixture Rib Structure */}
                <polygon points="120,190 210,140 210,75 120,125" fill="rgba(14, 165, 233, 0.4)" stroke="#38bdf8" strokeWidth="1.5" />
                <polygon points="300,190 210,140 210,75 300,125" fill="rgba(2, 132, 199, 0.6)" stroke="#38bdf8" strokeWidth="1.5" />

                {/* DUT Mount Plate */}
                <polygon points="150,110 210,80 270,110 210,140" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />

                {/* Modal Stress Wave Vectors */}
                <circle cx="210" cy="110" r="28" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
                <text x="210" y="114" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">DUT INTERFACE</text>

                {/* Strain Scale Bar */}
                <rect x="25" y="40" width="12" height="180" rx="3" fill="url(#feaGradient)" stroke="#334155" strokeWidth="1" />
                <text x="45" y="50" fill="#f59e0b" fontSize="8" fontFamily="JetBrains Mono">MAX STRESS</text>
                <text x="45" y="135" fill="#38bdf8" fontSize="8" fontFamily="JetBrains Mono">MODAL DAMPING</text>
                <text x="45" y="220" fill="#0284c7" fontSize="8" fontFamily="JetBrains Mono">RIGID BASE</text>

                {/* Coordinate Triad */}
                <line x1="360" y1="60" x2="390" y2="60" stroke="#ef4444" strokeWidth="2" />
                <text x="395" y="63" fill="#ef4444" fontSize="9" fontFamily="JetBrains Mono">X</text>
                <line x1="360" y1="60" x2="360" y2="30" stroke="#10b981" strokeWidth="2" />
                <text x="360" y="24" fill="#10b981" fontSize="9" fontFamily="JetBrains Mono">Z</text>
                <line x1="360" y1="60" x2="340" y2="75" stroke="#38bdf8" strokeWidth="2" />
                <text x="333" y="85" fill="#38bdf8" fontSize="9" fontFamily="JetBrains Mono">Y</text>
              </svg>
            </div>

            <div className="visual-card-footer">
              <div className="cad-spec-item">
                <span className="cad-label">Material Spec:</span>
                <span className="cad-val mono-spec">Al 6061-T6 / AZ31B Mag</span>
              </div>
              <div className="cad-spec-item">
                <span className="cad-label">Max Deflection:</span>
                <span className="cad-val mono-spec">&lt; 0.012 mm @ 50g</span>
              </div>
              <div className="cad-spec-item">
                <span className="cad-label">Lead Time:</span>
                <span className="cad-val mono-spec">3 – 5 Working Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
