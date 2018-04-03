import { DatabaseProvider } from '../../providers/database/database';
import { DatamatrixMedicamentData } from '../../app/datamatrix.medicament.data';
import * as moment from 'moment';

export class Medicament{


  private cip: String;
  private cis: String;
  private date_expiration: any;
  private format = "";
  private database:DatabaseProvider;
  private scanned_text: String = null;



  public constructor(parser: DatamatrixMedicamentData = null){
    if(parser != null){
      this.setCip(parser.getCip());
      this.setExpiration(parser.getExpiration().format("DD/MM/YYYY"));     
    }
  }

  public setExpiration(date){
    this.date_expiration = date;
  }

  public setCip(cip){
    this.cip = cip;
  }

  public setCis(cis){
    this.cis = cis;
  }
  public setDatabase( database: DatabaseProvider){
     this.database = database;
  }
  public setScannedText(text){
    this.scanned_text = text;
  }


  public insertMedicament(cis, cip, expiration, scanned_text=null){
    var sql = "insert into medicaments (cis ,cip ,date_expiration ,nombre ,scanned_code) values (?, ?, ?, ?, ?) "
    return this.database.execute(sql, [cis, cip, expiration, 1, scanned_text]).then( e => { 
      // var  localNotifications = new LocalNotifications();

      // localNotifications.schedule({
      //   id: 1,
      //   text: "Médicaments sera expirés procahinement",
      //   at: new Date(new Date().getTime() + 5000)
      // })

      return {id: e.insertId, is_new: true};
    } );
  }

  public update(id, nombre, scanned_text=null){
    var sql = "update medicaments set nombre = ?, scanned_code=? where id = ?";
    return this.database.execute(sql, [nombre, scanned_text, id]).then( e => { 
      return {id: id, is_new: false};
    } );
  }

  public getData(){
    var sql = "select CIS from CIS_BDPM inner join CIS_CIP_BDPM on CIS_BDPM.CIS = CIS_CIP_BDPM.CIS where CIP7 = ? ";
    return this.database.execute(sql, [this.cip]).then( e => { return e.rows.item(0).CIS; } );
  }

  public find(cis, cip, expiration){

    this.database.execute("select * from medicaments", {}).then( (e) => {
            for (var i = 0; i < e.rows.length ;i++) {
              console.log(e.rows.item(i))
            }
    })
    var sql = "select id, cis ,cip ,date_expiration ,nombre ,scanned_code from medicaments where cis = ? and cip = ? and date_expiration = ?";
    return this.database.execute(sql, [cis, cip, expiration]).then( e => {  
      if(e.rows.item(0)) return e.rows.item(0);
      else return false;
    } ).catch(() => { return false; });
  }


  // public create(){
  //   return this.create(this.cis, this.cip, this.expiration)
  // }

  public create(){
    return this.find(this.cis, this.cip, this.date_expiration)
    .then( (e) => { 
      if(e != false){
        return this.update(e.id, e.nombre+1, this.scanned_text)
      }else{
        return this.insertMedicament(this.cis, this.cip, this.date_expiration, this.scanned_text)
      }
     })
    .catch( (e) => { console.log(e)} )
    // var sql = "select CIS from CIS_BDPM inner join CIS_CIP_BDPM on CIS_BDPM.CIS = CIS_CIP_BDPM.CIS where CIP7 = ? ";
    // return this.database.execute(sql, [this.cip]).then( e => { return e.rows.item(0).CIS; }).then()
  }


  // public getData(){
  //   return Promise.all([this.getCip(), this.getComposition(), this.getCipCode()])
  // }

  // public expired(){
  //   return this.date_expiration.diff(moment(), 'days') == 0;
  // }

  // public getCip(){
  //   let sql = "select CIS, DENOMINATION, FORME_PHARMACEUTIQUE, VOIES_ADMINISTRATION, TITULAIRES FROM CIS_BDPM WHERE CIS = ?";
  //   return this.database.execute(sql, [this.cis]).then(e => {
  //     return e.rows.item(0);
  //   })
  // }


  // public getComposition(){
  //   let sql = "select CIS, DESIGNATION_ELEMENT_PHARMA, DOSAGE_SUBSTANCE, REFERENCE_DOSAGE FROM CIS_COMPOSITION_BDPM WHERE CIS = ?";
  //   return this.database.execute(sql, [this.cis]).then(e=>{
  //     return e.rows.item(0);

  //   })
  // }

  // public getCipCode(){
  //   let sql = "select CIS, CIP7, LIBELLE_PRESENTATION FROM CIS_CIP_BDPM WHERE CIP7 = ?";
  //   return this.database.execute(sql, [this.cip7]).then(e => {
  //     return e.rows.item(0);
 
  //   }) 
  // }

}