import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-tight uppercase',
  {
    variants: {
      variant: {
        default: 'border-primary/40 bg-primary/10 text-primary-foreground/80',
        secondary: 'border-secondary/30 bg-secondary/10 text-secondary-foreground/80',
        accent: 'border-accent/40 bg-accent/15 text-accent-foreground/80',
        outline: 'border-border text-muted-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Badge = ({ className, variant, ...props }) => (
  <div className={cn(badgeVariants({ variant }), className)} {...props} />
)

export { Badge, badgeVariants }

