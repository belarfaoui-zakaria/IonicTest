import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedikitPage } from '../medikit/medikit';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the OneBordingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-one-bording',
  templateUrl: 'one-bording.html',
})
export class OneBordingPage {

  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";


  constructor(public navCtrl: NavController, public navParams: NavParams,private database: DatabaseProvider) {
  }
  skip() {
    this.navCtrl.push(MedikitPage);
  }
  slideChanged() {
    if (this.slides.isEnd())
      this.skipMsg = "Alright, I got it";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OneBordingPage');
  }
}
