import * as actionTypes from './shopping-types';
export const addToCart = (itemID: number) => {
	return {
		type: actionTypes.ADD_TO_CART,
		payload: {
			id: itemID,
		},
	};
};
export const removeFromCart = (itemID: number) => {
	return {
		type: actionTypes.REMOVE_FROM_CART,
		payload: {
			id: itemID,
		},
	};
};

export const adjustQty = (itemID: number, value: number) => {
	return {
		type: actionTypes.ADJUST_QTY,
		payload: {
			id: itemID,
			qty: value,
		},
	};
};
export const loadCurrentItem = (item: Object) => {
	return {
		type: actionTypes.LOAD_CURRENT_ITEM,
		payload: item,
	};
};
