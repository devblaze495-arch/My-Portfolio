import { motion } from 'framer-motion'

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
    desc: 'Full-stack grocery store website with WhatsApp ordering, product catalog and Google Maps integration.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: '#00FF80',
    cmd: 'food-market',
  },
  {
    id: 2,
    title: 'Crop Disease App',
    tag: 'AI / ML',
    desc: 'AI-powered crop disease detection using image recognition. Helps farmers identify plant diseases instantly.',
    tech: ['Python', 'TensorFlow', 'React'],
    color: '#00FF80',
    cmd: 'crop-disease-app',
  },
  {
    id: 3,
    title: 'Google Classroom Clone',
    tag: 'Full Stack',
    desc: 'Feature-complete classroom management platform with assignments, grading and real-time updates.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: '#00FF80',
    cmd: 'classroom-clone',
  },
  {
    id: 4,
    title: 'SafeEntry Pro',
    tag: 'Security',
    desc: 'Secure visitor management and entry tracking system with QR code scanning and analytics.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: '#00FF80',
    cmd: 'safeentry-pro',
  },
  {
    id: 5,
    title: 'Complaint System',
    tag: 'Full Stack',
    desc: 'End-to-end complaint management platform with ticket tracking, status updates and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB'],
    color: '#00FF80',
    cmd: 'complaint-system',
  },
  {
    id: 6,
    title: 'Resume Screener',
    tag: 'AI / ML',
    desc: 'AI-powered resume screening tool that ranks candidates based on job requirements automatically.',
    tech: ['Python', 'NLP', 'React'],
    color: '#00FF80',
    cmd: 'resume-screener',
  },
]

function Projects() {
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
        viewport={{ once: true }}
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

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '20px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{
              borderColor: 'rgba(0,255,128,0.3)',
              background: 'rgba(0,255,128,0.04)',
              y: -4,
            }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: 'rgba(0,255,128,0.02)',
              border: '1px solid rgba(0,255,128,0.08)',
              borderRadius: '12px',
              padding: '28px',
              cursor: 'pointer',
              transition: 'all 0.3s',
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
        ))}
      </div>

      <div
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
      </div>
    </section>
  )
}

export default Projects
