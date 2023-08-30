import styled from "styled-components";

const TitlePrimary = styled.h2`
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

export { TitlePrimary };
