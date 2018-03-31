import { Component } from '@angular/core';

import { MedikitPage } from '../medikit/medikit';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { Platform } from 'ionic-angular';
import { ScanDetailPage } from '../scan-detail/scan-detail';
import { Diagnostic } from '@ionic-native/diagnostic';
import { CodeParser } from '../../app/code.parser';
import { DatabaseProvider } from '../../providers/database/database';
import { DatamatrixMedicamentData } from '../../app/datamatrix.medicament.data'; 
import { Medicament } from '../../app/models/medicament';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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
  private diagnostic: Diagnostic;
  private database: DatabaseProvider;

  constructor(diagnostic: Diagnostic, platform: Platform, barcodescanner: BarcodeScanner, database: DatabaseProvider) {
    this.platform = platform;
    this.barcodescanner = barcodescanner;
    this.diagnostic = diagnostic;
    this.database = database;
  }

  // do_scan(){
  //     this.barcodescanner.scan({formats: "DATA_MATRIX"})
  //     .then((result) => {
  //       console.log(result);
  //     })
  // }

  // requestPermissions(){
  //   return this.diagnostic.getCameraAuthorizationStatus().then( e => {
  //     return this.diagnostic.requestCameraAuthorization().then( c => {
  //       console.log("camera 2");
  //     })

  //   }).catch( e => console.log(e))
  // }
  scan(){

    // console.log("start scanning...")
    // var result = {"cancelled":0,"text":"\u001d010340094163124517200924107V170","format":"DATA_MATRIX"};
    // var parser = new DatamatrixMedicamentData(result.text);
    // parser.getCis(this.database).then( e => {
    //   console.log(e)
    //   var medicament = new Medicament(e.CIS, parser.getCip(), parser.getExpiration(), this.database);
    //   medicament.getData().then( e => console.log(e))
    // })
    // this.platform.ready().then( () => {
    //       this.requestPermissions().then( e => this.do_scan() ) 
    // })
  }
}
