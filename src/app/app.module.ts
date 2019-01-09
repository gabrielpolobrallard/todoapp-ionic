import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TodoPage } from './../pages/todo/todo.component';
import { CompletedPage } from './../pages/completed/completed.component';
import { TodoService } from '../services/todo.service';
import { addPage } from '../pages/add/add.component';
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TodoPage,
    CompletedPage,
    addPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TodoPage,
    CompletedPage,
    addPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TodoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
