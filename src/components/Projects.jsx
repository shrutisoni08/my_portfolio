import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'
import { Badge, Section, SectionHeading, fade, stagger } from './ui'

function Card({ p }) {
  const [imgOk, setImgOk] = useState(Boolean(p.image))
  return (
    <motion.article variants={fade} whileHover={{ y: -6 }} className={`glass group flex flex-col overflow-hidden rounded-2xl transition-colors hover:border-mint/60 ${p.featured ? 'md:col-span-1' : ''}`}>
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-iris/20 via-panel to-mint/20">
        {imgOk
          ? <img src={p.image} alt={`${p.title} preview`} loading="lazy" width="640" height="360" onError={() => setImgOk(false)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          : <div className="grid h-full place-items-center px-4 text-center text-xl font-semibold text-white/40">{p.title}</div>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {p.featured && <span className="mb-2 w-fit rounded-full bg-mint/15 px-2.5 py-0.5 text-xs font-medium text-mint">Featured</span>}
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
        {(p.live || p.github) && (
          <div className="mt-5 flex gap-3">
            {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-full bg-mint px-4 text-sm font-semibold text-ink"><FiExternalLink aria-hidden /> Live Demo</a>}
            {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line px-4 text-sm hover:border-mint/60"><FiGithub aria-hidden /> Source Code</a>}
          </div>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading title="Projects" sub="A mix of professional delivery and personal builds." />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.projects.map((p) => <Card key={p.title} p={p} />)}
      </motion.div>
    </Section>
  )
}