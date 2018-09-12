(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n    \n    display: block;\n    padding: 2%;\n    font-size: 26px;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <div class=\"container\">\n     <div class=\"row header\">\n       <div class=\"col-md-12\">\n          <b>Game Of Thrones</b>\n       </div>\n     </div>\n     <!-- Go Back button begins -->\n    <div class=\"row\" style=\"margin-top: 2%\">\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"goBackToPreviousPage()\">Return</button>\n      </div>\n    </div>\n     <!-- Go Back button ends -->\n  </div>\n</div>\n<br/>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(previousPage) {
        this.previousPage = previousPage;
        this.title = 'app';
        console.log("App constructor called.");
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.goBackToPreviousPage = function () {
        this.previousPage.back();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./got-http.service */ "./src/app/got-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                //routerModule forRoot method to declare the possible routes in application
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'details', component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"] },
                    { path: 'books', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: 'houses', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: 'characters', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
                    { path: 'books/:bookId', component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"] },
                    { path: 'characters/:characterId', component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"] },
                    { path: 'houses/:houseId', component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"] },
                    { path: '**', redirectTo: 'home' }
                ], { useHash: true })
            ],
            providers: [_got_http_service__WEBPACK_IMPORTED_MODULE_7__["GotHttpservice"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n<!--Container for Book starts-->\n      <div class=\"container\" *ngIf=\"currentBook\" style=\"color:white;word-wrap: break-word;background:black \">\n        <div class=\"row\">\n            <div class=\"col-md-12\" style=\"text-align:center;padding-top:2%\">\n                <h3> {{currentBook.name}}</h3>\n            </div>\n        </div> \n        <br><br>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n              <img src=\".\\assets\\book.jpg\" style=\"height:100%;width:80%;border-radius:4px;box-shadow: 0px 3px 20px 2px white\">\n            </div>\n          <div class=\"col-md-4\" style=\"padding-left:3%;\">\n            <div style=\"padding-top:7%;\"><p><b>ISBN:</b> {{currentBook.isbn}}</p></div>\n            <div><p><b>No. Of Pages:</b> {{currentBook.numberOfPages}}</p></div>\n            <div><p><b>Publisher:</b> {{currentBook.publisher}}</p></div>\n          </div>\n          <div class=\"col-md-5\">\n              <div><p><b>Country:</b> {{currentBook.country}}</p></div>\n              <div><p><b>Media Type:</b> {{currentBook.mediaType}}</p></div>\n              <div><p><b>Released:</b> {{currentBook.released | date}}</p></div>\n              <div><p><b>Authors:</b> {{currentBook.authors}}</p></div>\n          </div>\n        </div> \n\n        <hr style=\"background-color: white\">\n        <div class=\"row\" style=\"text-align:center;\">\n          <div class=\"col-md-12\"><p><b>Characters:</b> {{currentBook.characters}}</p></div>\n        </div> \n        <div class=\"row\" style=\"text-align:center;\">\n          <div class=\"col-md-12\"><p><b>Pov Characters:</b> {{currentBook.povCharacters}}</p></div>\n        </div> \n      </div>    \n<!--Book Container  ends here-->\n\n\n<!--Character Container starts here -->\n        <div class=\"container\" *ngIf=\"currentCharacter\"  style=\"color:white;word-wrap: break-word; background:black\">\n          <div class=\"row\">\n            <div class=\"col-md-12\" style=\"text-align:center;padding-top:2%\">\n              <h3>Character Name: {{currentCharacter.name}}</h3>\n            </div>\n          </div>\n          <br><br>\n          <div class=\"row\">\n              <div class=\"col-md-3\">\n                <img src=\".\\assets\\character.jpg\" style=\"height:100%;width:100%;border-radius:4px;box-shadow: 0px 3px 20px 2px white\">\n              </div>\n            <div class=\"col-md-4\" style=\"padding-left:3%;\">\n              <div style=\"padding-top:7%;\"><p><b>Gender:</b> {{currentCharacter.gender}}</p></div>\n              <div><p><b>Birth:</b> {{currentCharacter.born}}</p></div>\n              <div><p><b>Death:</b> {{currentCharacter.died}}</p></div>\n            </div>\n            <div class=\"col-md-5\">\n                <div><p><b>Culture:</b> {{currentCharacter.culture}}</p></div>\n                <div><p><b>Father:</b> {{currentCharacter.father}}</p></div>\n                <div><p><b>Mother:</b> {{currentCharacter.mother}}</p></div>\n                <div><p><b>Spouse:</b> {{currentCharacter.spouse}}</p></div>\n                <div><p><b>Played By:</b> {{currentCharacter.playedBy}}</p></div>\n            </div>\n          </div> \n          <hr style=\"background-color: white\">\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Titles:</b> {{currentCharacter.titles}}</p></div>\n          </div>\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Aliases:</b> {{currentCharacter.aliases}}</p></div>\n          </div> \n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Allegiances:</b> {{currentCharacter.allegiances}}</p></div>\n          </div> \n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Pov Books:</b> {{currentCharacter.povBooks}}</p></div>\n          </div> \n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>TV Series:</b> {{currentCharacter.books}}</p></div>\n          </div><div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>TV Series:</b> {{currentCharacter.tvSeries}}</p></div>\n          </div>\n        </div>\n<!--Character Container ends here-->\n\n<!--house container start here-->\n      <div class=\"container\" *ngIf=\"currentHouse\"  style=\"color:white;word-wrap: break-word; background:black\">\n          <div class=\"row\">\n            <div class=\"col-md-12\" style=\"text-align:center;padding-top:2%\">\n              <h3>{{currentHouse.name}}</h3>\n            </div>\n          </div><!--row 1 ends-->\n          <br><br>\n          <div class=\"row\">\n              <div class=\"col-md-3\">\n                <img src=\".\\assets\\houses.jpg\" style=\"height:100%;width:80%;border-radius:4px;box-shadow: 0px 3px 20px 2px white\">\n              </div>\n            <div class=\"col-md-4\" style=\"padding-left:3%;\">\n              <div style=\"padding-top:7%;\"><p><b>Region:</b> {{currentHouse.region}}</p></div>\n              <div><p><b>Current Lord:</b> {{currentHouse.currentLord}}</p></div>\n              <div><p><b>Heir:</b> {{currentHouse.heir}}</p></div>\n            </div>\n            <div class=\"col-md-5\">\n                <div><p><b>Founded:</b> {{currentHouse.founded}}</p></div>\n                <div><p><b>Founder:</b> {{currentHouse.founder}}</p></div>\n                <div><p><b>Died Out:</b> {{currentHouse.diedOut}}</p></div>\n                <div><p><b>Words:</b> {{currentHouse.words}}</p></div>\n                <div><p><b>Over Lord:</b> {{currentHouse.overlord}}</p></div>\n            </div>\n          </div> \n          <hr style=\"background-color: white\">\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Titles:</b> {{currentHouse.titles}}</p></div>\n          </div> \n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Seats:</b> {{currentHouse.seats}}</p></div>\n          </div> \n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Ancestral Weapons:</b> {{currentHouse.ancestralWeapons}}</p></div>\n          </div> \n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Cadet Branches:</b> {{currentHouse.cadetBranches}}</p></div>\n          </div>\n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Sworn Members:</b> {{currentHouse.swornMembers}}</p></div>\n          </div> \n          <div class=\"row\" style=\"text-align:center;\">\n            <div class=\"col-md-12\"><p><b>Coat Of Arms:</b> {{currentHouse.coatOfArms}}</p></div>\n          </div> \n        </div>\n<!-- House Container  ends here -->\n\n<!--footer starts-->\n<footer class=\"footer\" style=\"padding-top:5%;\">\n  <div class=\"container text-center\">\n      <span class=\"text-muted\">&copy; Copyright 2018. All Rights Reserved.</span>\n  </div>\n</footer>\n<!--footer ends-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../got-http.service */ "./src/app/got-http.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_route, router, gotHttpService) {
        this._route = _route;
        this.router = router;
        this.gotHttpService = gotHttpService;
        console.log("Details constructor is called.");
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Details onInit is called.");
        //for books
        var bookId = this._route.snapshot.paramMap.get('bookId');
        console.log(bookId);
        this.gotHttpService.getSingleBookInfo(bookId).subscribe(function (data) {
            console.log("Books data");
            console.log(data);
            _this.currentBook = data;
            for (var item in _this.currentBook) {
                if (_this.currentBook[item] == "") {
                    _this.currentBook[item] = "N/A";
                }
            }
            setTimeout(function () {
                console.log("check response");
            }, 3000);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        //for characters
        var characterId = this._route.snapshot.paramMap.get('characterId');
        console.log(characterId);
        this.gotHttpService.getSingleCharacterInfo(characterId).subscribe(function (data) {
            console.log("Characters data");
            console.log(data);
            _this.currentCharacter = data;
            for (var item in _this.currentCharacter) {
                if (_this.currentCharacter[item] == "") {
                    _this.currentCharacter[item] = "N/A";
                }
            }
            setTimeout(function () {
                console.log("check response");
            }, 3000);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
        //for houses
        var houseId = this._route.snapshot.paramMap.get('houseId');
        console.log(houseId);
        this.gotHttpService.getSingleHouseInfo(houseId).subscribe(function (data) {
            console.log("Houses data");
            console.log(data);
            _this.currentHouse = data;
            for (var item in _this.currentHouse) {
                if (_this.currentHouse[item] == "") {
                    _this.currentHouse[item] = "N/A";
                }
            }
            setTimeout(function () {
                console.log("check response");
            }, 3000);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _got_http_service__WEBPACK_IMPORTED_MODULE_1__["GotHttpservice"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/got-http.service.ts":
/*!*************************************!*\
  !*** ./src/app/got-http.service.ts ***!
  \*************************************/
/*! exports provided: GotHttpservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GotHttpservice", function() { return GotHttpservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import'rxjs/add/operator/catch';
//import'rxjs/add/operator/do';
var GotHttpservice = /** @class */ (function () {
    function GotHttpservice(_http) {
        this._http = _http;
        this.baseUrl = 'https://www.anapioficeandfire.com/api';
        console.log("GotHttpService is called.");
    }
    //exception handler
    GotHttpservice.prototype.handleError = function (err) {
        console.log("Handle error Http calls");
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    GotHttpservice.prototype.getAllBooks = function () {
        var bookResponse = this._http.get(this.baseUrl + '/books');
        console.log(bookResponse);
        return bookResponse;
    }; // end get all books 
    GotHttpservice.prototype.getAllCharacters = function () {
        var characterResponse = this._http.get(this.baseUrl + '/characters');
        console.log(characterResponse);
        return characterResponse;
    }; // end get all characters
    GotHttpservice.prototype.getAllHouses = function () {
        var houseResponse = this._http.get(this.baseUrl + '/houses');
        console.log(houseResponse);
        return houseResponse;
    }; // end get all houses
    GotHttpservice.prototype.getSingleBookInfo = function (bookId) {
        var myResponse1 = this._http.get(this.baseUrl + '/books' + '/' + bookId);
        return myResponse1;
    }; //end get single Book info
    GotHttpservice.prototype.getSingleCharacterInfo = function (characterId) {
        var myResponse2 = this._http.get(this.baseUrl + '/characters' + '/' + characterId);
        return myResponse2;
    }; //end get single character info
    GotHttpservice.prototype.getSingleHouseInfo = function (houseId) {
        var myResponse3 = this._http.get(this.baseUrl + '/houses' + '/' + houseId);
        return myResponse3;
    }; //end get single house info
    GotHttpservice = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GotHttpservice);
    return GotHttpservice;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-data{\n    text-align:center;\n    margin-bottom:13%;\n}\n\n.bookCard{\n    background-image: linear-gradient(red,white);\n    margin-top:7%;\n    box-shadow: 0px 3px 20px 2px white\n}\n\n.characterCard{\n    background-image: linear-gradient(blue,white);\n    margin-top:7%;\n    box-shadow: 0px 3px 20px 2px white\n}\n\n.houseCard{\n    background-image: linear-gradient(green,white);\n    margin-top:7%;\n    box-shadow: 0px 3px 20px 2px white\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\" background:black\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div *ngFor=\"let item of allItems\" class=\"col-md-4\">\n          <!--Book Card starts here-->\n\n            <div *ngIf=\"item.isbn\" class=\"card bookCard\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title card-data\">{{item.name}}</h5>\n                <p class=\"card-text\"><b>Published By: </b>{{item.publisher}}</p>\n                <p class=\"card-text\"><b>Released On: </b>{{item.released | date}}</p>\n                <a [routerLink]=\"['/books',item.url.split('books/').pop()]\" href=\"\" class=\"btn btn-danger mybutton\" style=\"margin-left:35%\">Know More</a>\n              </div>\n            </div>\n\n          <!--Book Card ends here-->\n          <!--Character Card starts here-->\n\n          <div *ngIf=\"item.gender\" class=\"card characterCard\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title card-data\">{{item.name}}</h5>\n              <p class=\"card-text\"><b>Gender: </b>{{item.gender}}</p>\n              <p class=\"card-text\"><b>Aliases: </b>{{item.aliases}}</p>\n              <a [routerLink]=\"['/characters',item.url.split('characters/').pop()]\" href=\"\" class=\"btn btn-primary\" style=\"margin-left:35%\">Know More</a>\n            </div>\n          </div>\n\n          <!--Character Card ends here-->\n          <!--House Card starts here-->\n\n          <div *ngIf=\"item.region\" class=\"card houseCard\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title card-data\">{{item.name}}</h5>\n              <p class=\"card-text\"><b>Region: </b>{{item.region}}</p>\n              <p class=\"card-text text-truncate\"><b>Coat Of Arms: </b>{{item.coatOfArms}}</p>\n              <a [routerLink]=\"['/houses',item.url.split('houses/').pop()]\" href=\"\" class=\"btn btn-success\" style=\"margin-left:35%\">Know More</a>\n            </div>\n          </div>\n\n          <!--House Card ends here-->\n    </div>\n  </div>\n  <hr>\n</div>\n\n<!--footer-->\n<footer class=\"footer\" style=\"padding-top:5%;\">\n    <div class=\"container text-center\">\n        <span class=\"text-muted\">&copy; Copyright 2018. All Rights Reserved.</span>\n    </div>\n</footer>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../got-http.service */ "./src/app/got-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(gameHttpService) {
        this.gameHttpService = gameHttpService;
        this.allBooks = [];
        this.allCharacters = [];
        this.allHouses = [];
        this.allItems = [];
        console.log("Home component constructor is called.");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Home component onInit is called.");
        //for books
        this.allBooks = this.gameHttpService.getAllBooks().subscribe(function (data) {
            console.log("logging of data");
            console.log(data);
            _this.allBooks = data;
            _this.allBooks.sort(function (a, b) { return a.name.localeCompare(b.name); }); //to sort books alphabetically
            _this.allItems = _this.allItems.concat(_this.allBooks);
            console.log("All the details are:" + _this.allItems);
        }, function (error) {
            console.log("some error has occured");
            console.log(error.errorMessage);
        });
        console.log(this.allBooks);
        // for characters
        this.allCharacters = this.gameHttpService.getAllCharacters().subscribe(function (data) {
            console.log("logging of  data");
            console.log(data);
            _this.allCharacters = data;
            _this.allCharacters.sort(function (a, b) { return a.name.localeCompare(b.name); }); //to sort characters alphabetically
            _this.allItems = _this.allItems.concat(_this.allCharacters);
            for (var _i = 0, _a = _this.allItems; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.name == "") {
                    item.name = "Character Name: N/A";
                }
            }
            console.log("All the  details :" + _this.allItems);
        }, function (error) {
            console.log("some error has occured");
            console.log(error.errorMessage);
        });
        console.log(this.allCharacters);
        // for houses
        this.allHouses = this.gameHttpService.getAllHouses().subscribe(function (data) {
            console.log("logging of data");
            console.log(data);
            _this.allHouses = data;
            _this.allHouses.sort(function (a, b) { return a.name.localeCompare(b.name); }); //to sort houses alphabetically
            _this.allItems = _this.allItems.concat(_this.allHouses);
            console.log("All  the details :" + _this.allItems);
            for (var _i = 0, _a = _this.allItems; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.coatOfArms == "") {
                    item.coatOfArms = "N/A";
                }
            }
        }, function (error) {
            console.log("some error has occured");
            console.log(error.errorMessage);
        });
        console.log(this.allHouses);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log("Home component is destroyed.");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_got_http_service__WEBPACK_IMPORTED_MODULE_1__["GotHttpservice"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zulfikar\Downloads\GOT-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map