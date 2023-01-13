import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../hooks/useProductContext";
import styles from "./Cart.module.css";
import DropdownElements from "../Dropdown/Dropdown";

const Cart = () => {
	const {
		state: { cartData },
	} = useProductContext();
	const navigate = useNavigate();

	const cartHandler = () => {
		navigate("/cart");
	};

	const [cartState, setCartState] = useState(false);
	const changeCartState = () => {
		setCartState((prev) => !prev);
	};

	return (
		<>
			<div
				className={styles.cart}
				onClick={cartHandler}
				onMouseEnter={changeCartState}
				onMouseLeave={changeCartState}
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
			{console.log(cartState)}
			{cartState&&<DropdownElements
				changeCartState={changeCartState}
			/>}
		</>
	);
};

export default Cart;
