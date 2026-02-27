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
import usePageMeta from '@/hooks/usePageMeta'

function WinaFree$300() {
  usePageMeta(
    'Win a Free $300 DEXA & Longevity Assessment | Prime Clinics',
    'Join the Prime Clinics waitlist to win a free $300 DEXA scan and 2-hour longevity assessment. Only 5 winners. Sign up today to enter!'
  );

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