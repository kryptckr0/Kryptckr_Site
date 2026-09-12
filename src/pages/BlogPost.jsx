import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import SectionLabel from '../components/SectionLabel'

const modules = import.meta.glob('../content/posts/*.md', { eager: true, query: '?raw', import: 'default' })

function parsePost(source) {
  const [, frontmatter = '', body = source] = source.split(/^---\s*$/m)
  const metadata = Object.fromEntries(frontmatter.trim().split('\n').filter(Boolean).map(line => {
    const separator = line.indexOf(':')
    return [line.slice(0, separator).trim(), line.slice(separator + 1).trim().replace(/^["']|["']$/g, '')]
  }))
  return { ...metadata, content: body.trim() }
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = useMemo(() => Object.values(modules).map(parsePost).find(item => item.slug === slug), [slug])

  if (!post) return <section className="page section"><SectionLabel>404 / ARTICLE</SectionLabel><h1>Article not found.</h1><Link className="back-link" to="/blog"><ArrowLeft size={16}/> Back to blog</Link></section>

  const html = DOMPurify.sanitize(marked.parse(post.content))
  return <article className="page section article-page">
    <Link className="back-link" to="/blog"><ArrowLeft size={16}/> All notes</Link>
    <SectionLabel>{post.tag} / FIELD NOTE</SectionLabel>
    <header className="article-header"><p className="kicker">{post.date}</p><h1>{post.title}</h1><p>{post.excerpt}</p></header>
    <div className="article-content" dangerouslySetInnerHTML={{ __html: html }} />
  </article>
}
