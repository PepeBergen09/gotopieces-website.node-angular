import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendPanelComponent } from './core/layouts/frontend-panel/frontend-panel.component';
import { TestComponent } from './test/test.component';
import { AdminPanelComponent } from './core/layouts/admin-panel/admin-panel.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FrontendPanelComponent,
    children: [{
      path: 'home',
      loadChildren: './modules/home/home.module#HomeModule'
    }]
  },
  {
    path: 'blog',
    component: FrontendPanelComponent,
    children: [{
      path: '',
      loadChildren: './modules/blog/blog.module#BlogModule'
    }]
  },
  {
    path: 'admin',
    redirectTo: 'admin/index',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
    children: [{
      path: 'index',
      loadChildren: './modules/admin/admin.module#AdminModule'
    }]
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
