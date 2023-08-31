import React from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { Rings } from "../Rings/Rings";

import { ContactSection, Container, Title, ContactText } from "./Contact.styled";

export const Contact = () => {
	return (
		<ContactSection id='contact'>
			<Container>
				<div>
					<Title>Contact</Title>
					<ContactText>
						I would love to see any your project and how I could help or any other suggestions. Please fill in the form,
						and I’ll get back to you as soon as possible.
					</ContactText>
				</div>
				<ContactForm />
				<Rings posTop='200px' posRight='' posBottom='' posLeft='-300px' />
			</Container>
		</ContactSection>
	);
};
