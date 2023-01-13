import React from "react";
import styles from "./Dropdown.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type props = {
	changeCartState: () => void;
};

const DropdownElements = ({ changeCartState }: props) => {
	return (
		<>
			<div
				onMouseEnter={changeCartState}
				onMouseLeave={changeCartState}
				className={styles.invisibleDiv}
			></div>
			<motion.div
				initial={{ y: "-50%", opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", duration: 0.35 }}
				onMouseEnter={changeCartState}
				onMouseLeave={changeCartState}
				className={styles.dropdown}
			>
				<Link className={styles.goToCart} to="cart">
					Go to Cart
				</Link>
				<div className={styles.wishList}>Wish List</div>
			</motion.div>
		</>
	);
};

export default DropdownElements;
