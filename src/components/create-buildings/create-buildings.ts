import { Component, Input } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

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
export class CreateBuildingsComponent {

  allBuildings:  [any];

  constructor(public viewCtrl: ViewController, public params: NavParams) {
    console.log('Hello CreateBuildingsComponent Component');
    this.allBuildings = this.params.get('allBuildings');
  }

  build(building: any){

    console.log(building);
    this.viewCtrl.dismiss(building);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
