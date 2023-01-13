import React from "react";
import styles from "./Sidebar.module.css";
import { motion } from "framer-motion";
import SidebarContent from "../SidebarContent/SidebarContent";
import { useNavigate } from "react-router-dom";

type props = {
	sidebarHandler(): void;
};

export default function Sidebar({ sidebarHandler }: props) {
	const navigate = useNavigate();
	const logoClickHandler = () => {
		navigate("/");
		sidebarHandler();
	};
	return (
		<>
			<motion.div
				className={styles.sidebar}
				initial={{ x: "-100%" }}
				animate={{ x: 0 }}
				exit={{ x: "-100%" }}
				transition={{ type: "tween", duration: 0.15 }}
			>
				<div className={styles.sidebarNav}>
					<img
						onClick={sidebarHandler}
						className={styles.sidebarIcon}
						src="https://cdn-icons-png.flaticon.com/512/5107/5107718.png"
						alt="Sidebar Icon"
					/>
					<div
						className={styles.homepageLogo}
						onClick={logoClickHandler}
					>
						<img
							className={styles.logo}
							src="https://cantsaydorifto.github.io/farm-app/static/media/vegetables.9c32fd32a85313497d4b.png"
							alt="Main Logo for the farmers market"
						/>
						<h1 className={styles.heading}>Farmer's Market</h1>
					</div>
				</div>
				<SidebarContent sidebarHandler={sidebarHandler} />
			</motion.div>
		</>
	);
}
