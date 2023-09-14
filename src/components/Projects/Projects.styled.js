import styled from "styled-components";

const ProjectsSection = styled.section`
	position: relative;
	z-index: 1;
	padding-top: 40px;
	padding-bottom: 40px;

	@media screen and (min-width: 768px) {
		padding-top: 30px;
		padding-bottom: 30px;
	}
	@media screen and (min-width: 980px) {
		padding-top: 50px;
		padding-bottom: 50px;
	}
`;

const ProjectsContainer = styled.div`
	max-width: 375px;
	margin: 0 auto;
	padding: 0 16px;

	@media screen and (min-width: 768px) {
		max-width: 700px;
		padding: 0 32px;
	}

	@media screen and (min-width: 980px) {
		max-width: 1110px;
	}

	@media screen and (max-width: 340px) {
		padding-left: 5px;
		padding-right: 5px;
	}
`;

const Title = styled.h2`
	font-size: 40px;
	line-height: calc(56 / 48);
	letter-spacing: -1.5px;

	@media screen and (min-width: 768px) {
		font-size: 48px;
		line-height: 1;
	}

	@media screen and (min-width: 980px) {
		font-size: 60px;
	}

	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		margin-top: 10px;

		background-color: #ffffff;
	}
`;

const ProjectsList = styled.ul`
	margin-top: 40px;

	@media screen and (min-width: 768px) {
		display: flex;
		gap: 30px;
		justify-content: center;
		flex-wrap: wrap;
	}
`;

export { ProjectsSection, ProjectsContainer, Title, ProjectsList };
