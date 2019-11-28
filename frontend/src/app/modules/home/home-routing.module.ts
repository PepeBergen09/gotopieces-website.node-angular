import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageFjordarComponent } from './pages/page-fjordar/page-fjordar.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  { path: 'fjordar', component: PageFjordarComponent },
  { path: 'about', component: PageAboutComponent },
  { path: 'contact', component: PageContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
