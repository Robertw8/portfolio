import React from "react";
import sprite from "../../assets/images/sprite.svg";

import {
	SkillsSection,
	SkillsContainer,
	Title,
	SkillsList,
	SkillsSeparation,
	IconContainer,
	Icon,
} from "./Skills.styled";

const skills = [
	{
		name: "HTML/CSS",
		icon: `${sprite}#icon-html`,
		link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
	},
	{
		name: "CSS",
		icon: `${sprite}#icon-css`,
		link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
	},
	{
		name: "Sass",
		icon: `${sprite}#icon-sass`,
		link: "https://sass-lang.com/",
	},
	{
		name: "JavaScript",
		icon: `${sprite}#icon-javascript`,
		link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
	},
	{
		name: "React",
		icon: `${sprite}#icon-react`,
		link: "https://reactjs.org/",
	},
	{
		name: "Redux",
		icon: `${sprite}#icon-redux`,
		link: "https://redux.js.org/",
	},
	// {
	// 	name: "Node.js",
	// 	icon: "images/sprite.svg#icon-node",
	// 	link: "https://nodejs.dev/en/",
	// },
	{
		name: "Git",
		icon: `${sprite}#icon-git`,
		link: "https://git-scm.com/",
	},
	// {
	// 	name: "Firebase",
	// 	icon: "/images/sprite.svg#icon-firebase",
	// 	link: "https://firebase.google.com/",
	// },
];

export const Skills = () => {
	return (
		<SkillsSection className='section skills' id='skills'>
			<SkillsContainer className='container skills-container'>
				<Title className='section-title skills-title'>Skills</Title>
				<SkillsList className='skills-list'>
					{skills.map((skill, index) => (
						<li className='skills-item' key={index}>
							<SkillsSeparation className='skills-sep'>
								<IconContainer
									href={skill.link}
									className='icon-container'
									target='_blank'
									rel='noreferrer noopener nofollow'
								>
									<Icon width='100%' height='100%' className='skills-icon'>
										<use href={skill.icon}></use>
									</Icon>
								</IconContainer>
							</SkillsSeparation>
						</li>
					))}
				</SkillsList>
			</SkillsContainer>
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
		</SkillsSection>
	);
};
