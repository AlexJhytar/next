"use client"

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

export default function DevelopmentBlock( ) {
  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
    let listItem = gsap.utils.toArray('.development-block');
    
    return listItem.forEach(( section, index ) => {
      ScrollTrigger.create({
        trigger: section,
        markers: false,
        start: 'top bottom',
        end: 'bottom top',
        toggleClass: "in-view"
      });
    });
  });
  
}