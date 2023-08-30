import React from "react";
import { Link } from "../Link/Link";

import {
	Card,
	Image,
	Info,
	ProjectTitle,
	TechnologiesList,
	TechnologiesItem,
	LinksWrapper,
} from "./ProjectCard.styled";

export const ProjectCard = ({ title, imageSrc, technologies, projectLink, codeLink }) => {
	return (
		<Card className='projects-item'>
			<div className='image-thumb'>
				<Image
					src={imageSrc}
					alt={`${title} preview`}
					className='project-image'
					width='350'
					height='250'
					loading='lazy'
				/>
			</div>
			<Info className='project-info'>
				<ProjectTitle className='project-title'>{title}</ProjectTitle>
				<TechnologiesList className='technologies-list'>
					{technologies.map((tech, index) => (
						<TechnologiesItem key={index} className='technologies-item'>
							{tech}
						</TechnologiesItem>
					))}
				</TechnologiesList>
				<LinksWrapper className='project-links-wrapper'>
					<Link className='project-link' text='View Project' href={projectLink} />
					<Link className='project-link' text='View Code' href={codeLink} />
				</LinksWrapper>
			</Info>
		</Card>
	);
};
