import React from "react";
import { Rings } from "../Rings/Rings";

import {
	SkillsSection,
	SkillsContainer,
	SkillsList,
	SkillsSeparation,
	IconContainer,
	Icon,
	Title,
} from "./Skills.styled";
import { skills } from "./skillsData";

export const Skills = () => {
	return (
		<SkillsSection id='skills'>
			<SkillsContainer>
				<Title>Skills</Title>
				<SkillsList>
					{skills.map((skill, index) => (
						<li key={index}>
							<SkillsSeparation>
								<IconContainer
									href={skill.link}
									className='icon-container'
									target='_blank'
									rel='noreferrer noopener nofollow'
								>
									<Icon width='100%' height='100%'>
										<use href={skill.icon}></use>
									</Icon>
								</IconContainer>
							</SkillsSeparation>
						</li>
					))}
				</SkillsList>
			</SkillsContainer>
			<Rings posTop='' posRight='-300px' posBottom='40px' posLeft='' />
		</SkillsSection>
	);
};
