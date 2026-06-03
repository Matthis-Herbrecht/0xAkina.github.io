import { useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { WordsPullUp } from './animations'

const CALENDLY_URL = 'https://calendly.com/matthis-akina'

// Calendly inline embed, themed to match the dark / cream palette.
const CALENDLY_EMBED_URL =
  `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=101010&text_color=e1e0cc&primary_color=dedbc8`

export default function Contact() {
  useEffect(() => {
    const SRC = 'https://assets.calendly.com/assets/external/widget.js'
    if (document.querySelector(`script[src="${SRC}"]`)) return
    const script = document.createElement('script')
    script.src = SRC
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section
      id="contact"
      className="bg-black px-4 pt-20 md:px-6 md:pt-28"
    >
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

        {/* Calendly inline embed */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#101010] md:rounded-[2rem]">
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_EMBED_URL}
            style={{ minWidth: '320px', height: '720px' }}
          />
        </div>

        {/* Fallback link */}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="group mt-6 inline-flex items-center gap-1.5 text-sm text-primary/60 transition-colors hover:text-primary"
        >
          Or open the scheduling page directly
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}
