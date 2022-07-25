import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { WildComponent } from './wild/wild/wild.component';
import { LoginComponent } from './login/login/login.component';

export const uiLoginRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ToolbarComponent, WildComponent, LoginComponent],
})
export class UiLoginModule {}
