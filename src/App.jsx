import { useState } from 'react'
import { Github, Menu, X, ArrowUpRight } from 'lucide-react'
import SectionLabel from './components/SectionLabel'
import SkillCard from './components/SkillCard'
import ProjectCard from './components/ProjectCard'
import { navItems, skills, projects } from './data/site'

function App() {
  const [open, setOpen] = useState(false)
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }

  return <div className="site">
    <div className="grid-bg" />
    <header className="nav">
      <a className="brand" href="#top">KRYPT<span>CKR</span></a>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>{navItems.map(item => <button key={item.id} onClick={() => scrollTo(item.id)}>{item.label}</button>)}</nav>
      <a className="github" href="https://github.com/kryptckr0" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
    </header>

    <main id="top">
      <section className="hero section">
        <div className="eyebrow"><span className="pulse"/> TECHNICAL LAB / 2026</div>
        <h1>BUILD.<br/><em>BREAK.</em> SECURE.<br/><strong>AUTOMATE.</strong></h1>
        <p className="lead">Infrastructure · DevOps · Cloud · Cybersecurity</p>
        <p className="intro">Je construis, je teste et je casse des systèmes pour mieux comprendre comment les rendre fiables, observables et automatisables.</p>
        <div className="actions"><button className="btn primary" onClick={() => scrollTo('projects')}>Explorer mes projets <ArrowUpRight size={18}/></button><button className="btn ghost" onClick={() => scrollTo('labs')}>Voir le lab</button></div>
        <div className="hero-meta"><span>STATUS <b>● ONLINE</b></span><span>FOCUS <b>DEVOPS / OPS</b></span><span>BASE <b>PARIS, FR</b></span></div>
      </section>

      <section className="section currently" id="about"><SectionLabel>01 / ABOUT</SectionLabel><div className="split"><div><p className="kicker">CURRENTLY</p><h2>Technicien aujourd'hui.<br/><span>DevOps demain.</span></h2></div><p>Mon terrain de jeu est l'infrastructure. Je transforme mon expérience support en compétences d'exploitation, d'automatisation et de cloud-native. Kryptckr documente cette progression — projets réels, labs, expérimentations et apprentissages.</p></div></section>

      <section className="section" id="labs"><SectionLabel>02 / EXPERTISE</SectionLabel><div className="cards">{skills.map(skill => <SkillCard key={skill.title} skill={skill}/>)}</div></section>

      <section className="section" id="projects"><SectionLabel>03 / SELECTED PROJECTS</SectionLabel><div className="projects">{projects.map((project, i) => <ProjectCard key={project.title} project={project} index={i}/>)}</div></section>

      <section className="section lab-terminal" id="blog"><SectionLabel>04 / LAB CONSOLE</SectionLabel><div className="terminal-head"><span>~/kryptckr/lab</span><span>LIVE</span></div><div className="terminal-body"><p><span className="prompt">$</span> kubectl get namespaces</p><p className="muted">minilab&nbsp;&nbsp;&nbsp; monitoring&nbsp;&nbsp;&nbsp; mon-projet</p><p><span className="prompt">$</span> whoami</p><p className="accent">kryptckr — infrastructure enthusiast</p><p><span className="prompt">$</span> cat /next</p><p className="muted">Kubernetes · Ansible · Terraform · Observability</p><span className="cursor">▋</span></div></section>

      <section className="section contact" id="contact"><SectionLabel>05 / CONTACT</SectionLabel><h2>Let's build something<br/><span>worth deploying.</span></h2><a className="mail" href="mailto:hello@kryptckr.fr">hello@kryptckr.fr <ArrowUpRight size={20}/></a></section>
    </main>
    <footer><span>© 2026 KRYPTCKR</span><span>BUILT WITH REACT + VITE</span><span>NO MATRIX. JUST SYSTEMS.</span></footer>
  </div>
}
export default App
