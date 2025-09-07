import React from 'react'
import Navigation from './Navigation'
import HeroSection from './HeroSection'

import HomeSecondPart from './HomeSecondPart'
import FeaturesSection from './FeatureSection'
import HomeTeams from './HomeTeams'
import Testonomialsection from './Testonomialsection'
import TeamSection from './TeamSection'
import MortgageFAQ from './MortgageFAQ'



const HomeMain = () => {
  return (
    <div>
         
          <HeroSection />
          <HomeSecondPart />
          <FeaturesSection />
          <Testonomialsection />
          <TeamSection />
          <MortgageFAQ/>
          
          
          
    </div>
  )
}

export default HomeMain
