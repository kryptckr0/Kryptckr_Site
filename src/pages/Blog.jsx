import SectionLabel from '../components/SectionLabel'

import { Link } from 'react-router-dom'

const modules = import.meta.glob('../content/posts/*.md', { eager: true, query: '?raw', import: 'default' })
const posts = Object.values(modules).map(source => {
  const [, frontmatter = ''] = source.split(/^---\s*$/m)
  return Object.fromEntries(frontmatter.trim().split('\n').filter(Boolean).map(line => {
    const separator = line.indexOf(':')
    return [line.slice(0, separator).trim(), line.slice(separator + 1).trim().replace(/^["']|["']$/g, '')]
  }))
}).sort((a, b) => b.date.localeCompare(a.date))

export default function Blog() {
  return <section className="page section">
    <SectionLabel>BLOG / 04</SectionLabel>
    <div className="page-header"><p className="kicker">FIELD NOTES</p><h1>Learn.<br/><span>Document.</span></h1><p>Des notes techniques issues du lab : problèmes rencontrés, commandes, architectures, erreurs et enseignements.</p><a className="rss-link" href="/feed.xml">S'abonner au flux RSS →</a></div>
    <div className="post-list">{posts.map(post => <Link className="post" to={`/blog/${post.slug}`} key={post.slug}><div><span>{post.tag}</span><small>{post.date}</small></div><h3>{post.title}</h3><p>{post.excerpt}</p><span className="post-read">Read field note ↗</span></Link>)}</div>
  </section>
}
