import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/cart/Cart";
import Error from "./pages/error/Error";
import Homepage from "./pages/homepage/Homepage";
import ProductDetails from "./pages/productCategory/ProductCategory";

function App() {
	const location = useLocation();
	return (
		<>
			<Navbar />
			<AnimatePresence>
				<Routes key={location.pathname} location={location}>
					<Route path="/" element={<Homepage />} />
					<Route path="/cart" element={<Cart />} />
					<Route
						path="/category/:categoryParam"
						element={<ProductDetails />}
					/>
					<Route path="*" element={<Error />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
