import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { titaniumReducer } from './titanium-store';
import { heliumReducer } from './helium-store';
import { rareEarthsReducer } from './rare-earths-store';
import { energyReducer } from './energy-store';

@NgModule({
  imports: [
      StoreModule.provideStore({ 
        titanium: titaniumReducer,
        helium: heliumReducer,
        rareEarths: rareEarthsReducer,
        energy: energyReducer
      })
  ]
})
export class StoresModule {}
