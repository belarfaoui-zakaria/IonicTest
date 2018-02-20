import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-medikit',
    templateUrl: 'medikit.html'
  })
  export class MedikitPage {

    // medicaments = [
    //   {nom: "Doliprane", expiration: "12-12-2012"},
    //   {nom: "voltaraine", expiration: "12-12-2012"},
    // ]

    constructor(public navCtrl: NavController) {

    }
  
  }
  