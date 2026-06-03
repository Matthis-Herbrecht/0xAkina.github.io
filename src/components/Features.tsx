import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { WordsPullUpMultiStyle } from './animations'

const FEATURE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'

const cardEase = [0.22, 1, 0.36, 1] as const

interface FeatureCardData {
  number: string
  title: string
  icon: string
  items: string[]
}

const CARDS: FeatureCardData[] = [
  {
    number: '01',
    title: 'Token Design.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Tokenomics modeling',
      'Incentive & reward design',
      'Supply & emission schedules',
      'Value accrual mechanisms',
    ],
  },
  {
    number: '02',
    title: 'Onchain Research.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'Ecosystem deep dives',
      'Market & funding reports',
      'Onchain gaming analysis',
    ],
  },
  {
    number: '03',
    title: 'AI Agents.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'Autonomous onchain agents',
      'ERC-8004 security scanners',
      'Trading & research automation',
    ],
  },
]

function VideoCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      className="relative h-72 overflow-hidden rounded-2xl lg:h-full"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: 0, ease: cardEase }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={FEATURE_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <p
        className="absolute bottom-5 left-5 text-lg font-medium"
        style={{ color: '#E1E0CC' }}
      >
        Where it all comes together.
      </p>
    </motion.div>
  )
}

function FeatureCard({ card, index }: { card: FeatureCardData; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      className="flex h-72 flex-col rounded-2xl bg-[#212121] p-5 lg:h-full"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay: (index + 1) * 0.15, ease: cardEase }}
    >
      <img
        src={card.icon}
        alt=""
        className="h-10 w-10 rounded-lg object-cover sm:h-12 sm:w-12"
      />

      <h3 className="mt-5 flex items-baseline gap-2 text-lg font-medium text-primary">
        {card.title}
        <span className="text-xs text-gray-500">{card.number}</span>
      </h3>

      <ul className="mt-4 flex flex-1 flex-col gap-2.5">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span className="text-xs text-gray-400 sm:text-sm">{item}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="mt-4 flex items-center gap-1.5 text-xs font-medium text-primary/80 transition-colors hover:text-primary sm:text-sm"
      >
        Learn more
        <ArrowRight className="h-3.5 w-3.5 -rotate-45" />
      </a>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black px-4 py-20 md:px-6 md:py-28"
    >
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="max-w-3xl text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle
            className="!justify-start text-left"
            segments={[
              {
                text: 'Research-grade thinking for onchain builders.',
                className: 'text-primary',
              },
              {
                text: 'Built for conviction. Powered by curiosity.',
                className: 'text-gray-500',
              },
            ]}
          />
        </h2>

        {/* Card grid */}
        <div className="mt-14 grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4">
          <VideoCard />
          {CARDS.map((card, i) => (
            <FeatureCard key={card.number} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
