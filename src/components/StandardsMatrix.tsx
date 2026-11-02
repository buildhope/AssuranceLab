import React, { useState } from 'react';
import { STANDARDS_DATA } from '../data/testingData';
import { Search, CheckCircle, ShieldCheck } from 'lucide-react';
import './StandardsMatrix.css';

export const StandardsMatrix: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Defence', 'Rail & Transport', 'Aerospace', 'Automotive', 'Industrial'];

  const filteredStandards = STANDARDS_DATA.filter((std) => {
    const matchesCategory = activeCategory === 'All' || std.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      std.code.toLowerCase().includes(query) ||
      std.title.toLowerCase().includes(query) ||
      std.description.toLowerCase().includes(query) ||
      std.methods.some((m) => m.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="standards" className="standards-section">
      <div className="container">
        <div className="standards-header">
          <div className="section-tag">
            <ShieldCheck size={14} />
            Compliance & Accreditation
          </div>
          <h2 className="section-heading">Testing Standards Matrix</h2>
          <p className="section-subheading">
            Assurance Lab delivers accredited qualification testing aligned with major Australian Defence Force, NATO, European, and US military and commercial environmental engineering test standards.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="standards-controls">
          {/* Category Tabs */}
          <div className="standards-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search standard code (e.g. 810H, 61373, RTCA)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="standards-search-input"
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Standards Grid */}
        <div className="standards-cards-grid">
          {filteredStandards.map((std) => (
            <div key={std.id} className="standard-card">
              <div className="standard-card-header">
                <span className="std-code-badge mono-spec">{std.code}</span>
                <span className={`std-cat-pill cat-${std.category.toLowerCase().replace(/[^a-z]/g, '')}`}>
                  {std.category}
                </span>
              </div>

              <h3 className="standard-card-title">{std.title}</h3>
              <p className="standard-card-desc">{std.description}</p>

              <div className="standard-methods-group">
                <span className="methods-label">Covered Methods & Profiles:</span>
                <div className="methods-list">
                  {std.methods.map((method, idx) => (
                    <span key={idx} className="method-pill mono-spec">
                      <CheckCircle size={12} className="method-check" />
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStandards.length === 0 && (
          <div className="standards-empty-state">
            <p>No standards matching "{searchQuery}" in category "{activeCategory}".</p>
            <button className="btn btn-secondary btn-sm" onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}>
              Reset Filters
            </button>
          </div>
        )}

        {/* Standards Bottom Banner */}
        <div className="standards-bottom-banner">
          <div className="banner-text">
            <h4>Have a proprietary or unique company test procedure?</h4>
            <p>We configure custom vibration and shock test profiles based on client-defined time-history telemetry, accelerometer field recordings, or specialized mission profiles.</p>
          </div>
          <a href="#quote" className="btn btn-primary">
            Discuss Custom Test Profile
          </a>
        </div>
      </div>
    </section>
  );
};
