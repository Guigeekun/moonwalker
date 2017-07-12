import { Component } from '@angular/core';

/**
 * Generated class for the RareearthComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'rareearth',
  templateUrl: 'rareearth.html'
})
export class RareearthComponent {

  text: string;

  constructor() {
    console.log('Hello RareearthComponent Component');
    this.text = 'Hello World';
  }

}
