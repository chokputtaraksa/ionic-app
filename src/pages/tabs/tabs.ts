import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { LoginPage } from '../login-page/login-page';
import { SignupPage } from '../signup-page/signup-page';
import { Doctor1stPage } from '../doctor1st-page/doctor1st-page';
import { VideoPage } from '../video-page/video-page';
import { SensorPage } from '../sensor-page/sensor-page';
import { HistoryPage } from '../history-page/history-page';
import { PatientPage } from '../patient-page/patient-page';

 
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PatientPage;
  tab2Root: any = SensorPage;
  tab3Root: any = HistoryPage;
 
  constructor() {
 
  }
}