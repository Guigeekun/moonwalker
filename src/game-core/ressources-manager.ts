import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { Titanium } from '../game-objects/resources/titanium';
import { Helium } from '../game-objects/resources/helium';
import { RareEarths } from '../game-objects/resources/rare-earths';

@Injectable()
export class ResourcesManager {

    currentTitanium: number = 0;
    currentRareEarths: number = 0;
    currentHelium: number = 0;
    currentEnergy: number = 0;

    constructor(public store: Store<any>) {
        // update resources
        store.select('titanium').subscribe((titanium: Titanium) => {
            if(titanium){
                this.currentTitanium = titanium.getTotal()
            }
        });

        store.select('rareEarths').subscribe((rareEarths: RareEarths) => {
            if(rareEarths){
                this.currentRareEarths = rareEarths.getTotal()
            }
        });

        store.select('helium').subscribe((helium: Helium) => {
            if(helium){
                this.currentHelium = helium.getTotal()
            }
        });
    }

    public verifyCost(building: any){
        //todo
        return {titanium: true, rareEarths:true, helium: true, energy: true};
    }

    public buyBuildings(building: any){

        this.store.dispatch({type:'RAREEARTHS_SUB', payload: 200});

    }
}