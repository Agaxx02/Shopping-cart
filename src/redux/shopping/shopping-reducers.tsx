import { ActionType } from './shopping-types';
import { Action } from '.';

const INITIAL_STATE = {
	products: [
		{
			name: 'Apple MacBook',
			price: 1200,
			description: 'An apple Macbook',
			id: 1,
			photo: 'https://i.ibb.co/9TPfv4j/apple-macbook-air-133-zloty-1.jpg',
		},
		{
			name: 'Apple Watch',
			price: 800,
			description: 'An apple watch',
			id: 2,
			photo:
				'https://i.ibb.co/xM76rK9/MPL73-VW-34-FR-watch-41-alum-starlight-nc-8s-VW-34-FR-WF-SI.jpg',
		},
		{
			name: 'Xiaomi phone',
			price: 4200,
			description: 'A Xiaomi phone',
			id: 3,
			photo: 'https://i.ibb.co/n3dVwHX/Xiaomi-Redmi-10-A.jpg',
		},
		{
			name: 'Adidas shoes',
			price: 500,
			description: 'New Adidas shoes',
			id: 4,
			photo: 'https://i.ibb.co/yqrZzBN/61f87dec481e4512823ea7fb0080ba1a-9366.webp',
		},
		{
			name: 'Electric guitar',
			price: 7000,
			description: 'Light green electric guitar',
			id: 5,
			photo: 'https://i.ibb.co/LNVrgzM/preview.jpg',
		},
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
