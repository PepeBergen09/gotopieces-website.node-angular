import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FrontendPanelComponent } from './layouts/frontend-panel/frontend-panel.component';
import { MainMenuComponent } from './menus/main-menu/main-menu.component';
import { AdminPanelComponent } from './layouts/admin-panel/admin-panel.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { SidenavAdminComponent } from './sidenav-admin/sidenav-admin.component';

import { MatToolbarModule } from '@angular/material';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, FrontendPanelComponent, MainMenuComponent, AdminPanelComponent, HeaderAdminComponent, SidenavAdminComponent],
  imports: [
    CommonModule,

    MatToolbarModule


  ]
})
export class CoreModule { }
