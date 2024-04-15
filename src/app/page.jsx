'use client'

import { Hero } from "./Components/Header/Hero/Hero";
import BambooMats from "./Components/Section1/BambooMats";
import WoodenPallets from "./Components/Section2/WoodenPallets";
import InteriorDesign from "./Components/InteriorDesign/InteriorDesign";
import Have from "./Components/SectionMain1/Have";
// import Have from "./Components/SectionMain1/Have";
// import Navbar from "./Navbar/Navbar";
export default function Home() {  
  return (
    <div>
    <Hero />
    <Have />
    <WoodenPallets />
   <BambooMats />
      <InteriorDesign  />
      
    </div>
  );
}
