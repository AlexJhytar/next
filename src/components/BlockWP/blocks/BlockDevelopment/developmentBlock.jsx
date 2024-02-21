"use client";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

export default function DevelopmentBlock( ) {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let listItem = gsap.utils.toArray('.development-block');
    
    listItem.forEach(( section, index ) => {
      ScrollTrigger.create({
        trigger: section,
        markers: false,
        start: 'top bottom',
        end: 'bottom top',
        toggleClass: "in-view"
      });
    });
  }, []);
  
}