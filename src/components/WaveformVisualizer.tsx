import React, { useState, useMemo } from 'react';
import { Activity, Zap } from 'lucide-react';
import './WaveformVisualizer.css';

type WaveformMode = 'half-sine' | 'sawtooth' | 'random-psd' | 'srs';

export const WaveformVisualizer: React.FC = () => {
  const [mode, setMode] = useState<WaveformMode>('half-sine');
  const [peakG, setPeakG] = useState<number>(100); // in g
  const [durationMs, setDurationMs] = useState<number>(11); // in ms
  const [psdLevel, setPsdLevel] = useState<number>(0.04); // g^2/Hz

  // Calculate live parameters
  const calculatedSpecs = useMemo(() => {
    if (mode === 'half-sine') {
      // Velocity change delta V = (2 / pi) * A * D
      // where A = peakG * 9.80665 m/s^2, D = durationMs * 1e-3 s
      const deltaV = (2 / Math.PI) * (peakG * 9.80665) * (durationMs / 1000);
      return {
        metric1Title: 'Velocity Change (ΔV)',
        metric1Val: `${deltaV.toFixed(2)} m/s`,
        metric2Title: 'Standard Compliance',
        metric2Val: 'MIL-STD-810H Meth 516.8',
        metric3Title: 'Tolerance Envelope',
        metric3Val: '±15% Peak / ±10% Dur',
      };
    } else if (mode === 'sawtooth') {
      const deltaV = 0.5 * (peakG * 9.80665) * (durationMs / 1000);
      return {
        metric1Title: 'Velocity Change (ΔV)',
        metric1Val: `${deltaV.toFixed(2)} m/s`,
        metric2Title: 'Standard Compliance',
        metric2Val: 'IEC 60068-2-27',
        metric3Title: 'Decay Slope',
        metric3Val: '< 10% of Pulse Duration',
      };
    } else if (mode === 'random-psd') {
      // Approximate GRMS for plateau between 20Hz and 1000Hz
      const approxGrms = Math.sqrt(psdLevel * (1000 - 20) * 1.3);
      return {
        metric1Title: 'Overall GRMS',
        metric1Val: `${approxGrms.toFixed(2)} g RMS`,
        metric2Title: 'Bandwidth',
        metric2Val: '10 Hz – 2,000 Hz',
        metric3Title: 'Standard Profile',
        metric3Val: 'IEC 61373 Cat 1 Class B',
      };
    } else {
      // SRS
      const peakSrsG = peakG * 1.85;
      return {
        metric1Title: 'Max SRS Peak (Q=10)',
        metric1Val: `${peakSrsG.toFixed(0)} g @ 1,200 Hz`,
        metric2Title: 'Damping Factor (ζ)',
        metric2Val: '5% Critical (Q = 10)',
        metric3Title: 'Standard Method',
        metric3Val: 'MIL-STD-810H Method 517',
      };
    }
  }, [mode, peakG, durationMs, psdLevel]);

  // Generate SVG path for waveform
  const { pathData, upperTolPath, lowerTolPath } = useMemo(() => {
    const width = 640;
    const zeroY = 190;
    const scaleY = (zeroY - 40) / Math.max(peakG, 10);

    let path = '';
    let upper = '';
    let lower = '';

    if (mode === 'half-sine') {
      const startX = 80;
      const pulseWidth = (durationMs / 30) * 360;
      const endX = startX + pulseWidth;

      path = `M 20,${zeroY} L ${startX},${zeroY}`;
      upper = `M 20,${zeroY - 8} L ${startX - 10},${zeroY - 8}`;
      lower = `M 20,${zeroY + 8} L ${startX - 10},${zeroY + 8}`;

      for (let x = startX; x <= endX; x += 4) {
        const t = (x - startX) / pulseWidth;
        const y = zeroY - Math.sin(t * Math.PI) * peakG * scaleY;
        path += ` L ${x},${y}`;

        const yUpper = zeroY - Math.sin(t * Math.PI) * (peakG * 1.15) * scaleY - 6;
        const yLower = zeroY - Math.sin(t * Math.PI) * (peakG * 0.85) * scaleY + 6;
        upper += ` L ${x},${yUpper}`;
        lower += ` L ${x},${Math.min(yLower, zeroY + 10)}`;
      }

      path += ` L ${width - 20},${zeroY}`;
      upper += ` L ${width - 20},${zeroY - 8}`;
      lower += ` L ${width - 20},${zeroY + 8}`;
    } else if (mode === 'sawtooth') {
      const startX = 80;
      const pulseWidth = (durationMs / 30) * 360;
      const peakX = startX + pulseWidth * 0.9;
      const endX = startX + pulseWidth;
      const peakY = zeroY - peakG * scaleY;

      path = `M 20,${zeroY} L ${startX},${zeroY} L ${peakX},${peakY} L ${endX},${zeroY} L ${width - 20},${zeroY}`;
      upper = `M 20,${zeroY - 8} L ${startX},${zeroY - 8} L ${peakX},${peakY - 12} L ${endX + 15},${zeroY - 8} L ${width - 20},${zeroY - 8}`;
      lower = `M 20,${zeroY + 8} L ${startX},${zeroY + 8} L ${peakX - 8},${peakY + 14} L ${endX},${zeroY + 8} L ${width - 20},${zeroY + 8}`;
    } else if (mode === 'random-psd') {
      // Frequency vs PSD plateau
      const startX = 60;
      const p1X = 140;
      const p2X = 460;
      const endX = 600;
      const plateauY = 90 - psdLevel * 200;

      path = `M ${startX},220 L ${p1X},${plateauY} L ${p2X},${plateauY} L ${endX},220`;
      upper = `M ${startX},205 L ${p1X},${plateauY - 15} L ${p2X},${plateauY - 15} L ${endX},205`;
      lower = `M ${startX},235 L ${p1X},${plateauY + 15} L ${p2X},${plateauY + 15} L ${endX},235`;
    } else {
      // SRS Curve
      path = `M 60,220 C 180,210 260,80 380,60 C 460,45 520,70 600,75`;
      upper = `M 60,205 C 180,195 260,65 380,45 C 460,30 520,55 600,60`;
      lower = `M 60,235 C 180,225 260,95 380,75 C 460,60 520,85 600,90`;
    }

    return { pathData: path, upperTolPath: upper, lowerTolPath: lower };
  }, [mode, peakG, durationMs, psdLevel]);

  return (
    <section id="waveform-lab" className="waveform-section">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag dark">
            <Activity size={14} />
            Interactive Engineering Simulator
          </div>
          <h2 className="section-heading light">Dynamic Waveform Laboratory</h2>
          <p className="section-subheading light">
            Test and model your environmental qualification parameters. Explore pulse shapes, velocity changes, and military tolerance envelopes executed by our digital closed-loop multi-axis vibration and shock controllers.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="simulator-card">
          {/* Mode Selector Tabs */}
          <div className="simulator-tabs">
            <button
              className={`sim-tab ${mode === 'half-sine' ? 'active' : ''}`}
              onClick={() => setMode('half-sine')}
            >
              Classical Half-Sine Shock
            </button>
            <button
              className={`sim-tab ${mode === 'sawtooth' ? 'active' : ''}`}
              onClick={() => setMode('sawtooth')}
            >
              Terminal Peak Sawtooth (TPS)
            </button>
            <button
              className={`sim-tab ${mode === 'random-psd' ? 'active' : ''}`}
              onClick={() => setMode('random-psd')}
            >
              Random Vibration PSD
            </button>
            <button
              className={`sim-tab ${mode === 'srs' ? 'active' : ''}`}
              onClick={() => setMode('srs')}
            >
              Shock Response Spectrum (SRS)
            </button>
          </div>

          <div className="simulator-body">
            {/* SVG Visualizer Canvas */}
            <div className="canvas-wrapper">
              <div className="canvas-header">
                <div className="channel-indicator">
                  <span className="dot pulse"></span>
                  <span className="mono-spec text-cyan">CONTROL_CH_01 // REAL_TIME_TRACE</span>
                </div>
                <div className="canvas-badge mono-spec">
                  {mode === 'random-psd' ? 'FREQ DOMAIN (Hz)' : 'TIME DOMAIN (ms)'}
                </div>
              </div>

              <div className="svg-container">
                <svg viewBox="0 0 640 260" className="waveform-svg" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="waveGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#0284c7" stopOpacity="0.0" />
                    </linearGradient>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                    </pattern>
                  </defs>

                  {/* Grid Lines */}
                  <rect width="640" height="260" fill="url(#grid)" />

                  {/* Baseline Axis */}
                  <line x1="20" y1="190" x2="620" y2="190" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Tolerance Envelope (Upper / Lower) */}
                  <path d={upperTolPath} fill="none" stroke="rgba(245, 158, 11, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d={lowerTolPath} fill="none" stroke="rgba(245, 158, 11, 0.35)" strokeWidth="1.5" strokeDasharray="4 4" />

                  {/* Synthesized Waveform */}
                  <path d={pathData} fill="none" stroke="#38bdf8" strokeWidth="2.5" />

                  {/* Coordinate labels */}
                  <text x="30" y="45" fill="#64748b" fontSize="10" fontFamily="JetBrains Mono">+Acceleration (g)</text>
                  <text x="30" y="185" fill="#64748b" fontSize="10" fontFamily="JetBrains Mono">0 g</text>
                  <text x="560" y="210" fill="#64748b" fontSize="10" fontFamily="JetBrains Mono">
                    {mode === 'random-psd' ? '2000 Hz' : '30 ms'}
                  </text>
                </svg>
              </div>

              {/* Legend */}
              <div className="canvas-legend">
                <div className="legend-item">
                  <span className="legend-line blue"></span>
                  <span>Synthesized Control Profile</span>
                </div>
                <div className="legend-item">
                  <span className="legend-line dashed-amber"></span>
                  <span>MIL/IEC Allowable Tolerance Envelope</span>
                </div>
              </div>
            </div>

            {/* Interactive Control Sidebar */}
            <div className="simulator-controls">
              <h3 className="controls-title">Test Parameters</h3>

              {(mode === 'half-sine' || mode === 'sawtooth' || mode === 'srs') && (
                <>
                  <div className="control-group">
                    <div className="control-label">
                      <span>Peak Acceleration:</span>
                      <span className="mono-spec text-cyan">{peakG} g</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      step="10"
                      value={peakG}
                      onChange={(e) => setPeakG(Number(e.target.value))}
                      className="range-slider"
                    />
                    <div className="range-bounds mono-spec">
                      <span>10 g</span>
                      <span>1,000 g</span>
                    </div>
                  </div>

                  <div className="control-group">
                    <div className="control-label">
                      <span>Pulse Duration:</span>
                      <span className="mono-spec text-cyan">{durationMs} ms</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="30"
                      step="1"
                      value={durationMs}
                      onChange={(e) => setDurationMs(Number(e.target.value))}
                      className="range-slider"
                    />
                    <div className="range-bounds mono-spec">
                      <span>2 ms</span>
                      <span>30 ms</span>
                    </div>
                  </div>
                </>
              )}

              {mode === 'random-psd' && (
                <div className="control-group">
                  <div className="control-label">
                    <span>Plateau PSD Level:</span>
                    <span className="mono-spec text-cyan">{psdLevel.toFixed(3)} g²/Hz</span>
                  </div>
                  <input
                    type="range"
                    min="0.005"
                    max="0.2"
                    step="0.005"
                    value={psdLevel}
                    onChange={(e) => setPsdLevel(Number(e.target.value))}
                    className="range-slider"
                  />
                  <div className="range-bounds mono-spec">
                    <span>0.005 g²/Hz</span>
                    <span>0.200 g²/Hz</span>
                  </div>
                </div>
              )}

              {/* Real-time Telemetry Calculations */}
              <div className="telemetry-box">
                <div className="telemetry-header">
                  <Zap size={14} className="text-amber" />
                  <span className="mono-spec">REALTIME_CALCULATIONS</span>
                </div>

                <div className="telemetry-row">
                  <span className="telem-label">{calculatedSpecs.metric1Title}</span>
                  <span className="telem-val mono-spec">{calculatedSpecs.metric1Val}</span>
                </div>
                <div className="telemetry-row">
                  <span className="telem-label">{calculatedSpecs.metric2Title}</span>
                  <span className="telem-val mono-spec">{calculatedSpecs.metric2Val}</span>
                </div>
                <div className="telemetry-row">
                  <span className="telem-label">{calculatedSpecs.metric3Title}</span>
                  <span className="telem-val mono-spec">{calculatedSpecs.metric3Val}</span>
                </div>
              </div>

              <div className="controls-cta">
                <a href="#quote" className="btn btn-primary" style={{ width: '100%' }}>
                  Request Test With This Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
