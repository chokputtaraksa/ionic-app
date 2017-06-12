import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login-page/login-page';
import { SignupPage } from '../pages/signup-page/signup-page';
import { Doctor1stPage } from '../pages/doctor1st-page/doctor1st-page';
import { VideoPage } from '../pages/video-page/video-page';
import { SensorPage } from '../pages/sensor-page/sensor-page';
import { HistoryPage } from '../pages/history-page/history-page';
import { PatientPage } from '../pages/patient-page/patient-page';
import { TabsPage } from '../pages/tabs/tabs';

import { Todos } from '../providers/todos';
import { Auth } from '../providers/auth';


import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    Doctor1stPage,
    VideoPage,
    SensorPage,
    HistoryPage,
    PatientPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    Doctor1stPage,
    VideoPage,
    SensorPage,
    HistoryPage,
    PatientPage,
    TabsPage
  ],
  providers: [
    Todos,
    Auth,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}