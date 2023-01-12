import React from "react";
import { useReducer } from "react";
import { CartState, ProviderProps } from "../types";
import { CartContext } from "./context";
import { cartReducer } from "./reducer";

const initialState: CartState = [];

export const CartContextProvider = (props: ProviderProps) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);
	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{props.children}
		</CartContext.Provider>
	);
};
