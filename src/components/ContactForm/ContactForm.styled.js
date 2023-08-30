import styled from "styled-components";

const Form = styled.form`
	width: 100%;
	margin-top: 50px;
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 980px) {
		margin-left: 50px;
	}
`;

const Input = styled.input`
	width: 100%;
	border: none;
	border-bottom: 1px solid #ffffff;
	background-color: transparent;
	padding: 15px;
	outline: none;
	color: #ffffff;
	text-transform: uppercase;
	transition-duration: 300ms;

	font-family: "Space Grotesk", sans-serif;
	font-weight: normal;
	font-size: 18px;
	line-height: calc(28 / 18);
	color: #d9d9d9;

	&:focus {
		border-color: #4ee1a0;
	}
`;

const TextArea = styled.textarea`
	width: 100%;
	border: none;
	border-bottom: 1px solid #ffffff;
	background-color: transparent;
	padding: 15px;
	outline: none;
	color: #ffffff;
	text-transform: uppercase;
	transition-duration: 300ms;

	font-family: "Space Grotesk", sans-serif;
	font-weight: normal;
	font-size: 18px;
	line-height: calc(28 / 18);
	color: #d9d9d9;

	&:focus {
		border-color: #4ee1a0;
	}

	margin-top: 30px;
	resize: none;
`;

const SubmitButton = styled.button`
	align-self: flex-end;
	margin-top: 30px;
`;

const ValidationError = styled.span`
	font-family: "Space Grotesk", sans-serif;
	font-weight: normal;
	font-size: 14px;
	line-height: calc(28 / 18);
	color: #ff6f5b;

	margin-top: 10px;
`;

export { Form, Input, TextArea, SubmitButton, ValidationError };
