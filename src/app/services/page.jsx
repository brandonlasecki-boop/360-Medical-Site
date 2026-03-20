//src/app/services/page.jsx
import ServiceCardsPlatform from '@/components/services/ServiceCardsPlatform'
import ServicesHeroSection from '@/components/services/ServicesHeroSection'
import ServicesPartnersBanner from '@/components/services/ServicesPartnersBanner'
import ServicesProfessional from '@/components/services/ServicesProfessional'
import ServicesReviewsSection from '@/components/services/ServicesReviewsSection'
import React from 'react'
import ProductCTA from './[product]/components/ProductCTA'
import LinkedInPostsSection from '@/components/home/LinkedInPostsSection'

const page = () => {
  return (
    <>
    <ServicesHeroSection/>
    <ServiceCardsPlatform/>  
    {/* <ServicesProfessional/> */}
    {/* <ProductCTA  /> */}
    <ServicesPartnersBanner/>
    <LinkedInPostsSection/>
    </>
  )
}

export default page