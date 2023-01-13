import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Error from "./pages/error/Error";
import Homepage from "./pages/homepage/Homepage";
import ProductDetails from "./pages/productCategory/ProductCategory";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route
					path="/category/:categoryParam"
					element={<ProductDetails />}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
