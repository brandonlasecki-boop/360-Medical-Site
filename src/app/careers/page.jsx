import CareerBenefitsSection from "@/components/careers/CareerBenefitsSection";
import CareerCommitmentSection from "@/components/careers/CareerCommitmentSection";
import CareerCTASection from "@/components/careers/CareerCTASection";
import CareerCultureSection from "@/components/careers/CareerCultureSection";
import CareerHeroSection from "@/components/careers/CareerHeroSection";
import CareerOpenRolesSection from "@/components/careers/CareerOpenRolesSection";
import LinkedInPostsSection from "@/components/home/LinkedInPostsSection";
import React from "react";

const page = () => {
  return (
    <>
      <CareerHeroSection />
      {/* <CareerCultureSection /> */}
      <CareerCommitmentSection />
      {/* <CareerBenefitsSection />
      <CareerOpenRolesSection />
      <CareerCTASection />
      <LinkedInPostsSection /> */}
    </>
  );
};

export default page;
