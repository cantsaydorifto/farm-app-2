import {productData} from "../product-data";

//common context types
export interface ProviderProps {
	children: React.ReactNode;
}

// Product Context
export type ProductActions =
	| "SET_COUNT_ZERO"
	| "DECREMENT_PRODUCT_COUNT"
	| "INCREMENT_PRODUCT_COUNT";

export type ProductState = typeof productData;

export type ProductAction = {
	type: ProductActions;
	payload: {
		name: keyof ProductState;
		id: string;
	};
};

export type ProductCtxt = {
	state: ProductState;
	dispatch: React.Dispatch<ProductAction>;
};

//Cart Context

export type CartAction =
	| { type: "ADD_TO_CART"; payload: CartItem }
	| { type: "REMOVE_FROM_CART"; payload: string };

export type CartItem = typeof productData["fruits"][0] & {
	productIndex: number;
};
export type CartState = CartItem[];
export type CartCtxt = {
	state: CartState;
	dispatch: React.Dispatch<CartAction>;
};
