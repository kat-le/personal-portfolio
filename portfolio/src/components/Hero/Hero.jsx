import './Hero.css'
import spiral from '../../assets/doodle-1.png'
import flower from '../../assets/doodle-2.png'
import hello from '../../assets/doodle-3.png'

function Hero() {
  return (
    <section className="hero">
      {/* <h1 aria-label="Build">
        <span>BUILD</span>
        <span>BUILD</span>
      </h1> */}

      {/* decorative doodles scattered over the grid */}
      <img className="hero-doodle d-hello" src={hello} alt="" aria-hidden="true" />
      <img className="hero-doodle d-flower" src={flower} alt="" aria-hidden="true" />
      <img className="hero-doodle d-spiral" src={spiral} alt="" aria-hidden="true" />

      <div className="hero-pill">
        <div className="hero-pill-text">
          <h2>Hi, I'm Katherine</h2>
          <p>I design and build</p>
          <p>thoughtful web projects</p>
          <p>from idea to deploy.</p>
        </div>
        <div className="toggle"><i /></div>
      </div>
    </section>
  )
}

export default Hero
