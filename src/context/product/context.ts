import { createContext } from "react";
import { productData } from "../../product-data";
import { CartState, ProductCtxt, StateType } from "../types";

const cartData: CartState = [];

const initialState: StateType = {
	productData,
	cartData,
};

export const ProductContext = createContext<ProductCtxt>({
	state: initialState,
	dispatch: () => {},
});
