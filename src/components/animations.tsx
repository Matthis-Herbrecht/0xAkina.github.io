import { useRef } from 'react'
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'

/* -------------------------------------------------------------------------- */
/*  WordsPullUp                                                                */
/*  Splits text by spaces; each word slides up (y:20 -> 0) with a staggered    */
/*  delay. Optionally renders a superscript asterisk after the final "a".      */
/* -------------------------------------------------------------------------- */

interface WordsPullUpProps {
  text: string
  className?: string
  style?: React.CSSProperties
  showAsterisk?: boolean
  stagger?: number
}

export function WordsPullUp({
  text,
  className = '',
  style,
  showAsterisk = false,
  stagger = 0.08,
}: WordsPullUpProps) {
  const words = text.split(' ')
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <span ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const isLastWord = i === words.length - 1
        return (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {isLastWord && showAsterisk ? (
              <span className="relative inline-block">
                {word}
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                  *
                </span>
              </span>
            ) : (
              word
            )}
            {i < words.length - 1 && ' '}
          </motion.span>
        )
      })}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  WordsPullUpMultiStyle                                                      */
/*  Takes segments of { text, className } and animates every word individually */
/*  while preserving each segment's styling.                                   */
/* -------------------------------------------------------------------------- */

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  className?: string
  stagger?: number
}

export function WordsPullUpMultiStyle({
  segments,
  className = '',
  stagger = 0.08,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  // Flatten into a single list of words that keep their segment className.
  const words: { word: string; className?: string }[] = []
  segments.forEach((seg) => {
    seg.text.split(' ').forEach((word) => {
      words.push({ word, className: seg.className })
    })
  })

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map((item, i) => (
        <motion.span
          key={`${item.word}-${i}`}
          className={`inline-block ${item.className ?? ''}`}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {item.word}
          {' '}
        </motion.span>
      ))}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  AnimatedLetter                                                             */
/*  A single character whose opacity is driven by the parent's scroll          */
/*  progress, producing a progressive text reveal.                             */
/* -------------------------------------------------------------------------- */

interface AnimatedLetterProps {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}

export function AnimatedLetter({ char, progress, range }: AnimatedLetterProps) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <motion.span style={{ opacity }} className="inline">
      {char === ' ' ? ' ' : char}
    </motion.span>
  )
}

/* -------------------------------------------------------------------------- */
/*  ScrollRevealText                                                           */
/*  Wraps a paragraph so each character reveals as it enters the viewport.     */
/* -------------------------------------------------------------------------- */

interface ScrollRevealTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

export function ScrollRevealText({
  text,
  className = '',
  style,
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const total = text.length
  const words = text.split(' ')
  let charIndex = 0

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        // Render each word as an inline-block unit so it never breaks
        // mid-word, while still revealing one character at a time.
        const wordSpan = (
          <span key={wi} className="inline-block">
            {word.split('').map((char) => {
              const i = charIndex++
              const charProgress = i / total
              const range: [number, number] = [
                charProgress - 0.1,
                charProgress + 0.05,
              ]
              return (
                <AnimatedLetter
                  key={i}
                  char={char}
                  progress={scrollYProgress}
                  range={range}
                />
              )
            })}
          </span>
        )
        // Account for the space that followed this word in the original text.
        if (wi < words.length - 1) charIndex++
        return (
          <span key={`w-${wi}`}>
            {wordSpan}
            {wi < words.length - 1 ? ' ' : ''}
          </span>
        )
      })}
    </p>
  )
}
