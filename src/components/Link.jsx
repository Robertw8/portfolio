import React from "react";

export const Link = ({ className, text }) => {
	return (
		<a className={`link-primary ${className}`} target='_blank' rel='noopener norefferer nofollow'>
			{text}
		</a>
	);
};
