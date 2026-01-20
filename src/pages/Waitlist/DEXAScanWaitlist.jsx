import React from 'react'
import DEXAScanHero from '@/components/PageComponents/Waitlist/DEXAScanHero'
import DontTrainInTheDark from '@/components/PageComponents/Waitlist/DontTrainInTheDark'
import FAQ from '@/components/PageComponents/Waitlist/FAQ'
import HowToClaim from '@/components/PageComponents/Waitlist/HowToClaim'
import KnowingYourNumbers from '@/components/PageComponents/Waitlist/KnowingYourNumbers'
import PrimeExperience from '@/components/PageComponents/Waitlist/PrimeExperience'
import WhatIsDEXAScan from '@/components/PageComponents/Waitlist/WhatIsDEXAScan'
import WhatWillHappenInYourScan from '@/components/PageComponents/Waitlist/WhatWillHappenInYourScan'
import { faqData } from '@/constants/faqData'

function DEXAScanWaitlist() {
  return (
    <div className="min-h-screen">
      <DEXAScanHero />
      <WhatIsDEXAScan />
      <WhatWillHappenInYourScan />
      <KnowingYourNumbers />
      <PrimeExperience />
      <HowToClaim />    
      <FAQ faqData={faqData} defaultOpenIndex={0} />
      <DontTrainInTheDark />
    </div>
  )
}

export default DEXAScanWaitlist