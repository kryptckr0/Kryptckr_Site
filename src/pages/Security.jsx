import { Activity, CheckCircle2, Container, GitBranch, LockKeyhole, ShieldCheck } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

const controls = [
  ['DEPENDENCIES', 'Audited before release', 'npm ci / lockfile reproducible'],
  ['CONTAINER', 'Minimal production runtime', 'Multi-stage build / Nginx'],
  ['DELIVERY', 'Checks before publication', 'Lint / tests / Vite build'],
  ['SECRETS', 'Never committed to Git', 'Environment and CI secrets'],
]

const services = [
  ['Website', 'OPERATIONAL', Activity],
  ['CI pipeline', 'PASSING', GitBranch],
  ['Container image', 'READY', Container],
  ['Security posture', 'BASELINE', LockKeyhole],
]

export default function Security() {
  return <section className="page section security-page">
    <SectionLabel>SECURITY / RELIABILITY</SectionLabel>
    <div className="page-header page-header-split">
      <div>
        <p className="kicker">TRUST CENTER / FORI</p>
        <h1>Built to be<br/><span>understood.</span></h1>
        <p>La sécurité n'est pas une promesse abstraite : c'est une série de contrôles visibles, documentés et améliorés à chaque déploiement.</p>
      </div>
      <div className="security-signal">
        <ShieldCheck size={42}/>
        <span>POSTURE / BASELINE</span>
        <strong>Operational</strong>
        <small>Dernière vérification : maintenant</small>
      </div>
    </div>
    <div className="security-services">{services.map(([name, status, Icon]) => <article className="security-service" key={name}><Icon size={18}/><span>{name}</span><strong>{status}</strong><i/></article>)}</div>
    <div className="security-grid">
      {controls.map(([label, title, detail]) => <article className="detail-card security-card" key={label}><span>{label}</span><h3>{title}</h3><p>{detail}</p><CheckCircle2 className="security-check" size={20}/></article>)}
    </div>
    <div className="security-architecture">
      <div><p className="kicker">DELIVERY CHAIN</p><h2>Chaque changement<br/><span>laisse une trace.</span></h2></div>
      <div className="security-flow"><span>GIT PUSH</span><b>→</b><span>CI CHECKS</span><b>→</b><span>IMAGE</span><b>→</b><span>DEPLOY</span></div>
    </div>
  </section>
}
