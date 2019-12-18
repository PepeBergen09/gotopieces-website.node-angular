import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild, ElementRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseService } from './services/firebase.service';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatToolbarModule, MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoverComponent } from './cover/cover.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoverSliderComponent } from './cover-slider/cover-slider.component';
import { FooterComponent } from './footer/footer.component';
import { PageAboutusComponent } from './pages/page-aboutus/page-aboutus.component';
import { PageNewsComponent } from './pages/page-news/page-news.component';
import { PageGamesComponent } from './pages/page-games/page-games.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { AboutComponent } from './pages/page-aboutus/about/about.component';
import { ContactFormComponent } from './pages/page-contact/contact-form/contact-form.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { AboutIntroComponent } from './pages/page-aboutus/about-intro/about-intro.component';
import { AboutTeamComponent } from './pages/page-aboutus/about-team/about-team.component';
import { NewsListComponent } from './pages/page-news/news-list/news-list.component';
import { NewsCoverComponent } from './pages/page-news/news-cover/news-cover.component';
import { Ukgames2019Component } from './pages/page-news/news/ukgames2019/ukgames2019.component';
import { FjordarCoverComponent } from './pages/page-games/fjordar-cover/fjordar-cover.component';
import { FjordarInfoComponent } from './pages/page-games/fjordar-info/fjordar-info.component';
import { NewsComponent } from './pages/page-news/news/news.component';
import { TheBeginingComponent } from './pages/page-news/news/the-begining/the-begining.component';
import { NewslettersComponent } from './sections/newsletters/newsletters.component';
import { News1BoxCoverComponent } from './pages/page-news/news/news1-box-cover/news1-box-cover.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { News2RegnConComponent } from './pages/page-news/news/news2-regn-con/news2-regn-con.component';
import { News3EssenComponent } from './pages/page-news/news/news3-essen/news3-essen.component';




const appRoutes: Routes = [
  {path: '', component: PageHomeComponent},
  {path: 'home', component: PageHomeComponent},
  {path: 'blog', component: PageNewsComponent},
  {path: 'fjordar', component: PageGamesComponent},
  {path: 'about-us', component: PageAboutusComponent},
  {path: 'contact', component: PageContactComponent},
  {path: 'newsletters', component: NewslettersComponent},

  {path: 'ukexpo2019', component: Ukgames2019Component},
  {path: 'thebegining', component: TheBeginingComponent},
  {path: 'game-box', component: News1BoxCoverComponent},
  {path: 'regncon', component: News2RegnConComponent},
  {path: 'essen', component: News3EssenComponent},
  {path: 'test', component: TestcomponentComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    NavbarComponent,
    CoverSliderComponent,
    FooterComponent,
    PageAboutusComponent,
    PageNewsComponent,
    PageGamesComponent,
    PageContactComponent,
    AboutComponent,
    ContactFormComponent,
    PageHomeComponent,
    AboutIntroComponent,
    AboutTeamComponent,
    NewsListComponent,
    NewsCoverComponent,
    Ukgames2019Component,
    FjordarCoverComponent,
    FjordarInfoComponent,
    NewsComponent,
    TheBeginingComponent,
    NewslettersComponent,
    News1BoxCoverComponent,
    TestcomponentComponent,
    News2RegnConComponent,
    News3EssenComponent

  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,

    FormsModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,

    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})
  ],
  providers: [FirebaseService],
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
