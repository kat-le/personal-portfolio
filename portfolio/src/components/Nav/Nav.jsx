import './Nav.css'

function Nav() {
  return (
    <>
      <header className="nav">
        <div className="nav-left">
          <strong>Katherine Le</strong>
          <small>Software Developer</small>
        </div>
        <nav className="nav-center">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-right">
          <span className="avatar" aria-hidden="true" />
          <small>Open to work</small>
        </div>
      </header>

      <div className="subnav">
        <span className="tagline">portfolio · coding projects · 2026</span>
        <button className="pill-btn">Resume <i /></button>
      </div>
    </>
  )
}

export default Nav
