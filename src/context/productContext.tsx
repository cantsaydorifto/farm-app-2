import React, { createContext } from "react";
import { useReducer } from "react";
import productData from "../product-data";

const initialState = {
	...productData,
};

type Types =
	| "SET_COUNT_ZERO"
	| "DECREMENT_PRODUCT_COUNT"
	| "INCREMENT_PRODUCT_COUNT";

type State = typeof initialState;

interface Action {
	type: Types;
	payload: {
		name: keyof State;
		id: string;
	};
}

interface Context{
	state: State;
	dispatch: React.Dispatch<Action>;
}

interface ProviderProps{
    children:React.ReactNode
}

const ProductContext = createContext<Context>({
	state: initialState,
	dispatch: () => {},
});

const productReducer = (state: State, action: Action) => {
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

const ProductContextProvider = (props:ProviderProps) => {
	const [state, dispatch] = useReducer(productReducer, initialState);
	return (
		<ProductContext.Provider value={{ state, dispatch }}>
			{props.children}
		</ProductContext.Provider>
	);
};