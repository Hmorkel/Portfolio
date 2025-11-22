import React from 'react'
import { cn } from '@/lib/utils'

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-[inset_0_1px_rgba(255,255,255,0.08)] backdrop-blur',
      className,
    )}
    {...props}
  />
))
Card.displayName = 'Card'

const CardHeader = ({ className, ...props }) => (
  <div className={cn('mb-4 flex flex-col gap-1', className)} {...props} />
)

const CardTitle = ({ className, ...props }) => (
  <h3 className={cn('font-heading text-xl font-semibold text-white', className)} {...props} />
)

const CardDescription = ({ className, ...props }) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...props} />
)

const CardContent = ({ className, ...props }) => (
  <div className={cn('space-y-3 text-sm text-muted-foreground', className)} {...props} />
)

export { Card, CardHeader, CardTitle, CardDescription, CardContent }

