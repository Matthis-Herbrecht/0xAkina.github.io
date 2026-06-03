import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { WordsPullUp } from './animations'

const HERO_IMAGE =
  'https://d8j0ntlcm91z4.cloudfront.net/user_3B5Q6A0GvwQLgLdF5aVxlBgMfMv/hf_20260603_220906_d5732c08-1ed1-4d66-89fb-c261c053d66f.png'

const customEase = [0.16, 1, 0.3, 1] as const

const SOCIALS = [
  { label: 'Twitter', href: 'https://twitter.com/0xAkina' },
  { label: 'Telegram', href: 'https://t.me/Akinacrypto' },
  { label: 'GitHub', href: 'https://github.com/Matthis-Herbrecht' },
]

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* Background image */}
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
        />

        {/* Noise + gradient overlays */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="grid grid-cols-12 items-end gap-4 p-4 sm:p-6 md:p-8 lg:p-10">
            {/* Giant heading */}
            <div className="col-span-12 lg:col-span-8">
              <WordsPullUp
                text="Akina"
                showAsterisk
                className="block text-[26vw] font-medium leading-[0.85] tracking-[-0.07em] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{ color: '#E1E0CC' }}
              />
            </div>

            {/* Description + CTA */}
            <div className="col-span-12 flex flex-col gap-5 pb-2 lg:col-span-4">
              <motion.p
                className="text-xs leading-[1.2] text-primary/70 sm:text-sm md:text-base"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: customEase }}
              >
                Tech addict working across AI, crypto and investment. I help
                companies automate their processes and design the economic
                systems and agentic layers behind autonomous products.
              </motion.p>

              <motion.a
                href="#contact"
                className="group flex w-fit items-center gap-2 rounded-full bg-primary py-1.5 pl-6 pr-1.5 text-sm font-medium text-black transition-all duration-300 hover:gap-3 sm:text-base"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: customEase }}
              >
                Let&apos;s talk
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" style={{ color: '#E1E0CC' }} />
                </span>
              </motion.a>

              <motion.div
                className="flex items-center gap-5 pt-1"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: customEase }}
              >
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium text-primary/70 transition-colors hover:text-primary sm:text-sm"
                  >
                    {s.label}
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
