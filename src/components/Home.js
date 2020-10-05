import React from "react";
import Typewriter from "typewriter-effect";

const Home = (props) => {
	return (
		<div className="container header__container">
			<h1 className="header__typewriter">
				<Typewriter
					options={{
						strings: ["Kevin Earle Cruz", "Web Developer"],
						autoStart: true,
						loop: true,
					}}
				/>
			</h1>
			<hr
				className={
					props.darkMode
						? "header__line header__line-dark"
						: "header__line header__line-light"
				}
			/>
			<div className="socialapps-container">
				<a
					href="https://facebook.com/kearledc"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i
						className={
							props.darkMode
								? "fab fa-facebook-square darkFB"
								: "fab fa-facebook-square lightFB"
						}
					></i>
				</a>
				<a
					href="https://github.com/kearledc"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i
						className={
							props.darkMode
								? "fab fa-github-square darkGithub"
								: "fab fa-github-square"
						}
					></i>
				</a>
				<a
					href="https://linkedin.com/in/kearledc"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i
						className={
							props.darkMode
								? "fab fa-linkedin darkLinkedIn"
								: "fab fa-linkedin lightLinkedIn"
						}
					></i>
				</a>
			</div>
		</div>
	);
};

export default Home;
