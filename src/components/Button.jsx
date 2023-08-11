import React from "react";

export const Button = ({ className, typeAttr, text }) => {
	return (
		<button className={`btn-primary ${className}`} type={typeAttr}>
			{text}
		</button>
	);
};
