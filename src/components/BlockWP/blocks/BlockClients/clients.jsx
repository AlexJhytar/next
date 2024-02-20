"use client"

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { useLocale } from "next-intl";

// Import styles
import 'swiper/swiper-bundle.css';
import "./clients.scss";

export const blockClients = ( getBlock ) => {
  const lang = useLocale();
  
  console.log(getBlock)
  
  const [swiperRef, setSwiperRef] = useState(null);
  
  const play = () => {
    swiperRef.autoplay.start();
  };
  const pause = () => {
    swiperRef.autoplay.stop();
  };
  
  const params = {
    spaceBetween: 25,
    slidesPerView: 5,
    speed: 4000,
    loop: true,
    className: "clients-slider",
    navigation: false,
    pagination: false,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    updateOnWindowResize: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 70,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 70,
      },
      1440: {
        slidesPerView: 7,
        spaceBetween: 70,
      },
    }
  }
  
  const images = [];
  for (let i = 0; i < getBlock[0].clients_list; i++) {
    let list = `clients_list_` + i;
    let alt = list + `_image_alt`;
    let img = list + `_image_image_data`;
    let link = list + `_link_to_client`;
    
    images.push({
      alt: getBlock[0][alt] || '',
      url: getBlock[0][img].url_full || '',
      width: getBlock[0][img].width || '',
      height: getBlock[0][img].height || '',
      link: getBlock[0][link] || '',
    })
  }
  
  return <div className={`clients`}
         onMouseEnter={() => pause()}
         onMouseLeave={() => play()}
    >
      
      {
        <Swiper{...params} onSwiper={setSwiperRef}>
          {images.map(( icon, index ) => {
            return (
              <SwiperSlide key={index}>
                {
                  icon.link !== '' ?
                    <>
                      <Link href={`/${lang}${icon.link}`}>
                        <div className="clients-image">
                          <img src={icon.url} width={icon.width}
                               height={icon.height}
                               alt={icon.alt}/>
                        </div>
                      </Link>
                    </>
                    :
                    <>
                      <div className="clients-image">
                        <img src={icon.url} width={icon.width} height={icon.height}
                             alt={icon.alt}/>
                      </div>
                    </>
                }
              </SwiperSlide>
            )
          })}
          {images.map(( icon, index ) => {
            return (
              <SwiperSlide key={index}>
                {
                  icon.link !== '' ?
                    <>
                      <Link href={`/${lang}${icon.link}`}>
                        <div className="clients-image">
                          <img src={icon.url} width={icon.width}
                               height={icon.height}
                               alt={icon.alt}/>
                        </div>
                      </Link>
                    </>
                    :
                    <>
                      <div className="clients-image">
                        <img src={icon.url} width={icon.width} height={icon.height}
                             alt={icon.alt}/>
                      </div>
                    </>
                }
              </SwiperSlide>
            )
          })}
        </Swiper>
      }
    
    </div>

}