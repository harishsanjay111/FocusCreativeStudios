'use client'
import React from 'react';
import { Button, ChevronRight } from '@relume_io/relume-ui';

const WoodenPallets = (props) => {
  const { featureSections, image } = { ...Layout34Defaults, ...props };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
      <div className='font-bold text-center pb-[5rem] text-[30px]'>Wooden Pallets</div>
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
            <img src={'woodenpallet.png'} className="w-full object-cover rounded-[5px]" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Layout34Defaults = {
  featureSections: [
    {
      
      heading: 'Shipping and Logistics',
      description:
        'Wooden pallets are widely used in the transportation and logistics industry for stacking, storing, and transporting goods efficiently.',
      buttons: [{ title: 'Button', variant: 'link', size: 'link', iconRight: <ChevronRight /> }],
    },
    {
      
      heading: 'Storage and Warehousing',
      description:
        'They provide a stable and organized platform for storing products in warehouses, distribution centers, and storage facilities.',
      buttons: [{ title: 'Button', variant: 'link', size: 'link', iconRight: <ChevronRight /> }],
    },
    {
     
      heading: 'Material Handling',
      description:
        'Wooden pallets facilitate the movement of materials using forklifts, pallet jacks, and other handling equipment, streamlining warehouse operations.',
      buttons: [{ title: 'Button', variant: 'link', size: 'link', iconRight: <ChevronRight /> }],
    },
  ],
  image: {
    src: 'https://relume-assets.s3.amazonaws.com/placeholder-image.svg',
    alt: 'Placeholder image',
  },
};

export default WoodenPallets;

// const Layout34Defaults: Layout34Props = {
//   featureSections: [
//     {
//       icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 1" },
//       heading: "Shipping and Logistics",
//       description:
//         "Wooden pallets are widely used in the transportation and logistics industry for stacking, storing, and transporting goods efficiently.",
//       buttons: [{ title: "Button", variant: "link", size: "link", iconRight: <ChevronRight /> }],
//     },
//     {
//       icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 2" },
//       heading: "Storage and Warehousing",
//       description:
//         "They provide a stable and organized platform for storing products in warehouses, distribution centers, and storage facilities.",
//       buttons: [{ title: "Button", variant: "link", size: "link", iconRight: <ChevronRight /> }],
//     },
//     {
//       icon: { src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg", alt: "Relume logo 3" },
//       heading: "Material Handling",
//       description:
//         "Wooden pallets facilitate the movement of materials using forklifts, pallet jacks, and other handling equipment, streamlining warehouse operations.",
//       buttons: [{ title: "Button", variant: "link", size: "link", iconRight: <ChevronRight /> }],
//     },
//   ],
 
// };
