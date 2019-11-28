import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageBlogComponent } from './pages/page-blog/page-blog.component';


const routes: Routes = [
  { path: '', redirectTo: 'blog-list', pathMatch: 'full' },
  { path: 'blog-list', component: PageBlogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
