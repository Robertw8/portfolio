import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";

export const ContactForm = () => {
	const [state, handleSubmit] = useForm("xbjvgkzd");
	if (state.succeeded) {
		Swal.fire({
			icon: "success",
			title: "Thank you!",
			text: "I will reply to your message as soon as I can",
			background: "#242424",
			color: "#FFFFFF",
			confirmButtonColor: "#4EE1A0",
			iconColor: "#4EE1A0",
			timer: 5000,
		});
	}

	return (
		<form onSubmit={handleSubmit} className='contact-form'>
			<input id='email' type='email' name='email' className='contact-input' placeholder='Email' />
			<ValidationError prefix='Email' field='email' errors={state.errors} className='error' />
			<textarea id='message' name='message' className='contact-input textarea' placeholder='Message' />
			<ValidationError prefix='Message' field='message' errors={state.errors} />
			<button type='submit' disabled={state.submitting} className='link-primary contact-btn'>
				Send message
			</button>
		</form>
	);
};
