import './services.scss';
import BlockTag from "../BlockTag/blockTag";
import "../../../UI/Links";
import serviceBox from "@/components/BlockWP/blocks/BlockServices/serviceBox";
import ServiceBox from "@/components/BlockWP/blocks/BlockServices/serviceBox";

export default async function blockServices( getBlock ) {
  const blockService = [];
  
  for (let i = 0; i < getBlock[0].list.services_list; i++) {
    const item = 'services_list_' + i;
    const textLink = item + "_text_link";
    const urlLink = item + "_link";
    const title = item + "_title";
    const icon = item + "_icon_image_data";
    
    blockService.push({
      textLink: getBlock[0].list[textLink] || '',
      urlLink: getBlock[0].list[urlLink] || '',
      title: getBlock[0].list[title] || '',
      iconURL: getBlock[0].list[icon].url_full || '',
      iconWidth: getBlock[0].list[icon].width || '',
      iconHeight: getBlock[0].list[icon].height || '',
    })
  }
  
  return (
    <section className={`services`}>
      <div className="container">
        
        <BlockTag text={getBlock[0].tag}/>
        <div className="services__head">
          <div className="services__head-title">
            <h2 className="page-title"
                dangerouslySetInnerHTML={{__html: getBlock[0].title}}/>
          </div>
          <div className="services__head-text">
            {getBlock[0].text}
          </div>
        </div>
        
        <div className="services__wrap">
          <ServiceBox list={blockService} />
        </div>
      
      </div>
    </section>
  )
}