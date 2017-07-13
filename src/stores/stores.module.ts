import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { titaniumReducer } from './titanium-store';
import { heliumReducer } from './helium-store';
import { rareEarthsReducer } from './rare-earths-store';
import { energyReducer } from './energy-store';
import { gridbuildingsReducer } from './gridbuildings-store';

@NgModule({
  imports: [
      StoreModule.provideStore({ 
        titanium: titaniumReducer,
        helium: heliumReducer,
        rareEarths: rareEarthsReducer,
        energy: energyReducer,
        gridbuildings: gridbuildingsReducer
      })
  ]
})
export class StoresModule {}
