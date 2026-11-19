import { useLayoutEffect } from 'react'
import './GridGap.css'

const CELL = 40 // must match background-size in Hero.css / GridGap.css / About.css

// Spacer between the hero and About that carries the hero's grid on, so the lines
// run unbroken across the gap. The hero's height is rarely a multiple of the cell
// size, so measure it and publish how far to shift the next grid (--grid-shift).
function GridGap() {
  useLayoutEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return
    const root = document.documentElement
    const update = () => {
      const rest = hero.getBoundingClientRect().height % CELL
      root.style.setProperty('--grid-shift', `${(CELL - rest) % CELL}px`)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(hero)
    return () => ro.disconnect()
  }, [])

  return <div className="grid-gap" aria-hidden="true" />
}

export default GridGap
