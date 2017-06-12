import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup-page/signup-page';
import { Doctor1stPage } from '../doctor1st-page/doctor1st-page';
import { PatientPage } from '../patient-page/patient-page';
import { TabsPage } from '../tabs/tabs';

import { AlertController } from 'ionic-angular';
@Component({
  selector: 'login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage {
 
    email: string;
    password: string;
    loading: any;
    alert : string;
 
    constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    }
 
    ionbViewDidLoad() { //will trigger as soon as the page is loaded
 
        this.showLoader();
 
        //Check if already authenticated
        this.authService.checkAuthentication().then((res) => {
            console.log("Already authorized");
            this.loading.dismiss();
            this.navCtrl.setRoot(HomePage);
        }, (err) => {
            console.log("Not already authorized");
            this.loading.dismiss();
        });
 
    }    

    login(){
 
        this.showLoader();
 
        let credentials = {
            email: this.email,
            password: this.password
        };
        // console.log(credentials);
        if(!credentials.email || !credentials.password){
            this.loading.dismiss();
            let alert = this.alertCtrl.create({
                title: "Undefined",
                subTitle: 'Undefined username/password',
                buttons: ['Dismiss']
            });
            alert.present();
        }else{
            this.authService.login(credentials).then((result) => {
                this.loading.dismiss();
                if(result['user']['role'] ==='doctor'){ // if you are doctor u will redirect to doctor page
                    this.navCtrl.setRoot(Doctor1stPage);
                }else if(result['user']['role'] ==='relative'){ // if not redirect to relative page
                    this.navCtrl.setRoot(HomePage);
                }else if(result['user']['role'] ==='patient'){
                    this.navCtrl.setRoot(TabsPage);
                }
            }, (err) => {
                this.loading.dismiss();
                let alert = this.alertCtrl.create({
                    title: err.statusText,
                    subTitle: 'Invalid username or password',
                    buttons: ['Dismiss']
                });
                alert.present();
                // console.log(err);
            });
        }
    }
 
    launchSignup(){
        this.navCtrl.push(SignupPage);
    }
 
    showLoader(){
 
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
 
        this.loading.present();
 
    }
 
}