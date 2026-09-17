import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const root = new URL('..', import.meta.url)
const postsDir = new URL('./src/content/posts/', root)
const publicDir = new URL('./public/', root)
const siteUrl = 'https://kryptckr.fr'

const escapeXml = value => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;')

const parseFrontmatter = source => {
  const [, frontmatter = ''] = source.split(/^---\s*$/m)
  return Object.fromEntries(frontmatter.trim().split('\n').filter(Boolean).map(line => {
    const separator = line.indexOf(':')
    return [line.slice(0, separator).trim(), line.slice(separator + 1).trim().replace(/^["']|["']$/g, '')]
  }))
}

const files = (await readdir(postsDir)).filter(file => file.endsWith('.md'))
const posts = (await Promise.all(files.map(async file => parseFrontmatter(await readFile(join(postsDir.pathname, file), 'utf8')))))
  .sort((a, b) => b.date.localeCompare(a.date))

const items = posts.map(post => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/blog/${escapeXml(post.slug)}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${escapeXml(post.slug)}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.tag)}</category>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
    </item>`).join('\n')

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Kryptckr — Field Notes</title>
    <link>${siteUrl}/blog</link>
    <description>Notes techniques sur l'infrastructure, le DevOps, le cloud et la cybersécurité.</description>
    <language>fr-FR</language>
    <copyright>© 2026 Kryptckr</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`

await mkdir(publicDir, { recursive: true })
await writeFile(new URL('./feed.xml', publicDir), feed)
console.log(`Generated RSS feed with ${posts.length} posts`)
