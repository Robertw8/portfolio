import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { successMessage } from "./SuccessMessage";

import { Form, Input, TextArea, SubmitButton } from "./ContactForm.styled";

export const ContactForm = () => {
	const [state, handleSubmit] = useForm("xbjvgkzd");
	if (state.succeeded) {
		successMessage();
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Input id='email' type='email' name='email' placeholder='Email' />
			<ValidationError prefix='Email' field='email' errors={state.errors} className='error' />
			<TextArea id='message' name='message' placeholder='Message' />
			<ValidationError prefix='Message' field='message' errors={state.errors} />
			<SubmitButton type='submit' disabled={state.submitting} className='link-primary'>
				Send message
			</SubmitButton>
		</Form>
	);
};
