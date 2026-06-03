import { motion } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Inquiries', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -24, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 top-4 z-50 md:top-6"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative transform-gpu overflow-hidden rounded-full border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.55)] will-change-transform"
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
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block rounded-full px-2.5 py-1.5 text-[10px] font-medium tracking-wide text-primary/70 transition-all duration-200 hover:bg-white/[0.07] hover:text-primary sm:px-4 sm:text-xs md:text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  )
}
