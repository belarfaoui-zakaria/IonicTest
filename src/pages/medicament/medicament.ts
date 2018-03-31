import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { ToastController } from 'ionic-angular';
import { MedikitPage } from '../medikit/medikit';
import * as moment from 'moment';
/**
 * Generated class for the MedicamentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicament',
  templateUrl: 'medicament.html',
})
export class MedicamentPage {


  public medicament: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private database: DatabaseProvider, private toastCtrl: ToastController, private localNotifications: LocalNotifications) {
    this.medicament = {};
    this.database.getDatabaseState().subscribe( e => {
      var medicament = this.navParams.get("medicament")


      if(e){
        // this.database.execute("select * from medicaments", {})

        this.database.execute("select id, date_expiration, FORME_PHARMACEUTIQUE, TITULAIRES, VOIES_ADMINISTRATION, DESIGNATION_ELEMENT_PHARMA, DOSAGE_SUBSTANCE, nombre, DENOMINATION, LIBELLE_PRESENTATION from medicaments inner join CIS_BDPM inner join CIS_CIP_BDPM inner join CIS_COMPOSITION_BDPM on CIS_COMPOSITION_BDPM.CIS = medicaments.cis and medicaments.cip = CIS_CIP_BDPM.cip7 and CIS_BDPM.CIS = medicaments.cis where id = ? ", [medicament.id])
        .then( (k) => {
           this.medicament = k.rows.item(0);
           console.log(medicament)
           if(medicament.is_new){
               var date = moment(this.medicament.date_expiration);
               date.hours(23)
              this.presentToast();
              this.localNotifications.schedule({
                id: this.medicament.id,
                text: this.medicament.DENOMINATION + " sera expirés procahinement",
                at: date.toDate()
              })
           }
           return this.medicament;
        }).catch(e => {
          console.log(e)
        });
      }


    })
  }

  back(){
    this.navCtrl.push(MedikitPage)
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Une notification programmée pour ce medicament',
      duration: 3000,
      position: 'bottom',
      cssClass: "toast-success",
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    setTimeout( () => {
         toast.present();
    }, 1000);
    
  }

  public getMedicament(){
    return this.medicament;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicamentPage');
  }

  ionViewWillEnter() {



  }


}
