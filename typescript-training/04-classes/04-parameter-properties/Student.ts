class Student {

    constructor(private _firstName: string, private _lastName: string) {

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

console.log(myStudent.firstName);
console.log(myStudent.lastName);