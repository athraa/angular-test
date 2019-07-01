import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {routeComponent} from './app-routing.module';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';


var firebaseConfig = {
  apiKey: "AIzaSyB6ZC5RoBTm3M8CLxreKi2yQJ3oC1jLcdM",
  authDomain: "angular-test-3da1b.firebaseapp.com",
  databaseURL: "https://angular-test-3da1b.firebaseio.com",
  projectId: "angular-test-3da1b",
  storageBucket: "",
  messagingSenderId: "639039950791",
  appId: "1:639039950791:web:dcf08caac14d41ba"
};

@NgModule({
  declarations: [
    AppComponent,
    routeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
