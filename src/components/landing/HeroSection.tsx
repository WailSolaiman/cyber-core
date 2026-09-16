import { motion } from 'framer-motion'
import { ShieldCheck, Terminal } from 'lucide-react'

/**
 * Fiber-optic macro: glowing strands fill the centre-right, only a narrow dark
 * strip on the left. The veil stays light so the strands read, while the fade
 * keeps the left edge near-solid — that is what holds the headline off them.
 */
const hero = {
  file: 'hero3.webp',
  position: 'object-[45%_center] md:object-center',
  veil: 'bg-background/20',
  fade: 'bg-gradient-to-r from-background/92 via-background/28 to-background/10',
}
const heroImage = `${import.meta.env.BASE_URL}${hero.file}`

export function HeroSection() {
  return (
    <section
      id="top"
      className="section-x relative grid h-dvh min-h-[52rem] grid-cols-12 content-center items-start gap-x-6 overflow-hidden pt-24 pb-14 sm:min-h-[48rem] sm:pt-28 sm:pb-16 lg:min-h-[48rem] lg:pb-12"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden
          className={`absolute inset-0 size-full object-cover ${hero.position}`}
        />
        {/* Flat scrim, then a directional fade that keeps the headline column
            solid while the bright side of the image survives. */}
        <div className={`absolute inset-0 ${hero.veil}`} aria-hidden />
        <div className={`absolute inset-0 ${hero.fade}`} aria-hidden />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-page"
          aria-hidden
        />
      </div>

      <div className="relative z-20 col-span-12 min-w-0 lg:col-span-9">
        <motion.div
          className="mb-5 flex min-w-0 flex-wrap items-center gap-3 sm:gap-4"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
        >
          <span className="h-px w-12 bg-primary-container" aria-hidden />
          <span className="font-label min-w-0 text-xs font-bold tracking-widest break-words text-primary-container uppercase">
            System Status: Shield Active
          </span>
        </motion.div>
        <motion.h1
          className="font-headline mb-8 max-w-full text-4xl leading-[0.95] font-black tracking-tighter break-words text-white sm:text-5xl md:text-6xl md:leading-none lg:text-7xl xl:max-w-5xl xl:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Invisible Protection.
          <br />
          <span className="hero-stroke">Absolute Control.</span>
        </motion.h1>
      </div>

      <div className="relative z-20 col-span-12 mt-6 min-w-0 lg:col-span-4 lg:col-start-1 lg:mt-0">
        <motion.p
          className="text-on-surface-variant mb-6 max-w-md text-base leading-relaxed break-words sm:mb-8 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.45 }}
        >
          Deploying military-grade digital perimeters. We neutralize threats
          before they materialize within your infrastructure.
        </motion.p>
        <motion.div
          className="flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.45 }}
        >
          <button
            type="button"
            className="glow-hover font-label flex w-full min-w-0 items-center justify-center gap-3 bg-primary-container px-6 py-4 text-xs font-black tracking-widest text-on-primary uppercase transition-all sm:w-auto sm:px-8 sm:text-sm"
          >
            INITIATE SCAN
            <Terminal className="size-5 shrink-0" strokeWidth={2} aria-hidden />
          </button>
          <button
            type="button"
            className="font-label w-full min-w-0 border border-outline-variant px-6 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all hover:border-primary-container sm:w-auto sm:px-8 sm:text-sm"
          >
            VIEW PROTOCOLS
          </button>
        </motion.div>
      </div>

      <motion.div
        className="relative z-20 col-span-12 mt-10 min-w-0 lg:col-span-4 lg:col-start-9 lg:mt-0"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.5 }}
      >
        <div className="glass-panel min-w-0 overflow-hidden border-l border-primary-container bg-surface-container-low p-5 sm:p-6">
          <div className="mb-6 flex min-w-0 items-start justify-between gap-3 sm:mb-8">
            <div className="min-w-0">
              <div className="font-label mb-1 text-[10px] tracking-widest text-slate-500 uppercase">
                Global Node
              </div>
              <div className="font-headline text-2xl font-bold tracking-tight text-white">
                OS-X7 VECTOR
              </div>
            </div>
            <ShieldCheck
              className="size-8 shrink-0 text-primary-container"
              strokeWidth={1.5}
              aria-hidden
            />
          </div>
          <div className="space-y-4">
            <div className="flex min-w-0 items-center justify-between gap-2 border-b border-outline-variant pb-2">
              <span className="font-label min-w-0 shrink text-[10px] tracking-widest break-words text-slate-400 uppercase">
                Live Intercepts
              </span>
              <span className="font-headline shrink-0 font-bold text-primary-container">
                14,802
              </span>
            </div>
            <div className="flex min-w-0 items-center justify-between gap-2 border-b border-outline-variant pb-2">
              <span className="font-label min-w-0 shrink text-[10px] tracking-widest break-words text-slate-400 uppercase">
                Sync Latency
              </span>
              <span className="font-headline shrink-0 font-bold text-white">0.4ms</span>
            </div>
            <div className="flex min-w-0 items-center justify-between gap-2">
              <span className="font-label min-w-0 shrink text-[10px] tracking-widest break-words text-slate-400 uppercase">
                Perimeter Strength
              </span>
              <span className="font-headline shrink-0 font-bold text-white">99.9%</span>
            </div>
          </div>
          <div className="relative mt-6 hidden h-20 w-full overflow-hidden bg-surface-container-lowest sm:block">
            <div className="scanline absolute inset-0" aria-hidden />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-container/10 to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
