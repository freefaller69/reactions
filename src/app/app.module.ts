import { StatusesService } from './statuses/statuses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StatusesComponent } from './statuses/statuses.component';

// Define the firebase database configuration keys, get it from your Firebase application console
export const firebaseConfig = {
  apiKey: 'AIzaSyCZ7Ta0x6EDbPcqRpTcAaL4JmgEIjMBWLA',
  authDomain: 'reactions-6e260.firebaseapp.com',
  databaseURL: 'https://reactions-6e260.firebaseio.com',
  projectId: 'reactions-6e260',
  storageBucket: 'reactions-6e260.appspot.com',
  messagingSenderId: '299366886272'
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    StatusesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [StatusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
