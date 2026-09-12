import SectionLabel from '../components/SectionLabel'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/site'

export default function Projects() {
  return <section className="page section">
    <SectionLabel>PROJECTS / 03</SectionLabel>
    <div className="page-header"><p className="kicker">SELECTED WORK</p><h1>Systems built<br/><span>in the lab.</span></h1><p>Des projets pensés pour montrer le chemin complet : architecture, déploiement, observabilité, sécurité et automatisation.</p></div>
    <div className="projects">{projects.map((project, i) => <ProjectCard key={project.slug} project={project} index={i}/>)}</div>
  </section>
}
