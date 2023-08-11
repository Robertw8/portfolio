import React from "react";

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
							<h3 className='project-title'>"The Watch Spot" Landing page</h3>
							<ul className='technologies-list'>
								<li className='technologies-item'>HTML/CSS</li>
								<li className='technologies-item'>JavaScript</li>
							</ul>
							<div className='project-links-wrapper'>
								<a href='' className='link-primary  project-link'>
									View Project
								</a>
								<a href='' className='link-primary  project-link'>
									View Code
								</a>
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
							<h3 className='project-title'>Web-Studio Landing page</h3>
							<ul className='technologies-list'>
								<li className='technologies-item'>HTML/CSS</li>
								<li className='technologies-item'>JavaScript</li>
							</ul>
							<div className='project-links-wrapper'>
								<a href='' className='link-primary  project-link'></a>
								<a href='' className='link-primary  project-link'></a>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};
