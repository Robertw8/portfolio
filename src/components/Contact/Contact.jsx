import React from "react";
import { ContactForm } from "../ContactForm";
import rings from "../../assets/images/pattern-rings.svg";

import { ContactSection, Container, Title, ContactText } from "./Contact.styled";

export const Contact = () => {
	return (
		<ContactSection className='section' id='contact'>
			<Container className='container'>
				<div className='contact-column'>
					<Title className='section-title'>Contact</Title>
					<ContactText>
						I would love to see any your project and how I could help or any other suggestions. Please fill in the form,
						and I’ll get back to you as soon as possible.
					</ContactText>
				</div>
				<ContactForm />
				<span className='contact-rings'>
					<svg>
						<use href={rings}></use>
					</svg>
				</span>
			</Container>
		</ContactSection>
	);
};
