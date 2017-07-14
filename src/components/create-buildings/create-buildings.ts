import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

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


  constructor(public viewCtrl: ViewController) {
    console.log('Hello CreateBuildingsComponent Component');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
