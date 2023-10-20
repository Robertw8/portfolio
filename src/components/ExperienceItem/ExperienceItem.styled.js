import styled from "styled-components";

const Card = styled.li`
	background-color: #242424;
	width: 300px;
	box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.5);
	border-radius: 10px;
	margin: 0 auto;
	overflow: hidden;
	padding: 10px;
	display: flex;
	flex-direction: column;

	&:not(:first-of-type) {
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

const ItemPeriod = styled.p`
	opacity: 0.9;
	color: #d9d9d9;
`;

const ItemName = styled.p`
	margin-top: 10px;

	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 2px;
		background-color: #d9d9d9;
		opacity: 0.8;
		margin-top: 10px;
	}
`;

const ItemTitle = styled.p`
	font-size: 20px;
	color: #4ee1a0;
`;

const ItemText = styled.p`
	margin-top: 20px;
	color: #d9d9d9;
`;

const Responsibilities = styled.ul`
	margin-top: 10px;
	color: #d9d9d9;
`;

const ResponsibilitiesItem = styled.li`
	&:not(:first-of-type) {
		margin-top: 10px;
	}
	font-size: 14px;
`;

export { Card, ItemPeriod, ItemName, ItemTitle, ItemText, Responsibilities, ResponsibilitiesItem };
