import AdvisoryBoard from '@/components/teams/AdvisoryBoard'
import ClinicalTeam from '@/components/teams/ClinicalTeam'
import ExecutiveTeam from '@/components/teams/ExecutiveTeam'
import HeroTeamSection from '@/components/teams/HeroTeamSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroTeamSection/>
        <AdvisoryBoard/>
        <ExecutiveTeam/>
        {/* <ClinicalTeam/> */}
    </div>
  )
}

export default page