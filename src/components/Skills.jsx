import React from "react";

export const Skills = () => {
	return (
		<section className='section skills' id='skills'>
			<div className='container skills-container'>
				<h2 className='section-title skills-title'>Skills</h2>
				<ul className='skills-list'>
					<li className='skills-item'>
						<a
							href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics'
							className='icon-container'
							target='_blank'
							rel='noreferrer noopener nofollow'
						>
							<svg width='100%' height='100%' className='skills-icon'>
								<use href='src/assets/images/sprite.svg#icon-html'></use>
							</svg>
						</a>
						<a
							href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics'
							className='icon-container'
							target='_blank'
							rel='noreferrer noopener nofollow'
						>
							<svg width='100%' height='100%' className='skills-icon'>
								<use href='src/assets/images/sprite.svg#icon-css'></use>
							</svg>
						</a>
					</li>
					<li className='skills-item'>
						<a
							href='https://sass-lang.com/'
							className='icon-container'
							target='_blank'
							rel='noreferrer noopener nofollow'
						>
							<svg width='100%' height='100%' className='skills-icon'>
								<use href='src/assets/images/sprite.svg#icon-sass'></use>
							</svg>
						</a>
					</li>
					<li className='skills-item'>
						<a
							href='https://developer.mozilla.org/en-US/docs/Web/javascript'
							className='icon-container'
							target='_blank'
							rel='noreferrer noopener nofollow'
						>
							<svg width='100%' height='100%' className='skills-icon'>
								<use href='src/assets/images/sprite.svg#icon-javascript'></use>
							</svg>
						</a>
					</li>
					<li className='skills-item'>
						<a
							href='https://reactjs.org/'
							className='icon-container'
							target='_blank'
							rel='noreferrer noopener nofollow'
						>
							<svg width='100%' height='100%' className='skills-icon'>
								<use href='src/assets/images/sprite.svg#icon-react'></use>
							</svg>
						</a>
						<a
							href='https://redux.js.org/'
							className='icon-container'
							target='_blank'
							rel='noreferrer noopener nofollow'
						>
							<svg width='100%' height='100%' className='skills-icon'>
								<use href='src/assets/images/sprite.svg#icon-redux'></use>
							</svg>
						</a>
					</li>
					<li className='skills-item'>
						<a
							href='https://nodejs.dev/en/'
							className='icon-container'
							target='_blank'
							rel='noreferrer noopener nofollow'
						>
							<svg width='100%' height='100%' className='skills-icon'>
								<use href='src/assets/images/sprite.svg#icon-node'></use>
							</svg>
						</a>
					</li>
					<li className='skills-item'>
						<a
							href='https://git-scm.com/'
							className='icon-container'
							target='_blank'
							rel='noreferrer noopener nofollow'
						>
							<svg width='100%' height='100%' className='skills-icon'>
								<use href='src/assets/images/sprite.svg#icon-git'></use>
							</svg>
						</a>
					</li>
					<li className='skills-item'>
						<a
							href='https://firebase.google.com/'
							className='icon-container'
							target='_blank'
							rel='noreferrer noopener nofollow'
						>
							<svg width='100%' height='100%' className='skills-icon'>
								<use href='src/assets/images/sprite.svg#icon-firebase'></use>
							</svg>
						</a>
					</li>
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
			{/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
				<path
					fill='#242424'
					fillOpacity='1'
					d='M0,288L60,266.7C120,245,240,203,360,197.3C480,192,600,224,720,197.3C840,171,960,85,1080,85.3C1200,85,1320,171,1380,213.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'
				></path>
			</svg> */}
		</section>
	);
};
