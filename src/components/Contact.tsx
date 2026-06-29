import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import AnimatedCard from './AnimatedCard'

type ContactItem = {
  icon: string
  label: string
  value: string
}

const contactItems: ContactItem[] = [
  { icon: '📧', label: 'EMAIL', value: 'bhavesh1209p@gmail.com' },
  { icon: '📱', label: 'WHATSAPP', value: '8369808262' },
  { icon: '📍', label: 'LOCATION', value: ' Mumbai, India' } ,
]

function Contact() {
  const [, setName] = useState('')
  const [, setEmail] = useState('')
  const [, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [currentField, setCurrentField] = useState<'name' | 'email' | 'message' | 'done'>('name')
  const [terminalLines, setTerminalLines] = useState<string[]>([
    '$ ./contact --init',
    'Initializing secure connection...',
    'Connection established.',
    '---',
  ])

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleTerminalSubmit = (value: string) => {
    if (currentField === 'name') {
      setName(value)
      setTerminalLines((prev) => [...prev, `> your_name: ${value}`, ''])
      setCurrentField('email')
    } else if (currentField === 'email') {
      setEmail(value)
      setTerminalLines((prev) => [...prev, `> your_email: ${value}`, ''])
      setCurrentField('message')
    } else if (currentField === 'message') {
      setMessage(value)
      setTerminalLines((prev) => [
        ...prev,
        `> message: ${value}`,
        '',
        '$ send_message --now',
        'Message sent successfully. ✓',
      ])
      setCurrentField('done')
      setSubmitted(true)
    }
  }

  return (
    <section
      id="contact"
      style={{
        background: 'transparent',
        padding: '120px 6%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          borderRadius: '50%',
          background: 'transparent',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div
          transition={{ delay: 0 * 0.1 }}
          style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: '13px',
            color: 'rgba(125,160,202,0.5)',
            marginBottom: '16px',
          }}
        >
          $ ./contact --init
        </motion.div>

        <motion.h2
          className="gradient-heading-text"
          transition={{ delay: 1 * 0.1 }}
          style={{
            fontSize: 'clamp(32px,5vw,52px)',
            fontWeight: 900,
            letterSpacing: '-2px',
            marginBottom: '16px',
            marginTop: 0,
          }}
        >
          {"Let's Build "}
          <span className="gradient-heading-text">Together</span>
        </motion.h2>

        <motion.p
          transition={{ delay: 2 * 0.1 }}
          style={{
            fontSize: '16px',
            color: '#5483B3',
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            marginBottom: '64px',
          }}
        >
          // open to freelance projects & collaborations
        </motion.p>

        <motion.div
          transition={{ delay: 3 * 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          <div>
            {contactItems.map((item) => (
              <AnimatedCard key={item.label}>
              <motion.div
                whileHover={{
                  borderColor: 'rgba(5,38,89,0.25)',
                  x: 6,
                  background: 'transparent',
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: 'transparent',
                  border: '1px solid transparent',
                  borderImage: 'linear-gradient(135deg, #5483B3, #7DA0CA) 1',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '16px',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    background: 'transparent',
                    border: '1px solid transparent',
                    borderImage: 'linear-gradient(135deg, #5483B3, #7DA0CA) 1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      fontSize: '11px',
                      color: 'rgba(125,160,202,0.5)',
                      letterSpacing: '1px',
                      marginBottom: '4px',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#5483B3',
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </motion.div>
              </AnimatedCard>
            ))}

            <AnimatedCard>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginTop: '32px',
              }}
            >
              {['GitHub', 'LinkedIn'].map((social) => (
                <motion.span
                  key={social}
                  onClick={() =>
                    window.open(
                      social === 'GitHub'
                        ? 'https://github.com/devblaze495-arch'
                        : 'https://www.linkedin.com/in/bhavesh-patil-a207643ab/',
                      '_blank',
                      'noopener,noreferrer',
                    )
                  }
                  whileHover={{
                    borderColor: 'rgba(37,99,235,0.3)',
                    color: '#2563EB',
                    y: -2,
                  }}
                  style={{
                    background: 'transparent',
                    border: '1px solid transparent',
                    borderImage: 'linear-gradient(135deg, #5483B3, #7DA0CA) 1',
                    borderRadius: '8px',
                    padding: '12px 20px',
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: '12px',
                    color: '#5483B3',
                    cursor: 'pointer',
                  }}
                >
                  {social}
                </motion.span>
              ))}
            </div>
            </AnimatedCard>
          </div>

          <div
            style={{
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '24px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '14px',
              color: '#fff',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
            </div>

            <div style={{ flex: 1, overflowY: 'auto', marginBottom: '12px' }}>
              {terminalLines.map((line, i) => (
                <div
                  key={i}
                  style={{
                    color: line.startsWith('$')
                      ? '#7DA0CA'
                      : line.startsWith('>')
                        ? '#C1E8FF'
                        : 'rgba(255,255,255,0.5)',
                    marginBottom: '4px',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {line}
                </div>
              ))}
            </div>

            {!submitted && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#7DA0CA' }}>
                  {currentField === 'name' && '> your_name:'}
                  {currentField === 'email' && '> your_email:'}
                  {currentField === 'message' && '> message:'}
                </span>
                <input
                  autoFocus
                  type={currentField === 'email' ? 'email' : 'text'}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '14px',
                    flex: 1,
                    caretColor: '#7DA0CA',
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const val = (e.target as HTMLInputElement).value.trim()
                      if (val) {
                        handleTerminalSubmit(val)
                        ;(e.target as HTMLInputElement).value = ''
                      }
                    }
                  }}
                />
              </div>
            )}

            {submitted && (
              <div style={{ color: '#28c840', marginTop: '8px' }}>
                ✓ Message queued. I&apos;ll get back to you soon.
              </div>
            )}
          </div>
        </motion.div>

        <motion.footer
          transition={{ delay: 4 * 0.1 }}
          style={{
            marginTop: '120px',
            paddingTop: '40px',
            borderTop: '1px solid transparent',
            borderImage: 'linear-gradient(135deg, #5483B3, #7DA0CA) 1',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: '12px',
              color: '#5483B3',
            }}
          >
            {'> Bhavesh Patil © 2025'}
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: '11px',
              color: 'rgba(125,160,202,0.3)',
            }}
          >
            Built with React + TypeScript
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: '11px',
              color: '#5483B3',
            }}
          >
            Mumbai, India
          </span>
        </motion.footer>
      </motion.div>
    </section>
  )
}

export default Contact
