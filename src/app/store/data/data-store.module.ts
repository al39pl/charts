import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { dataReducer } from './data.reducer';
import { DataEffects } from './data.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('data', dataReducer),
    EffectsModule.forFeature([DataEffects]),
  ],
})
export class DataStoreModule {}
