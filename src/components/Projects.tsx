import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Project = {
  id: number
  title: string
  tag: string
  desc: string
  tech: string[]
  color: string
  cmd: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Food Market',
    tag: 'Web App',
    desc: 'Built a full grocery store website for a local shop in Panvel. WhatsApp ordering, product catalog, Google Maps, mobile-first.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: '#00FF80',
    cmd: 'food-market',
  },
  {
    id: 2,
    title: 'Crop Disease App',
    tag: 'AI / ML',
    desc: 'AI model that detects crop diseases from phone photos. Helps farmers get instant diagnosis without visiting an expert.',
    tech: ['Python', 'TensorFlow', 'React'],
    color: '#00FF80',
    cmd: 'crop-disease-app',
  },
  {
    id: 3,
    title: 'Google Classroom Clone',
    tag: 'Full Stack',
    desc: 'Full clone of Google Classroom with assignments, grading, student/teacher roles and real-time updates.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: '#00FF80',
    cmd: 'classroom-clone',
  },
  {
    id: 4,
    title: 'SafeEntry Pro',
    tag: 'Security',
    desc: 'Visitor management system with QR code scanning, entry logs and admin dashboard. Built for secure premises.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: '#00FF80',
    cmd: 'safeentry-pro',
  },
  {
    id: 5,
    title: 'Complaint System',
    tag: 'Full Stack',
    desc: 'End-to-end complaint tracking platform. Users raise tickets, admins resolve them. Status updates in real time.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: '#00FF80',
    cmd: 'complaint-system',
  },
  {
    id: 6,
    title: 'Resume Screener',
    tag: 'AI / ML',
    desc: 'AI tool that reads resumes and ranks candidates automatically based on job requirements. Saves hours of manual screening.',
    tech: ['Python', 'NLP', 'React'],
    color: '#00FF80',
    cmd: 'resume-screener',
  },
]

function Projects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [tilts, setTilts] = useState<Record<number, { x: number; y: number }>>({})
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [previewX, setPreviewX] = useState(0)
  const [previewY, setPreviewY] = useState(0)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section
      id="projects"
      style={{
        background: '#050505',
        padding: '120px 6%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>
        {`
          @keyframes borderGlow {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
          }
        `}
      </style>
      <div
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0 * 0.1 }}
        style={{
          marginBottom: '64px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: '13px',
            color: 'rgba(0,255,128,0.5)',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          $ ls ./projects
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              width: '3px',
              height: '40px',
              background: 'linear-gradient(#00FF80, transparent)',
              borderRadius: '2px',
              marginRight: '16px',
              flexShrink: 0,
            }}
          />
          <h2
            style={{
              fontSize: 'clamp(32px,5vw,52px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-2px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              margin: 0,
            }}
          >
            My Work
            <span
              style={{
                color: '#00FF80',
                fontSize: '16px',
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontWeight: 400,
              }}
            >
              {'// 6 projects'}
            </span>
          </h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 1 * 0.1 }}
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '20px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            style={{
              position: 'relative',
              padding: '1px',
              borderRadius: '13px',
              background:
                hoveredId === project.id
                  ? 'linear-gradient(90deg, #00FF80, rgba(0,255,128,0.2), #00FF80)'
                  : 'transparent',
              backgroundSize: '200% 200%',
              animation: hoveredId === project.id ? 'borderGlow 2s linear infinite' : 'none',
            }}
          >
            <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = (e.clientX - rect.left) / rect.width - 0.5
              const y = (e.clientY - rect.top) / rect.height - 0.5
              setTilts((prev) => ({ ...prev, [project.id]: { x: y * 12, y: x * -12 } }))
              setPreviewX(e.clientX)
              setPreviewY(e.clientY)
            }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => {
              setTilts((prev) => ({ ...prev, [project.id]: { x: 0, y: 0 } }))
              setHoveredId(null)
            }}
            animate={{
              rotateX: tilts[project.id]?.x || 0,
              rotateY: tilts[project.id]?.y || 0,
            }}
            whileHover={{
              borderColor: 'rgba(0,255,128,0.3)',
              background: 'rgba(0,255,128,0.04)',
              y: -4,
            }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: 'rgba(0,255,128,0.02)',
              border: 'none',
              borderRadius: '12px',
              padding: '28px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
              }}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '20px',
                gap: '12px',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    fontSize: '12px',
                    color: 'rgba(0,255,128,0.4)',
                    marginBottom: '8px',
                  }}
                >
                  {`$ ./${project.cmd}`}
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 800,
                    color: '#ffffff',
                    letterSpacing: '-0.5px',
                    margin: 0,
                  }}
                >
                  {project.title}
                </h3>
              </div>
              <span
                style={{
                  background: 'rgba(0,255,128,0.08)',
                  border: '1px solid rgba(0,255,128,0.15)',
                  color: '#00FF80',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap',
                }}
              >
                {project.tag}
              </span>
            </div>

            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              {project.desc}
            </p>

            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '20px',
              }}
            >
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.35)',
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              <motion.span
                whileHover={{ color: '#00FF80', x: 4 }}
                style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '12px',
                  color: 'rgba(0,255,128,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                }}
              >
                → view_project
              </motion.span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.1)',
                }}
              >
                {`0${index + 1}`}
              </span>
            </div>
            </motion.article>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 2 * 0.1 }}
        style={{
          textAlign: 'center',
          marginTop: '64px',
          paddingTop: '48px',
          borderTop: '1px solid rgba(0,255,128,0.06)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: '13px',
            color: 'rgba(255,255,255,0.25)',
            marginBottom: '20px',
          }}
        >
          $ more --coming-soon
        </p>
      </motion.div>
      <AnimatePresence>
        {hoveredId !== null && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'fixed',
              top: `${previewY - 120}px`,
              left: `${previewX + 20}px`,
              width: '200px',
              height: '120px',
              background: 'rgba(0,255,128,0.05)',
              border: '1px solid rgba(0,255,128,0.2)',
              borderRadius: '8px',
              zIndex: 9997,
              backdropFilter: 'blur(10px)',
              pointerEvents: 'none',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            }}
          >
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#00FF80', lineHeight: 1.2 }}>
              {projects.find((p) => p.id === hoveredId)?.title}
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(0,255,128,0.7)' }}>
              {projects.find((p) => p.id === hoveredId)?.tag}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
