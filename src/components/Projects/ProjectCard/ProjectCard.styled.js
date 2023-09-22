import styled from "styled-components";

const Card = styled.li`
	background-color: #242424;
	width: 300px;
	box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.5);
	margin: 0 auto;
	overflow: hidden;

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

const ImageThumb = styled.div`
	position: relative;

	width: 100%;
	height: 300px;

	border-bottom: 1px solid #d9d9d9;
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

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;
	padding: 20px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 20px;

	background-color: #242424;
	opacity: 0;
	visibility: hidden;
	pointer-events: none;
	transition-duration: 300ms;
	transform: scale(0.99);

	${ImageThumb}:hover & {
		opacity: 0.98;
		visibility: visible;
		pointer-events: all;
		transform: scale(1);
	}
`;

const OverlayText = styled.p``;

export {
	Card,
	Image,
	ImageThumb,
	Info,
	ProjectTitle,
	TechnologiesList,
	TechnologiesItem,
	LinksWrapper,
	Overlay,
	OverlayText,
};
