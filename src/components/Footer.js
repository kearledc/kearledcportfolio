import React from "react";

export default ({ darkMode }) => (
	<div
		className={
			darkMode
				? "footer--container footer--container-dark"
				: "footer--container footer--container-light"
		}
	>
		<h2 className="footer--description">Kevin Earle Cruz || 2020</h2>
	</div>
);
