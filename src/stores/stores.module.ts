import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { titaniumReducer } from './titanium-store';

@NgModule({
  imports: [
      StoreModule.provideStore({ titanium: titaniumReducer })
  ]
})
export class StoresModule {}
