import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SectionAboutComponent } from './components/section-about/section-about.component';
import { SectionAboutIntroComponent } from './components/section-about-intro/section-about-intro.component';
import { SectionTeamComponent } from './components/section-team/section-team.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { PageFjordarComponent } from './pages/page-fjordar/page-fjordar.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { SectionNewslettersComponent } from './components/section-newsletters/section-newsletters.component';
import { SectionFjordarCoverComponent } from './components/section-fjordar-cover/section-fjordar-cover.component';
import { SectionFjordarInfoComponent } from './components/section-fjordar-info/section-fjordar-info.component';
import { SectionHomeCoverComponent } from './components/section-home-cover/section-home-cover.component';
import { SectionPageCoverComponent } from './components/section-page-cover/section-page-cover.component';


@NgModule({
  declarations: [HomeComponent, SectionAboutComponent, SectionAboutIntroComponent, SectionTeamComponent, FormContactComponent, PageFjordarComponent, PageContactComponent, PageAboutComponent, SectionNewslettersComponent, SectionFjordarCoverComponent, SectionFjordarInfoComponent, SectionHomeCoverComponent, SectionPageCoverComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
