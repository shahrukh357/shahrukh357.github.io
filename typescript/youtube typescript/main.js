var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//define class.
var Youtube_TaylorSwift1 = /** @class */ (function () {
    function Youtube_TaylorSwift1(subscribe) {
        var _this = this;
        this.subscribe = subscribe;
        //getter called
        this.getdata = function () {
            return _this.subscribe;
        };
        this.subscribe = subscribe;
    }
    return Youtube_TaylorSwift1;
}()); //end of class
//class instance 
var TaylorSwift1 = new Youtube_TaylorSwift1('26,675,897');
console.log("TaylorSwift channel Subscribers =", TaylorSwift1.getdata());
//Extending The Class
var Look_what_u_made_me_do1 = /** @class */ (function (_super) {
    __extends(Look_what_u_made_me_do1, _super);
    function Look_what_u_made_me_do1(subscribe, VideoName, likes, views, published) {
        var _this = _super.call(this, subscribe) || this;
        _this.getSub = function () {
            return _this.subscribe;
        };
        _this.VideoName = VideoName;
        _this.likes = likes;
        _this.views = views;
        _this.published = published;
        return _this;
    }
    return Look_what_u_made_me_do1;
}(Youtube_TaylorSwift1)); //extended class end
//instance is created
var Song_Lookwhtmedo1 = new Look_what_u_made_me_do1("11,444,600", "Look what u made me do", "2.5M", "20M", "May 2017");
var Song_Delicate1 = new Look_what_u_made_me_do1("13,345,200", "Delicate", "90M", "600M", "May 2015");
console.log("Look what u made me do Subscribers = ", Song_Lookwhtmedo1.getSub());
console.log("Song Name = ", Song_Lookwhtmedo1.VideoName);
console.log("Likes= ", Song_Lookwhtmedo1.likes);
console.log("Views=", Song_Lookwhtmedo1.views);
console.log("Published On =", Song_Lookwhtmedo1.published);
console.log("Song Name = ", Song_Delicate1.VideoName);
console.log("Likes= ", Song_Delicate1.likes);
console.log("Views=", Song_Delicate1.views);
console.log("Published On =", Song_Delicate1.published);
//ExtendngG the CLASS:
var Sugarland1 = /** @class */ (function (_super) {
    __extends(Sugarland1, _super);
    function Sugarland1(subscribe, VideoName, likes, views, published) {
        var _this = _super.call(this, subscribe) || this;
        _this.artist = "ED SHEERAN";
        //getter is called
        _this.getvalue = function () {
            return _this.subscribe;
        };
        _this.VideoName = VideoName;
        _this.likes = likes;
        _this.views = views;
        _this.published = published;
        return _this;
    }
    return Sugarland1;
}(Youtube_TaylorSwift1));
var Song_Babe1 = new Sugarland1("123,768", "Babe", "4.M", "60M", "March 2015");
var Song_EndGame1 = new Sugarland1("345,345", "End_game", "11M", "1B", "Dec 2016");
console.log("Sugarland Subscribers : ", Song_Babe1.getvalue());
console.log("Song Name= ", Song_Babe1.VideoName);
console.log("Likes=", Song_Babe1.likes);
console.log("Views=", Song_Babe1.views);
console.log("Published On=", Song_Babe1.published);
console.log("Song Name = ", Song_EndGame1.VideoName);
console.log("Likes= ", Song_EndGame1.likes);
console.log("Views=", Song_EndGame1.views);
console.log("Published On =", Song_EndGame1.published);
