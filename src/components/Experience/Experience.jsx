import React, { useId } from "react";
import { ExperienceSection, ExperienceContainer, ExperienceList } from "./Experience.styled";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { ExperienceItem } from "../ExperienceItem/ExperienceItem";

import { experienceData } from "./experienceData";

export const Experience = () => {
	const id = useId();

	return (
		<ExperienceSection id='experience'>
			<ExperienceContainer>
				<SectionTitle>Experience</SectionTitle>
				<ExperienceList>
					{experienceData.map(({ period, title, name, text, responsibilities }) => (
						<ExperienceItem
							period={period}
							title={title}
							name={name}
							text={text}
							responsibilities={responsibilities}
							key={id}
						/>
					))}
				</ExperienceList>
			</ExperienceContainer>
		</ExperienceSection>
	);
};
