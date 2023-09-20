import React from "react";
import { Rings } from "../Rings/Rings";
import { SkillsItem } from "./SkillsItem/SkillsItem";

import { SkillsSection, SkillsContainer, SkillsList, Title } from "./Skills.styled";
import { skills } from "./skillsData";

export const Skills = () => {
	return (
		<SkillsSection id='skills'>
			<SkillsContainer>
				<Title>Skills</Title>
				<SkillsList>
					{skills.map((skill, index) => (
						<SkillsItem name={skill.name} link={skill.link} icon={skill.icon} key={index} />
					))}
				</SkillsList>
			</SkillsContainer>
			<Rings top='' right='-300px' bottom='40px' left='' />
		</SkillsSection>
	);
};
