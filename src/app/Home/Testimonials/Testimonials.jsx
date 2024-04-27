"use client";
import "./Testimonials.css"
import React from "react";
import { Star } from "@relume_io/relume-ui";

const Testimonial17Defaults = {
  heading: " testimonials",
  description: "Customer Reviews",
  testimonials: [
    {
      testimonial:
        "Editing superb ... Best for wedding 5 star service",
      avatar: {
        src: "profile.png",
        alt: "Testimonial avatar 1",
      },
      name: "Yum Bee",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      testimonial:
        "Best video editing lab, they provide high quality and stylish videos.",
      avatar: {
        src: "profile.png",
        alt: "Testimonial avatar 2",
      },
      name: "Harish sanjay",
      
      
      numberOfStars: 5,
    },
    {
      testimonial:
        "Good Work",
      avatar: {
        src: "profile.png",
        alt: "Testimonial avatar 3",
      },
      name: "devi mallesh",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
  ],
};

 function Testimonials (props) {
  const { heading, description, testimonials } = {
    ...Testimonial17Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 max-[768px]:text-[25px] lg:text-6xl testimonial">{heading}</h1>
          <p className=" max-[768px]:text-[11px] text-[14px] font-bold">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.testimonial}-${index}`}
              className="flex w-full flex-col items-start justify-between border  p-6 md:p-8"
            >
              <div className="mb-5 md:mb-6">
                <div className="mb-6 flex">
                  {Array(testimonial.numberOfStars)
                    .fill(null)
                    .map((_, starIndex) => (
                      <Star key={starIndex} className="mr-1 size-6 text-[#997f18]" />
                    ))}
                </div>
                <blockquote className={`before:content-['"'] after:content-['"'] md:text-md`}>
                  {testimonial.testimonial}
                </blockquote>
              </div>
              <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                <img
                  src={testimonial.avatar.src}
                  alt={testimonial.avatar.alt}
                  className="mb-4 mr-0 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials
