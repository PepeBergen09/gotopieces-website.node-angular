import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild, ElementRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { 
  MatToolbarModule, MatCardModule 
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoverComponent } from './cover/cover.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoverSliderComponent } from './cover-slider/cover-slider.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { MainFeaturesComponent } from './main/main-features/main-features.component';
import { MainInfoComponent } from './main/main-info/main-info.component';
import { MainMoreFeaturesComponent } from './main/main-more-features/main-more-features.component';
import { MainFeatures2Component } from './main/main-features2/main-features2.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { MainFeatures1Component } from './main/main-features1/main-features1.component';
import { MainFeatures3Component } from './main/main-features3/main-features3.component';
import { MainTeamComponent } from './main/main-team/main-team.component';
import { MainComingsoonComponent } from './main/main-comingsoon/main-comingsoon.component';
import { MainFjordarFeaturesComponent } from './main/main-fjordar-features/main-fjordar-features.component';
import { HomeComponent } from './home/home.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { PageAboutusComponent } from './pages/page-aboutus/page-aboutus.component';
import { PageNewsComponent } from './pages/page-news/page-news.component';
import { PageGamesComponent } from './pages/page-games/page-games.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { SectionContactComponent } from './sections/section-contact/section-contact.component';
import { SectionCoverComponent } from './sections/section-cover/section-cover.component';
import { SectionCoversliderComponent } from './sections/section-coverslider/section-coverslider.component';
import { SectionCoverfjordarComponent } from './sections/section-coverfjordar/section-coverfjordar.component';
import { PartialNewslettersComponent } from './partials/partial-newsletters/partial-newsletters.component';
import { PartialNewsComponent } from './partials/partial-news/partial-news.component';
import { AboutComponent } from './pages/page-aboutus/about/about.component';
import { AboutCoverComponent } from './pages/page-aboutus/about-cover/about-cover.component';
import { News1Component } from './news/news1/news1.component';
import { NewsCoverComponent } from './news/news-cover/news-cover.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'news', component: PageNewsComponent},
  {path: 'games', component: PageGamesComponent},
  {path: 'aboutus', component: PageAboutusComponent},
  {path: 'contact', component: PageContactComponent},
  {path: 'test', component: TestcomponentComponent},
  
  {path: 'ukexpo2019', component: News1Component},

];

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    NavbarComponent,
    CoverSliderComponent,
    FooterComponent,
    MainComponent,
    MainFeaturesComponent,
    MainInfoComponent,
    MainMoreFeaturesComponent,
    MainFeatures2Component,
    ContactComponent,
    TestimonialComponent,
    MainFeatures1Component,
    MainFeatures3Component,
    MainTeamComponent,
    MainComingsoonComponent,
    MainFjordarFeaturesComponent,
    HomeComponent,
    TestcomponentComponent,
    PageAboutusComponent,
    PageNewsComponent,
    PageGamesComponent,
    PageContactComponent,
    SectionContactComponent,
    SectionCoverComponent,
    SectionCoversliderComponent,
    SectionCoverfjordarComponent,
    PartialNewslettersComponent,
    PartialNewsComponent,
    AboutComponent,
    AboutCoverComponent,
    News1Component,
    NewsCoverComponent
   
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  @ViewChild('navbarToggler') navbarToggler:ElementRef;

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if(this.navBarTogglerIsVisible()){
      this.navbarToggler.nativeElement.click();
    }
  }

 }
