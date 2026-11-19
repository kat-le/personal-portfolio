import './About.css'
import profile from '../../assets/profile-2.JPG'
import sanFran from '../../assets/san-fran.jpeg'

function About() {
  return (
    <section className="about" id="about">
      <div className="photo-pair">
        <div className="photo a">
          <img className="bw" src={sanFran} alt="The Golden Gate Bridge seen from a beach in San Francisco" />
        </div>
        <div className="photo b">
          <img src={profile} alt="Katherine at her graduation, holding her cap in the air" />
          <span className="plus">+</span>
        </div>
        <span className="bubble" aria-hidden="true"><i /><i /><i /></span>
      </div>

      <div className="about-copy">
        <h3>About Me</h3>
        <p>Write a few sentences about who you are and what got you into coding.</p>
        <p>Mention what you study, what you enjoy building, and what you're learning now.</p>
        <p>Add something personal — hobbies, favorite places, or what you do away from the keyboard.</p>
      </div>
    </section>
  )
}

export default About
