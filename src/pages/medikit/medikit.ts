import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-medikit',
    templateUrl: 'medikit.html'
  })
  export class MedikitPage {
    tabBarElement: any;
    splash = true;
    medicaments = [
      {name: "voltaraine", expiration: "12-12-2012"},
    ];
    filter= null;
    
    constructor(public navCtrl: NavController) {
     this.tabBarElement = document.querySelector('.tabbar');
      this.medicaments = [
        {name: "Doliprane 1000 mg 8 gélules", expiration: "10 jours"},
        {name: "Doliprane 500 mg 10 comprimés", expiration: "90 jours"},
      ]
    }
   ionViewDidLoad() {
      this.tabBarElement.style.display = 'none';
      setTimeout(() => {
        this.splash = false;
        this.tabBarElement.style.display = 'flex';
      }, 4000);
    }
  }
  