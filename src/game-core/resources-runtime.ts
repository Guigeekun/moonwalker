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
        this.store.select('titanium');
        this.store.dispatch({type:'ADD', payload: 10});
    }, 1000);
  }
}