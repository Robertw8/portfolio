import styled from "styled-components";

const FooterSection = styled.footer`
	background-color: #242424;
	position: relative;
	z-index: 100;

	&::before {
		content: "";
		display: block;
		width: 100%;
		height: 1px;

		background-color: #ffffff;
	}
`;

const FooterContainer = styled.div`
	padding-top: 40px;

	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
	}
`;

export { FooterSection, FooterContainer };
