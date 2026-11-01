import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'
import { Button, Section, SectionHeading, fade } from './ui'

const field = 'w-full rounded-xl border border-line bg-panel/80 px-4 py-3 text-sm placeholder:text-slate-500 focus:border-mint focus:outline-none'

export default function Contact() {
  const { contactHeading, contactText, contactSecondary } = portfolioData.personal
  const { contact, socialLinks, formEndpoint } = portfolioData
  const [status, setStatus] = useState('')

  const items = [
    contact.email && { Icon: FiMail, label: contact.email, href: `mailto:${contact.email}` },
    contact.phone && { Icon: FiPhone, label: contact.phone, href: `tel:${contact.phone}` },
    contact.location && { Icon: FiMapPin, label: contact.location },
    socialLinks.linkedin && { Icon: FiLinkedin, label: 'LinkedIn', href: socialLinks.linkedin },
    socialLinks.github && { Icon: FiGithub, label: 'GitHub', href: socialLinks.github },
  ].filter(Boolean)

  async function onSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    if (formEndpoint) {
      try {
        const res = await fetch(formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
        setStatus(res.ok ? 'Message sent. Thank you!' : 'Could not send the message. Please try again.')
        if (res.ok) e.currentTarget.reset()
      } catch { setStatus('Could not send the message. Please try again.') }
    } else if (contact.email) {
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`${data.message}\n\n${data.name} (${data.email})`)}`
    } else {
      setStatus('Form is not connected yet. Add an email or form endpoint in portfolioData.js.')
    }
  }

  return (
    <Section id="contact">
      <SectionHeading title={contactHeading} />
      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="leading-relaxed text-slate-300">{contactText}</p>
          <p className="mt-4 leading-relaxed text-slate-400">{contactSecondary}</p>
          <ul className="mt-8 space-y-3">
            {items.map(({ Icon, label, href }) => (
              <li key={label}>
                {href
                  ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-mint/60"><Icon className="text-mint" aria-hidden />{label}</a>
                  : <span className="glass flex items-center gap-3 rounded-xl p-4"><Icon className="text-mint" aria-hidden />{label}</span>}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.form variants={fade} initial="hidden" whileInView="show" viewport={{ once: true }} onSubmit={onSubmit} className="glass space-y-4 rounded-2xl p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">Name<input name="name" required autoComplete="name" className={`${field} mt-1.5`} placeholder="Your name" /></label>
            <label className="block text-sm">Email<input name="email" type="email" required autoComplete="email" className={`${field} mt-1.5`} placeholder="you@example.com" /></label>
          </div>
          <label className="block text-sm">Subject<input name="subject" required className={`${field} mt-1.5`} placeholder="What is this about?" /></label>
          <label className="block text-sm">Message<textarea name="message" required rows="5" className={`${field} mt-1.5 resize-y`} placeholder="Tell me about your project or role" /></label>
          <Button type="submit"><FiSend aria-hidden /> Send Message</Button>
          <p role="status" aria-live="polite" className="text-sm text-slate-400">{status}</p>
        </motion.form>
      </div>
    </Section>
  )
}
