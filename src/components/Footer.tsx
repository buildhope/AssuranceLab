import React from 'react';
import { Activity, ShieldCheck, Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="footer-logo-symbol">
                <Activity size={20} />
              </div>
              <span className="footer-brand-name">ASSURANCE LAB</span>
            </div>
            <p className="footer-desc">
              Accredited environmental physical testing laboratory based in Melbourne, Australia. Specialising in high-force multi-axis electrodynamic vibration, mechanical drop shock, ballistic pyroshock simulation, and combined climatic environmental engineering qualification.
            </p>
            <div className="footer-accreditation-badge">
              <ShieldCheck size={16} className="accred-icon" />
              <span>ISO/IEC 17025 & NATA Scope Alignment</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Testing Services</h4>
            <ul className="footer-link-list">
              <li><a href="#equipment" onClick={(e) => { e.preventDefault(); scrollTo('#equipment'); }}>Electrodynamic Vibration</a></li>
              <li><a href="#equipment" onClick={(e) => { e.preventDefault(); scrollTo('#equipment'); }}>Programmable Drop Shock</a></li>
              <li><a href="#equipment" onClick={(e) => { e.preventDefault(); scrollTo('#equipment'); }}>High-G Pyroshock Testing</a></li>
              <li><a href="#equipment" onClick={(e) => { e.preventDefault(); scrollTo('#equipment'); }}>Climatic Dynamic Simulation</a></li>
              <li><a href="#fixture-engineering" onClick={(e) => { e.preventDefault(); scrollTo('#fixture-engineering'); }}>CAD/FEA Fixture Engineering</a></li>
              <li><a href="#waveform-lab" onClick={(e) => { e.preventDefault(); scrollTo('#waveform-lab'); }}>Shock & Vibration Modeling</a></li>
            </ul>
          </div>

          {/* Standards Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Accredited Standards</h4>
            <ul className="footer-link-list">
              <li><a href="#standards" onClick={(e) => { e.preventDefault(); scrollTo('#standards'); }}>MIL-STD-810H / 810G</a></li>
              <li><a href="#standards" onClick={(e) => { e.preventDefault(); scrollTo('#standards'); }}>DEF STAN 00-35</a></li>
              <li><a href="#standards" onClick={(e) => { e.preventDefault(); scrollTo('#standards'); }}>IEC / EN 61373 (Rail)</a></li>
              <li><a href="#standards" onClick={(e) => { e.preventDefault(); scrollTo('#standards'); }}>RTCA DO-160G (Aerospace)</a></li>
              <li><a href="#standards" onClick={(e) => { e.preventDefault(); scrollTo('#standards'); }}>ISO 16750-3 (Automotive)</a></li>
              <li><a href="#standards" onClick={(e) => { e.preventDefault(); scrollTo('#standards'); }}>ISTA 2A/3A & ASTM D4169</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Melbourne Facility</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>## Innovation Way, Melbourne, VIC 3000, Australia</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} className="contact-icon" />
                <a href="tel:039000xxxx">(03) 9000 xxxx</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} className="contact-icon" />
                <a href="mailto:testing@assurancelab.com.au">testing@assurancelab.com.au</a>
              </div>
              <div className="footer-contact-item">
                <Clock size={16} className="contact-icon" />
                <span>Mon – Fri: 07:30 – 18:00 AEST<br /><small style={{ color: '#94a3b8' }}>24/7 continuous shift slots available for accelerated endurance testing</small></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {new Date().getFullYear()} Assurance Lab Pty Ltd. All rights reserved. Melbourne, Victoria, Australia.
          </div>
          <div className="footer-meta-links">
            <span className="meta-text">Quality Management System aligned with ISO/IEC 17025:2017</span>
            <span className="meta-divider">•</span>
            <span className="meta-text">ITAR & DISP Compliant Data Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
