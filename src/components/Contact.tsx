import { ArrowUpRight, Calendar } from 'lucide-react'
import { WordsPullUp } from './animations'

const CALENDLY_URL = 'https://calendly.com/matthis-akina'

const SOCIALS = [
  { network: 'Twitter', handle: '@0xAkina', href: 'https://twitter.com/0xAkina' },
  { network: 'Telegram', handle: '@Akinacrypto', href: 'https://t.me/Akinacrypto' },
  {
    network: 'GitHub',
    handle: 'Matthis-Herbrecht',
    href: 'https://github.com/Matthis-Herbrecht',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-black px-4 pt-20 md:px-6 md:pt-28">
      <div className="mx-auto max-w-7xl">
        {/* Label */}
        <span className="text-[10px] uppercase tracking-[0.25em] text-primary sm:text-xs">
          Get in touch
        </span>

        {/* Heading */}
        <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl">
          <WordsPullUp text="Let's talk." style={{ color: '#E1E0CC' }} />
        </h2>

        {/* Message */}
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-primary/70 sm:text-lg md:text-xl">
          Whether you&apos;re exploring AI, crypto, investment or AI
          implementation — I&apos;m open to high-signal conversations.
        </p>

        {/* Calendly card */}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="group relative mt-12 flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101010] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-[#161616] md:rounded-[2rem] md:p-12"
        >
          <span className="absolute left-0 top-0 h-px w-0 bg-primary/60 transition-all duration-500 group-hover:w-full" />

          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary/80">
              <Calendar className="h-3.5 w-3.5" />
              Calendly
            </span>
            <ArrowUpRight className="h-5 w-5 -translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </div>

          <span className="mt-8 text-sm text-primary/55">
            calendly.com/matthis-akina
          </span>
          <span className="mt-2 text-3xl font-medium text-primary md:text-5xl">
            Book a 30m deep dive
          </span>
        </a>

        {/* Highlighted socials */}
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-4 md:gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.network}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101010] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-[#161616]"
            >
              <span className="absolute left-0 top-0 h-px w-0 bg-primary/60 transition-all duration-500 group-hover:w-full" />
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/55">
                  {s.network}
                </span>
                <span className="mt-1 block text-lg font-medium text-primary">
                  {s.handle}
                </span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-primary/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
