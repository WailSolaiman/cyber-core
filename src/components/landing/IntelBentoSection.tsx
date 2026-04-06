import { ArrowRight, Radar } from 'lucide-react'
import { MotionSection } from './MotionSection'

const serverRoomImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuADQ7Yv-RhMFynVvpGkCarvGAq3g8DXwAmGs1JRizJ1Kg98_34g0B0D330r9P_ohi0dQ4SiYbfa2JhBwfEg4Lns_Ipo_PBdoGrnm8xia6KlRmy2gKdLCJQO00U0Py0U5_RuavcgQFAh15u7Df5o8HLiUpoBzuRqTvbtz209GImAM_lbAS_vJ-9JpqVHXapUU7v9QEInIYY0es6G4iigF9mUxlrZwvckQQmU93qmqWFSz4xLefnWE1Zn97e-naXYMYMPiBuDtpOLtBc'

export function IntelBentoSection() {
  return (
    <MotionSection
      id="intel"
      className="section-x bg-background py-24 md:py-32"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-7xl grid-cols-12 gap-4">
        <div className="group relative col-span-12 flex min-h-[min(100vw,28rem)] flex-col justify-end overflow-hidden border border-outline-variant/30 bg-surface-container p-5 sm:min-h-[22rem] sm:p-8 md:min-h-[26rem] md:p-10 lg:col-span-8 lg:min-h-[500px] lg:p-12">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
            src={serverRoomImage}
            alt=""
          />
          <div className="relative z-10 flex min-w-0 flex-col justify-end">
            <div className="font-label mb-4 text-xs font-bold tracking-[0.2em] text-primary-container">
              INTELLIGENCE REPORT
            </div>
            <h2 className="font-headline mb-6 max-w-full text-2xl font-bold break-words text-white sm:text-3xl md:max-w-lg md:text-4xl">
              The 2026 Core Vulnerability Analysis
            </h2>
            <button
              type="button"
              className="font-label flex items-center gap-2 text-xs font-bold tracking-widest text-white transition-colors hover:text-primary-container"
            >
              DOWNLOAD_INTEL
              <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
            </button>
          </div>
        </div>

        <div className="col-span-12 flex min-h-[min(100vw,24rem)] flex-col justify-between border border-outline-variant/30 bg-surface-container-high p-5 sm:min-h-[22rem] sm:p-8 lg:col-span-4 lg:min-h-[500px]">
          <div className="min-w-0">
            <Radar
              className="mb-6 size-10 text-primary-container"
              strokeWidth={1.25}
              aria-hidden
            />
            <h3 className="font-headline mb-4 text-2xl font-bold text-white">
              Threat Horizon
            </h3>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Scanning the dark web and autonomous networks for targeted
              enterprise campaigns.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-l-2 border-primary-container bg-surface-container-lowest p-4">
              <span className="font-label text-[10px] text-white">
                VULN_SCAN: 94%
              </span>
              <span
                className="size-2 rounded-full bg-primary-container motion-safe:animate-pulse"
                aria-hidden
              />
            </div>
            <div className="flex items-center justify-between border-l-2 border-slate-700 bg-surface-container-lowest p-4 opacity-50">
              <span className="font-label text-[10px] text-white">
                TRACE_ROUTE: ACTIVE
              </span>
              <span className="size-2 rounded-full bg-slate-700" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
