import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Experience from './sections/Experience.jsx'
import Hero from './sections/Hero.jsx'
import Reservation from './sections/Reservation.jsx'
import Reviews from './sections/Reviews.jsx'
import SignatureDishes from './sections/SignatureDishes.jsx'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main>
        <Hero />
        <About />
        <SignatureDishes />
        <Experience />
        <Reviews />
        <Reservation />
        <Contact />
      </main>

      <Footer />
      <Analytics />
    </div>
  )
}

export default App
