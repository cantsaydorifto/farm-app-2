import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Navbar.module.css";

export default function Navbar() {
	const [sidebar, setsidebar] = useState<boolean>(false);
	const sidebarHandler = (): void => {
		setsidebar((prev) => !prev);
	};
	const navigate = useNavigate();
	return (
		<>
			<AnimatePresence>
				{sidebar && (
					<>
						<Sidebar sidebarHandler={sidebarHandler} />
						<motion.div
							className={styles.overlay}
							onClick={sidebarHandler}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.1 }}
							exit={{ opacity: 0 }}
						></motion.div>
					</>
				)}
			</AnimatePresence>
			<nav className={styles.navbar}>
				<div className={styles.logoAndHeading}>
					<img
						onClick={sidebarHandler}
						className={styles.sidebarIcon}
						src="https://cdn-icons-png.flaticon.com/512/5107/5107718.png"
						alt="Sidebar Icon"
					/>
					<div className={styles.homepageLogo} onClick={()=>navigate('/')}>
						<img
							className={styles.logo}
							src="https://cantsaydorifto.github.io/farm-app/static/media/vegetables.9c32fd32a85313497d4b.png"
							alt="Main Logo for the farmers market"
						/>
						<h1 className={styles.heading}>Farmer's Market</h1>
					</div>
				</div>
				<Cart />
			</nav>
		</>
	);
}
