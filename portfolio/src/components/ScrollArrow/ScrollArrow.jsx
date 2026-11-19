import './ScrollArrow.css'
import arrow from '../../assets/arrow.png'

// Bobbing hand-drawn arrow pinned to the bottom of its (positioned) parent section.
// Clicking glides down to the section with id `target`.
function ScrollArrow({ target, label }) {
  return (
    <button
      type="button"
      className="scroll-arrow"
      aria-label={label}
      onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })}
    >
      <img className="scroll-arrow-img" src={arrow} alt="" aria-hidden="true" />
    </button>
  )
}

export default ScrollArrow
