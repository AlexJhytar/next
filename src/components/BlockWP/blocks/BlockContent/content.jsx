import './content.scss';

export default function blockContent( getBlock ) {
  const contentBlock = [];
  for (let i = 0; i < getBlock[0].list.content_list; i++) {
    let list = 'content_list_' + i;
    let title = list + '_title_content';
    let content = list + '_text_content';
    
    contentBlock.push({
      caption: getBlock[0].list[title],
      content: getBlock[0].list[content]
    })
  }
  
  return (
    <div className="block-content">
      <div className="container">
        
        {
          contentBlock.map(( item, index ) => {
            return (
              <div className="block-content__wrap" key={index}>
                {
                  item.caption === '' ? '' :
                    <div className="block-content__caption"
                         dangerouslySetInnerHTML={{__html: item.caption}}/>
                }
                {
                  item.content === '' ? '' :
                    <div className="block-content__text"
                         dangerouslySetInnerHTML={{__html: item.content}}/>
                }
              </div>
            )
          })
        }
      </div>
    </div>
  );
}