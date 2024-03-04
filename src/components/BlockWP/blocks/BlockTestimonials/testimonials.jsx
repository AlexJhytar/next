import BlockTag from "../BlockTag/blockTag";
import './testimonials.scss';
import TestimonialsSocial from "./testimonialsSocial";
import TestimonialsSlider from "@/components/BlockWP/blocks/BlockTestimonials/testimonialsSlider";

export default function blockTestimonials( getBlock ) {
  const getList = [];
  if (getBlock[0].list.testimonials_list !== null) {
    for (let i = 0; i < getBlock[0].list.testimonials_list; i++) {
      const list = 'testimonials_list_' + i;
      const name = list + '_name';
      const position = list + '_position';
      const image = list + '_image_image_data';
      const rate = list + '_rate_image_data';
      const text = list + '_text';
      const link = list + '_link';
      const linkText = list + '_text_link';
      const imgALT = list + '_image_alt_testimonials';
      
      getList.push({
        name: getBlock[0].list[name] || '',
        position: getBlock[0].list[position] || '',
        img: getBlock[0].list[image] || '',
        imgH: getBlock[0].list[image].height || '',
        imgW: getBlock[0].list[image].weight || '',
        imgURL: getBlock[0].list[image].url_full || '',
        rateURL: getBlock[0].list[rate].url_full || '',
        rateW: getBlock[0].list[rate].height || '',
        rateH: getBlock[0].list[rate].weight || '',
        text: getBlock[0].list[text] || '',
        linkURL: getBlock[0].list[link] || '',
        linkText: getBlock[0].list[linkText] || '',
        imgALT: getBlock[0].list[imgALT] || ''
      })
    }
  }
  
  const socialList = () => {
    const social = [];
    if (getBlock[0].list.social_network_testimonials_list !== null) {
      for (let i = 0; i < getBlock[0].list.social_network_testimonials_list; i++) {
        let list = 'social_network_testimonials_list_' + i;
        let url = list + '_link_testimonials_to_social_network';
        let icon = list + '_icon_testimonials_social_network_image_data';
        
        social.push({
          url: getBlock[0].list[url] || '',
          icon: getBlock[0].list[icon].url_full || '',
          iconW: getBlock[0].list[icon].width || '',
          iconH: getBlock[0].list[icon].height || '',
        })
      }
      
      return social;
    }
  }
  
  return (
    <section data-theme="dark" className="testimonials">
      <div className="container">
        <div className="testimonials__wrap">
          <div className="testimonials__info">
            <div className="testimonials__info-wrap">
              <BlockTag text={getBlock[0].tag}/>
              <h2 className="testimonials__info-title page-title"
                  dangerouslySetInnerHTML={{__html: getBlock[0].title}}/>
              <div className="testimonials__info-text">
                {getBlock[0].text}
              </div>
            </div>
            
            <div className="testimonials__info-social">
              <div className="social-caption"
                   dangerouslySetInnerHTML={{__html: getBlock[0].socialCaption}}/>
              <div className="social-buttons">
                
                <TestimonialsSocial getLink={socialList()}/>
              
              </div>
            </div>
          </div>
          
          <div className="testimonials__content">
            <TestimonialsSlider list={getList}/>
          </div>
        </div>
      </div>
    </section>
  );
};