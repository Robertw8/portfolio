import styled from "styled-components";

const ProjectsSection = styled.section`
	position: relative;
	z-index: 1;
`;

const ProjectsContainer = styled.div`
	@media screen and (max-width: 340px) {
		padding-left: 5px;
		padding-right: 5px;
	}
`;

const Title = styled.h2`
	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		margin-top: 10px;

		background-color: $color-white;
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
