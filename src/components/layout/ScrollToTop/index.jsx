import React, {useEffect, useState} from 'react';
import { useLocation  } from 'react-router-dom';
import LoadingSpinner from "../../UI/LoadingSpinner";

const ScrollToTop = () => {
	 const { pathname } = useLocation();
	 const [hide, setHide] = useState(false);

	 useEffect(() => {
	 	 setHide(true)
			window.scrollTo({
				 top: 0,
				 left: 0,
				 behavior: "smooth",
			});
	 	 setTimeout(()=>{
	 	 	 setHide(false)
		 }, 500)
	 }, [pathname]);

	 return (
	 	 <>
				{
					 hide === true ? <LoadingSpinner /> : ''
				}
		 </>
	 );
};

export default ScrollToTop;