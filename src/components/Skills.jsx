import React from "react";

const skills = [
	{
		name: "HTML/CSS",
		icon: "/src/assets/images/sprite.svg#icon-html",
		link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
	},
	{
		name: "CSS",
		icon: "/src/assets/images/sprite.svg#icon-css",
		link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
	},
	{
		name: "Sass",
		icon: "/src/assets/images/sprite.svg#icon-sass",
		link: "https://sass-lang.com/",
	},
	{
		name: "JavaScript",
		icon: "/src/assets/images/sprite.svg#icon-javascript",
		link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
	},
	{
		name: "React",
		icon: "/src/assets/images/sprite.svg#icon-react",
		link: "https://reactjs.org/",
	},
	{
		name: "Redux",
		icon: "/src/assets/images/sprite.svg#icon-redux",
		link: "https://redux.js.org/",
	},
	{
		name: "Node.js",
		icon: "/src/assets/images/sprite.svg#icon-node",
		link: "https://nodejs.dev/en/",
	},
	{
		name: "Git",
		icon: "/src/assets/images/sprite.svg#icon-git",
		link: "https://git-scm.com/",
	},
	{
		name: "Firebase",
		icon: "/src/assets/images/sprite.svg#icon-firebase",
		link: "https://firebase.google.com/",
	},
];

export const Skills = () => {
	return (
		<section className='section skills' id='skills'>
			<div className='container skills-container'>
				<h2 className='section-title skills-title'>Skills</h2>
				<ul className='skills-list'>
					{skills.map((skill, index) => (
						<li className='skills-item' key={index}>
							<div className='skills-sep'>
								<a href={skill.link} className='icon-container' target='_blank' rel='noreferrer noopener nofollow'>
									<svg width='100%' height='100%' className='skills-icon'>
										<use href={skill.icon}></use>
									</svg>
								</a>
							</div>
						</li>
					))}
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
