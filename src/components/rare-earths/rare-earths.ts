import { Component } from '@angular/core';
import { RareEarths } from '../../game-objects/resources/rare-earths';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the TitaniumComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'rare-earths',
  templateUrl: 'rare-earths.html'
})
export class RareEarthsComponent {

 rareEarths: Observable<RareEarths>;
  
  constructor(store: Store<any>) {
    console.log('Hello HeliumComponent Component');
    
    this.rareEarths = store.select('rareEarths');
    /*this.rareEarths.subscribe(v => {
      console.log(v);
    });*/

  }
}
