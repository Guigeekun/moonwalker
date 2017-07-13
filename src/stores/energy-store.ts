// counter.ts
import { Action } from '@ngrx/store';
import { Energy } from '../game-objects/resources/energy';

export function energyReducer(state: Energy = new Energy(), action: Action) {
	let updatedEnergy = null;
	switch (action.type) {
        case 'ENERGY_ADD':
            updatedEnergy = Object.assign(new Energy(), state);
			return updatedEnergy.add(action.payload);

		case 'ENERGY_SUB':
			updatedEnergy = Object.assign(new Energy(), state);
			return updatedEnergy.sub(action.payload);

		default:
			return state;
	}
}