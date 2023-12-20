import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsContainerComponent } from './components/charts/charts.component';

const routes: Routes = [
  { path: 'charts', component: ChartsContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
