import React from "react";
import styles from "./Cart.module.css";
import { useProductContext } from "../../hooks/useProductContext.js";
import { productCategory } from "../../product-data.js";

export default function Cart() {
	const {
		state: { cartData },
		dispatch,
	} = useProductContext();

	let cnt = 0;
	cartData.forEach((el, i) => {
		cnt += el.price * el.count;
	});

	const removeHandler = (id: string, name: productCategory) => {
		dispatch({
			type: "SET_COUNT_ZERO",
			payload: { id, name },
		});
	};

	const plusHandler = (id: string, name: productCategory) => {
		dispatch({
			type: "INCREMENT_PRODUCT_COUNT",
			payload: { id, name },
		});
	};
	const decHandler = (id: string, name: productCategory) => {
		dispatch({
			type: "DECREMENT_PRODUCT_COUNT",
			payload: { id, name },
		});
	};

	return (
		<>
			<h2 className={styles.itemHeading}>Cart Items</h2>
			<h3 className={styles.count}>
				Number of Items : {cartData.length}
			</h3>
			<div className={styles.container}>
				{cartData.map((el) => {
					return (
						<div key={el.key} className={styles.itemCard}>
							<img
								className={styles.itemImg}
								src={el.link}
								alt={`${el.name}`}
							/>
							<button
								className={`${styles.removeItemButton} ${styles.changeCountButton}`}
								onClick={() => decHandler(el.key, el.category)}
							>
								-
							</button>
							<div className={styles.itemCount}>{el.count}</div>
							<button
								className={`${styles.removeItemButton} ${styles.changeCountButton}`}
								onClick={() => plusHandler(el.key, el.category)}
							>
								+
							</button>
							<div className={styles.name}>
								<div className={styles.unitPrice}>
									<p>{el.name}</p>
									<p>${el.price}</p>
								</div>
								<p>${el.price * el.count}</p>
							</div>
							<button
								onClick={() =>
									removeHandler(el.key, el.category)
								}
								className={styles.removeItemButton}
							>
								Remove Item
							</button>
						</div>
					);
				})}
			</div>
			<hr className={styles.checkoutLine} />
			<div className={styles.checkoutDiv}>
				<div>Total Price :</div>
				<div className={styles.checkoutPrice}>${cnt}</div>
			</div>
		</>
	);
}
