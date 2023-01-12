import { createContext } from "react";
import { CartCtxt, CartState } from "../types";

const initialState: CartState = [];

export const CartContext = createContext<CartCtxt>({
	state: initialState,
	dispatch: () => {},
});