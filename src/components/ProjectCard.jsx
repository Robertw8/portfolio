import React from "react";
import { Link } from "./Link";

export const ProjectCard = ({ title, imageSrc, technologies, projectLink, codeLink }) => {
	return (
		<li className='projects-item'>
			<div className='image-thumb'>
				<img
					src={imageSrc}
					alt={`${title} preview`}
					className='project-image'
					width='350'
					height='250'
					loading='lazy'
				/>
			</div>
			<div className='project-info'>
				<h3 className='project-title'>{title}</h3>
				<ul className='technologies-list'>
					{technologies.map((tech, index) => (
						<li key={index} className='technologies-item'>
							{tech}
						</li>
					))}
				</ul>
				<div className='project-links-wrapper'>
					<Link className='project-link' text='View Project' href={projectLink} />
					<Link className='project-link' text='View Code' href={codeLink} />
				</div>
			</div>
		</li>
	);
};
