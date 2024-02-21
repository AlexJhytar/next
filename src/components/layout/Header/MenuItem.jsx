import React from 'react';
import {NavLink} from "react-router-dom";

const MenuItem = (props) => {

	 return (
			<li onClick={props.onClick}>
				 <NavLink activeclassname="active" to={props.link}> {props.menu} </NavLink>
			</li>
	 );
};

export default MenuItem;