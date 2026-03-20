import React from 'react'
import Vault360HeroSection from '@/components/vault-360/Vault360HeroSection'
import Vault360Overview from '@/components/vault-360/Vault360Overview'
import Vault360MissionVision from '@/components/vault-360/Vault360MissionVision'
import Vault360WhyChoose from '@/components/vault-360/Vault360WhyChoose'
import Vault360Leadership from '@/components/vault-360/Vault360Leadership'
import Vault360CTA from '@/components/vault-360/Vault360CTA'
import PartnersBanner from '@/components/home/partners-banner'
import ReviewsSection from '@/components/home/reviews-section'
import LinkedInPostsSection from '@/components/home/LinkedInPostsSection'

const page = () => {
  return (
    <>
      <Vault360HeroSection />
      <Vault360Overview />
      <Vault360Leadership />
      <Vault360MissionVision />
      <PartnersBanner/>
      <LinkedInPostsSection/>
      {/* <Vault360WhyChoose /> */}
      {/* <Vault360CTA /> */}
    </>
  )
}

export default page