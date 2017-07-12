import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToMain()
  {
    this.navCtrl.setRoot('main');
    //this.navCtrl.push('main');
  }
  goToSettings()
  {
    this.navCtrl.push('settings');
  }
  goToAbout()
  {
    this.navCtrl.push('about');
  }

}
