"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { StarsBackground } from "./stars-background"

export function QuoteSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden py-16"
    >
      <StarsBackground />
      
      {/* Deep atmosphere overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/50" />
      
      {/* Ambient glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%)",
          y,
        }}
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center"
      >
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-serif text-2xl md:text-4xl lg:text-5xl text-white leading-relaxed md:leading-relaxed italic"
        >
          <span className="text-amber-300/80">&ldquo;</span>
          En esta vida, y en todas las que viviéramos, siempre te elegiría a ti. No necesito visitar la biblioteca de la medianoche para saber que esta es mi realidad favorita, porque estás tú.
          <span className="text-amber-300/80">&rdquo;</span>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-12 w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  )
}
