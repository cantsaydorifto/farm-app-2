import { createContext } from "react";
import productData from "../../product-data";
import { ProductCtxt } from "../types";

const initialState = {
	...productData,
};

export const ProductContext = createContext<ProductCtxt>({
	state: initialState,
	dispatch: () => {},
});
