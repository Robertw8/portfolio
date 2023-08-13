import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export const Background = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {}, []);
	const options = {
		background: {
			color: {
				value: "#151515",
			},
		},
		fpsLimit: 120,
		interactivity: {
			detectsOn: "window",
			events: {
				resize: true,
			},
		},
		particles: {
			color: {
				value: "#ffffff",
			},
			links: {
				color: "random",
				distance: 150,
				enable: false,
				opacity: 0.5,
				width: 1,
			},
			move: {
				bounce: false,
				direction: "bottom",
				enable: true,
				outModes: {
					bottom: "out",
					left: "out",
					right: "out",
					top: "out",
				},
				random: true,
				speed: 2,
				straight: false,
			},
			number: {
				density: {
					enable: true,
					value_area: 800,
				},
				value: 100,
			},
			opacity: {
				value: 0.5,
			},
			shape: {
				type: "star",
			},
			size: {
				random: true,
				value: 3,
			},
		},
		detectRetina: true,
	};

	return <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={options} />;
};
