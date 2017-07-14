import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { CreateBuildingsComponent } from '../create-buildings/create-buildings';
import { PowerPlant } from '../../game-objects/buildings/power-plant';
import { Factory } from '../../game-objects/buildings/factory';
import { Hangar } from '../../game-objects/buildings/hangar';
import { HeliumProductor } from '../../game-objects/buildings/helium-productor';
import { Laboratory } from '../../game-objects/buildings/laboratory';
import { RareEarthsExcavator } from '../../game-objects/buildings/rare-earths-excavator';
import { ReceptionCenter } from '../../game-objects/buildings/reception-center';
import { TitaniumExcavator } from '../../game-objects/buildings/titanium-excavator';

/**
 * Generated class for the GridBuildingsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'grid-buildings',
  templateUrl: 'grid-buildings.html',
})
export class GridBuildingsComponent implements OnInit {

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
  buildings: Observable<any>;
  grid: Array<any> = [];

  constructor(public store: Store<any>, public alerCtrl: AlertController, public modalCtrl: ModalController) {
    console.log('Hello GridBuildingsComponent Component');

    //store.dispatch({type: 'BUILDINGS_ADD', payload: new PowerPlant()});
  }

  ngOnInit(){
    console.log('grid load');
    // grid
    this.buildings = this.store.select('gridbuildings');


     // remove already built buildings to available list
    this.buildings.subscribe(alreadyBuildings => {
      console.log(alreadyBuildings);
      console.log('buildings list');
      alreadyBuildings.forEach(building => {
        this.allBuildings = this.allBuildings.filter(element => {
          return element.getId() != building.getId()
        });
      });
    });

    // generate grid
    this.buildings.subscribe(buildings => {
        console.log('rebuild grid');
        this.grid = [];
        let length = buildings.length;
        for (let i = 0; i < length; i += 3) {
            let trio = [];
            trio.push(buildings[i]);
            if (i + 1 < length) {
                trio.push(buildings[i + 1]);
            }
            if (i + 2 < length) {
                trio.push(buildings[i + 2]);
            }

            this.grid.push(trio);
        }
        console.log(this.grid);
    });
  }

  createBuilding() {

    let createModal = this.modalCtrl.create(CreateBuildingsComponent, {allBuildings: this.allBuildings});
    createModal.onDidDismiss(selectedBuilding => {
     console.log(selectedBuilding);
     if(selectedBuilding){
      this.store.dispatch({type: 'BUILDINGS_ADD', payload: selectedBuilding});
     }
    });
    createModal.present();
    /**let alert = this.alerCtrl.create();
    alert.setTitle('New buildings');

    this.allBuildings.forEach(element => {
      //console.log(element);
      alert.addInput({
        type: 'radio',
        label: element.getName(),
        value: element,
        checked: false
      });
    });
    
   
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: selectedBuilding => {
        console.log('Radio data:', selectedBuilding);
        if(selectedBuilding !=  undefined){
          this.store.dispatch({type: 'BUILDINGS_ADD', payload: selectedBuilding});
        }

      }
    });

    alert.present();*/
  }

}
