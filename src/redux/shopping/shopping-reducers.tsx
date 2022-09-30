import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
	products: [], //is,title,description, price, img
	cart: [], //is,title,description, price, img, qty
	currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			return {};
		case actionTypes.REMOVE_FROM_CART:
			return {};
		case actionTypes.ADJUST_QTY:
			return {};
		case actionTypes.LOAD_CURRENT_ITEM:
			return {};
		default:
			return state;
	}
};
export default shopReducer;
