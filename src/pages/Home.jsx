import { ArrowUpRight } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'
import SkillCard from '../components/SkillCard'
import ProjectCard from '../components/ProjectCard'
import { skills, projects } from '../data/site'

export default function Home() {
  return <>
    <section className="hero section">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse"/> TECHNICAL LAB / FR-2026</div>
        <h1>BUILD.<br/><em>BREAK.</em> SECURE.<br/><strong>AUTOMATE.</strong></h1>
        <p className="lead">Infrastructure · DevOps · Cloud · Cybersecurity</p>
        <p className="intro">Je construis, je teste et je casse des systèmes pour mieux comprendre comment les rendre fiables, observables et automatisables.</p>
        <div className="actions"><a className="btn primary" href="/projects">Explorer mes projets <ArrowUpRight size={18}/></a><a className="btn ghost" href="/labs">Voir le lab</a></div>
        <div className="hero-meta"><span>STATUS <b>● ONLINE</b></span><span>FOCUS <b>DEVOPS / OPS</b></span><span>BASE <b>PARIS, FR</b></span></div>
      </div>
      <div className="hero-visual"><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85" alt="Circuit électronique et composants informatiques" /><div className="hero-visual-label"><span>CORE / 001</span><span>HARDWARE → SOFTWARE</span></div></div>
    </section>

    <section className="section"><SectionLabel>01 / ABOUT</SectionLabel><div className="split"><div className="currently-heading"><p className="kicker">CURRENTLY</p><h2>Technicien aujourd'hui.<br/><span>DevOps demain.</span></h2></div><div className="currently-visual"><img src="/images/profile-currently.jpeg" alt="Portrait de l'auteur de Kryptckr" loading="lazy"/><div className="visual-scan"/><div className="currently-label"><span>FIELD / 001</span><strong>HANDS ON SYSTEMS</strong></div></div><blockquote className="currently-copy"><p>« Un technicien de terrain qui apprend en construisant, en observant et en allant au fond des systèmes.</p><p>Cette énergie devient peu à peu une pratique DevOps : des infrastructures plus fiables, plus visibles et mieux automatisées.</p><p>Je documente chaque étape pour transformer les problèmes rencontrés en méthodes, en outils et en réflexes durables.</p><p>Le prochain objectif est simple : relier l'humain, l'opérationnel et la technique dans des systèmes qui tiennent vraiment. »</p><span className="currently-signature">— KRYPTCKR / IN PROGRESS</span></blockquote></div></section>
    <section className="section"><SectionLabel>02 / EXPERTISE</SectionLabel><div className="cards">{skills.map(skill => <SkillCard key={skill.title} skill={skill}/>)}</div></section>
    <section className="section"><SectionLabel>03 / SELECTED PROJECTS</SectionLabel><div className="projects">{projects.map((project, i) => <ProjectCard key={project.slug} project={project} index={i}/>)}</div></section>
  </>
}
