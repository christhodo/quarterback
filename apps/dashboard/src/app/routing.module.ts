import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuarterbacksComponent } from './quarterbacks/quarterbacks.component';
import { WildComponent } from '@quarterback-angular/ui-login';
import { LoginComponent } from '@quarterback-angular/ui-login';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quarterbacks', component: QuarterbacksComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' },
  { path: 'wild', component: WildComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
