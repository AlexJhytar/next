"use client";

import React, {useEffect, useState} from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const HistorySlider = ( {list}) => {
  
  const [swiper, setSwiper] = useState(null);
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    window.addEventListener('resize', ()=>{
      if (value > 0) {
        swiper.slideTo(0);
      }
    });
  }, [value, swiper]);
  
  const params = {
    spaceBetween: 15,
    slidesPerView: 1,
    speed: 700,
    className: "history-slider",
    navigation: true,
    pagination: {
      type: "fraction",
    },
    allowTouchMove: false,
    watchSlidesProgress: true,
    updateOnWindowResize: true,
    breakpoints: {
      0: {
        slidesPerView: 'auto',
        spaceBetween: 15,
        allowTouchMove: true,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: false,
      }
    }
  }
  
  const slide = list.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="history-date">
          <span>{item.year}</span>
        </div>
        <div className="history-info">
          <h3 className="history-info_title"
              dangerouslySetInnerHTML={{__html: item.title}} />
          <div className="history-info_text"
               dangerouslySetInnerHTML={{__html: item.text}} />
        </div>
      </SwiperSlide>
    )
  })
  
  return (
    <Swiper onSwiper={setSwiper}
            modules={[Navigation, Pagination]}
            onSlideChange={(index) => setValue(index.realIndex)}
            {...params}>
      {slide}
    </Swiper>
  );
};

export default HistorySlider;