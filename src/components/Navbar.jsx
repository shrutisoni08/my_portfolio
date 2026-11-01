import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach((l) => { const el = document.getElementById(l.toLowerCase()); el && io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-x-0 border-t-0">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="text-lg font-bold tracking-tight">
          Shruti<span className="text-mint">.</span>Soni
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} aria-current={active === l.toLowerCase() ? 'page' : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${active === l.toLowerCase() ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                {active === l.toLowerCase() && <motion.span layoutId="pill" className="absolute inset-0 -z-10 rounded-full bg-white/10" />}
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button className="rounded-lg p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul id="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-line md:hidden">
            {links.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className={`block px-6 py-3.5 ${active === l.toLowerCase() ? 'text-mint' : 'text-slate-300'}`}>{l}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <motion.div style={{ scaleX: progress }} className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-mint to-iris" aria-hidden />
    </header>
  )
}