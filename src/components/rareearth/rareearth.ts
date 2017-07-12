import { Component } from '@angular/core';
import { RareEarths } from '../../game-objects/resources/rare-earths';

/**
 * Generated class for the TitaniumComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'rare-earths',
  templateUrl: 'rareearth.html'
})
export class RareEarthComponent {

  rareearth: RareEarths;

  constructor() {
    console.log('Hello RareEarthComponent Component');
    
    this.rareearth = new RareEarths();

  }

  displayTotal(): number {
    return this.rareearth.getTotal();
  }

  displayIcon(): String {
    return this.rareearth.getIcon();
  }

}
