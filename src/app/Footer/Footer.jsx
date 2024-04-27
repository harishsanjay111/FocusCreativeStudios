'use client'

import React from 'react';
import { Facebook,YouTube,Location } from "@relume_io/relume-ui";

const Footer = (props) => {
  const { image, footerText, columnLinks, socialMediaLinks } = {
    ...Footer4Defaults,
    ...props,
  };
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <div className="lg:justify-self-start w-[4rem]">
            <img src={image.src} alt={image.alt} className="inline-block " />
          </div>
          {columnLinks.map((column, index) => (
            <ul
              key={`column-${index}`}
              className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start"
            >
              {column.links.map((link, linkIndex) => (
                <li key={`${link.title}-${linkIndex}`} className="font-semibold">
                  <a
                    href={link.url}
                    className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 max-[768px]:text-[13px]"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            {socialMediaLinks.map((link, index) => (
              <a
              target="_blank"
                key={`${link.title}-${index}`}
                href={link.url}
                className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pt-6 text-sm md:flex-row md:gap-x-6 md:pt-8">
          <p className="mt-8 md:mt-0">{footerText}</p>
     
        </div>
      </div>
    </footer>
  );
};

const Footer4Defaults = {
  image: {
    src: "./FocusLogo.png",
    alt: "Logo image",
  },
  columnLinks: [
    {
      links: [
        { title: "Home", url: "Home" }, 
        { title: "About", url: "About" },
        { title: "Contact", url: "Contact" },
        { title: "Call", url: "#" },
       
      ],
    },
  ],
  socialMediaLinks: [
    { title: "Facebook", url: "https://www.facebook.com/profile.php?id=100066493522546&locale=hi_IN", icon: <Facebook /> },
    
    { title: "Youtube", url: "#", icon: <YouTube /> },
    { title: "Location", url: "https://www.google.com/maps/place/Focus+Studio/@17.7278263,83.3082369,17z/data=!3m1!4b1!4m6!3m5!1s0x3a39433c0a9dfbc5:0x7b4689247c24c32c!8m2!3d17.7278263!4d83.3108118!16s%2Fg%2F11cp7f36pj?entry=ttu", icon: <Location  className='w-[22px]'/> },

   
   
    
  ],
  footerText: "© 2024 Focus Creative Studios. All rights reserved.",
 
};

export default Footer;
