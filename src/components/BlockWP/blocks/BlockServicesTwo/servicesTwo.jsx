import BlockTag from "../BlockTag/blockTag";
import './servicesTwo.scss'

export default function blockServicesTwo( getBlock ) {
  
  const blockService = [];
  for (let i = 0; i < getBlock[0].list.services_block_list; i++) {
    const item = 'services_block_list_' + i;
    const textLink = item + "_button";
    const urlLink = item + "_link";
    const title = item + "_title";
    const text = item + "_text";
    const icon = item + "_image_image_data";
    
    blockService.push({
      textLink: getBlock[0].list[textLink] || '',
      urlLink: getBlock[0].list[urlLink] || '',
      title: getBlock[0].list[title] || '',
      text: getBlock[0].list[text] || '',
      iconURL: getBlock[0].list[icon].url_full || '',
      iconWidth: getBlock[0].list[icon].width || '',
      iconHeight: getBlock[0].list[icon].height || '',
    })
  }
  
  //Link to={`/${lang}/${item.urlLink}`}
  const serviceBox = ()=> blockService.map(( item, index ) => {
    return (
      <div className="page-services__block"
           key={index}>
        <div className="page-services__block-head">
          <div className="block-icon">
            <img src={item.iconURL}
                 width={item.iconWidth}
                 height={item.iconHeight}
                 alt="service icon"/>
          </div>
          <div className="block-title">
            {item.title}
          </div>
        </div>
        <div className="block-text">
          {item.text}
        </div>
        <div className="block-link">
          {item.textLink}
          <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg"
               width="32" height="32" viewBox="0 0 32 32">
            <g fill="none" strokeWidth="1.2"
               strokeLinejoin="round" strokeMiterlimit="10">
              <circle className="arrow-icon--circle" cx="16" cy="16"
                      r="15.62" strokeWidth="1.4"/>
              <path className="arrow-icon--arrow"
                    d="M17.14 10.93L23.91 16l-6.57 5.57M24.23 16.10h-21.58 "/>
            </g>
          </svg>
        </div>
      </div>
    )
  })
  
  return (
    <>
      <section className={`page-services`}>
        <div className="container">
          
          <BlockTag text={getBlock[0].tag}/>
          <div className="page-services__head">
            <div className="page-services__head-title">
              <h2 className="page-title"
                  dangerouslySetInnerHTML={{__html: getBlock[0].title}}/>
            </div>
          </div>
          
          <div className="page-services__wrap">
            {serviceBox()}
          </div>
        
        </div>
      </section>
    
    </>
  );
}