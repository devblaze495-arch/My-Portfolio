import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

type TerminalLine = {
  text: string
  color: string
}

const terminalLines: TerminalLine[] = [
  { text: '$ skills --list', color: 'rgba(0,255,128,0.5)' },
  { text: 'React, Node.js', color: 'rgba(255,255,255,0.7)' },
  { text: 'MongoDB, TypeScript', color: 'rgba(255,255,255,0.7)' },
  { text: 'Python, AI/ML', color: 'rgba(255,255,255,0.7)' },
  { text: '$ status', color: 'rgba(0,255,128,0.5)' },
  { text: '● Available for hire', color: '#00FF80' },
  { text: '$ location', color: 'rgba(0,255,128,0.5)' },
  { text: 'Panvel, Mumbai IN', color: 'rgba(255,255,255,0.7)' },
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
  { num: '10+', label: 'PROJECTS' },
  { num: '05+', label: 'CLIENTS' },
  { num: '02+', label: 'YEARS' },
]

const whoAmIText = '> whoami'

function useWindowWidth() {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return width
}

function Hero() {
  const width = useWindowWidth()
  const isMobile = width < 768
  const isDesktop = width > 1024

  const [typedWhoAmI, setTypedWhoAmI] = useState('')
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
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 2px)',
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
          background: 'radial-gradient(circle, rgba(0,255,128,0.06), transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(0,255,128,0.04), transparent 70%)',
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
          backgroundImage:
            'linear-gradient(rgba(0,255,128,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,128,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: isMobile ? '120px 5% 56px' : '140px 6% 80px',
          maxWidth: '900px',
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: '14px',
            color: 'rgba(0,255,128,0.6)',
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
              background: '#00FF80',
            }}
          />
          <span>{typedWhoAmI}</span>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <motion.span
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            style={{
              fontSize: isMobile ? '52px' : 'clamp(52px, 8vw, 96px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-3px',
              lineHeight: 1,
              display: 'block',
            }}
          >
            BHAVESH
          </motion.span>
          <motion.span
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            style={{
              fontSize: isMobile ? '52px' : 'clamp(52px, 8vw, 96px)',
              fontWeight: 900,
              letterSpacing: '-3px',
              lineHeight: 1,
              display: 'block',
              color: '#00FF80',
              textShadow: '0 0 40px rgba(0,255,128,0.5), 0 0 80px rgba(0,255,128,0.2)',
            }}
          >
            PATIL_
          </motion.span>
        </div>

        <div
          style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: '18px',
            color: 'rgba(255,255,255,0.5)',
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
              background: 'linear-gradient(90deg, #00FF80, transparent)',
            }}
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            {'<FullStackDev />'}
          </motion.span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.7,
            maxWidth: '500px',
            marginBottom: '44px',
            fontWeight: 400,
            whiteSpace: 'pre-line',
          }}
        >
          {'Building high-performance web apps and AI-powered\ntools from Panvel, Mumbai. 10+ projects shipped,\n5+ happy clients.'}
        </motion.p>

        <div
          style={{
            display: 'flex',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '60px',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
          }}
        >
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            whileHover={{
              scale: 1.04,
              y: -2,
              boxShadow: '0 0 50px rgba(0,255,128,0.5)',
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              background: '#00FF80',
              color: '#000000',
              padding: '13px 28px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 800,
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.5px',
              boxShadow: '0 0 30px rgba(0,255,128,0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              width: isMobile ? '100%' : 'auto',
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}
          >
            ./view_work
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            whileHover={{
              background: 'rgba(0,255,128,0.08)',
              borderColor: '#00FF80',
              boxShadow: '0 0 20px rgba(0,255,128,0.15)',
              y: -2,
            }}
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              background: 'transparent',
              border: '1px solid rgba(0,255,128,0.3)',
              color: '#00FF80',
              padding: '13px 28px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.5px',
              width: isMobile ? '100%' : 'auto',
            }}
          >
            ./contact_me
          </motion.button>
        </div>

        <div
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
                  color: 'rgba(0,255,128,0.4)',
                  fontSize: '12px',
                  letterSpacing: '1px',
                  padding: '4px 0',
                }}
              >
                {item}
              </span>
              {index < techStack.length - 1 && (
                <span style={{ color: 'rgba(255,255,255,0.1)', padding: '0 4px' }}>
                  ·
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            gap: 0,
            paddingTop: '40px',
            borderTop: '1px solid rgba(0,255,128,0.08)',
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
                    : '1px solid rgba(0,255,128,0.08)',
                marginBottom: isMobile ? '20px' : 0,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '36px',
                  fontWeight: 900,
                  color: '#00FF80',
                  textShadow: '0 0 20px rgba(0,255,128,0.4)',
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.25)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isDesktop && (
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
              background: 'rgba(0,255,128,0.03)',
              border: '1px solid rgba(0,255,128,0.12)',
              borderRadius: '12px',
              padding: '24px',
              width: '320px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 40px rgba(0,255,128,0.05)',
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
                style={{ fontWeight: 700, color: '#00FF80' }}
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
