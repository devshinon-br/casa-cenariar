import css from './ResponsiveHome.module.css';
import { useState, useEffect } from 'react';
import Home from '../Home/Home';
import MobileHome from '../MobileHome/MobileHome';

const ResponsiveHome = () => {
	const mobileWidth = 1200;
	const [isMobile, setIsMobile] = useState(window.innerWidth < mobileWidth);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < mobileWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			{isMobile ? <MobileHome /> : <Home />}
		</>
	);
};

export default ResponsiveHome;