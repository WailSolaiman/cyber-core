import {
  ArrowRight,
  Boxes,
  Database,
  Network,
  ShieldPlus,
  Terminal,
} from 'lucide-react'
import { MotionSection } from './MotionSection'

const threatMapImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCPJTjbwHDinZ_tcbawqQfm1DZvG0P4DZACQhbuEzdqDhr2HvRB0SCuBxsPeJS-i5waevCGOrbe6jPs4FPDCqnm1Y8fVOiVD6FpWTmp9S9d5QGrA-xVTPm9QJXPwFM2vJanIBNcHIshk96ucnYUZ11K_Lo9G51dAlEdR93m-epqf0ZilSfVvd17dCeuohAnZvL9lzXgT9hh_Q9sBoproqFCZxilqlA2rSxUZnw7kouDYF4HQ5eUEdih_DsVU6QBxCMH6YadndJYQ20'

export function CapabilitiesSection() {
  return (
    <MotionSection
      id="network"
      className="section-x relative overflow-hidden border-t border-outline-variant/30 bg-background py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        aria-hidden
      >
        <div className="kinetic-line top-[15%] left-[-10%] rotate-[-12deg]" />
        <div className="kinetic-line top-[45%] right-[-5%] rotate-[5deg]" />
        <div className="kinetic-line top-[75%] left-[-20%] rotate-[-8deg]" />
        <div className="node-point top-[15%] left-[20%]" />
        <div className="node-point top-[45%] right-[30%]" />
        <div className="node-point top-[75%] left-[45%]" />
      </div>

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-24 md:flex-row md:items-end">
          <div className="max-w-full min-w-0 md:max-w-2xl">
            <span className="font-label mb-4 block text-xs tracking-[0.2em] text-primary-container uppercase">
              SYSTEM_CAPABILITIES_04
            </span>
            <h2 className="font-headline text-3xl leading-[0.95] font-bold tracking-tight break-words text-white sm:text-4xl md:text-6xl lg:text-7xl">
              Zero-Trust <br />
              <span className="text-primary-container">Architecture</span>
            </h2>
          </div>
          <div className="w-full max-w-full min-w-0 text-left md:max-w-xs md:text-right">
            <p className="text-sm leading-relaxed break-words text-on-surface-variant">
              Moving beyond perimeter defense. We implement granular identity
              verification at every data node within the kinetic perimeter.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
          <div className="glass-panel group flex min-h-[min(100vw,24rem)] flex-col justify-between border border-outline-variant/30 border-l-2 border-primary-container bg-surface-container-lowest p-5 transition-colors hover:bg-surface-container sm:min-h-[22rem] sm:p-8 md:col-span-7 md:min-h-[400px]">
            <div className="flex min-w-0 items-start justify-between gap-3">
              <ShieldPlus
                className="size-8 shrink-0 text-primary-container sm:size-10"
                strokeWidth={1.25}
                aria-hidden
              />
              <span className="font-label text-right text-[9px] tracking-widest break-all text-slate-500 uppercase sm:text-[10px]">
                NODE_STATUS: ACTIVE
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="font-headline mb-4 text-xl font-bold tracking-tight break-words text-white uppercase sm:text-2xl md:text-3xl">
                IDENTITY_VETTING
              </h3>
              <p className="max-w-md break-words text-on-surface-variant">
                Continuous authentication protocols that analyze behavioral
                patterns and hardware signatures to ensure zero spoofing
                capability across the network segment.
              </p>
              <div className="mt-8 flex min-w-0 gap-4">
                <div className="h-px min-w-0 flex-1 self-center bg-outline-variant" />
                <span className="font-label shrink-0 text-[10px] break-all text-primary-container">
                  VERIFIED_ACCESS
                </span>
              </div>
            </div>
          </div>

          <div className="glass-panel group relative mt-8 min-h-[260px] overflow-hidden border border-outline-variant/30 bg-surface-container-lowest p-5 transition-colors hover:border-primary-container sm:mt-12 sm:min-h-[300px] sm:p-8 md:col-span-5 md:mt-0">
            <div className="absolute top-0 right-0 p-4 text-primary-container/20">
              <Boxes className="size-24" strokeWidth={1} aria-hidden />
            </div>
            <div className="relative z-10 min-w-0">
              <Network
                className="mb-6 size-9 text-primary-container"
                strokeWidth={1.25}
                aria-hidden
              />
              <h3 className="font-headline mb-3 text-xl font-bold break-words text-white uppercase sm:text-2xl">
                MICRO_SEGMENTATION
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                Isolating workloads to prevent lateral movement. If one node is
                compromised, the perimeter holds.
              </p>
            </div>
          </div>

          <div className="glass-panel group flex min-h-[280px] flex-col justify-end border border-outline-variant/30 bg-surface-container-lowest p-5 transition-colors hover:bg-surface-container sm:min-h-[320px] sm:p-8 md:col-span-4 md:min-h-[350px]">
            <Terminal
              className="mb-auto size-9 text-primary-container"
              strokeWidth={1.25}
              aria-hidden
            />
            <h3 className="font-headline mb-3 text-xl font-bold break-words text-white uppercase sm:text-2xl">
              ENCRYPTED_FLOW
            </h3>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              End-to-end post-quantum cryptographic tunneling for all internal
              communications and data at rest.
            </p>
          </div>

          <div className="glass-panel group relative min-h-[220px] overflow-hidden border border-outline-variant/30 bg-surface-container-low sm:min-h-[280px] md:col-span-8 md:h-[350px] md:min-h-0">
            <img
              className="h-full w-full object-cover opacity-40 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
              src={threatMapImage}
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-80" />
            <div className="absolute right-0 bottom-0 left-0 min-w-0 p-4 sm:p-8">
              <div className="mb-2 flex min-w-0 items-center gap-3">
                <span
                  className="size-2 shrink-0 bg-primary-container motion-safe:animate-pulse"
                  aria-hidden
                />
                <span className="font-label min-w-0 text-[10px] tracking-widest break-words text-primary-container sm:text-xs">
                  LIVE_THREAT_MAP
                </span>
              </div>
              <h4 className="font-headline text-base font-bold break-words text-white uppercase sm:text-lg md:text-xl">
                NEURAL_SENTINEL_OVERWATCH
              </h4>
            </div>
          </div>

          <div className="glass-panel group mt-8 border border-outline-variant/30 bg-surface-container-lowest p-5 transition-colors hover:border-primary-container sm:mt-12 sm:p-8 md:col-span-6 md:col-start-4 md:p-10">
            <div className="flex min-w-0 flex-col items-start gap-6 sm:flex-row">
              <div className="shrink-0 border border-outline-variant/30 bg-surface-container-high p-4">
                <Database
                  className="size-6 text-primary-container"
                  strokeWidth={1.25}
                  aria-hidden
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-headline mb-2 text-xl font-bold break-words text-white uppercase sm:text-2xl">
                  DATA_IMMUTABILITY
                </h3>
                <p className="mb-6 text-sm break-words text-on-surface-variant">
                  Distributed ledger verification for system logs, ensuring that
                  no breach attempt can ever be erased from history.
                </p>
                <button
                  type="button"
                  className="font-label flex items-center gap-2 text-xs tracking-widest text-primary-container transition-transform group-hover:translate-x-2"
                >
                  READ_WHITEPAPER
                  <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
