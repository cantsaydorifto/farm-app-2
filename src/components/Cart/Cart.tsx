import React, { useState } from "react";
import styles from "./Cart.module.css";
// import DropdownElements from "../Dropdown/Dropdown";
import { useCartContext } from "../../hooks/useCartContext";

const Cart = () => {
	const { state: cartData } = useCartContext();

	const [cartState, setCartState] = useState(false);
	return (
		<>
			<div
				className={styles.cart}
				onMouseEnter={() => setCartState((prev) => !prev)}
				onMouseLeave={() => setCartState((prev) => !prev)}
			>
				<img className={styles.logo} src={'https://cdn-icons-png.flaticon.com/512/3144/3144456.png'} alt="Shopping Cart" />
			</div>
			<div className={styles.count}>{cartData.length}</div>
			{/* <DropdownElements cartState={cartState} setCartState={setCartState} /> */}
		</>
	);
};

export default Cart;
