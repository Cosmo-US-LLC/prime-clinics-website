import React from 'react'
import FAQ from '@/components/PageComponents/Waitlist/FAQ'
import { faqDataWinAFree } from '@/constants/faqData'
import WinaFree$300Hero from '@/components/PageComponents/WinaFree$300/WinaFree$300Hero'
import ReadytoReclaim from '@/components/PageComponents/WinaFree$300/ReadytoReclaim'
import HowToClaim from '@/components/PageComponents/WinaFree$300/HowToClaim'
import PrimeExperience from '@/components/PageComponents/WinaFree$300/PrimeExperience'
import Whatisthe$300 from '@/components/PageComponents/WinaFree$300/Whatisthe$300'
import HowToWorkWin from '@/components/PageComponents/WinaFree$300/HowToWorkWin'
import FeaturedCards from '@/components/PageComponents/WinaFree$300/FeaturedCards'

function WinaFree$300() {
  return (
    <div className="min-h-screen">
      <WinaFree$300Hero />
      <HowToWorkWin />
      {/* <WhatIsDEXAScan /> */}
      {/* <WhatWillHappenInYourScan /> */}
      {/* <Whatisthe$300/> */}
      <FeaturedCards />
      {/* <Whatisthe$300 /> */}
      <PrimeExperience />
      {/* <HowToClaim />     */}
      <ReadytoReclaim />
      <FAQ faqData={faqDataWinAFree} defaultOpenIndex={0} />
    </div>
  )
}

export default WinaFree$300