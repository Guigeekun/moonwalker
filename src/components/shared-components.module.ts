import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { TitaniumComponent } from './titanium/titanium';
import { RareEarthComponent } from './rareearth/rareearth';
import { HeliumComponent } from './helium/helium';
import { EnergyComponent } from './energy/energy';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    FooterComponent,
    TitaniumComponent,
    RareEarthComponent,
    HeliumComponent,
    EnergyComponent
  ],
  imports: [
      IonicModule
  ],
    exports: [
      FooterComponent,
      TitaniumComponent,
      RareEarthComponent,
      HeliumComponent,
      EnergyComponent
  ]
})
export class SharedComponentsModule {}
