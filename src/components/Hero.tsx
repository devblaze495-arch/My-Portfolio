import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AnimatedButton from './AnimatedButton'

type TerminalLine = {
  text: string
  color: string
}

const terminalLines: TerminalLine[] = [
  { text: '$ skills --list', color: 'rgba(125,160,202,0.5)' },
  { text: 'React, Node.js', color: '#5483B3' },
  { text: 'MongoDB, TypeScript', color: '#5483B3' },
  { text: 'Python, AI/ML', color: '#5483B3' },
  { text: '$ status', color: 'rgba(125,160,202,0.5)' },
  { text: '● Available for hire', color: '#7DA0CA' },
  { text: '$ location', color: 'rgba(125,160,202,0.5)' },
  { text: 'Panvel, Mumbai IN', color: '#5483B3' },
]

const techStack = [
  '// React',
  '// Node.js',
  '// MongoDB',
  '// TypeScript',
  '// Python',
  '// AI/ML',
]

const stats = [
  { target: '10', suffix: '+', label: 'PROJECTS' },
  { target: '5', suffix: '+', label: 'CLIENTS' },
  { target: '2', suffix: '+', label: 'YEARS' },
]

const whoAmIText = '> whoami'
const roles = ['<FullStackDev />', '<AIBuilder />', '<ProblemSolver />', '<FreelanceAvailable />']

function useWindowWidth() {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return width
}

function CountUp({ target, suffix }: { target: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = parseInt(target, 10)
    const duration = 1500
    const step = duration / end
    const timer = window.setInterval(() => {
      start++
      setCount(start)
      if (start >= end) window.clearInterval(timer)
    }, step)
    return () => window.clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {String(count).padStart(2, '0')}
      {suffix}
    </span>
  )
}

function Hero() {
  const navigate = useNavigate()
  const fullText = 'Bhavesh B. Patil'
  const width = useWindowWidth()
  const isMobile = width < 768

  const [typedWhoAmI, setTypedWhoAmI] = useState('')
  const [displayedText, setDisplayedText] = useState('')
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedRole, setTypedRole] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const delayId = window.setTimeout(() => {
      let index = 0
      const interval = window.setInterval(() => {
        index += 1
        setTypedWhoAmI(whoAmIText.slice(0, index))
        if (index >= whoAmIText.length) {
          window.clearInterval(interval)
        }
      }, 80)
    }, 500)

    return () => {
      window.clearTimeout(delayId)
    }
  }, [])

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[charIndex])
        setCharIndex((prev) => prev + 1)
      }, 80)
      return () => clearTimeout(timeout)
    }
  }, [charIndex])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeoutId = 0

    if (!isDeleting) {
      if (typedRole.length < currentRole.length) {
        timeoutId = window.setTimeout(() => {
          setTypedRole(currentRole.slice(0, typedRole.length + 1))
        }, 80)
      } else {
        timeoutId = window.setTimeout(() => setIsDeleting(true), 2000)
      }
    } else if (typedRole.length > 0) {
      timeoutId = window.setTimeout(() => {
        setTypedRole(currentRole.slice(0, typedRole.length - 1))
      }, 40)
    } else {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => window.clearTimeout(timeoutId)
  }, [isDeleting, roleIndex, typedRole])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= terminalLines.length) {
          window.clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 300)

    return () => window.clearInterval(interval)
  }, [])

  const visibleTerminalLines = useMemo(
    () => terminalLines.slice(0, visibleLines),
    [visibleLines],
  )

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>
        {`
          @keyframes glitch1 {
            0%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0) }
            20% { clip-path: inset(10% 0 70% 0); transform: translate(-3px, 1px) }
            40% { clip-path: inset(50% 0 30% 0); transform: translate(3px, -1px) }
            60% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px) }
            80% { clip-path: inset(30% 0 60% 0); transform: translate(2px, -2px) }
          }
          @keyframes glitch2 {
            0%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0) }
            20% { clip-path: inset(60% 0 20% 0); transform: translate(3px, -1px) }
            50% { clip-path: inset(20% 0 65% 0); transform: translate(-3px, 1px) }
            70% { clip-path: inset(85% 0 5% 0); transform: translate(2px, 2px) }
          }
        `}
      </style>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'transparent',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          top: '-200px',
          right: '-200px',
          borderRadius: '50%',
          background: 'transparent',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          bottom: '-100px',
          left: '-100px',
          borderRadius: '50%',
          background: 'transparent',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{ backgroundPosition: ['0px 0px', '0px 60px'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'transparent',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: isMobile ? '100px 6% 60px' : '140px 6% 80px',
          maxWidth: '900px',
        }}
      >
        <motion.div
          transition={{ delay: 0 * 0.1 }}
          style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: '14px',
            color: 'rgba(125,160,202,0.6)',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0, 1], scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'transparent',
            }}
          />
          <span>{typedWhoAmI}</span>
        </motion.div>

        <motion.div style={{ marginBottom: '16px' }} transition={{ delay: 1 * 0.1 }}>
          <div
            className="gradient-heading-text"
            style={{
              fontSize: 'clamp(52px, 8vw, 96px)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-3px',
              marginBottom: 16,
            }}
          >
            {displayedText.split('').map((char, i) => (
              <span
                key={i}
                style={{
                  display: 'inline',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
            <span
              style={{
                opacity: showCursor ? 1 : 0,
                transition: 'opacity 0.1s',
                display: 'inline',
              }}
            >
              _
            </span>
          </div>
        </motion.div>

        <motion.div
          transition={{ delay: 2 * 0.1 }}
          style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: '18px',
            color: '#5483B3',
            marginBottom: '32px',
            marginTop: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span
            style={{
              width: '32px',
              height: '1px',
              background: 'transparent',
            }}
          />
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
            {typedRole}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{ color: '#7DA0CA', marginLeft: '2px' }}
            >
              |
            </motion.span>
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 + 3 * 0.1 }}
          style={{
            fontSize: '16px',
            color: '#5483B3',
            lineHeight: 1.7,
            maxWidth: '500px',
            marginBottom: '44px',
            fontWeight: 400,
            whiteSpace: 'pre-line',
          }}
        >
          {'Building high-performance web apps and AI-powered\ntools from Panvel, Mumbai. 10+ projects shipped,\n5+ happy clients.'}
        </motion.p>

        <motion.div
          transition={{ delay: 4 * 0.1 }}
          style={{
            display: 'flex',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '60px',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
          }}
        >
          <AnimatedButton onClick={() => navigate('/projects')}>
            ./view_work
          </AnimatedButton>

          <AnimatedButton onClick={() => navigate('/contact')}>
            ./contact_me
          </AnimatedButton>
        </motion.div>

        <motion.div
          transition={{ delay: 5 * 0.1 }}
          style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '64px',
            alignItems: 'center',
          }}
        >
          {techStack.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 + index * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  color: 'rgba(125,160,202,0.4)',
                  fontSize: '12px',
                  letterSpacing: '1px',
                  padding: '4px 0',
                }}
              >
                {item}
              </span>
              {index < techStack.length - 1 && (
                <span style={{ color: '#5483B3', padding: '0 4px' }}>
                  ·
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          transition={{ delay: 6 * 0.1 }}
          style={{
            display: 'flex',
            gap: isMobile ? '24px' : 0,
            paddingTop: '40px',
            borderTop: '1px solid transparent',
            borderImage: 'linear-gradient(135deg, #5483B3, #7DA0CA) 1',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              style={{
                paddingRight: isMobile ? '20px' : '40px',
                marginRight: isMobile ? '20px' : '40px',
                borderRight:
                  index === stats.length - 1
                    ? 'none'
                    : '1px solid transparent',
                marginBottom: isMobile ? '20px' : 0,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '36px',
                  fontWeight: 900,
                  color: '#7DA0CA',
                  textShadow: '0 0 20px rgba(125,160,202,0.4)',
                }}
              >
                <CountUp target={stat.target} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '11px',
                  color: '#5483B3',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {!isMobile && (
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1, y: [-5, 5, -5] }}
            transition={{
              x: { delay: 2, duration: 0.8 },
              opacity: { delay: 2, duration: 0.8 },
              y: { duration: 4, repeat: Infinity },
            }}
            style={{
              position: 'absolute',
              right: '6%',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: '1px solid transparent',
              borderImage: 'linear-gradient(135deg, #5483B3, #7DA0CA) 1',
              borderRadius: '12px',
              padding: '24px',
              width: '320px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 40px rgba(125,160,202,0.05)',
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '6px',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#FF5F57',
                }}
              />
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#FFBD2E',
                }}
              />
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#28CA41',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {visibleTerminalLines.map((line) => (
                <div
                  key={line.text}
                  style={{
                    color: line.color,
                    fontSize: '13px',
                    lineHeight: 1.5,
                  }}
                >
                  {line.text}
                </div>
              ))}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ fontWeight: 700, color: '#7DA0CA' }}
              >
                _
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hero
