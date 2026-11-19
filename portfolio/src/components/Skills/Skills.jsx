import './Skills.css'
import flower from '../../assets/flower.png'

const skillGroups = [
  { title: 'programming languages', items: ['Java', 'Python', 'JavaScript'] },
  {
    title: 'frameworks & libraries',
    items: ['React', 'Node.js', 'Express', 'FastAPI', 'LangChain', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  { title: 'tools & platforms', items: ['Git', 'Docker', 'Jupyter Notebook', 'PowerPoint', 'Excel'] },
]

// the right half of the About section
function Skills() {
  return (
    <div className="half skills-half">
      {/* dried flowers at the top right, tilted so the stems point toward the right edge */}
      <img className="skills-flower" src={flower} alt="" aria-hidden="true" />
      <h3 className="marker-title pink">skills</h3>
      {skillGroups.map((group) => (
        <div className="skill-group dotted-box" key={group.title}>
          <h4 className="marker-label">{group.title}</h4>
          <ul>
            {group.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Skills
