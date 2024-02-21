import React from 'react';

const MenuToggle = ({ toggle, state }) => {
	 if ( state === true) {
			document.body.classList.add('mob-menu-open');
	 } else {
			document.body.classList.remove('mob-menu-open');
	 }

	 return (
			<div className="mob-menu" onClick={toggle}><span /></div>
	 )
};

export default MenuToggle;