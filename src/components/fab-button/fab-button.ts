import { Component } from '@angular/core';
import { DatamatrixMedicamentData } from '../../app/datamatrix.medicament.data';
import { Medicament } from '../../app/models/medicament';
import { AjouterMedicamentPage } from '../../pages/ajouter-medicament/ajouter-medicament';
import { Platform } from 'ionic-angular';
import { CodeParser } from '../../app/code.parser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { Diagnostic } from '@ionic-native/diagnostic';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { MedicamentPage } from '../../pages/medicament/medicament';

/**
 * Generated class for the FabButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'fab-button',
  templateUrl: 'fab-button.html'
})
export class FabButtonComponent {

  text: string;

  constructor(private navCtrl: NavController, private diagnostic: Diagnostic, private platform: Platform, private barcodescanner: BarcodeScanner, private database: DatabaseProvider) {
 
  }

  public add(){
    this.navCtrl.push(AjouterMedicamentPage)
  }




  do_scan(){
      this.barcodescanner.scan({formats: "DATA_MATRIX"})
      .then((result) => {
        var parser = new DatamatrixMedicamentData(result.text);
        parser.getCis(this.database).then( e => {
          var medicament = new Medicament(parser);
            console.log(parser.getExpiration())
           medicament.setExpiration(parser.getExpiration().format("DD/MM/YYYY"))
           medicament.setCip(parser.getCip())
           medicament.setCis(e.CIS)
           medicament.setDatabase(this.database)
           medicament.setScannedText(result.text)
           medicament.create().then( e => this.afficher(e))
        })
      })
  }

  requestPermissions(){
    return this.diagnostic.getCameraAuthorizationStatus().then( e => {
      return this.diagnostic.requestCameraAuthorization().then( c => {
        console.log("camera 2");
      })

    }).catch( e => console.log(e))
  }

  public afficher(med){
    this.navCtrl.push(MedicamentPage, {medicament: med})
  }

  public scan(){


    var result = {"cancelled":0,"text":"\u001d010340094163124517200924107V170","format":"DATA_MATRIX"};


    this.platform.ready().then( () => {
          this.requestPermissions().then( e => this.do_scan() ) 
    })
  }

}
