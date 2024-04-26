"use client"

import React, { useEffect, useRef } from 'react';
import "./Animation.css"
const AnimateOnScroll = ({ children, delay = 0.1, duration = 0.2 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.3, delay: delay * 300 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return <div ref={ref} className="animate-on-scroll">{children}</div>;
};

export default AnimateOnScroll;