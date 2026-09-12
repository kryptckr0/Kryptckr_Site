import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/site'
import SectionLabel from '../components/SectionLabel'

const details = {
  'k3s-homelab': {
    eyebrow: 'KUBERNETES / HOMELAB',
    description: 'Un laboratoire K3s conçu pour comprendre le parcours complet d’un workload cloud-native : cluster, ingress, TLS, services et observabilité.',
    architecture: ['K3s', 'Traefik', 'Helm', 'cert-manager', 'Prometheus', 'Grafana', 'Loki'],
    stackDetails: ['Cluster léger pour le control plane et les workloads', 'Ingress Traefik pour router les requêtes HTTP', 'Helm pour versionner les déploiements', 'TLS cert-manager et métriques Prometheus'],
    method: ['Provisionner le cluster', 'Déployer un service minimal', 'Exposer et sécuriser l’ingress', 'Observer puis provoquer une panne contrôlée'],
    outcome: 'Un parcours reproductible pour comprendre comment une application passe du manifeste Kubernetes à un service observable.',
  },
  'monitoring-stack': {
    eyebrow: 'OBSERVABILITY / PLATFORM',
    description: 'Une stack de supervision orientée terrain pour visualiser les métriques, explorer les logs et apprendre à raisonner à partir de signaux observables.',
    architecture: ['Prometheus', 'Grafana', 'Loki', 'Node metrics', 'Dashboards'],
    stackDetails: ['Prometheus pour collecter les séries temporelles', 'Node Exporter pour les signaux système', 'Grafana pour les dashboards et seuils', 'Loki pour relier les logs au contexte'],
    method: ['Définir les signaux utiles', 'Collecter métriques et logs', 'Construire une vue opérationnelle', 'Tester les alertes sur incident simulé'],
    outcome: 'Une lecture commune de la santé du système, utile avant, pendant et après une intervention.',
  },
  'ci-cd-pipeline': {
    eyebrow: 'AUTOMATION / DELIVERY',
    description: 'Une chaîne de livraison progressive qui transforme un push Git en artefact déployable, avec le build comme première étape vers un vrai delivery pipeline.',
    architecture: ['Git', 'GitHub Actions', 'Node 22', 'Vite', 'Docker', 'Nginx'],
    stackDetails: ['Git comme source de vérité et déclencheur', 'GitHub Actions pour les contrôles automatisés', 'Vite pour produire les artefacts statiques', 'Docker et Nginx pour le runtime de production'],
    method: ['Valider le code à chaque push', 'Construire un artefact reproductible', 'Fabriquer et scanner l’image', 'Préparer la livraison vers le lab'],
    outcome: 'Une boucle de delivery courte qui transforme chaque commit en signal de qualité exploitable.',
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
      <article className="detail-card"><span>STACK</span><h3>Technology map</h3><div className="stack detail-stack">{detail.architecture.map(item => <span key={item}>{item}</span>)}</div><ul className="detail-list">{detail.stackDetails.map(item => <li key={item}>{item}</li>)}</ul></article>
      <article className="detail-card"><span>METHOD</span><h3>Build → observe → improve</h3><p>Chaque projet est pensé comme une expérimentation reproductible : définir l'objectif, déployer, observer le comportement, documenter les écarts puis automatiser ce qui mérite de l'être.</p><ol className="method-list">{detail.method.map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ol></article>
    </div>
    <div className="detail-cta"><Link className="btn ghost" to="/projects"><ArrowLeft size={17}/> Back</Link><a className="btn primary" href="https://github.com/kryptckr0/Kryptckr_Site" target="_blank" rel="noreferrer">Repository <ArrowUpRight size={17}/></a></div>
    <section className="project-outcome"><span>FIELD NOTE / OUTCOME</span><p>{detail.outcome}</p></section>
  </section>
}
