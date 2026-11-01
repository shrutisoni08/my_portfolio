import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'
import { links } from './Navbar'

export default function Footer() {
  const { name, title, tagline } = portfolioData.personal
  const { socialLinks, contact } = portfolioData
  const socials = [
    socialLinks.github && { Icon: FiGithub, label: 'GitHub', href: socialLinks.github },
    socialLinks.linkedin && { Icon: FiLinkedin, label: 'LinkedIn', href: socialLinks.linkedin },
    contact.email && { Icon: FiMail, label: 'Email', href: `mailto:${contact.email}` },
  ].filter(Boolean)
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div><p className="text-lg font-bold">{name}</p><p className="text-sm text-mint">{title}</p><p className="mt-2 max-w-xs text-sm text-slate-400">{tagline}</p></div>
        <nav aria-label="Footer"><ul className="grid grid-cols-2 gap-2 text-sm text-slate-400">{links.map((l) => <li key={l}><a className="hover:text-white" href={`#${l.toLowerCase()}`}>{l}</a></li>)}</ul></nav>
        <ul className="flex gap-3 md:justify-end">{socials.map(({ Icon, label, href }) => (
          <li key={label}><a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-line hover:border-mint hover:text-mint"><Icon /></a></li>
        ))}</ul>
      </div>
      <p className="border-t border-line py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} {name}. All rights reserved.</p>
    </footer>
  )
}
