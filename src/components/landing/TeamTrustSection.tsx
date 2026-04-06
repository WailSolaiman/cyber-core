import { motion } from 'framer-motion'
import { MotionSection } from './MotionSection'

const portraitSrc = '/M_Vasquez.jpeg'

export function TeamTrustSection() {
  return (
    <MotionSection
      id="team"
      className="section-x border-t border-outline-variant/30 bg-surface-container-low py-20 md:py-28"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-7xl gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <motion.div
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden border border-outline-variant/30 bg-surface-container-lowest sm:max-w-lg lg:col-span-5 lg:mx-0 lg:max-h-[420px] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={portraitSrc}
            alt="M. Vasquez, Director of Offensive Security at CYBER_CORE"
            className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
            loading="lazy"
            decoding="async"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/25 to-transparent" aria-hidden />
          <div className="absolute right-0 bottom-0 left-0 min-w-0 p-4 sm:p-6">
            <div className="font-label text-[10px] tracking-[0.25em] text-primary-container uppercase">
              FIELD_LEADERSHIP
            </div>
            <p className="mt-2 font-headline text-base font-bold break-words text-white drop-shadow-sm sm:text-lg">
              Former operators. Current builders.
            </p>
          </div>
        </motion.div>

        <div className="min-w-0 lg:col-span-7">
          <blockquote className="font-headline text-xl leading-snug font-medium tracking-tight break-words text-white sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="text-primary-container">“</span>
            We don’t sell fear—we ship evidence. Every engagement ends with
            artifacts your board can trace: timelines, blast radius, and the
            humans who stood it up.
            <span className="text-primary-container">”</span>
          </blockquote>
          <div className="mt-10 h-px w-24 bg-outline-variant" aria-hidden />
          <div className="mt-8">
            <cite className="font-headline not-italic text-lg font-bold text-white">
              M. Vasquez
            </cite>
            <p className="font-label mt-1 text-xs tracking-widest break-words text-slate-500 uppercase">
              Director of Offensive Security · CYBER_CORE
            </p>
          </div>
          <p className="mt-8 max-w-xl text-sm leading-relaxed break-words text-on-surface-variant">
            Our incident leads come from national CSIRT backgrounds and
            commercial red teams. When you page us, you get practitioners—not
            account managers reading from a script.
          </p>
        </div>
      </div>
    </MotionSection>
  )
}
