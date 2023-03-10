import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import { ProductContextProvider } from "./context/product/Provider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ProductContextProvider>
		<Router>
			<App />
		</Router>
	</ProductContextProvider>
);
