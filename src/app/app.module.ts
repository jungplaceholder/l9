import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

var firebaseDatabaseDetails = {
  apiKey: "AIzaSyC9nT1vb0seVJE-OTYgBDjfAIvD50MCN8Y",
  authDomain: "manon-9c52c.firebaseapp.com",
  databaseURL: "https://manon-9c52c.firebaseio.com",
  projectId: "manon-9c52c",
  storageBucket: "manon-9c52c.appspot.com",
  messagingSenderId: "279313391874"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireDatabaseModule, AngularFireModule.initializeApp(firebaseDatabaseDetails)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
