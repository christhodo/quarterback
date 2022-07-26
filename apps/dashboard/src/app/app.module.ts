import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@quarterback-angular/core-data';
import { CoreStateModule } from '@quarterback-angular/core-state';
import { MaterialModule } from '@quarterback-angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { QuarterbackDetailsComponent } from './quarterbacks/quarterback-details/quarterback-details.component';
import { QuarterbacksListComponent } from './quarterbacks/quarterbacks-list/quarterbacks-list.component';
import { QuarterbacksComponent } from './quarterbacks/quarterbacks.component';
import { FormsModule } from '@angular/forms';
import { UiLoginModule } from '@quarterback-angular/ui-login';

@NgModule({
  declarations: [
    AppComponent,
    QuarterbackDetailsComponent,
    QuarterbacksComponent,
    QuarterbacksListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    UiLoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
