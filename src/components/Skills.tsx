import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'React / Next.js', level: 90, icon: '⚛' },
  { name: 'Node.js / Express', level: 85, icon: '🟢' },
  { name: 'MongoDB', level: 80, icon: '🍃' },
  { name: 'TypeScript', level: 78, icon: '📘' },
  { name: 'Python', level: 75, icon: '🐍' },
  { name: 'AI / ML', level: 65, icon: '🤖' },
]

type TechAnimation = 'snake' | 'orbit' | 'pulse' | 'float' | 'bounce' | 'blink'
type Tech = {
  name: string
  symbol: string
  color: string
  animation: TechAnimation
}

const techs: Tech[] = [
  { name: 'Python', symbol: '🐍', color: '#3776AB', animation: 'snake' },
  { name: 'React', symbol: '⚛', color: '#61DAFB', animation: 'orbit' },
  { name: 'Node.js', symbol: '☕', color: '#339933', animation: 'pulse' },
  { name: 'MongoDB', symbol: '🍃', color: '#47A248', animation: 'float' },
  { name: 'TypeScript', symbol: '📘', color: '#3178C6', animation: 'bounce' },
  { name: 'AI/ML', symbol: '🤖', color: '#FF6B6B', animation: 'blink' },
]

function getIconAnimation(animation: TechAnimation) {
  if (animation === 'snake') {
    return {
      animate: { rotate: [0, 10, -10, 10, 0], y: [0, -4, 4, -4, 0] },
      transition: { duration: 2, repeat: Infinity as const },
    }
  }
  if (animation === 'orbit') {
    return {
      animate: { rotate: [0, 360] },
      transition: { duration: 8, repeat: Infinity as const, ease: 'linear' as const },
    }
  }
  if (animation === 'pulse') {
    return {
      animate: { scale: [1, 1.2, 1], opacity: [1, 0.7, 1] },
      transition: { duration: 1.5, repeat: Infinity as const },
    }
  }
  if (animation === 'float') {
    return {
      animate: { y: [0, -8, 0] },
      transition: { duration: 2, repeat: Infinity as const, ease: 'easeInOut' as const },
    }
  }
  if (animation === 'bounce') {
    return {
      animate: { y: [0, -12, 0] },
      transition: { duration: 0.8, repeat: Infinity as const, ease: 'easeInOut' as const },
    }
  }
  return {
    animate: { opacity: [1, 0.3, 1], scale: [1, 1.1, 1] },
    transition: { duration: 1.2, repeat: Infinity as const },
  }
}

function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <section
        id="skills"
        ref={sectionRef}
        style={{
          background: '#050505',
          padding: '120px 6%',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <AnimatePresence>
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(0,255,128,0.03), transparent 70%)',
                pointerEvents: 'none',
              }}
            />
          )}
        </AnimatePresence>

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
            $ cat ./skills.json
          </motion.div>

          <motion.h2
            transition={{ delay: 1 * 0.1 }}
            style={{
              fontSize: 'clamp(32px,5vw,52px)',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '-2px',
              marginBottom: '64px',
              marginTop: 0,
            }}
          >
            Skills &amp; Stack
          </motion.h2>

          <motion.div
            transition={{ delay: 2 * 0.1 }}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '48px',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '13px',
                  color: 'rgba(0,255,128,0.4)',
                  marginBottom: '32px',
                }}
              >
                // proficiency_levels
              </div>

              {skills.map((skill, index) => (
                <div key={skill.name} style={{ marginBottom: '24px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>{skill.icon}</span>
                      <span
                        style={{
                          color: 'rgba(255,255,255,0.7)',
                          fontSize: '14px',
                          fontWeight: 600,
                        }}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                        fontSize: '13px',
                        color: '#00FF80',
                      }}
                    >
                      {`${skill.level}%`}
                    </span>
                  </div>
                  <div
                    style={{
                      height: '4px',
                      background: 'rgba(255,255,255,0.06)',
                      borderRadius: '2px',
                      marginTop: '10px',
                      overflow: 'hidden',
                    }}
                  >
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.1,
                        ease: 'easeOut',
                      }}
                      style={{
                        height: '100%',
                        borderRadius: '2px',
                        background:
                          'linear-gradient(90deg, #00FF80, rgba(0,255,128,0.4))',
                        boxShadow: '0 0 8px rgba(0,255,128,0.4)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '13px',
                  color: 'rgba(0,255,128,0.4)',
                  marginBottom: '32px',
                }}
              >
                // tech_stack
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                }}
              >
                {techs.map((tech) => {
                  const anim = getIconAnimation(tech.animation)
                  return (
                    <motion.div
                      key={tech.name}
                      whileHover={{
                        borderColor: 'rgba(0,255,128,0.3)',
                        background: 'rgba(0,255,128,0.03)',
                        scale: 1.05,
                      }}
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '12px',
                        padding: '20px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        animate={anim.animate}
                        transition={anim.transition}
                        style={{ fontSize: '32px', marginBottom: '8px' }}
                      >
                        {tech.symbol}
                      </motion.div>
                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: 700,
                          color: 'rgba(255,255,255,0.6)',
                          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                          marginTop: '8px',
                        }}
                      >
                        {tech.name}
                      </div>
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: tech.color,
                          margin: '8px auto 0',
                          boxShadow: `0 0 8px ${tech.color}`,
                        }}
                      />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <footer
        style={{
          background: '#050505',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          padding: '32px 6%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: 'JetBrains Mono',
            fontSize: 12,
            color: 'rgba(255,255,255,0.2)',
          }}
        >
          {'>'} Bhavesh Patil © 2025
        </span>
        <span
          style={{
            fontFamily: 'JetBrains Mono',
            fontSize: 11,
            color: 'rgba(0,255,128,0.3)',
          }}
        >
          Built with React + TypeScript
        </span>
        <span
          style={{
            fontFamily: 'JetBrains Mono',
            fontSize: 11,
            color: 'rgba(255,255,255,0.15)',
          }}
        >
          Panvel, Mumbai IN
        </span>
      </footer>
    </>
  )
}

export default Skills
