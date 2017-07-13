import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { MainPage } from './main';
import { ResourcesRuntime } from '../../game-core/resources-runtime';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    SharedComponentsModule,
    PipesModule
  ],
  entryComponents: [
    MainPage
  ],
  providers: [
    ResourcesRuntime
  ]
})
export class MainPageModule {}
