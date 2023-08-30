import React from "react";
import { Link } from "./Link/Link";

export const NavBar = () => {
	return (
		<nav className='nav-bar'>
			<ul className='nav-list'>
				<li className='nav-item'>
					<Link href='#skills' className='nav-link' text='Skills' />
				</li>
				<li className='nav-item'>
					<Link href='#projects' className='nav-link' text='Projects' />
				</li>
				<li className='nav-item'>
					<Link href='#contact' className='nav-link' text='Contact' />
				</li>
			</ul>
		</nav>
	);
};
