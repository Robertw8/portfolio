import styled from "styled-components";
import { variables } from "../../styles/variables";

const ContactSection = styled.section`
	position: relative;
	background-color: #242424;
`;

const Container = styled.div`
	@media screen and (min-width: 980px) {
		display: flex;
	}
`;

const Title = styled.h2`
	text-align: center;

	@media screen and (min-width: 980px) {
		text-align: left;
	}
`;

const ContactText = styled.p`
	font-family: "Space Grotesk", sans-serif;
	font-weight: normal;
	font-size: 18px;
	line-height: calc(28 / 18);
	color: #d9d9d9;
	margin-top: 20px;
`;

export { ContactSection, Container, Title, ContactText };
