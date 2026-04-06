import { useEffect, useState } from 'react'
import { LANDING_CHAPTERS } from './chapters'

const ids = LANDING_CHAPTERS.map((c) => c.id)

/**
 * Picks the chapter whose block is nearest above a viewport band (for sticky rail).
 */
export function useActiveChapter() {
  const [activeId, setActiveId] = useState<string>(ids[0])

  useEffect(() => {
    const pick = () => {
      const band = window.innerHeight * 0.28
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const { top, bottom } = el.getBoundingClientRect()
        if (top <= band && bottom > 64) {
          current = id
        }
      }
      setActiveId((prev) => (prev === current ? prev : current))
    }

    pick()
    window.addEventListener('scroll', pick, { passive: true })
    window.addEventListener('resize', pick, { passive: true })
    return () => {
      window.removeEventListener('scroll', pick)
      window.removeEventListener('resize', pick)
    }
  }, [])

  return activeId
}
