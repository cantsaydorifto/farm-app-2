import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CountDiv from "../../components/CountDiv/CountDv.js";
import { useProductContext } from "../../hooks/useProductContext.js";
import { productCategory } from "../../product-data.js";
import styles from "./ProductCategory.module.css";

const ProductDetails = () => {
	const category = new Set([
		"fruits",
		"dairy",
		"meat",
		"gifts",
		"vegetables",
	]);
	const { categoryParam } = useParams() as {
		categoryParam: string;
	};
	if (!category.has(categoryParam)) {
		return <h1>category does not exist</h1>;
	}
	const productName: productCategory = categoryParam as productCategory;
	const headName = productName[0].toUpperCase() + productName.slice(1);
	const {
		state: { productData, cartData },
		dispatch,
	} = useProductContext();

	const [turtleSrc, setTurtleSrc] = useState(
		"https://preview.redd.it/9wy3z3wwx0181.png?width=438&format=png&auto=webp&s=b792fbbf87f07799697eee540cead9fde400f9fb"
	);
	const [tunaSrc, setTunaSrc] = useState(
		"https://pbs.twimg.com/media/BsnZMB7IEAEiCV3?format=jpg&name=small"
	);

	const addItemhandler = (id: string, name: keyof typeof productData) => {
		dispatch({
			type: "INCREMENT_PRODUCT_COUNT",
			payload: { name, id },
		});
	};

	const removeItemhandler = (id: string, name: keyof typeof productData) => {
		dispatch({
			type: "DECREMENT_PRODUCT_COUNT",
			payload: { name, id },
		});
	};
	return (
		<motion.div
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 50 }}
			transition={{ type: "tween", duration: 0.3 }}
		>
			<h1 className={styles.heading}>{headName}</h1>
			<div className={styles.container}>
				{productData[productName].map((el) => {
					return (
						<div key={el.key} className={styles.card}>
							{el.name === "Turtles" ? (
								<img
									onMouseEnter={() =>
										setTurtleSrc(
											"https://c.tenor.com/CdhTfPl6IbMAAAAC/the-office-michael-scott.gif"
										)
									}
									onMouseLeave={() =>
										setTurtleSrc(
											"https://preview.redd.it/9wy3z3wwx0181.png?width=438&format=png&auto=webp&s=b792fbbf87f07799697eee540cead9fde400f9fb"
										)
									}
									src={turtleSrc}
									alt={"Turtles"}
								/>
							) : el.name === "Big Tuna" ? (
								<img
									onMouseEnter={() =>
										setTunaSrc(
											"https://c.tenor.com/oYx4kIdnxlEAAAAC/andy-bernard-fishing.gif"
										)
									}
									onMouseLeave={() =>
										setTunaSrc(
											"https://pbs.twimg.com/media/BsnZMB7IEAEiCV3?format=jpg&name=small"
										)
									}
									src={tunaSrc}
									alt={"Turtles"}
								/>
							) : (
								<img src={el.link} alt={`${el.name}`} />
							)}
							<h2 className={styles.name}>{el.name}</h2>
							<h3 className={styles.price}>${el.price}</h3>
							{el.count ? (
								<CountDiv
									count={el.count}
									addItemhandler={() =>
										addItemhandler(el.key, el.category)
									}
									removeItemhandler={() =>
										removeItemhandler(el.key, el.category)
									}
								/>
							) : (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.2 }}
									onClick={() =>
										addItemhandler(el.key, el.category)
									}
									className={styles.addToCart}
								>
									Add To Cart
								</motion.div>
							)}
						</div>
					);
				})}
			</div>
		</motion.div>
	);
};

export default ProductDetails;
