import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";

import images from "../../assets/images/projects/images.jpg";
import spot from "../../assets/images/projects/spot.jpg";
import treats from "../../assets/images/projects/treats.jpg";
import webStudio from "../../assets/images/projects/web-studio.jpg";

export const Projects = () => {
	const projects = [
		{
			title: 'Team Project: "The Watch Spot" Landing page',
			imageSrc: spot,
			technologies: ["HTML/CSS", "JavaScript"],
			projectLink: "https://gladja.github.io/team-project/",
			codeLink: "https://github.com/Robertw8/the-watch-spot",
		},
		{
			title: "Team Project: Tasty Treats",
			imageSrc: treats,
			technologies: ["HTML", "SCSS", "JavaScript", "REST API"],
			projectLink: "https://robertw8.github.io/project-recipes/",
			codeLink: "https://github.com/Robertw8/project-recipes",
		},
		{
			title: "Images Search using REST API",
			imageSrc: images,
			technologies: ["HTML/CSS", "JavaScript", "REST API"],
			projectLink: "https://robertw8.github.io/goit-js-hw-11/",
			codeLink: "https://github.com/Robertw8/goit-js-hw-11",
		},
		{
			title: "The First Project: WebStudio Landing page",
			imageSrc: webStudio,
			technologies: ["HTML/CSS", "JavaScript"],
			projectLink: "https://robertw8.github.io/web-studio/",
			codeLink: "https://github.com/Robertw8/web-studio",
		},
	];

	return (
		<section className='section projects' id='projects'>
			<div className='container projects-container'>
				<h2 className='section-title projects-title'>Projects</h2>
				<ul className='projects-list'>
					{projects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</ul>
			</div>
		</section>
	);
};
