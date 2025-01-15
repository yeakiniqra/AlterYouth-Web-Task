import React from 'react'
import Head from 'next/head'
import HeroSection from '@/components/Hero/HeroSection'
import FeaturesSection from '@/components/FeatureSection/FeatureSection'
import Community from '@/components/FeatureSection/Community'
import CommunityImpact from '@/components/community/Community'
import Schools from '@/components/community/Schools'
import ScholarshipEligibility from '@/components/community/Eligibility'
import Explainer from '@/components/community/Explainer'
import Association from '@/components/community/Association'

function index() {
  return (
    <>
      <Head>
        <title>AlterYouth | Towards a Literate Bangladesh</title>
        <meta name="description" content="AlterYouth is a non-profit organization that aims to provide free education to underprivileged children in Bangladesh." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection /> 
      <FeaturesSection /> 
      <Community />
      <CommunityImpact />
      <Schools />
      <ScholarshipEligibility />
      <Explainer />
      <Association />
    </>
  )
}

export default index
