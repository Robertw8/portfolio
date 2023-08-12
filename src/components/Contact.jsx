import React from "react";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
	return (
		<section className='section contact'>
			<div className='container contact-container'>
				<h2 className='section-title contact-title'>Contact</h2>
				<p className='contact-text'>
					I would love to see any your project and how I could help or any other suggestions. Please fill in the form,
					and I’ll get back to you as soon as possible.
				</p>
				<ContactForm />
				<span className='contact-rings'>
					<svg xmlns='http://www.w3.org/2000/svg' width='530' height='129'>
						<g fill='none' fillRule='evenodd' stroke='#FFF' opacity='.25'>
							<ellipse cx='265' cy='40' rx='264.5' ry='39.5' />
							<ellipse cx='265' cy='52' rx='264.5' ry='39.5' />
							<ellipse cx='265' cy='65' rx='264.5' ry='39.5' />
							<ellipse cx='265' cy='77' rx='264.5' ry='39.5' />
							<ellipse cx='265' cy='89' rx='264.5' ry='39.5' />
						</g>
					</svg>
				</span>
			</div>
		</section>
	);
};
