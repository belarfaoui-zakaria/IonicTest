import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedikitPage } from '../medikit/medikit';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-OneBording-page',
  templateUrl: 'OneBording.html',
})
export class OneBordingPage {
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
