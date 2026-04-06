import { MotionSection } from './MotionSection'

export function CtaBandSection() {
  return (
    <MotionSection
      id="ops"
      className="section-x flex flex-col items-center bg-surface-container-low py-24 text-center md:py-32"
    >
      <h2 className="font-headline mb-6 max-w-full px-1 text-3xl font-black tracking-tighter break-words text-white sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl">
        Secure Your Infinite Perimeter.
      </h2>
      <p className="text-on-surface-variant mb-10 max-w-xl px-1 text-base break-words md:mb-12 md:text-lg">
        Join the 400+ global enterprises operating within the CYBER_CORE
        ecosystem.
      </p>
      <div className="flex w-full max-w-md justify-center px-2 sm:w-auto sm:max-w-none">
        <div className="bg-gradient-to-r from-primary-container to-transparent p-px">
          <button
            type="button"
            className="font-label w-full bg-surface px-8 py-4 font-black tracking-widest text-primary-container uppercase transition-all hover:bg-primary-container hover:text-on-primary sm:w-auto sm:px-12 sm:py-5"
          >
            DEPLOY NOW
          </button>
        </div>
      </div>
    </MotionSection>
  )
}
