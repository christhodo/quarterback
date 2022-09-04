import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { WildComponent } from './wild/wild/wild.component';
import { LoginComponent } from './login/login/login.component';
import { MaterialModule } from '@quarterback-angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const uiLoginRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [ToolbarComponent, WildComponent, LoginComponent],
  exports: [WildComponent, LoginComponent],
})
export class UiLoginModule {}
