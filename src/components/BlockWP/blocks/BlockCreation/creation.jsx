import "./creation.scss"
import BlockTag from "../BlockTag/blockTag";
import Picture from "../../../UI/Picture";
import CreationScroll from "@/components/BlockWP/blocks/BlockCreation/creationScroll";
import CreationButton from "@/components/BlockWP/blocks/BlockCreation/creationButton";

export default function blockCreation( getBlock ) {
  
  return (
    <>
      <section data-theme="dark" className="creation">
        <div className="container">
          <div className="creation__wrap">
            <div className="creation__content">
              <BlockTag text={getBlock[0].tag}/>
              <h2 className="creation__content-title page-title"
                  dangerouslySetInnerHTML={{__html: getBlock[0].title}}/>
              <p className="creation__content-text">
                {getBlock[0].text}
              </p>
              
              <div className="creation__content-buttons">
            
                <CreationButton text={getBlock[0].textButton}/>
                
                <div className="user-info">
                  {getBlock[0].info}
                </div>
              </div>
            
            </div>
            <div className="creation__image">
              <div className="image-wrap">
                <Picture
                  fallback={getBlock[0].imgURL}
                  src={getBlock[0].imgURL}
                  srcWebp={getBlock[0].imgURL}
                  alt={getBlock[0].imgALT}
                  width={getBlock[0].imgWidth}
                  height={getBlock[0].imgHeight}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CreationScroll/>
    </>
  );
}