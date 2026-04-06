import { motion } from 'framer-motion'
import type { ComponentPropsWithoutRef } from 'react'

type MotionSectionProps = ComponentPropsWithoutRef<typeof motion.section>

export function MotionSection({
  children,
  className,
  ...rest
}: MotionSectionProps) {
  return (
    <motion.section
      className={['w-full min-w-0', className].filter(Boolean).join(' ')}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-72px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.section>
  )
}
