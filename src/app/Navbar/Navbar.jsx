
'use client'
import React, { useState,useEffect } from "react";
import clsx from "clsx";
import { SolidChevronDown, Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import "./Navbar.css"
const Navbar = (props) => {
  const { logo, links, buttons, } = {
    ...Navbar2Defaults,
    ...props,
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      requestAnimationFrame(() => {
        if (window.innerWidth >= 768) { // Adjust this value as per your design for large screens
          setMobileMenuOpen(true);
        } else {
          setMobileMenuOpen(false);
        }
      });
    };
  
    // Call handleResize initially and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);
  
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const genericHamburgerLine = `h-0.5 w-6 my-[3px] bg-black transition ease-in-out transform duration-300 lg:hidden`;
  return (
    <div>
    
    <nav className=" flex h-auto min-h-16 w-full items-center border-b border-[#c3c9c5] bg-white px-[5%] lg:min-h-18 fixed z-[1000] nav ">
      <div className="mx-auto flex size-full auto-cols-fr items-center justify-between gap-4 lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr]">
        <div className="flex min-h-16 flex-shrink-0 items-center w-[50px]">
         <a href="/"> <img src={logo.src} /></a> 
        </div>
        <ul
          className={clsx(
            "absolute left-0 top-16 flex h-dvh w-full flex-col items-center justify-start border-b border-border-primary bg-white px-[5%] pt-4 lg:static lg:flex lg:h-auto lg:w-auto lg:flex-row lg:justify-center lg:border-none lg:px-0 lg:pt-0 max-[768px]:w-[20rem]",
            mobileMenuOpen ? "block" : "hidden"
          )}
        >
          {links.map((link, index) => (
            <li key={`${link.title}-${index}`} className="w-full lg:w-auto">
              {link.subLinks && link.subLinks.length > 0 ? (
                <NavItemDropdown subLinks={link.subLinks} title={link.title} />
              ) : (
                <a
                  href={link.url}
                  className="relative block py-3 text-center text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:px-20 lg:py-2 max-[768px]:py-[3rem] lg:text-[15px] max-[768px]:text-[12px]   Navlinks"
                >
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="flex min-h-16 items-center justify-end gap-x-4">
          <div className="flex">
            {buttons.map((button,index) => (
              <a
              key={index}
              href="tel:9052996664">
              <Button
                
                variant={button.variant}
                size={button.size}
                className="px-4 py-1 md:px-6 md:py-2 max-[768px]:py-[3px] rounded-[5px] max-[768px]:w-[50px] max-[768px]:text-[12px] bg-[#102104]  call-btn"
                
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-5 h-6 max-[768px]:w-[14px] ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

                
              </Button>
              </a>
              
            ))}
            <div className="pl-[2rem] pt-[5px] ">
           <a href="https://api.whatsapp.com/send?phone=9052996664">
             <Image
             className="max-[768px]:w-[24px]"
            src="/Whatsapp.png"
            width={30}
            height={10}
            
            
          /> 
          </a>
          </div>

          </div>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div
              className={clsx(genericHamburgerLine, mobileMenuOpen && "translate-y-2 -rotate-45")}
            />
            <div className={clsx(genericHamburgerLine, mobileMenuOpen && "opacity-0")} />
            <div
              className={clsx(genericHamburgerLine, mobileMenuOpen && "-translate-y-2 rotate-45")}
            />
          </button>
        </div>
      </div>
    </nav>
   
    </div>
  );
};

const NavItemDropdown = ({ title, subLinks }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div>
      <button
        className="flex w-full items-center justify-center gap-2 py-3 text-center text-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base"
        onClick={() => setDropdownOpen((prev) => !prev)}
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <span>{title}</span>
        <AnimatePresence>
          <motion.div
            animate={dropdownOpen ? "rotated" : "initial"}
            variants={{
              rotated: { rotate: 180 },
              initial: { rotate: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <SolidChevronDown className="size-4" />
          </motion.div>
        </AnimatePresence>
      </button>
      {dropdownOpen && (
        <AnimatePresence>
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {
                opacity: "var(--opacity-from, 100%)",
                y: "var(--slide-from, 25%)",
              },
              visible: {
                opacity: 1,
                y: "var(--slide-to, 0%)",
              },
            }}
            transition={{ duration: 0.3, type: "spring", bounce: 0 }}
            className="border-border-primary bg-white [--slide-from:0%] lg:absolute lg:h-auto lg:border lg:p-2 lg:[--opacity-from:0%] lg:[--slide-from:25%]"
          >
            {subLinks.map((subLink, index) => (
              <li
                key={`${subLink.title}-${index}`}
                className="relative whitespace-nowrap py-3 text-center align-top text-base lg:px-4 lg:py-2 lg:text-left"
              >
                <a
                  href={subLink.url}
                  className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                >
                  {subLink.title}
                </a>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      )}
    </div>
  );
};

const Navbar2Defaults = {
  logo: {
    src: "FocusLogo.png",
    alt: "Logo image",
  },
  links: [
    { title: "Home", url: "/" },
    { title: "About", url: "About" },
    { title: "Contact", url: "Contact" },
    
    
   
  ],
  buttons: [
    {
      title: "Call",
      size: "sm",
    },
  ],
};

export default Navbar;
