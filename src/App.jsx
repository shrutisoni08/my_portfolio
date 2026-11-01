import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Experience /><Projects /><Contact />
      </main>
      <Footer />
      {showTop && (
        <a href="#home" aria-label="Back to top" className="glass fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full text-mint hover:border-mint"><FiArrowUp /></a>
      )}
    </>
  )
}