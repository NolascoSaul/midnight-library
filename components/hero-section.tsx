"use client"

import { motion } from "framer-motion"
import { StarsBackground } from "./stars-background"

interface HeroSectionProps {
  onBeginStory: () => void
}

export function HeroSection({ onBeginStory }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-slate-900 overflow-hidden">
      <StarsBackground />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-8 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          Every life is a book...
        </motion.h1>
        
        <motion.p
          className="text-slate-400 text-lg md:text-xl mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          And this is ours
        </motion.p>
        
        <motion.button
          onClick={onBeginStory}
          className="relative px-8 py-4 rounded-full font-sans text-lg text-slate-900 bg-gradient-to-r from-amber-200 to-amber-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Begin Our Story</span>
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300 to-amber-400"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-slate-400 rounded-full"
            animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
