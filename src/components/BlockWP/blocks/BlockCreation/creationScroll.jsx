"use client"

import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CreationScroll() {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: document.querySelector('.creation'),
      markers: false,
      start: 'top bottom',
      end: 'bottom top',
      toggleClass: "in-view"
    });
    
  })
  
  useEffect(() => {
    let listItem = gsap.utils.toArray(".creation");
    
    listItem.forEach(( section, index ) => {
      gsap.fromTo(
        section,
        {
          y: 0
        },
        {
          y: -200,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        }
      );
    });
  })
}