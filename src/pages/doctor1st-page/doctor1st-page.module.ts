import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Doctor1stPage } from './doctor1st-page';

@NgModule({
  declarations: [
    Doctor1stPage,
  ],
  imports: [
    IonicPageModule.forChild(Doctor1stPage),
  ],
  exports: [
    Doctor1stPage
  ]
})
export class Doctor1stPageModule {}
