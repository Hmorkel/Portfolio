import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  Rocket,
  Server,
  Sparkles,
  Workflow,
} from 'lucide-react'
import SectionHeading from '@/components/section-heading.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.jsx'

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact', href: '#contact' },
]

const heroStats = [
  { label: 'Products shipped', value: '18', meta: 'from fintech to climate' },
  { label: 'Avg. delivery speed', value: '27%', meta: 'faster than baseline teams' },
  { label: 'Stack coverage', value: 'frontend ↔ infra', meta: 'design aware leader' },
]

const projects = [
  {
    title: 'PulseFlow Analytics',
    summary:
      'Real-time energy analytics dashboard that ingests millions of IoT events per hour and translates them into actionable savings plans for utility partners.',
    stack: ['React', 'Remix API', 'WebSockets', 'PostgreSQL'],
    impact: ['-32% ops toil', '+18% retention'],
    links: {
      live: 'https://example.com/pulseflow',
      repo: 'https://github.com/heindre/pulseflow',
    },
  },
  {
    title: 'Nucleus Commerce Kit',
    summary:
      'Composable commerce starter focused on scalability. Features smart caching, role-based tooling, and frictionless checkout patterns tuned for growth teams.',
    stack: ['Vite', 'Node', 'GraphQL', 'Redis'],
    impact: ['4 week launch', '+$2.4M GMV'],
    links: {
      live: 'https://example.com/nucleus',
      repo: 'https://github.com/heindre/nucleus-kit',
    },
  },
  {
    title: 'Atlas Workflow Studio',
    summary:
      'Visual workflow studio that lets product teams describe business logic with blocks while generating tested APIs, CI, and observability hooks automatically.',
    stack: ['React', 'tRPC', 'Prisma', 'Kubernetes'],
    impact: ['90% test automation', '-40% regressions'],
    links: {
      live: 'https://example.com/atlas',
      repo: 'https://github.com/heindre/atlas-studio',
    },
  },
]

const experience = [
  {
    company: 'Glowforge Labs',
    role: 'Senior Product Engineer',
    period: '2023 — Present',
    summary:
      'Leading a cross-functional squad building creator-first tooling with a focus on experimentation velocity and reliable releases.',
    highlights: [
      'Re-architected shared component system that now powers 4 flagship apps.',
      'Stood up Observability-as-code playbook used org-wide within 6 weeks.',
    ],
  },
  {
    company: 'Wavefront Collective',
    role: 'Full Stack Engineer',
    period: '2021 — 2023',
    summary:
      'Owned project delivery across discovery, implementation, deployment, and L2 support for enterprise product teams.',
    highlights: [
      'Delivered 7 major launches on schedule while mentoring two new engineers.',
      'Cut provisioning time from 45 to 8 minutes by codifying infra modules.',
    ],
  },
]

const expertise = [
  {
    title: 'Experience Architecture',
    icon: Sparkles,
    description:
      'Translate ambiguous briefs into opinionated product direction, wire flows, and reusable primitives that accelerate whole teams.',
    bullets: ['Design systems', 'Workshops', 'CX diagnostics'],
  },
  {
    title: 'Full-stack Delivery',
    icon: MonitorSmartphone,
    description:
      'Own the journey from interface to infra. Comfortable shaping React, Node, and data layers with strong testing habits.',
    bullets: ['React & Vite', 'Node & GraphQL', 'Edge-ready APIs'],
  },
  {
    title: 'Operational Excellence',
    icon: Workflow,
    description:
      'Ship reliable surfaces using deep observability, resilient pipelines, and a dependency hygiene mindset.',
    bullets: ['CI/CD guardianship', 'Playbooks', 'Developer experience'],
  },
  {
    title: 'Scalable Foundations',
    icon: Server,
    description:
      'Model clean data contracts and infrastructure so features are easier to reason about and teams stay in flow.',
    bullets: ['PostgreSQL & Prisma', 'Cloud infra', 'IaC modules'],
  },
]

const testimonials = [
  {
    quote:
      'Heindre brings the rare mix of product sensitivity and systems thinking. We trust him with fuzzy bets and mission-critical launches alike.',
    author: 'Noelle Fitzgerald',
    title: 'Director of Product, Northwind Studio',
  },
  {
    quote:
      'Across our multi-cloud redesign, Heindre became the anchor for both discovery and delivery. His calm energy and focus kept everybody aligned.',
    author: 'Marcus Li',
    title: 'CTO, Stratus Health',
  },
]

const contactChannels = [
  { label: 'Email', href: 'mailto:hello@heindre.dev', icon: Mail },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/heindre', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/heindre', icon: Github },
]

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-overlay bg-grid-size opacity-70 grid-mask" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 sky-glow" />
      <div className="relative">
        <header className="sticky top-0 z-20 w-full border-b border-white/5 bg-[rgba(10,14,26,0.9)] backdrop-blur-md">
          <div className="container flex h-16 items-center justify-between">
            <a href="#hero" className="font-heading text-lg font-semibold tracking-tight">
              Heindre<span className="text-primary">.</span>
            </a>
            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  asChild
                  variant="ghost"
                  className="text-sm font-medium text-muted-foreground hover:text-white"
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
            </nav>
            <Button className="hidden md:inline-flex" asChild>
              <a href="mailto:hello@heindre.dev">
                Start a build
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </header>

        <main className="container space-y-24 pb-24 pt-16">
          <section id="hero" className="grid items-center gap-10 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-6">
              <Badge variant="accent" className="w-fit">
                Available for senior full-stack roles
              </Badge>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
                  Crafted in Manila · shipping worldwide
                </p>
                <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                  Heindre builds resilient product experiences across the stack.
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Pragmatic full-stack engineer who pairs tasteful interfaces with dependable
                  systems. I help venture-backed teams launch faster without compromising craft.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#projects">
                    See selected work
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:hello@heindre.dev">Book a working session</a>
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {heroStats.map((stat) => (
                  <Card key={stat.label} className="bg-card/80">
                    <CardHeader className="mb-0">
                      <CardTitle className="text-3xl text-white">{stat.value}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {stat.label}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-xs uppercase tracking-wide text-muted-foreground">
                      {stat.meta}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    Working model
                  </Badge>
                  <CardTitle className="text-2xl">Lead-level partner</CardTitle>
                  <CardDescription>
                    Opinionated about impact, collaborative in delivery. Expect async clarity,
                    inclusive rituals, and clean hand-offs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Based in Manila · UTC+8 · working with NYC + EU teams</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Rocket className="h-4 w-4 text-primary" />
                    <span>Fractional leadership, product squads, or focused sprints</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node', 'GraphQL', 'Go', 'AWS', 'DX'].map((chip) => (
                      <Badge key={chip} variant="outline">
                        {chip}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent border-primary/30">
                <CardHeader>
                  <CardTitle className="text-2xl">Next window</CardTitle>
                  <CardDescription>January 2026 — IRL kickoff optional</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <a href="mailto:hello@heindre.dev?subject=Let%27s build together">
                      Reserve discovery call
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="projects">
            <SectionHeading
              eyebrow="Case studies"
              title="Products that balanced craft and speed"
              description="Select engagements that highlight the breadth of full-stack problems I enjoy solving."
            />
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.title} className="flex h-full flex-col justify-between">
                  <div>
                    <CardHeader className="gap-3">
                      <Badge variant="secondary" className="w-fit">
                        {project.impact[0]}
                      </Badge>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.summary}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                        {project.stack.map((item) => (
                          <span key={item} className="rounded-full bg-white/5 px-3 py-1">
                            {item}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {project.impact.map((impact) => (
                          <li key={impact}>• {impact}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                  <div className="flex flex-wrap gap-3 border-t border-white/5 px-6 py-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.repo} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.links.live} target="_blank" rel="noreferrer">
                        Launch
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section id="experience">
            <SectionHeading
              eyebrow="Experience"
              title="Leadership in the details"
              description="Trusted to run point across ambiguous stakeholder goals, legacy systems, and multi-team delivery."
            />
            <div className="space-y-6">
              {experience.map((role) => (
                <Card key={role.company} className="relative overflow-hidden border-white/10">
                  <span className="absolute inset-0 -z-10 opacity-20 blur-3xl" />
                  <CardHeader className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <Badge variant="outline">{role.period}</Badge>
                      <CardTitle className="mt-3">
                        {role.role} — {role.company}
                      </CardTitle>
                    </div>
                    <CardDescription>{role.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {role.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary/60" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="expertise">
            <SectionHeading
              eyebrow="Expertise"
              title="Where I create leverage"
              description="From pixels to platforms, I treat every layer as a product surface that deserves thoughtful care."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {expertise.map((slice) => (
                <Card key={slice.title}>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                      <slice.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>{slice.title}</CardTitle>
                      <CardDescription>{slice.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2 text-sm">
                    {slice.bullets.map((bullet) => (
                      <span key={bullet} className="rounded-full bg-white/5 px-3 py-1">
                        {bullet}
                      </span>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Voices"
              title="Partners talk about working with me"
              description="Relational, calm, and intentional — I invest in communication practices that help teams ship confidently."
              align="center"
            />
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((item) => (
                <Card key={item.author} className="h-full bg-card/60">
                  <CardContent className="space-y-4">
                    <p className="text-lg text-white">“{item.quote}”</p>
                    <div>
                      <p className="font-semibold text-white">{item.author}</p>
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="contact">
            <SectionHeading
              eyebrow="Collaboration"
              title="Let’s build what’s next"
              description="I host lean discovery workshops, align on metrics, and then stand up the stack so your team can focus on momentum."
              align="center"
            />
            <Card className="mx-auto max-w-4xl border-primary/40 bg-gradient-to-br from-primary/15 via-transparent to-secondary/20 text-center shadow-glow-primary">
              <CardHeader className="space-y-4">
                <CardTitle className="text-3xl text-white">
                  High-energy partner for thoughtful teams
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  2-week onboarding · async friendly · artifact-driven communication
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-6">
                <div className="flex flex-wrap justify-center gap-4">
                  {contactChannels.map((channel) => (
                    <Button
                      key={channel.label}
                      variant="outline"
                      size="lg"
                      asChild
                      className="bg-white/10 text-white hover:bg-white/15"
                    >
                      <a href={channel.href} target="_blank" rel="noreferrer">
                        <channel.icon className="h-5 w-5" />
                        {channel.label}
                      </a>
                    </Button>
                  ))}
                </div>
                <Button size="lg" asChild className="px-10">
                  <a href="https://cal.com/heindre/intro" target="_blank" rel="noreferrer">
                    Schedule 30-min chemistry call
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </section>
        </main>

        <footer className="border-t border-white/5 py-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Heindre — intentional products, resilient systems.
        </footer>
      </div>
    </div>
  )
}

export default App
