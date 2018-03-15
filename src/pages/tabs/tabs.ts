import { Component } from '@angular/core';

import { MedikitPage } from '../medikit/medikit';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { Platform } from 'ionic-angular';
import { ScanDetailPage } from '../scan-detail/scan-detail';
@Component({
  selector: "tab-page",
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab2Root = HomePage;
  tab1Root = MedikitPage;
  tab3Root = SettingsPage;
  tab4Root = ScanDetailPage;
  private platform: Platform; 
  private barcodescanner: BarcodeScanner;

  constructor(platform: Platform, barcodescanner: BarcodeScanner) {
    this.platform = platform;
    this.barcodescanner = barcodescanner;
  }

  scan(){

    console.log("start scanning...")

    this.platform.ready().then( () => {
      this.barcodescanner.scan({formats: "DATA_MATRIX"})
      .then((result) => {
        console.log(result);
      })
    })
  }
}
