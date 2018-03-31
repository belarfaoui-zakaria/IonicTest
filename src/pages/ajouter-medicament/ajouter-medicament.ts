import { Component } from '@angular/core';
import { ModalController, ViewController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { AjouterModalPage } from  '../ajouter-modal/ajouter-modal';
/**
 * Generated class for the AjouterMedicamentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter-medicament',
  templateUrl: 'ajouter-medicament.html',
})
export class AjouterMedicamentPage {

  public results: any;
  public searchText: String = "";

  // constructor(public navCtrl: NavController, public navParams: NavParams, private database: DatabaseProvider) {

  constructor(public viewCtrl:ViewController, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private database: DatabaseProvider) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjouterMedicamentPage');
  }
 

  add(object: any){
    let profileModal = this.modalCtrl.create(AjouterModalPage, {params: object});
    profileModal.present();
  }

  search(){
 
    // this.results = [
    //   {DENOMINATION: "Doliprane Doliprane Doliprane Doliprane Doliprane Doliprane", LIBELLE_PRESENTATION: "doli 1"},
    //   {DENOMINATION: "Doliprane", LIBELLE_PRESENTATION: "doli 2"}
    // ]

   
    this.database.execute("select CIS_BDPM.CIS, CIP7 as CIP, DENOMINATION, LIBELLE_PRESENTATION from CIS_BDPM inner join CIS_CIP_BDPM on CIS_BDPM.CIS = CIS_CIP_BDPM.CIS where DENOMINATION like ? limit 0, 50", ["%"+this.searchText.split(" ").join("%")+"%"]).then( (e) => {
      this.results = new Array()
      for (var i = 0; i < e.rows.length ;i++) {
        this.results.push(e.rows.item(i))
      }
    }).catch(e => {
      console.log(e)
    });
  }

}
