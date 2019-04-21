import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  MatToolbarModule, MatCardModule 
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CoverComponent } from './cover/cover.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
