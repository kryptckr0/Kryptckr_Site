const icons = { boxes: '▦', terminal: '>_', cloud: '☁', shield: '◇' }

export default function SkillCard({ skill }) {
  return <article className="card">
    <div className="card-num">{skill.number}</div>
    <div className="skill-icon">{icons[skill.icon]}</div>
    <h3>{skill.title}</h3>
    <p>{skill.text}</p>
  </article>
}
