import { ProductAction, ProductState } from "../types";

export const productReducer = (state: ProductState, action: ProductAction) => {
	switch (action.type) {
		case "INCREMENT_PRODUCT_COUNT":
			state[action.payload.name].find((el, i) => {
				if (el.key === action.payload.id) {
					state[action.payload.name][i].count++;
					return true;
				}
			});
			return {
				...state,
			};
		case "DECREMENT_PRODUCT_COUNT":
			state[action.payload.name].find((el, i) => {
				if (el.key === action.payload.id) {
					state[action.payload.name][i].count--;
					return true;
				}
			});
			return {
				...state,
			};
		case "SET_COUNT_ZERO":
			state[action.payload.name].find((el, i) => {
				if (el.key === action.payload.id) {
					state[action.payload.name][i].count = 0;
					return true;
				}
			});
			return {
				...state,
			};
		default:
			return state;
	}
};
