import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { chartSettingsReducer } from './сharts-settings.reducer';

@NgModule({
  imports: [StoreModule.forFeature('chartSettings', chartSettingsReducer)],
})
export class ChartSettingsStoreModule {}
