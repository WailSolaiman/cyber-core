import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const SCROLL_THRESHOLD = 480

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.92, y: 6 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-md border border-cyan-900/40 bg-surface-container-low text-slate-200 shadow-lg shadow-black/20 backdrop-blur-sm transition-colors hover:border-cyan-500/50 hover:bg-surface-container hover:text-primary-container sm:bottom-8 sm:right-8"
          onClick={goTop}
          aria-label="Back to top"
        >
          <ChevronUp className="size-5" strokeWidth={2.25} aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
