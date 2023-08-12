import React from "react";

export const Link = ({ className, text, href }) => {
	return (
		<a href={href} className={`link-primary ${className}`}>
			{text}
		</a>
	);
};
