import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <div style={{ background: '#050505', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  )
}

export default App
