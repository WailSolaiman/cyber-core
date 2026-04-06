import { LANDING_CHAPTERS } from './chapters'
import { useActiveChapter } from './useActiveChapter'

export function ChapterNav() {
  const activeId = useActiveChapter()

  return (
    <nav
      className="pointer-events-none fixed top-24 right-6 z-40 hidden flex-col items-end gap-1 xl:flex"
      aria-label="On this page"
    >
      <div className="pointer-events-auto flex min-w-[12rem] flex-col gap-0.5 border-l border-outline-variant/40 bg-page/85 py-2 pl-4 pr-3 backdrop-blur-sm">
        <span className="font-label mb-2 text-[9px] tracking-[0.2em] text-slate-600 uppercase">
          Chapters
        </span>
        {LANDING_CHAPTERS.map((ch) => {
          const active = activeId === ch.id
          return (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              className={`font-label flex items-center gap-2 text-[10px] tracking-widest transition-colors ${
                active
                  ? 'text-primary-container'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <span
                className={`tabular-nums ${active ? 'text-primary-container' : 'text-slate-600'}`}
              >
                {ch.code}
              </span>
              <span
                className={`max-w-[10.5rem] truncate border-b pb-px ${
                  active ? 'border-primary-container' : 'border-transparent'
                }`}
              >
                {ch.label}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
