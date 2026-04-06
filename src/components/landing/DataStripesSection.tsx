import { MotionSection } from './MotionSection'

const stripes = [
  {
    n: '01',
    title: 'Adaptive Defense',
    body: 'Neural-pathway security that evolves with emerging threat vectors in real-time.',
  },
  {
    n: '02',
    title: 'Deep Analytics',
    body: 'Granular forensic visibility into every byte entering your secure perimeter.',
  },
  {
    n: '03',
    title: 'Quantum Encryption',
    body: 'Post-quantum cryptographic standards protecting sensitive institutional assets.',
  },
]

export function DataStripesSection() {
  return (
    <MotionSection
      id="threats"
      className="section-x relative overflow-hidden bg-surface-container-lowest py-20 md:py-24"
    >
      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
        {stripes.map((item) => (
          <div key={item.n} className="flex min-w-0 flex-col gap-4">
            <div className="font-headline text-3xl font-black text-white sm:text-4xl">
              {item.n}
            </div>
            <h3 className="font-label break-words font-bold tracking-widest text-primary-container uppercase">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed break-words text-on-surface-variant">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </MotionSection>
  )
}
