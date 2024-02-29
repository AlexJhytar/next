import React from 'react';
import arrow from "@/svg/arrow-right.svg";

// props:
// type="submit || button"
// class="default || mixed"
// color="green || black || white"
// disabled="disabled"
// title=""
// onClick="name of function"

const Button = ( props ) => {
  
  const icons = [
    {
      name: 'arrow', url: arrow
    }
  ]
  
  let icon;
  icons.map(item => {
    if (props.icon === item.name) {
      icon = item.url.src;
    }
  })
  
  return (
    <button type={props.type}
            disabled={props.disabled === 'true' ? "disabled" : ''}
            onClick={props.onClick}
            className={`button button-` + props.class + ` button-` + props.color}>
      <span dangerouslySetInnerHTML={{__html: props.title}}/>
      {props.icon !== undefined && props.icon !== '' ?
        <img src={icon} alt="button icon"/> : ''}
    </button>
  
  );
};

export default Button;