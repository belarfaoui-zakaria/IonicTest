import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import { DatabaseProvider } from '../../providers/database/database';
import { Medicament } from '../../app/models/medicament';
import { MedicamentPage } from '../../pages/medicament/medicament';

/**
 * Generated class for the AjouterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-modal',
  templateUrl: 'ajouter-modal.html',
})
export class AjouterModalPage {

  private databse: DatabaseProvider;
  public expiration_date: any;

  constructor(public viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams, private database: DatabaseProvider) {
    this.database = database;
  }

  public afficher(med){
    this.navCtrl.push(MedicamentPage, {medicament: med})
  }

  add(){
     var date = moment(this.expiration_date).format("DD/MM/YYYY")
     var params = this.navParams.get("params");
     var medicament = new Medicament();
     medicament.setExpiration(date)
     medicament.setCip(params.CIP)
     medicament.setCis(params.CIS)
     medicament.setDatabase(this.database)
     medicament.create().then( (e) => {
       this.afficher(e) 
     }).catch( e => console.log(e))

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AjouterModalPage');
  }

}
