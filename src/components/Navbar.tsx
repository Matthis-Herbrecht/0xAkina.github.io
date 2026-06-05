import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Research', href: '#research', id: 'research' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => el !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: -24, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 top-4 z-50 md:top-6"
      aria-label="Primary"
    >
      <div
        className="relative overflow-hidden rounded-full border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.55)]"
        style={{
          background:
            'linear-gradient(180deg, #2c2c2c 0%, #1c1c1c 55%, #121212 100%)',
        }}
      >
        {/* Brushed-metal / charcoal-fabric grain */}
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay" />
        {/* Metallic top sheen */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        {/* Soft inner vignette to give the material depth */}
        <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),inset_0_-8px_16px_rgba(0,0,0,0.35)]" />

        <ul className="relative flex items-center gap-0.5 px-1.5 py-1.5 sm:gap-1 sm:px-2">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`block rounded-full px-2.5 py-1.5 text-[10px] font-medium tracking-wide transition-all duration-200 sm:px-4 sm:text-xs md:text-sm ${
                    isActive
                      ? 'bg-white/10 text-primary'
                      : 'text-primary/70 hover:bg-white/[0.07] hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.nav>
  )
}
