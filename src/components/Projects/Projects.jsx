import React from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";

import { ProjectsSection, ProjectsContainer, Title, ProjectsList } from "./Projects.styled";
import { projects } from "./projectsData";

export const Projects = () => {
	return (
		<ProjectsSection id='projects'>
			<ProjectsContainer>
				<Title>Projects</Title>
				<ProjectsList>
					{projects.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</ProjectsList>
			</ProjectsContainer>
		</ProjectsSection>
	);
};
