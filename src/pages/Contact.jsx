import { ArrowUpRight, GitBranch, Mail } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

export default function Contact() {
  return <section className="page section contact-page">
    <SectionLabel>CONTACT / 05</SectionLabel>
    <div className="page-header"><p className="kicker">OPEN CHANNEL</p><h1>Let's build something<br/><span>worth deploying.</span></h1><p>Une question, une opportunité ou simplement envie de parler infrastructure ? Les canaux sont ouverts.</p></div>
    <div className="contact-links"><a className="contact-link" href="mailto:hello@kryptckr.fr"><Mail size={20}/><span>hello@kryptckr.fr</span><ArrowUpRight size={18}/></a><a className="contact-link" href="https://github.com/kryptckr0" target="_blank" rel="noreferrer"><GitBranch size={20}/><span>github.com/kryptckr0</span><ArrowUpRight size={18}/></a></div>
  </section>
}
