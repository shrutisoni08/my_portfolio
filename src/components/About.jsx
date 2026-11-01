import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiDownload } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'
import { Button, Section, SectionHeading, fade, stagger } from './ui'

export default function About() {
  const { about, quote, highlights, profileImage, resume, name } = portfolioData.personal
  const [imgOk, setImgOk] = useState(true)
  return (
    <Section id="about">
      <SectionHeading title="About Me" />
      <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-mint/25 to-iris/25 blur-2xl" />
          <motion.div whileHover={{ scale: 1.02 }} className="relative overflow-hidden rounded-3xl border border-line">
            {imgOk
              ? <img src={profileImage} alt={`Portrait of ${name}`} loading="lazy" width="480" height="600" onError={() => setImgOk(false)} className="aspect-[4/5] w-full object-cover" />
              : <div className="grid aspect-[4/5] place-items-center bg-panel text-6xl font-bold text-white/20">SS</div>}
          </motion.div>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {about.map((p) => <motion.p key={p.slice(0, 20)} variants={fade} className="mb-4 leading-relaxed text-slate-300">{p}</motion.p>)}
          <motion.blockquote variants={fade} className="my-6 border-l-2 border-mint pl-4 italic text-slate-400">{quote}</motion.blockquote>
          <motion.ul variants={stagger} className="mb-8 grid gap-2.5 sm:grid-cols-2">
            {highlights.map((h) => (
              <motion.li variants={fade} key={h} className="flex items-start gap-2 text-sm text-slate-300"><FiCheck className="mt-0.5 shrink-0 text-mint" aria-hidden />{h}</motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fade}><Button href={resume} download><FiDownload aria-hidden /> Download Resume</Button></motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
