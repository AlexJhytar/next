import Count from "@/components/BlockWP/blocks/BlockAbout/count";

export async function AboutBenefits( {content} ) {
  let data = await content;
  
  let arrList = [];
  for (let i = 0; i < data.about_list; i++) {
    let title = `about_list_` + i + `_caption`,
      text = `about_list_` + i + `_text`;
    arrList.push({
      title: data[title],
      text: data[text],
    })
  }
  
  return <div className="about__benefits">
    { arrList.map(( block, index ) => {
      return (
        <div className="about__benefits-block" key={index}>
          <div className="block-caption">
            <Count str={block.title}/>
            {block.title.replace(/\d/g, '')}
          </div>
          
          <div className="block-text">
            {block.text}
          </div>
        </div>
      )
    })}
  </div>
}