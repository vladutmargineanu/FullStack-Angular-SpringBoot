var Student = /** @class */ (function () {
    function Student(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Student.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
// let's create an instance
var myStudent = new Student("Vladut", "Margineanu");
// myStudent.firstName = "Vladut";
// myStudent.lastName = "Margineanu";
console.log(myStudent.firstName);
console.log(myStudent.lastName);
