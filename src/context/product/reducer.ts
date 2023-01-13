import { Action, StateType } from "../types";

export const productReducer = (state: StateType, action: Action) => {
	switch (action.type) {
		case "INCREMENT_PRODUCT_COUNT": {
			state["productData"][action.payload.name].find((el, i) => {
				if (el.key === action.payload.id) {
					state["productData"][action.payload.name][i].count++;
					return true;
				}
			});
			const index = state["productData"][action.payload.name].findIndex(
				(x) => x.key === action.payload.id
			);
			const idx = state.cartData.findIndex(
				(x) => x.key === action.payload.id
			);
			if (idx === -1) {
				const item = state.productData[action.payload.name][index];
				state.cartData.push({
					...item,
					productIndex: index,
				});
			}
			return {
				...state,
			};
		}
		case "DECREMENT_PRODUCT_COUNT": {
			state["productData"][action.payload.name].find((el, i) => {
				if (el.key === action.payload.id) {
					state["productData"][action.payload.name][i].count--;
					return true;
				}
			});
			const index = state.productData[action.payload.name].findIndex(
				(x) => x.key === action.payload.id
			);
			if (state.productData[action.payload.name][index].count === 0) {
				state.cartData.filter((el) => el.key !== action.payload.id);
			}
			return {
				...state,
			};
		}
		case "SET_COUNT_ZERO": {
			state["productData"][action.payload.name].find((el, i) => {
				if (el.key === action.payload.id) {
					state["productData"][action.payload.name][i].count = 0;
					return true;
				}
			});
			return {
				...state,
			};
		}
		default:
			return state;
	}
};
