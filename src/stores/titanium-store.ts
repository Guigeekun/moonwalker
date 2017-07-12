// counter.ts
import { Action } from '@ngrx/store';
import { Titanium } from '../game-objects/resources/titanium';

export function titaniumReducer(state: Titanium = new Titanium(), action: Action) {
	switch (action.type) {
        case 'ADD':
            let updatedTitanium = Object.assign(new Titanium(), state);
			return updatedTitanium.add(action.payload);

		case 'SUB':
			return state.sub(action.payload);

		default:
			return state;
	}
}