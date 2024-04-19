
'use client'
import React from 'react';
import AnimateOnScroll from "../../Animation/AnimationOnScroll"

const BambooMats = (props) => {
  const { featureSections, image } = { ...Layout34Defaults, ...props };

  return (
    <div>
    <AnimateOnScroll delay={0.1}>
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
      <div className='font-bold text-center pb-[5rem] text-[30px] max-[768px]:text-[1.7rem]'>Bamboo Mats</div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
         
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            {featureSections.map((section, index) => (
              <div key={`${section.heading}-${index}`} className="flex self-start">
              <div className="mr-6 flex-none self-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /> </svg>
              </div>
                <div>
                  <h1 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.heading}</h1>
                  <p>{section.description}</p>
                
                </div>
              </div>
            ))}
          </div>
          <div>
            <img src={'/bamboomatscollege.png'} className="w-full object-cover rounded-[5px]"  />
          </div>
        </div>
      </div>
    </section>
    </AnimateOnScroll>
    </div>
  );
};

const Layout34Defaults = {
  featureSections: [
    {
      
      heading: 'Eco-friendly Flooring',
      description:
        'Bamboo mats serve as an environmentally sustainable alternative to traditional flooring materials.',
    
    },
    {
      
      heading: 'Natural Aesthetics',
      description:
        'They add a touch of natural beauty to indoor and outdoor spaces with their unique grain patterns and warm tones.',
      
    },
    {
     
      heading: 'Health Benefits',
      description:
        'Bamboo mats are hypoallergenic and resistant to dust mites, making them a healthier choice for allergy sufferers.',
     
    },
  ],
 
};

export default BambooMats;




