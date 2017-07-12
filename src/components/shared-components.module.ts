import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { TitaniumComponent } from './titanium/titanium';
import { RareEarthComponent} from './rareearth/rareearth';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    FooterComponent,
    TitaniumComponent,
    RareEarthComponent
  ],
  imports: [
      IonicModule
  ],
    exports: [
      FooterComponent,
      TitaniumComponent,
      RareEarthComponent
  ]
})
export class SharedComponentsModule {}
