// src/components/Hero.jsx

export default function Hero({ scrollProgress }) {
  const titleOpacity = Math.max(1 - scrollProgress * 4, 0)
  const titleY = scrollProgress * -60

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '0 8vw',
      pointerEvents: 'none',
      zIndex: 10,
    }}>
      <div style={{
        opacity: titleOpacity,
        transform: `translateY(${titleY}px)`,
        transition: 'none',
      }}>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(11px, 1.2vw, 13px)',
          fontWeight: '500',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#4fc3f7',
          marginBottom: '16px',
        }}>
          Scroll to Disassemble
        </p>

        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(40px, 6vw, 88px)',
          fontWeight: '700',
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          color: '#ffffff',
          marginBottom: '24px',
        }}>
          Built for<br />
          <span style={{ color: '#4fc3f7' }}>orbit.</span>
        </h1>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(14px, 1.4vw, 17px)',
          fontWeight: '300',
          color: 'rgba(255,255,255,0.5)',
          maxWidth: '380px',
          lineHeight: 1.7,
        }}>
          Explore the anatomy of a modern orbital launch vehicle.
          Every part. Every purpose.
        </p>

        {/* Scroll hint */}
        <div style={{
          marginTop: '48px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: 'rgba(255,255,255,0.3)',
          fontSize: '12px',
          fontFamily: "'Inter', sans-serif",
          letterSpacing: '0.1em',
        }}>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(79,195,247,0.8), transparent)',
            animation: 'pulse 2s infinite',
          }} />
          scroll to explore
        </div>
      </div>

      {/* Progress indicator */}
      <div style={{
        position: 'fixed',
        bottom: '32px',
        right: '48px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        opacity: scrollProgress > 0.05 ? 1 : 0,
        transition: 'opacity 0.5s',
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '11px',
          color: '#4fc3f7',
          letterSpacing: '0.1em',
        }}>
          {Math.round(scrollProgress * 100)}%
        </span>
        <div style={{
          width: '80px',
          height: '1px',
          background: 'rgba(255,255,255,0.1)',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${scrollProgress * 100}%`,
            background: '#4fc3f7',
            transition: 'width 0.1s',
          }} />
        </div>
      </div>
    </div>
  )
}