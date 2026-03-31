import Link from 'next/link'
import { type ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-electric-500 text-white hover:bg-electric-400 focus:ring-electric-500',
    secondary: 'bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-900',
    outline: 'border-2 border-neutral-300 text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-500'
  }

  const classes = cn(baseStyles, variants[variant], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cn(classes, disabled && 'opacity-50 cursor-not-allowed')}>
      {children}
    </button>
  )
}




















































































































































































































