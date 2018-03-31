import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AjouterMedicamentPage } from '../pages/ajouter-medicament/ajouter-medicament';
import { MedikitPage } from '../pages/medikit/medikit';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Storage } from '@ionic/storage';
import { OneBordingPage } from '../pages/one-bording/one-bording'; 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ; 

  constructor( private storage:Storage, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, localNotifications: LocalNotifications) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.storage.get('database_filled').then( e => {
        if(e){
          this.rootPage = MedikitPage

        } else{
          this.rootPage = OneBordingPage

        }

      })

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}

