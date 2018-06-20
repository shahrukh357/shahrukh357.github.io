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
//define a class
var ProfilePage_AboutMe = /** @class */ (function () {
    function ProfilePage_AboutMe(Lives, hometown) {
        var _this = this;
        this.Lives = Lives;
        this.hometown = hometown;
        //getter method called.
        this.getdata = function () {
            return _this.Lives;
        };
        this.Lives = Lives;
        this.hometown = hometown;
    }
    return ProfilePage_AboutMe;
}()); //end class
// instance define
var City = new ProfilePage_AboutMe('Mumbai', 'Delhi');
//Extending The Class
var Basic_info = /** @class */ (function (_super) {
    __extends(Basic_info, _super);
    function Basic_info(Lives, Name, Gender, Languages, Birthday, Religion) {
        var _this = _super.call(this, Lives) || this;
        _this.getAge = function () {
            return _this.Birthday;
        };
        _this.Gender = Gender;
        _this.Languages = Languages;
        _this.Birthday = Birthday;
        _this.Name = Name;
        _this.Religion = Religion;
        return _this;
    } //getter method called.
    return Basic_info;
}(ProfilePage_AboutMe)); //end class
//define instance
var Tony_Stark = new Basic_info("Mumbai", "Tony Stark", "Male", "English,French", "4th,April 1965", "Christian");
var Sherlock_Holmes = new Basic_info("London", "Sherlock holmes", "Male", "English,spanish", "6th,January 1976", "Jews");
//ExtendiNG tHE cLASS:
var Relationship = /** @class */ (function (_super) {
    __extends(Relationship, _super);
    function Relationship(Lives, Status, Interested) {
        var _this = _super.call(this, Lives) || this;
        //getter method called.        
        _this.getStatus = function () {
            return _this.Status;
        };
        _this.Status = Status;
        _this.Interested = Interested;
        return _this;
    }
    return Relationship;
}(ProfilePage_AboutMe)); //end class
//define instance
var Tonyadd = new Relationship("Mumbai", "Complicated", "Women");
var Sherlockadd = new Relationship("London", "Single", "Women");
console.log("Name:", Tony_Stark.Name);
console.log("Lives in =", City.getdata());
console.log("Hometown:", City.hometown);
console.log("Tony_Stark Birthday ", Tony_Stark.getAge());
console.log("Gender = ", Tony_Stark.Gender);
console.log("Languages known= ", Tony_Stark.Languages);
console.log("Religious View=", Tony_Stark.Religion);
console.log("Tony_stark Relationship : ", Tonyadd.getStatus());
console.log("Interested In: ", Tonyadd.Interested);
console.log("Name:", Sherlock_Holmes.Name);
console.log("Lives in =", City.getdata());
console.log("Hometown:", City.hometown);
console.log("Sherlock_Holmes Birthday ", Sherlock_Holmes.getAge());
console.log("Gender = ", Sherlock_Holmes.Gender);
console.log("Languages known= ", Sherlock_Holmes.Languages);
console.log("Religious View=", Sherlock_Holmes.Religion);
console.log(" Sherlock_Holmes Relationship : ", Sherlockadd.getStatus());
console.log("Interested In: ", Sherlockadd.Interested);
