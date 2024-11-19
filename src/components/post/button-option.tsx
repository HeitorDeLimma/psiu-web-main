import { ReactNode } from 'react'

interface ButtonOptionProps {
  children: ReactNode
  onClick(): void
  className?: string
}

export function ButtonOption({
  children,
  onClick,
  className = '',
}: ButtonOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`
        py-4 
        w-full
        text-sm
        text-zinc-300
        border-b-[1px]
        first:border-t-0
        border-zinc-700
        ${className}`}
    >
      {children}
    </button>
  )
}
