import './Footer.css'

function Footer() {
  return (
    <>
      <footer className="player">
        <div className="progress"><i /></div>
        <div className="player-row">
          <button className="chev" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>⌃</button>
          <div className="now">
            <strong>Now building : Next Project</strong>
            <small>Something new is on the way — check back soon</small>
          </div>
          <span className="player-dot" aria-hidden="true" />
        </div>
      </footer>

      <div className="bottom-bar">
        <span>© 2026</span>
      </div>
    </>
  )
}

export default Footer
