import { Component } from '@angular/core';
import { Titanium } from '../../game-objects/resources/titanium';

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

  titanium: Titanium;

  constructor() {
    console.log('Hello TitaniumComponent Component');
    
    this.titanium = new Titanium();

  }

  displayTotal(): number {
    return this.titanium.getTotal();
  }

  displayIcon(): String {
    return this.titanium.getIcon();
  }

}
