import React from "react";
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
				<div className={styles.linkElement} onClick={sidebarHandler}>
					{el}
				</div>
			))}
		</div>
	);
};

export default SidebarContent;
