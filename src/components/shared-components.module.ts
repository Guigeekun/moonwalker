import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
      IonicModule
  ],
    exports: [
      FooterComponent
  ],
  entryComponents: [
      FooterComponent
  ]
})
export class SharedComponentsModule {}