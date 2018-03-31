import { CodeParser } from './code.parser'
import { DatabaseProvider } from '../providers/database/database';

export {CodeParser}
export class DatamatrixMedicamentData{
    private expiration;
    private cip7: string;
    private cip9: string;
    private cip13: string;
    private prefix: string;
    private lotnumber;

    constructor(private code: string){
        var result = new CodeParser().parse(code);
        this.cip13 = result["01"][0].toString();
        this.cip9 = this.cip13.substr(-9)
        this.cip7 = this.cip9.substr(1, 7)
        this.prefix = parseInt(this.cip13.substr(0, this.cip13.indexOf(this.cip9))).toString();
        this.lotnumber = result["10"][0];
        this.expiration = result["17"][0];
        console.log(this)
    }

    getCode(){
        return this.code;
    }

    getCip(){
        return this.cip7;
    }

    getCis(_database: DatabaseProvider){
        let sql = "select CIS, CIP7, LIBELLE_PRESENTATION FROM CIS_CIP_BDPM where cip7 = ?";
        return _database.execute(sql, [this.cip7]).then(e => {
          return e.rows.item(0);
        })
    }

    getMedicament(){

    }

    getLotNumber(){
        return this.lotnumber;
    }

    getExpiration(){
        return this.expiration;
    }

    getPrefix(){
        return this.prefix;
    }
}