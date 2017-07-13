import { Component } from '@angular/core';
import { Energy } from '../../game-objects/resources/energy';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the EnergyComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'energy',
  templateUrl: 'energy.html'
})
export class EnergyComponent {

 energy: Observable<Energy>;
  
  constructor(store: Store<any>) {
    console.log('Hello HeliumComponent Component');
    
    this.energy = store.select('energy');
    /*this.helium.subscribe(v => {
      console.log(v);
    });*/

  }


}
