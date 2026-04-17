import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const lines = [
  { cmd: true, text: '$ cat about.txt' },
  { cmd: false, text: 'Name: Bhavesh Patil' },
  { cmd: false, text: 'Role: Full Stack Dev' },
  { cmd: true, text: '$ ./skills --top' },
  { cmd: false, text: 'React, Node.js' },
  { cmd: false, text: 'MongoDB, Python, AI' },
  { cmd: true, text: '$ status' },
  { cmd: false, text: '● Available for hire' },
]

function About() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) {
          window.clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 300)
    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        background: '#050505',
        padding: '80px 6% 40px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '64px',
          alignItems: 'start',
        }}
      >
        <div>
          <div
            style={{
              background: 'rgba(0,255,128,0.06)',
              border: '1px solid rgba(0,255,128,0.15)',
              color: '#00FF80',
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: '12px',
              padding: '6px 16px',
              borderRadius: '4px',
              display: 'inline-block',
              marginBottom: '24px',
            }}
          >
            {'// WHO_I_AM'}
          </div>

          <h2
            style={{
              fontSize: 'clamp(32px,5vw,52px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-2px',
              marginBottom: '24px',
              marginTop: 0,
            }}
          >
            About Me
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: '15px',
              lineHeight: 1.8,
              marginBottom: '16px',
            }}
          >
            {
              "I'm a Full Stack Developer from Panvel, Navi Mumbai. I build web apps and AI-powered tools that solve real problems for real people."
            }
          </p>

          <p
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: '15px',
              lineHeight: 1.8,
              marginBottom: '16px',
            }}
          >
            {
              '10+ projects shipped. Comfortable with React, Node.js, MongoDB, Python and AI/ML. Currently open to freelance projects.'
            }
          </p>

          <motion.button
            onClick={() => window.alert('CV coming soon!')}
            whileHover={{
              borderColor: '#00FF80',
              background: 'rgba(0,255,128,0.06)',
              y: -2,
            }}
            style={{
              background: 'transparent',
              border: '1px solid rgba(0,255,128,0.3)',
              color: '#00FF80',
              padding: '12px 24px',
              borderRadius: '6px',
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: '13px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {'$ download_cv'}
          </motion.button>
        </div>

        <div
          style={{
            display: isMobile ? 'none' : 'block',
            background: 'rgba(0,255,128,0.02)',
            border: '1px solid rgba(0,255,128,0.1)',
            borderRadius: '12px',
            padding: '24px',
            height: 'fit-content',
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

          <div>
            {lines.slice(0, visibleLines).map((line) => (
              <div
                key={line.text}
                style={{
                  color: line.cmd ? 'rgba(0,255,128,0.5)' : 'rgba(255,255,255,0.6)',
                  fontSize: '13px',
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  marginBottom: '8px',
                }}
              >
                {line.text}
              </div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              style={{
                color: '#00FF80',
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              }}
            >
              _
            </motion.span>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
