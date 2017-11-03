// 1. Simple Class, its property, method and its instantiation
//===================================================================
class One {
    balance: number = 5;

    deposite (creditAmount: number) {
        this.balance = this.balance + creditAmount;
        return this.balance;
    }
}
let obj1  = new One();
console.log("1. Simple Class -->" + obj1.deposite(10));

// 2. Class and its constructor
class Two {
    str: string;
    constructor(str: string) {
        this.str = str;
    }
    getStr() {
        return this.str;
    }
}
let obj2 = new Two("Hello");
console.log("2. Constructor -->" + obj2.getStr());

// 3. Inheritance
abstract class Animal {
    sound: string = "No voice yet..";

    getSound() {
        return "Say " + this.sound;
    }
}
class Cow extends Animal {
    constructor (){
        super();
        this.sound = "Moo";
    }
}
class Cat extends Animal {
    constructor() {
        super();
        this.sound = "Meawoo";
    }
}
// let animalObj = new Animal(); // This is a compile time error since Animal class is abstract
let catObj = new Cat();
let cowObj = new Cow();
console.log("3. Inheritance -->" + catObj.getSound());
console.log("3. Inheritance -->" + cowObj.getSound());

// 4. Instance and Static Members
class Four {
    x: number;
    static y: number;
}
let fourObj1 = new Four();
let fourObj2 = new Four();
fourObj1.x = 10;
Four.y = 20;
console.log("4. Instance & Static - obj1.x -->" + fourObj1.x);
console.log("4. Instance & Static - obj2.x -->" + fourObj2.x);
console.log("4. Instance & Static - obj1.y -->" + Four.y);

// 5. Private, protected and public mebmers
class Five {
    private a: number;
    protected b: number; // Only accessible inside child class
    public c: number;
    d: number; // default is public
    constructor() {
        this.a = 1;
        this.b = 2;
        this.c = 3;
        this.d = 4;
    }
}
class FifthChild extends Five{
    printValues() {
        // console.log(this.a); // Error
        console.log("5. Access specifier -->" + this.b); // Ok
    }
}

let fifthObj = new Five();
// console.log(fifthObj.a); // ERROR. Cannot access private member
// console.log(fifthObj.b); // ERROR. Cannot access protected member
console.log("5. Access specifier -->" + fifthObj.c);
console.log("5. Access specifier -->" + fifthObj.d);
let fifthChildObj = new FifthChild();
fifthChildObj.printValues();
