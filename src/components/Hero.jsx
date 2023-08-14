import React, { useEffect, useRef } from "react";
import { Link } from "./Link";
import Typed from "typed.js";

export const Hero = () => {
	const span = useRef(null);

	useEffect(() => {
		const typed = new Typed(span.current, {
			strings: ["I'm Arsenii."],
			typeSpeed: 60,
		});
	});

	const intro = useRef(null);

	useEffect(() => {
		const typed = new Typed(intro.current, {
			strings: [
				"I develop web and mobile applications using React/React Native and Node.js. Feel free to contact me by clicking a button below or check out my projects! :D",
			],
			typeSpeed: 20,
		});
	});

	return (
		<section className='hero section' id='hero'>
			<div className='container hero-container'>
				<h1 className='hero-title'>
					Hello there! <span className='hero-span' ref={span}></span>
				</h1>
				<p className='hero-intro' ref={intro}></p>
				<div className='hero-link-wrapper'>
					<Link className='hero-link' text={"Contact me"} href='#contact' />
				</div>
			</div>
			<span className='hero-rings'>
				<svg xmlns='http://www.w3.org/2000/svg' width='530' height='129'>
					<g fill='none' fillRule='evenodd' stroke='#FFF' opacity='.25'>
						<ellipse cx='265' cy='40' rx='264.5' ry='39.5' />
						<ellipse cx='265' cy='52' rx='264.5' ry='39.5' />
						<ellipse cx='265' cy='65' rx='264.5' ry='39.5' />
						<ellipse cx='265' cy='77' rx='264.5' ry='39.5' />
						<ellipse cx='265' cy='89' rx='264.5' ry='39.5' />
					</g>
				</svg>
			</span>
		</section>
	);
};
