import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  const navigate = useNavigate()
  const [btnX, setBtnX] = useState(0)
  const [btnY, setBtnY] = useState(0)
  const btnRef = useRef<HTMLButtonElement | null>(null)

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
        background: 'rgba(5,5,5,0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,255,128,0.1)',
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
          color: '#00FF80',
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
              color: isActive ? '#00FF80' : 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              padding: '6px 14px',
              borderRadius: '4px',
              letterSpacing: '1px',
              border: isActive
                ? '1px solid rgba(0,255,128,0.15)'
                : '1px solid transparent',
              background: isActive ? 'rgba(0,255,128,0.06)' : 'transparent',
              transition: 'all 0.2s ease',
            })}
          >
            <motion.span
              whileHover={{
                color: '#00FF80',
              }}
              style={{ display: 'inline-block' }}
            >
              {link.label}
            </motion.span>
          </NavLink>
        ))}
      </div>

      <motion.div
        animate={{ x: btnX, y: btnY }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <motion.button
          ref={btnRef}
          onClick={() => navigate('/contact')}
          onMouseMove={(e) => {
            if (!btnRef.current) return
            const rect = btnRef.current.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2
            setBtnX(x * 0.3)
            setBtnY(y * 0.3)
          }}
          onMouseLeave={() => {
            setBtnX(0)
            setBtnY(0)
          }}
          whileHover={{
            background: 'rgba(0,255,128,0.1)',
            boxShadow: '0 0 25px rgba(0,255,128,0.3)',
          }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: 'transparent',
            border: '1px solid #00FF80',
            color: '#00FF80',
            padding: '8px 20px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            letterSpacing: '1px',
            cursor: 'pointer',
            boxShadow: '0 0 15px rgba(0,255,128,0.15)',
          }}
        >
          HIRE ME
        </motion.button>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
