import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { timer } from 'rxjs/observable/timer';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { MedikitPage } from '../pages/medikit/medikit';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  showSplash = true; // <-- show animation
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";
  @ViewChild(NavController) navCtrl: NavController; 
  
  

 

  constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, localNotifications: LocalNotifications) {
    this.initializeApp();
   
    
 
    
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     
      localNotifications.schedule({
        id: 1,
        text: "Médicaments sera expirés procahinement",
        at: new Date(new Date().getTime() + 100)
      })
      statusBar.styleDefault();
      splashScreen.hide();
    }
    initializeApp() {
      this.platform.ready().then(() => {
  
       // this.statusBar.styleDefault();
        this.splashScreen.hide();  // <-- hide static image
  
        timer(700).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
      });
   /* }
    skip() {
      this.navCtrl.push(this.rootPage);
    }
    slideChanged() {
      if (this.slides.isEnd())
        this.skipMsg = "Alright, I got it";
    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad MyApp');
    }*/
  }
    }
  
  
 


