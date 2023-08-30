import styled from "styled-components";

const Card = styled.li`
	background-color: #242424;
	width: 300px;
	box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.5);
	margin: 0 auto;

	&:not(:first-child) {
		margin-top: 40px;

		@media screen and (min-width: 768px) {
			margin: 0;
		}
	}

	@media screen and (min-width: 980px) {
		margin: 0;
		width: 40%;
	}
`;

const Image = styled.img`
	width: 100%;
`;

const Info = styled.div`
	width: 100%;
	padding: 10px;
`;

const ProjectTitle = styled.h3`
	max-width: 300px;
	font-family: "Space Grotesk", sans-serif;
	font-weight: 700;
	font-size: 24px;
	line-height: calc(32 / 24);
	color: #d9d9d9;
`;

const TechnologiesList = styled.ul`
	display: flex;
	gap: 20px;
	margin-top: 10px;
`;

const TechnologiesItem = styled.li`
	font-family: "Space Grotesk", sans-serif;
	font-weight: normal;
	font-size: 18px;
	line-height: calc(28 / 18);
	color: #d9d9d9;
`;

const LinksWrapper = styled.div`
	margin-top: 20px;
	display: flex;
	gap: 30px;
	height: 100%;

	@media screen and (max-width: 560px) {
		flex-wrap: wrap;
	}
`;

export { Card, Image, Info, ProjectTitle, TechnologiesList, TechnologiesItem, LinksWrapper };
