import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LANDING_HEADER_NAV } from './chapters'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuPanelId = useId()

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [menuOpen])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => {
      if (mq.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 z-50 grid min-h-14 w-full min-w-0 grid-cols-[1fr_auto] items-center gap-2 border-b border-cyan-900/30 bg-transparent px-4 py-3 backdrop-blur-xl sm:min-h-16 sm:gap-3 sm:px-6 sm:py-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:px-8 lg:px-12"
    >
      <a
        href="#top"
        className="font-headline min-w-0 shrink-0 justify-self-start truncate text-lg font-black tracking-tighter text-white sm:text-xl"
        onClick={closeMenu}
      >
        CYBER_CORE
      </a>
      <nav
        className="hidden items-center justify-center gap-x-4 whitespace-nowrap lg:gap-x-5 xl:gap-x-6 md:col-start-2 md:row-start-1 md:flex"
        aria-label="Primary"
      >
        {LANDING_HEADER_NAV.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="font-label text-[11px] font-bold tracking-[0.04em] text-slate-400 uppercase transition-colors hover:text-white xl:text-xs xl:tracking-[0.05em]"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="col-start-2 flex items-center justify-end gap-2 md:col-start-3 md:row-start-1">
        <a
          href="#uplink"
          className="glow-hover font-label hidden shrink-0 bg-primary-container px-3 py-2 text-[10px] font-bold tracking-widest text-on-primary uppercase transition-all active:scale-95 sm:px-5 sm:text-xs md:inline-flex md:items-center"
          onClick={closeMenu}
        >
          ENCRYPTED_PORTAL
        </a>
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-cyan-900/40 text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-white md:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuPanelId}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X className="size-5" strokeWidth={2} /> : <Menu className="size-5" strokeWidth={2} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id={menuPanelId}
            role="dialog"
            aria-modal="true"
            aria-label="Site sections"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-14 z-40 flex flex-col border-t border-cyan-900/30 bg-page sm:top-16 md:hidden"
          >
            <nav
              className="flex flex-col gap-2 p-4 sm:gap-2.5 sm:p-6"
              aria-label="Primary mobile"
            >
              {LANDING_HEADER_NAV.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                  className="font-label rounded-md border border-cyan-900/25 bg-surface-container-low px-4 py-3 text-sm font-bold tracking-[0.06em] text-slate-200 uppercase transition-colors hover:border-cyan-600/40 hover:bg-surface-container hover:text-white"
                  onClick={closeMenu}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
