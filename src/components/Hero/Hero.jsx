import React, { useEffect, useRef } from "react";
import { Link } from "../Link/Link";
import Typed from "typed.js";

import { HeroSection, Container, Title, Span, Intro, LinkWrapper } from "./Hero.styled";

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
		<HeroSection id='hero'>
			<Container>
				<Title>
					Hello there! <Span ref={span}></Span>
				</Title>
				<Intro ref={intro}></Intro>
				<LinkWrapper>
					<Link text={"Contact me"} href='#contact' />
				</LinkWrapper>
			</Container>
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
		</HeroSection>
	);
};
