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
// import { DatamatrixMedicamentData } from './datamatrix.medicament.data';
import { ScanDetailPage } from '../pages/scan-detail/scan-detail';
import { SQLite } from '@ionic-native/sqlite';
// import { DatabaseProvider } from '../providers/database';
import { DatabaseProvider } from '../providers/database/database';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MedikitPage,
    SettingsPage,
    TabsPage,
    FilterPipe,
    ScanDetailPage,
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
    HomePage,
    MedikitPage,
    SettingsPage,
    TabsPage,
    ScanDetailPage
  ],
  providers: [
    BarcodeScanner,
    LocalNotifications,
    StatusBar,
    SQLite,
    SplashScreen,
    DatabaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})

export class AppModule {
  constructor(){
    
  }
}
