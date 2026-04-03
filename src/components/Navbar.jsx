// src/components/Navbar.jsx
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '20px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(8,11,20,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(79,195,247,0.1)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: '700',
        fontSize: '20px',
        letterSpacing: '-0.02em',
        color: '#fff',
      }}>
        III<span style={{ color: '#4fc3f7' }}>cket</span>
      </div>

      <div style={{
        display: 'flex',
        gap: '32px',
        fontFamily: "'Inter', sans-serif",
        fontSize: '13px',
        fontWeight: '400',
        color: 'rgba(255,255,255,0.6)',
        letterSpacing: '0.02em',
      }}>
        {['Launch', 'Anatomy', 'Specs'].map(item => (
          <span key={item} style={{
            cursor: 'pointer',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = '#4fc3f7'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
          >
            {item}
          </span>
        ))}
      </div>
    </nav>
  )
}