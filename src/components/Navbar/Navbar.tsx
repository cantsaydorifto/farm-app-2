import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logoAndHeading}>
				<img
					className={styles.logo}
					src="https://cantsaydorifto.github.io/farm-app/static/media/vegetables.9c32fd32a85313497d4b.png"
					alt="Main Logo for the farmers market"
				/>
				<h1 className={styles.heading}>Farmer's Market</h1>
			</div>
		</nav>
	);
}
