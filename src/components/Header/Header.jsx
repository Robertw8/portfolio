import React, { useState, useEffect } from "react";
import { NavBar } from "../NavBar/NavBar";
import sprite from "../../assets/images/sprite.svg";

import { HeaderSection, Container, Title, SocialsList, SocialsIcon, SocialsLink, Column } from "./Header.styled";

export const Header = () => {
	const [isScrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<HeaderSection className={`${isScrolled ? "bg-darkgrey" : ""}`}>
			<Container className='container header-container'>
				<Column className='header-column'>
					<Title className='header-title'>
						<a href='#hero'>robertw8</a>
					</Title>
					<NavBar />
				</Column>
				<div>
					<SocialsList className='socials-list'>
						<li className='socials-item'>
							<SocialsLink
								className='socials-link'
								href='https://github.com/Robertw8'
								target='_blank'
								rel='noreferrer nofollow noopener'
								aria-label='Open github'
							>
								<SocialsIcon className='socials-icon' width='25' height='24'>
									<use href={`${sprite}#icon-github`}></use>
								</SocialsIcon>
							</SocialsLink>
						</li>
						<li className='socials-item'>
							<SocialsLink
								className='socials-link'
								href='https://www.linkedin.com/in/arsenii-brovchuk/'
								target='_blank'
								rel='noreferrer nofollow noopener'
								aria-label='Open linkedin'
							>
								<SocialsIcon className='socials-icon' width='25' height='24'>
									<use href={`${sprite}#icon-linkedin`}></use>
								</SocialsIcon>
							</SocialsLink>
						</li>
					</SocialsList>
				</div>
			</Container>
		</HeaderSection>
	);
};
