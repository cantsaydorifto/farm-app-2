import React, { useState } from "react";
import { useProductContext } from "../../hooks/useProductContext";
import styles from "./Cart.module.css";
// import DropdownElements from "../Dropdown/Dropdown";

const Cart = () => {
	const {
		state: { cartData },
	} = useProductContext();

	const [cartState, setCartState] = useState(false);
	return (
		<>
			<div
				className={styles.cart}
				onMouseEnter={() => setCartState((prev) => !prev)}
				onMouseLeave={() => setCartState((prev) => !prev)}
			>
				<img
					className={styles.logo}
					src={
						"https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
					}
					alt="Shopping Cart"
				/>
			</div>
			<div className={styles.count}>{cartData.length}</div>
			{/* <DropdownElements cartState={cartState} setCartState={setCartState} /> */}
		</>
	);
};

export default Cart;
