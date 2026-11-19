import './App.css'
import './components/shared/sections.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import GridGap from './components/GridGap/GridGap'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="stage">
      <main className="card">
        <div className="hero-screen">
          <Nav />
          <Hero />
        </div>
        <GridGap />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
