import React, { createContext } from "react";
import { useReducer } from "react";
import productData from "../../product-data";

type tempItem = typeof productData["fruits"][0];

interface Item extends tempItem {
	productIndex: number;
}

const initialState: Item[] = [];

type State = typeof initialState;

type Action =
	| { type: "ADD_TO_CART"; payload: Item }
	| { type: "REMOVE_FROM_CART"; payload: string };

interface Context {
	state: State;
	dispatch: React.Dispatch<Action>;
}

interface ProviderProps {
	children: React.ReactNode;
}

const CartContext = createContext<Context>({
	state: initialState,
	dispatch: () => {},
});

const cartReducer = (state: State, action: Action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return [...state, action.payload];
		case "REMOVE_FROM_CART":
			return state.filter((el) => el.key !== action.payload);
		default:
			return state;
	}
};

const CartContextProvider = (props: ProviderProps) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);
	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{props.children}
		</CartContext.Provider>
	);
};
