import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Writing from './components/Writing'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Writing />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
