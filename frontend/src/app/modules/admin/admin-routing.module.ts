import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';


const routes: Routes = [

  { path: '', component: PageAdminComponent },
  { path: 'list', component: PostListComponent },
  { path: 'create', component: PostCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
