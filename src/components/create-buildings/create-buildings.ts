import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { PowerPlant } from '../../game-objects/buildings/power-plant';
import { Factory } from '../../game-objects/buildings/factory';
import { Hangar } from '../../game-objects/buildings/hangar';
import { HeliumProductor } from '../../game-objects/buildings/helium-productor';
import { Laboratory } from '../../game-objects/buildings/laboratory';
import { RareEarthsExcavator } from '../../game-objects/buildings/rare-earths-excavator';
import { ReceptionCenter } from '../../game-objects/buildings/reception-center';
import { TitaniumExcavator } from '../../game-objects/buildings/titanium-excavator';

/**
 * Generated class for the CreateBuildingsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'create-buildings',
  templateUrl: 'create-buildings.html'
})
export class CreateBuildingsComponent implements OnInit {

  allBuildings: any[] = [
    new PowerPlant(),
    new TitaniumExcavator(),
    new RareEarthsExcavator(),
    new HeliumProductor(),
    new Factory(),
    new Hangar(),
    new Laboratory(),
    new ReceptionCenter(),
  ];
  currentBuildings: Observable<any>;

  constructor(public store: Store<any>, public viewCtrl: ViewController) {
    console.log('Hello CreateBuildingsComponent Component');
   
  }

  ngOnInit(){
    this.currentBuildings = this.store.select('gridbuildings');

     // remove already built buildings to available list
    this.currentBuildings.subscribe(alreadyBuildings => {
      console.log(alreadyBuildings);
      console.log('buildings list');
      alreadyBuildings.forEach(building => {
        this.allBuildings = this.allBuildings.filter(element => {
          return element.getId() != building.getId()
        });
      });
    });
  }

  build(building: any){

    console.log(building);
    //this.store.dispatch({type: 'BUILDINGS_ADD', payload: building});
    this.viewCtrl.dismiss(building);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
