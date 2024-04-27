"use client"

import Hero from "./Header/Hero";
import VideoEditing from "./VideoEditing/Videoediting"
import Gallery from "./Gallery/Gallery";
import WeddingTeasers from "./WeddingTeasers/WeddingTeasers"
import PreWeddingTeasers from './PreWeddingTeasers/PreWeddingTeasers'
import Birthday from "./Birthdays/Birthdays"
import Commercial from "./Commerical/Commercial"
import React from 'react'
import Testimonials from "./Testimonials/Testimonials"
const HomePage = () => {
  return (
    <div>
    <Hero />
    
    <VideoEditing />
   
    <WeddingTeasers />
   
   <PreWeddingTeasers />
   <Birthday />
   <Commercial />
      <Gallery  />
      <Testimonials />
      
    </div>
  )
}

export default HomePage;