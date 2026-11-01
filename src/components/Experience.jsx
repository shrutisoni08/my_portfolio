import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { Badge, Section, SectionHeading, fade } from './ui'

export default function Experience() {
  const { experience, internships, certifications } = portfolioData
  return (
    <Section id="experience">
      <SectionHeading title="Experience" sub="Corporate, product, and freelance roles, from junior developer to team lead." />
      <ol className="relative ml-3 border-l border-line sm:ml-4">
        {experience.map((job) => (
          <motion.li key={job.company + job.period} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="relative pb-12 pl-7 last:pb-0 sm:pl-10">
            <span aria-hidden className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-mint bg-ink shadow-[0_0_12px_var(--color-mint)]" />
            <time className="text-sm text-mint">{job.period}</time>
            <h3 className="mt-1 text-xl font-semibold">{job.role}</h3>
            <p className="text-slate-400">{job.company}</p>
            <div className="glass mt-4 rounded-2xl p-5">
              <p className="mb-3 leading-relaxed text-slate-300">{job.summary}</p>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-400 marker:text-mint">{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <div className="mt-4 flex flex-wrap gap-2">{job.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
            </div>
          </motion.li>
        ))}
      </ol>
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="mb-4 text-lg font-semibold">Internships</h3>
          <ul className="space-y-3">{internships.map((i) => (
            <li key={i.company} className="glass rounded-xl p-4"><p className="font-medium">{i.role}</p><p className="text-sm text-slate-400">{i.company} · {i.period}</p></li>
          ))}</ul>
        </motion.div>
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="mb-4 text-lg font-semibold">Certifications</h3>
          <ul className="space-y-3">{certifications.map((c) => <li key={c} className="glass rounded-xl p-4 text-sm">{c}</li>)}</ul>
        </motion.div>
      </div>
    </Section>
  )
}