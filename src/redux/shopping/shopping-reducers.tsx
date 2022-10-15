import { ActionType } from './shopping-types';
import { Action } from '.';
import products from '../../products';

let INITIAL_STATE = {
	products: products,
	cart: new Array<any>(),
	currentItem: {},
};

const shopReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case ActionType.ADD:
			const item = state.products.find((prod: { id: number }) => prod.id === action.payload.id);
			const inCart = state.cart.find((item) => (item.id === action.payload.id ? true : false));
			return {
				...state,
				cart: inCart
					? state.cart.map((item) =>
							item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
					  )
					: [...state.cart, { ...item, qty: 1 }],
			};
		case ActionType.REMOVE:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};
		case ActionType.ADJUST:
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id && action.payload.qty >= 0
						? { ...item, qty: action.payload.qty }
						: item
				),
			};
		case ActionType.LOAD:
			return {
				...state,
				currentItem: action.payload,
			};
		default:
			return state;
	}
};
export default shopReducer;
