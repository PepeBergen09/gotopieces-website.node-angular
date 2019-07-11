import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  MatToolbarModule, MatCardModule 
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CoverComponent } from './cover/cover.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoverSliderComponent } from './cover-slider/cover-slider.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MainFeaturesComponent } from './main/main-features/main-features.component';
import { MainInfoComponent } from './main/main-info/main-info.component';
import { MainMoreFeaturesComponent } from './main/main-more-features/main-more-features.component';
import { MainFeatures2Component } from './main/main-features2/main-features2.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { MainFeatures1Component } from './main/main-features1/main-features1.component';
import { MainFeatures3Component } from './main/main-features3/main-features3.component';
import { MainTeamComponent } from './main/main-team/main-team.component';
import { MainComingsoonComponent } from './main/main-comingsoon/main-comingsoon.component';
import { MainFjordarFeaturesComponent } from './main/main-fjordar-features/main-fjordar-features.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    NavbarComponent,
    CoverSliderComponent,
    FooterComponent,
    MainComponent,
    MainFeaturesComponent,
    MainInfoComponent,
    MainMoreFeaturesComponent,
    MainFeatures2Component,
    AboutusComponent,
    TeamComponent,
    ContactComponent,
    TestimonialComponent,
    SubscriptionComponent,
    MainFeatures1Component,
    MainFeatures3Component,
    MainTeamComponent,
    MainComingsoonComponent,
    MainFjordarFeaturesComponent
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
