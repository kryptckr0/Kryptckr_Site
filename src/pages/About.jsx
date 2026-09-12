import SectionLabel from '../components/SectionLabel'

export default function About() {
  return <section className="page section">
    <SectionLabel>ABOUT / 01</SectionLabel>
    <div className="page-header page-header-split"><div><p className="kicker">PROFILE</p><h1>From support<br/><span>to systems.</span></h1><p>Je construis progressivement un profil orienté infrastructure, Ops et DevOps en transformant l'expérience terrain en compétences d'automatisation, de cloud-native et d'observabilité.</p></div><div className="editorial-visual about-visual"><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85" alt="Carte électronique avec processeur et circuits" loading="lazy"/><div className="visual-scan"/><div className="visual-caption"><span>PROFILE / 001</span><strong>HUMAN → SYSTEM</strong></div></div></div>
    <div className="detail-grid">
      <article className="detail-card visual-card"><div className="card-visual"><img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=82" alt="Baie de serveurs pour illustrer l'infrastructure IT" loading="lazy"/><span>INFRA / 01</span></div><span>BACKGROUND</span><h3>IT & Infrastructure</h3><p>Support de proximité, administration de postes et environnement d'entreprise. Kryptckr sert de laboratoire pour aller plus loin dans l'exploitation des systèmes.</p></article>
      <article className="detail-card visual-card"><div className="card-visual"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=82" alt="Réseau de connexions numériques pour illustrer le cloud-native" loading="lazy"/><span>CLOUD / 02</span></div><span>LEARNING</span><h3>Cloud-native mindset</h3><p>Kubernetes, Linux, conteneurs, CI/CD, monitoring et Infrastructure as Code constituent les axes de progression du lab.</p></article>
      <article className="detail-card visual-card"><div className="card-visual"><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=82" alt="Circuit électronique pour illustrer l'expérimentation technique" loading="lazy"/><span>BREAK / 03</span></div><span>APPROACH</span><h3>Learn by breaking</h3><p>Je privilégie l'expérimentation : déployer, observer, provoquer une panne, comprendre, sécuriser puis automatiser.</p></article>
    </div>
  </section>
}
