import { CartAction, CartState } from "../types";

export const cartReducer = (state: CartState, action: CartAction) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return [...state, action.payload];
		case "REMOVE_FROM_CART":
			return state.filter((el) => el.key !== action.payload);
		default:
			return state;
	}
};
