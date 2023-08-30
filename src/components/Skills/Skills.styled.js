import styled from "styled-components";

const SkillsSection = styled.section`
	position: relative;
	padding-top: 0;
`;

const SkillsContainer = styled.div`
	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		margin-top: 10px;

		background-color: #ffffff;
	}
`;

const Title = styled.h2`
	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		margin-top: 10px;

		background-color: #ffffff;
	}
`;

const SkillsList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
	margin: 40px auto;

	@media screen and (min-width: 768px) {
		margin: 50px auto;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 60px;
	}
`;

const SkillsSeparation = styled.div`
	display: inline;
	border-radius: 50%;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-ms-border-radius: 50%;
	-o-border-radius: 50%;
	transition-duration: 300ms;
	padding: 10px;

	&:hover {
		box-shadow: 0 0 4px 2px $color-green;
	}
	&:hover .icon-container {
		transform: rotateY(360deg);
		-webkit-transform: rotateY(360deg);
		-moz-transform: rotateY(360deg);
		-ms-transform: rotateY(360deg);
		-o-transform: rotateY(360deg);
	}
`;

const IconContainer = styled.a`
	display: inline-block;
	perspective: 1000px;
	transition: transform 0.3s;
	transition-duration: 1000ms;
	border-radius: 50%;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-ms-border-radius: 50%;
	-o-border-radius: 50%;
`;

const Icon = styled.svg`
	width: 72px;
	height: 72px;
	transition-duration: 300ms;
`;

export { SkillsSection, SkillsContainer, Title, SkillsList, SkillsSeparation, IconContainer, Icon };
