import { ActionType } from './shopping-types';

interface AddRemoveAndLoad {
	type: ActionType.ADD | ActionType.REMOVE | ActionType.LOAD;
	payload: {
		id: number;
	};
}

interface AdjustQty {
	type: ActionType.ADJUST;
	payload: {
		id: number;
		qty: number;
	};
}
export type Action = AdjustQty | AddRemoveAndLoad;
