"use client";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialsSlider = ( {list} ) => {
  
  const params = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 25,
    speed: 700,
    autoHeight: false,
    loop: true,
    className: "testimonials-slider",
    centeredSlides: true,
    navigation: true,
    pagination: {
      type: "fraction",
    },
    grabCursor: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    updateOnWindowResize: true,
    breakpoints: {
      0: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 'auto',
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 24,
      }
    }
  }
  
  const slide = list.map(( item, index ) => {
    return (
      <SwiperSlide key={index}>
        <div className="testimonials-card">
          <div className="testimonials-card__head">
            <div className="human-image">
              <img src={item.imgURL}
                   width={item.imgW}
                   height={item.imgH}
                   alt={item.imgALT}/>
            </div>
            <div className="human-info">
              <div className="human-info_name">
                {item.name}
              </div>
              <div className="human-info_pos">
                {item.position}
              </div>
              <div className="human-info_rate">
                <img src={item.rateURL}
                     height={item.rateH}
                     width={item.rateW}
                     alt="rating in stars"/>
              </div>
            </div>
            {item.title}
          </div>
          <div className="testimonials-card__text">
            {item.text}
          </div>
          <a className="testimonials-card__link" rel="nofollow noreferrer" target="_blank"
             href={item.linkURL}>{item.linkText}</a>
        </div>
      </SwiperSlide>
    )
  })
  
  return (
    <>
      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} {...params}>
        {slide}
      </Swiper>
    </>
  )
};

export default TestimonialsSlider;