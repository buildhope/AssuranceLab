# Assurance Lab — Precision Environmental Testing

A modern, mobile-responsive web platform for **Assurance Lab**, an accredited environmental dynamic testing facility based in Melbourne, Australia. 

Designed for mission-critical environmental physical testing across **Defence**, **Aerospace**, **Rail**, **Automotive**, and **Industrial Electronics**.

---

## Capabilities & Infrastructure

- **Multi-Axis Electrodynamic Vibration**:
  - Up to 2,000 kg payload capacity
  - 100 g peak acceleration
  - 1 Hz to 3,000 Hz broadband spectrum
  - 60 kN dynamic force rating (120 kN shock force)
  - Horizontal hydrostatic oil-film slip table for 3-axis testing
  - Waveforms: Swept Sine, Broadband Random, Sine-on-Random (SoR), Random-on-Random (RoR), Resonance Search & Dwell
- **Heavy-Duty Programmable Shock Machine**:
  - Up to 1,150 kg payload
  - Peak acceleration up to 600 g with programmable elastomer pulse arrestors
  - Half-Sine, Terminal Peak Sawtooth (TPS), and Trapezoidal wave profiles
- **Ultra High-G Pyroshock Simulator**:
  - Sub-millisecond deceleration shocks up to 30,000 g
  - Resonant beam apparatus simulating near-field ordnance separation and ballistic shock
  - High-bandwidth laser Doppler vibrometry and piezoelectric telemetry
- **Combined Climatic & Dynamic Chambers**:
  - Simultaneous thermal cycling (-70°C to +180°C) with multi-axis dynamic vibration
- **In-House Modal Fixture Tooling**:
  - SolidWorks CAD and ANSYS FEA modal analysis ($f_{\text{res}} > 1.2 \times f_{\text{max}}$)
  - Monolithic magnesium and aerospace 6061-T6 CNC fabrication

---

## Standards Compliance Matrix

- **Defence**: MIL-STD-810H/G, DEF STAN 00-35, MIL-STD-167-1A, MIL-STD-202
- **Rail & Transport**: IEC/EN 61373 (Cat 1/2/3), ISTA 2A/3A, ASTM D4169
- **Aerospace**: RTCA DO-160G / EUROCAE ED-14G
- **Automotive**: ISO 16750-3
- **Industrial**: IEC 60068-2 series (60068-2-6, 60068-2-27, 60068-2-64)

---

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite
- **Styling**: Vanilla CSS (Custom Design System with precision engineering tokens)
- **Visuals**: Procedurally generated SVG engineering blueprints & real-time mathematical waveform simulator
- **Icons**: Lucide React
- **Deployment**: Automated GitHub Pages via GitHub Actions

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/buildhope/AssuranceLab.git
cd AssuranceLab
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to explore the application locally.

### Production Build

```bash
npm run build
npm run preview
```

---

## GitHub Pages Deployment

The repository includes an automated workflow at `.github/workflows/deploy.yml`. 

To activate:
1. Go to **Settings** > **Pages** in the GitHub repository.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Every push to `main` will automatically build and publish to `https://buildhope.github.io/AssuranceLab/`.

---

## Contact & Facility

- **Facility**: 48 Innovation Way, Melbourne Advanced Manufacturing Precinct, VIC 3168, Australia
- **Phone**: (03) 9000 xxxx
- **Email**: testing@assurancelab.com.au
- **Accreditation**: ISO/IEC 17025:2017 & NATA Scope Alignment
