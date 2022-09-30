import { ActionType } from './shopping-types';
export const addToCart = (itemID: number) => {
	return {
		type: ActionType.ADD,
		payload: {
			id: itemID,
		},
	};
};
export const removeFromCart = (itemID: number) => {
	return {
		type: ActionType.REMOVE,
		payload: {
			id: itemID,
		},
	};
};

export const adjustQty = (itemID: number, value: number) => {
	return {
		type: ActionType.ADJUST,
		payload: {
			id: itemID,
			qty: value,
		},
	};
};
export const loadCurrentItem = (item: Object) => {
	return {
		type: ActionType.LOAD,
		payload: item,
	};
};
