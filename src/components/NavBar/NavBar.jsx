import React from "react";
import { Link } from "../Link/Link";
import { NavList } from "./NavBar.styled";

export const NavBar = () => {
	return (
		<nav>
			<NavList>
				<li>
					<Link href='#skills' text='Skills' />
				</li>
				<li>
					<Link href='#projects' text='Projects' />
				</li>
				<li>
					<Link href='#contact' text='Contact' />
				</li>
			</NavList>
		</nav>
	);
};
