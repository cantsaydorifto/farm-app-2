import React from "react";
import { Link } from "react-router-dom";
import styles from "./SidebarContent.module.css";

interface SidebarContentProps {
	sidebarHandler(): void;
}

const SidebarContent = ({ sidebarHandler }: SidebarContentProps) => {
	const categories = ["Fruits", "Vegetables", "Dairy", "Meat", "Gifts"];
	return (
		<div className={styles.content}>
			<div className={styles.heading}>
				<h2>Our Top Products</h2>
			</div>
			{categories.map((el) => (
				<Link key={el} to={`/category/${el[0].toLowerCase() + el.slice(1)}`} className={styles.linkElement} onClick={sidebarHandler}>
					{el}
				</Link>
			))}
		</div>
	);
};

export default SidebarContent;
