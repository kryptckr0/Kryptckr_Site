import SectionLabel from '../components/SectionLabel'

const labs = [
  ['Kubernetes', 'K3s, namespaces, services, ingress, Helm et déploiements cloud-native.'],
  ['Networking', 'DNS, reverse proxy, TLS, VLAN, services internes et exposition contrôlée.'],
  ['Observability', 'Prometheus, Grafana et Loki pour métriques, dashboards et logs.'],
  ['Virtualization', 'Proxmox et machines de lab pour construire des environnements reproductibles.'],
  ['Containers', 'Docker, images, réseaux, volumes et bonnes pratiques de runtime.'],
  ['Automation', 'GitHub Actions, CI/CD, Ansible et Terraform au fil de la progression.'],
]

export default function Labs() {
  return <section className="page section">
    <SectionLabel>LABS / 02</SectionLabel>
    <div className="page-header"><p className="kicker">TECHNICAL LAB</p><h1>Build it.<br/><span>Break it.</span></h1><p>Un environnement d'expérimentation où chaque service devient une occasion d'apprendre l'architecture, l'exploitation, la sécurité et l'automatisation.</p></div>
    <div className="lab-grid">{labs.map(([title, text], i) => <article className="detail-card" key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
  </section>
}
