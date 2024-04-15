import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@relume_io/relume-ui';
import clsx from 'clsx';

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
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
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
  );
};


const Gallery21DefaultProps = {
  heading: 'Interior Design',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  images: [
    { src: './interior1.jpeg', alt: 'Placeholder image 1' },
    { src: './interior2.jpeg', alt: 'Placeholder image 2' },
    { src: './interior3.jpeg', alt: 'Placeholder image 3' },
    { src: './interior4.jpeg', alt: 'Placeholder image 4' },
    { src: './interior5.jpeg', alt: 'Placeholder image 5' },
    { src: './interior6.jpeg', alt: 'Placeholder image 6' },
    { src: './interior7.jpeg', alt: 'Placeholder image 7' },
    { src: './interior8.jpeg', alt: 'Placeholder image 8' },
    { src: './interior9.jpeg', alt: 'Placeholder image 9' },
    { src: './interior10.jpeg', alt: 'Placeholder image 10' },
  ],
};

export default InteriorDesign;
