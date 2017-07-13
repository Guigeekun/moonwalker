import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class ResourcesRuntime {

  constructor(public store: Store<any>) {
  }

  public initRuntime()
  {
      console.log('Init resourcesRuntime');
    setInterval(() => {
        this.store.dispatch({type:'TITANIUM_ADD', payload: 10});
        this.store.dispatch({type:'RAREEARTHS_ADD', payload: 7});
        this.store.dispatch({type:'HELIUM_ADD', payload: 5});
    }, 1000);
  }
}