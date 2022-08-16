class Student {
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

// let's create an instance
let myStudent = new Student("Vladut", "Margineanu");

// myStudent.firstName = "Vladut";
// myStudent.lastName = "Margineanu";

console.log(myStudent.firstName);
console.log(myStudent.lastName);