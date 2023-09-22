import React from "react";
import { Link } from "../../Link/Link";

import {
	Card,
	ImageThumb,
	Image,
	Info,
	ProjectTitle,
	TechnologiesList,
	TechnologiesItem,
	LinksWrapper,
	Overlay,
	OverlayText,
} from "./ProjectCard.styled";

export const ProjectCard = ({ title, imageSrc, technologies, projectLink, codeLink, info: { role, tasks, text } }) => {
	return (
		<Card>
			<ImageThumb>
				<Image src={imageSrc} alt={`${title} preview`} width='350' height='250' loading='lazy' />
				<Overlay>
					<OverlayText>
						<strong style={{ color: "#4ee1a0" }}>Type:</strong> {role}
					</OverlayText>
					<OverlayText>
						<strong style={{ color: "#4ee1a0" }}>Tasks:</strong> {tasks}
					</OverlayText>
				</Overlay>
			</ImageThumb>
			<Info>
				<ProjectTitle>{title}</ProjectTitle>
				<TechnologiesList>
					{technologies.map((tech, index) => (
						<TechnologiesItem key={index}>{tech}</TechnologiesItem>
					))}
				</TechnologiesList>
				<LinksWrapper>
					<Link text='View Project' href={projectLink} target='_blank' />
					<Link text='View Code' href={codeLink} target='_blank' />
				</LinksWrapper>
			</Info>
		</Card>
	);
};
