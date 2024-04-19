"use client"

import Hero from "./Header/Hero";
import BambooMats from "./Section1/BambooMats";
import WoodenPallets from "./Section2/WoodenPallets";
import InteriorDesign from "./InteriorDesign/InteriorDesign";
import Have from "./SectionMain1/Have";
import Plywood from './Section4/Playwood';
import Do from "./SectionMain2/Do" ;

import React from 'react'

const HomePage = () => {
  return (
    <div>
    <Hero />
    <Have />
    <WoodenPallets />
   <BambooMats />
   <Plywood />
   <Do />
      <InteriorDesign  />
      
    </div>
  )
}

export default HomePage;