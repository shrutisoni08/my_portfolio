import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

export function Section({ id, children, className = '' }) {
  return <section id={id} className={`relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28 ${className}`}>{children}</section>
}

export function SectionHeading({ title, sub }) {
  return (
    <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-mint to-iris" />
      {sub && <p className="mt-4 max-w-xl text-slate-400">{sub}</p>}
    </motion.div>
  )
}

export function Button({ href, children, variant = 'primary', arrow = false, ...rest }) {
  const style = variant === 'primary'
    ? 'bg-mint text-ink hover:shadow-[0_0_28px_-4px_var(--color-mint)]'
    : 'border border-line bg-panel/60 text-slate-100 hover:border-mint/60'
  const El = href ? motion.a : motion.button
  return (
    <El href={href} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} {...rest}
      className={`group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-shadow ${style}`}>
      {children}{arrow && <FiArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden />}
    </El>
  )
}

export function Badge({ children }) {
  return <span className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">{children}</span>
}