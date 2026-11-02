import React, { useState } from 'react';
import { EQUIPMENT_SPECS } from '../data/testingData';
import { Layers, CheckCircle2, ChevronRight } from 'lucide-react';
import './EquipmentSection.css';

export const EquipmentSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'vibration' | 'shock' | 'climatic'>('all');
  const [activeSpecId, setActiveSpecId] = useState<string>(EQUIPMENT_SPECS[0].id);

  const filteredSpecs = selectedCategory === 'all'
    ? EQUIPMENT_SPECS
    : EQUIPMENT_SPECS.filter((item) => item.category === selectedCategory);

  const activeSpec = EQUIPMENT_SPECS.find((s) => s.id === activeSpecId) || EQUIPMENT_SPECS[0];

  // Render SVG Engineering Blueprint for each piece of equipment
  const renderEquipmentBlueprint = (id: string) => {
    switch (id) {
      case 'vibe-table-60kn':
        return (
          <svg viewBox="0 0 400 240" className="schematic-svg">
            <rect width="400" height="240" fill="#070c17" />
            {/* Grid background */}
            <pattern id="grid-vibe" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
            <rect width="400" height="240" fill="url(#grid-vibe)" />
            {/* Seismic Isolated Reaction Mass */}
            <rect x="50" y="190" width="300" height="35" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <text x="200" y="212" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono">SEISMIC CONCRETE REACTION MASS</text>
            {/* Shaker Body & Magnetic Coil Assembly */}
            <rect x="70" y="90" width="120" height="100" rx="8" fill="#101b31" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="130" cy="140" r="35" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 3" />
            <text x="130" y="143" fill="#38bdf8" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono">60 kN COIL</text>
            {/* Vertical Armature Head */}
            <rect x="90" y="65" width="80" height="25" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="130" y="81" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">ARMATURE</text>
            {/* Horizontal Slip Table */}
            <rect x="210" y="105" width="130" height="20" rx="2" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="230" y="85" width="90" height="20" rx="2" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
            <text x="275" y="99" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">MAGNESIUM SLIP TABLE</text>
            {/* Hydrostatic Bearing Base */}
            <rect x="220" y="125" width="110" height="65" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            <text x="275" y="155" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="JetBrains Mono">OIL FILM BEARING</text>
            {/* Vibration Arrows */}
            <path d="M 130,45 L 130,58 M 125,50 L 130,45 L 135,50" stroke="#38bdf8" strokeWidth="2" fill="none" />
            <path d="M 275,70 L 290,70 M 283,66 L 290,70 L 283,74" stroke="#38bdf8" strokeWidth="2" fill="none" />
            <text x="130" y="38" fill="#38bdf8" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono">Z-AXIS (VERTICAL)</text>
            <text x="325" y="73" fill="#38bdf8" fontSize="9" textAnchor="start" fontFamily="JetBrains Mono">X/Y SLIP</text>
          </svg>
        );

      case 'shock-machine-large':
        return (
          <svg viewBox="0 0 400 240" className="schematic-svg">
            <rect width="400" height="240" fill="#070c17" />
            <pattern id="grid-shock" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
            <rect width="400" height="240" fill="url(#grid-shock)" />
            {/* Seismic Base */}
            <rect x="60" y="195" width="280" height="35" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <text x="200" y="217" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono">SEISMIC ANVIL BASE</text>
            {/* Vertical Twin Guide Columns */}
            <rect x="110" y="25" width="16" height="170" rx="3" fill="#334155" stroke="#64748b" strokeWidth="1" />
            <rect x="274" y="25" width="16" height="170" rx="3" fill="#334155" stroke="#64748b" strokeWidth="1" />
            {/* Top Crosshead */}
            <rect x="95" y="15" width="210" height="20" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
            <text x="200" y="29" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="JetBrains Mono">HYDRAULIC HOIST CYLINDER</text>
            {/* Drop Table Carriage */}
            <rect x="126" y="80" width="148" height="30" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <text x="200" y="99" fill="#ffffff" fontSize="10" textAnchor="middle" fontWeight="bold">DROP CARRIAGE (1,150 KG)</text>
            {/* Elastomer Programmer Pads */}
            <rect x="170" y="175" width="60" height="20" rx="2" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />
            <text x="200" y="188" fill="#ffffff" fontSize="8" textAnchor="middle" fontWeight="bold">PULSE PROGRAMMER</text>
            {/* Drop Velocity Vector */}
            <path d="M 200,118 L 200,165 M 194,155 L 200,165 L 206,155" stroke="#f59e0b" strokeWidth="2" fill="none" />
            <text x="215" y="142" fill="#f59e0b" fontSize="9" fontFamily="JetBrains Mono">600 g IMPACT</text>
          </svg>
        );

      case 'shock-machine-high-g':
        return (
          <svg viewBox="0 0 400 240" className="schematic-svg">
            <rect width="400" height="240" fill="#070c17" />
            <pattern id="grid-highg" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
            <rect width="400" height="240" fill="url(#grid-highg)" />
            {/* Heavy Base Anvil */}
            <rect x="50" y="180" width="300" height="45" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="200" y="208" fill="#38bdf8" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono">HIGH-STIFFNESS ANVIL</text>
            {/* Resonant Bar / Plate */}
            <rect x="70" y="140" width="260" height="18" rx="2" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
            <text x="200" y="153" fill="#ffffff" fontSize="9" textAnchor="middle" fontWeight="bold">TUNED RESONANT BEAM</text>
            {/* High-Speed Pneumatic Projectile Actuator */}
            <rect x="175" y="40" width="50" height="85" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <text x="200" y="70" fill="#f59e0b" fontSize="8" textAnchor="middle" fontFamily="JetBrains Mono">HIGH SPEED</text>
            <text x="200" y="82" fill="#f59e0b" fontSize="8" textAnchor="middle" fontFamily="JetBrains Mono">PROJECTILE</text>
            {/* Impact Spark Pulse */}
            <circle cx="200" cy="133" r="14" fill="rgba(245, 158, 11, 0.25)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="200" y="136" fill="#ffffff" fontSize="8" textAnchor="middle" fontWeight="bold">30,000 g</text>
            {/* Laser Vibrometer Detection Beam */}
            <line x1="90" y1="50" x2="110" y2="138" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="85" y="42" fill="#10b981" fontSize="8" textAnchor="middle" fontFamily="JetBrains Mono">LASER DOPPLER SENSOR</text>
          </svg>
        );

      default:
        // Climatic Vibration
        return (
          <svg viewBox="0 0 400 240" className="schematic-svg">
            <rect width="400" height="240" fill="#070c17" />
            <pattern id="grid-clim" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
            <rect width="400" height="240" fill="url(#grid-clim)" />
            {/* Chamber Enclosure */}
            <rect x="70" y="30" width="260" height="130" rx="8" fill="#101b31" stroke="#38bdf8" strokeWidth="2" />
            <rect x="85" y="45" width="230" height="100" rx="4" fill="#080e1a" stroke="#1e293b" strokeWidth="1" />
            <text x="200" y="65" fill="#38bdf8" fontSize="10" textAnchor="middle" fontFamily="JetBrains Mono">-70°C TO +180°C DUAL PLENUM</text>
            {/* Thermal Boot Interface */}
            <rect x="155" y="145" width="90" height="25" rx="3" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />
            <text x="200" y="161" fill="#ffffff" fontSize="8" textAnchor="middle" fontWeight="bold">FLEXIBLE SILICONE BOOT</text>
            {/* Shaker Armature Beneath */}
            <rect x="140" y="170" width="120" height="55" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
            <text x="200" y="200" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono">DYNAMIC SHAKER</text>
            {/* Thermal + Vibration icons */}
            <text x="120" y="100" fill="#0ea5e9" fontSize="18">❄</text>
            <text x="270" y="100" fill="#ef4444" fontSize="18">♨</text>
            <text x="200" y="115" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontWeight="bold">DEVICE UNDER TEST (DUT)</text>
          </svg>
        );
    }
  };

  return (
    <section id="equipment" className="equipment-section">
      <div className="container">
        <div className="equipment-header">
          <div>
            <div className="section-tag">
              <Layers size={14} />
              Testing Infrastructure
            </div>
            <h2 className="section-heading">Testing Equipment & Systems</h2>
            <p className="section-subheading">
              Our Melbourne laboratory features high-force electrodynamic shakers, programmable pneumatic shock machines, and combined climatic chambers with closed-loop multi-channel digital acquisition.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="category-pills">
            <button
              className={`pill-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Systems ({EQUIPMENT_SPECS.length})
            </button>
            <button
              className={`pill-btn ${selectedCategory === 'vibration' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('vibration')}
            >
              Vibration Tables
            </button>
            <button
              className={`pill-btn ${selectedCategory === 'shock' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('shock')}
            >
              Shock Machines
            </button>
            <button
              className={`pill-btn ${selectedCategory === 'climatic' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('climatic')}
            >
              Climatic Dynamic
            </button>
          </div>
        </div>

        {/* Equipment Dual Grid */}
        <div className="equipment-layout">
          {/* Left Column: Equipment Selector Cards */}
          <div className="equipment-cards-list">
            {filteredSpecs.map((spec) => (
              <div
                key={spec.id}
                className={`spec-card ${activeSpec.id === spec.id ? 'active' : ''}`}
                onClick={() => setActiveSpecId(spec.id)}
              >
                <div className="spec-card-header">
                  <span className="spec-category-badge">{spec.category.toUpperCase()}</span>
                  <span className="spec-payload-pill mono-spec">{spec.payload}</span>
                </div>
                <h3 className="spec-card-title">{spec.name}</h3>
                <p className="spec-card-tagline">{spec.tagline}</p>
                <div className="spec-quick-specs">
                  <div className="quick-spec-item">
                    <span className="quick-spec-k">Max Accel:</span>
                    <span className="quick-spec-v mono-spec">{spec.maxAcceleration}</span>
                  </div>
                  <div className="quick-spec-item">
                    <span className="quick-spec-k">Table Size:</span>
                    <span className="quick-spec-v mono-spec">{spec.tableSize}</span>
                  </div>
                </div>
                <div className="spec-card-action">
                  <span>Inspect Engineering Schematics</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Detailed Schematic & Technical Breakdown */}
          <div className="equipment-details-pane">
            <div className="details-schematic-header">
              <div className="schematic-title-group">
                <span className="schematic-label mono-spec">SYSTEM_BLUEPRINT // {activeSpec.id.toUpperCase()}</span>
                <h3 className="active-spec-name">{activeSpec.name}</h3>
              </div>
              <span className="schematic-tag">{activeSpec.payload} Payload</span>
            </div>

            {/* Render Blueprint */}
            <div className="blueprint-box">
              {renderEquipmentBlueprint(activeSpec.id)}
            </div>

            {/* Spec Table */}
            <div className="details-specs-grid">
              <div className="spec-metric-cell">
                <span className="cell-label">Max Acceleration</span>
                <span className="cell-value mono-spec">{activeSpec.maxAcceleration}</span>
              </div>
              <div className="spec-metric-cell">
                <span className="cell-label">Maximum Payload</span>
                <span className="cell-value mono-spec">{activeSpec.payload}</span>
              </div>
              <div className="spec-metric-cell">
                <span className="cell-label">Working Surface</span>
                <span className="cell-value mono-spec">{activeSpec.tableSize}</span>
              </div>
              {activeSpec.frequencyRange && (
                <div className="spec-metric-cell">
                  <span className="cell-label">Frequency Bandwidth</span>
                  <span className="cell-value mono-spec">{activeSpec.frequencyRange}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="details-description">
              <p>{activeSpec.description}</p>
            </div>

            {/* Waveform / Capabilities List */}
            <div className="details-capabilities">
              <h4 className="capabilities-title">Supported Waveform Regimes:</h4>
              <div className="waveform-badges">
                {activeSpec.waveformTypes.map((wf, idx) => (
                  <span key={idx} className="wf-badge mono-spec">{wf}</span>
                ))}
              </div>

              <h4 className="capabilities-title" style={{ marginTop: '1.25rem' }}>Core Capabilities:</h4>
              <ul className="capabilities-list">
                {activeSpec.features.map((feat, idx) => (
                  <li key={idx} className="feat-item">
                    <CheckCircle2 size={16} className="feat-check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="details-pane-cta">
              <a href="#quote" className="btn btn-primary" style={{ width: '100%' }}>
                Book Testing On This Machine
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
