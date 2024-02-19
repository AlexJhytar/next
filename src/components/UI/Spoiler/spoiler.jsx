import React, { useRef, useState } from 'react';
import { CSSTransition } from "react-transition-group";
import Image from 'next/image';
import svgIcon from '@/public/svg/plus.svg';
import { useWindowSize } from "../../windowSize";

const Spoiler = ( {index, onClick, classes, content, title, number} ) => {
  let [showContent, setShowContent] = useState(false);
  const spoilerContent = useRef();
  const spoilerHead = useRef();
  const spoiler = useRef(null);
  
  const handleClick = () => {
    setShowContent(!showContent);
  }
  
  const sizeContent = useWindowSize(spoilerContent);
  const sizeHead = useWindowSize(spoilerHead);
  
  let getHeadHeight = sizeHead.height || 0;
  let getContentHeight = sizeContent.height || 0;
  
  return (
    //props:
    // state="open" - open spoiler default
    // number="" - number or something
    // title="" - title of spoiler
    // content="" - content of spoiler
    <CSSTransition
      in={showContent}
      timeout={100}
      nodeRef={spoiler}
      classNames="fade"
    >
      <div
        className={`spoiler ${classes}`}
        ref={spoiler}
        data-controls={index + 1}
        onClick={onClick}
        style={classes !== '' ? {'height': getContentHeight + getHeadHeight} : {'height': getHeadHeight}}>
        <div
          className="spoiler__head"
          onClick={handleClick} ref={spoilerHead}>
          <div className="spoiler-icon">
            <Image
              src={svgIcon}
              alt="My SVG"
            />
          </div>
          <div className="spoiler__head-title">
            {
              number === undefined ? '' : <span className="spoiler-numb">{number}</span>
            }
            {title}
          </div>
        </div>
        <div className="spoiler__content" ref={spoilerContent}>
          {content}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Spoiler;