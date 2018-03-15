import { CodeParser } from './code.parser'
export {CodeParser}
export class DatamatrixMedicamentData{
    private expiration;
    private cip7: string;
    private cip9: string;
    private cip13: string;
    private prefix: string;
    private lotnumber;

    constructor(code: string){
        var result = new CodeParser().parse(code);
        this.cip13 = result["01"][0].toString();
        this.cip9 = this.cip13.substr(-9)
        this.cip7 = this.cip9.substr(1, 7)
        this.prefix = parseInt(this.cip13.substr(0, this.cip13.indexOf(this.cip9))).toString();
        this.lotnumber = result["10"][0];
        this.expiration = result["17"][0];
        console.log(this)
    }

    getCip(){
        return this.cip7;
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