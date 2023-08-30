import React from "react";
import { Link } from "../Link/Link";
import { NavList } from "./NavBar.styled";

export const NavBar = () => {
	return (
		<nav className='nav-bar'>
			<NavList className='nav-list'>
				<li className='nav-item'>
					<Link href='#skills' className='nav-link' text='Skills' />
				</li>
				<li className='nav-item'>
					<Link href='#projects' className='nav-link' text='Projects' />
				</li>
				<li className='nav-item'>
					<Link href='#contact' className='nav-link' text='Contact' />
				</li>
			</NavList>
		</nav>
	);
};
