import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EquipmentSection } from './components/EquipmentSection';
import { WaveformVisualizer } from './components/WaveformVisualizer';
import { StandardsMatrix } from './components/StandardsMatrix';
import { FixtureEngineering } from './components/FixtureEngineering';
import { QuoteCalculator } from './components/QuoteCalculator';
import { Footer } from './components/Footer';
import { ShieldCheck, Activity, Cpu, Zap, Target } from 'lucide-react';
import './App.css';

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      
      <main>
        <Hero />

        {/* Why Assurance Lab Capabilities Strip */}
        <section id="capabilities" className="capabilities-strip">
          <div className="container">
            <div className="strip-header">
              <div className="section-tag">
                <Target size={14} />
                Engineering Assurance
              </div>
              <h2 className="section-heading">Built for Mission-Critical Environmental Qualification</h2>
              <p className="section-subheading">
                From defense munition shock to high-speed rail dynamic fatigue, Assurance Lab provides verified structural integrity testing with traceable instrumentation.
              </p>
            </div>

            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon-wrapper">
                  <Activity size={24} className="pillar-svg" />
                </div>
                <h3>Closed-Loop Dynamic Control</h3>
                <p>32-channel digital control running real-time adaptive inverse filtering for sine swept dwell, broadband random, and multi-axis SRS synthesis.</p>
                <div className="pillar-badge mono-spec">UP TO 3,000 HZ</div>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-wrapper">
                  <Zap size={24} className="pillar-svg" />
                </div>
                <h3>Extreme 30,000 g Pyroshock</h3>
                <p>Specialized resonant beam high-g apparatus simulating near-field explosive ordnance release, staging separation, and ballistic impact.</p>
                <div className="pillar-badge mono-spec">SUB-MS PULSES</div>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-wrapper">
                  <Cpu size={24} className="pillar-svg" />
                </div>
                <h3>In-House Modal Fixture Tooling</h3>
                <p>Custom magnesium and high-strength aluminum test fixtures engineered via FEA modal analysis to guarantee resonance-free test regimes.</p>
                <div className="pillar-badge mono-spec">FEA VALIDATED</div>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-wrapper">
                  <ShieldCheck size={24} className="pillar-svg" />
                </div>
                <h3>ISO/IEC 17025 Compliant</h3>
                <p>Traceable accelerometer calibrations, raw time-history data packages, and formal endorsed test certificates accepted by global primes.</p>
                <div className="pillar-badge mono-spec">DEFENCE READY</div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment & Machinery Breakdown */}
        <EquipmentSection />

        {/* Interactive Waveform Laboratory */}
        <WaveformVisualizer />

        {/* Standards Matrix */}
        <StandardsMatrix />

        {/* In-House Fixture Design */}
        <FixtureEngineering />

        {/* Specification & Quote Configurator */}
        <QuoteCalculator />
      </main>

      <Footer />
    </div>
  );
};
