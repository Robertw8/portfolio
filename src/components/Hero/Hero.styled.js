import styled from "styled-components";

const HeroSection = styled.section`
	position: relative;
	height: 400px;
	padding-bottom: 0;

	@media screen and (min-width: 768px) {
		height: 800px;
	}
`;

const Title = styled.h1`
	font-family: "Space Grotesk", sans-serif;
	font-weight: bold;
	font-size: 40px;
	line-height: calc(56 / 48);
	color: #ffffff;
	letter-spacing: -1.5px;
	text-align: center;
	margin-top: 0;

	@media screen and (min-width: 768px) {
		font-size: 72px;
		line-height: 1;
		text-align: left;
		margin-top: 90px;
	}
	@media screen and (min-width: 980px) {
		font-size: 88px;
		margin-top: 130px;
	}
`;

const Span = styled.span`
	border-bottom: 4px solid #4ee1a0;

	@media screen and (min-width: 768px) {
		border-bottom: 6px solid #4ee1a0;
	}
`;

const Intro = styled.p`
	margin-top: 20px;

	font-family: "Space Grotesk", sans-serif;
	font-weight: normal;
	font-size: 16px;
	line-height: calc(26 / 16);
	color: #d9d9d9;
	text-align: center;

	@media screen and (min-width: 768px) {
		font-size: 18px;
		line-height: calc(28 / 18);
		margin-top: 60px;
		text-align: left;
	}
`;

const LinkWrapper = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (min-width: 768px) {
		justify-content: start;
		margin-top: 50px;
	}
`;

const HeroLink = styled.a`
	margin-top: 20px;
`;

export { HeroSection, Title, Span, Intro, LinkWrapper, HeroLink };
