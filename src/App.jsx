import { useState } from 'react'
import { ArrowUpRight, Terminal, ShieldCheck, Cloud, Boxes, Github, Menu, X } from 'lucide-react'

const nav = ['About', 'Labs', 'Projects', 'Blog', 'Contact']
const skills = [
  { icon: Boxes, title: 'Infrastructure', text: 'Linux, virtualization, networking, containers and reproducible environments.' },
  { icon: Terminal, title: 'DevOps', text: 'CI/CD, automation, Git, Kubernetes and the tooling that connects it all.' },
  { icon: Cloud, title: 'Cloud', text: 'Cloud-native patterns, reverse proxies, TLS, observability and deployment.' },
  { icon: ShieldCheck, title: 'Security', text: 'Hardening, monitoring, access control and security-minded infrastructure.' },
]
const projects = [
  { tag: 'KUBERNETES', title: 'K3s homelab', text: 'A compact cloud-native lab with Traefik, Helm, cert-manager and observability.' },
  { tag: 'OBSERVABILITY', title: 'Monitoring stack', text: 'Prometheus, Grafana and Loki assembled into a practical monitoring platform.' },
  { tag: 'AUTOMATION', title: 'CI/CD pipeline', text: 'From Git push to container build and deployment: automate the boring parts.' },
]

function App() {
  const [open, setOpen] = useState(false)
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }

  return <div className="site">
    <div className="grid-bg" />
    <header className="nav"><a className="brand" href="#top">KRYPT<span>CKR</span></a>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>{nav.map(item => <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>)}</nav>
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

      <section className="section currently" id="about"><div className="section-label">01 / ABOUT</div><div className="split"><div><p className="kicker">CURRENTLY</p><h2>Technicien aujourd'hui.<br/><span>DevOps demain.</span></h2></div><p>Mon terrain de jeu est l'infrastructure. Je transforme mon expérience support en compétences d'exploitation, d'automatisation et de cloud-native. Kryptckr documente cette progression — projets réels, labs, expérimentations et apprentissages.</p></div></section>

      <section className="section" id="labs"><div className="section-label">02 / EXPERTISE</div><div className="cards">{skills.map(({icon: Icon, title, text}, i) => <article className="card" key={title}><div className="card-num">0{i+1}</div><Icon size={23}/><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="section" id="projects"><div className="section-label">03 / SELECTED PROJECTS</div><div className="projects">{projects.map((p, i) => <article className="project" key={p.title}><div className="project-top"><span>{p.tag}</span><span>0{i+1}</span></div><h3>{p.title}</h3><p>{p.text}</p><div className="project-line"/></article>)}</div></section>

      <section className="section lab-terminal" id="blog"><div className="terminal-head"><span>~/kryptckr/lab</span><span>LIVE</span></div><div className="terminal-body"><p><span className="prompt">$</span> kubectl get namespaces</p><p className="muted">minilab&nbsp;&nbsp;&nbsp; monitoring&nbsp;&nbsp;&nbsp; mon-projet</p><p><span className="prompt">$</span> whoami</p><p className="accent">kryptckr — infrastructure enthusiast</p><p><span className="prompt">$</span> cat /next</p><p className="muted">Kubernetes · Ansible · Terraform · Observability</p><span className="cursor">▋</span></div></section>

      <section className="section contact" id="contact"><div className="section-label">04 / CONTACT</div><h2>Let's build something<br/><span>worth deploying.</span></h2><a className="mail" href="mailto:hello@kryptckr.fr">hello@kryptckr.fr <ArrowUpRight size={20}/></a></section>
    </main>
    <footer><span>© 2026 KRYPTCKR</span><span>BUILT WITH REACT + VITE</span><span>NO MATRIX. JUST SYSTEMS.</span></footer>
  </div>
}
export default App
