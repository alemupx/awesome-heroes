import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentesModule } from './shared/componentes/componentes.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const config = {
  apiKey: 'AIzaSyAEhJsCDy29aDnt_d5BdnxQk-T39ciYLwQ',
  authDomain: 'awesomeheroes21.firebaseapp.com',
  projectId: 'awesomeheroes21',
  storageBucket: 'awesomeheroes21.appspot.com',
  messagingSenderId: '355340201473',
  appId: '1:355340201473:web:f5e688e2b248b8e585da00',
  measurementId: 'G-SE03C78VM8',
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentesModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
