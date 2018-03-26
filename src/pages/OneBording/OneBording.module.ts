import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OneBordingPage } from './OneBording';
import { MedikitPage } from '../medikit/medikit';



@NgModule({
  declarations: [
    OneBordingPage,
    MedikitPage
  ],
  imports: [
    IonicPageModule.forChild(OneBordingPage),
  ],
})
export class OneBordingPageModule {}
