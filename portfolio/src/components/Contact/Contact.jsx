import './Contact.css'

function Contact() {
  return (
    <section className="mini-cards" id="contact">
      <article className="mini">
        <div className="mini-head"><span className="dot-icon">✦</span><span>Skills</span></div>
        <p>JavaScript, React, HTML &amp; CSS, Git. Add what you work with most.</p>
      </article>
      <article className="mini">
        <div className="mini-head"><span className="dot-icon ring">○</span><span>Experience</span></div>
        <p>Classes, internships, and clubs that shaped how you build.</p>
      </article>
      <article className="mini pin">
        <div className="pin-icon" aria-hidden="true" />
        <div className="mini-head"><span>Get in touch</span></div>
        <p>your.email@example.com</p>
        <p>github.com/yourname</p>
        <p>San Jose, CA</p>
      </article>
    </section>
  )
}

export default Contact
