import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
  'aria-label'?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime focus-visible:outline-offset-3 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-lime text-obsidian font-body font-semibold hover:bg-lime-soft active:scale-[0.98]',
    ghost:
      'bg-transparent text-bone font-body font-medium hover:text-lime border-b-2 border-transparent hover:border-lime pb-0.5',
    outline:
      'bg-transparent text-lime border border-lime font-body font-medium hover:bg-lime hover:text-obsidian',
  }

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-sm px-7 py-3.5',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) return <Link to={to} className={classes} aria-label={ariaLabel}>{children}</Link>
  if (href) return <a href={href} className={classes} aria-label={ariaLabel}>{children}</a>
  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
