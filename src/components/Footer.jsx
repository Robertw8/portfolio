import React from "react";
import sprite from "../assets/images/sprite.svg";

export const Footer = () => {
	return (
		<footer className='section footer'>
			<div className='container footer-container'>
				<h2 className='header-title footer-title'>
					<a href='#hero'>robertw8</a>
				</h2>
				<ul className='socials-list'>
					<li className='socials-item'>
						<a
							className='socials-link'
							href='https://github.com/Robertw8'
							target='_blank'
							rel='noreferrer nofollow noopener'
							aria-label='Open github'
						>
							<svg className='socials-icon' width='25' height='24'>
								<use href={`${sprite}#icon-github`}></use>
							</svg>
						</a>
					</li>
					<li className='socials-item'>
						<a className='socials-link' href='https://www.linkedin.com/in/arsenii-brovchuk/' aria-label='Open linkedin'>
							<svg className='socials-icon' width='25' height='24'>
								<use href={`${sprite}#icon-linkedin`}></use>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};
