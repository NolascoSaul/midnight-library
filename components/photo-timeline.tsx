"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const memories = [
  {
    id: 1,
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Our+First+Chapter",
    caption: "Where it all began",
    date: "Chapter I",
  },
  {
    id: 2,
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Adventures+Together",
    caption: "Adventures we shared",
    date: "Chapter II",
  },
  {
    id: 3,
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Quiet+Moments",
    caption: "The quiet moments",
    date: "Chapter III",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/1e293b/94a3b8?text=Forever+After",
    caption: "And all the chapters yet to come",
    date: "Chapter IV",
  },
]

function MemoryCard({ memory, index }: { memory: typeof memories[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm shadow-xl">
        <div className="aspect-[3/2] relative overflow-hidden">
          <Image
            src={memory.image || "/placeholder.svg"}
            alt={memory.caption}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <p className="font-serif text-amber-300/90 text-sm mb-1">{memory.date}</p>
          <p className="text-white text-lg md:text-xl font-serif">{memory.caption}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function PhotoTimeline() {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Our Chapters</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {memories.map((memory, index) => (
            <MemoryCard key={memory.id} memory={memory} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
