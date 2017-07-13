import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import { ResourcesRuntime } from '../../game-core/resources-runtime';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

@IonicPage({
  name: 'main'
})
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  testRadioResult: any;
  testRadioOpen: boolean;

  titanium: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, store: Store<any>, runtime: ResourcesRuntime, public alerCtrl: AlertController ) {
  
    runtime.initRuntime();
    
    this.titanium = store.select('titanium');
    /*this.titanium.subscribe(v => {
      console.log(v);
    });*/
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  goToExpedition()
  {
    this.navCtrl.setRoot('expedition');
  }

  expeditionMenu()
  {
       let alert = this.alerCtrl.create();
    alert.setTitle('Expedition');

    alert.addInput({
      type: 'radio',
      label: 'Expedition 1 | dur: 10',
      value: '1',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Expedition 2 | dur: 30',
      value: '2',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Expedition 3 | dur: 50',
      value: '3',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Expedition 4 | dur: 70',
      value: '4',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }
}
