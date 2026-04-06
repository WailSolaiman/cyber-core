import type { IconType } from 'react-icons/lib'
import {
  SiAkamai,
  SiCisco,
  SiCloudflare,
  SiGooglecloud,
  SiRedhat,
  SiVmware,
} from 'react-icons/si'
import { MotionSection } from './MotionSection'

const CUSTOMERS: { Icon: IconType; name: string }[] = [
  { Icon: SiGooglecloud, name: 'Google Cloud' },
  { Icon: SiCloudflare, name: 'Cloudflare' },
  { Icon: SiRedhat, name: 'Red Hat' },
  { Icon: SiCisco, name: 'Cisco' },
  { Icon: SiVmware, name: 'VMware' },
  { Icon: SiAkamai, name: 'Akamai' },
]

export function CustomerLogosSection() {
  return (
    <MotionSection
      id="ecosystem"
      className="section-x bg-background py-20 md:py-24"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div className="min-w-0">
            <span className="font-label mb-3 block text-xs tracking-[0.2em] text-primary-container uppercase">
              TRUSTED_ECOSYSTEM
            </span>
            <h2 className="font-headline text-2xl font-bold tracking-tight break-words text-white sm:text-3xl md:text-4xl">
              Built where you already operate
            </h2>
          </div>
          <p className="w-full max-w-md text-left text-sm leading-relaxed break-words text-on-surface-variant md:text-right">
            Fortune 500 financials, regulated health, and critical infrastructure
            teams run CYBER_CORE alongside the stacks they standardize on—no
            rip-and-replace playbook required.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 border border-outline-variant/30 bg-surface-container-lowest/60 px-4 py-10 sm:gap-x-12 sm:gap-y-10 sm:px-8 sm:py-12 md:justify-between md:gap-x-14 md:px-12">
          {CUSTOMERS.map(({ Icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-primary-container"
              title={name}
            >
              <Icon
                className="h-8 w-auto opacity-80 md:h-10"
                aria-hidden
              />
              <span className="font-label text-[9px] tracking-widest uppercase opacity-0 transition-opacity hover:opacity-100 md:opacity-60">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
