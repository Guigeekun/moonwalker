// counter.ts
import { Action } from '@ngrx/store';
import { RareEarths } from '../game-objects/resources/rare-earths';

export function rareEarthsReducer(state: RareEarths = new RareEarths(), action: Action) {
	let updatedRareEarths = null;
	switch (action.type) {
        case 'RAREEARTHS_ADD':
            updatedRareEarths = Object.assign(new RareEarths(), state);
			return updatedRareEarths.add(action.payload);

		case 'RAREEARTHS_SUB':
			updatedRareEarths = Object.assign(new RareEarths(), state);
			return updatedRareEarths.sub(action.payload);

		default:
			return state;
	}
}