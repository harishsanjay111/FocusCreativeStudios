import React from "react";
import "./About.css"
import AnimateOnScroll from "../Animation/AnimationOnScroll";
const About = (props) => {
  const { heading, description, image } = {
    ...Layout3Defaults,
    ...props,
  };
  return (
    <AnimateOnScroll delay={0.1}>
    <section className="px-[5%] py-16 max-[768px]:pt-[8rem] lg:py-28">
    <div className="pb-[5rem]">
    <div className="text-center lg:text-[30px] About-text max-[768px]:text-[22px] ">About</div>
    <div className="bg-[black] w-[2.5rem] h-[1px] mx-[auto]"></div>
    </div>
      <div className="container">
    
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-[1rem]">
          <div>
          <h2 className=" heading mb-5 text-4xl font-bold md:mb-6 max-[768px]:text-[18px] lg:text-5xlb ">{heading}</h2>
            <p className="max-[768px]:text-[12px]  lg:text-[14px] description">{description}</p>
          </div>
          <div>
            <img src={image.src} className="w-full lg:w-[full] object-cover rounded-[12px]" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
    </AnimateOnScroll>
  );
};

const Layout3Defaults = {
  heading :"K Srinu",
  description:
    "With over a decade of expertise in video editing, photography, and videography, I bring a wealth of knowledge and creativity to every project. From capturing unforgettable moments to crafting visually stunning narratives, my passion for storytelling shines through in every frame. Whether it's a wedding, commercial shoot, or special event, I pride myself on delivering exceptional quality and exceeding client expectations.",
  image: {
    src: "Srinubgmain.png",
    alt: "Placeholder image",
  },
};

export default About;
