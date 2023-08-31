import React from "react";
import rings from "../../assets/images/pattern-rings.svg";
import { RingsSpan } from "./Rings.styled";

export const Rings = ({ posTop, posRight, posBottom, posLeft }) => {
	return (
		<RingsSpan style={{ top: `${posTop}`, right: `${posRight}`, bottom: `${posBottom}`, left: `${posLeft}` }}>
			<svg xmlns='http://www.w3.org/2000/svg' width='530' height='129'>
				<g fill='none' fillRule='evenodd' stroke='#FFF' opacity='.25'>
					<ellipse cx='265' cy='40' rx='264.5' ry='39.5' />
					<ellipse cx='265' cy='52' rx='264.5' ry='39.5' />
					<ellipse cx='265' cy='65' rx='264.5' ry='39.5' />
					<ellipse cx='265' cy='77' rx='264.5' ry='39.5' />
					<ellipse cx='265' cy='89' rx='264.5' ry='39.5' />
				</g>
			</svg>
		</RingsSpan>
	);
};