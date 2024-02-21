export function AboutBenefits( {content} ) {
  
  let arrList = [];
  for (let i = 0; i < content.about_list; i++) {
    let title = `about_list_` + i + `_caption`,
      text = `about_list_` + i + `_text`;
    arrList.push({
      title: content[title],
      text: content[text],
    })
  }
  
  return <div className="about__benefits">
    {arrList.map(( block, index ) => {
      return (
        <div className="about__benefits-block" key={index}>
          <div className="block-caption">
            {block.title}
          </div>
          <div className="block-text">
            {block.text}
          </div>
        </div>
      )
    })}
  </div>
}