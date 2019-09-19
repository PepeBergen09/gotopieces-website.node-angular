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
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { PageAboutusComponent } from './pages/page-aboutus/page-aboutus.component';
import { PageNewsComponent } from './pages/page-news/page-news.component';
import { PageGamesComponent } from './pages/page-games/page-games.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { AboutComponent } from './pages/page-aboutus/about/about.component';
import { AboutCoverComponent } from './pages/page-aboutus/about-cover/about-cover.component';
import { ContactFormComponent } from './pages/page-contact/contact-form/contact-form.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { AboutIntroComponent } from './pages/page-aboutus/about-intro/about-intro.component';
import { FjordarComingsoonComponent } from './pages/page-games/fjordar-comingsoon/fjordar-comingsoon.component';
import { FjordarHowtoComponent } from './pages/page-games/fjordar-howto/fjordar-howto.component';
import { FjordarMorefeaturesComponent } from './pages/page-games/fjordar-morefeatures/fjordar-morefeatures.component';
import { FjordarGameComponent } from './pages/page-games/fjordar-game/fjordar-game.component';
import { FjordarFeaturesComponent } from './pages/page-games/fjordar-features/fjordar-features.component';
import { AboutTeamComponent } from './pages/page-aboutus/about-team/about-team.component';
import { NewsListComponent } from './pages/page-news/news-list/news-list.component';
import { NewsCoverComponent } from './pages/page-news/news-cover/news-cover.component';
import { Ukgames2019Component } from './pages/page-news/news/ukgames2019/ukgames2019.component';
import { SectionNewslettersComponent } from './sections/section-newsletters/section-newsletters.component';
import { FjordarCoverComponent } from './pages/page-games/fjordar-cover/fjordar-cover.component';
import { PageBlogComponent } from './pages/page-blog/page-blog.component';
import { FjordarInfoComponent } from './pages/page-games/fjordar-info/fjordar-info.component';
import { NewsComponent } from './pages/page-news/news/news.component';
import { TheBeginingComponent } from './pages/page-news/news/the-begining/the-begining.component';


const appRoutes: Routes = [
  {path: '', component: PageHomeComponent},
  {path: 'home', component: PageHomeComponent},
  {path: 'news', component: PageNewsComponent},
  {path: 'games', component: PageGamesComponent},
  {path: 'aboutus', component: PageAboutusComponent},
  {path: 'contact', component: PageContactComponent},
  {path: 'test', component: TestcomponentComponent},
  
  {path: 'ukexpo2019', component: Ukgames2019Component},
  {path: 'thebegining', component: TheBeginingComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    NavbarComponent,
    CoverSliderComponent,
    FooterComponent,
    TestcomponentComponent,
    PageAboutusComponent,
    PageNewsComponent,
    PageGamesComponent,
    PageContactComponent,
    AboutComponent,
    AboutCoverComponent,
    ContactFormComponent,
    PageHomeComponent,
    AboutIntroComponent,
    FjordarComingsoonComponent,
    FjordarHowtoComponent,
    FjordarMorefeaturesComponent,
    FjordarGameComponent,
    FjordarFeaturesComponent,
    AboutTeamComponent,
    NewsListComponent,
    NewsCoverComponent,
    Ukgames2019Component,
    SectionNewslettersComponent,
    FjordarCoverComponent,
    PageBlogComponent,
    FjordarInfoComponent,
    NewsComponent,
    TheBeginingComponent
   
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
