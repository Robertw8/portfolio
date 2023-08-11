import React from "react";
import { Button } from "./Button";

export const Hero = () => {
	return (
		<section className='hero section'>
			<div className='container hero-container'>
				<h1 className='hero-title'>
					Hello there! I'm <span className='hero-span'>Arsenii.</span>
				</h1>
				<p className='hero-intro'>I develop web and mobile applications using React/React Native and Node.js</p>
				<div className='hero-btn-wrapper'>
					<Button className='hero-btn' typeAttr='button' text={"Contact me"} />
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
			<span className='hero-circle'>
				<svg xmlns='http://www.w3.org/2000/svg' width='129' height='129'>
					<circle cx='830.5' cy='585.5' r='64' fill='none' stroke='#FFF' transform='translate(-766 -521)' />
				</svg>
			</span>
		</section>
	);
};
