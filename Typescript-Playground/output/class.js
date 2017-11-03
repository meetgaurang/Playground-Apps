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
// 1. Simple Class, its property, method and its instantiation
//===================================================================
var One = /** @class */ (function () {
    function One() {
        this.balance = 5;
    }
    One.prototype.deposite = function (creditAmount) {
        this.balance = this.balance + creditAmount;
        return this.balance;
    };
    return One;
}());
var obj1 = new One();
console.log("1. Simple Class -->" + obj1.deposite(10));
// 2. Class and its constructor
var Two = /** @class */ (function () {
    function Two(str) {
        this.str = str;
    }
    Two.prototype.getStr = function () {
        return this.str;
    };
    return Two;
}());
var obj2 = new Two("Hello");
console.log("2. Constructor -->" + obj2.getStr());
// 3. Inheritance
var Animal = /** @class */ (function () {
    function Animal() {
        this.sound = "No voice yet..";
    }
    Animal.prototype.getSound = function () {
        return "Say " + this.sound;
    };
    return Animal;
}());
var Cow = /** @class */ (function (_super) {
    __extends(Cow, _super);
    function Cow() {
        var _this = _super.call(this) || this;
        _this.sound = "Moo";
        return _this;
    }
    return Cow;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super.call(this) || this;
        _this.sound = "Meawoo";
        return _this;
    }
    return Cat;
}(Animal));
// let animalObj = new Animal(); // This is a compile time error since Animal class is abstract
var catObj = new Cat();
var cowObj = new Cow();
console.log("3. Inheritance -->" + catObj.getSound());
console.log("3. Inheritance -->" + cowObj.getSound());
// 4. Instance and Static Members
var Four = /** @class */ (function () {
    function Four() {
    }
    return Four;
}());
var fourObj1 = new Four();
var fourObj2 = new Four();
fourObj1.x = 10;
Four.y = 20;
console.log("4. Instance & Static - obj1.x -->" + fourObj1.x);
console.log("4. Instance & Static - obj2.x -->" + fourObj2.x);
console.log("4. Instance & Static - obj1.y -->" + Four.y);
// 5. Private, protected and public mebmers
var Five = /** @class */ (function () {
    function Five() {
        this.a = 1;
        this.b = 2;
        this.c = 3;
        this.d = 4;
    }
    return Five;
}());
var FifthChild = /** @class */ (function (_super) {
    __extends(FifthChild, _super);
    function FifthChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FifthChild.prototype.printValues = function () {
        // console.log(this.a); // Error
        console.log("5. Access specifier -->" + this.b); // Ok
    };
    return FifthChild;
}(Five));
var fifthObj = new Five();
// console.log(fifthObj.a); // ERROR. Cannot access private member
// console.log(fifthObj.b); // ERROR. Cannot access protected member
console.log("5. Access specifier -->" + fifthObj.c);
console.log("5. Access specifier -->" + fifthObj.d);
var fifthChildObj = new FifthChild();
fifthChildObj.printValues();
