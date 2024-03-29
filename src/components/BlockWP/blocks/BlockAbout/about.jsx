import BlockTag from "../BlockTag/blockTag";
import './about.scss';
import Links from "../../../UI/Links";
import { AboutBenefits } from "./aboutBenefits";
import { useLocale } from "next-intl";
import Picture from "@/components/UI/Picture";

export default function blockAbout( getBlock ) {
  const lang = useLocale();
  const block = getBlock;
  const attrs = [];
  
  if (getBlock[0].data.style_select === 'style-1') {
    attrs.push({
      tag: block[0].data.about_tag || '',
      title: block[0].data.about_title || '',
      text: block[0].data.about_text || '',
      textButton: block[0].data.about_button || '',
      imgURL: block[0].data.about_image_image_data.url_full || '',
      imgALT: block[0].data.about_image_alt || '',
      imgWidth: block[0].data.about_image_image_data.width || '',
      imgHeight: block[0].data.about_image_image_data.height || '',
      list: block[0].list
    })
  }
  
  if (block[0].data.style_select === 'style-2') {
    attrs.push({
      tag: block[0].data.about_tag || '',
      title: block[0].data.about_title || '',
      text: block[0].data.about_text || '',
      list: block[0].list
    })
  }
  
  return <section
    className={`about ${block[0].data.style_select === 'style-2' ? 'style-2' : ''}`}>
    
    <div className="container">
      
      <div className="about__wrap">
        <div className="about__content">
          <BlockTag text={block[0].data.about_tag}/>
          
          <h2 className="page-title about__content-title"
              dangerouslySetInnerHTML={{__html: block[0].data.about_title}}/>
          
          {
            block[0].data.style_select === 'style-2' ? '' :
              <>
                <div className="about__content-text">
                  {getBlock[0].text}
                </div>
                
                <Links url={`/${lang}/about-us`} title="Read about us"
                       text={getBlock[0].textButton}
                />
              </>
          }
        
        
        </div>
        
        <AboutBenefits content={block[0].list}/>
        
        {
          block[0].data.style_select === 'style-2' ? '' :
            <>
              <div className="about__image">
                <Picture
                  fallback={attrs[0].imgURL}
                  src={attrs[0].imgURL}
                  alt={attrs[0].imgALT}
                  width={attrs[0].imgWidth}
                  height={attrs[0].imgHeight}
                />
              </div>
            </>
        }
      </div>
    
    </div>
  </section>
  
}