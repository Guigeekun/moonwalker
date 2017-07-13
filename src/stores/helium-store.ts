// counter.ts
import { Action } from '@ngrx/store';
import { Helium } from '../game-objects/resources/helium';

export function heliumReducer(state: Helium = new Helium(), action: Action) {
	let updatedHelium = null;
	switch (action.type) {
        case 'HELIUM_ADD':
            updatedHelium = Object.assign(new Helium(), state);
			return updatedHelium.add(action.payload);

		case 'HELIUM_SUB':
			updatedHelium = Object.assign(new Helium(), state);
			return updatedHelium.sub(action.payload);

		default:
			return state;
	}
}