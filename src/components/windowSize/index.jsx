import {useEffect, useState} from 'react';

export function useWindowSize(size) {
	 const [windowSize, setWindowSize] = useState({
			width: undefined,
			height: undefined,
	 });
	 useEffect(() => {
			function handleResize() {
				 setWindowSize({
						width: size.current.offsetWidth,
						height: size.current.offsetHeight,
				 });
			}

			window.addEventListener("resize", handleResize);
			handleResize();
			return () => window.removeEventListener("resize", handleResize);
	 }, [size]);
	 return windowSize;
}