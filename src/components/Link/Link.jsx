import React from "react";
import { PrimaryLink } from "./Link.styled";

export const Link = ({ text, href, target }) => {
	return (
		<PrimaryLink href={href} rel='noreferrer noopener nofollow' target={target}>
			{text}
		</PrimaryLink>
	);
};
