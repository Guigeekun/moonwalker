import { Component } from '@angular/core';
import { Helium } from '../../game-objects/resources/helium';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the TitaniumComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'helium',
  templateUrl: 'helium.html'
})
export class HeliumComponent {

 helium: Observable<Helium>;
  
  constructor(store: Store<any>) {
    console.log('Hello HeliumComponent Component');
    
    this.helium = store.select('helium');
    /*this.helium.subscribe(v => {
      console.log(v);
    });*/

  }


}
