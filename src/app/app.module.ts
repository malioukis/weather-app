import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { CityItemComponent } from './cities-list/city-item/city-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CitiesListComponent,
    CityItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
