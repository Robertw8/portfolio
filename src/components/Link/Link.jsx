import React from "react";
import { PrimaryLink } from "./Link.styled";

export const Link = ({ text, href }) => {
	return <PrimaryLink href={href}>{text}</PrimaryLink>;
};
