import { Badge } from './ui/badge.jsx'
import { cn } from '@/lib/utils'

const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  return (
    <div
      className={cn(
        'mb-10 flex flex-col gap-3',
        align === 'center' && 'text-center items-center max-w-3xl mx-auto',
      )}
    >
      {eyebrow ? <Badge variant="outline">{eyebrow}</Badge> : null}
      <div>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        {description ? <p className="mt-3 text-lg text-muted-foreground">{description}</p> : null}
      </div>
    </div>
  )
}

export default SectionHeading

