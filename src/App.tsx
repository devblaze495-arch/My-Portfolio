import { Route, Routes } from 'react-router-dom'
import SplashCursor from './components/SplashCursor'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
    <SplashCursor
      RAINBOW_MODE={false}
      COLOR="#FFFFFF"
      DENSITY_DISSIPATION={3.5}
      VELOCITY_DISSIPATION={2}
      SPLAT_RADIUS={0.2}
      SPLAT_FORCE={6000}
      TRANSPARENT={true}
    />
    </>
  )
}

export default App
