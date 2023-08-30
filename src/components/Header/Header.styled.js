import styled from "styled-components";

const HeaderSection = styled.header`
	width: 100%;
	padding-top: 40px;
	padding-bottom: 20px;
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	-webkit-transform: translateX(-50%);
	-moz-transform: translateX(-50%);
	-ms-transform: translateX(-50%);
	-o-transform: translateX(-50%);
	z-index: 10;
	background-color: transparent;
	box-shadow: 1px 5px 5px 0px rgba(255, 255, 255, 0.5);
	transition-duration: 150ms;

	@media screen and (max-width: 767px) {
		position: static;
		transform: translateX(0);
		-webkit-transform: translateX(0);
		-moz-transform: translateX(0);
		-ms-transform: translateX(0);
		-o-transform: translateX(0);
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

const Title = styled.h2`
	font-family: "Space Grotesk", sans-serif;
	font-weight: 700;
	font-size: 24px;
	line-height: calc(32 / 24);
	color: #ffffff;
	text-align: center;

	@media screen and (min-width: 768px) {
		font-size: 32px;
		line-height: 1;
	}
`;

const SocialsList = styled.ul`
	display: flex;
	justify-content: center;
	gap: 30px;
	margin-top: 20px;

	@media screen and (min-width: 768px) {
		margin: 0;
	}

	@media screen and (max-width: 767px) {
		gap: 10px;
		margin-left: 0;
	}
`;

const SocialsIcon = styled.svg`
	fill: #ffffff;
	transition-duration: 300ms;
`;

const SocialsLink = styled.a`
	padding: 5px;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover .socials-icon {
		fill: #4ee1a0;
	}
`;

const Column = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`;

export { HeaderSection, Container, Title, SocialsList, SocialsIcon, SocialsLink, Column };
