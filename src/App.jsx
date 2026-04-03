// src/App.jsx
import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import RocketScene from './scene/RocketScene'
import { useScrollProgress } from './hooks/useScrollProgress'

export default function App() {
  const scrollProgress = useScrollProgress()

  return (
    <div>
      {/* ── FIXED CANVAS (always behind everything) ── */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        background: 'linear-gradient(180deg, #080b14 0%, #0d1117 100%)',
      }}>
        <RocketScene scrollProgress={scrollProgress} />
      </div>

      {/* ── FIXED UI LAYER ── */}
      <Navbar />
      <Hero scrollProgress={scrollProgress} />

      {/* ── SCROLLABLE SPACER (creates scroll height) ── */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        pointerEvents: 'none',
      }}>
        {/* Tall spacer to allow scrolling while canvas stays fixed */}
        <div style={{ height: '500vh' }} />
      </div>

      {/* ── ABOUT SECTION (below the 3D experience) ── */}
      <div style={{
        position: 'relative',
        zIndex: 2,
      }}>
        <About />
      </div>
    </div>
  )
}