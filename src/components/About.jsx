// src/components/About.jsx
import { ROCKET_PARTS } from '../utils/partConfig'

const SPECS = [
  { label: 'Height',       value: '70 m',       unit: 'meters' },
  { label: 'Mass',         value: '549,054',     unit: 'kg at liftoff' },
  { label: 'Thrust',       value: '7,607 kN',    unit: 'sea level' },
  { label: 'Payload LEO',  value: '22,800',      unit: 'kg to LEO' },
  { label: 'Engines',      value: '9 + 1',       unit: 'Merlin 1D' },
  { label: 'Reusable',     value: 'Yes',         unit: 'first stage' },
]

export default function About() {
  return (
    <section style={{
      background: '#f5f5f7',
      color: '#1d1d1f',
      padding: '120px 8vw',
      minHeight: '100vh',
    }}>
      {/* Header */}
      <div style={{ marginBottom: '80px' }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#4fc3f7',
          marginBottom: '16px',
        }}>
          Technical Anatomy
        </p>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(32px, 5vw, 64px)',
          fontWeight: '700',
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          color: '#1d1d1f',
          maxWidth: '600px',
        }}>
          Every part has<br />a purpose.
        </h2>
      </div>

      {/* Parts grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1px',
        background: 'rgba(0,0,0,0.08)',
        marginBottom: '80px',
      }}>
        {ROCKET_PARTS.map((part, i) => (
          <div key={part.id} style={{
            background: '#f5f5f7',
            padding: '36px 32px',
          }}>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#4fc3f7',
              marginBottom: '10px',
            }}>
              0{i + 1}
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '22px',
              fontWeight: '600',
              letterSpacing: '-0.01em',
              color: '#1d1d1f',
              marginBottom: '10px',
            }}>
              {part.label}
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: '300',
              color: '#6e6e73',
              lineHeight: 1.6,
            }}>
              {part.description}
            </div>
          </div>
        ))}
      </div>

      {/* Specs */}
      <div>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#86868b',
          marginBottom: '40px',
        }}>
          Specifications
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '40px',
        }}>
          {SPECS.map(spec => (
            <div key={spec.label}>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: '700',
                letterSpacing: '-0.03em',
                color: '#1d1d1f',
              }}>
                {spec.value}
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                fontWeight: '400',
                color: '#86868b',
                marginTop: '4px',
              }}>
                {spec.label} · {spec.unit}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: '120px',
        paddingTop: '40px',
        borderTop: '1px solid rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: '700',
          fontSize: '18px',
          color: '#1d1d1f',
        }}>
          III<span style={{ color: '#4fc3f7' }}>cket</span>
        </span>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '12px',
          color: '#86868b',
        }}>
          Built with React · Three.js · WebGL
        </span>
      </div>
    </section>
  )
}