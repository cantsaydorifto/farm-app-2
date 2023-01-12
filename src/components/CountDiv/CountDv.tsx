import React from "react";
import styles from "./CountDiv.module.css";

type props = {
	count: number;
	addItemhandler: () => void;
	removeItemhandler: () => void;
};

const CountDiv = ({ count, addItemhandler, removeItemhandler }:props) => {
	return (
		<div className={styles.count}>
			<div onClick={removeItemhandler} className={styles.removeItem}>
				-
			</div>
			<div className="number">{count}</div>
			<div onClick={addItemhandler} className={styles.addItem}>
				+
			</div>
		</div>
	);
};

export default CountDiv;
