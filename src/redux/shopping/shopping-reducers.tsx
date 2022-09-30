import { ActionType } from './shopping-types';
import { Action } from '.';

const INITIAL_STATE = {
	products: [
		{ name: 'Apple MacBook', price: 1200, description: 'An apple Macbook', id: 1 },
		{ name: 'Apple Watch', price: 800, description: 'An apple watch', id: 2 },
		{ name: 'Xiaomi phone', price: 4200, description: 'A Xiaomi phone', id: 3 },
	], //id,title,description, price, img
	cart: [], //id,title,description, price, img, qty
	currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case ActionType.ADD:
			return state;
		case ActionType.REMOVE:
			return state;
		case ActionType.ADJUST:
			return state;
		case ActionType.LOAD:
			return state;
		default:
			return state;
	}
};
export default shopReducer;
