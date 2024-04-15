"use client";
import React from "react";






export const Hero = () => {
   
  return (
    <header className="max-[768px:]absolute relative  px-[5%]">
      <div className="container">
        <div className="  flex max-h-[60rem]  min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md ">
            <h1 className="mb-5 text-6xl font-bold   md:mb-6 md:text-6xl max-[768px]:text-[35px] lg:text-10xl ">
            Ebenezer
            </h1>
            <p className="text-base   md:text-md text-[#63605f] w-[30rem] max-[768px]:text-[15px]">We specialized in  BambooMats Works,Wooden Pallets,Interior Design Works,Playwood</p>
            <div className=" flex gap-x-4 md:mt-8 max-[768px]:pt-[35rem] ">
             <button>Explore More</button>
             
            </div>
          </div>
        </div>
      </div>
      <div className="absolute  max-[768px]:pt-[13rem] pl-[30rem]   inset-0 -z-10 max-[768px]:pl-[0rem]  ">
        <img src={'./backgroundmain.png'} className=" w-[50rem] mx-[auto]  items-center     max-[768px]:w-[20rem]"  />

        <div className="absolute inset-0" />
      </div>
    </header>
  );
};


