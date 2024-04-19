import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@relume_io/relume-ui';
import clsx from 'clsx';
import AnimateOnScroll from "../../Animation/AnimationOnScroll"

const InteriorDesign = (props) => {
  const { heading, description, images } = { ...Gallery21DefaultProps, ...props };

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
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
    <AnimateOnScroll delay={0.1}>
        <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-3xl max-[768px]:text-[1.8rem] lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>
        <Carousel setApi={setApi} opts={options}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={`${image.src}-${index}`} className="basis-auto pr-2 md:pr-4">
                <img src={image.src} alt={image.alt} className="w-[314px] sm:w-[408px] md:w-[314px] lg:w-[408px] xxl:w-[00px]" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-[38px] flex items-center justify-between">
            <div className="mt-4 flex w-full items-start justify-start">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx('mx-[3px] inline-block size-2 rounded-full', {
                    'bg-black': current === index + 2,
                    'bg-neutral-light': current !== index + 1,
                  })}
                />
              ))}
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
              <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
    </AnimateOnScroll>

    </div>
  );
};


const Gallery21DefaultProps = {
  heading: 'Interior Designs',
  description: 'Transform your space with our versatile interior designs crafted with premium plywood. Elevate your ambiance and embrace sophistication with our unique and customizable plywood creations.',
  images: [
    { src: './interior1.jpeg' },
    { src: './interior2.jpeg' },
    { src: './interior3.jpeg'  },
    { src: './interior4.jpeg' },
    { src: './interior5.jpeg'  },
    { src: './interior6.jpeg' },
    { src: './interior7.jpeg'  },
    { src: './interior8.jpeg'  },
    { src: './interior9.jpeg'  },
    { src: './interior10.jpeg' },
  ],
};

export default InteriorDesign;
