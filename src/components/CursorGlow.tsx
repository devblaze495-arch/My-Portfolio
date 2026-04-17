import { useEffect, useState } from 'react'

function CursorGlow() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX)
      setMouseY(e.clientY)
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <>
      <div
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#00FF80',
          transform: `translate(${mouseX - 4}px, ${mouseY - 4}px)`,
          transition: 'transform 0.05s linear',
          boxShadow: '0 0 10px rgba(0,255,128,0.8)',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      <div
        style={{
          position: 'fixed',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,255,128,0.06), transparent 70%)',
          transform: `translate(${mouseX - 175}px, ${mouseY - 175}px)`,
          transition: 'transform 0.12s ease-out',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </>
  )
}

export default CursorGlow
