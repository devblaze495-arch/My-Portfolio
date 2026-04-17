import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'

function App() {
  const sequence = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ]
  const [progress, setProgress] = useState(0)
  const [keys, setKeys] = useState<string[]>([])
  const [activated, setActivated] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      const value = total > 0 ? (scrolled / total) * 100 : 0
      setProgress(value)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
      setKeys((prev) => {
        const next = [...prev, key].slice(-10)
        if (next.join(',') === sequence.join(',')) {
          setActivated(true)
          if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
          timeoutRef.current = window.setTimeout(() => setActivated(false), 3000)
        }
        return next
      })
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [sequence])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div style={{ background: '#050505', minHeight: '100vh' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10000,
          height: '2px',
          background: 'linear-gradient(90deg, #00FF80, rgba(0,255,128,0.4))',
          width: `${progress}%`,
          transition: 'width 0.1s linear',
          boxShadow: '0 0 8px rgba(0,255,128,0.6)',
        }}
      />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          pointerEvents: 'none',
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
      <AnimatePresence>
        {activated && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(0,255,128,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '14px',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                color: '#00FF80',
                fontSize: '32px',
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontWeight: 800,
              }}
            >
              {'⚡ CHEAT CODE ACTIVATED'}
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '18px',
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              }}
            >
              You found the easter egg!
            </div>
            <div
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '16px',
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              }}
            >
              Hiring Bhavesh = +9999 productivity
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
