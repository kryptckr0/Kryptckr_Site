import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project, index }) {
  return <article className="project">
    <div className="project-image"><img src={project.image} alt="" loading="lazy" /><span className="project-image-overlay"/></div>
    <div className="project-top"><span>{project.tag}</span><span>0{index + 1}</span></div>
    <h3>{project.title}</h3>
    <p>{project.text}</p>
    <div className="stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
    <div className="project-line" />
    <Link className="project-link" to={`/projects/${project.slug}`}>Explore project <ArrowUpRight size={16} /></Link>
  </article>
}
