import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  MatToolbarModule, MatCardModule 
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CoverSliderComponent } from './cover-slider/cover-slider.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MainFeaturesComponent } from './main/main-features/main-features.component';
import { MainInfoComponent } from './main/main-info/main-info.component';
import { MainMoreFeaturesComponent } from './main/main-more-features/main-more-features.component';
import { MainFeatures2Component } from './main/main-features2/main-features2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoverSliderComponent,
    FooterComponent,
    MainComponent,
    MainFeaturesComponent,
    MainInfoComponent,
    MainMoreFeaturesComponent,
    MainFeatures2Component
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
