import { Component } from '@angular/core';
import { Helium } from '../../game-objects/resources/helium';

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

  helium: Helium;

  constructor() {
    console.log('Hello HeliumComponent Component');
    
    this.helium = new Helium();

  }

  displayTotal(): number {
    return this.helium.getTotal();
  }

  displayIcon(): String {
    return this.helium.getIcon();
  }

}
