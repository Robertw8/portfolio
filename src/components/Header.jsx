import React, { useState, useEffect } from "react";
import { NavBar } from "./NavBar";

export const Header = () => {
	const [isScrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<header className={`header ${isScrolled ? "bg-darkgrey" : ""}`}>
			<div className='container header-container'>
				<div className='header-column'>
					<h2 className='header-title'>
						<a href='#hero'>robertw8</a>
					</h2>
					<NavBar />
				</div>
				<div>
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
									<use xlinkHref='images/sprite.svg#icon-github'></use>
								</svg>
							</a>
						</li>
						<li className='socials-item'>
							<a
								className='socials-link'
								href='https://www.linkedin.com/in/arsenii-brovchuk/'
								target='_blank'
								rel='noreferrer nofollow noopener'
								aria-label='Open linkedin'
							>
								<svg className='socials-icon' width='25' height='24'>
									<use xlinkHref='images/sprite.svg#icon-linkedin'></use>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};
