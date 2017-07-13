// counter.ts
import { Action } from '@ngrx/store';
import { Titanium } from '../game-objects/resources/titanium';

export function titaniumReducer(state: Titanium = new Titanium(), action: Action) {
	let updatedTitanium = null;
	switch (action.type) {
        case 'TITANIUM_ADD':
            updatedTitanium = Object.assign(new Titanium(), state);
			return updatedTitanium.add(action.payload);

		case 'TITANIUM_SUB':
			updatedTitanium = Object.assign(new Titanium(), state);
			return updatedTitanium.sub(action.payload);

		default:
			return state;
	}
}