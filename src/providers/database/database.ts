// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { BehaviorSubject } from 'rxjs/Rx';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  public execute(sql, data){
    return this.database.executeSql(sql, data);
  }

  private createTables(){
    return new Promise( (resolve, reject) => {
      let instructions = [
        "drop table medicaments",
        "CREATE TABLE CIS_BDPM( CIS VARCHAR(255) PRIMARY KEY, DENOMINATION VARCHAR(255) , FORME_PHARMACEUTIQUE VARCHAR(255) , VOIES_ADMINISTRATION VARCHAR(255) , STATU_AMM VARCHAR(255) , TYPE_AMM VARCHAR(255) , ETAT_COMMERCIALISATION VARCHAR(255) , DATE_AMM DATE , STATUT_BDM VARCHAR(255) , AUTORISATION_EUROPEENE VARCHAR(255) , TITULAIRES VARCHAR(255) , SURVEILLANCE_RENFORCEE VARCHAR(255) );",
        "CREATE TABLE CIS_CIP_BDPM( CIS VARCHAR(255), CIP7 VARCHAR(255), LIBELLE_PRESENTATION VARCHAR(255), STATUT_ADMIM_PRESENTATION VARCHAR(255), ETAT_COMMERCIALISATION_AMM VARCHAR(255), DATE_DECLARATiON_COMMERCIALISATION DATE, CIP13 VARCHAR(255), AGREMENT_COLLECTIVITES VARCHAR(255), TAUX_REMBOURSEMENT STRING VARCHAR(255), PRIX_EURO VARCHAR(255), INDICATION_REMBOURSEMENT_ASSURANCE VARCHAR(255), FOREIGN KEY(CIS) REFERENCES CIS_BDPM(CIS) );",
        "CREATE TABLE CIS_COMPOSITION_BDPM( CIS VARCHAR(255), DESIGNATION_ELEMENT_PHARMA VARCHAR(255), CODE_SUBSTANCE VARCHAR(255), DENOMINATION_SUBSTANCE VARCHAR(255), DOSAGE_SUBSTANCE VARCHAR(255), REFERENCE_DOSAGE VARCHAR(255), NATURE_COMPOSITION VARCHAR(255), NUMERO_LIAISON_SA_FT VARCHAR(255), FOREIGN KEY(CIS) REFERENCES CIS_BDPM(CIS) );",
        "CREATE INDEX CIS_CIP13_BDPM_INDEX ON CIS_CIP_BDPM ( CIP13 );",
        "CREATE INDEX CIS_CIP7_BDPM_INDEX ON CIS_CIP_BDPM ( CIP7 );",
        "CREATE TABLE medicaments( id INTEGER PRIMARY KEY, cis varchar(255), cip varchar(255), date_expiration varchar(255), nombre INTEGER, scanned_code varchar(255) DEFAULT NULL);",
        "CREATE INDEX cis_medicament_index on medicaments( cis );",
        "CREATE INDEX cip_medicament_index on medicaments( cip );",
        "CREATE INDEX date_expiration_medicament_index on medicaments( date_expiration );"
      ]

      let promises = instructions.map( e => {
        return this.execute(e, {}).then(() => console.log('Executed SQL :D')).catch(e => console.log(e));
      })

      Promise.all(promises).then( () => resolve(true)).catch(e => resolve(true)) 
      
    })
  }

  private insertData(name, data){
    return new Promise( (res, rej) => {
      let keys = Object.keys(data[0]);
      let sql = "INSERT INTO "+name+"("+keys.join(", ")+") VALUES("+ keys.map(e=>"?").join(", ") +")";
      let sqlBatch = new Array();
      sqlBatch.push(["delete from "+ name +";"]);
      data.forEach( e => {
        let values = keys.map(key=>e[key].toString())
        let v = [sql, values];

        sqlBatch.push(v);
      })


      this.database.sqlBatch(sqlBatch).then().then(() => {
        res(true);
        console.log('Executed BATCH SQL :D');
      }).catch(e =>{ 
        res(true);
        console.log(e)
      });
      
    })

  }

  private getCompo(){
    return this.http.get('assets/cis_compo.json').toPromise().then( res => {
        return res.json();
     });
  }

  private gatherData(){
    return Promise.all([this.getCip(), this.getCis(), this.getCompo()]).then( ([cip, cis, compo]) =>{
      return this.insertData("CIS_BDPM", cis).then( () => {
        return Promise.all(
          [
           this.insertData("CIS_CIP_BDPM", cip),
           this.insertData("CIS_COMPOSITION_BDPM", compo)
          ]
        )
      })
    })
  }

  private getCis(){
    return this.http.get('assets/cis.json').toPromise().then( res => {
        return res.json();
     });
  }

  private getCip() {
    return this.http.get('assets/cis_cip.json').toPromise().then( res => {
        return res.json();
     });
  }

  getAllDevelopers() {

    return this.database.executeSql("SELECT * FROM CIS_BDPM", []).then((data) => {
      let developers = [];
      console.log(data);  
      return developers;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }

  constructor(private http: Http, private storage:Storage, private sqlite: SQLite, private platform: Platform) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {

      this.sqlite.create({
        name: 'medicaments',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
              this.databaseReady.next(true); 

            } else {
              this.createTables().then( e => {
                this.gatherData().then((e) => {
                  this.storage.set('database_filled', true);
                  this.databaseReady.next(true);

                });
              })

            }
          });
        });
    });
  }



}
