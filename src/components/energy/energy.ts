import { Component } from '@angular/core';
import { Energy } from '../../game-objects/resources/energy';

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

  energy: Energy;

  constructor() {
    console.log('Hello EnergyComponent Component');
    
    this.energy = new Energy();

  }

  displayTotal(): number {
    return this.energy.getTotal();
  }

  displayIcon(): String {
    return this.energy.getIcon();
  }

}
