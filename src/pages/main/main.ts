import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoresModule } from '../../stores/stores.module';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { ResourcesRuntime } from '../../game-core/resources-runtime';

@IonicPage({
  name: 'main'
})
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  titanium: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Store<any>, runtime: ResourcesRuntime ) {

    runtime.initRuntime();
    
    this.titanium = store.select('titanium');
    /*this.titanium.subscribe(v => {
      console.log(v);
    });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
