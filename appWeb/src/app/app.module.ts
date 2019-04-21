import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { NavigatorComponent} from './navigator/navigator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, 
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
