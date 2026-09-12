import SectionLabel from '../components/SectionLabel'

const posts = [
  { date: 'COMING SOON', tag: 'KUBERNETES', title: 'Mon premier cluster K3s : de zéro à l’ingress', text: 'Déployer un cluster compact, exposer un service et comprendre chaque brique.' },
  { date: 'COMING SOON', tag: 'OBSERVABILITY', title: 'Pourquoi monitorer un système que l’on vient de casser ?', text: 'Métriques, logs et signaux utiles pour passer du “ça marche” au “je sais pourquoi”.' },
  { date: 'COMING SOON', tag: 'CI/CD', title: 'Du git push au conteneur : construire une première pipeline', text: 'Les étapes fondamentales pour automatiser un build reproductible.' },
]

export default function Blog() {
  return <section className="page section">
    <SectionLabel>BLOG / 04</SectionLabel>
    <div className="page-header"><p className="kicker">FIELD NOTES</p><h1>Learn.<br/><span>Document.</span></h1><p>Des notes techniques issues du lab : problèmes rencontrés, commandes, architectures, erreurs et enseignements.</p></div>
    <div className="post-list">{posts.map(post => <article className="post" key={post.title}><div><span>{post.tag}</span><small>{post.date}</small></div><h3>{post.title}</h3><p>{post.text}</p></article>)}</div>
  </section>
}
