import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendPanelComponent } from './core/layouts/frontend-panel/frontend-panel.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminPanelComponent } from './core/layouts/admin-panel/admin-panel.component';
import { HeaderAdminComponent } from './core/header-admin/header-admin.component';
import { SidenavAdminComponent } from './core/sidenav-admin/sidenav-admin.component';
import { MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    FrontendPanelComponent,
    AdminPanelComponent,
    HeaderComponent,
    FooterComponent,
    HeaderAdminComponent,
    SidenavAdminComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
