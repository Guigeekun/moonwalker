import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { TitaniumComponent } from './titanium/titanium';
import { RareEarthsComponent } from './rare-earths/rare-earths';
import { HeliumComponent } from './helium/helium';
import { EnergyComponent } from './energy/energy';
import { IonicModule } from 'ionic-angular';
import { StoresModule } from '../stores/stores.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    FooterComponent,
    TitaniumComponent,
    RareEarthsComponent,
    HeliumComponent,
    EnergyComponent
  ],
  imports: [
      IonicModule,
      StoresModule,
      PipesModule
  ],
    exports: [
      FooterComponent,
      TitaniumComponent,
      RareEarthsComponent,
      HeliumComponent,
      EnergyComponent
  ]
})
export class SharedComponentsModule {}
