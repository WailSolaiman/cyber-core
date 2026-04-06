import { Database, Network, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'

const links = [
  { label: 'TERMINAL', href: '#' },
  { label: 'ISO_27001', href: '#' },
  { label: 'DATA_PRIVACY', href: '#' },
]

export function SiteFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="section-x flex w-full min-w-0 flex-col items-center justify-between gap-8 border-t border-cyan-900/20 bg-surface-container-lowest py-10 md:flex-row md:py-12"
    >
      <div className="flex min-w-0 flex-col items-center gap-4 md:items-start">
        <div className="font-headline font-bold text-white">CYBER_CORE</div>
        <p className="font-label max-w-full text-center text-[10px] tracking-widest break-words text-slate-500 uppercase md:text-left">
          © {new Date().getFullYear()} CYBER_CORE TACTICAL. ALL RIGHTS RESERVED.
        </p>
      </div>
      <nav
        className="flex max-w-full flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end"
        aria-label="Footer"
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="font-label text-[10px] tracking-widest text-slate-500 uppercase transition-colors hover:text-cyan-300"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="flex gap-4 text-slate-500">
        <Share2 className="size-4" strokeWidth={1.5} aria-hidden />
        <Database className="size-4" strokeWidth={1.5} aria-hidden />
        <Network className="size-4" strokeWidth={1.5} aria-hidden />
      </div>
    </motion.footer>
  )
}
