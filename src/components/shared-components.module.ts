import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { TitaniumComponent } from './titanium/titanium';
import { RareEarthsComponent } from './rare-earths/rare-earths';
import { HeliumComponent } from './helium/helium';
import { EnergyComponent } from './energy/energy';
import { IonicModule } from 'ionic-angular';
import { StoresModule } from '../stores/stores.module';
import { PipesModule } from '../pipes/pipes.module';
import { GridBuildingsComponent } from './grid-buildings/grid-buildings';
import { CreateBuildingsComponent } from './create-buildings/create-buildings';


@NgModule({
  declarations: [
    FooterComponent,
    TitaniumComponent,
    RareEarthsComponent,
    HeliumComponent,
    EnergyComponent,
    GridBuildingsComponent,
    CreateBuildingsComponent
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
      EnergyComponent,
      GridBuildingsComponent,
      CreateBuildingsComponent
  ],
  entryComponents: [
      CreateBuildingsComponent
    
  ]
})
export class SharedComponentsModule {}
