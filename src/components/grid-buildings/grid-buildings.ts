import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { CreateBuildingsComponent } from '../create-buildings/create-buildings';

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

    let createModal = this.modalCtrl.create(CreateBuildingsComponent);
    createModal.onDidDismiss(selectedBuilding => {
     console.log(selectedBuilding);
     this.store.dispatch({type: 'BUILDINGS_ADD', payload: selectedBuilding})
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
