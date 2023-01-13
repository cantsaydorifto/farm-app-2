import React from "react";
import { useReducer } from "react";
import { productData } from "../../product-data";
import { CartState, ProviderProps, StateType } from "../types";
import { ProductContext } from "./context";
import { productReducer } from "./reducer";

const cartData: CartState = [];

const initialState: StateType = {
	productData,
	cartData,
};

export const ProductContextProvider = (props: ProviderProps) => {
	const [state, dispatch] = useReducer(productReducer, initialState);
	return (
		<ProductContext.Provider value={{ state, dispatch }}>
			{props.children}
		</ProductContext.Provider>
	);
};
