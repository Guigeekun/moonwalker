import { Component } from '@angular/core';
import { Titanium } from '../../game-objects/resources/titanium';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the TitaniumComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'titanium',
  templateUrl: 'titanium.html'
})
export class TitaniumComponent {

  titanium: Observable<Titanium>;

  constructor(store: Store<any>) {
    console.log('Hello TitaniumComponent Component');
    
    this.titanium = store.select('titanium');
    /*this.titanium.subscribe(v => {
      console.log(v);
    });*/

  }

}
