import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiLayers, FiUsers } from 'react-icons/fi'
import { SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiCss, SiTailwindcss, SiMui, SiFramer, SiVite, SiRedux, SiFirebase, SiNodedotjs, SiExpress, SiWordpress, SiWix } from 'react-icons/si'
import { portfolioData } from '../data/portfolioData'
import { Section, SectionHeading, fade, stagger } from './ui'

const icons = { 'React.js': SiReact, 'Next.js': SiNextdotjs, 'JavaScript (ES6+)': SiJavascript, TypeScript: SiTypescript, HTML5: SiHtml5, 'CSS3 / SCSS': SiCss, 'Tailwind CSS': SiTailwindcss, 'Material UI': SiMui, 'Framer Motion': SiFramer, Vite: SiVite, 'Redux Toolkit': SiRedux, 'Context API': SiReact, Firebase: SiFirebase, 'Node.js': SiNodedotjs, 'Express.js': SiExpress, WordPress: SiWordpress, Wix: SiWix }
export default function Skills() {
  const cats = Object.keys(portfolioData.skills)
  const [cat, setCat] = useState(cats[0])
  return (
    <Section id="skills">
      <SectionHeading title="Skills" sub="Tools and strengths I use to plan, build, and deliver websites." />
      <div role="tablist" aria-label="Skill categories" className="mb-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
            className={`relative min-h-10 rounded-full px-4 py-2 text-sm transition-colors ${cat === c ? 'text-ink' : 'border border-line text-slate-300 hover:border-mint/50'}`}>
            {cat === c && <motion.span layoutId="skill-tab" className="absolute inset-0 -z-10 rounded-full bg-mint" />}
            {c}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.ul key={cat} role="tabpanel" variants={stagger} initial="hidden" animate="show" exit={{ opacity: 0 }} className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {portfolioData.skills[cat].map((s) => {
            const Icon = icons[s] || (cat === 'Leadership & Delivery' ? FiUsers : FiLayers)
            return (
              <motion.li key={s} variants={fade} whileHover={{ y: -4 }} className="glass flex items-center gap-3 rounded-2xl p-4 transition-colors hover:border-mint/50">
                <Icon className="shrink-0 text-2xl text-mint" aria-hidden /><span className="text-sm font-medium">{s}</span>
              </motion.li>
            )
          })}
        </motion.ul>
      </AnimatePresence>
    </Section>
  )
}