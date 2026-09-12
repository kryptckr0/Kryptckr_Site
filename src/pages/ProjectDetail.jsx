import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/site'
import SectionLabel from '../components/SectionLabel'

const details = {
  'k3s-homelab': {
    eyebrow: 'KUBERNETES / HOMELAB',
    description: 'Un laboratoire K3s conçu pour comprendre le parcours complet d’un workload cloud-native : cluster, ingress, TLS, services et observabilité.',
    architecture: ['K3s', 'Traefik', 'Helm', 'cert-manager', 'Prometheus', 'Grafana', 'Loki'],
  },
  'monitoring-stack': {
    eyebrow: 'OBSERVABILITY / PLATFORM',
    description: 'Une stack de supervision orientée terrain pour visualiser les métriques, explorer les logs et apprendre à raisonner à partir de signaux observables.',
    architecture: ['Prometheus', 'Grafana', 'Loki', 'Node metrics', 'Dashboards'],
  },
  'ci-cd-pipeline': {
    eyebrow: 'AUTOMATION / DELIVERY',
    description: 'Une chaîne de livraison progressive qui transforme un push Git en artefact déployable, avec le build comme première étape vers un vrai delivery pipeline.',
    architecture: ['Git', 'GitHub Actions', 'Node 22', 'Vite', 'Docker', 'Nginx'],
  },
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  const detail = details[slug]

  if (!project || !detail) return <section className="page section"><SectionLabel>404 / PROJECT</SectionLabel><h1>Project not found.</h1><Link className="back-link" to="/projects"><ArrowLeft size={16}/> Back to projects</Link></section>

  return <section className="page section project-detail">
    <Link className="back-link" to="/projects"><ArrowLeft size={16}/> All projects</Link>
    <SectionLabel>{detail.eyebrow}</SectionLabel>
    <div className="page-header"><p className="kicker">{project.tag}</p><h1>{project.title}<br/><span>in the lab.</span></h1><p>{detail.description}</p></div>
    <div className="detail-grid">
      <article className="detail-card"><span>STACK</span><h3>Technology map</h3><div className="stack detail-stack">{detail.architecture.map(item => <span key={item}>{item}</span>)}</div></article>
      <article className="detail-card"><span>METHOD</span><h3>Build → observe → improve</h3><p>Chaque projet est pensé comme une expérimentation reproductible : définir l'objectif, déployer, observer le comportement, documenter les écarts puis automatiser ce qui mérite de l'être.</p></article>
    </div>
    <div className="detail-cta"><Link className="btn ghost" to="/projects"><ArrowLeft size={17}/> Back</Link><a className="btn primary" href="https://github.com/kryptckr0/Kryptckr_Site" target="_blank" rel="noreferrer">Repository <ArrowUpRight size={17}/></a></div>
  </section>
}
