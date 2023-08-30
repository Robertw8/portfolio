import React from "react";
import { Title } from "../Title/Title";
import sprite from "../../assets/images/sprite.svg";

import { FooterSection, FooterContainer } from "./Footer.styled";
import { SocialsList } from "../SocialsList/SocialsList";

export const Footer = () => {
	return (
		<FooterSection>
			<FooterContainer>
				<Title />
				<SocialsList />
			</FooterContainer>
		</FooterSection>
	);
};
