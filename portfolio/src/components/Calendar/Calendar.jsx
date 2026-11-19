import { useEffect, useState } from 'react'
import './Calendar.css'

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

function buildWeeks(year, month) {
  const leading = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells = [...Array(leading).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)]
  while (cells.length % 7 !== 0) cells.push(null)
  const weeks = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))
  return weeks
}

// Current month with today highlighted. Rolls over to the next day/month at midnight.
function Calendar() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    const id = setTimeout(() => setNow(new Date()), nextMidnight - now + 1000)
    return () => clearTimeout(id)
  }, [now])

  const year = now.getFullYear()
  const month = now.getMonth()
  const today = now.getDate()
  const weeks = buildWeeks(year, month)

  return (
    <div className="calendar dotted-box">
      <div className="calendar-title">
        {MONTHS[month]} <span>{year}</span>
      </div>
      <table aria-label={`${MONTHS[month]} ${year}`}>
        <thead>
          <tr>
            {WEEKDAYS.map((d, i) => (
              <th key={i} scope="col" aria-label={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][i]}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, wi) => (
            <tr key={wi}>
              {week.map((day, di) => (
                <td key={di}>
                  {day && (
                    <span
                      className={day === today ? 'is-today' : undefined}
                      aria-current={day === today ? 'date' : undefined}
                    >
                      {day}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar
