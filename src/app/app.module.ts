import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { Diagnostic } from '@ionic-native/diagnostic';
import { CodeParser } from './code.parser';


import { AjouterMedicamentPageModule } from '../pages/ajouter-medicament/ajouter-medicament.module';
import { MedikitPageModule } from '../pages/medikit/medikit.module';

import { MedicamentPageModule } from '../pages/medicament/medicament.module'; 
import { OneBordingPageModule } from '../pages/one-bording/one-bording.module'; 
import { AjouterModalPageModule } from  '../pages/ajouter-modal/ajouter-modal.module';

@NgModule({ 
  declarations: [
    MyApp
  ],
  imports: [
    AjouterMedicamentPageModule,
    MedikitPageModule,
    MedicamentPageModule,
    OneBordingPageModule,
    AjouterModalPageModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    CodeParser,
    Diagnostic,
    BarcodeScanner,
    LocalNotifications,
    StatusBar,
    SQLite,
    SplashScreen,
    DatabaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule {
  constructor(){
    
  }
}
