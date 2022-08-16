var reviews = [5, 5, 4.5, 1, 3];
var sum = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    sum += reviews[i];
}
var average = sum / reviews.length;
console.log("Review average = " + average);
