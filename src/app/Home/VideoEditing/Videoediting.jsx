import React from "react";
import "./Videoediting.css"
import  AnimateOnScroll from "../../Animation/AnimationOnScroll"
const VideoEditing = (props) => {
  const { heading, description, image } = {
    ...Layout3Defaults,
    ...props,
  };
  return (
    <AnimateOnScroll delay={0.1}>
    <section className="px-[5%] py-16 md:py-24 lg:py-28 max-[768px]:py-[10px]">
    <div className="pb-[5rem] max-[768px]:pb-[3rem]">
    <div className="text-center lg:text-[30px] max-[768px]:text-[18px]  Videoediting">Video Editing</div>
    <div className="bg-[black] w-[4rem] h-[1px] mx-[auto] max-[768px]:w-[2rem]"></div>
    </div>
      <div className="container">
     
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center    lg:gap-x-[12rem]">
          <div>
            
            <p className="max-[768px]:pb-[2rem] lg:text-[16px] max-[768px]:text-[11px] description">{description}</p>
          </div>
          <div>
            <img src={image.src} className="w-full lg:w-[25rem] max-[768px]:w-[18rem] object-cover rounded-[12px] max-[768px]:mx-[auto]" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
    </AnimateOnScroll>
  );
};

const Layout3Defaults = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Unlock the power of captivating storytelling with our premium video editing and teaser creation services. At Focus Creative Studios, we specialize in crafting dynamic and immersive visuals that captivate your audience from the very first frame. With industry-leading software such as Premiere Pro and other top-tier tools at our disposal, we bring your vision to life with unparalleled creativity and expertise. Whether you're looking to create compelling teasers, breathtaking promotional videos, or engaging social media content, our team of skilled professionals ensures that every project exceeds expectations. Elevate your brand's presence and make a lasting impression with our exceptional video editing services. Let's transform your ideas into unforgettable visual experiences that leave a lasting impact.",
  image: {
    src: "Focus-Videoediting.jpg",
    alt: "Placeholder image",
  },
};

export default VideoEditing;
