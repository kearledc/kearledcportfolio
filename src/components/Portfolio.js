import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Particles from "react-particles-js";
import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Project from "./Project";

const Portfolio = () => {
	const darkModeData = JSON.parse(localStorage.getItem("darkmode"));
	const [darkMode, setDarkMode] = useState(darkModeData || false);

	const toggleSwitch = () => {
		setDarkMode((prevState) => !prevState);
	};

	useEffect(() => {
		const json = JSON.stringify(darkMode);
		localStorage.setItem("darkmode", json);
	}, [darkMode]);
	return (
		<div>
			<div className={darkMode ? "darkMode" : "lightMode"}>
				<Navbar darkMode={darkMode} toggleSwitch={toggleSwitch} />
				<div className="content--container">
					<Switch>
						<Route
							exact
							path="/"
							component={(props) => <Home darkMode={darkMode} />}
						/>
						<Route
							path="/projects"
							component={(props) => (
								<Project darkMode={darkMode} />
							)}
						/>
						<Route
							path="/about"
							component={(props) => <About darkMode={darkMode} />}
						/>
						<Route component={NotFound} />
					</Switch>
				</div>
				<Footer darkMode={darkMode} />
			</div>
			<Particles
				style={{
					position: "absolute",
					"z-index": "0",
					top: "0",
					left: "0",
				}}
				params={{
					particles: {
						number: {
							value: 160,
							density: {
								enable: false,
							},
						},
						line_linked: {
							enable: false,
						},
						move: {
							random: true,
							speed: 2,
							out_mode: "out",
						},
						size: {
							anim: {
								size_min: 0.5,
								speed: 6,
							},
							random: true,
							value: 6,
						},
						shape: {
							type: ["star", "circle"],
						},
						color: {
							value: ["#1f2833", "#ffd500"],
						},
					},
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: "bubble",
							},
						},
						modes: {
							bubble: {
								distance: 200,
								duration: 3,
								opacity: 1,
								size: 10,
							},
							repulse: {
								distance: 300,
								duration: 2,
							},
						},
					},
				}}
			/>
		</div>
	);
};

export default Portfolio;
