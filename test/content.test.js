import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const postsDir = path.resolve('src/content/posts')

test('Markdown field notes expose the required frontmatter', () => {
  const posts = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'))
  assert.ok(posts.length >= 12)
  for (const file of posts) {
    const source = fs.readFileSync(path.join(postsDir, file), 'utf8')
    assert.match(source, /^---\n/)
    for (const field of ['slug', 'title', 'date', 'tag', 'excerpt']) {
      assert.match(source, new RegExp(`^${field}:`, 'm'))
    }
  }
})
