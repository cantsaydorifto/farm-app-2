import React, { createContext } from "react";
import { useReducer } from "react";
import { CartCtxt, CartState, ProviderProps } from "../types";
import { cartReducer } from "./reducer";

const initialState: CartState = [];

const CartContext = createContext<CartCtxt>({
	state: initialState,
	dispatch: () => {},
});

export const CartContextProvider = (props: ProviderProps) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);
	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{props.children}
		</CartContext.Provider>
	);
};
