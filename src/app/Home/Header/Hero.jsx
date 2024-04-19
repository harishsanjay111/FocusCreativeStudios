'use client'

import { Button } from "@relume_io/relume-ui";
import React from 'react';
import "./Hero.css"

const Hero = (props) => {
  const { heading, image } = {
    ...Layout3Defaults,
    ...props,
  };
  return (
    <div>
    
    <section className="px-[5%] py-16 md:py-24 lg:py-28 max-[768px]:pt-[10rem] ">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="font-bold md:mb-6 md:text-6xl lg:text-10xl max-[768px]:pb-[1rem] max-[768px]:text-[3rem] Heading ">{heading}</h2>
            <p className="md:text-md mb-[3rem]">"We Have <span  className='font-bold'>Bamboo Mats</span> ,<span className='font-bold'>Wooden Pallets</span> , <span className='font-bold'> PlyWood</span>  And Specialized in Doing <span className='font-bold'>Interior Designs</span>."</p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
           <Button className="About-btn">
           <a href="About">About</a>
           
           </Button>
           
           <a href="Contact">Contact us ➢</a>
          </div>
          
            </div>
          <div>
            <img src={image.src} className="w-full object-cover"  />
          </div>
        </div>
      </div>
    </section>
    
    </div>
  );
};

const Layout3Defaults = {
  heading: "Ebenezer",
  
 
  image: {
    src: "./backgroundmain.png",
    alt: "Placeholder image",
  },
};

export default Hero;
