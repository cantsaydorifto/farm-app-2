import React, { createContext } from "react";
import { useReducer } from "react";
import productData from "../../product-data";
import { ProductCtxt, ProviderProps } from "../types";
import { productReducer } from "./reducer";

const initialState = {
	...productData,
};

const ProductContext = createContext<ProductCtxt>({
	state: initialState,
	dispatch: () => {},
});

export const ProductContextProvider = (props: ProviderProps) => {
	const [state, dispatch] = useReducer(productReducer, initialState);
	return (
		<ProductContext.Provider value={{ state, dispatch }}>
			{props.children}
		</ProductContext.Provider>
	);
};