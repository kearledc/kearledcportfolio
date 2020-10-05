import React from "react";

export default (props) => (
	<div className="toggleswitch__container">
		<label className="switch">
			<p>
				{props.darkMode ? (
					<i className="fas fa-moon dark"></i>
				) : (
					<i className="fas fa-sun"></i>
				)}
			</p>
			<input type="checkbox" onChange={props.toggleSwitch} />
			<span className="slider round"></span>
		</label>
	</div>
);
