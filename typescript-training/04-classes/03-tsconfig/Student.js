"use strict";
class Student {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// let's create an instance
let myStudent = new Student("Vladut", "Margineanu");
// myStudent.firstName = "Vladut";
// myStudent.lastName = "Margineanu";
console.log(myStudent.firstName);
console.log(myStudent.lastName);
