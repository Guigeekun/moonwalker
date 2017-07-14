import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { Titanium } from '../game-objects/resources/titanium';
import { Helium } from '../game-objects/resources/helium';
import { RareEarths } from '../game-objects/resources/rare-earths';
//import { Building } from '../game-objects/buildings/building';

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
        let verif = {titanium:false,rareEarths:false,helium:false,energy:false};
        if(this.currentTitanium-building.titaniumCost >= 0){
            verif.titanium = true;
        }
        if(this.currentRareEarths-building.rareEarthsCost >= 0){
            verif.rareEarths = true;
        }
        if(this.currentHelium-building.heliumCost >= 0){
            verif.helium = true;
        }
        if(this.currentEnergy-building.energyCost >= 0){
            verif.energy = true;
        }
        return verif
    }

    public buyBuildings(building: any){
        this.store.dispatch({type:'TITANIUM_SUB', payload: building.titaniumCost});
        this.store.dispatch({type:'RAREEARTHS_SUB', payload: building.rareEarthsCost});
        this.store.dispatch({type:'HELIUM_SUB', payload: building.heliumCost});
        this.store.dispatch({type:'ENERGY_SUB', payload: building.energyCost});
        return 1
    }
}