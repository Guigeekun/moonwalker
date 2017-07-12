import { Injectable } from '@angular/core';
import { StoresModule } from '../stores/stores.module';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ResourcesRuntime {

  constructor(public store: Store<any>) {
  }

  public initRuntime()
  {
      console.log('Init resourcesRuntime');
    setInterval(() => {
        this.store.select('titanium');
        this.store.dispatch({type:'ADD', payload: 10});
    }, 1000);
  }
}