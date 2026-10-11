"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Heart, Sparkles } from "lucide-react"
import confetti from "canvas-confetti"

export function InvitationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [answered, setAnswered] = useState<"yes" | "no" | null>(null)

  const handleYes = () => {
    setAnswered("yes")
    // Fire confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#fbbf24", "#f59e0b", "#ffffff", "#fcd34d"],
    })
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#fbbf24", "#f59e0b", "#ffffff"],
      })
    }, 200)
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#fbbf24", "#f59e0b", "#ffffff"],
      })
    }, 400)
  }

  const handleNo = () => {
    setAnswered("no")
  }

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Sparkles className="w-8 h-8 text-amber-300" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Sparkles className="w-6 h-6 text-amber-300" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-md mx-auto px-4"
      >
        {/* Invitation Card */}
        <div className="relative">
          {/* Card shadow/depth effect */}
          <div className="absolute inset-0 bg-amber-900/20 rounded-2xl transform translate-x-2 translate-y-2" />
          
          {/* Main card */}
          <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl">
            {/* Decorative top border */}
            <div className="h-2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />
            
            {/* Inner border effect */}
            <div className="m-3 md:m-4 border border-amber-500/10 rounded-xl p-6 md:p-8">
              {/* Decorative corners */}
              <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-amber-400/40 rounded-tl-sm" />
              <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-amber-400/40 rounded-tr-sm" />
              <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-amber-400/40 rounded-bl-sm" />
              <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-amber-400/40 rounded-br-sm" />

              {answered === null ? (
                <>
                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mb-6"
                  >
                    <h3 className="font-serif text-3xl md:text-4xl text-amber-300 mb-2">
                      San Valentín 2025
                    </h3>
                    <p className="text-slate-400 text-sm tracking-widest uppercase">
                      A Secret Picnic Date
                    </p>
                  </motion.div>

                  {/* Divider */}
                  <div className="flex items-center justify-center gap-4 my-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-500/30" />
                    <Heart className="w-4 h-4 text-amber-400/60" />
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-500/30" />
                  </div>

                  {/* Question */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="font-serif text-xl md:text-2xl text-white text-center mb-8 italic"
                  >
                    ¿Quieres ser mi Valentín?
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <motion.button
                      onClick={handleYes}
                      className="relative px-8 py-3 rounded-full font-sans font-medium text-slate-900 bg-gradient-to-r from-amber-300 to-amber-400 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Heart className="w-4 h-4" />
                        Yes
                      </span>
                    </motion.button>

                    <motion.button
                      onClick={handleNo}
                      className="px-8 py-3 rounded-full font-sans font-medium text-slate-400 bg-transparent border border-slate-600/50 hover:border-slate-500 hover:text-slate-300 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      No
                    </motion.button>
                  </motion.div>
                </>
              ) : answered === "yes" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <Heart className="w-16 h-16 text-amber-400 mx-auto mb-6 fill-amber-400" />
                  </motion.div>
                  <h3 className="font-serif text-3xl text-amber-300 mb-4">
                    ¡Perfecto!
                  </h3>
                  <p className="text-slate-300 text-lg">
                    This is going to be the best Valentine&apos;s Day ever...
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <p className="font-serif text-2xl text-slate-300 mb-6">
                    Are you sure? 🥺
                  </p>
                  <motion.button
                    onClick={() => setAnswered(null)}
                    className="px-6 py-2 rounded-full font-sans text-sm text-amber-300 border border-amber-500/30 hover:bg-amber-500/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    Let me reconsider...
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          Made with love, inspired by The Midnight Library
        </motion.p>
      </motion.div>
    </section>
  )
}
