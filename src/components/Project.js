import React from "react";

const Projects = (props) => (
	<div className="container projects__container">
		<h2 className="projects__header">Projects I've Created using React:</h2>
		<div className="project__card-container">
			<div
				className={
					props.darkMode
						? "project__card card-Dark"
						: "project__card card-Light"
				}
			>
				<img
					src="/images/Indecision.png"
					alt=""
					className="projects__image"
				/>
				<div className="project__hover-container">
					<h3 className="project__name">Indecision App</h3>
					<p className="project__description">
						A Chooser App created using state management
					</p>
					<a
						href="https://kearledc.github.io/indecisionfood"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button
							className={
								props.darkMode
									? "project__hover-button button-Dark"
									: "project__hover-button button-Light"
							}
						>
							Check it out!
						</button>
					</a>
				</div>
			</div>

			<div
				className={
					props.darkMode
						? "project__card card-Dark"
						: "project__card card-Light"
				}
			>
				<img
					src="/images/expensifyapp.png"
					alt=""
					className="projects__image expensify"
				/>
				<div className="project__hover-container">
					<h3 className="project__name">Expensify App</h3>
					<p className="project__description">
						An App Created using MongoDB, ExpressJS, ReactJS, NodeJS
						and GraphQL.
					</p>
					<a
						href="https://kearledcexpensify.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button
							className={
								props.darkMode
									? "project__hover-button button-Dark"
									: "project__hover-button button-Light"
							}
						>
							Check it out!
						</button>
					</a>
				</div>
			</div>
			<div
				className={
					props.darkMode
						? "project__card card-Dark"
						: "project__card card-Light"
				}
			>
				<img
					src="/images/memorygame.png"
					alt=""
					className="projects__image memory"
				/>
				<div className="project__hover-container">
					<h3 className="project__name">Memory Game</h3>
					<p className="project__description">
						My very first Application. It's a memory match game
						using dota hero images
					</p>
					<a
						href="https://kearledc.github.io/jquerygame/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button
							className={
								props.darkMode
									? "project__hover-button button-Dark"
									: "project__hover-button button-Light"
							}
						>
							Check it out!
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>
);
export default Projects;
