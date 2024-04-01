import BlockTag from "../BlockTag/blockTag";
import './standards.scss';

export default function blockStandards( getBlock ) {
  
  const standardBlock = [];
  
  for (let i = 0; i < getBlock[0].list.standarts_list; i++) {
    const list = 'standarts_list_' + [i];
    const title = list + '_title';
    const img = list + '_image_image_data';
    
    standardBlock.push({
      title: getBlock[0].list[title] || '',
      urlIMG: getBlock[0].list[img].url_full || '',
      width: getBlock[0].list[img].width || '',
      height: getBlock[0].list[img].height || '',
    });
  }
  
  return (
    <section className="standards">
      <div className="container">
        <BlockTag text={getBlock[0].tag}/>
        <div className="standards__head">
          <h2 className="page-title"
              dangerouslySetInnerHTML={{__html: getBlock[0].title}}/>
          <div className="standards__head-text"
               dangerouslySetInnerHTML={{__html: getBlock[0].text}}/>
        </div>
        <div className="standards__wrap">
          {
            standardBlock.map(( item, index ) => {
              return (
                <div className="standards__block" key={index}>
                  <div className="block-icon">
                    <img
                      src={item.urlIMG}
                      width={item.width}
                      height={item.height}
                      alt="block icon"/>
                  </div>
                  <div className="block-title">{item.title}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    
    </section>
  );
};