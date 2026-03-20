import HeroSection from "@/components/home/hero-section"
import FeatureCards from "@/components/home/feature-cards"
import TestimonialSection from "@/components/home/testimonial-section"
import ServicesSection from "@/components/home/services-section"
import WhoWeAre from "@/components/home/who-we-are"
import PartnersBanner from "@/components/home/partners-banner"
import ReviewsSection from "@/components/home/reviews-section"
// import HomeExecutiveTeam from "@/components/home/HomeExecutiveTeam"
import ValuesSection from "@/components/layout/dropdown"
import ImageSectionHome from "@/components/home/image-section-home"
import LinkedInPostsSection from "@/components/home/LinkedInPostsSection"


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeatureCards />
      {/* <TestimonialSection /> */}
      <ImageSectionHome/>
      {/* <ServicesSection />    */}
      {/* <HomeExecutiveTeam/> */}
      {/* <WhoWeAre /> */}
      <PartnersBanner />
      {/* <ReviewsSection /> */}
      <LinkedInPostsSection/>
    </div>
  )
}
