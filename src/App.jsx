
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
