"use client"

import { useRef } from "react"
import { HeroSection } from "@/components/hero-section"
import { PhotoTimeline } from "@/components/photo-timeline"
import { ConnectionSection } from "@/components/connection-section"
import { QuoteSection } from "@/components/quote-section"
import { InvitationSection } from "@/components/invitation-section"

export default function Home() {
  const storyRef = useRef<HTMLDivElement>(null)

  const handleBeginStory = () => {
    storyRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="bg-slate-900">
      <HeroSection onBeginStory={handleBeginStory} />
      <div ref={storyRef}>
        <PhotoTimeline />
      </div>
      <ConnectionSection />
      <QuoteSection />
      <InvitationSection />
    </main>
  )
}
