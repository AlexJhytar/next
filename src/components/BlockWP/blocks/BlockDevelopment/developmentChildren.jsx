import { Picture } from "@/components/UI/Picture";

export function developmentChildren( {blockList} ) {
  
  return  blockList.map(( item, index ) => {
    return (
      <div className="development-block" key={index}>
        <div className="development-block_info">
          <h2 className="page-title development-block_info_title"
              dangerouslySetInnerHTML={{__html: item.title}}/>
          
          <div className="development-block_info_text"
               dangerouslySetInnerHTML={{__html: item.text}}/>
        </div>
        <div className="development-block_image">
          <span/><span/><span/><span/><span/><span/><span/>
          <Picture src={item.src}
                   srcWebp={item.scrWebp}
                   alt={item.imgAlt}
                   width={item.imgW}
                   height={item.imgH}/>
        </div>
      </div>
    )
    
  })
}