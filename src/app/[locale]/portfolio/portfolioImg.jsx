import Picture from "@/components/UI/Picture";

const PortfolioImg = ( {getImage} ) => {
  
  const img = [];
  for (let index in getImage) {
    img.push({
      scr: getImage[index].full,
      srcWebp: getImage[index].full_webp
    })
  }
  
  return img.map(( img, index ) => {
    return (
      <Picture key={index} src={img.scr} srcWebp={img.srcWebp}/>
    )
  })
}

export default PortfolioImg;