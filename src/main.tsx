import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CartContextProvider } from "./context/cart/Provider";
import { ProductContextProvider } from "./context/product/Provider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ProductContextProvider>
		<CartContextProvider>
			<Router>
				<App />
			</Router>
		</CartContextProvider>
	</ProductContextProvider>
);
