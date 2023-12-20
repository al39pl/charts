import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataStoreModule } from './store/data/data-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommonModule } from '@angular/common';
import { ChartsContainerComponent } from './components/charts/charts.component';
import { ChartComponent } from './components/charts/chart/chart.component';
import { ChartBarComponent } from './components/charts/chart-bar/chart-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsContainerComponent,
    ChartComponent,
    ChartBarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({}),
    DataStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
