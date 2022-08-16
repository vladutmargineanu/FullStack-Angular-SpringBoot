var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// let's create an instance
var myCustomer = new Customer("Vladut", "Margineanu");
// myCustomer.firstName = "Vladut";
// myCustomer.lastName = "Margineanu";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
