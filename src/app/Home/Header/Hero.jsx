"use client";
import AnimateOnScroll from "../../Animation/AnimationOnScroll"
import { Button } from "@relume_io/relume-ui";
import "./Hero.css"
export const Header1 = (props) => {
  const { heading, description, image } = {
    ...Header1Defaults,
    ...props,
  };
  return (
    <AnimateOnScroll delay={0.1}>
    <header className="px-[5%]  py-16 max-[768px]:pt-[11rem] lg:py-38 ">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-40 gap-y-12 max-[768px]:gap-y-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5   md:mb-6 max-[768px]:text-7xl lg:text-[4rem] heading max-[768px]:pb-[20px]">{heading}</h1>
           <div className="max-[768px]:pb-[20px]">
            <p className=" text-[14px] max-[768px]:text-[9px] ">{description}</p>
            </div>
            <div className="mt-6 flex gap-x-4 md:mt-8 ">
              <Button className="about-btn text-[12px] max-[768px]:text-[10px]">
              About
              </Button>
             
            </div>
            
          </div>
          <div className="pt-[5rem] max-[768px]:pt-[2rem] max-[768px]:mx-[auto] ">
            <img src={image.src} className=" max-[768px]:w-[30rem] w-[32rem] object-cover" alt={image.alt} />
          </div>
        </div>
      </div>
    </header>
    </AnimateOnScroll>
  );
};

const Header1Defaults = {
  heading: "Focus Creative Studios",
  description:
    "We breathe life into your vision. From capturing stunning visuals through videography and photography to crafting compelling narratives through video editing, we're your one-stop shop for all your creative content needs. Let us help you tell your story and leave a lasting impression.",
  
  image: {
    src: "FocusBG.png",
    alt: "Placeholder image",
  },
};

export default Header1;
