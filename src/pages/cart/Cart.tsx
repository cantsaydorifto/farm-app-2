import React from "react";
import styles from "./Cart.module.css";
import { useProductContext } from "../../hooks/useProductContext.js";
import { productCategory } from "../../product-data.js";
import { AnimatePresence, motion } from "framer-motion";

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
		<motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<motion.div layout>
				<h2 className={styles.itemHeading}>Cart Items</h2>
				<h3 className={styles.count}>
					Number of Items : {cartData.length}
				</h3>
			</motion.div>
			<motion.div layout className={styles.container}>
				<AnimatePresence>
					{cartData.map((el, i) => {
						return (
							<motion.div
								layout
								initial={{ x: -200 }}
								animate={{ x: 0 }}
								exit={{ opacity: 0 }}
								transition={{opacity:{duration:0.1},x:{duration:(i+1)*0.15}}}
								key={el.key}
								className={styles.itemCard}
							>
								<div className={styles.imgAndName}>
									<img
										className={styles.itemImg}
										src={el.link}
										alt={`${el.name}`}
									/>
									<div className={styles.unitPrice}>
										<p>{el.name}</p>
										<p>${el.price}</p>
									</div>
								</div>
								<div className={styles.priceAndCount}>
									<button
										onClick={() =>
											removeHandler(el.key, el.category)
										}
										className={styles.removeItemButton}
									>
										Remove Item
									</button>
									<div className={styles.name}>
										<motion.p initial={{x:-1}} animate={{x:0}} key={el.count}>${el.price * el.count}</motion.p>
										<div className={styles.addRemove}>
											<button
												className={`${styles.removeItemButton} ${styles.changeCountButton}`}
												onClick={() =>
													decHandler(
														el.key,
														el.category
													)
												}
											>
												-
											</button>
											<motion.div initial={{y:-1}} animate={{y:0}} key={el.count} className={styles.itemCount}>
												{el.count}
											</motion.div>
											<button
												className={`${styles.removeItemButton} ${styles.changeCountButton}`}
												onClick={() =>
													plusHandler(
														el.key,
														el.category
													)
												}
											>
												+
											</button>
										</div>
									</div>
								</div>
							</motion.div>
						);
					})}
				</AnimatePresence>
			</motion.div>
			<motion.div layout>
				<hr className={styles.checkoutLine} />
				<div className={styles.checkoutDiv}>
					<div>Total Price :</div>
					<motion.div key={cnt} initial={{opacity:0}} animate={{opacity:1}} className={styles.checkoutPrice}>${cnt}</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
}
