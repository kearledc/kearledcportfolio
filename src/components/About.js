import React from "react";

const About = (props) => {
	return (
		<div className="container about__container">
			<div
				className={
					props.darkMode
						? "container__about-text about-dark"
						: "container__about-text about-light"
				}
			>
				<h2 className="about__header">Something About Me:</h2>
				<ul className="about__description-list">
					<li className="about-bullets">
						I Graduated BS ECE at FEU Institute of Technology
					</li>
					<li className="about-bullets">
						Certified Full Stack Developer by Zuitt
					</li>
					<li className="about-bullets">
						I Worked as a Front End Developer for MPOTECH with job
						responsibilities of creating websites from scratch using
						HTML/CSS/JS
					</li>
				</ul>
			</div>
			<div
				className={
					props.darkMode
						? "about__frontend about-dark"
						: "about__frontend about-light"
				}
			>
				<h2 className="frontEnd-header">Front End Tools</h2>
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>Javascript / JQuery</li>
					<li>ReactJS</li>
					<li>Redux</li>
					<li>NodeJS</li>
					<li>PHP</li>
					<li>Laravel</li>
				</ul>
			</div>
			<div
				className={
					props.darkMode
						? "about__backend about-dark"
						: "about__backend about-light"
				}
			>
				<h2 className="backEnd-header">Back End Tools</h2>
				<ul>
					<li>MongoDB</li>
					<li>MySQL</li>
					<li>GraphQL</li>
					<li>Firebase</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
