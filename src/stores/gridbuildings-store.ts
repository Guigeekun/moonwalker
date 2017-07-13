import { Action } from '@ngrx/store';

export const gridbuildingsReducer = (state: Array<any> = [], action: Action) => {
    switch (action.type) {
        case 'BUILDINGS_INIT':
            return action.payload;
        case 'BUILDINGS_ADD':
            return [...state, action.payload];
        case 'BUILDINGS_UPDATE':
            return state;
        default:
            return state;
    }
}
