import React from "react";
import Lottie from "react-lottie";

export const Skills = () => {
	return (
		<section className='section skills'>
			<div className='container skills-container'>
				<h2 className='section-title skills-title'>Skills</h2>
				<ul className='skills-list'>
					<li className='skills-item'>HTML/CSS</li>
					<li className='skills-item'>SASS</li>
					<li className='skills-item'>JavaScript</li>
					<li className='skills-item'>React/Redux</li>
					<li className='skills-item'>React Native</li>
					<li className='skills-item'>Node.js</li>
					<li className='skills-item'>Git</li>
					<li className='skills-item'>Firebase</li>
				</ul>
			</div>
			<span className='skills-rings'>
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
