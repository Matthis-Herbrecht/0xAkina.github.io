import Hero from './components/Hero'
import Writing from './components/Writing'
import About from './components/About'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black">
      <Hero />
      <Writing />
      <About />
      <Features />
      <Footer />
    </div>
  )
}
