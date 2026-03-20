import React from 'react'
import Sim360HeroSection from '@/components/sim-360/Sim360HeroSection'
import Sim360Overview from '@/components/sim-360/Sim360Overview'
import Sim360VideoShowcase from '@/components/sim-360/Sim360VideoShowcase'
import Sim360MissionVision from '@/components/sim-360/Sim360MissionVision'
import Sim360WhyChoose from '@/components/sim-360/Sim360WhyChoose'
import Sim360CTA from '@/components/sim-360/Sim360CTA'
import PartnersBanner from '@/components/home/partners-banner'
import ReviewsSection from '@/components/home/reviews-section'
import LinkedInPostsSection from '@/components/home/LinkedInPostsSection'

const page = () => {
  return (
    <>
      <Sim360HeroSection />
      <Sim360Overview />
      <Sim360MissionVision />
      <Sim360VideoShowcase />       
      <PartnersBanner/>
      <LinkedInPostsSection/>
      {/* <Sim360WhyChoose /> */}
      {/* <Sim360CTA /> */}
    </>
  )
}

export default page