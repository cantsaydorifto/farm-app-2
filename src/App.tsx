import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import ProductDetails from "./pages/productCategory/ProductCategory";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/:productName" element={<ProductDetails />} />
			</Routes>
		</>
	);
}

export default App;
