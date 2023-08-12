import React from "react";
import { Link } from "./Link";

export const Projects = () => {
	return (
		<section className='section projects'>
			<div className='container projects-container'>
				<h2 className='section-title projects-title'>Projects</h2>
				<ul className='projects-list'>
					<li className='projects-item'>
						<div className='image-thumb'>
							<img
								src='src/assets/images/projects/spot.jpg'
								alt='The Watch Spot preview'
								className='project-image'
								width='350'
								height='250'
								loading='lazy'
							/>
						</div>
						<div className='project-info'>
							<h3 className='project-title'>Team Project: "The Watch Spot" Landing page</h3>
							<ul className='technologies-list'>
								<li className='technologies-item'>HTML/CSS</li>
								<li className='technologies-item'>JavaScript</li>
							</ul>
							<div className='project-links-wrapper'>
								<Link className='project-link' text='View Project' href='https://gladja.github.io/team-project/' />
								<Link className='project-link' text='View Code' href='https://github.com/Robertw8/the-watch-spot' />
							</div>
						</div>
					</li>
					<li className='projects-item'>
						<div className='image-thumb'>
							<img
								src='src/assets/images/projects/images.jpg'
								alt='Images Search preview'
								loading='lazy'
								width='350'
								height='250'
								className='project-image'
							/>
						</div>
						<div className='project-info'>
							<h3 className='project-title'>Images Search using Pixabay API</h3>
							<ul className='technologies-list'>
								<li className='technologies-item'>HTML/CSS</li>
								<li className='technologies-item'>JavaScript</li>
								<li className='technologies-item'>REST API</li>
							</ul>
							<div className='project-links-wrapper'>
								<Link className='project-link' text='View Project' href='https://robertw8.github.io/goit-js-hw-11/' />
								<Link className='project-link' text='View Code' href='https://github.com/Robertw8/goit-js-hw-11' />
							</div>
						</div>
					</li>
					<li className='projects-item'>
						<div className='image-thumb'>
							<img
								src='src/assets/images/projects/web-studio.jpg'
								alt='Web-Studio preview'
								loading='lazy'
								width='350'
								height='250'
								className='project-image'
							/>
						</div>
						<div className='project-info'>
							<h3 className='project-title'>The First Project: WebStudio Landing page</h3>
							<ul className='technologies-list'>
								<li className='technologies-item'>HTML/CSS</li>
								<li className='technologies-item'>JavaScript</li>
							</ul>
							<div className='project-links-wrapper'>
								<Link className='project-link' text='View Project' href='https://robertw8.github.io/web-studio/' />
								<Link className='project-link' text='View Code' href='https://github.com/Robertw8/web-studio' />
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};
