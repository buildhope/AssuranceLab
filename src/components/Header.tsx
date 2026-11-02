import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowUpRight, Activity } from 'lucide-react';
import './Header.css';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Equipment', href: '#equipment' },
    { label: 'Waveform Lab', href: '#waveform-lab' },
    { label: 'Standards', href: '#standards' },
    { label: 'Fixture Design', href: '#fixture-engineering' },
    { label: 'Contact', href: '#quote' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-header">
      {/* Precision Top Utility Bar */}
      <div className="header-top-bar">
        <div className="container header-top-content">
          <div className="top-bar-left">
            <span className="badge-status">
              <span className="status-indicator"></span>
              ISO/IEC 17025 Aligned Environmental Testing
            </span>
            <span className="top-separator">|</span>
            <span className="top-location">
              <MapPin size={13} className="inline-icon" />
              Melbourne Technical Facility, Victoria
            </span>
          </div>
          <div className="top-bar-right">
            <a href="tel:039000xxxx" className="top-link">
              <Phone size={13} className="inline-icon" />
              (03) 9000 xxxx
            </a>
            <span className="top-separator">|</span>
            <a href="mailto:testing@assurancelab.com.au" className="top-link">
              <Mail size={13} className="inline-icon" />
              testing@assurancelab.com.au
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="header-main-nav">
        <div className="container header-main-content">
          <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="logo-symbol">
              <Activity size={22} className="logo-icon" />
              <div className="reticle-ring"></div>
            </div>
            <div className="logo-text">
              <span className="brand-name">ASSURANCE LAB</span>
              <span className="brand-sub">PRECISION ENVIRONMENTAL TESTING</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-item"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="header-cta-group">
            <a
              href="#quote"
              className="btn btn-primary btn-sm header-cta"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#quote');
              }}
            >
              <span>Request Quote</span>
              <ArrowUpRight size={16} />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="container mobile-drawer-inner">
            <nav className="mobile-nav-list">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mobile-drawer-contact">
              <a href="tel:039000xxxx" className="mobile-contact-item">
                <Phone size={16} /> (03) 9000 xxxx
              </a>
              <a href="mailto:testing@assurancelab.com.au" className="mobile-contact-item">
                <Mail size={16} /> testing@assurancelab.com.au
              </a>
              <a
                href="#quote"
                className="btn btn-primary btn-block"
                style={{ width: '100%', marginTop: '1rem' }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#quote');
                }}
              >
                Request Technical Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
