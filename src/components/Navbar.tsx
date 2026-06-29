import { motion } from 'framer-motion'
import { NavLink, useNavigate } from 'react-router-dom'
import AnimatedButton from './AnimatedButton'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  const navigate = useNavigate()

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: '60px',
        background: 'linear-gradient(180deg, #000000 0%, transparent 100%)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid transparent',
        borderImage: 'linear-gradient(135deg, #5483B3, #7DA0CA) 1',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 6%',
      }}
    >
      <NavLink
        to="/"
        style={{
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: '18px',
          fontWeight: 700,
          color: '#2563EB',
          textDecoration: 'none',
        }}
      >
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {'> BP_'}
        </motion.span>
      </NavLink>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            style={({ isActive }) => ({
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: '13px',
              color: isActive ? '#2563EB' : '#5483B3',
              textDecoration: 'none',
              padding: '6px 14px',
              borderRadius: '4px',
              letterSpacing: '1px',
              border: isActive
                ? '1px solid rgba(37,99,235,0.15)'
                : '1px solid transparent',
              background: isActive ? 'rgba(37,99,235,0.06)' : 'transparent',
              transition: 'all 0.2s ease',
            })}
          >
            <motion.span
              whileHover={{
                color: '#2563EB',
              }}
              style={{ display: 'inline-block' }}
            >
              {link.label}
            </motion.span>
          </NavLink>
        ))}
      </div>

      <AnimatedButton onClick={() => navigate('/contact')}>
        HIRE ME
      </AnimatedButton>
    </motion.nav>
  )
}

export default Navbar
