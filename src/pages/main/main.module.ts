import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { MainPage } from './main';

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    SharedComponentsModule
  ],
  entryComponents: [
    MainPage
  ]
})
export class MainPageModule {}
