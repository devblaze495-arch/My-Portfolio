import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import SideRays from './SideRays'

const konamiSequence = [
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

function Layout() {
  const location = useLocation()
  const [progress, setProgress] = useState(0)
  const keySequenceRef = useRef<string[]>([])
  const [activated, setActivated] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

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
  }, [location.pathname])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
      const next = [...keySequenceRef.current, key].slice(-10)
      keySequenceRef.current = next
      if (next.join(',') === konamiSequence.join(',')) {
        setActivated(true)
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
        timeoutRef.current = window.setTimeout(() => setActivated(false), 3000)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div
      style={{
        background: '#000000',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <SideRays
          speed={2.5}
          rayColor1="#5483B3"
          rayColor2="#C1E8FF"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={0.8}
        />
      </div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10000,
          height: '2px',
          background: 'transparent',
          width: `${progress}%`,
          transition: 'width 0.1s linear',
          boxShadow: '0 0 8px rgba(125,160,202,0.6)',
        }}
      />
      <Navbar />
      <Outlet />
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
              background: 'transparent',
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
                color: '#7DA0CA',
                fontSize: '32px',
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontWeight: 800,
              }}
            >
              {'⚡ CHEAT CODE ACTIVATED'}
            </div>
            <div
              style={{
                color: '#5483B3',
                fontSize: '18px',
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              }}
            >
              You found the easter egg!
            </div>
            <div
              style={{
                color: '#5483B3',
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

export default Layout
