import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, FormEvent } from 'react'

type ContactItem = {
  icon: string
  label: string
  value: string
}

const contactItems: ContactItem[] = [
  { icon: '📧', label: 'EMAIL', value: 'bhavesh1209p@gmial.com' },
  { icon: '📱', label: 'WHATSAPP', value: '8369808262' },
  { icon: '📍', label: 'LOCATION', value: 'Panvel, Navi Mumbai' },
]

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  const nameInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!submitted) {
      nameInputRef.current?.focus()
    }
  }, [submitted])

  const inputStyle: CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#fff',
    fontSize: '14px',
    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
    outline: 'none',
    transition: 'all 0.2s ease',
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section
      id="contact"
      style={{
        background: 'linear-gradient(180deg, #050505, #020A05)',
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
          background: 'radial-gradient(ellipse, rgba(0,255,128,0.06), transparent 70%)',
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
            color: 'rgba(0,255,128,0.5)',
            marginBottom: '16px',
          }}
        >
          $ ./contact --init
        </motion.div>

        <motion.h2
          transition={{ delay: 1 * 0.1 }}
          style={{
            fontSize: 'clamp(32px,5vw,52px)',
            fontWeight: 900,
            color: '#fff',
            letterSpacing: '-2px',
            marginBottom: '16px',
            marginTop: 0,
          }}
        >
          {"Let's Build "}
          <span style={{ color: '#00FF80' }}>Together</span>
        </motion.h2>

        <motion.p
          transition={{ delay: 2 * 0.1 }}
          style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.35)',
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
              <motion.div
                key={item.label}
                whileHover={{
                  borderColor: 'rgba(0,255,128,0.25)',
                  x: 6,
                  background: 'rgba(0,255,128,0.04)',
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: 'rgba(0,255,128,0.02)',
                  border: '1px solid rgba(0,255,128,0.08)',
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
                    background: 'rgba(0,255,128,0.08)',
                    border: '1px solid rgba(0,255,128,0.15)',
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
                      color: 'rgba(0,255,128,0.5)',
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
                      color: 'rgba(255,255,255,0.7)',
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}

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
                        : 'https://www.linkedin.com/in/bhavesh-patil',
                      '_blank',
                      'noopener,noreferrer',
                    )
                  }
                  whileHover={{
                    borderColor: 'rgba(0,255,128,0.3)',
                    color: '#00FF80',
                    y: -2,
                  }}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '8px',
                    padding: '12px 20px',
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.4)',
                    cursor: 'pointer',
                  }}
                >
                  {social}
                </motion.span>
              ))}
            </div>
          </div>

          <div
            style={{
              background: 'rgba(0,255,128,0.02)',
              border: '1px solid rgba(0,255,128,0.1)',
              borderRadius: '16px',
              padding: '32px',
              position: 'relative',
            }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '6px',
                      marginBottom: '24px',
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

                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      fontSize: '13px',
                      color: 'rgba(0,255,128,0.5)',
                      marginBottom: '24px',
                    }}
                  >
                    $ send --message
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor="name"
                      style={{
                        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                        fontSize: '11px',
                        color: 'rgba(0,255,128,0.4)',
                        letterSpacing: '1px',
                        marginBottom: '8px',
                        display: 'block',
                      }}
                    >
                      {'> your_name:'}
                    </label>
                    <input
                      id="name"
                      ref={nameInputRef}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Bhavesh Patil"
                      required
                      style={inputStyle}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0,255,128,0.3)'
                        e.currentTarget.style.boxShadow =
                          '0 0 15px rgba(0,255,128,0.05)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor="email"
                      style={{
                        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                        fontSize: '11px',
                        color: 'rgba(0,255,128,0.4)',
                        letterSpacing: '1px',
                        marginBottom: '8px',
                        display: 'block',
                      }}
                    >
                      {'> your_email:'}
                    </label>
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="hello@example.com"
                      required
                      style={inputStyle}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0,255,128,0.3)'
                        e.currentTarget.style.boxShadow =
                          '0 0 15px rgba(0,255,128,0.05)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor="message"
                      style={{
                        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                        fontSize: '11px',
                        color: 'rgba(0,255,128,0.4)',
                        letterSpacing: '1px',
                        marginBottom: '8px',
                        display: 'block',
                      }}
                    >
                      {'> message:'}
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project..."
                      required
                      style={{ ...inputStyle, height: '120px', resize: 'none' }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0,255,128,0.3)'
                        e.currentTarget.style.boxShadow =
                          '0 0 15px rgba(0,255,128,0.05)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{
                      boxShadow: '0 0 40px rgba(0,255,128,0.4)',
                      scale: 1.02,
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%',
                      marginTop: '8px',
                      background: '#00FF80',
                      color: '#000000',
                      padding: '14px',
                      borderRadius: '8px',
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      fontSize: '14px',
                      fontWeight: 800,
                      border: 'none',
                      cursor: 'pointer',
                      letterSpacing: '0.5px',
                      boxShadow: '0 0 25px rgba(0,255,128,0.25)',
                    }}
                  >
                    $ send_message --now
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    textAlign: 'center',
                    padding: '40px',
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  }}
                >
                  <div style={{ color: '#00FF80', fontSize: '48px', marginBottom: '12px' }}>
                    ✓
                  </div>
                  <div
                    style={{
                      color: '#ffffff',
                      fontSize: '20px',
                      fontWeight: 800,
                      marginBottom: '10px',
                    }}
                  >
                    Message sent!
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '14px' }}>
                    I&apos;ll get back to you soon.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.footer
          transition={{ delay: 4 * 0.1 }}
          style={{
            marginTop: '120px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255,255,255,0.04)',
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
              color: 'rgba(255,255,255,0.2)',
            }}
          >
            {'> Bhavesh Patil © 2025'}
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: '11px',
              color: 'rgba(0,255,128,0.3)',
            }}
          >
            Built with React + TypeScript
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: '11px',
              color: 'rgba(255,255,255,0.15)',
            }}
          >
            Panvel, Mumbai IN
          </span>
        </motion.footer>
      </motion.div>
    </section>
  )
}

export default Contact
