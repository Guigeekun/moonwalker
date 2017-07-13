import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { TitaniumExcavator } from "../game-objects/buildings/titanium-excavator";
import { RareEarthsExcavator } from "../game-objects/buildings/rare-earths-excavator";
import { HeliumProductor } from "../game-objects/buildings/helium-productor";

@Injectable()
export class ResourcesRuntime {

  buildings: Observable<any>;
  titaniumExcavator: TitaniumExcavator;
  rareEarthsExcavator: RareEarthsExcavator;
  heliumProductor: HeliumProductor;


  constructor(public store: Store<any>) {

    this.buildings = store.select('gridbuildings');

    this.buildings.subscribe(buildings => {
      this.titaniumExcavator = buildings.filter(building => {
        return building.getId() === new TitaniumExcavator().getId()
      })[0];

      this.rareEarthsExcavator = buildings.filter(building => {
        return building.getId() === new RareEarthsExcavator().getId()
      })[0];

      this.heliumProductor = buildings.filter(building => {
        return building.getId() === new HeliumProductor().getId()
      })[0];

    });
  }

  public initRuntime()
  {
      console.log('Init resourcesRuntime');

    
    setInterval(() => {

      if(this.titaniumExcavator){
        console.log('moar titanium');
        this.store.dispatch({type:'TITANIUM_ADD', payload: this.titaniumExcavator.titaniumIncome()});
      }

      if(this.rareEarthsExcavator){
        console.log('moar rareEarths');
        this.store.dispatch({type:'RAREEARTHS_ADD', payload: this.rareEarthsExcavator.rareEarthsIncome()});
      }

      if(this.heliumProductor){
        console.log('moar Helium');
        this.store.dispatch({type:'HELIUM_ADD', payload: this.heliumProductor.heliumIncome()});
      }

    }, 1000);
  }
}