import { productData, productDataType } from "../product-data";

export interface ProviderProps {
	children: React.ReactNode;
}

export type ProductActions =
	| "SET_COUNT_ZERO"
	| "DECREMENT_PRODUCT_COUNT"
	| "INCREMENT_PRODUCT_COUNT";

export type Action = {
	type: ProductActions;
	payload: {
		name: keyof productDataType;
		id: string;
	};
};

export type ProductCtxt = {
	state: StateType;
	dispatch: React.Dispatch<Action>;
};

export type CartItem = typeof productData["fruits"][0] & {
	productIndex: number;
};
export type CartState = CartItem[];

export type StateType = {
	productData: productDataType;
	cartData: CartState;
};
