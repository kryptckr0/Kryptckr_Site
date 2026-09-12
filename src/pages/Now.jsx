import SectionLabel from '../components/SectionLabel'

const signals = [
  ['CURRENT FOCUS', 'Linux, Docker, Kubernetes et observabilité terrain.'],
  ['LAST EXPERIMENT', 'Structurer un homelab reproductible avant de l’exposer.'],
  ['NEXT MOVE', 'Publier une image Docker puis la déployer sur K3s.'],
]

export default function Now() {
  return <section className="page section now-page">
    <SectionLabel>NOW / STATUS</SectionLabel>
    <div className="page-header"><p className="kicker">LIVE ROADMAP</p><h1>In progress.<br/><span>On purpose.</span></h1><p>Une photographie honnête de ce qui est étudié, construit et prévu dans le lab Kryptckr.</p></div>
    <div className="now-grid">{signals.map(([label, text]) => <article className="detail-card now-card" key={label}><span>{label}</span><h3>{text}</h3><p>Ce signal évolue avec les expérimentations et les retours du terrain.</p></article>)}</div>
    <div className="now-status"><span className="pulse"/> SYSTEM STATUS <strong>LEARNING / BUILDING / DOCUMENTING</strong></div>
  </section>
}
