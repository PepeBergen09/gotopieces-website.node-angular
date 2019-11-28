import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PageBlogComponent } from './pages/page-blog/page-blog.component';

import { BlogCoverComponent } from './components/blog-cover/blog-cover.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';


@NgModule({
  declarations: [PageBlogComponent, BlogCoverComponent, BlogListComponent, BlogDetailsComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
