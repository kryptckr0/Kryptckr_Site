import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  return <article className="project">
    <div className="project-top"><span>{project.tag}</span><span>0{index + 1}</span></div>
    <h3>{project.title}</h3>
    <p>{project.text}</p>
    <div className="stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
    <div className="project-line" />
    <button className="project-link">Explore project <ArrowUpRight size={16} /></button>
  </article>
}
