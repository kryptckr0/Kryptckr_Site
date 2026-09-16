import { useEffect, useState } from 'react'
import { Terminal } from 'lucide-react'

const bootSequence = [
  '$ kryptckr status --all',
  '→ loading infrastructure profile...',
  '→ checking observability stack...',
  '→ validating security posture...',
  '✓ systems operational / 99.98% confidence',
]

export default function LiveTerminal() {
  const [visibleLines, setVisibleLines] = useState(1)

  useEffect(() => {
    if (visibleLines >= bootSequence.length) return undefined
    const timer = window.setTimeout(() => setVisibleLines((current) => current + 1), 620)
    return () => window.clearTimeout(timer)
  }, [visibleLines])

  return (
    <section className="section live-terminal-section" aria-label="Kryptckr live system status">
      <div className="live-terminal">
        <div className="live-terminal-head">
          <span><Terminal size={15}/> FORI / LIVE SYSTEMS</span>
          <span className="terminal-online"><i/> ONLINE</span>
        </div>
        <div className="live-terminal-body">
          {bootSequence.slice(0, visibleLines).map((line, index) => (
            <p key={line} className={index === bootSequence.length - 1 ? 'terminal-success' : ''}>{line}</p>
          ))}
          <span className="terminal-cursor" aria-hidden="true">_</span>
        </div>
        <div className="live-terminal-foot">
          <span>REALITY {">"} ASSUMPTIONS</span>
          <a href="/labs">Entrer dans le lab →</a>
        </div>
      </div>
    </section>
  )
}
