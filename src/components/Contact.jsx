import React from "react";
import { ContactForm } from "./ContactForm";
import rings from "../assets/images/pattern-rings.svg";

export const Contact = () => {
	return (
		<section className='section contact' id='contact'>
			<div className='container contact-container'>
				<div className='contact-column'>
					<h2 className='section-title contact-title'>Contact</h2>
					<p className='contact-text'>
						I would love to see any your project and how I could help or any other suggestions. Please fill in the form,
						and I’ll get back to you as soon as possible.
					</p>
				</div>
				<ContactForm />
				<span className='contact-rings'>
					<svg>
						<use href={rings}></use>
					</svg>
				</span>
			</div>
		</section>
	);
};
