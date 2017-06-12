import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login-page/login-page';
import { VideoPage } from '../video-page/video-page';
import { SensorPage } from '../sensor-page/sensor-page';
import { HistoryPage } from '../history-page/history-page';
/**
 * Generated class for the Doctor1stPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-doctor1st-page',
  templateUrl: 'doctor1st-page.html',
})
export class Doctor1stPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService:Auth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Doctor1stPage');
  }

  logout(){
 
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
 
  }

  videoPage(){
    this.navCtrl.push(VideoPage);
  }

  sensorPage(){
    this.navCtrl.push(SensorPage);
  }

  historyPage(){
    this.navCtrl.push(HistoryPage);
  }
}
