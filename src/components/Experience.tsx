import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { WordsPullUp } from './animations'

interface Experience {
  company: string
  role: string
  description: string
  href: string
}

const EXPERIENCES: Experience[] = [
  {
    company: 'Outlier Ventures',
    role: 'Token Designer',
    description: 'Leading Web3 accelerator and early-stage investor.',
    href: 'https://outlierventures.io/',
  },
  {
    company: 'Pyratz Labs',
    role: 'DeFi Analyst & Researcher',
    description: 'Web3 venture fund and accelerator.',
    href: 'https://www.pyratzlabs.com/',
  },
  {
    company: 'Vending Machine',
    role: 'Protocol Specialist',
    description: 'A crypto-economic studio.',
    href: 'https://x.com/vm_economics',
  },
  {
    company: 'Equisafe',
    role: 'Advisor',
    description: 'Biggest tokenization platform in France.',
    href: 'https://equisafe.io/fr',
  },
  {
    company: 'Good Games Guild',
    role: 'Data Analyst',
    description: 'Web3 gaming guild and ecosystem.',
    href: 'https://www.gg.xyz/',
  },
  {
    company: 'Pokenomix',
    role: 'CEO',
    description: 'Token design agency.',
    href: 'https://twitter.com/Pokenomix',
  },
  {
    company: 'Token Engineering',
    role: 'Leading the French Session',
    description: 'Tokenomics education.',
    href: 'https://tokenengineering.net/',
  },
  {
    company: 'Cointribune',
    role: 'Writer',
    description: 'Leading French crypto media.',
    href: 'https://www.cointribune.com/',
  },
  {
    company: 'WASD',
    role: 'Onchain Gaming Writer',
    description: 'Onchain gaming research publication.',
    href: 'https://wasd.mirror.xyz/',
  },
]

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.a
      ref={ref}
      href={exp.href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#101010] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-[#161616] md:p-8"
      initial={{ y: 24, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.07, 0.5),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Top accent line that grows on hover */}
      <span className="absolute left-0 top-0 h-px w-0 bg-primary/60 transition-all duration-500 group-hover:w-full" />

      <ArrowUpRight className="absolute right-6 top-6 h-4 w-4 -translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />

      <h3 className="pr-6 text-lg font-medium text-primary md:text-xl">
        {exp.company}
      </h3>
      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/70 md:text-xs">
        {exp.role}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-gray-400">
        {exp.description}
      </p>
    </motion.a>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex items-baseline justify-between border-b border-white/10 pb-6">
          <h2 className="text-3xl font-medium tracking-[-0.02em] sm:text-4xl md:text-5xl">
            <WordsPullUp text="Past Experiences" style={{ color: '#E1E0CC' }} />
          </h2>
          <span className="text-xs text-gray-500 md:text-sm">
            ({EXPERIENCES.length})
          </span>
        </div>

        {/* Card grid */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
