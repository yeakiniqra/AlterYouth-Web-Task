import React from 'react'
import Head from 'next/head'
import HeroSection from '@/components/Hero/HeroSection'
import FeaturesSection from '@/components/FeatureSection/FeatureSection'
import Community from '@/components/FeatureSection/Community'
import CommunityImpact from '@/components/community/Community'


function index() {
  return (
    <>
      <Head>
        <title>AlterYouth | Towards a Literate Bangladesh</title>
        <meta name="description" content="AlterYouth is a non-profit organization that aims to provide free education to underprivileged children in Bangladesh." />
      </Head>
      <HeroSection /> 
      <FeaturesSection /> 
      <Community />
      <CommunityImpact />
    </>
  )
}

export default index
