import React from "react";
import { PrimaryLink } from "./Link.styled";

export const Link = ({ className, text, href }) => {
	return <PrimaryLink href={href}>{text}</PrimaryLink>;
};
