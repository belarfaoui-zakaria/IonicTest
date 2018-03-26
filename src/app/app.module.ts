import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MedikitPage } from '../pages/medikit/medikit';

import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FilterPipe } from './filter.pipe';
//import { DatamatrixMedicamentData } from './datamatrix.medicament.data';
import { OneBordingPage } from '../pages/OneBording/OneBording';

 

@NgModule({
  declarations: [
    MyApp,
    HomePage,  
    MedikitPage,
    SettingsPage,
    TabsPage,
    FilterPipe,
    OneBordingPage,
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    MedikitPage,
    SettingsPage,
    TabsPage,
    OneBordingPage,
   
  ],
  providers: [
    BarcodeScanner,
    LocalNotifications,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {
  constructor(){
    
  }
}
