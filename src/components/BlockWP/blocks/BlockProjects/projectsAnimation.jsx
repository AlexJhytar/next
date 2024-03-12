"use client";

import {useEffect} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const ProjectsAnimation = () => {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let listItem = gsap.utils.toArray(".block-portfolio-case");
    
    listItem.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          y: 0
        },
        {
          y: -30,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "center bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    });
  })
  
  useEffect(() => {
    let caseItem = gsap.utils.toArray(".block-portfolio-case__wrap");
    let listItem = gsap.utils.toArray(".block-portfolio-case");
    
    caseItem.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        markers: false,
        start: 'top bottom',
        end: 'bottom top',
        toggleClass: {targets: listItem[index], className: "active"}
      });
    });
  })
};

export default ProjectsAnimation;