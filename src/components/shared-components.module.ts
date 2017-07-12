import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { TitaniumComponent } from './titanium/titanium';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    FooterComponent,
    TitaniumComponent
  ],
  imports: [
      IonicModule
  ],
    exports: [
      FooterComponent,
      TitaniumComponent
  ]
})
export class SharedComponentsModule {}
