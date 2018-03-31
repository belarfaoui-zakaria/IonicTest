import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Medicament } from '../../app/models/medicament'
import * as moment from 'moment';
import { DatabaseProvider } from '../../providers/database/database';
import { MedicamentPage } from '../medicament/medicament';

@Component({
    selector: 'page-medikit',
    templateUrl: 'medikit.html'
  })
  export class MedikitPage {
    tabBarElement: any;
    splash = true;
    public medicaments: any = [];



    
    constructor(private platform: Platform, public navCtrl: NavController, private database: DatabaseProvider) {
      
      



    }
 

    public afficher(med){
      this.navCtrl.push(MedicamentPage, {medicament: med})
    }

    ionViewWillEnter() {
      this.database.getDatabaseState().subscribe( e => {

        if(e){
          this.database.execute("select id, date_expiration, nombre, DENOMINATION as name, LIBELLE_PRESENTATION as libelle from medicaments inner join CIS_BDPM inner join CIS_CIP_BDPM on medicaments.cip = CIS_CIP_BDPM.cip7 and CIS_BDPM.CIS = medicaments.cis ", {})
          .then( (e) => {

            this.medicaments = new Array();
            console.log(e.rows.length)
            for (var i = 0; i < e.rows.length ;i++) {
              this.medicaments.push(e.rows.item(i))
            }
          }).catch(e => {
            console.log(e)
          });
        }


      })
    } 

  }
  