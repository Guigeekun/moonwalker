import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPage } from './settings';
import { SharedComponentsModule } from '../../components/shared-components.module';


@NgModule({
  declarations: [
    SettingsPage,
    
  ],
  imports: [
    IonicPageModule.forChild(SettingsPage),
    SharedComponentsModule,
  ],
  entryComponents: [
    SettingsPage,


  ]
})
export class SettingsPageModule {}
