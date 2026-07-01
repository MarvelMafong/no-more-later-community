import Hero from "@/components/sections/Hero"
import Stats from "@/components/sections/Stats"
import AboutSummary from "@/components/sections/AboutSummary"
import WhatWeDo from "@/components/sections/WhatWeDo"
import CommunityLinks from "@/components/sections/CommunityLinks"
import CurrentReadSection from "@/components/sections/CurrentReadSection"
import SuggestionsForm from "@/components/sections/SuggestionsForm"
import FinalCTA from "@/components/sections/FinalCTA"

export const metadata = {
  title: "No More Later - Personal Growth Community",
  description: "No More Later is a free personal growth community for people who are tired of procrastinating and ready to take action through books, accountability, and discipline.",
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <AboutSummary />
      <WhatWeDo />
      <CommunityLinks />
      <CurrentReadSection />
      <SuggestionsForm />
      <FinalCTA />
    </main>
  )
}
