import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FabButtonComponent } from '../components/fab-button/fab-button';
import { AjouterModalPage } from  '../pages/ajouter-modal/ajouter-modal';
import { AjouterMedicamentPage } from '../pages/ajouter-medicament/ajouter-medicament';
import { HomePage } from '../pages/home/home';
import { MedikitPage } from '../pages/medikit/medikit';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FilterPipe } from './filter.pipe';
// import { DatamatrixMedicamentData } from './datamatrix.medicament.data';
import { ScanDetailPage } from '../pages/scan-detail/scan-detail';
import { SQLite } from '@ionic-native/sqlite';
// import { DatabaseProvider } from '../providers/database';
import { DatabaseProvider } from '../providers/database/database';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { Diagnostic } from '@ionic-native/diagnostic';
import { CodeParser } from './code.parser';

import { MedicamentPage } from '../pages/medicament/medicament'; 
import { OneBordingPage } from '../pages/one-bording/one-bording'; 

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OneBordingPage,
    MedicamentPage,
    AjouterModalPage,
    AjouterMedicamentPage,
    MedikitPage,
    SettingsPage,
    TabsPage,
    FilterPipe,
    ScanDetailPage,
    FabButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FabButtonComponent,
    AjouterModalPage,
    MedicamentPage,
    HomePage,
    MedikitPage,
    AjouterMedicamentPage,
    SettingsPage,
    OneBordingPage,
    TabsPage,
    ScanDetailPage
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
  constructor(){
    
  }
}
