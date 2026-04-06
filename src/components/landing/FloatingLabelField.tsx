import type { ComponentPropsWithoutRef } from 'react'

type FloatingLabelFieldProps = {
  id: string
  label: string
} & ComponentPropsWithoutRef<'input'>

export function FloatingLabelField({
  id,
  label,
  className,
  placeholder = ' ',
  ...rest
}: FloatingLabelFieldProps) {
  return (
    <div className="relative min-w-0">
      <input
        id={id}
        placeholder={placeholder}
        className={`peer block w-full border-0 border-b border-outline-variant bg-transparent px-0 py-2 font-medium text-on-surface transition-all focus:border-primary-container focus:ring-0 ${className ?? ''}`}
        {...rest}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-2 left-0 max-w-[min(100%,calc(100vw-2rem))] origin-left font-label text-[11px] tracking-widest text-slate-500 uppercase break-words transition-all duration-300 sm:text-sm peer-focus:-translate-y-6 peer-focus:scale-[0.85] peer-focus:text-primary-container peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-[0.85] peer-not-placeholder-shown:text-primary-container"
      >
        {label}
      </label>
    </div>
  )
}

type FloatingLabelTextareaProps = {
  id: string
  label: string
} & ComponentPropsWithoutRef<'textarea'>

export function FloatingLabelTextarea({
  id,
  label,
  className,
  placeholder = ' ',
  rows = 4,
  ...rest
}: FloatingLabelTextareaProps) {
  return (
    <div className="relative min-w-0">
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        className={`peer block w-full resize-none border-0 border-b border-outline-variant bg-transparent px-0 py-2 font-medium text-on-surface transition-all focus:border-primary-container focus:ring-0 ${className ?? ''}`}
        {...rest}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-2 left-0 max-w-[min(100%,calc(100vw-2rem))] origin-left font-label text-[11px] tracking-widest text-slate-500 uppercase break-words transition-all duration-300 sm:text-sm peer-focus:-translate-y-6 peer-focus:scale-[0.85] peer-focus:text-primary-container peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:scale-[0.85] peer-not-placeholder-shown:text-primary-container"
      >
        {label}
      </label>
    </div>
  )
}
