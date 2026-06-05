const LINKS = [
  { label: 'Twitter', href: 'https://twitter.com/0xAkina' },
  { label: 'Telegram', href: 'https://t.me/Akinacrypto' },
  { label: 'GitHub', href: 'https://github.com/Matthis-Herbrecht' },
]

export default function Footer() {
  return (
    <footer className="bg-black px-4 pb-10 pt-16 md:px-6 md:pb-12 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-primary/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="mt-10 text-xs text-gray-500">
          © {new Date().getFullYear()} Akina. AI, crypto & investment.
        </p>
      </div>
    </footer>
  )
}
