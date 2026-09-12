import SectionLabel from '../components/SectionLabel'

export default function About() {
  return <section className="page section">
    <SectionLabel>ABOUT / 01</SectionLabel>
    <div className="page-header"><p className="kicker">PROFILE</p><h1>From support<br/><span>to systems.</span></h1><p>Je construis progressivement un profil orienté infrastructure, Ops et DevOps en transformant l'expérience terrain en compétences d'automatisation, de cloud-native et d'observabilité.</p></div>
    <div className="detail-grid">
      <article className="detail-card"><span>BACKGROUND</span><h3>IT & Infrastructure</h3><p>Support de proximité, administration de postes et environnement d'entreprise. Kryptckr sert de laboratoire pour aller plus loin dans l'exploitation des systèmes.</p></article>
      <article className="detail-card"><span>LEARNING</span><h3>Cloud-native mindset</h3><p>Kubernetes, Linux, conteneurs, CI/CD, monitoring et Infrastructure as Code constituent les axes de progression du lab.</p></article>
      <article className="detail-card"><span>APPROACH</span><h3>Learn by breaking</h3><p>Je privilégie l'expérimentation : déployer, observer, provoquer une panne, comprendre, sécuriser puis automatiser.</p></article>
    </div>
  </section>
}
