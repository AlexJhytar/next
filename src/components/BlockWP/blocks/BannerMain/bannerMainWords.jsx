'use client';
import Slider from "react-slick";

export default function BannerMainWords( {getWord} ) {
  const params = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'words-slider',
    variableWidth: true,
    autoplay: true,
    speed: 10000,
    draggable: false,
    cssEase: "linear",
    autoplaySpeed: 0,
    beforeChange: ( nextIndex ) => {
      if (document.querySelector('.words-slider .slick-slide') !== null) {
        let index = document.querySelector('.words-slider .slick-slide').dataset.index;
        if (nextIndex === (Math.abs(index) - 1)) {
          document.querySelector(`.words-slider .slick-slide[data-index="${Math.abs(index)}"]`).dataset.slide = 'active';
          setTimeout(() => {
            document.querySelector(`.words-slider .slick-slide[data-index="${Math.abs(index)}"]`).removeAttribute('data-slide');
          }, 10000);
        }
      }
    },
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
          draggable: false,
        }
      }
    ]
  }
  
  let wordArr = [];
  for (let i = 0; i < getWord.title_inner_list; i++) {
    let index = 'title_inner_list_' + i;
    let word = index + '_text_inner';
    wordArr.push({
      word: getWord[word]
    });
  }
  
  return <Slider {...params}>
    {wordArr.map(( item, index ) => {
      return (
        <div key={index} data-text={item.word} className="slick-slide_text">
          {item.word}
        </div>
      )
    })}
  </Slider>
  
};
