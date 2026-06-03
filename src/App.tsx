import Hero from './components/Hero'
import Writing from './components/Writing'
import About from './components/About'
import Experience from './components/Experience'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black">
      <Hero />
      <Writing />
      <About />
      <Experience />
      <Features />
      <Contact />
      <Footer />
    </div>
  )
}
