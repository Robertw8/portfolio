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
		<Card>
			<div>
				<Image src={imageSrc} alt={`${title} preview`} width='350' height='250' loading='lazy' />
			</div>
			<Info>
				<ProjectTitle>{title}</ProjectTitle>
				<TechnologiesList>
					{technologies.map((tech, index) => (
						<TechnologiesItem key={index}>{tech}</TechnologiesItem>
					))}
				</TechnologiesList>
				<LinksWrapper>
					<Link text='View Project' href={projectLink} />
					<Link text='View Code' href={codeLink} />
				</LinksWrapper>
			</Info>
		</Card>
	);
};
