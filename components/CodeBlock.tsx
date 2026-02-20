import { type ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

interface CodeBlockProps {
  children: ReactNode
  className?: string
  language?: string
}

export function CodeBlock({ children, className, language }: CodeBlockProps) {
  return (
    <div className={cn('relative rounded-lg overflow-hidden', className)}>
      {language && (
        <div className="px-4 py-2 bg-neutral-800 text-neutral-300 text-sm font-mono">
          {language}
        </div>
      )}
      <pre className={cn(
        'p-6 overflow-x-auto bg-neutral-900 text-neutral-100 font-mono text-sm leading-relaxed',
        !language && 'rounded-lg'
      )}>
        <code>{children}</code>
      </pre>
    </div>
  )
}




















































































































































































































