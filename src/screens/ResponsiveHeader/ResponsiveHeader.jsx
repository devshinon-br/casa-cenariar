import css from './ResponsiveHeader.module.css'
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MobileHeader from '../MobileHeader/MobileHeader';

const ResponsiveHeader = () => {
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
			{isMobile ? <MobileHeader /> : <Header />}
		</>
	);
};
export default ResponsiveHeader;