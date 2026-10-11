"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

function ViolinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2v4" />
      <path d="M10 4h4" />
      <path d="M8 7c0-1 2-2 4-2s4 1 4 2" />
      <path d="M16 7v2" />
      <path d="M8 7v2" />
      <path d="M6 11c0-1.5 2.5-2 6-2s6 .5 6 2" />
      <path d="M18 11v6c0 2-2.5 4-6 4s-6-2-6-4v-6" />
      <path d="M12 13v4" />
      <circle cx="12" cy="15" r="1" />
      <path d="M9 11.5v2" />
      <path d="M15 11.5v2" />
    </svg>
  )
}

function CelloIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 1v3" />
      <path d="M10 2.5h4" />
      <path d="M8 5c0-.5 1.5-1 4-1s4 .5 4 1" />
      <path d="M16 5v2" />
      <path d="M8 5v2" />
      <path d="M5 9c0-1.5 3-2 7-2s7 .5 7 2" />
      <path d="M19 9v10c0 2.5-3 4-7 4s-7-1.5-7-4V9" />
      <path d="M12 12v6" />
      <ellipse cx="12" cy="15" rx="1.5" ry="2" />
      <path d="M8.5 9.5v3" />
      <path d="M15.5 9.5v3" />
    </svg>
  )
}

export function ConnectionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-lg mx-auto px-4"
      >
        {/* Glass card */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-slate-500/10" />
          
          <div className="relative">
            {/* Crossed instruments */}
            <div className="flex items-center justify-center mb-8">
              <motion.div
                initial={{ rotate: -20, x: 10 }}
                animate={isInView ? { rotate: -15, x: 8 } : { rotate: -20, x: 10 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <ViolinIcon className="w-16 h-16 md:w-20 md:h-20 text-amber-300/80" />
              </motion.div>
              <motion.div
                initial={{ rotate: 20, x: -10 }}
                animate={isInView ? { rotate: 15, x: -8 } : { rotate: 20, x: -10 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="-ml-6"
              >
                <CelloIcon className="w-16 h-16 md:w-20 md:h-20 text-slate-300/80" />
              </motion.div>
            </div>

            {/* Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-center text-slate-300 text-lg md:text-xl font-serif italic"
            >
              Two instruments, one melody.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
