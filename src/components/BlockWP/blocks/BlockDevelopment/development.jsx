import './development.scss';
import { developmentChildren } from "../../../BlockWP/blocks/BlockDevelopment/developmentChildren";
import DevelopmentBlock from "../../../BlockWP/blocks/BlockDevelopment/developmentBlock";

export default async function blockDevelopment( getBlock ) {
  
  let blockList = [];
  for (let i = 0; i < getBlock[0].list.offers_list; i++) {
    let list = 'offers_list_' + i;
    const imgAlt = list + '_image_alt_offer';
    const imgUrl = list + '_offer_image_data';
    const title = list + '_offer_title';
    const text = list + '_offer_description';
    
    blockList.push({
      title: getBlock[0].list[title],
      text: getBlock[0].list[text],
      src: getBlock[0].list[imgUrl].url_full,
      scrWebp: getBlock[0].list[imgUrl].url_full_webp,
      imgW: getBlock[0].list[imgUrl].width,
      imgH: getBlock[0].list[imgUrl].height,
      imgAlt: getBlock[0].list[imgAlt]
    })
  }
  
  return (
    <>
      <section className="development">
        <div className="container">
          <div className="development-wrap">
            {await developmentChildren({blockList})}
          </div>
        </div>
      </section>
      <DevelopmentBlock />
    </>
  )
  
}