import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import ToggleDark from "./ToggleDark";

const Navbar = (props) => {
	const pathname = window.location.pathname;
	const path = pathname === "/" ? "home" : pathname.substr(1);
	const [activeItem, setActive] = useState(path);
	const handleItemClick = (e, { name }) => setActive(name);

	return (
		<Menu
			pointing
			className={
				props.darkMode
					? "inverted navbar--container"
					: "navbar--container"
			}
		>
			<Menu.Item
				name="home"
				active={activeItem === "home"}
				onClick={handleItemClick}
				as={Link}
				to="/"
				className="Navbar--links"
			/>
			<Menu.Item
				name="Projects"
				active={activeItem === "Projects"}
				onClick={handleItemClick}
				as={Link}
				to="/projects"
				className="Navbar--links"
			/>
			<Menu.Item
				name="About"
				active={activeItem === "About"}
				onClick={handleItemClick}
				className="Navbar--links"
				as={Link}
				to="/about"
			/>
			<Menu.Menu position="right">
				<ToggleDark
					toggleSwitch={props.toggleSwitch}
					darkMode={props.darkMode}
				/>
			</Menu.Menu>
		</Menu>
	);
};
export default Navbar;
