import BlockTag from "../BlockTag/blockTag";
import "./process.scss";
import ProcessLayout from "@/components/BlockWP/blocks/BlockProcess/processLayout";
import ProcessTabs from "@/components/BlockWP/blocks/BlockProcess/processTabs";

export default function blockProcess( getBlock ) {
  const navTabs = [];
  const contentTabs = [];
  
  for (let i = 0; i < getBlock[0].list.procces_list; i++) {
    const list = 'procces_list_' + [i];
    const tabTitle = list + '_procces_title';
    const contentCaption = list + '_caption';
    const contentText = list + '_text';
    const img = list + '_procces_icon_image_data';
    
    navTabs.push({
      title: getBlock[0].list[tabTitle] || '',
      url: getBlock[0].list[img].url_full || '',
      width: getBlock[0].list[img].width || '',
      height: getBlock[0].list[img].height || '',
    });
    
    contentTabs.push({
      caption: getBlock[0].list[contentCaption] || '', text: getBlock[0].list[contentText] || ''
    })
  }
  
  return (
    <ProcessLayout>
      <div className="container">
        <div className="process__head">
          <BlockTag text={getBlock[0].tag}/>
          <h2 className="page-title"
              dangerouslySetInnerHTML={{__html: getBlock[0].title}}/>
        </div>
        
        <ProcessTabs navTabs={navTabs} contentTabs={contentTabs} />
      </div>
    </ProcessLayout>
  );
}
