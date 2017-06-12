import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';
import { Doctor1stPage } from '../doctor1st-page/doctor1st-page';
import { LoginPage } from '../login-page/login-page'
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'signup-page',
  templateUrl: 'signup-page.html'
})
export class SignupPage {
 
  role: string;
  email: string;
  password: string;
  loading:any;
  alert : string;
 
  constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }
 
  register(){
 
    this.showLoader();
 
    let details = {
        email: this.email,
        password: this.password,
        profile : {
          role: this.role
          // blah blah blah
        }
    };

    if(!details.email){
      this.loading.dismiss();
      this.alert = "Please enter your email.";
    }else if(!details.password){
      this.loading.dismiss();
      this.alert = "Please enter your password."
    }else{
      this.authService.createAccount(details).then((result) => {
        this.loading.dismiss();
        console.log(result);
        if(details.profile.role ==='doctor'){
          this.navCtrl.setRoot(Doctor1stPage);
        }else if(details.profile.role === 'relative'){
          this.navCtrl.setRoot(HomePage);
        }else{
          this.navCtrl.setRoot(HomePage);
        }
      }, (err) => {
          this.loading.dismiss();
          let alert = this.alertCtrl.create({
            title: "Sorry!",
            subTitle: 'This email is already active.',
            buttons: ['Dismiss']
          });
          alert.present();
      });
    }
 
  }

  cancel(){
    this.showLoader2();
    this.loading.dismiss();
    this.navCtrl.setRoot(LoginPage);
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }

  showLoader2(){
 
    this.loading = this.loadingCtrl.create({
      content: 'waiting...'
    });
 
    this.loading.present();
 
  }

 
}