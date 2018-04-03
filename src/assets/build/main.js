webpackJsonp([0],{

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ajouter-medicament/ajouter-medicament.module": [
		212
	],
	"../pages/ajouter-modal/ajouter-modal.module": [
		430
	],
	"../pages/medicament/medicament.module": [
		431
	],
	"../pages/one-bording/one-bording.module": [
		432
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 211;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterMedicamentPageModule", function() { return AjouterMedicamentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajouter_medicament__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AjouterMedicamentPageModule = (function () {
    function AjouterMedicamentPageModule() {
    }
    AjouterMedicamentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ajouter_medicament__["a" /* AjouterMedicamentPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ajouter_medicament__["a" /* AjouterMedicamentPage */]),
            ],
        })
    ], AjouterMedicamentPageModule);
    return AjouterMedicamentPageModule;
}());

//# sourceMappingURL=ajouter-medicament.module.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjouterMedicamentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ajouter_modal_ajouter_modal__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AjouterMedicamentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjouterMedicamentPage = (function () {
    // constructor(public navCtrl: NavController, public navParams: NavParams, private database: DatabaseProvider) {
    function AjouterMedicamentPage(viewCtrl, modalCtrl, navCtrl, navParams, database) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.searchText = "";
    }
    AjouterMedicamentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjouterMedicamentPage');
    };
    AjouterMedicamentPage.prototype.add = function (object) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__ajouter_modal_ajouter_modal__["a" /* AjouterModalPage */], { params: object });
        profileModal.present();
    };
    AjouterMedicamentPage.prototype.search = function () {
        // this.results = [
        //   {DENOMINATION: "Doliprane Doliprane Doliprane Doliprane Doliprane Doliprane", LIBELLE_PRESENTATION: "doli 1"},
        //   {DENOMINATION: "Doliprane", LIBELLE_PRESENTATION: "doli 2"}
        // ]
        var _this = this;
        this.database.execute("select CIS_BDPM.CIS, CIP7 as CIP, DENOMINATION, LIBELLE_PRESENTATION from CIS_BDPM inner join CIS_CIP_BDPM on CIS_BDPM.CIS = CIS_CIP_BDPM.CIS where DENOMINATION like ? limit 0, 50", ["%" + this.searchText.split(" ").join("%") + "%"]).then(function (e) {
            _this.results = new Array();
            for (var i = 0; i < e.rows.length; i++) {
                _this.results.push(e.rows.item(i));
            }
        }).catch(function (e) {
            console.log(e);
        });
    };
    AjouterMedicamentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ajouter-medicament',template:/*ion-inline-start:"/Users/zakaria/Documents/IonicTest/src/pages/ajouter-medicament/ajouter-medicament.html"*/'\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n      Ajouter un médicaments\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-searchbar [(ngModel)]="searchText" (ionInput)="search($event)" animated=true autocomplete=true placeholder="Rechercher.."></ion-searchbar>  \n \n  <ion-scroll style="width:100%;height:80%" scrollY="true">\n    <ion-col scroll="true">\n      <ion-item *ngFor="let medicament of results">\n        <div class="item-content">\n\n              <h2><strong>{{ medicament.DENOMINATION }}</strong></h2>\n              <h3> <small>{{ medicament.LIBELLE_PRESENTATION }}</small></h3>              \n \n            <button (click)="add(medicament)" style="width:100%" color="primary" ion-button item-end icon-left>\n              <ion-icon name="plus"></ion-icon>\n              Ajoutez ce médicament à ma liste \n            </button>\n        </div>\n      </ion-item>\n    </ion-col>\n  </ion-scroll>\n \n  \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/zakaria/Documents/IonicTest/src/pages/ajouter-medicament/ajouter-medicament.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], AjouterMedicamentPage);
    return AjouterMedicamentPage;
}());

//# sourceMappingURL=ajouter-medicament.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjouterModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_medicament__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_medicament_medicament__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AjouterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AjouterModalPage = (function () {
    function AjouterModalPage(viewCtrl, navCtrl, navParams, database) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.database = database;
    }
    AjouterModalPage.prototype.afficher = function (med) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_medicament_medicament__["a" /* MedicamentPage */], { medicament: med });
    };
    AjouterModalPage.prototype.add = function () {
        var _this = this;
        var date = __WEBPACK_IMPORTED_MODULE_2_moment__(this.expiration_date).format("DD/MM/YYYY");
        var params = this.navParams.get("params");
        var medicament = new __WEBPACK_IMPORTED_MODULE_4__app_models_medicament__["a" /* Medicament */]();
        medicament.setExpiration(date);
        medicament.setCip(params.CIP);
        medicament.setCis(params.CIS);
        medicament.setDatabase(this.database);
        medicament.create().then(function (e) {
            _this.afficher(e);
        }).catch(function (e) { return console.log(e); });
    };
    AjouterModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AjouterModalPage');
    };
    AjouterModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ajouter-modal',template:/*ion-inline-start:"/Users/zakaria/Documents/IonicTest/src/pages/ajouter-modal/ajouter-modal.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n        <button style="color:white;" ion-button icon-only (click)="viewCtrl.dismiss()">\n            <ion-icon name="arrow-back"></ion-icon>\n        </button>\n    </ion-buttons>\n\n    <ion-title>\n      Date d\'expiration\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n   <div style="margin: 30px 0;">\n      <ion-item>\n        <ion-label>Date (*): </ion-label>\n        <ion-datetime placeholder="Date d\'expiration requis" displayFormat="DD-MM-YYYY" min="2018-05-01" max="2100-01-01" [(ngModel)]="expiration_date"></ion-datetime>\n      </ion-item>      \n    </div>\n\n\n\n  <button style="width:100%" color="primary" [disabled]="!expiration_date" ion-button item-end icon-left (click)="add()">\n    <ion-icon name="plus"></ion-icon>\n    Ajoutez ce médicament à ma liste\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/zakaria/Documents/IonicTest/src/pages/ajouter-modal/ajouter-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], AjouterModalPage);
    return AjouterModalPage;
}());

//# sourceMappingURL=ajouter-modal.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Medicament; });
var Medicament = (function () {
    function Medicament(parser) {
        if (parser === void 0) { parser = null; }
        this.format = "";
        this.scanned_text = null;
        if (parser != null) {
            this.setCip(parser.getCip());
            this.setExpiration(parser.getExpiration().format("DD/MM/YYYY"));
        }
    }
    Medicament.prototype.setExpiration = function (date) {
        this.date_expiration = date;
    };
    Medicament.prototype.setCip = function (cip) {
        this.cip = cip;
    };
    Medicament.prototype.setCis = function (cis) {
        this.cis = cis;
    };
    Medicament.prototype.setDatabase = function (database) {
        this.database = database;
    };
    Medicament.prototype.setScannedText = function (text) {
        this.scanned_text = text;
    };
    Medicament.prototype.insertMedicament = function (cis, cip, expiration, scanned_text) {
        if (scanned_text === void 0) { scanned_text = null; }
        var sql = "insert into medicaments (cis ,cip ,date_expiration ,nombre ,scanned_code) values (?, ?, ?, ?, ?) ";
        return this.database.execute(sql, [cis, cip, expiration, 1, scanned_text]).then(function (e) {
            // var  localNotifications = new LocalNotifications();
            // localNotifications.schedule({
            //   id: 1,
            //   text: "Médicaments sera expirés procahinement",
            //   at: new Date(new Date().getTime() + 5000)
            // })
            return { id: e.insertId, is_new: true };
        });
    };
    Medicament.prototype.update = function (id, nombre, scanned_text) {
        if (scanned_text === void 0) { scanned_text = null; }
        var sql = "update medicaments set nombre = ?, scanned_code=? where id = ?";
        return this.database.execute(sql, [nombre, scanned_text, id]).then(function (e) {
            return { id: id, is_new: false };
        });
    };
    Medicament.prototype.getData = function () {
        var sql = "select CIS from CIS_BDPM inner join CIS_CIP_BDPM on CIS_BDPM.CIS = CIS_CIP_BDPM.CIS where CIP7 = ? ";
        return this.database.execute(sql, [this.cip]).then(function (e) { return e.rows.item(0).CIS; });
    };
    Medicament.prototype.find = function (cis, cip, expiration) {
        this.database.execute("select * from medicaments", {}).then(function (e) {
            for (var i = 0; i < e.rows.length; i++) {
                console.log(e.rows.item(i));
            }
        });
        var sql = "select id, cis ,cip ,date_expiration ,nombre ,scanned_code from medicaments where cis = ? and cip = ? and date_expiration = ?";
        return this.database.execute(sql, [cis, cip, expiration]).then(function (e) {
            if (e.rows.item(0))
                return e.rows.item(0);
            else
                return false;
        }).catch(function () { return false; });
    };
    // public create(){
    //   return this.create(this.cis, this.cip, this.expiration)
    // }
    Medicament.prototype.create = function () {
        var _this = this;
        return this.find(this.cis, this.cip, this.date_expiration)
            .then(function (e) {
            if (e != false) {
                return _this.update(e.id, e.nombre + 1, _this.scanned_text);
            }
            else {
                return _this.insertMedicament(_this.cis, _this.cip, _this.date_expiration, _this.scanned_text);
            }
        })
            .catch(function (e) { console.log(e); });
        // var sql = "select CIS from CIS_BDPM inner join CIS_CIP_BDPM on CIS_BDPM.CIS = CIS_CIP_BDPM.CIS where CIP7 = ? ";
        // return this.database.execute(sql, [this.cip]).then( e => { return e.rows.item(0).CIS; }).then()
    };
    return Medicament;
}());

//# sourceMappingURL=medicament.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjouterModalPageModule", function() { return AjouterModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajouter_modal__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AjouterModalPageModule = (function () {
    function AjouterModalPageModule() {
    }
    AjouterModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ajouter_modal__["a" /* AjouterModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ajouter_modal__["a" /* AjouterModalPage */]),
            ],
        })
    ], AjouterModalPageModule);
    return AjouterModalPageModule;
}());

//# sourceMappingURL=ajouter-modal.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicamentPageModule", function() { return MedicamentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medicament__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MedicamentPageModule = (function () {
    function MedicamentPageModule() {
    }
    MedicamentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__medicament__["a" /* MedicamentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__medicament__["a" /* MedicamentPage */]),
            ],
        })
    ], MedicamentPageModule);
    return MedicamentPageModule;
}());

//# sourceMappingURL=medicament.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneBordingPageModule", function() { return OneBordingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__one_bording__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OneBordingPageModule = (function () {
    function OneBordingPageModule() {
    }
    OneBordingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__one_bording__["a" /* OneBordingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__one_bording__["a" /* OneBordingPage */]),
            ],
        })
    ], OneBordingPageModule);
    return OneBordingPageModule;
}());

//# sourceMappingURL=one-bording.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneBordingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medikit_medikit__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the OneBordingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OneBordingPage = (function () {
    function OneBordingPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.skipMsg = "Skip";
    }
    OneBordingPage.prototype.skip = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__medikit_medikit__["a" /* MedikitPage */]);
    };
    OneBordingPage.prototype.slideChanged = function () {
        if (this.slides.isEnd())
            this.skipMsg = "Alright, I got it";
    };
    OneBordingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OneBordingPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], OneBordingPage.prototype, "slides", void 0);
    OneBordingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-one-bording',template:/*ion-inline-start:"/Users/zakaria/Documents/IonicTest/src/pages/one-bording/one-bording.html"*/'<ion-content>\n  <ion-slides padding pager >\n          <ion-slide >\n            <ion-img width="300" height="300" src=\'/assets/imgs/zak2.png\' style="background: none;"></ion-img>\n   \n           <div>\n              <h2>Scanner QR Code</h2>\n              <p>Vous pouvez chercher votre médicaments grace au smart QR Code Scanner facilement.</p>\n            </div>\n          </ion-slide>\n\n          <ion-slide >\n            <ion-img width="300" height="300" src=\'/assets/imgs/zak3.png\' style="background: none;"></ion-img>\n   \n           <div>\n              <h2>Scanner QR Code</h2>\n              <p>Vous pouvez chercher votre médicaments grace au smart QR Code Scanner facilement.</p>\n            </div>\n          </ion-slide>\n      \n          <ion-slide>\n             \n            <ion-img width="300" height="300" src=\'/assets/imgs/zak4.png\' style="background: none;"></ion-img>\n   \n            <div>\n              <h2>Coordonnés</h2>\n              <p>Avoir tout les coordonnés de médicament scanné avec la date d\'éxpiration.</p>\n              <button (click)="skip()" ion-button large color="primary" id="skip"> J\'ai compris </button>\n\n            </div>\n          </ion-slide>\n\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/zakaria/Documents/IonicTest/src/pages/one-bording/one-bording.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], OneBordingPage);
    return OneBordingPage;
}());

//# sourceMappingURL=one-bording.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';






/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = (function () {
    function DatabaseProvider(http, storage, sqlite, platform) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.sqlite = sqlite;
        this.platform = platform;
        this.databaseReady = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"](false);
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'medicaments',
                location: 'default'
            })
                .then(function (db) {
                _this.database = db;
                _this.storage.get('database_filled').then(function (val) {
                    if (val) {
                        _this.databaseReady.next(true);
                    }
                    else {
                        _this.createTables().then(function (e) {
                            _this.gatherData().then(function (e) {
                                _this.storage.set('database_filled', true);
                                _this.databaseReady.next(true);
                            });
                        });
                    }
                });
            });
        });
    }
    DatabaseProvider.prototype.execute = function (sql, data) {
        return this.database.executeSql(sql, data);
    };
    DatabaseProvider.prototype.createTables = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var instructions = [
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
            ];
            var promises = instructions.map(function (e) {
                return _this.execute(e, {}).then(function () { return console.log('Executed SQL :D'); }).catch(function (e) { return console.log(e); });
            });
            Promise.all(promises).then(function () { return resolve(true); }).catch(function (e) { return resolve(true); });
        });
    };
    DatabaseProvider.prototype.insertData = function (name, data) {
        var _this = this;
        return new Promise(function (res, rej) {
            var keys = Object.keys(data[0]);
            var sql = "INSERT INTO " + name + "(" + keys.join(", ") + ") VALUES(" + keys.map(function (e) { return "?"; }).join(", ") + ")";
            var sqlBatch = new Array();
            sqlBatch.push(["delete from " + name + ";"]);
            data.forEach(function (e) {
                var values = keys.map(function (key) { return e[key].toString(); });
                var v = [sql, values];
                sqlBatch.push(v);
            });
            _this.database.sqlBatch(sqlBatch).then().then(function () {
                res(true);
                console.log('Executed BATCH SQL :D');
            }).catch(function (e) {
                res(true);
                console.log(e);
            });
        });
    };
    DatabaseProvider.prototype.getCompo = function () {
        return this.http.get('assets/cis_compo.json').toPromise().then(function (res) {
            return res.json();
        });
    };
    DatabaseProvider.prototype.gatherData = function () {
        var _this = this;
        return Promise.all([this.getCip(), this.getCis(), this.getCompo()]).then(function (_a) {
            var cip = _a[0], cis = _a[1], compo = _a[2];
            return _this.insertData("CIS_BDPM", cis).then(function () {
                return Promise.all([
                    _this.insertData("CIS_CIP_BDPM", cip),
                    _this.insertData("CIS_COMPOSITION_BDPM", compo)
                ]);
            });
        });
    };
    DatabaseProvider.prototype.getCis = function () {
        return this.http.get('assets/cis.json').toPromise().then(function (res) {
            return res.json();
        });
    };
    DatabaseProvider.prototype.getCip = function () {
        return this.http.get('assets/cis_cip.json').toPromise().then(function (res) {
            return res.json();
        });
    };
    DatabaseProvider.prototype.getAllDevelopers = function () {
        return this.database.executeSql("SELECT * FROM CIS_BDPM", []).then(function (data) {
            var developers = [];
            console.log(data);
            return developers;
        }, function (err) {
            console.log('Error: ', err);
            return [];
        });
    };
    DatabaseProvider.prototype.getDatabaseState = function () {
        return this.databaseReady.asObservable();
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeParser = (function () {
    function CodeParser() {
        this.gs1separator = String.fromCharCode(29);
        this.gs1definitions = [{
                "code": "00",
                "description": "Serial Shipping Container Code (SSCC)",
                "datablocks": ["18"],
                "format": "none"
            }, {
                "code": "01",
                "description:": "Global Trade Item Number (GTIN)",
                "datablocks": ["14"],
                "format": "none"
            }, {
                "code": "02",
                "description:": "GTIN of Contained Trade Items",
                "datablocks": ["14"],
                "format": "none"
            }, {
                "code": "10",
                "description:": "Batch/Lot Number",
                "datablocks": ["...20"],
                "format": "none"
            }, {
                "code": "11",
                "description:": "Production Date",
                "datablocks": ["6"],
                "format": "none"
            }, {
                "code": "12",
                "description:": "Due Date",
                "datablocks": ["6"],
                "format": "none"
            }, {
                "code": "13",
                "description:": "Packaging Date",
                "datablocks": ["6"],
                "format": "none"
            }, {
                "code": "15",
                "description:": "Best Before Date (YYMMDD)",
                "datablocks": ["6"],
                "format": "none"
            }, {
                "code": "17",
                "description:": "Expiration Date",
                "datablocks": ["6"],
                "format": "date"
            }, {
                "code": "20",
                "description:": "Product Variant",
                "datablocks": ["2"],
                "format": "none"
            }, {
                "code": "21",
                "description:": "Serial Number",
                "datablocks": ["...20"],
                "format": "none"
            }, {
                "code": "22",
                "description:": "Secondary Data Fields",
                "datablocks": ["...29"],
                "format": "none"
            }, {
                "code": "23n",
                "description:": "Lot number n",
                "datablocks": ["...19"],
                "format": "none"
            }, {
                "code": "240",
                "description:": "Additional Product Identification",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "241",
                "description:": "Customer Part Number",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "242",
                "description:": "Made-to-Order Variation Number",
                "datablocks": ["...6"],
                "format": "none"
            }, {
                "code": "250",
                "description:": "Secondary Serial Number",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "251",
                "description:": "Reference to Source Entity",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "253",
                "description:": "Global Document Type Identifier",
                "datablocks": ["13", "...17"],
                "format": "none"
            }, {
                "code": "254",
                "description:": "GLN Extension Component",
                "datablocks": ["...20"],
                "format": "none"
            }, {
                "code": "255",
                "description:": "Global Coupon Number (GCN)",
                "datablocks": ["13", "...25"],
                "format": "none"
            }, {
                "code": "30",
                "description:": "Count of items",
                "datablocks": ["...8"],
                "format": "none"
            }, {
                "code": "310",
                "description:": "Product Net Weight in kg",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "311",
                "description:": "Product Length/1st Dimension, in meters",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "312",
                "description:": "Product Width/Diameter/2nd Dimension, in meters",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "313",
                "description:": "Product Depth/Thickness/Height/3rd Dimension, in meters",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "314",
                "description:": "Product Area, in square meters",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "315",
                "description:": "Product Net Volume, in liters",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "316",
                "description:": "Product Net Volume, in cubic meters",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "320",
                "description:": "Product Net Weight, in pounds",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "321",
                "description:": "Product Length/1st Dimension, in inches",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "322",
                "description:": "Product Length/1st Dimension, in feet",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "323",
                "description:": "Product Length/1st Dimension, in yards",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "324",
                "description:": "Product Width/Diameter/2nd Dimension, in inches",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "325",
                "description:": "Product Width/Diameter/2nd Dimension, in feet",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "326",
                "description:": "Product Width/Diameter/2nd Dimension, in yards",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "327",
                "description:": "Product Depth/Thickness/Height/3rd Dimension, in inches",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "328",
                "description:": "Product Depth/Thickness/Height/3rd Dimension, in feet",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "329",
                "description:": "Product Depth/Thickness/3rd Dimension, in yards",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "330",
                "description:": "Container Gross Weight (kg)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "331",
                "description:": "Container Length/1st Dimension (Meters)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "332",
                "description:": "Container Width/Diameter/2nd Dimension (Meters)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "333",
                "description:": "Container Depth/Thickness/3rd Dimension (Meters)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "334",
                "description:": "Container Area (Square Meters)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "335",
                "description:": "Container Gross Volume (Liters)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "336",
                "description:": "Container Gross Volume (Cubic Meters)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "340",
                "description:": "Container Gross Weight (Pounds)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "341",
                "description:": "Container Length/1st Dimension, in inches",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "342",
                "description:": "Container Length/1st Dimension, in feet",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "343",
                "description:": "Container Length/1st Dimension in, in yards",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "344",
                "description:": "Container Width/Diameter/2nd Dimension, in inches",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "345",
                "description:": "Container Width/Diameter/2nd Dimension, in feet",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "346",
                "description:": "Container Width/Diameter/2nd Dimension, in yards",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "347",
                "description:": "Container Depth/Thickness/Height/3rd Dimension, in inches",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "348",
                "description:": "Container Depth/Thickness/Height/3rd Dimension, in feet",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "349",
                "description:": "Container Depth/Thickness/Height/3rd Dimension, in yards",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "350",
                "description:": "Product Area (Square Inches)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "351",
                "description:": "Product Area (Square Feet)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "352",
                "description:": "Product Area (Square Yards)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "353",
                "description:": "Container Area (Square Inches)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "354",
                "description:": "Container Area (Square Feet)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "355",
                "description:": "Container Area (Square Yards)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "356",
                "description:": "Net Weight (Troy Ounces)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "357",
                "description:": "Net Weight/Volume (Ounces)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "360",
                "description:": "Product Volume (Quarts)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "361",
                "description:": "Product Volume (Gallons)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "362",
                "description:": "Container Gross Volume (Quarts)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "363",
                "description:": "Container Gross Volume (U.S. Gallons)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "364",
                "description:": "Product Volume (Cubic Inches)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "365",
                "description:": "Product Volume (Cubic Feet)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "366",
                "description:": "Product Volume (Cubic Yards)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "367",
                "description:": "Container Gross Volume (Cubic Inches)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "368",
                "description:": "Container Gross Volume (Cubic Feet)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "369",
                "description:": "Container Gross Volume (Cubic Yards)",
                "datablocks": ["1", "6"],
                "format": "comma"
            }, {
                "code": "37",
                "description:": "Number of Units Contained",
                "datablocks": ["...8"],
                "format": "none"
            }, {
                "code": "390",
                "description:": "Amount payable (local currency)",
                "datablocks": ["1", "...15"],
                "format": "currency"
            }, {
                "code": "391",
                "description:": "Amount payable (with ISO currency code)",
                "datablocks": ["1", "3", "...18"],
                "format": "isocurrency"
            }, {
                "code": "392",
                "description:": "Amount payable per single item (local currency)",
                "datablocks": ["1", "...15"],
                "format": "currency"
            }, {
                "code": "393",
                "description:": "Amount payable per single item (with ISO currency code)",
                "datablocks": ["1", "3", "...18"],
                "format": "isocurrency"
            }, {
                "code": "400",
                "description:": "Customer Purchase Order Number",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "401",
                "description:": "Consignment Number",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "402",
                "description:": "Bill of Lading number",
                "datablocks": ["17"],
                "format": "none"
            }, {
                "code": "403",
                "description:": "Routing code",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "410",
                "description:": "Ship To/Deliver To Location Code (Global Location Number)",
                "datablocks": ["13"],
                "format": "none"
            }, {
                "code": "411",
                "description:": "Bill To/Invoice Location Code (Global Location Number)",
                "datablocks": ["13"],
                "format": "none"
            }, {
                "code": "412",
                "description:": "Purchase From Location Code (Global Location Number)",
                "datablocks": ["13"],
                "format": "none"
            }, {
                "code": "413",
                "description:": "Ship for, Deliver for, or Forward to Location Code (Global Location Number)",
                "datablocks": ["13"],
                "format": "none"
            }, {
                "code": "414",
                "description:": "Identification of a physical location (Global Location Number)",
                "datablocks": ["13"],
                "format": "none"
            }, {
                "code": "420",
                "description:": "Ship To/Deliver To Postal Code (Single Postal Authority)",
                "datablocks": ["...20"],
                "format": "none"
            }, {
                "code": "421",
                "description:": "Ship To/Deliver To Postal Code (with ISO country code)",
                "datablocks": ["3", "...15"],
                "format": "none"
            }, {
                "code": "422",
                "description:": "Country of Origin (ISO country code)",
                "datablocks": ["3"],
                "format": "none"
            }, {
                "code": "423",
                "description:": "Country or countries of initial processing",
                "datablocks": ["3", "...15"],
                "format": "none"
            }, {
                "code": "424",
                "description:": "Country of processing",
                "datablocks": ["3"],
                "format": "none"
            }, {
                "code": "425",
                "description:": "Country of disassembly",
                "datablocks": ["3"],
                "format": "none"
            }, {
                "code": "426",
                "description:": "Country of full process chain",
                "datablocks": ["3"],
                "format": "none"
            }, {
                "code": "7001",
                "description:": "NATO Stock Number (NSN)",
                "datablocks": ["13"],
                "format": "none"
            }, {
                "code": "7002",
                "description:": "UN/ECE Meat Carcasses and cuts classification",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "7003",
                "description:": "expiration date and time",
                "datablocks": ["10"],
                "format": "none"
            }, {
                "code": "7004",
                "description:": "Active Potency",
                "datablocks": ["...4"],
                "format": "none"
            }, {
                "code": "703",
                "description:": "Processor approval (with ISO country code); n indicates sequence number of several processors",
                "datablocks": ["1", "3", "...30"],
                "format": "comma"
            }, {
                "code": "8001",
                "description:": "Roll Products: Width/Length/Core Diameter/Direction/Splices",
                "datablocks": ["14"],
                "format": "none"
            }, {
                "code": "8002",
                "description:": "Mobile phone identifier",
                "datablocks": ["...20"],
                "format": "none"
            }, {
                "code": "8003",
                "description:": "Global Returnable Asset Identifier",
                "datablocks": ["14", "...30"],
                "format": "none"
            }, {
                "code": "8004",
                "description:": "Global Individual Asset Identifier",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "8005",
                "description:": "Price per Unit of Measure",
                "datablocks": ["6"],
                "format": "none"
            }, {
                "code": "8006",
                "description:": "identification of the components of an item",
                "datablocks": ["18"],
                "format": "none"
            }, {
                "code": "8007",
                "description:": "International Bank Account Number",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "8008",
                "description:": "Date/time of production",
                "datablocks": ["7", "...12"],
                "format": "datetime"
            }, {
                "code": "8018",
                "description:": "Global Service Relation Number",
                "datablocks": ["18"],
                "format": "none"
            }, {
                "code": "8020",
                "description:": "Payment slip reference number",
                "datablocks": ["...25"],
                "format": "none"
            }, {
                "code": "8100",
                "description:": "Coupon Extended Code: Number System and Offer",
                "datablocks": ["6"],
                "format": "none"
            }, {
                "code": "8101",
                "description:": "Coupon Extended Code: Number System, Offer, End of Offer",
                "datablocks": ["10"],
                "format": "none"
            }, {
                "code": "8102",
                "description:": "Coupon Extended Code: Number System preceded by 0",
                "datablocks": ["2"],
                "format": "none"
            }, {
                "code": "8110",
                "description:": "Coupon code ID (North America)",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "8200",
                "description:": "Extended Packaging URL",
                "datablocks": ["...70"],
                "format": "none"
            }, {
                "code": "90",
                "description:": "Mutually Agreed Between Trading Partners",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "91",
                "description:": "Internal Company Codes",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "92",
                "description:": "Internal Company Codes",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "93",
                "description:": "Internal Company Codes",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "94",
                "description:": "Internal Company Codes",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "95",
                "description:": "Internal Company Codes",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "96",
                "description:": "Internal Company Codes",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "97",
                "description:": "Internal Company Codes",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "98",
                "description:": "Internal Company Codes",
                "datablocks": ["...30"],
                "format": "none"
            }, {
                "code": "99",
                "description:": "Internal Company Codes",
                "datablocks": ["...30"],
                "format": "none"
            }];
    }
    CodeParser.prototype.parse = function (code) {
        return this.barcodeToAiList(code);
    };
    CodeParser.prototype.findAiInList = function (barcode, curpos) {
        // Find AI
        var aicount = this.gs1definitions.length;
        var aidefinition = null;
        for (var i = 0; i < aicount; i++) {
            var aidefinitiontemp = this.gs1definitions[i];
            var aistring = barcode.substring(curpos, (curpos + aidefinitiontemp.code.length));
            if (aistring == aidefinitiontemp.code) {
                aidefinition = aidefinitiontemp;
                break;
            }
        }
        return aidefinition;
    };
    CodeParser.prototype.barcodeToAiList = function (barcode) {
        // Var preparation
        var result = [];
        var curpos = 0;
        var barcodelength;
        // PERFORMANCE
        barcodelength = barcode.length;
        // loop until barcode length equal or smaller "curpos"
        while (barcodelength > curpos) {
            // Remove FNC1 value - scrap from prior barcode element
            if (barcode.substring(curpos, (curpos + 1)) == this.gs1separator) {
                curpos = curpos + 1;
            }
            // Find AI definition
            var aidefinition = this.findAiInList(barcode, curpos);
            // Extract value along AI definition when found
            if (aidefinition != null) {
                // Jump over identifier
                curpos = curpos + aidefinition.code.length;
                // Split data
                var aidatablockcount = aidefinition.datablocks.length;
                var listOfValues = [];
                for (var x = 0; x < aidatablockcount; x++) {
                    var aidatablock = aidefinition.datablocks[x];
                    var returnValue = this.barcodeExtractor(barcode, curpos, aidatablock);
                    listOfValues[x] = returnValue[0];
                    curpos = returnValue[1];
                }
                this.valueFormatting(aidefinition, listOfValues);
                // Write values to key list
                if (listOfValues.length > 0) {
                    result[aidefinition.code] = listOfValues;
                }
            }
            else {
                var outputString = "Argument must be a valid GS1-Datamatrix barcode, failed at position " + curpos;
                result = null;
                throw new Error(outputString);
            }
        }
        return result;
    };
    CodeParser.prototype.valueFormatting = function (aidefinition, listOfValues) {
        // format values
        switch (aidefinition.format) {
            case "none":
                // no formatting requiered
                break;
            case "currency":
            case "comma":
                var commaKey = null;
                for (var key in listOfValues) {
                    if (commaKey == null) {
                        commaKey = key;
                    }
                    else {
                        listOfValues[key] = Number(listOfValues[key]) / Math.pow(10, Number(listOfValues[commaKey])); // move value to correct decimal point
                    }
                }
                // remove helper position
                listOfValues.splice(0, 1);
                break;
            case "date"://YYMMDD
                for (var key in listOfValues) {
                    var year = "20" + listOfValues[key].substring(0, 2);
                    var month = listOfValues[key].substring(2, 4);
                    var day = listOfValues[key].substring(4, 6);
                    listOfValues[key] = __WEBPACK_IMPORTED_MODULE_0_moment__(new Date(year + "/" + month + "/" + day)); // move value to correct decimal point
                }
                break;
            case "datetime":
                for (var key in listOfValues) {
                    var year = "20" + listOfValues[key].substring(0, 2);
                    var month = listOfValues[key].substring(2, 4);
                    var day = listOfValues[key].substring(4, 6);
                    listOfValues[key] = new Date(year + "/" + month + "/" + day); // move value to correct decimal point
                }
                break;
            case "isocurrency":
                var commaKey = null;
                var isoKey = null;
                for (var key in listOfValues) {
                    if (commaKey == null) {
                        commaKey = key;
                    }
                    else if (isoKey == null) {
                        isoKey = key;
                    }
                    else {
                        listOfValues[key] = Number(listOfValues[key]) / Math.pow(10, Number(listOfValues[commaKey])); // move value to correct decimal point
                    }
                }
                // remove helper position
                listOfValues.splice(0, 1);
                break;
            default:
                console.log("Wrong format? " + aidefinition.format);
                break;
        }
    };
    CodeParser.prototype.barcodeExtractor = function (barcode, curpos, aidatablock) {
        // Prepare const
        var dynamicmarker = '...';
        // Prepare values
        var barcodelength = barcode.length;
        var result = null;
        var aidatalength = 0;
        // Check if dynamic range or static
        // --> YES == dynamic
        if (aidatablock.indexOf(dynamicmarker) != -1) {
            // extract max length
            var aidatablockvalue = Number(aidatablock.substring(dynamicmarker.length));
            var aidatalengthtemp = 0;
            // rest of string length
            // If yes more data is coming: prevent error in case of dynamic not finished ai at the end
            if ((barcodelength - curpos - aidatablockvalue) > 0) {
                aidatalengthtemp = aidatablockvalue;
            }
            else {
                // just take all available data
                aidatalengthtemp = barcode.substring(curpos).length;
            }
            // Check for seperator
            var aidgs1seperatorpos = barcode.substring(curpos, (curpos + aidatalengthtemp)).indexOf(this.gs1separator, 0);
            // Check if 'gsiseperator' is set in range of definition, otherwise take static length
            if (aidgs1seperatorpos != -1) {
                aidatalength = aidgs1seperatorpos;
            }
            else {
                aidatalength = aidatalengthtemp;
            }
        }
        else {
            // get fixed value
            aidatalength = Number(aidatablock);
        }
        // Extract value and save to result
        result = barcode.substring(curpos, (curpos + aidatalength));
        // Set next position
        curpos = curpos + aidatalength;
        return [result, curpos];
    };
    CodeParser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CodeParser);
    return CodeParser;
}());

//# sourceMappingURL=code.parser.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(483);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_database_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__code_parser__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ajouter_medicament_ajouter_medicament_module__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_medikit_medikit_module__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_medicament_medicament_module__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_one_bording_one_bording_module__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ajouter_modal_ajouter_modal_module__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__pages_ajouter_medicament_ajouter_medicament_module__["AjouterMedicamentPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_medikit_medikit_module__["a" /* MedikitPageModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_medicament_medicament_module__["MedicamentPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_one_bording_one_bording_module__["OneBordingPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_ajouter_modal_ajouter_modal_module__["AjouterModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ajouter-medicament/ajouter-medicament.module#AjouterMedicamentPageModule', name: 'AjouterMedicamentPage', segment: 'ajouter-medicament', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ajouter-modal/ajouter-modal.module#AjouterModalPageModule', name: 'AjouterModalPage', segment: 'ajouter-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medicament/medicament.module#MedicamentPageModule', name: 'MedicamentPage', segment: 'medicament', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/one-bording/one-bording.module#OneBordingPageModule', name: 'OneBordingPage', segment: 'one-bording', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__code_parser__["a" /* CodeParser */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__providers_database_database__["a" /* DatabaseProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 310,
	"./af.js": 310,
	"./ar": 311,
	"./ar-dz": 312,
	"./ar-dz.js": 312,
	"./ar-kw": 313,
	"./ar-kw.js": 313,
	"./ar-ly": 314,
	"./ar-ly.js": 314,
	"./ar-ma": 315,
	"./ar-ma.js": 315,
	"./ar-sa": 316,
	"./ar-sa.js": 316,
	"./ar-tn": 317,
	"./ar-tn.js": 317,
	"./ar.js": 311,
	"./az": 318,
	"./az.js": 318,
	"./be": 319,
	"./be.js": 319,
	"./bg": 320,
	"./bg.js": 320,
	"./bm": 321,
	"./bm.js": 321,
	"./bn": 322,
	"./bn.js": 322,
	"./bo": 323,
	"./bo.js": 323,
	"./br": 324,
	"./br.js": 324,
	"./bs": 325,
	"./bs.js": 325,
	"./ca": 326,
	"./ca.js": 326,
	"./cs": 327,
	"./cs.js": 327,
	"./cv": 328,
	"./cv.js": 328,
	"./cy": 329,
	"./cy.js": 329,
	"./da": 330,
	"./da.js": 330,
	"./de": 331,
	"./de-at": 332,
	"./de-at.js": 332,
	"./de-ch": 333,
	"./de-ch.js": 333,
	"./de.js": 331,
	"./dv": 334,
	"./dv.js": 334,
	"./el": 335,
	"./el.js": 335,
	"./en-au": 336,
	"./en-au.js": 336,
	"./en-ca": 337,
	"./en-ca.js": 337,
	"./en-gb": 338,
	"./en-gb.js": 338,
	"./en-ie": 339,
	"./en-ie.js": 339,
	"./en-nz": 340,
	"./en-nz.js": 340,
	"./eo": 341,
	"./eo.js": 341,
	"./es": 342,
	"./es-do": 343,
	"./es-do.js": 343,
	"./es-us": 344,
	"./es-us.js": 344,
	"./es.js": 342,
	"./et": 345,
	"./et.js": 345,
	"./eu": 346,
	"./eu.js": 346,
	"./fa": 347,
	"./fa.js": 347,
	"./fi": 348,
	"./fi.js": 348,
	"./fo": 349,
	"./fo.js": 349,
	"./fr": 350,
	"./fr-ca": 351,
	"./fr-ca.js": 351,
	"./fr-ch": 352,
	"./fr-ch.js": 352,
	"./fr.js": 350,
	"./fy": 353,
	"./fy.js": 353,
	"./gd": 354,
	"./gd.js": 354,
	"./gl": 355,
	"./gl.js": 355,
	"./gom-latn": 356,
	"./gom-latn.js": 356,
	"./gu": 357,
	"./gu.js": 357,
	"./he": 358,
	"./he.js": 358,
	"./hi": 359,
	"./hi.js": 359,
	"./hr": 360,
	"./hr.js": 360,
	"./hu": 361,
	"./hu.js": 361,
	"./hy-am": 362,
	"./hy-am.js": 362,
	"./id": 363,
	"./id.js": 363,
	"./is": 364,
	"./is.js": 364,
	"./it": 365,
	"./it.js": 365,
	"./ja": 366,
	"./ja.js": 366,
	"./jv": 367,
	"./jv.js": 367,
	"./ka": 368,
	"./ka.js": 368,
	"./kk": 369,
	"./kk.js": 369,
	"./km": 370,
	"./km.js": 370,
	"./kn": 371,
	"./kn.js": 371,
	"./ko": 372,
	"./ko.js": 372,
	"./ky": 373,
	"./ky.js": 373,
	"./lb": 374,
	"./lb.js": 374,
	"./lo": 375,
	"./lo.js": 375,
	"./lt": 376,
	"./lt.js": 376,
	"./lv": 377,
	"./lv.js": 377,
	"./me": 378,
	"./me.js": 378,
	"./mi": 379,
	"./mi.js": 379,
	"./mk": 380,
	"./mk.js": 380,
	"./ml": 381,
	"./ml.js": 381,
	"./mr": 382,
	"./mr.js": 382,
	"./ms": 383,
	"./ms-my": 384,
	"./ms-my.js": 384,
	"./ms.js": 383,
	"./mt": 385,
	"./mt.js": 385,
	"./my": 386,
	"./my.js": 386,
	"./nb": 387,
	"./nb.js": 387,
	"./ne": 388,
	"./ne.js": 388,
	"./nl": 389,
	"./nl-be": 390,
	"./nl-be.js": 390,
	"./nl.js": 389,
	"./nn": 391,
	"./nn.js": 391,
	"./pa-in": 392,
	"./pa-in.js": 392,
	"./pl": 393,
	"./pl.js": 393,
	"./pt": 394,
	"./pt-br": 395,
	"./pt-br.js": 395,
	"./pt.js": 394,
	"./ro": 396,
	"./ro.js": 396,
	"./ru": 397,
	"./ru.js": 397,
	"./sd": 398,
	"./sd.js": 398,
	"./se": 399,
	"./se.js": 399,
	"./si": 400,
	"./si.js": 400,
	"./sk": 401,
	"./sk.js": 401,
	"./sl": 402,
	"./sl.js": 402,
	"./sq": 403,
	"./sq.js": 403,
	"./sr": 404,
	"./sr-cyrl": 405,
	"./sr-cyrl.js": 405,
	"./sr.js": 404,
	"./ss": 406,
	"./ss.js": 406,
	"./sv": 407,
	"./sv.js": 407,
	"./sw": 408,
	"./sw.js": 408,
	"./ta": 409,
	"./ta.js": 409,
	"./te": 410,
	"./te.js": 410,
	"./tet": 411,
	"./tet.js": 411,
	"./th": 412,
	"./th.js": 412,
	"./tl-ph": 413,
	"./tl-ph.js": 413,
	"./tlh": 414,
	"./tlh.js": 414,
	"./tr": 415,
	"./tr.js": 415,
	"./tzl": 416,
	"./tzl.js": 416,
	"./tzm": 417,
	"./tzm-latn": 418,
	"./tzm-latn.js": 418,
	"./tzm.js": 417,
	"./uk": 419,
	"./uk.js": 419,
	"./ur": 420,
	"./ur.js": 420,
	"./uz": 421,
	"./uz-latn": 422,
	"./uz-latn.js": 422,
	"./uz.js": 421,
	"./vi": 423,
	"./vi.js": 423,
	"./x-pseudo": 424,
	"./x-pseudo.js": 424,
	"./yo": 425,
	"./yo.js": 425,
	"./zh-cn": 426,
	"./zh-cn.js": 426,
	"./zh-hk": 427,
	"./zh-hk.js": 427,
	"./zh-tw": 428,
	"./zh-tw.js": 428
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 794;

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_medikit_medikit__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_one_bording_one_bording__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(storage, platform, statusBar, splashScreen, localNotifications) {
        var _this = this;
        this.storage = storage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.storage.get('database_filled').then(function (e) {
                if (e) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_medikit_medikit__["a" /* MedikitPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_one_bording_one_bording__["a" /* OneBordingPage */];
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/zakaria/Documents/IonicTest/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/zakaria/Documents/IonicTest/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedikitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medikit__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fab_button_fab_button__ = __webpack_require__(817);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MedikitPageModule = (function () {
    function MedikitPageModule() {
    }
    MedikitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__medikit__["a" /* MedikitPage */],
                __WEBPACK_IMPORTED_MODULE_4__components_fab_button_fab_button__["a" /* FabButtonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__medikit__["a" /* MedikitPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
            ],
        })
    ], MedikitPageModule);
    return MedikitPageModule;
}());

//# sourceMappingURL=medikit.module.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flter_flter__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__flter_flter__["a" /* FlterPipe */],
                __WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPipe */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__flter_flter__["a" /* FlterPipe */], __WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPipe */]
            ],
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FlterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FlterPipe = (function () {
    function FlterPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FlterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText || searchText === "")
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            return item.name.toLowerCase().includes(searchText);
        });
    };
    FlterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'flter',
        })
    ], FlterPipe);
    return FlterPipe;
}());

//# sourceMappingURL=flter.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FilterPipe = (function () {
    function FilterPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText || searchText === "")
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) {
            return item.name.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter',
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_datamatrix_medicament_data__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_medicament__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_ajouter_medicament_ajouter_medicament__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_medicament_medicament__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the FabButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FabButtonComponent = (function () {
    function FabButtonComponent(navCtrl, diagnostic, platform, barcodescanner, database) {
        this.navCtrl = navCtrl;
        this.diagnostic = diagnostic;
        this.platform = platform;
        this.barcodescanner = barcodescanner;
        this.database = database;
    }
    FabButtonComponent.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_ajouter_medicament_ajouter_medicament__["a" /* AjouterMedicamentPage */]);
    };
    FabButtonComponent.prototype.do_scan = function () {
        var _this = this;
        this.barcodescanner.scan({ formats: "DATA_MATRIX" })
            .then(function (result) {
            var parser = new __WEBPACK_IMPORTED_MODULE_1__app_datamatrix_medicament_data__["a" /* DatamatrixMedicamentData */](result.text);
            parser.getCis(_this.database).then(function (e) {
                var medicament = new __WEBPACK_IMPORTED_MODULE_2__app_models_medicament__["a" /* Medicament */](parser);
                medicament.setExpiration(parser.getExpiration().format("DD/MM/YYYY"));
                medicament.setCip(parser.getCip());
                medicament.setCis(e.CIS);
                medicament.setDatabase(_this.database);
                medicament.setScannedText(result.text);
                medicament.create().then(function (e) { return _this.afficher(e); });
            });
        });
    };
    FabButtonComponent.prototype.requestPermissions = function () {
        var _this = this;
        return this.diagnostic.getCameraAuthorizationStatus().then(function (e) {
            return _this.diagnostic.requestCameraAuthorization().then(function (c) {
                console.log("camera 2");
            });
        }).catch(function (e) { return console.log(e); });
    };
    FabButtonComponent.prototype.afficher = function (med) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_medicament_medicament__["a" /* MedicamentPage */], { medicament: med });
    };
    FabButtonComponent.prototype.scan = function () {
        var _this = this;
        var result = { "cancelled": 0, "text": "\u001d010340094163124517200924107V170", "format": "DATA_MATRIX" };
        this.platform.ready().then(function () {
            _this.requestPermissions().then(function (e) { return _this.do_scan(); });
        });
    };
    FabButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fab-button',template:/*ion-inline-start:"/Users/zakaria/Documents/IonicTest/src/components/fab-button/fab-button.html"*/'<!-- Generated template for the FabButtonComponent component -->\n  <ion-fab bottom center >\n    <button ion-fab style="background:#607D8B;">\n        <ion-icon name="add" style="font-size: 35px;"></ion-icon>\n    </button>\n    <ion-fab-list side="left">\n      <button ion-fab color="primary" (click)="scan()"  style="background: #90A4AE;" >\n        <ion-icon name="camera"  style="font-size: 25px;"></ion-icon>\n      </button>\n\n      <button ion-fab color="primary" (click)="add()"  style="background: #90A4AE;" >\n        <ion-icon name="medkit" style="font-size: 25px;"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>'/*ion-inline-end:"/Users/zakaria/Documents/IonicTest/src/components/fab-button/fab-button.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */]])
    ], FabButtonComponent);
    return FabButtonComponent;
}());

//# sourceMappingURL=fab-button.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatamatrixMedicamentData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__code_parser__ = __webpack_require__(477);
/* unused harmony reexport CodeParser */


var DatamatrixMedicamentData = (function () {
    function DatamatrixMedicamentData(code) {
        this.code = code;
        var result = new __WEBPACK_IMPORTED_MODULE_0__code_parser__["a" /* CodeParser */]().parse(code);
        this.cip13 = result["01"][0].toString();
        this.cip9 = this.cip13.substr(-9);
        this.cip7 = this.cip9.substr(1, 7);
        this.prefix = parseInt(this.cip13.substr(0, this.cip13.indexOf(this.cip9))).toString();
        this.lotnumber = result["10"][0];
        this.expiration = result["17"][0];
        console.log(this);
    }
    DatamatrixMedicamentData.prototype.getCode = function () {
        return this.code;
    };
    DatamatrixMedicamentData.prototype.getCip = function () {
        return this.cip7;
    };
    DatamatrixMedicamentData.prototype.getCis = function (_database) {
        var sql = "select CIS, CIP7, LIBELLE_PRESENTATION FROM CIS_CIP_BDPM where cip7 = ?";
        return _database.execute(sql, [this.cip7]).then(function (e) {
            return e.rows.item(0);
        });
    };
    DatamatrixMedicamentData.prototype.getMedicament = function () {
    };
    DatamatrixMedicamentData.prototype.getLotNumber = function () {
        return this.lotnumber;
    };
    DatamatrixMedicamentData.prototype.getExpiration = function () {
        return this.expiration;
    };
    DatamatrixMedicamentData.prototype.getPrefix = function () {
        return this.prefix;
    };
    return DatamatrixMedicamentData;
}());

//# sourceMappingURL=datamatrix.medicament.data.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicamentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__medikit_medikit__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MedicamentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicamentPage = (function () {
    function MedicamentPage(navCtrl, navParams, database, toastCtrl, localNotifications) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.toastCtrl = toastCtrl;
        this.localNotifications = localNotifications;
        this.medicament = {};
        this.database.getDatabaseState().subscribe(function (e) {
            var medicament = _this.navParams.get("medicament");
            if (e) {
                // this.database.execute("select * from medicaments", {})
                _this.database.execute("select id, date_expiration, FORME_PHARMACEUTIQUE, TITULAIRES, VOIES_ADMINISTRATION, DESIGNATION_ELEMENT_PHARMA, DOSAGE_SUBSTANCE, nombre, DENOMINATION, LIBELLE_PRESENTATION from medicaments inner join CIS_BDPM inner join CIS_CIP_BDPM inner join CIS_COMPOSITION_BDPM on CIS_COMPOSITION_BDPM.CIS = medicaments.cis and medicaments.cip = CIS_CIP_BDPM.cip7 and CIS_BDPM.CIS = medicaments.cis where id = ? ", [medicament.id])
                    .then(function (k) {
                    _this.medicament = k.rows.item(0);
                    console.log(medicament);
                    if (medicament.is_new) {
                        var date = __WEBPACK_IMPORTED_MODULE_5_moment__(_this.medicament.date_expiration);
                        date.hours(23);
                        _this.presentToast();
                        setTimeout(function () {
                            _this.localNotifications.schedule({
                                id: _this.medicament.id,
                                text: _this.medicament.DENOMINATION + " sera expirés procahinement",
                                at: date.toDate()
                            });
                        }, 2000);
                    }
                    return _this.medicament;
                }).catch(function (e) {
                    console.log(e);
                });
            }
        });
    }
    MedicamentPage.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__medikit_medikit__["a" /* MedikitPage */]);
    };
    MedicamentPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Une notification programmée pour ce medicament',
            duration: 3000,
            position: 'bottom',
            cssClass: "toast-success",
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        setTimeout(function () {
            toast.present();
        }, 1000);
    };
    MedicamentPage.prototype.getMedicament = function () {
        return this.medicament;
    };
    MedicamentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicamentPage');
    };
    MedicamentPage.prototype.ionViewWillEnter = function () {
    };
    MedicamentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-medicament',template:/*ion-inline-start:"/Users/zakaria/Documents/IonicTest/src/pages/medicament/medicament.html"*/'<!--\n  Generated template for the MedicamentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton="true">\n    <ion-title> {{medicament.DENOMINATION }} </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n    <button (click)="back()" style="margin:10px;" ion-button round outline small type="">\n    <ion-icon name="arrow-back"></ion-icon> Retour\n  </button>\n\n  <ion-card color="primary"> \n    <ion-card-content><strong>Date d\'expiration</strong> {{medicament.date_expiration }}</ion-card-content> \n  </ion-card>\n\n  <ion-card> \n    <ion-card-header> Nom </ion-card-header>\n    <ion-card-content>{{medicament.DENOMINATION }}</ion-card-content> \n  </ion-card>\n\n  <ion-card> \n    <ion-card-header> Presentation: </ion-card-header>\n    <ion-card-content>{{medicament.LIBELLE_PRESENTATION }}</ion-card-content> \n  </ion-card>\n\n  <ion-card> \n    <ion-card-header> Laboratoire </ion-card-header>\n    <ion-card-content>{{medicament.TITULAIRES }}</ion-card-content> \n  </ion-card>\n\n  <ion-card> \n    <ion-card-header> Voies d\'administration </ion-card-header>\n    <ion-card-content>{{medicament.VOIES_ADMINISTRATION }}</ion-card-content> \n  </ion-card>\n\n  <ion-card> \n    <ion-card-header> Forme </ion-card-header>\n    <ion-card-content>{{medicament.FORME_PHARMACEUTIQUE }}</ion-card-content> \n  </ion-card>\n\n\n  <ion-card> \n    <ion-card-header> DOSAGE </ion-card-header>\n    <ion-card>{{medicament.DOSAGE_SUBSTANCE }}</ion-card>   \n  </ion-card>\n\n\n\n\n\n\n\n\n<!-- DESIGNATION_ELEMENT_PHARMA -->\n<!-- DOSAGE_SUBSTANCE -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/zakaria/Documents/IonicTest/src/pages/medicament/medicament.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], MedicamentPage);
    return MedicamentPage;
}());

//# sourceMappingURL=medicament.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedikitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__medicament_medicament__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MedikitPage = (function () {
    function MedikitPage(platform, navCtrl, database) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.database = database;
        this.splash = true;
        this.medicaments = [];
    }
    MedikitPage.prototype.afficher = function (med) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__medicament_medicament__["a" /* MedicamentPage */], { medicament: med });
    };
    MedikitPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.database.getDatabaseState().subscribe(function (e) {
            if (e) {
                _this.database.execute("select id, date_expiration, nombre, DENOMINATION as name, LIBELLE_PRESENTATION as libelle from medicaments inner join CIS_BDPM inner join CIS_CIP_BDPM on medicaments.cip = CIS_CIP_BDPM.cip7 and CIS_BDPM.CIS = medicaments.cis ", {})
                    .then(function (e) {
                    _this.medicaments = new Array();
                    console.log(e.rows.length);
                    for (var i = 0; i < e.rows.length; i++) {
                        _this.medicaments.push(e.rows.item(i));
                    }
                }).catch(function (e) {
                    console.log(e);
                });
            }
        });
    };
    MedikitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-medikit',template:/*ion-inline-start:"/Users/zakaria/Documents/IonicTest/src/pages/medikit/medikit.html"*/'\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n      Mes médicaments\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-searchbar [(ngModel)]="searchText" animated=true autocomplete=true placeholder="Rechercher.."></ion-searchbar>  \n\n<!--   <ion-item *ngFor="let medicament of medicaments | filter : searchText">\n    <div class="item-content">\n        <h2><strong>{{ medicament.name }}</strong></h2>\n        <h3> <small> Expire dans {{ medicament.expiration }}</small></h3>\n    </div>\n\n  </ion-item> --> \n\n  <ion-scroll style="width:100%;height:80%" scrollY="true">\n    <ion-col scroll="true">\n      <ion-item *ngFor="let medicament of medicaments | filter : searchText">\n\n\n        <ion-card> \n          <ion-card-header> \n\n            <h2><ion-badge color=""> {{ medicament.nombre }}</ion-badge> <strong>{{ medicament.name }}</strong> </h2>\n          </ion-card-header>\n          <ion-card-content>  \n            <h3> <small>{{ medicament.libelle }}</small></h3>               \n            \n            <div style="padding: 10px 0px;clear:both;">\n              \n              <a (click)="afficher(medicament)" color="primary" style="float:left;" >\n                Details ...\n              </a>\n              <div text-right style="float:right">\n                <ion-badge color="primary" end> Expire le: {{ medicament.date_expiration }}</ion-badge>\n                \n              </div>\n            </div>\n\n          </ion-card-content> \n        </ion-card>\n\n      </ion-item>\n    </ion-col>\n  </ion-scroll>\n\n  <fab-button></fab-button>\n  \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/zakaria/Documents/IonicTest/src/pages/medikit/medikit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], MedikitPage);
    return MedikitPage;
}());

//# sourceMappingURL=medikit.js.map

/***/ })

},[478]);
//# sourceMappingURL=main.js.map