import React from "react";
import { Link } from "../Link/Link";
import { NavList } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <nav>
      <NavList>
        <li>
          <Link href="#experience" text="Experience" target="_self" />
        </li>
        <li>
          <Link href="#skills" text="Skills" target="_self" />
        </li>
        <li>
          <Link href="#projects" text="Projects" target="_self" />
        </li>
        <li>
          <Link href="#contact" text="Contact" target="_self" />
        </li>
        <li>
          <Link
            href="https://arsenii-brovchuk-cv.tiiny.site"
            text="CV"
            target="_blank"
            rel="noreferrer nofollow noopener"
          />
        </li>
      </NavList>
    </nav>
  );
};
