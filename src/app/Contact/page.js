"use client"

import React from "react";
import { BiEnvelope, BiPhone } from "react-icons/bi";
import { Location } from "@relume_io/relume-ui";
import AnimateOnScroll from "../Animation/AnimationOnScroll";
const ContactData = {
  
  heading: "Contact us",
  description: "K Srinu",
  contacts: [
    {
      icon: <BiEnvelope className="size-12 max-[768px]:size-8" />,
      title: "Email",
      description:
        "Drop us a message at the email addresses provided below. Reach out anytime we're here to assist you.",
      link: {
        label: "srinurockyk@gmail.com",
        url: "mailto:srinurockyk@gmail.com",
      },
    },
   
    {
      icon: <BiPhone className="size-12 max-[768px]:size-8" />,
      title: "Phone",
      description:
        "Feel free to reach out to us using the contact numbers listed below. Don't hesitate to connect with us. ",
      link: {
        label: "+919052996664,",
        label2: "+919912883250",
        url: "tel: 9052996664",
        url2:"tel: 9912883250"
      },
    },
    {
      icon: <Location className="size-12 max-[768px]:size-8" />,
      title: "Office",
      description:
        " Rama Talkies Rd, Srinagar, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016",
      link: {
        label: "Destiny Towers, 48-7-32",
        url: "https://www.google.com/maps/place/Focus+Studio/@17.7277762,83.3086591,17.19z/data=!4m14!1m7!3m6!1s0x3a39433c0a9dfbc5:0x7b4689247c24c32c!2sFocus+Studio!8m2!3d17.7278263!4d83.3108118!16s%2Fg%2F11cp7f36pj!3m5!1s0x3a39433c0a9dfbc5:0x7b4689247c24c32c!8m2!3d17.7278263!4d83.3108118!16s%2Fg%2F11cp7f36pj?entry=ttu",
      },
    },
  ],
};

const ContactPage = () => {
  const {  heading, description, contacts } = ContactData;
  return (
    <AnimateOnScroll delay={0.1}>
    <section className="px-[15%] py-16 md:py-24 lg:py-28 max-[768px]:pt-[8rem]">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          
          <h2 className="mb-5 text-5xl font-bold md:mb-6 max-[768px]:text-[22px] lg:text-5xl">{heading}</h2>
          <p className="md:text-md max-[768px]:text-[18px]">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start justify-start gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3 ">
          {contacts.map((contact, index) => (
            <div key={`${contact.title}-${index}`}>
              <div className="mb-5 md:mb-6">{contact.icon}</div>
              <h3 className="mb-3 text-2xl font-bold md:mb-4 max-[768px]:text-[18px] md:leading-[1.3] lg:text-[20px]">
                {contact.title}
              </h3>
              <p className="mb-5 md:mb-6 max-[768px]:text-[11px]">{contact.description}</p>
              
              <div> 
              <a
                className="  underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 max-[768px]:text-[14px]"
                href={contact.link.url}
              >
                {contact.link.label}
                
              </a>
              <a
                className="px-[2px] underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 max-[768px]:text-[14px]"
                href={contact.link.url2}
              >
                {contact.link.label2}
                
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </AnimateOnScroll>
  );
};



export default ContactPage;
