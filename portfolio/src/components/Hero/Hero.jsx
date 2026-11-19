import './Hero.css'
import spiral from '../../assets/doodle-1.png'
import flower from '../../assets/doodle-2.png'
import hello from '../../assets/doodle-3.png'
import heroPhoto from '../../assets/hero.png'
import collage from '../../assets/collage.png'
import ScrollArrow from '../ScrollArrow/ScrollArrow'

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

      {/* photos layered on top of the grid and doodles */}
      <img className="hero-photo" src={heroPhoto} alt="Katherine at her graduation, holding her cap in the air" />
      <img className="hero-collage" src={collage} alt="A film-strip collage of photos of Katherine, with a lily, a satin bow and a camera" />

      <div className="hero-pill">
        <div className="hero-pill-text">
          <h2>Hi, I'm Katherine</h2>
          <p>I design and build</p>
          <p>thoughtful web projects</p>
          <p>from idea to deploy.</p>
        </div>
        <div className="toggle"><i /></div>
      </div>

      {/* scroll cue near the bottom of the hero: glides to About */}
      <ScrollArrow target="about" label="Scroll to About section" />
    </section>
  )
}

export default Hero
