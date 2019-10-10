import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Router
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherService } from './services/weather.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.modules';
import { AddCityDialog } from './app.component';
import { WeatherComponent } from './components/weather.component';
import { HomeComponent } from './components/home.component';
import { ListComponent } from './components/list.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cities/:cityName", component: WeatherComponent},
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    AddCityDialog,
    WeatherComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, AddCityDialog, HomeComponent, WeatherComponent]
})
export class AppModule { }
