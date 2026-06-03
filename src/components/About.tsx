import { WordsPullUpMultiStyle, ScrollRevealText } from './animations'

export default function About() {
  return (
    <section id="about" className="bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-20 text-center md:rounded-[2rem] md:px-12 md:py-28">
        {/* Small label */}
        <span className="text-[10px] uppercase tracking-[0.25em] text-primary sm:text-xs">
          AI · Crypto · Investment
        </span>

        {/* Main heading */}
        <h2 className="mx-auto mt-8 max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'I am Akina,', className: 'font-normal' },
              {
                text: 'I design economic systems and agentic layers for companies.',
                className: 'font-serif italic',
              },
            ]}
          />
        </h2>

        {/* Body paragraph with scroll-linked reveal */}
        <div className="mx-auto mt-12 max-w-2xl">
          <ScrollRevealText
            text="I help companies automate their processes and ship autonomous products. My background is in venture: I designed tokens at Outlier Ventures, researched DeFi at Pyratz Labs, and ran token design as CEO of Pokenomix. Today I consult, invest, and build my own projects."
            className="text-xs leading-relaxed sm:text-sm md:text-base"
            style={{ color: '#DEDBC8' }}
          />
        </div>
      </div>
    </section>
  )
}
