import React from 'react'
import HeroSection from '../Components/HeroSection';
import FeaturedVendors from '../Components/FeaturedVendors';
import ReadyDeals from '../Components/ReadyDeals';
import HowItWorks from '../Components/HowItWorks';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedVendors />
      <ReadyDeals />
      <HowItWorks />
    </>
  )
}

export default Home
