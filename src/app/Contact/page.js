"use client"

import React from "react";
import { BiEnvelope, BiPhone } from "react-icons/bi";
import { Location } from "@relume_io/relume-ui";

const Contact24Defaults = {
  
  heading: "Contact us",
  description: "Rotta Samuel",
  contacts: [
    {
      icon: <BiEnvelope className="size-12" />,
      title: "Email",
      description:
        "Drop us a message at the email addresses provided below. Reach out anytime we're here to assist you.",
      link: {
        label: "ebenezerbamboomatsworks@gmail.com",
        url: "mailto:ebenezerbamboomatsworks@gmail.com",
      },
    },
   
    {
      icon: <BiPhone className="size-12" />,
      title: "Phone",
      description:
        "Feel free to reach out to us using the contact numbers listed below. Don't hesitate to connect with us. ",
      link: {
        label: "+91 9705809466,",
        label2: "+91 6309858977",
        url: "tel: 9705809466",
        url2:"tel: 6309858977"
      },
    },
    {
      icon: <Location className="size-12" />,
      title: "Office",
      description:
        "D/no. 14-1-23, Cinema Road Bamboo Workers, Ramakrishna Rao Peta, KAKINADA-1 (A.P)",
      link: {
        label: "D/no. 14-1-23, Cinema Road",
        url: "#",
      },
    },
  ],
};

const Contact24 = ({ tagline, heading, description, contacts }) => {
  return (
    <section className="px-[15%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md ">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start justify-start gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <div key={`${contact.title}-${index}`}>
              <div className="mb-5 md:mb-6">{contact.icon}</div>
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {contact.title}
              </h3>
              <p className="mb-5 md:mb-6">{contact.description}</p>
              
              <div> 
              <a
                className="  underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2 "
                href={contact.link.url}
              >
                {contact.link.label}
                
              </a>
              <a
                className="px-[2px] underline ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
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
  );
};

Contact24.defaultProps = Contact24Defaults;

export default Contact24;
