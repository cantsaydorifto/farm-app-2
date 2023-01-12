import React from "react";
import styles from "./DropdownElements.module.css";
import { Link } from "react-router-dom";

const DropdownElements = ({ cartState, setCartState }) => {
	return (
		<>
			<div
				onMouseEnter={() => setCartState((prev) => !prev)}
				onMouseLeave={() => setCartState((prev) => !prev)}
				className={styles.invisibleDiv}
			></div>
			<div
				onMouseEnter={() => setCartState((prev) => !prev)}
				onMouseLeave={() => setCartState((prev) => !prev)}
				className={styles.dropdown}
			>
				<Link className={styles.goToCart} to="cart">
					Go to Cart
				</Link>
				<div className={styles.wishList}>Wish List</div>
			</div>
		</>
	);
};

export default DropdownElements;
