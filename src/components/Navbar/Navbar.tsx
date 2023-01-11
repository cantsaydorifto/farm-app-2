import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Navbar.module.css";

export default function Navbar() {
	const [sidebar, setsidebar] = useState<boolean>(false);
	const sidebarHandler = (): void => {
		setsidebar((prev) => !prev);
	};
	return (
		<>
			{sidebar && (
				<Sidebar sidebar={sidebar} sidebarHandler={sidebarHandler} />
			)}
			<nav className={styles.navbar}>
				<div className={styles.logoAndHeading}>
					<img
						onClick={sidebarHandler}
						className={styles.sidebarIcon}
						src="https://cdn-icons-png.flaticon.com/512/5107/5107718.png"
						alt="Sidebar Icon"
					/>
					<img
						className={styles.logo}
						src="https://cantsaydorifto.github.io/farm-app/static/media/vegetables.9c32fd32a85313497d4b.png"
						alt="Main Logo for the farmers market"
					/>
					<h1 className={styles.heading}>Farmer's Market</h1>
				</div>
			</nav>
		</>
	);
}