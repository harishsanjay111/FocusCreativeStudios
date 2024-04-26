"use client"
import "./Gallery.css"
import { useState, useEffect } from "react";
import AnimateOnScroll from "@/app/Animation/AnimationOnScroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import clsx from "clsx";

const Gallery = (props) => {
  const { heading, description, images } = {
    ...Gallery15Defaults,
    ...props,
  };

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  // for all available options: https://www.embla-carousel.com/api/options/
  const options = {
    loop: true,
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <AnimateOnScroll>
    <section>
      <div className="px-[1%] py-16 md:py-24 lg:py-28 lg:w-[52rem] max-[768px]:w-[25rem] mx-[auto]">
        <div className="container">
          <div className="mb-12 text-center md:mb-18 lg:mb-10">
            <h2 className=" md:text-7xl lg:text-[33px] Gallery">{heading}</h2>
            <div className="bg-[black] w-[2.5rem] h-[1px] mx-[auto] lg:mb-[2rem]"></div>
           
          </div>
          <Carousel setApi={setApi} opts={options} className="overflow-hidden">
            <div className="relative">
              <CarouselContent className="ml-0">
                {images.map((image, index) => (
                  <CarouselItem key={`${image.src}-${index}`} className="px-0 md:px-16 lg:px-28">
                    <div className="relative w-full pt-[100.66%]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 size-full object-cover rounded-[15px]"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden bg-white md:flex md:size-12 lg:size-14" />
              <CarouselNext className="hidden bg-white md:flex md:size-12 lg:size-14" />
            </div>
            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx("relative mx-[3px] inline-block size-2 rounded-full", {
                    "bg-black": current === index + 1,
                    "bg-neutral-darker/40": current !== index + 1,
                  })}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
    </AnimateOnScroll>
  );
};

const Gallery15Defaults = {
  heading: " Gallery",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  images: [
    {
      src: "image2.jpg",
      alt: "Placeholder image 1",
    },
    {
      src: "image3.jpg",
      alt: "Placeholder image 2",
    },
    {
      src: "image4-2.jpg",
      alt: "Placeholder image 3",
    },
    {
      src: "image5.jpg",
      alt: "Placeholder image 3",
    },
    {
      src: "image6.jpeg",
      alt: "Placeholder image 3",
    },
    {
      src: "image7.jpeg",
      alt: "Placeholder image 3",
    },
    {
      src: "image8.jpg",
      alt: "Placeholder image 3",
    },
    {
      src: "image9.jpg",
      alt: "Placeholder image 3",
    },
    {
      src: "image10.jpeg",
      alt: "Placeholder image 3",
    },
  ],
};

export default Gallery;
