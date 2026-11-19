import './About.css'
import useReveal from '../../hooks/useReveal'
import Skills from '../Skills/Skills'
import bridge from '../../assets/about-1.PNG'
import Calendar from '../Calendar/Calendar'

function About() {
  const [ref, visible] = useReveal()

  return (
    <section
      ref={ref}
      className={`grid-section about-section reveal${visible ? ' is-visible' : ''}`}
      id="about"
    >
      <div className="section-inner two-halves">
        {/* left half: about me */}
        <div className="half about-lines">
          <h3 className="marker-title">about me</h3>
          <div className="about-text dotted-box">
            <p>Write a few sentences about who you are and what got you into coding. Write a few sentences about who you are and what got you into coding.</p>

          </div>
          <div className="photo-row">
            <img className="about-photo" src={bridge} alt="The Bay Bridge in San Francisco at sunset, taped to the page like a photo" />
            <Calendar />
          </div>
        </div>

        {/* right half: skills */}
        <Skills />
      </div>
    </section>
  )
}

export default About
