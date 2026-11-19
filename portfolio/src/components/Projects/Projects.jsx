import './Projects.css'

const Placeholder = ({ label = 'photo' }) => (
  <div className="placeholder" role="img" aria-label={`${label} placeholder`}>
    <span>{label}</span>
  </div>
)

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)

const icons = [
  'M12 3a9 9 0 100 18 9 9 0 000-18zM12 8v4l3 2',
  'M4 5h16v14H4zM4 10h16',
  'M8 6l-5 6 5 6M16 6l5 6-5 6',
  'M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z',
  'M4 4h16v12H8l-4 4z',
  'M5 4h14v16H5zM9 9h6M9 13h6',
  'M3 12l9-9 9 9M5 10v10h14V10',
]

const projects = [
  {
    id: 'projects',
    title: 'Project One',
    year: 2026,
    summary: 'A short one-line summary of what this project does and who it is for.',
    stack: ['React', 'Vite', 'CSS'],
    details: 'Describe the problem, your approach, and the result. Add a couple of lines about what you learned along the way.',
  },
  {
    id: 'project-two',
    title: 'Project Two',
    year: 2026,
    summary: 'Another project goes here with a short description.',
    stack: ['JavaScript', 'Node', 'HTML'],
    details: 'Mention the stack, the challenge, and the outcome. Keep it brief — two or three sentences is plenty.',
  },
]

function Projects() {
  return (
    <>
      {projects.map((p) => (
        <section className="project" id={p.id} key={p.id}>
          <article className="photo-card">
            <Placeholder label="project screenshot" />
            <div className="photo-card-foot">
              <span className="cap">{p.title} — {p.year}</span>
              <div className="photo-actions">
                <button className="btn-outline">Live demo</button>
                <button className="btn-red">GitHub</button>
                <span className="count">2</span>
                <span className="shuffle">✕</span>
                <span className="play">▶</span>
              </div>
              <div className="meta-row">
                {p.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
          </article>

          <div className="project-copy">
            <h3>{p.title.toUpperCase()}</h3>
            <p className="lede">{p.summary}</p>
            <div className="info-card">
              <div className="info-head"><span className="dot-icon">✕</span><span>Overview</span></div>
              <h4>What I built</h4>
              <p>{p.details}</p>
              <div className="icon-row">
                {icons.map((d, i) => (
                  <span key={i}><Icon d={d} /></span>
                ))}
              </div>
            </div>
          </div>
          <span className="side-dot" aria-hidden="true" />
        </section>
      ))}
    </>
  )
}

export default Projects
