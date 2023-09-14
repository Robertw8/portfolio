import images from "../../assets/images/projects/images.jpg";
import spot from "../../assets/images/projects/spot.jpg";
import treats from "../../assets/images/projects/treats.jpg";
import webStudio from "../../assets/images/projects/web-studio.jpg";

const projects = [
	{
		title: "Tasty Treats",
		imageSrc: treats,
		technologies: ["HTML", "SCSS", "JavaScript", "REST API"],
		projectLink: "https://robertw8.github.io/project-recipes/",
		codeLink: "https://github.com/Robertw8/project-recipes",
		info: {
			role: "Team Project (Team Lead)",
			tasks:
				"Filters in catalog, much work with API, various fixes and features throughout the whole project in the process of assisting the teammates",
		},
	},
	{
		title: "The Watch Spot",
		imageSrc: spot,
		technologies: ["HTML/CSS", "JavaScript"],
		projectLink: "https://gladja.github.io/team-project/",
		codeLink: "https://github.com/Robertw8/the-watch-spot",
		info: {
			role: "Team project (Developer)",
			tasks: "Functionality of catalog, catalog modal window, mobile menu, theme toggle, on-scroll animations",
		},
	},
	{
		title: "Images Search",
		imageSrc: images,
		technologies: ["HTML/CSS", "JavaScript", "REST API"],
		projectLink: "https://robertw8.github.io/goit-js-hw-11/",
		codeLink: "https://github.com/Robertw8/goit-js-hw-11",
		info: {
			role: "Individual project",
			tasks: "Working with API, pagination",
		},
	},
	{
		title: "WebStudio Landing page",
		imageSrc: webStudio,
		technologies: ["HTML/CSS", "JavaScript"],
		projectLink: "https://robertw8.github.io/web-studio/",
		codeLink: "https://github.com/Robertw8/web-studio",
		info: {
			role: "Individual project",
			tasks: "Responsive layout, modal window, mobile menu",
		},
	},
];

export { projects };
