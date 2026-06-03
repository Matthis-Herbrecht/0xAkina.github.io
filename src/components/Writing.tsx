import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { WordsPullUp } from './animations'

interface WritingItem {
  title: string
  description: string
  type: string
  href: string
}

const ITEMS: WritingItem[] = [
  {
    title: 'Token Gravity: M&A in Web3',
    description:
      'Exploration of token consolidation dynamics and how large tokens attract smaller projects through capital, community, and technology.',
    type: 'Research',
    href: 'https://outlierventures.io/article/token-gravity-ma-in-web3/',
  },
  {
    title: 'Layer 2 Incentive Effectiveness Case Study',
    description:
      'Analysis of Layer 2 incentive programs, examining airdrops and grants effectiveness across Optimism, Arbitrum, and Base.',
    type: 'Research',
    href: 'https://outlierventures.io/article/layer-2-incentive-effectiveness-case-study/',
  },
  {
    title: 'Scaling Wars: A Look At L2 Stacks for Onchain Games',
    description:
      'Comprehensive analysis of Layer 2 scaling solutions and their implications for blockchain gaming infrastructure.',
    type: 'Research',
    href: 'https://wasd.mirror.xyz/dAS22_SUtNYaXHvTsl-dRqdK0nedW_FuM3IjHfbfEYM',
  },
  {
    title: "The Ultimate Guide to Base's Gaming Ecosystem",
    description:
      'Complete guide analyzing the key projects and opportunities for builders on Base.',
    type: 'Guide',
    href: 'https://wasd.mirror.xyz/OZy7yq8b7HcmhtlNCmM1CpD7EXNQSj5x1ragMmgXK9Y',
  },
  {
    title: 'The State of Funding For Onchain Games',
    description:
      'Market report examining funding trends, investment patterns, and future capital deployment in blockchain gaming.',
    type: 'Report',
    href: 'https://wasd.mirror.xyz/_v9JaozkSDENbY7KCzrwX1lP6RuVLmSo7pCTMeJY-8U',
  },
  {
    title: 'How Pirate Nation is Leveling Up',
    description:
      "Case study examining Pirate Nation's approach to onchain gaming and community engagement strategies.",
    type: 'Research',
    href: 'https://wasd.mirror.xyz/lwArnkfRM4j0XTYXpkHCwVLf163KXHn55tJ4XvDiM2E',
  },
  {
    title: '8 Onchain Gaming Builders to Watch in 2024',
    description:
      'Curated selection of the most promising builders in the blockchain gaming ecosystem and their vision for the future.',
    type: 'Guide',
    href: 'https://wasd.mirror.xyz/gv9ChTjeX1NEuOLoQcAqakVBegYRCm6mZzbVP2IoLWQ',
  },
  {
    title: "L'influence des VC et les tokens Low Float",
    description:
      "Analyse de l'impact des Venture Capitalists sur les stratégies de tokenomics et les mécanismes de low float.",
    type: 'Video',
    href: 'https://www.youtube.com/watch?v=SFiAz-PVxYc',
  },
  {
    title: 'Decryptalk x Akina — Episode 1',
    description:
      "Discussion sur l'évolution du gaming onchain et les tendances émergentes du marché Web3.",
    type: 'Podcast',
    href: 'https://www.youtube.com/watch?v=dAsNPMCev30',
  },
  {
    title: 'Roundtable Discussion: Onchain Game Engines',
    description:
      'Panel discussion on the future of onchain game engines, technical challenges, and innovation opportunities.',
    type: 'Panel',
    href: 'https://www.youtube.com/watch?v=BpSQobQFsqo&t=1385s',
  },
]

function WritingRow({ item, index }: { item: WritingItem; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.a
      ref={ref}
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-start justify-between gap-6 border-b border-white/10 py-6 transition-all duration-300 hover:pl-2 md:gap-12 md:py-8 md:hover:pl-4"
      initial={{ y: 24, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.06, 0.4),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div className="flex-1">
        <h3 className="text-lg font-normal leading-snug text-primary transition-colors md:text-2xl">
          {item.title}
        </h3>
        <p className="mt-2 max-w-2xl text-xs leading-relaxed text-gray-500 md:text-sm">
          {item.description}
        </p>
      </div>

      <div className="flex flex-shrink-0 items-center gap-3 pt-1">
        <span className="rounded-md border border-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary/80 md:text-xs">
          {item.type}
        </span>
        <ArrowUpRight className="h-5 w-5 -translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    </motion.a>
  )
}

export default function Writing() {
  return (
    <section id="research" className="bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex items-baseline justify-between border-b border-white/10 pb-6">
          <h2 className="text-3xl font-medium tracking-[-0.02em] sm:text-4xl md:text-5xl">
            <WordsPullUp text="Selected Writing" style={{ color: '#E1E0CC' }} />
          </h2>
          <span className="text-xs text-gray-500 md:text-sm">
            ({ITEMS.length})
          </span>
        </div>

        {/* Editorial list */}
        <div className="mt-2">
          {ITEMS.map((item, i) => (
            <WritingRow key={item.href} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
