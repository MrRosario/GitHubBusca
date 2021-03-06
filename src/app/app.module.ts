import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './components/profile.component'; 
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    ProfileComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
