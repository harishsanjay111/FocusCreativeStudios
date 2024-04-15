"use client";

import { Button } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header5Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Hero = (props: Header5Props) => {
  const { heading, description, buttons, image } = {
    ...Header5Defaults,
    ...props,
  } as Props;
  return (
    <header className="max-[768px:]absolute relative  px-[5%]">
      <div className="container">
        <div className="  flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold  md:mb-6 md:text-6xl max-[768px]:text-[35px] lg:text-10xl">
              {heading}
            </h1>
            <p className="text-base   md:text-md text-[#63605f] w-[30rem] max-[768px]:text-[15px]">{description}</p>
            <div className=" flex gap-x-4 md:mt-8 max-[768px]:pt-[35rem] ">
              {buttons.map((button, index) => (
                <Button
                  key={`${button.title}-${index}`}
                  variant={button.variant}
                  size={button.size}
                  iconRight={button.iconRight}
                  iconLeft={button.iconLeft}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute  max-[768px]:pt-[13rem] pl-[10rem] inset-0 -z-10 max-[768px]:pl-[0rem] items-center ">
        <img src={'./backgroundmain.png'} className="w-[70rem] mx-[auto]  max-[768px]:w-[20rem]      object-cover" alt={image.alt} />
        <div className="absolute inset-0" />
      </div>
    </header>
  );
};

const Header5Defaults: Header5Props = {
  heading: "Ebenezer",
  description:
    "We specialized in  BambooMats Works,Wooden Pallets,Interior Design Works,Playwood",
  buttons: [{ title: "Explore More ▼ " }, { title: "Contact", variant: "secondary-alt", }],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image", 
  },
};
