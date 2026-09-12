import SectionLabel from '../components/SectionLabel'

const labs = [
  ['Kubernetes', 'K3s, namespaces, services, ingress, Helm et déploiements cloud-native.', 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=900&q=82'],
  ['Networking', 'DNS, reverse proxy, TLS, VLAN, services internes et exposition contrôlée.', 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=82'],
  ['Observability', 'Prometheus, Grafana et Loki pour métriques, dashboards et logs.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=82'],
  ['Virtualization', 'Proxmox et machines de lab pour construire des environnements reproductibles.', 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=82'],
  ['Containers', 'Docker, images, réseaux, volumes et bonnes pratiques de runtime.', 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=900&q=82'],
  ['Automation', 'GitHub Actions, CI/CD, Ansible et Terraform au fil de la progression.', 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=82'],
]

export default function Labs() {
  return <section className="page section">
    <SectionLabel>LABS / 02</SectionLabel>
    <div className="page-header page-header-split"><div><p className="kicker">TECHNICAL LAB</p><h1>Build it.<br/><span>Break it.</span></h1><p>Un environnement d'expérimentation où chaque service devient une occasion d'apprendre l'architecture, l'exploitation, la sécurité et l'automatisation.</p></div><div className="editorial-visual lab-visual"><img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85" alt="Racks de serveurs dans un datacenter" loading="lazy"/><div className="visual-scan"/><div className="visual-caption"><span>LAB / 002</span><strong>OBSERVE EVERYTHING</strong></div><div className="telemetry"><i/><span>NODE_03</span><b>ONLINE</b></div></div></div>
    <div className="lab-grid">{labs.map(([title, text, image], i) => <article className="detail-card visual-card" key={title}><div className="card-visual"><img src={image} alt={`${title} technical lab`} loading="lazy"/><span>LAB / 0{i + 1}</span></div><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
  </section>
}
