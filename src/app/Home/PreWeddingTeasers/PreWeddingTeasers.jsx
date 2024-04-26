"use client";
import "./PreWeddingTeasers.css"
import React, { useState } from "react";
import AnimateOnScroll from "../../Animation/AnimationOnScroll"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  Play,
  Loading,
} from "@relume_io/relume-ui";
import clsx from "clsx";

const Layout92Defaults = {
  heading: "Pre Wedding Teasers",
  description:
    
    "Elevate the excitement leading up to your big day with our captivating pre-wedding teasers. Our expert team specializes in crafting cinematic narratives that beautifully showcase your love story. From breathtaking landscapes to intimate moments, we'll create a teaser that perfectly sets the stage for your upcoming wedding celebration.",
  image: {
    src: "PreWeddingimg.png",
    alt: "Placeholder image",
  },
  video: "https://www.youtube.com/embed/gscbJemvqZI?si=8NIaOdRB72bo9kXF",
};

const PreWeddingTeasers = (props) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const { heading, description, image, video } = {
    ...Layout92Defaults,
    ...props,
  };
  return (
    <AnimateOnScroll delay={0.1}>
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
        <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-3xl max-[768px]:text-[20px] max-[768px]:text-center wedding-heading">{heading}</h3>
        <p className="md:text-md lg:text-[14px] max-[768px]:text-[10px] ">{description}</p>
      </div>
      <div>
      <Dialog>
        <DialogTrigger>
          <div className="relative flex w-full items-center justify-center rounded-[13px] ">
            <img src={image.src} className="w-full object-cover" alt={image.alt} />
            <Play className="absolute z-20 text-white" />
            <span className="absolute inset-0 z-10 bg-black/50" />
          </div>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay className="bg-black/90" />
          <DialogClose />
          <DialogContent>
            {!isIframeLoaded && <Loading className="mx-auto size-16 text-white" />}
            <iframe
              className={clsx("z-0 mx-auto aspect-video h-full w-full md:w-[738px] lg:w-[940px]", {
                visible: isIframeLoaded,
                hidden: !isIframeLoaded,
              })}
              src={video}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsIframeLoaded(true)}
            ></iframe>
          </DialogContent>
        </DialogPortal>
      </Dialog>
      </div>
    </section>
    </AnimateOnScroll>
  );
};

export default PreWeddingTeasers;
