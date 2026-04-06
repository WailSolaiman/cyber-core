import { ArrowRight, Lock } from 'lucide-react'
import type { FormEvent } from 'react'
import { FloatingLabelField, FloatingLabelTextarea } from './FloatingLabelField'
import { MotionSection } from './MotionSection'

const compliance = [
  'ISO_27001_COMPLIANT',
  'E2E_ENCRYPTION_ENABLED',
  'GLOBAL_THREAT_MONITORING',
]

export function SecureUplinkSection() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <MotionSection
      id="uplink"
      className="section-x relative overflow-hidden border-t border-outline-variant/30 bg-background py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(#3b494b 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-5">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-block max-w-full border border-primary-container/40 bg-primary-container/5 px-3 py-1 font-headline text-[10px] font-bold tracking-[0.2em] break-words text-primary-container uppercase">
              SYSTEM_STATUS: READY
            </div>
            <h2 className="font-headline text-4xl leading-[0.9] font-black tracking-tighter break-words text-white sm:text-5xl md:text-6xl lg:text-7xl">
              INITIATE
              <br />
              SECURE
              <br />
              UPLINK
            </h2>
            <div className="h-1 w-24 bg-primary-container" aria-hidden />
            <p className="max-w-md text-base leading-relaxed break-words text-on-surface-variant md:text-lg">
              Establish a high-priority connection with our offensive security
              team. Encrypted transmission protocols are currently active.
              Zero-trust validation applied to all outgoing requests.
            </p>
            <div className="relative pt-8">
              <div
                className="absolute top-8 left-0 h-32 w-px bg-gradient-to-b from-primary-container to-transparent"
                aria-hidden
              />
              <ul className="space-y-6 pl-8">
                {compliance.map((item) => (
                  <li key={item} className="group flex items-center gap-4">
                    <span
                      className="size-2 bg-primary-container transition-shadow group-hover:shadow-[0_0_8px_#00f0ff]"
                      aria-hidden
                    />
                    <span className="font-label min-w-0 text-xs tracking-widest break-all text-slate-500">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative min-w-0 border border-outline-variant/30 bg-surface-container-lowest/50 p-5 pt-12 backdrop-blur-sm sm:p-8 md:col-span-7 md:p-12 md:pt-12">
          <div className="font-label mb-4 text-[10px] tracking-tighter break-all text-slate-600 md:absolute md:top-0 md:right-0 md:mb-0 md:max-w-[50%] md:p-4 md:text-right">
            NODE_ID: 8842-X
          </div>
          <form className="space-y-10 md:space-y-12" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <FloatingLabelField
                id="identifier"
                name="identifier"
                label="IDENTIFIER"
                autoComplete="name"
              />
              <FloatingLabelField
                id="org"
                name="org"
                label="ORGANIZATION"
                autoComplete="organization"
              />
            </div>
            <FloatingLabelField
              id="email_uplink"
              name="email_uplink"
              type="email"
              label="SECURE_COMM_ADDRESS"
              autoComplete="email"
            />
            <FloatingLabelTextarea
              id="intent"
              name="intent"
              label="INTENT_PARAMETERS"
            />
            <div className="flex flex-col items-center justify-between gap-8 pt-8 md:flex-row">
              <div className="flex items-center gap-3">
                <Lock
                  className="size-4 shrink-0 text-primary-container"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="font-label min-w-0 text-center text-[10px] tracking-widest break-words text-slate-500 uppercase md:text-left">
                  Verification Level: Maximum
                </span>
              </div>
              <button
                type="submit"
                className="glow-hover group flex w-full items-center justify-center gap-4 bg-primary-container px-12 py-5 font-headline text-lg font-black text-on-primary transition-all active:scale-95 md:w-auto"
              >
                DEPLOY REQUEST
                <ArrowRight
                  className="size-5 transition-transform group-hover:translate-x-1"
                  strokeWidth={2}
                  aria-hidden
                />
              </button>
            </div>
          </form>
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-outline-variant/30 pt-8 opacity-40">
            <div className="flex flex-col font-label text-[9px] text-slate-500">
              <span>LATENCY</span>
              <span className="text-primary-container">12MS</span>
            </div>
            <div className="flex flex-col font-label text-[9px] text-slate-500">
              <span>H-HASH</span>
              <span className="text-primary-container">SHA-256</span>
            </div>
            <div className="flex flex-col font-label text-[9px] text-slate-500">
              <span>PROTOCOL</span>
              <span className="text-primary-container">TLS_1.3</span>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
