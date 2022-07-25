import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuarterbacksComponent } from './quarterbacks/quarterbacks.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quarterbacks', component: QuarterbacksComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
