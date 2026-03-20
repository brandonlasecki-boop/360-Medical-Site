import AboutFeatureCards from '@/components/about/AboutFeatureCards'
import AboutHeroSection from '@/components/about/AboutHeroSection'
import AboutMeetTeam from '@/components/about/AboutMeetTeam'
import AboutTestimonialSection from '@/components/about/AboutTestimonialSection'
import AboutWhoWeAre from '@/components/about/AboutWhoWeAre'
import AboutPartnersBanner from '@/components/about/AboutPartnersBanner'
import AboutReviewsSection from '@/components/about/AboutReviewsSection'
import React from 'react'
import LinkedInPostsSection from '@/components/home/LinkedInPostsSection'
// import ValuesSection from '@/components/layout/dropdown'
 
const page = () => {
  return (
    <>
        <AboutHeroSection />
        <AboutTestimonialSection />
        {/* <ValuesSection /> */}
        
        <AboutFeatureCards />
        {/* <AboutMeetTeam /> */}
        {/* <AboutWhoWeAre/> */}
        <AboutPartnersBanner/>
        <LinkedInPostsSection/>
    </>
  )
}

export default page