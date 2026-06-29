import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import AnimatedCard from './AnimatedCard'
import AnimatedButton from './AnimatedButton'

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
        background: 'transparent',
        padding: '120px 6% 80px',
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
          <AnimatedCard>
          <div
            style={{
              background: 'transparent',
              border: '1px solid transparent',
              borderImage: 'linear-gradient(135deg, #5483B3, #7DA0CA) 1',
              color: '#7DA0CA',
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
          </AnimatedCard>

          <h2
            className="gradient-heading-text"
            style={{
              fontSize: 'clamp(32px,5vw,52px)',
              fontWeight: 900,
              letterSpacing: '-2px',
              marginBottom: '24px',
              marginTop: 0,
            }}
          >
            About Me
          </h2>

          <p
            style={{
              color: '#5483B3',
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
              color: '#5483B3',
              fontSize: '15px',
              lineHeight: 1.8,
              marginBottom: '16px',
            }}
          >
            {
              '10+ projects shipped. Comfortable with React, Node.js, MongoDB, Python and AI/ML. Currently open to freelance projects.'
            }
          </p>

          <AnimatedButton onClick={() => window.alert('CV coming soon!')}>
            {'$ download_cv'}
          </AnimatedButton>
        </div>

        <AnimatedCard>
        <div
          style={{
            display: isMobile ? 'none' : 'block',
            background: 'transparent',
            border: '1px solid transparent',
            borderImage: 'linear-gradient(135deg, #5483B3, #7DA0CA) 1',
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
                  color: line.cmd ? 'rgba(125,160,202,0.5)' : '#5483B3',
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
                color: '#7DA0CA',
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              }}
            >
              _
            </motion.span>
          </div>
        </div>
        </AnimatedCard>
      </div>
    </motion.section>
  )
}

export default About
