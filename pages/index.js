import React from 'react'
import Head from 'next/head'
import HeroSection from '@/components/Hero/HeroSection'
import FeaturesSection from '@/components/FeatureSection/FeatureSection'
import Community from '@/components/FeatureSection/Community'

function index() {
  return (
    <>
      <HeroSection /> 
      <FeaturesSection /> 
      <Community />
    </>
  )
}

export default index
