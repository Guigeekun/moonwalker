import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { MainPage } from './main';
import { ResourcesRuntime } from '../../game-core/resources-runtime';

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
  ],
  providers: [
    ResourcesRuntime
  ]
})
export class MainPageModule {}
