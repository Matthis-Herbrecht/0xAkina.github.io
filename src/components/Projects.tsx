import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { WordsPullUp } from './animations'

type Tag = 'LIVE' | 'DEMO' | 'GITHUB'

interface Project {
  name: string
  role: string
  description: string
  href: string
  tag: Tag
  cta?: string
  featured?: boolean
}

const CTA: Record<Tag, string> = {
  LIVE: 'Watch live',
  DEMO: 'View demo',
  GITHUB: 'View code',
}

const PROJECTS: Project[] = [
  {
    name: 'HyperLive',
    role: 'Real-Time Dashboard',
    description:
      'A real-time overview of Hyperliquid — top traders, liquidations and live market activity.',
    href: 'https://hyperlive-jade.vercel.app/',
    tag: 'LIVE',
    cta: 'Open live app',
    featured: true,
  },
  {
    name: 'Age of War Onchain',
    role: 'Onchain Game',
    description:
      'Onchain adaptation of Age of War with an onchain leaderboard and a dedicated relayer.',
    href: 'https://age-of-war-onchain.vercel.app',
    tag: 'DEMO',
  },
  {
    name: 'ERC-8004 Security Agents',
    role: 'Onchain Agents',
    description:
      'Suite of ERC-8004 agents scanning token security across Base, Ethereum and Ink.',
    href: 'https://github.com/Matthis-Herbrecht/Base-ERC-8004',
    tag: 'GITHUB',
  },
  {
    name: 'Base Sovereign Agent',
    role: 'Autonomous Agent',
    description: 'A sovereign AI agent living its own life onchain on Base.',
    href: 'https://github.com/Matthis-Herbrecht/Base-sovereign',
    tag: 'GITHUB',
  },
  {
    name: 'Visual Summarizer',
    role: 'AI Chrome Extension',
    description:
      'Turns articles and threads into visual summaries with auto-generated mind maps.',
    href: 'https://github.com/Matthis-Herbrecht/Visual-summarizer',
    tag: 'GITHUB',
  },
  {
    name: 'Weekly Research Digest',
    role: 'Research Automation',
    description:
      'Weekly digest scanning AI, blockchain, nanotech, quantum and synthetic biology.',
    href: 'https://github.com/Matthis-Herbrecht/weekly-research-digest',
    tag: 'GITHUB',
  },
  {
    name: 'Genesis Club',
    role: 'Premium Club',
    description: 'Premium business club dedicated to padel.',
    href: 'https://genesis-club-v1.vercel.app',
    tag: 'DEMO',
  },
]

function TagBadge({ tag }: { tag: Tag }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary/80">
      {tag === 'LIVE' && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
        </span>
      )}
      {tag}
    </span>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#101010] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-[#161616] md:p-8 ${
        project.featured ? 'lg:col-span-2 lg:bg-gradient-to-br lg:from-[#161616] lg:to-[#101010]' : ''
      }`}
      initial={{ y: 24, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.07, 0.5),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <span className="absolute left-0 top-0 h-px w-0 bg-primary/60 transition-all duration-500 group-hover:w-full" />

      <div className="flex items-center justify-between">
        <TagBadge tag={project.tag} />
        <ArrowUpRight className="h-4 w-4 -translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </div>

      <h3
        className={`mt-6 font-medium text-primary ${
          project.featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
        }`}
      >
        {project.name}
      </h3>
      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/55 md:text-xs">
        {project.role}
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-500">
        {project.description}
      </p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary/80 transition-colors group-hover:text-primary">
        {project.cta ?? CTA[project.tag]}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex items-baseline justify-between border-b border-white/10 pb-6">
          <h2 className="text-3xl font-medium tracking-[-0.02em] sm:text-4xl md:text-5xl">
            <WordsPullUp text="Projects" style={{ color: '#E1E0CC' }} />
          </h2>
          <span className="text-xs text-gray-500 md:text-sm">
            ({PROJECTS.length})
          </span>
        </div>

        {/* Card grid */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
