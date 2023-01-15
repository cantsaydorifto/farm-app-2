import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styles from "./CountDiv.module.css";

type props = {
	count: number;
	addItemhandler: () => void;
	removeItemhandler: () => void;
};

const CountDiv = ({ count, addItemhandler, removeItemhandler }: props) => {
	return (
		<motion.div
			className={styles.count}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.2 }}
		>
			<div onClick={removeItemhandler} className={styles.removeItem}>
				-
			</div>
			<motion.div
				className="number"
				initial={{x:-1}}
				animate={{ x:0 }}
				key={count}
			>
				{count}
			</motion.div>
			<div onClick={addItemhandler} className={styles.addItem}>
				+
			</div>
		</motion.div>
	);
};

export default CountDiv;
